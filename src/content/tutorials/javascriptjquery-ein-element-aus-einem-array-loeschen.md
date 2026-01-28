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
demo_url: null
download_url: null
---

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