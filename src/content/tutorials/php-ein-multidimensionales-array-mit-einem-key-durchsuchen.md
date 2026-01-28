---
title: 'PHP: Ein Multidimensionales Array mit einem Key durchsuchen'
date: '2019-05-20T06:09:00.000Z'
slug: php-ein-multidimensionales-array-mit-einem-key-durchsuchen
tags:
  - php
  - array
  - recursive
  - search
  - key
  - array_key
  - array_search
description: "Möchte man einen Wert aus einem multidimensionalen&nbsp;Array anhand des Keys auslesen und weiß nicht, wo dieser versteckt ist, so kann man mit folgender Funktion das Ganze recht gut bewerkstelligen. Natürlich sollte man keine super riesigen und weit verschachtelte Arrays benutzen, weil es dann doch schon recht lange dauert und aufwendig für den Server ist.\r\n\r\n function recursiveFind(array $haystack, $needle)\r\n{\r\n    $iterator  = new RecursiveArrayIterator($haystack);\r\n    $recursive = new RecursiveIteratorIterator(\r\n        $iterator,\r\n        RecursiveIteratorIterator::SELF_FIRST\r\n    );\r\n    foreach ($recursive as $key => $value) {\r\n        if ($key === $needle) {\r\n            return $value;\r\n        }\r\n    }\r\n} So kann man jetzt die Funktion&nbsp;recursiveFind benutzen um einen Wert zu erhalten."
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man einen Wert aus einem multidimensionalen Array anhand des Keys auslesen und weiß nicht, wo dieser versteckt ist, so kann man mit folgender Funktion das Ganze recht gut bewerkstelligen. Natürlich sollte man keine super riesigen und weit verschachtelte Arrays benutzen, weil es dann doch schon recht lange dauert und aufwendig für den Server ist.

```
function recursiveFind(array $haystack, $needle)
{
    $iterator  = new RecursiveArrayIterator($haystack);
    $recursive = new RecursiveIteratorIterator(
        $iterator,
        RecursiveIteratorIterator::SELF_FIRST
    );
    foreach ($recursive as $key => $value) {
        if ($key === $needle) {
            return $value;
        }
    }
}
```

So kann man jetzt die Funktion **recursiveFind** benutzen um einen Wert zu erhalten.