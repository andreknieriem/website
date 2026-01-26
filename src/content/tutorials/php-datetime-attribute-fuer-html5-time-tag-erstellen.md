---
title: 'PHP: Datetime Attribute für HTML5 Time-Tag erstellen'
date: '2016-08-23T22:00:00.000Z'
slug: php-datetime-attribute-fuer-html5-time-tag-erstellen
tags:
  - '41'
  - '878'
  - '879'
  - '598'
  - '880'
description: "HTML5 bietet ein Time Tag, damit Maschinen beim betrachten der Seite direkt wissen, worum es sich an der Stelle handelt. Das Time Tag ist mit einem Datetime-Attribut in einer maschinen-leesbaren Schreibweise&nbsp;versehen. So können beispielsweise Suchmaschinen direkt sehen, wann der Artikel erstellt wurde.\r\nDie Erzeugung genau dieses Formates widmet sich dieses kleine Tutorial. // Neueste Methode\r\necho date(DATE_W3C);\r\n\r\n// Alte Methode\r\n$strFormat = 'Y-m-dTH:i:sP';\r\necho date( $strFormat );"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Datetime Attribute für HTML5 Time-Tag erstellen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#create](/tag.html?tag=598&cHash=d278ac10d2671ead85013f073d1eadbe)[#html5 time](/tag.html?tag=878&cHash=020171640c621647764c29e3090349dd)[\# datetime](/tag.html?tag=879&cHash=ccd699f59001a5df2c39e46f8b1255d2)[#date](/tag.html?tag=880&cHash=d39811a78586bd3a6835a9e5e2f660de)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

24\. Aug 2016

HTML5 bietet ein [Time Tag](http://www.w3schools.com/tags/tag_time.asp "Opens internal link in current window"), damit Maschinen beim betrachten der Seite direkt wissen, worum es sich an der Stelle handelt. Das Time Tag ist mit einem Datetime-Attribut in einer maschinen-leesbaren Schreibweise versehen. So können beispielsweise Suchmaschinen direkt sehen, wann der Artikel erstellt wurde.

Die Erzeugung genau dieses Formates widmet sich dieses kleine Tutorial.

```
// Neueste Methode
echo date(DATE_W3C);

// Alte Methode
$strFormat = 'Y-m-dTH:i:sP';
echo date( $strFormat );
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.