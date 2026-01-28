---
title: 'Php: Implode ein Multi-Dimensional-Array bei bestimmtem Key'
date: '2015-10-15T16:05:44.000Z'
slug: php-implode-ein-multi-dimensional-array-bei-bestimmtem-key
tags:
  - '41'
  - '159'
  - '601'
  - '775'
  - '776'
  - '777'
description: "\r\n$input = array(\r\n  array(\r\n    'key' =&gt; 'foo',\r\n  ),\r\n  array(\r\n    'key' =&gt; 'bar'\r\n  )\r\n);\r\n\r\n// Unter PHP 5.5.0\r\necho implode(', ', array_map(function ($entry) {\r\n  return $entry['key'];\r\n}, $input));\r\n\r\n// Ab PHP 5.5.0\r\necho implode(', ', array_column($input, 'key'));\r\n\r\n// Herauskommt bei beiden\r\n// foo, bar\r\n  Möchte man ein multidimensionales Array imploden, so habe ich hier 2 Lösungen gefunden. Je nach PHP Version kann man entweder die eine oder die andere benutzen."
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#key](/tag.html?tag=601&cHash=22053b15dee1ac1743743b8aae892d18)[#implode](/tag.html?tag=775&cHash=f7dad2b1a4378447d5217a46b489b3b8)[#multi dimensional array](/tag.html?tag=776&cHash=89644f590b5d0a0c9273e412e71d9ddc)[#data](/tag.html?tag=777&cHash=9f40388049d8c0b8e9e3c3ec01c46464)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Oct 2015

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.