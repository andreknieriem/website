---
title: 'PHP: Gucken ob ein Element eines Arrays in einem anderen Array ist'
date: '2016-05-11T16:03:34.000Z'
slug: php-gucken-ob-ein-element-eines-arrays-in-einem-anderen-array-ist
tags:
  - '41'
  - '159'
  - '835'
  - '836'
description: "Möchte man gucken, ob ein Element eines Arrays bestandteil eines anderes Arrays ist, so kann man dies mit einer Schleife und in_array machen, oder man benutzt den folgenden Code. In dem Beispiel wird geguckt, ob ein Element aus $criminals in $people ist. \r\n$bFound = (count(array_intersect($criminals, $people))) ? true : false;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Gucken ob ein Element eines Arrays in einem anderen Array ist

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#intersect](/tag.html?tag=835&cHash=f81b095164cdfb03dca433f4a7c83737)[#is in other array](/tag.html?tag=836&cHash=648436ddf6f4b9ee5ab398e330c70016)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

11\. May 2016

Möchte man gucken, ob ein Element eines Arrays bestandteil eines anderes Arrays ist, so kann man dies mit einer Schleife und in\_array machen, oder man benutzt den folgenden Code. In dem Beispiel wird geguckt, ob ein Element aus **$criminals** in **$people** ist.

```

$bFound = (count(array_intersect($criminals, $people))) ? true : false;
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.