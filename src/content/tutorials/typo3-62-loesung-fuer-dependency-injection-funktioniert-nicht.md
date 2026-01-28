---
title: 'TYPO3 6.2: Lösung für "Dependency Injection funktioniert nicht"'
date: '2015-10-14T16:55:46.000Z'
slug: typo3-62-loesung-fuer-dependency-injection-funktioniert-nicht
tags:
  - '198'
  - '561'
  - '725'
  - '770'
  - '771'
  - '772'
  - '773'
  - '774'
description: "Für eine Extension brauchte ich letztens eine eigene Php-Klasse, die einfach in meinen Controller via \"Dependency Injection\" eingebunden werden sollte. Das Ganze habe ich dann so gemacht: \r\n/**\r\n * @var \\Vendor\\Extension\\Foo\\Bar\r\n * @inject\r\n */\r\n protected $fooBar;\r\n Allerdings wollte die Klasse einfach nicht geladen werden. Das Object war immer null und es gab fatals, falls ich eine Methode der Klasse aufgerufen habe, beispielsweise: $this->fooBar->test().\nNach ewigem rumprobieren habe ich herausgefunden, dass man den Cache im Installtool leeren muss. Die normalen 3 Caches im Backend oben reichen leider nicht aus. Also im Installtool auf \"Important Actions\" und dort dann auf \"Clear all cache\" klicken. Danach wurde meine Klasse erfolgreich injected.\nIch hoffe ich konnte euch weiterhelfen."
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

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#cache](/tag.html?tag=561&cHash=fe1a782aecf437b255d678afbbb81397)[#not working](/tag.html?tag=725&cHash=aaf76aee3dd05530244b122d4f9dc10f)[#dependency](/tag.html?tag=770&cHash=816282abf05ea6cda302bd75f69367be)[#injection](/tag.html?tag=771&cHash=b6314f87456b0974e3152fccfee25005)[#6.2](/tag.html?tag=772&cHash=d68bf05758d88e708a8ca264cc7cf75f)[#7.4](/tag.html?tag=773&cHash=c9661e829eea2324e63c1cf5e56853f3)[#solution](/tag.html?tag=774&cHash=2926a22782b41c3a5e654aa64087189a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Oct 2015

Für eine Extension brauchte ich letztens eine eigene Php-Klasse, die einfach in meinen Controller via "**Dependency Injection**" eingebunden werden sollte. Das Ganze habe ich dann so gemacht:

```

/**
 * @var \Vendor\Extension\Foo\Bar
 * @inject
 */
 protected $fooBar;
```

Allerdings wollte die Klasse einfach nicht geladen werden. Das Object war immer null und es gab fatals, falls ich eine Methode der Klasse aufgerufen habe, beispielsweise: $this->fooBar->test().

Nach ewigem rumprobieren habe ich herausgefunden, dass man den Cache im Installtool leeren muss. Die normalen 3 Caches im Backend oben reichen leider nicht aus. Also im Installtool auf "**Important Actions**" und dort dann auf "**Clear all cache**" klicken. Danach wurde meine Klasse erfolgreich injected.

Ich hoffe ich konnte euch weiterhelfen.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.