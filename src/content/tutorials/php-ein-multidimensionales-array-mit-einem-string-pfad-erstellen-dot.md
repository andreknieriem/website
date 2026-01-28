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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[\# add](/tag.html?tag=1134&cHash=40ba7722964992d81d31bd2e8af698b4)[\# dot](/tag.html?tag=1137&cHash=492a61c74f4b82b7e5ab55eef336456b)[\# notation](/tag.html?tag=1138&cHash=01638a9aa32f97e4ffa64a8f69cdc26f)[\# path](/tag.html?tag=1139&cHash=552dd66962d3ecd7c7b2cb0d4b46c4bd)[\# array](/tag.html?tag=1140&cHash=054da3315244e90fbe0016148a6fbfe0)[\# multidimensional](/tag.html?tag=1141&cHash=d893835b63e1b83ae542588ebac072b3)[\# recursive](/tag.html?tag=1142&cHash=a5e379d5aa7d4068f321581a3e47cb75)[\# create](/tag.html?tag=1143&cHash=9e1f7ac28de5f0eced8dd31d949a1b76)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. Apr 2019

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.