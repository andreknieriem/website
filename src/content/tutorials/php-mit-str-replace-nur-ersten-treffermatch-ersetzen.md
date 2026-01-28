---
title: 'PHP: Mit str_replace nur ersten Treffer/Match ersetzen'
date: '2016-09-01T22:00:00.000Z'
slug: php-mit-str-replace-nur-ersten-treffermatch-ersetzen
tags:
  - str_replace.first
  - erster
  - match
  - treffer
  - php
description: "Im Gegensatz zu Javascript ersetzt str_replace nicht nur den ersten Treffer, sondern direkt alle Vorkommnisse in einem String. Um nur den ersten Treffer zu ersetzen hilft die folgende Funktion. Die Funktion ist deutlich schneller als eine Regexp, allerdings dadurch auch weniger schön zu lesen. // How to use:\r\nstr_replace_first('Foo','Bar','Foo Foo Foo'); // Ergibt Bar Foo Foo\r\n\r\nfunction str_replace_first($search,$replace,$subject){\r\n    $pos = strpos($subject, $search);\r\n    if ($pos !== false) {\r\n        $return substr_replace($subject, $replace, $pos, strlen($search));\r\n    } else {\r\n        return $subject;\r\n    }\r\n}"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Im Gegensatz zu Javascript ersetzt str\_replace nicht nur den ersten Treffer, sondern direkt alle Vorkommnisse in einem String. Um nur den ersten Treffer zu ersetzen hilft die folgende Funktion. Die Funktion ist deutlich schneller als eine Regexp, allerdings dadurch auch weniger schön zu lesen.

```
// How to use:
str_replace_first('Foo','Bar','Foo Foo Foo'); // Ergibt Bar Foo Foo

function str_replace_first($search,$replace,$subject){
    $pos = strpos($subject, $search);
    if ($pos !== false) {
        $return substr_replace($subject, $replace, $pos, strlen($search));
    } else {
        return $subject;
    }
}
```