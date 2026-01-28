---
title: 'Javascript: Mehrere Strings auf einmal ersetzen mit 2 Arrays'
date: '2015-12-07T17:16:57.000Z'
slug: javascript-mehrere-strings-auf-einmal-ersetzen-mit-2-arrays
tags:
  - javascript
  - array
  - multiple
  - replace
description: "PHP bietet mit seiner str_replace - Funktion die Möglichkeit 2 Arrays als Parameter zu übergeben um mehrere verschiedene Strings mit dem String aus dem zweiten Array zu ersetzen. Javascript bietet diese Möglichkeit nicht von Haus aus. Hier habe eine kleine Prototyp-Funktion für Strings geschrieben. \r\nString.prototype.replaceArray = function(find, replace) {\r\n  var replaceString = this;\r\n  var regex; \r\n  for (var i = 0; i &lt; find.length; i++) {\r\n    regex = new RegExp(find[i], \"g\");\r\n    replaceString = replaceString.replace(regex, replace[i]);\r\n  }\r\n  return replaceString;\r\n};\r\n Benutzung \r\nvar search = ['Dies','ist','ein','Test'],\r\n    replace = ['Ersetze','alle','Wörter','hier'];\r\n\r\nvar replaced = 'Hallo Du! Dies ist ein Test'.replaceArray(search,replace);\r\n\r\n// Als Ergebnis kommt dann 'Hallo Du! Ersetze alle Wörter hier' heraus.\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

PHP bietet mit seiner str\_replace - Funktion die Möglichkeit 2 Arrays als Parameter zu übergeben um mehrere verschiedene Strings mit dem String aus dem zweiten Array zu ersetzen. Javascript bietet diese Möglichkeit nicht von Haus aus. Hier habe eine kleine Prototyp-Funktion für Strings geschrieben.

```javascript

String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  var regex; 
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

```

**Benutzung**

```javascript

var search = ['Dies','ist','ein','Test'],
    replace = ['Ersetze','alle','Wörter','hier'];

var replaced = 'Hallo Du! Dies ist ein Test'.replaceArray(search,replace);

// Als Ergebnis kommt dann 'Hallo Du! Ersetze alle Wörter hier' heraus.

```