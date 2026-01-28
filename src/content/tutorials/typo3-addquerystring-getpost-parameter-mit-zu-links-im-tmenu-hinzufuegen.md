---
title: 'TYPO3: addQueryString GET/Post Parameter mit zu Links im TMENU hinzufügen'
date: '2018-05-10T22:00:00.000Z'
slug: typo3-addquerystring-getpost-parameter-mit-zu-links-im-tmenu-hinzufuegen
tags:
  - typo3
  - typoscript
  - tmenu
  - hmenu
  - get
  - post
  - parameter
  - addquerystring
description: "Wenn man in TYPO3 mit Typoscript ein Menü baut, so kann es vorkommen, dass man trotz Verlinkung auf andere Seiten die aktuellen Get-Parameter behalten möchte. Das köntne zum beispiel eine Einstellung sein, die man auf einer Seite setzt und die sich dann durch die Seite durchzieht. Das bekannteste dieser Beispiel ist der Sprachumschalter. Aber auch andere Parameter kann man gezielt durchreichen. Hier mal ein kleiner Schnipsel, wie so etwas funktioniert: lib.menu.test {\r\n    10 = HMENU\r\n    10 {\r\n      entryLevel = 0\r\n      1 = TMENU\r\n      1 {\r\n        expAll = 1\r\n        wrap = |\r\n        NO = 1\r\n        NO {\r\n          doNotLinkIt = 1\r\n          wrapItemAndSub = |\r\n          stdWrap{\r\n            htmlSpecialChars = 1\r\n            typolink {\r\n              parameter.field = uid\r\n              addQueryString = 1\r\n              addQueryString {\r\n                method = GET\r\n                exclude = test_param\r\n              }\r\n            }\r\n          }\r\n          ATagTitle.field = title\r\n        }\r\n Der Code fügt nun alle Get-Parameter hinzu und man kann sogar bestimmte wieder ausschließen, in diesem Fall den Parameter test_param."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Wenn man in TYPO3 mit Typoscript ein Menü baut, so kann es vorkommen, dass man trotz Verlinkung auf andere Seiten die aktuellen Get-Parameter behalten möchte. Das köntne zum beispiel eine Einstellung sein, die man auf einer Seite setzt und die sich dann durch die Seite durchzieht. Das bekannteste dieser Beispiel ist der Sprachumschalter. Aber auch andere Parameter kann man gezielt durchreichen. Hier mal ein kleiner Schnipsel, wie so etwas funktioniert:

lib.menu.test { 10 = HMENU 10 { entryLevel = 0 1 = TMENU 1 { expAll = 1 wrap =

|

NO = 1 NO { doNotLinkIt = 1 wrapItemAndSub =*   |
stdWrap{ htmlSpecialChars = 1 typolink { parameter.field = uid addQueryString = 1 addQueryString { method = GET exclude = test\_param } } } ATagTitle.field = title }

Der Code fügt nun alle Get-Parameter hinzu und man kann sogar bestimmte wieder ausschließen, in diesem Fall den Parameter test\_param.