---
title: 'TYPO3: In Extension 404 Seite werfen'
date: '2017-03-14T23:00:00.000Z'
slug: typo3-in-extension-404-seite-werfen
tags:
  - typo3
  - '404'
  - extension
  - plugin
  - extbase
  - tsfe
description: "Nach langer Suche habe ich eine sehr simple Möglichkeit gefunden, wie man aus Extensions einfach 404 Seiten werfen kann. Das will ich euch natürlich nicht vorenthalten. \r\npublic function detailAction(){\r\n  if(!isset($_GET['item'])) {\r\n    // 404 Fehler werfen\r\n    $GLOBALS['TSFE']-&gt;pageNotFoundAndExit('');\r\n  }\r\n} Das ist auch schon alles. Man kann direkt aus $Globals['TSFE'] die 404 Seite aufrufen."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Nach langer Suche habe ich eine sehr simple Möglichkeit gefunden, wie man aus Extensions einfach 404 Seiten werfen kann. Das will ich euch natürlich nicht vorenthalten.

```php

public function detailAction(){
  if(!isset($_GET['item'])) {
    // 404 Fehler werfen
    $GLOBALS['TSFE']->pageNotFoundAndExit('');
  }
}
```

Das ist auch schon alles. Man kann direkt aus $Globals\['TSFE'\] die 404 Seite aufrufen.