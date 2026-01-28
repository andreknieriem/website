---
title: 'PHP: Array nach Keys eines anderen Array sortieren'
date: '2016-04-25T16:24:04.000Z'
slug: php-array-nach-keys-eines-anderen-array-sortieren
tags:
  - array
  - sortieren
  - sort
  - after keys
  - another
  - array_flip
description: "Für eine Liste brauchte ich letztens ein Array, was sich nach den Keys eines anderen sortiert. Bei Stackoverflow  bin ich dabei fündig geworden und wollte es euch nicht vorenthalten: \r\n// Unser Array, was sortiert werden soll\r\n$customer['address'] = '123 fake st';\r\n$customer['name'] = 'Tim';\r\n$customer['dob'] = '12/08/1986';\r\n$customer['dontSortMe'] = 'this value doesnt need to be sorted';\r\n\r\n// sortiertes eindimensionales arrays\r\n$sortedKeys = array('name', 'dob', 'address');\r\n\r\n$customerSorted = array_replace(array_flip($sortedKeys), $customer);\r\n Das neue Array sieht dabei dann so aus: \r\nArray (\r\n  [name] =&gt; Tim\r\n  [dob] =&gt; 12/08/1986\r\n  [address] =&gt; 123 fake st\r\n  [dontSortMe] =&gt; this value doesnt need to be sorted\r\n)\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Für eine Liste brauchte ich letztens ein Array, was sich nach den Keys eines anderen sortiert. Bei [Stackoverflow](http://stackoverflow.com/questions/348410/sort-an-array-by-keys-based-on-another-array) bin ich dabei fündig geworden und wollte es euch nicht vorenthalten:

```php

// Unser Array, was sortiert werden soll
$customer['address'] = '123 fake st';
$customer['name'] = 'Tim';
$customer['dob'] = '12/08/1986';
$customer['dontSortMe'] = 'this value doesnt need to be sorted';

// sortiertes eindimensionales arrays
$sortedKeys = array('name', 'dob', 'address');

$customerSorted = array_replace(array_flip($sortedKeys), $customer);

```

Das neue Array sieht dabei dann so aus:

```php

Array (
  [name] => Tim
  [dob] => 12/08/1986
  [address] => 123 fake st
  [dontSortMe] => this value doesnt need to be sorted
)

```