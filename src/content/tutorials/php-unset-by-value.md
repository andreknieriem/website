---
title: 'Php: Unset by Value'
date: '2015-03-19T16:52:41.000Z'
slug: php-unset-by-value
tags:
  - '41'
  - '159'
  - '451'
  - '585'
  - '601'
  - '602'
  - '635'
  - '636'
  - '637'
description: "Hier ist kleine aber feine Funktion, die ein Array Object nach dessen Wert und nicht nach dessen Key aus dem Array löscht.\nFunktion \r\nif(($key = array_search($needle, $haystack)) !== false) {\r\n    unset($haystack[$key]);\r\n}\r\n Beispiel \r\n\r\n// Unser Array\r\n$array = array(\"Orange\", \"Banane\", \"Apfel\", \"Himbeere\");\r\n\r\n// Funktion um Banane aus dem Array zu löschen\r\nif(($key = array_search('Banane', $array)) !== false) {\r\n    unset($array[$key]);\r\n}\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Hier ist kleine aber feine Funktion, die ein Array Object nach dessen Wert und nicht nach dessen Key aus dem Array löscht.

**Funktion**

```

if(($key = array_search($needle, $haystack)) !== false) {
    unset($haystack[$key]);
}
```

**Beispiel**

```


// Unser Array
$array = array("Orange", "Banane", "Apfel", "Himbeere");

// Funktion um Banane aus dem Array zu löschen
if(($key = array_search('Banane', $array)) !== false) {
    unset($array[$key]);
}
```