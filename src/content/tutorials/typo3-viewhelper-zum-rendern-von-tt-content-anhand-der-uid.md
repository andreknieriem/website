---
title: 'TYPO3: ViewHelper zum rendern von tt_content anhand der Uid'
date: '2017-05-27T22:00:00.000Z'
slug: typo3-viewhelper-zum-rendern-von-tt-content-anhand-der-uid
tags:
  - typo3
  - ' 8lts'
  - ' tt_content'
  - output
  - viewhelper
  - render
description: "Um in Fluid tt_content Elemente anhand ihrer UID fertig gerendert auszugeben, benötigt man einen kleinen ViewHelper. Dieser ruft das RecordsContentObject auf und rendert dieses anhand einer Konfiguration heraus. In diesem Beispiel funktioniert das Ganze mit tt_content und der Uid eines tt_content Datensatzes.\r\nDer ViewHelper Code: &lt;?php\r\nnamespace Vendor\\Artest\\ViewHelpers;\r\n/**\r\n * ViewHelper zur Rückgabe eines geparsten tt_content Elementes\r\n */\r\n\r\nclass ContentViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper {\r\n  // output html since TYPO3 8LTS\r\n  protected $escapeOutput = false;\r\n\r\n  /**\r\n   * Parse content element\r\n   *\r\n   * @param  int     UID des Content Element\r\n   * @return   string  Geparstes Content Element\r\n   */\r\n  public function render($uid) {\r\n    $conf = array( // config\r\n      'tables' =&gt; 'tt_content',\r\n      'source' =&gt; $uid,\r\n      'dontCheckPid' =&gt; 1\r\n    );\r\n    return $this-&gt;objectManager-&gt;get('TYPO3\\CMS\\Frontend\\ContentObject\\RecordsContentObject')-&gt;render($conf);\r\n  }\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Um in Fluid tt\_content Elemente anhand ihrer UID fertig gerendert auszugeben, benötigt man einen kleinen ViewHelper. Dieser ruft das RecordsContentObject auf und rendert dieses anhand einer Konfiguration heraus. In diesem Beispiel funktioniert das Ganze mit tt\_content und der Uid eines tt\_content Datensatzes.

**Der ViewHelper Code:**

```
<?php
namespace Vendor\Artest\ViewHelpers;
/**
 * ViewHelper zur Rückgabe eines geparsten tt_content Elementes
 */

class ContentViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
  // output html since TYPO3 8LTS
  protected $escapeOutput = false;

  /**
   * Parse content element
   *
   * @param  int     UID des Content Element
   * @return   string  Geparstes Content Element
   */
  public function render($uid) {
    $conf = array( // config
      'tables' => 'tt_content',
      'source' => $uid,
      'dontCheckPid' => 1
    );
    return $this->objectManager->get('TYPO3\CMS\Frontend\ContentObject\RecordsContentObject')->render($conf);
  }
}
```