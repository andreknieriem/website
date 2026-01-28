---
title: 'PHP: Nächstes Datum ohne Wochenende bekommen'
date: '2022-05-03T11:14:00.000Z'
slug: php-naechstes-datum-ohne-wochenende-bekommen
tags:
  - '41'
  - '880'
  - '1269'
  - '1270'
  - '1271'
  - '1272'
  - '422'
  - '62'
description: "Für ein Projekt brauchte ich den nächsten 1. eines Monats von jetzt aus gesehen. Die Besonderheit dabei war aber, dass der Erste nicht schon in 5 Werktagen ist. Also wäre heute der 10.10.2021, dann wäre der 1.11 das nächste richtige Datum. Wäre heute aber der 26.10.2021 so wäre der 1.12 das richtige Datum, da der 1.11 schon in 4 Werktagen ist. Das Wochenende also herausgenommen.\r\nMeine PHP sieht folgendermaßen aus: // check if today plus 5 days is less or equal firstDate. If not use the next higher date\r\n// it skips the weekends (date('N') = 6 or 7)\r\n$nextMonth = date('m') +1;\r\n$firstDate = strtotime('first day of +' . $nextMonth . ' month')\r\n$days = 5;\r\nfor($i=0;$i5) {\r\n    \t$days++;\r\n\t}\r\n}\r\n\r\nif(strtotime('+'.$days.'. days') > $firstDate) {\r\n  $nextMonth = strtotime('first day of +2 month month');\r\n}"
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#date](/tag.html?tag=880&cHash=d39811a78586bd3a6835a9e5e2f660de)[#datetime](/tag.html?tag=1269&cHash=1d775938064ac64e47e4451f7e560fd3)[#next](/tag.html?tag=1270&cHash=0507a1700a834d04858764ba4980ecac)[#strtotime](/tag.html?tag=1271&cHash=49cfaccbcf6f51ed1e99435f70033fc5)[#weekend](/tag.html?tag=1272&cHash=2a1167bdf2610f607c4e5cc0b9653c7d)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. May 2022

Für ein Projekt brauchte ich den nächsten 1. eines Monats von jetzt aus gesehen. Die Besonderheit dabei war aber, dass der Erste nicht schon in 5 Werktagen ist. Also wäre heute der 10.10.2021, dann wäre der 1.11 das nächste richtige Datum. Wäre heute aber der 26.10.2021 so wäre der 1.12 das richtige Datum, da der 1.11 schon in 4 Werktagen ist. Das Wochenende also herausgenommen.

Meine PHP sieht folgendermaßen aus:

```
// check if today plus 5 days is less or equal firstDate. If not use the next higher date
// it skips the weekends (date('N') = 6 or 7)
$nextMonth = date('m') +1;
$firstDate = strtotime('first day of +' . $nextMonth . ' month')
$days = 5;
for($i=0;$i<$days;$i++){
	$day = date('N',strtotime("+".($i+1)."day"));
	if($day>5) {
    	$days++;
	}
}

if(strtotime('+'.$days.'. days') > $firstDate) {
  $nextMonth = strtotime('first day of +2 month month');
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