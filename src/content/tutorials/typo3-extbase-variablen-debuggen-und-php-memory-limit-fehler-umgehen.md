---
title: 'TYPO3: Extbase Variablen debuggen und php memory_limit-Fehler umgehen'
date: '2016-03-09T17:23:08.000Z'
slug: typo3-extbase-variablen-debuggen-und-php-memory-limit-fehler-umgehen
tags:
  - '41'
  - '461'
  - '813'
  - '814'
  - '815'
description: "Möchte man Extbase Objecte debuggen, so läuft mit sehr schnell in PHP-Fatals, da das Memory-Limit überschritten ist. TYPO3/Extbase hat dafür eine eigene Methode entwickelt, die einem ein var_dump der Variablen anzeigt. Fluid benutzt genau dieselbe Methode beim f:debug-Viewhelper. \r\n// anstelle von var_dump($var);\r\n\\TYPO3\\CMS\\Extbase\\Utility\\DebuggerUtility::var_dump($var);\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#memory\_limit](/tag.html?tag=813&cHash=f874c192b29f6928b3f782be9ef81109)[#var\_dump](/tag.html?tag=814&cHash=fe50dacb1da92fd69626b285692c82de)[#blank page](/tag.html?tag=815&cHash=708b4c225625c2c1c16e37ce182935ef)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Mar 2016

Möchte man Extbase Objecte debuggen, so läuft mit sehr schnell in PHP-Fatals, da das Memory-Limit überschritten ist. TYPO3/Extbase hat dafür eine eigene Methode entwickelt, die einem ein var\_dump der Variablen anzeigt. Fluid benutzt genau dieselbe Methode beim f:debug-Viewhelper.

```

// anstelle von var_dump($var);
\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($var);
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.