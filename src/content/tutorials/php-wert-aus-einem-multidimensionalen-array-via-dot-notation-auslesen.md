---
title: 'PHP: Wert aus einem multidimensionalen Array via Dot-Notation auslesen'
date: '2019-04-04T09:26:00.000Z'
slug: php-wert-aus-einem-multidimensionalen-array-via-dot-notation-auslesen
tags:
  - '41'
  - '1141'
  - '1140'
  - '1137'
  - '1138'
  - '1144'
  - '1145'
  - '1146'
description: "In meinem vorherigen Tutorial habe ich eine Funktion gezeigt, die ein Multidimensionales Array anhand einer Strings erstellt. (PHP: Ein multidimensionales Array mit einem String-Pfad erstellen (Dot)).\r\nIn diesem Tutorial habe ich die Gegen-Funktion dazu für euch. Hier kann man einen Wert anhand eines Strings mit der Dot-Notation auslesen.\r\nFunktion und Benutzung function getValueByKey($key, array $data, $default) {\r\n    if (!is_string($key) || empty($key) || !count($data)) {\r\n        return $default;\r\n    }\r\n\r\n    if (strpos($key, '.') !== false) {\r\n        $keys = explode('.', $key);\r\n        foreach ($keys as $innerKey) {\r\n            if (!array_key_exists($innerKey, $data)) {\r\n                return $default;\r\n            }\r\n            $data = $data[$innerKey];\r\n        }\r\n        return $data;\r\n    }\r\n    return array_key_exists($key, $data) ? $data[$key] : $default;\r\n}\r\n\r\n// Benutzung\r\n$arr = [\r\n   'liste' => [\r\n     'eintrag' => [\r\n       'name' => 'Max Mustermann'\r\n     ]\r\n   ]\r\n];\r\n$value = getValueByKey('liste.eintrag.name' $arr, 'Default Wert');\r\n// $value ist nun Max Mustermann\r\n\r\n$value = getValueByKey('liste.eintrag.nachname' $arr, 'Default Wert');\r\n// $value ist nun Default Wert"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[\# dot](/tag.html?tag=1137&cHash=492a61c74f4b82b7e5ab55eef336456b)[\# notation](/tag.html?tag=1138&cHash=01638a9aa32f97e4ffa64a8f69cdc26f)[\# array](/tag.html?tag=1140&cHash=054da3315244e90fbe0016148a6fbfe0)[\# multidimensional](/tag.html?tag=1141&cHash=d893835b63e1b83ae542588ebac072b3)[\# get](/tag.html?tag=1144&cHash=4d287279e97a32b86e6dd57d282adb65)[\# value](/tag.html?tag=1145&cHash=6ca98d191c099a55fa9eade57a0353b3)[\# default](/tag.html?tag=1146&cHash=f66840990e3d63abdca9b738502860fa)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Apr 2019

In meinem vorherigen Tutorial habe ich eine Funktion gezeigt, die ein Multidimensionales Array anhand einer Strings erstellt. ([PHP: Ein multidimensionales Array mit einem String-Pfad erstellen (Dot)](https://www.andrerinas.de/tutorials/php-ein-multidimensionales-array-mit-einem-string-pfad-erstellen-dot.html)).

In diesem Tutorial habe ich die Gegen-Funktion dazu für euch. Hier kann man einen Wert anhand eines Strings mit der Dot-Notation auslesen.

### Funktion und Benutzung

```
function getValueByKey($key, array $data, $default) {
    if (!is_string($key) || empty($key) || !count($data)) {
        return $default;
    }

    if (strpos($key, '.') !== false) {
        $keys = explode('.', $key);
        foreach ($keys as $innerKey) {
            if (!array_key_exists($innerKey, $data)) {
                return $default;
            }
            $data = $data[$innerKey];
        }
        return $data;
    }
    return array_key_exists($key, $data) ? $data[$key] : $default;
}

// Benutzung
$arr = [
   'liste' => [
     'eintrag' => [
       'name' => 'Max Mustermann'
     ]
   ]
];
$value = getValueByKey('liste.eintrag.name' $arr, 'Default Wert');
// $value ist nun Max Mustermann

$value = getValueByKey('liste.eintrag.nachname' $arr, 'Default Wert');
// $value ist nun Default Wert
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/066aa7d52fc135200465b75a63636405?s=75&d=mm&r=g)
    
    Alex Schneider
    
    von mir auch vielen Dank
    
    17\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a8fbf0d40ce98b3e92fa83bce1702042?s=75&d=mm&r=g)
    
    [Alexandra](https://bachelorschreibenlassen.com/blog/klausuren-im-studium)
    
    Danke!!das ist richtig was ich brauche
    
    27\. Aug 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.