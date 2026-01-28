---
title: 'PHP: Das n-th Element aus einem assoziativen Array bekommen'
date: '2015-05-28T15:39:38.000Z'
slug: php-das-n-th-element-aus-einem-assoziativen-array-bekommen
tags:
  - '41'
  - '97'
  - '159'
  - '512'
  - '678'
  - '679'
  - '680'
  - '681'
  - '682'
description: "Möchte man aus einem assoziativen Array ein bestimmtes Element bekommen, beispielsweise das 2. kann man dies ganz einfach mit der array_slice Funktion lösen. Das untere Beispiel zeigt dies. Würde man einfach $data[2] machen, würde dies nicht gehen.\nArray \r\n$data = Array\r\n(\r\n    ['var'] =&gt; Test\r\n    ['var2'] =&gt; 1\r\n    ['var3'] =&gt; Array\r\n        (\r\n            [0] =&gt; 1\r\n            [1] =&gt; 0\r\n        )\r\n\r\n    ['var4'] =&gt; Test 2\r\n    ['var5'] =&gt; Test 3\r\n)\r\n Zweites Element bekommen \r\n// Nur das Element\r\n$second = array_slice($data, 1, 1);\r\n\r\n// Nur das Value\r\n$second = array_slice($data, 1, 1);\r\nlist($second ) = array_slice($data, 1, 1);\r\n\r\n// Ausgabe\r\n$second = array('var2' =&gt; 1);\r\n$second = 1\r\n \r\n "
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#bekommen](/tag.html?tag=512&cHash=03330f1d0965d374dabcf8dd59405ca7)[#nth](/tag.html?tag=678&cHash=651363d39448929d84b58ec55bf6b34b)[#xtes](/tag.html?tag=679&cHash=18468e02c36c2973924e83af422622b3)[#element](/tag.html?tag=680&cHash=b28d99e39f2c30c9e9d42958b32a6af7)[#assosiative](/tag.html?tag=681&cHash=01415c09089e2a9f1af942453fee5c6a)[#assoziativ](/tag.html?tag=682&cHash=cc3955a41554b0d9bd496b8620ed2ced)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. May 2015

Möchte man aus einem assoziativen Array ein bestimmtes Element bekommen, beispielsweise das 2. kann man dies ganz einfach mit der [array\_slice](http://php.net/manual/de/function.array-slice.php) Funktion lösen. Das untere Beispiel zeigt dies. Würde man einfach $data\[2\] machen, würde dies nicht gehen.

**Array**

```

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

```

// Nur das Element
$second = array_slice($data, 1, 1);

// Nur das Value
$second = array_slice($data, 1, 1);
list($second ) = array_slice($data, 1, 1);

// Ausgabe
$second = array('var2' => 1);
$second = 1
 
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.