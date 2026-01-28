---
title: 'TYPO3 8LTS: ViewHelper Default Escaping ausschalten'
date: '2017-05-24T22:00:00.000Z'
slug: typo3-8lts-viewhelper-default-escaping-ausschalten
tags:
  - typo3 8
  - 8lts
  - viewhelper
  - escape
  - html
  - specialchars
  - output
description: "Seit TYPO3 8LTS werden ViewHelper die \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper extenden standardmäßig mit&nbsp;htmlspecialchars escaped. Dadurch bekommt man keine HTML Ausgabe hin. Das Ganze lässt sich aber relativ schnell und schmerzfrei ausschalten. Dafür könnte man von \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractTagBasedViewHelper extenden oder einfach&nbsp;protected $escapeOutput = false; in den ViewHelper schreiben. \r\nSiehe folgendes Beispiel: &lt;?php\r\nnamespace Vendor\\ArTest\\ViewHelpers;\r\n\r\nclass YourViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper{\r\n\r\n  /**\r\n    * As this ViewHelper renders HTML, the output must not be escaped.\r\n    *\r\n    * @var bool\r\n    */\r\n  protected $escapeOutput = false; Das wars auch schon."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Seit TYPO3 8LTS werden ViewHelper die \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper extenden standardmäßig mit `htmlspecialchars` escaped. Dadurch bekommt man keine HTML Ausgabe hin. Das Ganze lässt sich aber relativ schnell und schmerzfrei ausschalten. Dafür könnte man von `\TYPO3\CMS\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper` extenden oder einfach `protected $escapeOutput = false;` in den ViewHelper schreiben.

Siehe folgendes Beispiel:

```javascript
<?php
namespace Vendor\ArTest\ViewHelpers;

class YourViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper{

  /**
    * As this ViewHelper renders HTML, the output must not be escaped.
    *
    * @var bool
    */
  protected $escapeOutput = false;
```

Das wars auch schon.