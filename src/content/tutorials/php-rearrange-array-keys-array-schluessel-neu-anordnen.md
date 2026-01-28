---
title: 'PHP: Rearrange Array Keys (Array Schlüssel neu anordnen)'
date: '2015-06-11T15:52:15.000Z'
slug: php-rearrange-array-keys-array-schluessel-neu-anordnen
tags:
  - '41'
  - '159'
  - '688'
  - '689'
  - '690'
  - '691'
  - '692'
  - '693'
description: "Wenn man in PHP ein Array hat, bei dem die Keys \"löchrig\" sind, zum Beispiel durch Filtern, oder beim setzen neuer Arrays mit dessen bisherigen Keys und möchte dass diese wieder richtig aufsteigend neu gesetzt werden so kann man ganz einfach die PHP-Funktion array_values benutzen. \nDerzeitiges Array \r\nArray(\r\n  [5] =&gt; Test1\r\n  [22] =&gt; Test2\r\n  [36] =&gt; Test3\r\n  [41] =&gt; Test4\r\n  [44] =&gt; Test5\r\n  [47] =&gt; Test6\r\n)\r\n Keys neu anlegen \r\n$array = array_values($array);\r\n Neues Array \r\nArray(\r\n  [0] =&gt; Test1\r\n  [1] =&gt; Test2\r\n  [2] =&gt; Test3\r\n  [3] =&gt; Test4\r\n  [4] =&gt; Test5\r\n  [5] =&gt; Test6\r\n)\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Wenn man in PHP ein Array hat, bei dem die Keys "löchrig" sind, zum Beispiel durch Filtern, oder beim setzen neuer Arrays mit dessen bisherigen Keys und möchte dass diese wieder richtig aufsteigend neu gesetzt werden so kann man ganz einfach die PHP-Funktion **[array\_values](http://au.php.net/array_values)** benutzen.

**Derzeitiges Array**

```

Array(
  [5] => Test1
  [22] => Test2
  [36] => Test3
  [41] => Test4
  [44] => Test5
  [47] => Test6
)
```

**Keys neu anlegen**

```

$array = array_values($array);
```

**Neues Array**

```

Array(
  [0] => Test1
  [1] => Test2
  [2] => Test3
  [3] => Test4
  [4] => Test5
  [5] => Test6
)
```