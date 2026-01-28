---
title: 'PHP: Gucken ob ein Element eines Arrays in einem anderen Array ist'
date: '2016-05-11T16:03:34.000Z'
slug: php-gucken-ob-ein-element-eines-arrays-in-einem-anderen-array-ist
tags:
  - php
  - array
  - intersect
  - is in other array
description: "Möchte man gucken, ob ein Element eines Arrays bestandteil eines anderes Arrays ist, so kann man dies mit einer Schleife und in_array machen, oder man benutzt den folgenden Code. In dem Beispiel wird geguckt, ob ein Element aus $criminals in $people ist. \r\n$bFound = (count(array_intersect($criminals, $people))) ? true : false;\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man gucken, ob ein Element eines Arrays bestandteil eines anderes Arrays ist, so kann man dies mit einer Schleife und in\_array machen, oder man benutzt den folgenden Code. In dem Beispiel wird geguckt, ob ein Element aus **$criminals** in **$people** ist.

```php

$bFound = (count(array_intersect($criminals, $people))) ? true : false;

```