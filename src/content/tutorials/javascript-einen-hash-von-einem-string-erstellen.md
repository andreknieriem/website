---
title: 'Javascript: Einen Hash von einem String erstellen'
date: '2016-07-28T17:17:42.000Z'
slug: javascript-einen-hash-von-einem-string-erstellen
tags:
  - '170'
  - '854'
  - '855'
  - '856'
description: "Javascript bietet im Gegensatz zu PHP keine Hash Methoden wie md5 oder sha1. Manchmal möchte man aber nur einen Hash haben um diesen beispielsweise in einem Cookie zu speichern, damit man vergleichen kann, ob eine Notification schonmal gelaufen ist, oder nicht. Ich habe hier eine kleine Funktion gefunden, die genau dies tut. \r\nhashCode = function(str) {\r\n  var hash = 0, i, chr, len;\r\n  if (str.length === 0) return hash;\r\n  for (i = 0, len = str.length; i &lt; len; i++) {\r\n    chr   = str.charCodeAt(i);\r\n    hash  = ((hash &lt;&lt; 5) - hash) + chr;\r\n    hash |= 0; // Convert to 32bit integer\r\n  }\r\n  return hash;\r\n};\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: Einen Hash von einem String erstellen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#string](/tag.html?tag=170&cHash=ef1bdf30c7826216b830d70562bce01f)[#javscript](/tag.html?tag=854&cHash=dafdc9b4645cd0a2665d3af199c7f466)[#create hash](/tag.html?tag=855&cHash=0a854e1dfb67730074dba116d12fb8b4)[#unique](/tag.html?tag=856&cHash=ae27c43c2444dfeb660e6890c5211ac6)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Jul 2016

Javascript bietet im Gegensatz zu PHP keine Hash Methoden wie md5 oder sha1. Manchmal möchte man aber nur einen Hash haben um diesen beispielsweise in einem Cookie zu speichern, damit man vergleichen kann, ob eine Notification schonmal gelaufen ist, oder nicht. Ich habe hier eine kleine Funktion gefunden, die genau dies tut.

```

hashCode = function(str) {
  var hash = 0, i, chr, len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/1428ad74c1fe614e90b4ed8db51333b1?s=75&d=mm&r=g)
    
    frager
    
    Wie sicher ist diese Hash Methode?  
    Danke für Antworten schon mal im voraus.
    
    07\. Dec 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.