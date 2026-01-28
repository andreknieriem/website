---
title: 'PHP: Alle Tage eines Jahres in ein Array'
date: '2014-09-23T15:50:54.000Z'
slug: php-alle-tage-eines-jahres-in-ein-array
tags:
  - '41'
  - '159'
  - '535'
  - '536'
  - '537'
  - '538'
description: "Für einen Test brauchte ich ein Array in dem alle Tage eines Jahres sind, bzw. des jetziges Jahres. Die folgende Funktion macht dies ohne Probleme: \r\n$now = time(); // or choose a startdate you want \r\n$aYearLater = strtotime('+1 Year', $now);\r\n$allDates = Array();\r\n$nextday = strtotime('+1 Day', $now);\r\nwhile(1){\r\n    if($nextday &gt; $aYearLater) break 1;\r\n    $allDates[] = date('d.m.Y', $nextday); // Change the date-format to whatever you want\r\n    $nextday = strtotime('+1 Day', $nextday);\r\n}\r\n Viel Spaß damit!"
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#days](/tag.html?tag=535&cHash=3e569705435a79c9b251b91823d883d1)[#tage](/tag.html?tag=536&cHash=132892d8bb909643a9cd58b613b337f8)[#alle](/tag.html?tag=537&cHash=82bec9ea1b652857f832d2e45912879b)[#jahr](/tag.html?tag=538&cHash=5c5149ca55e7601f02db66773d1dcc3d)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Sep 2014

Für einen Test brauchte ich ein Array in dem alle Tage eines Jahres sind, bzw. des jetziges Jahres. Die folgende Funktion macht dies ohne Probleme:

```

$now = time(); // or choose a startdate you want 
$aYearLater = strtotime('+1 Year', $now);
$allDates = Array();
$nextday = strtotime('+1 Day', $now);
while(1){
    if($nextday > $aYearLater) break 1;
    $allDates[] = date('d.m.Y', $nextday); // Change the date-format to whatever you want
    $nextday = strtotime('+1 Day', $nextday);
}
```

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.