---
title: 'Javascript: Array klonen mit ES6'
date: '2021-04-01T08:24:00.000Z'
slug: javascript-array-klonen-mit-es6
tags:
  - javascript
  - es6
  - clone
  - reference
  - explanation
  - erklärung
  - klonen
  - array
description: "Möchte man in Javascript ein Array klonen, so geht das Ganze seit ES6 sehr einfach. Wie das folgende Beispiel zeigt: const sheeps = ['maeh', 'maaeh', 'maeeh'];\r\n\r\n// Old way\r\nconst cloneSheeps = sheeps.slice();\r\n\r\n// ES6 way\r\nconst cloneSheepsES6 = [...sheeps]; Warum kann ich nicht einfach = benutzen um ein Array zu klonen?\r\nJavascript referenziert Arrays wenn man diese mit = anlegt. Das bedeutet, dass eine Änderung am neuen Array direkt das alte Array mit ändert, da es ein und dasselbe für Javascript ist.\r\nHier ein Beispiel dazu: const sheeps = ['maeh', 'maaeh', 'maeeh'];\r\nconst sheeps2 = sheeps;\r\n\r\nsheeps2.push('wolf');\r\n\r\nconsole.log(sheeps2);\r\n// ['maeh', 'maaeh', 'maeeh', 'wolf'] OK richtig\r\n\r\nconsole.log(sheeps);\r\n// ['maeh', 'maaeh', 'maeeh', 'wolf'] "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

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