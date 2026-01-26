---
title: 'PHP: Den Key bei der in_array-Funktion bekommen, falls etwas gefunden wurde'
date: '2015-09-05T05:49:24.000Z'
slug: php-den-key-bei-der-in-array-funktion-bekommen-falls-etwas-gefunden-wurde
tags:
  - '41'
  - '118'
  - '693'
  - '750'
  - '754'
description: "Benötigt man bei der Funktion in_array gleichzeitig den Key, der gefunden wurde, so kann man sich mit folgendem kleinen Snippet behelfen. Hierfür wird aber dann array_search anstelle in_array benutzt. \r\n//Array $array\r\nArray\r\n(\r\n    [0] =&gt; \r\n    [6] =&gt; 6\r\n    [3] =&gt; 5\r\n    [2] =&gt; 7\r\n)\r\n\r\nif (false !== $key = array_search('5', $array)) {\r\n    // do something\r\n} else {\r\n    // do something else\r\n}\r\n Im oberen Beispiel wird nach dem Value 5 gesucht und in die Variable $key wird der Key, also in unserem Fall die 3 gesetzt."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Den Key bei der in\_array-Funktion bekommen, falls etwas gefunden wurde

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#in\_array](/tag.html?tag=118&cHash=bc46e559715dad703aabc3e1e1f0694a)[#schlüssel](/tag.html?tag=693&cHash=1e398bdd2f77e18cd28d026f6d23c04b)[#get key](/tag.html?tag=750&cHash=a98ce1743d3463ab37a08f395fe416cb)[#key bekommen](/tag.html?tag=754&cHash=eceb61531d502937373787a7d2d8cf04)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Sep 2015

Benötigt man bei der Funktion in\_array gleichzeitig den Key, der gefunden wurde, so kann man sich mit folgendem kleinen Snippet behelfen. Hierfür wird aber dann array\_search anstelle in\_array benutzt.

```

//Array $array
Array
(
    [0] => 
    [6] => 6
    [3] => 5
    [2] => 7
)

if (false !== $key = array_search('5', $array)) {
    // do something
} else {
    // do something else
}
```

Im oberen Beispiel wird nach dem Value 5 gesucht und in die Variable $key wird der Key, also in unserem Fall die 3 gesetzt.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.