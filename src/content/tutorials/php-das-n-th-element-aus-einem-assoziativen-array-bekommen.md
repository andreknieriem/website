---
title: 'PHP: Das n-th Element aus einem assoziativen Array bekommen'
date: '2015-05-28T15:39:38.000Z'
slug: php-das-n-th-element-aus-einem-assoziativen-array-bekommen
tags:
  - php
  - get
  - array
  - bekommen
  - nth
  - xtes
  - element
  - assosiative
  - assoziativ
description: "Möchte man aus einem assoziativen Array ein bestimmtes Element bekommen, beispielsweise das 2. kann man dies ganz einfach mit der array_slice Funktion lösen. Das untere Beispiel zeigt dies. Würde man einfach $data[2] machen, würde dies nicht gehen.\nArray \r\n$data = Array\r\n(\r\n    ['var'] =&gt; Test\r\n    ['var2'] =&gt; 1\r\n    ['var3'] =&gt; Array\r\n        (\r\n            [0] =&gt; 1\r\n            [1] =&gt; 0\r\n        )\r\n\r\n    ['var4'] =&gt; Test 2\r\n    ['var5'] =&gt; Test 3\r\n)\r\n Zweites Element bekommen \r\n// Nur das Element\r\n$second = array_slice($data, 1, 1);\r\n\r\n// Nur das Value\r\n$second = array_slice($data, 1, 1);\r\nlist($second ) = array_slice($data, 1, 1);\r\n\r\n// Ausgabe\r\n$second = array('var2' =&gt; 1);\r\n$second = 1\r\n \r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man aus einem assoziativen Array ein bestimmtes Element bekommen, beispielsweise das 2. kann man dies ganz einfach mit der [array\_slice](http://php.net/manual/de/function.array-slice.php) Funktion lösen. Das untere Beispiel zeigt dies. Würde man einfach $data\[2\] machen, würde dies nicht gehen.

**Array**

```php

$data = Array
(
    ['var'] => Test
    ['var2'] => 1
    ['var3'] => Array
        (
            [0] => 1
            [1] => 0
        )

    ['var4'] => Test 2
    ['var5'] => Test 3
)

```

**Zweites Element bekommen**

```php

// Nur das Element
$second = array_slice($data, 1, 1);

// Nur das Value
$second = array_slice($data, 1, 1);
list($second ) = array_slice($data, 1, 1);

// Ausgabe
$second = array('var2' => 1);
$second = 1
 

```