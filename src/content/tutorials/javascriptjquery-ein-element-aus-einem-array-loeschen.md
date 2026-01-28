---
title: 'Javascript/jQuery: Ein Element aus einem Array löschen'
date: '2014-12-05T20:02:56.000Z'
slug: javascriptjquery-ein-element-aus-einem-array-loeschen
tags:
  - '20'
  - '35'
  - '41'
  - '69'
  - '159'
  - '505'
  - '585'
description: "Hier habe eine Array Prototype-Funktion um Array-Elemente zu löschen. Ich habe sie wie die Php-Funktion unset() genannt.\nDie Funktionsweise seht ihr unten. \r\narr['dies', 'ist', 'ein', 'test'];\r\n\r\nArray.prototype.unset = function(item) {\r\n    arr.splice( $.inArray(item, arr), 1 );\r\n}\r\n\r\narr.unset('dies');\r\n\r\n//Ergebnis wäre\r\narr['ist','ein','test']\r\n "
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery#Javascript

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#delete](/tag.html?tag=35&cHash=3c6598ffd1d9780f81065a1fea257830)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#remove](/tag.html?tag=505&cHash=263bad25c9332a7633f566644f35ff4f)[#unset](/tag.html?tag=585&cHash=b04fd2b8a45abfcb4a6fd669bb92320c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Dec 2014

Hier habe eine Array Prototype-Funktion um Array-Elemente zu löschen. Ich habe sie wie die Php-Funktion unset() genannt.

Die Funktionsweise seht ihr unten.

```

arr['dies', 'ist', 'ein', 'test'];

Array.prototype.unset = function(item) {
    arr.splice( $.inArray(item, arr), 1 );
}

arr.unset('dies');

//Ergebnis wäre
arr['ist','ein','test']
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.