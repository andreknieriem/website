---
title: 'jQuery: 2 Elemente tauschen (Sortierfunktion)'
date: '2015-04-14T15:36:31.000Z'
slug: jquery-2-elemente-tauschen-sortierfunktion
tags:
  - '20'
  - '225'
  - '529'
  - '656'
  - '657'
  - '658'
  - '659'
  - '660'
  - '661'
description: "Für eine kleine sortierbare Liste brauchte ich ein Zeilen Code, die in einer Liste 2 Elemente miteinander austauscht. Das Ganze habe ich dann so gelöst.\nHtml-Markup \r\n&lt;div class=\"list\"&gt;\r\n    &lt;div class=\"item\"&gt;Listitem1 &lt;div class=\"sortArrows\"&gt;&lt;a href=\"#\" class=\"move-down\"&gt;&darr;&lt;/a&gt;&lt;a href=\"#\" class=\"move-up\"&gt;&uarr;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;\r\n    &lt;div class=\"item\"&gt;Listitem2 &lt;div class=\"sortArrows\"&gt;&lt;a href=\"#\" class=\"move-down\"&gt;&darr;&lt;/a&gt;&lt;a href=\"#\" class=\"move-up\"&gt;&uarr;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;\r\n    &lt;div class=\"item\"&gt;Listitem3 &lt;div class=\"sortArrows\"&gt;&lt;a href=\"#\" class=\"move-down\"&gt;&darr;&lt;/a&gt;&lt;a href=\"#\" class=\"move-up\"&gt;&uarr;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;\r\n&lt;/div&gt;\r\n Javascript \r\n$('.sortArrows a').click(function (e) {\r\n    e.preventDefault(); // Klick Event nicht auslösen\r\n    var $div = $(this).closest('.item'); // das derzeitige Item finden\r\n    if (jQuery(e.target).is('.move-down')) { // gucken, ob man den Pfeil runter geklickt hat\r\n        $div.next('.item').after($div); // nach unten sortieren\r\n    } else {\r\n        $div.prev('.item').before($div);// ansonsten nach oben sortieren\r\n    }\r\n});\r\n Demo\n\n    Listitem1 &darr;&uarr;\n    Listitem2 &darr;&uarr;\n    Listitem3 &darr;&uarr;\n"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# jQuery: 2 Elemente tauschen (Sortierfunktion)

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#change](/tag.html?tag=225&cHash=e03463d4e882aa00bac9e68caa976293)[#sort](/tag.html?tag=529&cHash=c8471a5961fc04e0e79ff73456f5d3cc)[#swap](/tag.html?tag=656&cHash=fe7502b0bc035bea0d7bce50ecb0086f)[#exchange](/tag.html?tag=657&cHash=f6a9704b2902cd29c3ba06606e8d68fc)[#elements](/tag.html?tag=658&cHash=83fd53598991364782641ce20f903249)[#elemente](/tag.html?tag=659&cHash=f1656d57c794fd18dee1f8b52da78cb2)[#objekte](/tag.html?tag=660&cHash=480aa80c481eeac8c4c8a76727aebb0f)[#tauschen](/tag.html?tag=661&cHash=e56060684484cd4152b7e34dadb898aa)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Apr 2015

Für eine kleine sortierbare Liste brauchte ich ein Zeilen Code, die in einer Liste 2 Elemente miteinander austauscht. Das Ganze habe ich dann so gelöst.

**Html-Markup**

```

<div class="list">
    <div class="item">Listitem1 <div class="sortArrows"><a href="#" class="move-down">↓</a><a href="#" class="move-up">↑</a></div></div>
    <div class="item">Listitem2 <div class="sortArrows"><a href="#" class="move-down">↓</a><a href="#" class="move-up">↑</a></div></div>
    <div class="item">Listitem3 <div class="sortArrows"><a href="#" class="move-down">↓</a><a href="#" class="move-up">↑</a></div></div>
</div>
```

**Javascript**

```

$('.sortArrows a').click(function (e) {
    e.preventDefault(); // Klick Event nicht auslösen
    var $div = $(this).closest('.item'); // das derzeitige Item finden
    if (jQuery(e.target).is('.move-down')) { // gucken, ob man den Pfeil runter geklickt hat
        $div.next('.item').after($div); // nach unten sortieren
    } else {
        $div.prev('.item').before($div);// ansonsten nach oben sortieren
    }
});
```

**Demo**

Listitem1

[↓](/tutorials.html)[↑](/tutorials.html)

Listitem2

[↓](/tutorials.html)[↑](/tutorials.html)

Listitem3

[↓](/tutorials.html)[↑](/tutorials.html)

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.