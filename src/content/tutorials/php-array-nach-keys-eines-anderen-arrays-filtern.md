---
title: 'PHP: Array nach Keys eines anderen Arrays filtern'
date: '2019-02-22T07:28:00.000Z'
slug: php-array-nach-keys-eines-anderen-arrays-filtern
tags:
  - '41'
  - '159'
  - '984'
  - '601'
  - '689'
  - '636'
  - '1117'
  - '473'
  - '1123'
description: "Hat man ein Array, dass beispielsweise für eine Tabellenartige Ansicht genutzt wird und stellt einen Filter ein, dass nicht mehr alle Spalten gezeigt werden sollen, so hat man meistens folgende Konstellation:\r\n \tArray mit allen Spalten \tArray mit Keys der anzuzeigenden Spalten \r\nUm das Ganze nun zu filtern benötigt man array_flip&nbsp;und array_intersect_key.\r\nDas funktioniert dann so. Unser Filter-Array wird mit array_flip so gedreht, dass die Keys auch wirklich die Keys im Array werden. Mit der Funktion array_intersect_key wird dann die Schnittmenge aus beiden Arrays zurückgegegeben und es bleiben nur die Spalten übrig, die im Key-Array vorhanden waren.\r\nHier ein Beispiel: $customer['address'] = '123 fake st';\r\n$customer['name'] = 'Tim';\r\n$customer['dob'] = '12/08/1986';\r\n$customer['dontShowMe'] = 'Diese Spalte soll nicht gezeigt werden';\r\n\r\n// Array mit Spalten, die gezeigt werden sollen\r\n$filterKeys = array('name', 'dob', 'address');\r\n\r\n$customerFiltered = array_intersect_key($customer, array_flip($filterKeys)); Das erzeugt dann folgende Ausgabe für $customerFiltered Array (\r\n  [address] => 123 fake st\r\n  [name] => Tim\r\n  [dob] => 12/08/1986\r\n\r\n)"
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#use](/tag.html?tag=473&cHash=b4ff76538534b7157c11cbab1a4c7016)[#key](/tag.html?tag=601&cHash=22053b15dee1ac1743743b8aae892d18)[#by](/tag.html?tag=636&cHash=a11a8fa424bcd565b60a4b68b1b1b608)[#keys](/tag.html?tag=689&cHash=48c503a6da40893a5ba07b76526ab215)[#filter](/tag.html?tag=984&cHash=ab384e857a0880f737177bcf452a0227)[#other](/tag.html?tag=1117&cHash=b5f5e28d32ab674fb80173cae8d4302a)[#array\_intersect\_key](/tag.html?tag=1123&cHash=7b9f00a048436faba44b102251cd7302)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

22\. Feb 2019

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.