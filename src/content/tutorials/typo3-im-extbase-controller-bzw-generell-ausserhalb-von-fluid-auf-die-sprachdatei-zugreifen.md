---
title: >-
  TYPO3: Im Extbase-Controller, bzw. generell außerhalb von Fluid auf die
  Sprachdatei zugreifen
date: '2015-09-08T17:02:06.000Z'
slug: >-
  typo3-im-extbase-controller-bzw-generell-ausserhalb-von-fluid-auf-die-sprachdatei-zugreifen
tags:
  - php
  - language
  - typo3
  - extbase
  - model
  - xlif
  - xml
  - controller
description: "Muss man auch außerhalb von Fluid auf Labels zugreifen, so kann man einfach den folgenden Aufruf verwenden. Er funktioniert genau wie der Viewhelper, da dieser nichts anderes tut, als diese Funktion aufzurufen. \r\n\\TYPO3\\CMS\\Extbase\\Utility\\LocalizationUtility::translate( 'lsLanguageKey', 'extensionname' , array() );\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Muss man auch außerhalb von Fluid auf Labels zugreifen, so kann man einfach den folgenden Aufruf verwenden. Er funktioniert genau wie der Viewhelper, da dieser nichts anderes tut, als diese Funktion aufzurufen.

```php

\TYPO3\CMS\Extbase\Utility\LocalizationUtility::translate( 'lsLanguageKey', 'extensionname' , array() );

```