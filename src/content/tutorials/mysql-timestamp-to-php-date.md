---
title: Mysql timestamp to php date
date: '2012-10-16T12:59:37.000Z'
slug: mysql-timestamp-to-php-date
tags:
  - mysql
  - php
  - php date
  - timestamp
description: >-
  In einem alten Projekt hatte ich die Zeitangaben einfach mit dem Mysql
  Timestamp gesetzt. Nun wollte ich jedoch nur das Datum haben und musste es
  dafür in ein PHP date() Format haben.

  Um dies zu bekommen habe ich folgendes gemacht: 

  $res = mysql_query("SELECT date FROM times;");

  while ( $row = mysql_fetch_array($res) ) {
     echo date("d,M ", strtotime($row["date"])) . "&lt;br /&gt;";
  }
   Mithilfe der praktischen PHP Funktion strtotime lassen sich die Mysql Timestamps zu PHP konvertieren. So erhalte ich bei meiner Ausgabe oben den Tag und den Monat und nicht das komplette Datum inklusive Uhrzeit.
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

In einem alten Projekt hatte ich die Zeitangaben einfach mit dem Mysql Timestamp gesetzt. Nun wollte ich jedoch nur das Datum haben und musste es dafür in ein PHP date() Format haben.

Um dies zu bekommen habe ich folgendes gemacht:

```php

$res = mysql_query("SELECT date FROM times;");
while ( $row = mysql_fetch_array($res) ) {
   echo date("d,M ", strtotime($row["date"])) . "<br />";
}

```

Mithilfe der praktischen PHP Funktion **strtotime** lassen sich die Mysql Timestamps zu PHP konvertieren. So erhalte ich bei meiner Ausgabe oben den Tag und den Monat und nicht das komplette Datum inklusive Uhrzeit.