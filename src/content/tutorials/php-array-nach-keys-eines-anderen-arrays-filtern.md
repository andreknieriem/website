---
title: 'PHP: Array nach Keys eines anderen Arrays filtern'
date: '2019-02-22T07:28:00.000Z'
slug: php-array-nach-keys-eines-anderen-arrays-filtern
tags:
  - php
  - array
  - filter
  - key
  - keys
  - by
  - other
  - use
  - array_intersect_key
description: "Hat man ein Array, dass beispielsweise für eine Tabellenartige Ansicht genutzt wird und stellt einen Filter ein, dass nicht mehr alle Spalten gezeigt werden sollen, so hat man meistens folgende Konstellation:\r\n \tArray mit allen Spalten \tArray mit Keys der anzuzeigenden Spalten \r\nUm das Ganze nun zu filtern benötigt man array_flip&nbsp;und array_intersect_key.\r\nDas funktioniert dann so. Unser Filter-Array wird mit array_flip so gedreht, dass die Keys auch wirklich die Keys im Array werden. Mit der Funktion array_intersect_key wird dann die Schnittmenge aus beiden Arrays zurückgegegeben und es bleiben nur die Spalten übrig, die im Key-Array vorhanden waren.\r\nHier ein Beispiel: $customer['address'] = '123 fake st';\r\n$customer['name'] = 'Tim';\r\n$customer['dob'] = '12/08/1986';\r\n$customer['dontShowMe'] = 'Diese Spalte soll nicht gezeigt werden';\r\n\r\n// Array mit Spalten, die gezeigt werden sollen\r\n$filterKeys = array('name', 'dob', 'address');\r\n\r\n$customerFiltered = array_intersect_key($customer, array_flip($filterKeys)); Das erzeugt dann folgende Ausgabe für $customerFiltered Array (\r\n  [address] => 123 fake st\r\n  [name] => Tim\r\n  [dob] => 12/08/1986\r\n\r\n)"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Hat man ein Array, dass beispielsweise für eine Tabellenartige Ansicht genutzt wird und stellt einen Filter ein, dass nicht mehr alle Spalten gezeigt werden sollen, so hat man meistens folgende Konstellation:

1.  Array mit allen Spalten
2.  Array mit Keys der anzuzeigenden Spalten

Um das Ganze nun zu filtern benötigt man [array\_flip](http://php.net/manual/de/function.array-flip.php) und [array\_intersect\_key](http://php.net/manual/de/function.array-intersect-key.php).

Das funktioniert dann so. Unser Filter-Array wird mit array\_flip so gedreht, dass die Keys auch wirklich die Keys im Array werden. Mit der Funktion array\_intersect\_key wird dann die Schnittmenge aus beiden Arrays zurückgegegeben und es bleiben nur die Spalten übrig, die im Key-Array vorhanden waren.

### Hier ein Beispiel:

```
$customer['address'] = '123 fake st';
$customer['name'] = 'Tim';
$customer['dob'] = '12/08/1986';
$customer['dontShowMe'] = 'Diese Spalte soll nicht gezeigt werden';

// Array mit Spalten, die gezeigt werden sollen
$filterKeys = array('name', 'dob', 'address');

$customerFiltered = array_intersect_key($customer, array_flip($filterKeys));
```

Das erzeugt dann folgende Ausgabe für **$customerFiltered**

```
Array (
  [address] => 123 fake st
  [name] => Tim
  [dob] => 12/08/1986

)
```