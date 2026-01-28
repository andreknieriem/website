---
title: Alternative zu PHP strip_tags
date: '2012-12-03T11:35:29.000Z'
slug: alternative-zu-php-strip-tags
tags:
  - php
  - alternative
  - besser
  - better
  - cleaner
  - strip_tags
description: "Für alle, die mit der Funktion strip_tags ein paar Probleme haben, habe ich hier eine kleine Funktion, die bei mir deutlich besser funktioniert hat.\nViel Spaß damit! \r\n&lt;?php\r\n// --------------------------------------------------------------\r\n\r\nfunction rip_tags($string) {\r\n\r\n    // ----- remove HTML TAGs -----\r\n    $string = preg_replace ('/&lt;[^&gt;]*&gt;/', ' ', $string);\r\n\r\n    // ----- remove control characters -----\r\n    $string = str_replace(\"\\r\", '', $string);    // --- replace with empty space\r\n    $string = str_replace(\"\\n\", ' ', $string);   // --- replace with space\r\n    $string = str_replace(\"\\t\", ' ', $string);   // --- replace with space\r\n\r\n    // ----- remove multiple spaces -----\r\n    $string = trim(preg_replace('/ {2,}/', ' ', $string));\r\n\r\n    return $string;\r\n\r\n}\r\n\r\n// --------------------------------------------------------------\r\n?&gt;\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Für alle, die mit der Funktion strip\_tags ein paar Probleme haben, habe ich hier eine kleine Funktion, die bei mir deutlich besser funktioniert hat.

Viel Spaß damit!

```php

<?php
// --------------------------------------------------------------

function rip_tags($string) {

    // ----- remove HTML TAGs -----
    $string = preg_replace ('/<[^>]*>/', ' ', $string);

    // ----- remove control characters -----
    $string = str_replace("\r", '', $string);    // --- replace with empty space
    $string = str_replace("\n", ' ', $string);   // --- replace with space
    $string = str_replace("\t", ' ', $string);   // --- replace with space

    // ----- remove multiple spaces -----
    $string = trim(preg_replace('/ {2,}/', ' ', $string));

    return $string;

}

// --------------------------------------------------------------
?>

```