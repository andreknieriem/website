---
title: 'PHP: Wert aus einem multidimensionalen Array via Dot-Notation auslesen'
date: '2019-04-04T09:26:00.000Z'
slug: php-wert-aus-einem-multidimensionalen-array-via-dot-notation-auslesen
tags:
  - php
  - ' multidimensional'
  - ' array'
  - ' dot'
  - ' notation'
  - ' get'
  - ' value'
  - ' default'
description: "In meinem vorherigen Tutorial habe ich eine Funktion gezeigt, die ein Multidimensionales Array anhand einer Strings erstellt. (PHP: Ein multidimensionales Array mit einem String-Pfad erstellen (Dot)).\r\nIn diesem Tutorial habe ich die Gegen-Funktion dazu für euch. Hier kann man einen Wert anhand eines Strings mit der Dot-Notation auslesen.\r\nFunktion und Benutzung function getValueByKey($key, array $data, $default) {\r\n    if (!is_string($key) || empty($key) || !count($data)) {\r\n        return $default;\r\n    }\r\n\r\n    if (strpos($key, '.') !== false) {\r\n        $keys = explode('.', $key);\r\n        foreach ($keys as $innerKey) {\r\n            if (!array_key_exists($innerKey, $data)) {\r\n                return $default;\r\n            }\r\n            $data = $data[$innerKey];\r\n        }\r\n        return $data;\r\n    }\r\n    return array_key_exists($key, $data) ? $data[$key] : $default;\r\n}\r\n\r\n// Benutzung\r\n$arr = [\r\n   'liste' => [\r\n     'eintrag' => [\r\n       'name' => 'Max Mustermann'\r\n     ]\r\n   ]\r\n];\r\n$value = getValueByKey('liste.eintrag.name' $arr, 'Default Wert');\r\n// $value ist nun Max Mustermann\r\n\r\n$value = getValueByKey('liste.eintrag.nachname' $arr, 'Default Wert');\r\n// $value ist nun Default Wert"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

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