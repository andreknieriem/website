---
title: 'Php: Implode ein Multi-Dimensional-Array bei bestimmtem Key'
date: '2015-10-15T16:05:44.000Z'
slug: php-implode-ein-multi-dimensional-array-bei-bestimmtem-key
tags:
  - php
  - array
  - key
  - implode
  - multi dimensional array
  - data
description: "\r\n$input = array(\r\n  array(\r\n    'key' =&gt; 'foo',\r\n  ),\r\n  array(\r\n    'key' =&gt; 'bar'\r\n  )\r\n);\r\n\r\n// Unter PHP 5.5.0\r\necho implode(', ', array_map(function ($entry) {\r\n  return $entry['key'];\r\n}, $input));\r\n\r\n// Ab PHP 5.5.0\r\necho implode(', ', array_column($input, 'key'));\r\n\r\n// Herauskommt bei beiden\r\n// foo, bar\r\n  Möchte man ein multidimensionales Array imploden, so habe ich hier 2 Lösungen gefunden. Je nach PHP Version kann man entweder die eine oder die andere benutzen."
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man ein multidimensionales Array imploden, so habe ich hier 2 Lösungen gefunden. Je nach PHP Version kann man entweder die eine oder die andere benutzen.

```

$input = array(
  array(
    'key' => 'foo',
  ),
  array(
    'key' => 'bar'
  )
);

// Unter PHP 5.5.0
echo implode(', ', array_map(function ($entry) {
  return $entry['key'];
}, $input));

// Ab PHP 5.5.0
echo implode(', ', array_column($input, 'key'));

// Herauskommt bei beiden
// foo, bar
```