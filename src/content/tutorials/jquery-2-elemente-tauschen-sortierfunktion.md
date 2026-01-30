---
title: 'jQuery: 2 Elemente tauschen (Sortierfunktion)'
date: '2015-04-14T15:36:31.000Z'
slug: jquery-2-elemente-tauschen-sortierfunktion
tags:
  - jquery
  - change
  - sort
  - swap
  - exchange
  - elements
  - elemente
  - objekte
  - tauschen
description: "Für eine kleine sortierbare Liste brauchte ich ein Zeilen Code, die in einer Liste 2 Elemente miteinander austauscht. Das Ganze habe ich dann so gelöst.\nHtml-Markup \r\n&lt;div class=\"list\"&gt;\r\n    &lt;div class=\"item\"&gt;Listitem1 &lt;div class=\"sortArrows\"&gt;&lt;a href=\"#\" class=\"move-down\"&gt;&darr;&lt;/a&gt;&lt;a href=\"#\" class=\"move-up\"&gt;&uarr;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;\r\n    &lt;div class=\"item\"&gt;Listitem2 &lt;div class=\"sortArrows\"&gt;&lt;a href=\"#\" class=\"move-down\"&gt;&darr;&lt;/a&gt;&lt;a href=\"#\" class=\"move-up\"&gt;&uarr;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;\r\n    &lt;div class=\"item\"&gt;Listitem3 &lt;div class=\"sortArrows\"&gt;&lt;a href=\"#\" class=\"move-down\"&gt;&darr;&lt;/a&gt;&lt;a href=\"#\" class=\"move-up\"&gt;&uarr;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;\r\n&lt;/div&gt;\r\n Javascript \r\n$('.sortArrows a').click(function (e) {\r\n    e.preventDefault(); // Klick Event nicht auslösen\r\n    var $div = $(this).closest('.item'); // das derzeitige Item finden\r\n    if (jQuery(e.target).is('.move-down')) { // gucken, ob man den Pfeil runter geklickt hat\r\n        $div.next('.item').after($div); // nach unten sortieren\r\n    } else {\r\n        $div.prev('.item').before($div);// ansonsten nach oben sortieren\r\n    }\r\n});\r\n Demo\n\n    Listitem1 &darr;&uarr;\n    Listitem2 &darr;&uarr;\n    Listitem3 &darr;&uarr;\n"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Für eine kleine sortierbare Liste brauchte ich ein Zeilen Code, die in einer Liste 2 Elemente miteinander austauscht. Das Ganze habe ich dann so gelöst.

**Html-Markup**

```html

<div class="list">
    <div class="item">Listitem1 <div class="sortArrows"><a href="#" class="move-down">↓</a><a href="#" class="move-up">↑</a></div></div>
    <div class="item">Listitem2 <div class="sortArrows"><a href="#" class="move-down">↓</a><a href="#" class="move-up">↑</a></div></div>
    <div class="item">Listitem3 <div class="sortArrows"><a href="#" class="move-down">↓</a><a href="#" class="move-up">↑</a></div></div>
</div>

```

**Javascript**

```javascript

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
