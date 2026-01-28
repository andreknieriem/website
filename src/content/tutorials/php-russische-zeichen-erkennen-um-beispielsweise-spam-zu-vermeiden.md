---
title: 'PHP: Russische Zeichen erkennen um beispielsweise Spam zu vermeiden'
date: '2017-04-02T22:00:00.000Z'
slug: php-russische-zeichen-erkennen-um-beispielsweise-spam-zu-vermeiden
tags:
  - '41'
  - '979'
  - '980'
  - '981'
  - '982'
  - '983'
description: "Bei mir kommt es recht häufig vor, dass in meinen Kommentaren Spams mit russischen Inhalt kommen. Nach kleiner Recherche habe ich eine Funktion gefunden, die die russische Sprache erkennt. So kann ich dann jeden Kommentar, der hier ein true zurückgibt als Spam markieren.\r\nHier die Funktion: function isRussian($text) {\r\n    return preg_match('/[?-??-???]/u', $text);\r\n}"
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#detect](/tag.html?tag=979&cHash=56f7335428d7eda27ad14eaba4966b6b)[#erkennen](/tag.html?tag=980&cHash=35d006119178f3154a2fa93f1c711f2e)[#russian](/tag.html?tag=981&cHash=8ea5b53f7c8b3943d3d8b343de75356d)[#russisch](/tag.html?tag=982&cHash=df1cdf7a91d326cb0c85e374adb8e85d)[#spam](/tag.html?tag=983&cHash=b5d33c6facbd1d0b9ee4a7027cad5692)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. Apr 2017

Bei mir kommt es recht häufig vor, dass in meinen Kommentaren Spams mit russischen Inhalt kommen. Nach kleiner Recherche habe ich eine Funktion gefunden, die die russische Sprache erkennt. So kann ich dann jeden Kommentar, der hier ein true zurückgibt als Spam markieren.

**Hier die Funktion:**

```
function isRussian($text) {
    return preg_match('/[А-Яа-яЁё]/u', $text);
}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.