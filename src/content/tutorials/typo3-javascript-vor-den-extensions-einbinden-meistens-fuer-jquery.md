---
title: 'TYPO3: Javascript vor den Extensions einbinden (meistens für jQuery)'
date: '2015-04-21T16:04:06.000Z'
slug: typo3-javascript-vor-den-extensions-einbinden-meistens-fuer-jquery
tags:
  - jquery
  - typo3
  - includejs
  - includejsfooter
  - force
  - load
  - first
description: "Manchmal kommt es vor, dass das Javascript von Extensions schon vor dem eigenen Javascript geladen wird. Dies ist im Falle von jQuery natürlich fatal, da dann keine einzige Funktion mehr geht und es den Fehler gibt, dass $ nicht definiert ist. Mit dem folgenden Code kann man Skripte zwingen oben geladen zu werden. \r\npage.includeJSFooter {\r\n    jquery = fileadmin/templates/js/jquery-1.11.2.min.js\r\n    jquery.forceOnTop = 1\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Manchmal kommt es vor, dass das Javascript von Extensions schon vor dem eigenen Javascript geladen wird. Dies ist im Falle von jQuery natürlich fatal, da dann keine einzige Funktion mehr geht und es den Fehler gibt, dass $ nicht definiert ist. Mit dem folgenden Code kann man Skripte zwingen oben geladen zu werden.

```typoscript

page.includeJSFooter {
    jquery = fileadmin/templates/js/jquery-1.11.2.min.js
    jquery.forceOnTop = 1
}

```