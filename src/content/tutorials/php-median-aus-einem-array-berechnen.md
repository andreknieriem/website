---
title: 'PHP: Median aus einem Array berechnen'
date: '2022-04-28T10:00:00.000Z'
slug: php-median-aus-einem-array-berechnen
tags:
  - '1273'
  - '1274'
  - '1275'
  - '1140'
description: "Möchte in PHP den Median berechnen, so lässt sich das ganze Recht einfach bewerkstelligen. Man sortiert das Array, dann zählt man die Elemente. Ist es eine ungerade Anzahl kann man direkt den mittleren nehmen. Ist die Zahl gerade muss man die beiden mittleren Elemente nehmen und diesen Wert dann addieren und halbieren. Hier das Ganze als Funktion:\r\n\r\n function calculateMedian(array $arr): float\r\n{\r\n    $count = count($arr); \r\n    $middleval = floor(($count-1)/2); \r\n    if($count % 2) { \r\n        $median = $arr[$middleval];\r\n    } else {\r\n        $low = $arr[$middleval];\r\n        $high = $arr[$middleval+1];\r\n        $median = (($low+$high)/2);\r\n    }\r\n    return $median;\r\n}\r\n\r\n// usage:\r\n$sortedArray = [1,2,4,6,8];\r\n$median = calculateMedian($sortedArray);"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Median aus einem Array berechnen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[\# array](/tag.html?tag=1140&cHash=054da3315244e90fbe0016148a6fbfe0)[#median](/tag.html?tag=1273&cHash=8723473b32d5d7de5b0cac0175e77798)[\# php](/tag.html?tag=1274&cHash=cfc2238217a8f926f6c2ab60929e7b79)[\# calculate](/tag.html?tag=1275&cHash=964a5bc37256e170dd125ce62da25d09)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Apr 2022

Möchte in PHP den Median berechnen, so lässt sich das ganze Recht einfach bewerkstelligen. Man sortiert das Array, dann zählt man die Elemente. Ist es eine ungerade Anzahl kann man direkt den mittleren nehmen. Ist die Zahl gerade muss man die beiden mittleren Elemente nehmen und diesen Wert dann addieren und halbieren. Hier das Ganze als Funktion:

```
function calculateMedian(array $arr): float
{
    $count = count($arr); 
    $middleval = floor(($count-1)/2); 
    if($count % 2) { 
        $median = $arr[$middleval];
    } else {
        $low = $arr[$middleval];
        $high = $arr[$middleval+1];
        $median = (($low+$high)/2);
    }
    return $median;
}

// usage:
$sortedArray = [1,2,4,6,8];
$median = calculateMedian($sortedArray);
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.