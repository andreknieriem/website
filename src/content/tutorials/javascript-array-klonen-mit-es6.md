---
title: 'Javascript: Array klonen mit ES6'
date: '2021-04-01T08:24:00.000Z'
slug: javascript-array-klonen-mit-es6
tags:
  - '69'
  - '1228'
  - '1235'
  - '1236'
  - '1237'
  - '1238'
  - '1239'
  - '159'
description: "Möchte man in Javascript ein Array klonen, so geht das Ganze seit ES6 sehr einfach. Wie das folgende Beispiel zeigt: const sheeps = ['maeh', 'maaeh', 'maeeh'];\r\n\r\n// Old way\r\nconst cloneSheeps = sheeps.slice();\r\n\r\n// ES6 way\r\nconst cloneSheepsES6 = [...sheeps]; Warum kann ich nicht einfach = benutzen um ein Array zu klonen?\r\nJavascript referenziert Arrays wenn man diese mit = anlegt. Das bedeutet, dass eine Änderung am neuen Array direkt das alte Array mit ändert, da es ein und dasselbe für Javascript ist.\r\nHier ein Beispiel dazu: const sheeps = ['maeh', 'maaeh', 'maeeh'];\r\nconst sheeps2 = sheeps;\r\n\r\nsheeps2.push('wolf');\r\n\r\nconsole.log(sheeps2);\r\n// ['maeh', 'maaeh', 'maeeh', 'wolf'] OK richtig\r\n\r\nconsole.log(sheeps);\r\n// ['maeh', 'maaeh', 'maeeh', 'wolf'] "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: Array klonen mit ES6

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#es6](/tag.html?tag=1228&cHash=626bb88912bcb3f9a80d85fff7a1a1ba)[#clone](/tag.html?tag=1235&cHash=9b00cdab6af1a0bc171331bb0e5b05ca)[#reference](/tag.html?tag=1236&cHash=bda0e526f2aef0a5fdf6a0a8467becf7)[#explanation](/tag.html?tag=1237&cHash=8c93baa220412ae6bdf4205c192c9a63)[#erklärung](/tag.html?tag=1238&cHash=0ab4f44474f67b21dcead7dbea2941f8)[#klonen](/tag.html?tag=1239&cHash=b8c3780ca2c9744a4e631a34123c9210)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Apr 2021

Möchte man in Javascript ein Array klonen, so geht das Ganze seit ES6 sehr einfach. Wie das folgende Beispiel zeigt:

```
const sheeps = ['maeh', 'maaeh', 'maeeh'];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];
```

### Warum kann ich nicht einfach **\=** benutzen um ein Array zu klonen?

Javascript referenziert Arrays wenn man diese mit = anlegt. Das bedeutet, dass eine Änderung am neuen Array direkt das alte Array mit ändert, da es ein und dasselbe für Javascript ist.

Hier ein Beispiel dazu:

```
const sheeps = ['maeh', 'maaeh', 'maeeh'];
const sheeps2 = sheeps;

sheeps2.push('wolf');

console.log(sheeps2);
// ['maeh', 'maaeh', 'maeeh', 'wolf'] OK richtig

console.log(sheeps);
// ['maeh', 'maaeh', 'maeeh', 'wolf'] <-- Oh nein, das Original hat sich ebenfalls geändert.
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.