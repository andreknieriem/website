---
title: 'PHP: Array nach Keys eines anderen Array sortieren'
date: '2016-04-25T16:24:04.000Z'
slug: php-array-nach-keys-eines-anderen-array-sortieren
tags:
  - '159'
  - '412'
  - '529'
  - '828'
  - '829'
  - '830'
description: "Für eine Liste brauchte ich letztens ein Array, was sich nach den Keys eines anderen sortiert. Bei Stackoverflow  bin ich dabei fündig geworden und wollte es euch nicht vorenthalten: \r\n// Unser Array, was sortiert werden soll\r\n$customer['address'] = '123 fake st';\r\n$customer['name'] = 'Tim';\r\n$customer['dob'] = '12/08/1986';\r\n$customer['dontSortMe'] = 'this value doesnt need to be sorted';\r\n\r\n// sortiertes eindimensionales arrays\r\n$sortedKeys = array('name', 'dob', 'address');\r\n\r\n$customerSorted = array_replace(array_flip($sortedKeys), $customer);\r\n Das neue Array sieht dabei dann so aus: \r\nArray (\r\n  [name] =&gt; Tim\r\n  [dob] =&gt; 12/08/1986\r\n  [address] =&gt; 123 fake st\r\n  [dontSortMe] =&gt; this value doesnt need to be sorted\r\n)\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Array nach Keys eines anderen Array sortieren

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#sortieren](/tag.html?tag=412&cHash=ff1b5da47634540c33b66cc75c11d61b)[#sort](/tag.html?tag=529&cHash=c8471a5961fc04e0e79ff73456f5d3cc)[#after keys](/tag.html?tag=828&cHash=8a3f0a2eff15143d61d0241b4390cf37)[#another](/tag.html?tag=829&cHash=9f487df143fbfbe78f6263ec540a28e0)[#array\_flip](/tag.html?tag=830&cHash=62ed36659fbb0f28aee12d338c8edf98)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

25\. Apr 2016

Für eine Liste brauchte ich letztens ein Array, was sich nach den Keys eines anderen sortiert. Bei [Stackoverflow](http://stackoverflow.com/questions/348410/sort-an-array-by-keys-based-on-another-array) bin ich dabei fündig geworden und wollte es euch nicht vorenthalten:

```

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

```

Array (
  [name] => Tim
  [dob] => 12/08/1986
  [address] => 123 fake st
  [dontSortMe] => this value doesnt need to be sorted
)
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.