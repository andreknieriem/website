---
title: 'TYPO3: addQueryString GET/Post Parameter mit zu Links im TMENU hinzufügen'
date: '2018-05-10T22:00:00.000Z'
slug: typo3-addquerystring-getpost-parameter-mit-zu-links-im-tmenu-hinzufuegen
tags:
  - '198'
  - '415'
  - '436'
  - '437'
  - '97'
  - '977'
  - '533'
  - '978'
description: "Wenn man in TYPO3 mit Typoscript ein Menü baut, so kann es vorkommen, dass man trotz Verlinkung auf andere Seiten die aktuellen Get-Parameter behalten möchte. Das köntne zum beispiel eine Einstellung sein, die man auf einer Seite setzt und die sich dann durch die Seite durchzieht. Das bekannteste dieser Beispiel ist der Sprachumschalter. Aber auch andere Parameter kann man gezielt durchreichen. Hier mal ein kleiner Schnipsel, wie so etwas funktioniert: lib.menu.test {\r\n    10 = HMENU\r\n    10 {\r\n      entryLevel = 0\r\n      1 = TMENU\r\n      1 {\r\n        expAll = 1\r\n        wrap = |\r\n        NO = 1\r\n        NO {\r\n          doNotLinkIt = 1\r\n          wrapItemAndSub = |\r\n          stdWrap{\r\n            htmlSpecialChars = 1\r\n            typolink {\r\n              parameter.field = uid\r\n              addQueryString = 1\r\n              addQueryString {\r\n                method = GET\r\n                exclude = test_param\r\n              }\r\n            }\r\n          }\r\n          ATagTitle.field = title\r\n        }\r\n Der Code fügt nun alle Get-Parameter hinzu und man kann sogar bestimmte wieder ausschließen, in diesem Fall den Parameter test_param."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: addQueryString GET/Post Parameter mit zu Links im TMENU hinzufügen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#tmenu](/tag.html?tag=436&cHash=adb711bbb0a4542bdfe9d90abf225bbb)[#hmenu](/tag.html?tag=437&cHash=00bd92582d0de0e613907a4385f53318)[#parameter](/tag.html?tag=533&cHash=6a29c96588220a47915e885ee98fe37b)[#post](/tag.html?tag=977&cHash=4c8df00ba3f77157bc4975e4400d5a89)[#addquerystring](/tag.html?tag=978&cHash=ad4d64c3c76155e30deb5982b66deca1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

11\. May 2018

Wenn man in TYPO3 mit Typoscript ein Menü baut, so kann es vorkommen, dass man trotz Verlinkung auf andere Seiten die aktuellen Get-Parameter behalten möchte. Das köntne zum beispiel eine Einstellung sein, die man auf einer Seite setzt und die sich dann durch die Seite durchzieht. Das bekannteste dieser Beispiel ist der Sprachumschalter. Aber auch andere Parameter kann man gezielt durchreichen. Hier mal ein kleiner Schnipsel, wie so etwas funktioniert:

lib.menu.test { 10 = HMENU 10 { entryLevel = 0 1 = TMENU 1 { expAll = 1 wrap =

|

NO = 1 NO { doNotLinkIt = 1 wrapItemAndSub =*   |
stdWrap{ htmlSpecialChars = 1 typolink { parameter.field = uid addQueryString = 1 addQueryString { method = GET exclude = test\_param } } } ATagTitle.field = title }

Der Code fügt nun alle Get-Parameter hinzu und man kann sogar bestimmte wieder ausschließen, in diesem Fall den Parameter test\_param.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.