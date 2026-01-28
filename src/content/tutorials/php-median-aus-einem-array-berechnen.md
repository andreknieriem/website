---
title: 'PHP: Median aus einem Array berechnen'
date: '2022-04-28T10:00:00.000Z'
slug: php-median-aus-einem-array-berechnen
tags:
  - median
  - ' php'
  - ' calculate'
  - ' array'
description: "Möchte in PHP den Median berechnen, so lässt sich das ganze Recht einfach bewerkstelligen. Man sortiert das Array, dann zählt man die Elemente. Ist es eine ungerade Anzahl kann man direkt den mittleren nehmen. Ist die Zahl gerade muss man die beiden mittleren Elemente nehmen und diesen Wert dann addieren und halbieren. Hier das Ganze als Funktion:\r\n\r\n function calculateMedian(array $arr): float\r\n{\r\n    $count = count($arr); \r\n    $middleval = floor(($count-1)/2); \r\n    if($count % 2) { \r\n        $median = $arr[$middleval];\r\n    } else {\r\n        $low = $arr[$middleval];\r\n        $high = $arr[$middleval+1];\r\n        $median = (($low+$high)/2);\r\n    }\r\n    return $median;\r\n}\r\n\r\n// usage:\r\n$sortedArray = [1,2,4,6,8];\r\n$median = calculateMedian($sortedArray);"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

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