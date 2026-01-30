---
title: 'TYPO3: in_array ViewHelper'
date: '2017-05-09T22:00:00.000Z'
slug: typo3-in-array-viewhelper
tags: []
description: "Da in Fluid Standard-ViewHelper leider der in_array ViewHelper fehlt, habe ich mir diesen schnell selbst geschrieben. Hier ist der ViewHelper samt Beispiel zur Benutzung. &lt;?php\r\nnamespace Vendor\\Ext\\ViewHelpers;\r\n\r\nclass InArrayViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractConditionViewHelper {\r\n\r\n  public function initializeArguments() {\r\n    parent::initializeArguments();\r\n    $this-&gt;registerArgument('haystack', 'mixed', 'View helper haystack ', TRUE);\r\n    $this-&gt;registerArgument('needle', 'string', 'View helper needle', TRUE);\r\n  }\r\n\r\n  // php in_array viewhelper\r\n  public function render() {  \r\n    \r\n    $needle = $this-&gt;arguments['needle'];\r\n    $haystack = $this-&gt;arguments['haystack'];\r\n      \r\n\r\n    if(!is_array($haystack)) { \r\n      return $this-&gt;renderElseChild();\r\n    }\r\n\r\n    if(in_array($needle, $haystack)) {\r\n      return $this-&gt;renderThenChild();\r\n    } else {\r\n      return $this-&gt;renderElseChild();\r\n    }   \r\n  }\r\n} Benutzung geht dann beispielsweise so:\r\n{namespace test=Vendor\\Ext\\ViewHelpers}\r\n&lt;test:inArray haystack=\"{week}\" needle=\"mittwoch\"&gt;\r\n  &lt;f:then&gt;\r\n    in array\r\n  &lt;/f:then&gt;\r\n  &lt;f:else&gt;\r\n    not in array\r\n  &lt;/f:else&gt;\r\n&lt;/test:inArray&gt;\r\n\r\n\r\n// inline\r\n{test:inArray(haystack:'{week}',needle:'mittwoch',then:'in array',else:'')}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Da in Fluid Standard-ViewHelper leider der in\_array ViewHelper fehlt, habe ich mir diesen schnell selbst geschrieben. Hier ist der ViewHelper samt Beispiel zur Benutzung.

```php
<?php
namespace Vendor\Ext\ViewHelpers;

class InArrayViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {

  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('haystack', 'mixed', 'View helper haystack ', TRUE);
    $this->registerArgument('needle', 'string', 'View helper needle', TRUE);
  }

  // php in_array viewhelper
  public function render() {  
    
    $needle = $this->arguments['needle'];
    $haystack = $this->arguments['haystack'];
      

    if(!is_array($haystack)) { 
      return $this->renderElseChild();
    }

    if(in_array($needle, $haystack)) {
      return $this->renderThenChild();
    } else {
      return $this->renderElseChild();
    }   
  }
}
```

**Benutzung geht dann beispielsweise so:**  

```html
{namespace test=Vendor\Ext\ViewHelpers}
<test:inArray haystack="{week}" needle="mittwoch">
  <f:then>
    in array
  </f:then>
  <f:else>
    not in array
  </f:else>
</test:inArray>


// inline
{test:inArray(haystack:'{week}',needle:'mittwoch',then:'in array',else:'')}
```
