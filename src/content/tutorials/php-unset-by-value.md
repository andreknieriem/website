---
title: 'Php: Unset by Value'
date: '2015-03-19T16:52:41.000Z'
slug: php-unset-by-value
tags:
  - '41'
  - '159'
  - '451'
  - '585'
  - '601'
  - '602'
  - '635'
  - '636'
  - '637'
description: "Hier ist kleine aber feine Funktion, die ein Array Object nach dessen Wert und nicht nach dessen Key aus dem Array löscht.\nFunktion \r\nif(($key = array_search($needle, $haystack)) !== false) {\r\n    unset($haystack[$key]);\r\n}\r\n Beispiel \r\n\r\n// Unser Array\r\n$array = array(\"Orange\", \"Banane\", \"Apfel\", \"Himbeere\");\r\n\r\n// Funktion um Banane aus dem Array zu löschen\r\nif(($key = array_search('Banane', $array)) !== false) {\r\n    unset($array[$key]);\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Php: Unset by Value

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#löschen](/tag.html?tag=451&cHash=ee1c5984cbd87533f7a71e7dc89f4b42)[#unset](/tag.html?tag=585&cHash=b04fd2b8a45abfcb4a6fd669bb92320c)[#key](/tag.html?tag=601&cHash=22053b15dee1ac1743743b8aae892d18)[#value](/tag.html?tag=602&cHash=f95fd230fc0b057977ecdcb7b26b7e7d)[#bei](/tag.html?tag=635&cHash=aded039b70c1e60d4a4293fc2bb2fa59)[#by](/tag.html?tag=636&cHash=a11a8fa424bcd565b60a4b68b1b1b608)[#wert](/tag.html?tag=637&cHash=818c3a2ebbf819b5d06113a8ee97642c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Mar 2015

Hier ist kleine aber feine Funktion, die ein Array Object nach dessen Wert und nicht nach dessen Key aus dem Array löscht.

**Funktion**

```

if(($key = array_search($needle, $haystack)) !== false) {
    unset($haystack[$key]);
}
```

**Beispiel**

```


// Unser Array
$array = array("Orange", "Banane", "Apfel", "Himbeere");

// Funktion um Banane aus dem Array zu löschen
if(($key = array_search('Banane', $array)) !== false) {
    unset($array[$key]);
}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.