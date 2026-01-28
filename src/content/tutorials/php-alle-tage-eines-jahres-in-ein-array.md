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
demo_url: null
download_url: null
---

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