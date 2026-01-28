---
title: Mysql timestamp to php date
date: '2012-10-16T12:59:37.000Z'
slug: mysql-timestamp-to-php-date
tags:
  - '40'
  - '41'
  - '124'
  - '125'
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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#mysql](/tag.html?tag=40&cHash=a03ebd75b978a5c9581e455b7030b6f0)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#php date](/tag.html?tag=124&cHash=7fbfe81379b04bd290a2add564562d1c)[#timestamp](/tag.html?tag=125&cHash=c6aa2fe1847b2dce93c81529e950d4d4)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. Oct 2012

In einem alten Projekt hatte ich die Zeitangaben einfach mit dem Mysql Timestamp gesetzt. Nun wollte ich jedoch nur das Datum haben und musste es dafür in ein PHP date() Format haben.

Um dies zu bekommen habe ich folgendes gemacht:

```

$res = mysql_query("SELECT date FROM times;");
while ( $row = mysql_fetch_array($res) ) {
   echo date("d,M ", strtotime($row["date"])) . "<br />";
}
```

Mithilfe der praktischen PHP Funktion **strtotime** lassen sich die Mysql Timestamps zu PHP konvertieren. So erhalte ich bei meiner Ausgabe oben den Tag und den Monat und nicht das komplette Datum inklusive Uhrzeit.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.