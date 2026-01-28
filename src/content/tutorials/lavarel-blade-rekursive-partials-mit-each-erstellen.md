---
title: 'Lavarel Blade: Rekursive Partials mit @each erstellen'
date: '2016-08-15T11:58:40.000Z'
slug: lavarel-blade-rekursive-partials-mit-each-erstellen
tags:
  - '474'
  - '671'
  - '860'
  - '861'
  - '862'
description: "Möchte man etwas in Laravel Blade darstellen, etwas&nbsp;&nbsp;ineinander verschachteltes darstellen, beispielsweise Kommentare oder Menüs, so kann man dies mit wenigen Handgriffen tun.\r\nSagen wir haben folgendes Array, welches Kommentare und Antworte zu Kommentaren enthält: \r\n$comments = array(\r\n  0 =&gt; array(\r\n    'author' =&gt; 'Max',\r\n    'comment' =&gt; 'Lorem Ipsum',\r\n    'replies' =&gt; array(\r\n      0 =&gt; array(\r\n        'author' =&gt; 'Manfred'\r\n        'comment' =&gt; 'Lorem Ipsum',\r\n        'replies' =&gt; array()\r\n      )\r\n    )  \r\n  ),\r\n  1 =&gt; array(\r\n    'author' =&gt; 'Max',\r\n    'comment' =&gt; 'Lorem Ipsum',\r\n    'replies' =&gt; array()\r\n  ),\r\n  2 =&gt; array(\r\n    'author' =&gt; 'Max',\r\n    'comment' =&gt; 'Lorem Ipsum',\r\n    'replies' =&gt; array(\r\n      0 =&gt; array(\r\n        'author' =&gt; 'Manfred'\r\n        'comment' =&gt; 'Lorem Ipsum',\r\n        'replies' =&gt; array(\r\n          0 =&gt; array(\r\n           'author' =&gt; 'Max',\r\n           'comment' =&gt; 'Lorem Ipsum',\r\n           'replies' =&gt; array()\r\n          ),\r\n          1 =&gt; array(\r\n            'author' =&gt; 'Max',\r\n            'comment' =&gt; 'Lorem Ipsum',\r\n            'replies' =&gt; array()\r\n          ),\r\n        )\r\n      )\r\n    )  \r\n  ),\r\n)\r\n Um jetzt die Kommentare anzuzeigen benutzen wir die each Funktion von Blade. @each('Partials.comment', $comments, 'comment', 'Partials.commentempty') Dieser Code macht Folgendes:\r\nDas Partial comment.blade.php&nbsp;wird geladenDie Rekords die in $comments stehen werden übergebender Name comment wird als Variable für jeden Durchgang mitgegebenDas Partials commentempty.blade.php&nbsp;wird benutzt, falls $comments leer ist\r\nDas Ganze ist jetzt noch eine Kurzschreibweise von @foreach. \r\nJetzt kommt der Interessante Teil, das Partial, was sich selbst wieder benutzt:  &lt;ul&gt;\r\n    &lt;li&gt;\r\n    {{ $comment.comment}}\r\n        @if (count($comment['replies']) &gt; 0)\r\n          @each('Partials.comment', $comment['replies'], 'comment')\r\n        @endif\r\n    &lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n Der Trick an der Sache ist es, dass das Partial checkt, ob der derzeitige Kommentar noch Antworten hat und wenn ja wird wieder die @each Funktion mit sich selbst als Template geladen. So bekommt man eine rekursive verschachtelung.\r\nViel Spaß damit!"
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

[#menu](/tag.html?tag=474&cHash=afa1a85544c323a01d349889dfb80551)[#laravel](/tag.html?tag=671&cHash=5a1ac0040ad4ab46c7ec4ef355efd717)[#blade](/tag.html?tag=860&cHash=3e4dafe7e7e7a6a8bd4f029388356a6f)[#recursive](/tag.html?tag=861&cHash=9bb9359c98c52ee14ba50177e056a49a)[#comments](/tag.html?tag=862&cHash=3e0e3e88562bc0d2340d3a425e73b0b3)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Aug 2016

Möchte man etwas in Laravel Blade darstellen, etwas  ineinander verschachteltes darstellen, beispielsweise Kommentare oder Menüs, so kann man dies mit wenigen Handgriffen tun.

Sagen wir haben folgendes Array, welches Kommentare und Antworte zu Kommentaren enthält:

```

$comments = array(
  0 => array(
    'author' => 'Max',
    'comment' => 'Lorem Ipsum',
    'replies' => array(
      0 => array(
        'author' => 'Manfred'
        'comment' => 'Lorem Ipsum',
        'replies' => array()
      )
    )  
  ),
  1 => array(
    'author' => 'Max',
    'comment' => 'Lorem Ipsum',
    'replies' => array()
  ),
  2 => array(
    'author' => 'Max',
    'comment' => 'Lorem Ipsum',
    'replies' => array(
      0 => array(
        'author' => 'Manfred'
        'comment' => 'Lorem Ipsum',
        'replies' => array(
          0 => array(
           'author' => 'Max',
           'comment' => 'Lorem Ipsum',
           'replies' => array()
          ),
          1 => array(
            'author' => 'Max',
            'comment' => 'Lorem Ipsum',
            'replies' => array()
          ),
        )
      )
    )  
  ),
)
```

Um jetzt die Kommentare anzuzeigen benutzen wir die each Funktion von Blade.

```
@each('Partials.comment', $comments, 'comment', 'Partials.commentempty')
```

Dieser Code macht Folgendes:

*   Das Partial comment.blade.php wird geladen
*   Die Rekords die in $comments stehen werden übergeben
*   der Name comment wird als Variable für jeden Durchgang mitgegeben
*   Das Partials commentempty.blade.php wird benutzt, falls $comments leer ist

Das Ganze ist jetzt noch eine Kurzschreibweise von @foreach.

Jetzt kommt der Interessante Teil, das Partial, was sich selbst wieder benutzt:

```
<ul>
    <li>
    {{ $comment.comment}}
        @if (count($comment['replies']) > 0)
          @each('Partials.comment', $comment['replies'], 'comment')
        @endif
    </li>
</ul>
```

Der Trick an der Sache ist es, dass das Partial checkt, ob der derzeitige Kommentar noch Antworten hat und wenn ja wird wieder die @each Funktion mit sich selbst als Template geladen. So bekommt man eine rekursive verschachtelung.

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.