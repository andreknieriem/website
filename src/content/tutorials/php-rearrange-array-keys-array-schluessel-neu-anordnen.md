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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#rearrange](/tag.html?tag=688&cHash=1373f978a7464de0717a625245bc1c87)[#keys](/tag.html?tag=689&cHash=48c503a6da40893a5ba07b76526ab215)[#new](/tag.html?tag=690&cHash=64aa54b391b77be80b1bb0c7f813ef2c)[#order](/tag.html?tag=691&cHash=c30cf33e35cbf6c8af302cd38ef79761)[#anordnen](/tag.html?tag=692&cHash=faaf5adda922a53b4dc8f455923b3b9a)[#schlüssel](/tag.html?tag=693&cHash=1e398bdd2f77e18cd28d026f6d23c04b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

11\. Jun 2015

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.