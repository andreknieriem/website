---
title: 'TYPO3: Filter in TCA Typ Group verwenden'
date: '2017-05-03T22:00:00.000Z'
slug: typo3-filter-in-tca-typ-group-verwenden
tags:
  - typo3
  - tca
  - group
  - filter
  - example
  - tutorial
description: "Neulich habe ich das erste Mal gemerkt, dass man beim TCA Typ &quot;group&quot; nicht die Möglichkeit hat &quot;foreign_table_where&quot; zu verwenden, wie beim Typ &quot;select&quot;. Das brachte die Schwierigkeit mit sich, dass ich eine Möglichkeit gesucht habe, den Benutzer daran zu hindern bestimmte Records auszuwählen, die nicht meinen Anforderungen entsprachen. Hierfür habe ich dann die Option &quot;Filter&quot; benutzt. \r\nDiese ermöglicht es einem, eine Userfunc zu übergeben, welche dann die Liste filtert. Leider ist die Dokumentation etwas spärlich und nach mehreren Versuchen habe ich letztendlich geschafft, den Filter zu bauen.\r\nHier das TCA ...\r\n'product' =&gt; [\r\n      'exclude' =&gt; 1,\r\n      'label' =&gt; 'LLL:EXT:ar_extension/Resources/Private/Language/locallang.xlf:product',\r\n      'config' =&gt; [\r\n        'type' =&gt; 'group',\r\n        'internal_type' =&gt; 'db',\r\n        'allowed' =&gt; 'tx_arext_product',\r\n        'foreign_table' =&gt; 'tx_arext_product',\r\n        'filter' =&gt; [\r\n          [\r\n            'userFunc' =&gt; 'AR\\ArExt\\User\\ProductFilter-&gt;doFilter',\r\n            'parameters' =&gt; [\r\n              // Paramter als Array, die man im Filter benutzen kann\r\n            ]\r\n          ]\r\n        ],\r\n        'size' =&gt; 1,\r\n        'maxitems' =&gt; 1,\r\n        'minitems' =&gt; 0\r\n      ]\r\n    ],\r\n... Hier die Userfunc\r\nZur Info: Das Array Parameters ist immer mindestens mit dem Key values belegt. &lt;?php\r\n\r\nnamespace AR\\ArExt\\User;\r\n\r\nclass ProductFilter {\r\n\r\n  public function doFilter(array $parameters, $parentObject) {\r\n    $values = $parameters['values'];\r\n    $cleanValues = array();\r\n    if (is_array($values)) {\r\n      foreach ($values as $value) {\r\n        if (empty($value)) {\r\n          continue;\r\n        }\r\n        $parts = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::revExplode('_', $value, 2);\r\n        $productUid = $parts[count($parts) - 1];\r\n        $product = \\TYPO3\\CMS\\Backend\\Utility\\BackendUtility::getRecord('tx_arext_product',$productUid);\r\n        if ($product['type'] == 'standard') {\r\n          $cleanValues[] = $value;\r\n        }\r\n      }\r\n    }\r\n    return $cleanValues;\r\n  }\r\n} Der Filter macht nicht mehr, als alle gegebenen Records darauf zu testen, ob sie vom Typ Standard sind. Hier kann man natürlich machen, was man braucht."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Neulich habe ich das erste Mal gemerkt, dass man beim TCA Typ "group" nicht die Möglichkeit hat "foreign\_table\_where" zu verwenden, wie beim Typ "select". Das brachte die Schwierigkeit mit sich, dass ich eine Möglichkeit gesucht habe, den Benutzer daran zu hindern bestimmte Records auszuwählen, die nicht meinen Anforderungen entsprachen. Hierfür habe ich dann die Option "Filter" benutzt.

Diese ermöglicht es einem, eine Userfunc zu übergeben, welche dann die Liste filtert. Leider ist die Dokumentation etwas spärlich und nach mehreren Versuchen habe ich letztendlich geschafft, den Filter zu bauen.

**Hier das TCA**

```php
...
'product' => [
      'exclude' => 1,
      'label' => 'LLL:EXT:ar_extension/Resources/Private/Language/locallang.xlf:product',
      'config' => [
        'type' => 'group',
        'internal_type' => 'db',
        'allowed' => 'tx_arext_product',
        'foreign_table' => 'tx_arext_product',
        'filter' => [
          [
            'userFunc' => 'AR\ArExt\User\ProductFilter->doFilter',
            'parameters' => [
              // Paramter als Array, die man im Filter benutzen kann
            ]
          ]
        ],
        'size' => 1,
        'maxitems' => 1,
        'minitems' => 0
      ]
    ],
...
```

**Hier die Userfunc**

Zur Info: Das Array Parameters ist immer mindestens mit dem Key values belegt.

```php
<?php

namespace AR\ArExt\User;

class ProductFilter {

  public function doFilter(array $parameters, $parentObject) {
    $values = $parameters['values'];
    $cleanValues = array();
    if (is_array($values)) {
      foreach ($values as $value) {
        if (empty($value)) {
          continue;
        }
        $parts = \TYPO3\CMS\Core\Utility\GeneralUtility::revExplode('_', $value, 2);
        $productUid = $parts[count($parts) - 1];
        $product = \TYPO3\CMS\Backend\Utility\BackendUtility::getRecord('tx_arext_product',$productUid);
        if ($product['type'] == 'standard') {
          $cleanValues[] = $value;
        }
      }
    }
    return $cleanValues;
  }
}
```

Der Filter macht nicht mehr, als alle gegebenen Records darauf zu testen, ob sie vom Typ Standard sind. Hier kann man natürlich machen, was man braucht.