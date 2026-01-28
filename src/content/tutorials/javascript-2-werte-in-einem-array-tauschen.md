---
title: 'Javascript: 2 Werte in einem Array tauschen'
date: '2015-06-02T16:51:04.000Z'
slug: javascript-2-werte-in-einem-array-tauschen
tags:
  - '69'
  - '159'
  - '503'
  - '657'
  - '686'
  - '687'
description: "Für ein kleines Projekt benötigte ich letztens eine Funktion, die mir Werte in einem Array austauscht. Deshalb habe ich kurzerhand einen Array Prototype geschrieben. Man muss nur den index der beiden Werte übergeben und bekommt das umsortierte Array heraus.\nArray Prototype \r\nArray.prototype.swap = function (x,y) {\r\n  var b = this[x];\r\n  this[x] = this[y];\r\n  this[y] = b;\r\n  return this;\r\n}\r\n Benutzung \r\nvar fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\r\nfruits.swap(0,3);\r\n\r\n// Ergebnis in fruits ist nun Mango, Orange, Apple, Banana\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#prototype](/tag.html?tag=503&cHash=b45e3c12d91ccd54e1284fa9f683961e)[#exchange](/tag.html?tag=657&cHash=f6a9704b2902cd29c3ba06606e8d68fc)[#swop](/tag.html?tag=686&cHash=ac597c77664cd4b1f5daeaabb8b0b186)[#switch](/tag.html?tag=687&cHash=7c246c7e4d961fc2907396a0c2a38b5b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. Jun 2015

Für ein kleines Projekt benötigte ich letztens eine Funktion, die mir Werte in einem Array austauscht. Deshalb habe ich kurzerhand einen Array Prototype geschrieben. Man muss nur den index der beiden Werte übergeben und bekommt das umsortierte Array heraus.

**Array Prototype**

```

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}
```

**Benutzung**

```

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.swap(0,3);

// Ergebnis in fruits ist nun Mango, Orange, Apple, Banana
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.