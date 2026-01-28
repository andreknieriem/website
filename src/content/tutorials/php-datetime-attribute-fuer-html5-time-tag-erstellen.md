---
title: 'PHP: Datetime Attribute für HTML5 Time-Tag erstellen'
date: '2016-08-23T22:00:00.000Z'
slug: php-datetime-attribute-fuer-html5-time-tag-erstellen
tags:
  - php
  - html5 time
  - ' datetime'
  - create
  - date
description: "HTML5 bietet ein Time Tag, damit Maschinen beim betrachten der Seite direkt wissen, worum es sich an der Stelle handelt. Das Time Tag ist mit einem Datetime-Attribut in einer maschinen-leesbaren Schreibweise&nbsp;versehen. So können beispielsweise Suchmaschinen direkt sehen, wann der Artikel erstellt wurde.\r\nDie Erzeugung genau dieses Formates widmet sich dieses kleine Tutorial. // Neueste Methode\r\necho date(DATE_W3C);\r\n\r\n// Alte Methode\r\n$strFormat = 'Y-m-dTH:i:sP';\r\necho date( $strFormat );"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

HTML5 bietet ein [Time Tag](http://www.w3schools.com/tags/tag_time.asp "Opens internal link in current window"), damit Maschinen beim betrachten der Seite direkt wissen, worum es sich an der Stelle handelt. Das Time Tag ist mit einem Datetime-Attribut in einer maschinen-leesbaren Schreibweise versehen. So können beispielsweise Suchmaschinen direkt sehen, wann der Artikel erstellt wurde.

Die Erzeugung genau dieses Formates widmet sich dieses kleine Tutorial.

```
// Neueste Methode
echo date(DATE_W3C);

// Alte Methode
$strFormat = 'Y-m-dTH:i:sP';
echo date( $strFormat );
```