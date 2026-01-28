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
demo_url: null
download_url: null
---

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