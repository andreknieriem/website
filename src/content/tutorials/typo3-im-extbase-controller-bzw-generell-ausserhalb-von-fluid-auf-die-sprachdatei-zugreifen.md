---
title: >-
  TYPO3: Im Extbase-Controller, bzw. generell außerhalb von Fluid auf die
  Sprachdatei zugreifen
date: '2015-09-08T17:02:06.000Z'
slug: >-
  typo3-im-extbase-controller-bzw-generell-ausserhalb-von-fluid-auf-die-sprachdatei-zugreifen
tags:
  - '41'
  - '196'
  - '198'
  - '461'
  - '572'
  - '751'
  - '752'
  - '753'
description: "Muss man auch außerhalb von Fluid auf Labels zugreifen, so kann man einfach den folgenden Aufruf verwenden. Er funktioniert genau wie der Viewhelper, da dieser nichts anderes tut, als diese Funktion aufzurufen. \r\n\\TYPO3\\CMS\\Extbase\\Utility\\LocalizationUtility::translate( 'lsLanguageKey', 'extensionname' , array() );\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Im Extbase-Controller, bzw. generell außerhalb von Fluid auf die Sprachdatei zugreifen

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#language](/tag.html?tag=196&cHash=c4e15e76540d80f2478ead5f53b77f22)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#model](/tag.html?tag=572&cHash=a818cf0d2c9c44c27e56113946cbca86)[#xlif](/tag.html?tag=751&cHash=ad7bd4eb1a3d27139f1fc218bf9c1830)[#xml](/tag.html?tag=752&cHash=5e06c5ba36a33f79d0064565fcccd114)[#controller](/tag.html?tag=753&cHash=07c23004f06107daa0eccb8157b35e68)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Sep 2015

Muss man auch außerhalb von Fluid auf Labels zugreifen, so kann man einfach den folgenden Aufruf verwenden. Er funktioniert genau wie der Viewhelper, da dieser nichts anderes tut, als diese Funktion aufzurufen.

```

\TYPO3\CMS\Extbase\Utility\LocalizationUtility::translate( 'lsLanguageKey', 'extensionname' , array() );
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.