---
title: 'Javascript: 2 Werte in einem Array tauschen'
date: '2015-06-02T16:51:04.000Z'
slug: javascript-2-werte-in-einem-array-tauschen
tags:
  - javascript
  - array
  - prototype
  - exchange
  - swop
  - switch
description: "Für ein kleines Projekt benötigte ich letztens eine Funktion, die mir Werte in einem Array austauscht. Deshalb habe ich kurzerhand einen Array Prototype geschrieben. Man muss nur den index der beiden Werte übergeben und bekommt das umsortierte Array heraus.\nArray Prototype \r\nArray.prototype.swap = function (x,y) {\r\n  var b = this[x];\r\n  this[x] = this[y];\r\n  this[y] = b;\r\n  return this;\r\n}\r\n Benutzung \r\nvar fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\r\nfruits.swap(0,3);\r\n\r\n// Ergebnis in fruits ist nun Mango, Orange, Apple, Banana\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

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