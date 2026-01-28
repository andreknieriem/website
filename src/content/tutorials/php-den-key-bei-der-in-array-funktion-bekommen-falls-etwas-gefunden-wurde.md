---
title: 'PHP: Den Key bei der in_array-Funktion bekommen, falls etwas gefunden wurde'
date: '2015-09-05T05:49:24.000Z'
slug: php-den-key-bei-der-in-array-funktion-bekommen-falls-etwas-gefunden-wurde
tags:
  - '41'
  - '118'
  - '693'
  - '750'
  - '754'
description: "Benötigt man bei der Funktion in_array gleichzeitig den Key, der gefunden wurde, so kann man sich mit folgendem kleinen Snippet behelfen. Hierfür wird aber dann array_search anstelle in_array benutzt. \r\n//Array $array\r\nArray\r\n(\r\n    [0] =&gt; \r\n    [6] =&gt; 6\r\n    [3] =&gt; 5\r\n    [2] =&gt; 7\r\n)\r\n\r\nif (false !== $key = array_search('5', $array)) {\r\n    // do something\r\n} else {\r\n    // do something else\r\n}\r\n Im oberen Beispiel wird nach dem Value 5 gesucht und in die Variable $key wird der Key, also in unserem Fall die 3 gesetzt."
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Benötigt man bei der Funktion in\_array gleichzeitig den Key, der gefunden wurde, so kann man sich mit folgendem kleinen Snippet behelfen. Hierfür wird aber dann array\_search anstelle in\_array benutzt.

```

//Array $array
Array
(
    [0] => 
    [6] => 6
    [3] => 5
    [2] => 7
)

if (false !== $key = array_search('5', $array)) {
    // do something
} else {
    // do something else
}
```

Im oberen Beispiel wird nach dem Value 5 gesucht und in die Variable $key wird der Key, also in unserem Fall die 3 gesetzt.