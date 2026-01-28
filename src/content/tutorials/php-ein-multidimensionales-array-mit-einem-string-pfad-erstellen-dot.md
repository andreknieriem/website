---
title: 'PHP: Ein multidimensionales Array mit einem String-Pfad erstellen (Dot)'
date: '2019-04-03T06:06:00.000Z'
slug: php-ein-multidimensionales-array-mit-einem-string-pfad-erstellen-dot
tags:
  - '41'
  - '1137'
  - '1138'
  - '1139'
  - '1140'
  - '1141'
  - '1142'
  - '1134'
  - '1143'
description: ' '
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man aus einem String-Pfad, wie zum beispiel "liste.eintrag.name" und dem Wert "Max Mustermann" ein Array machen, dass  multidimensional ist und den Wert dann an der letzten Stelle, so kann man folgende kleine Funktion verwenden.

```
/**
 * Loop through the keys (delimited with . by default) to get to the final property, and then do assignment on the value.
 * @param $arr
 * @param $path
 * @param $value
 * @param string $separator
 */
function assignArrayByPath(&$arr, $path, $value, $separator='.') {
    $keys = explode($separator, $path);

    foreach ($keys as $key) {
        $arr = &$arr[$key];
    }

    $arr = $value;
}

// Benutzung
$arr = [];
$path = 'liste.eintrag.name';
$value = 'Max Mustermann';
assignArrayByPath($arr,$path,$value);

// Resultat:
// array(
//   liste => array(
//     eintrag => array(
//       name => 'Max Mustermann'
//     )
//   )
// )
```