---
title: 'Internet Explorer: Scrollbar nicht über den Content laufen lassen'
date: '2015-09-28T16:57:52.000Z'
slug: internet-explorer-scrollbar-nicht-ueber-den-content-laufen-lassen
tags:
  - '44'
  - '86'
  - '87'
  - '760'
  - '761'
  - '762'
  - '763'
  - '764'
  - '765'
  - '766'
description: "Seit dem Internet Explorer 10 ist das Scrollbar-Verhalten etwas seltsam. Denkt das System, man hat ein Touch-Device blendet er andere Scrollbars ein. Benutzt man dann die Maus ändern sich diese auch wieder. Nun kommt es allerdings oft zum Problem, dass die Scrollbar über dem Content liegt und nicht daneben, wie sonst üblich. \nHier ein Screenshot im Vergleich:\n\nDas Ganze lässt sich leicht mit CSS regeln, indem man dem Body folgende Dinge gibt: \r\nbody{\r\n    overflow-y: scroll;\r\n    -ms-overflow-style: scrollbar;\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Internet Explorer: Scrollbar nicht über den Content laufen lassen

#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#seite](/tag.html?tag=44&cHash=e70f59cf751d213f2167619176f35fae)[#ie](/tag.html?tag=86&cHash=759b348c57928fea01a7cffef340e851)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#10](/tag.html?tag=760&cHash=8835db585c2f0a1b25391bf1e4856fe4)[#11](/tag.html?tag=761&cHash=a8a12e85f0a4aa80b14b0e25cb8f9f58)[#scrollbar](/tag.html?tag=762&cHash=f37a475d300e8dc28f89811afb7e092c)[#over](/tag.html?tag=763&cHash=2504d16eaba13cc60e14b16fadf2a194)[#content](/tag.html?tag=764&cHash=b8a45bb55a875b84b1ffa2afeae517a5)[#über](/tag.html?tag=765&cHash=b2453742fd07eb67b52172b17163c63b)[#inhalt](/tag.html?tag=766&cHash=cf1370060b0809705a1cb7a2d4a52879)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Sep 2015

Seit dem Internet Explorer 10 ist das Scrollbar-Verhalten etwas seltsam. Denkt das System, man hat ein Touch-Device blendet er andere Scrollbars ein. Benutzt man dann die Maus ändern sich diese auch wieder. Nun kommt es allerdings oft zum Problem, dass die Scrollbar über dem Content liegt und nicht daneben, wie sonst üblich.

**Hier ein Screenshot im Vergleich:**

[![scrollbar](http://andreknieriem.de/wp-content/uploads/2015/09/scrollbar.png)](http://andreknieriem.de/wp-content/uploads/2015/09/scrollbar.png)

Das Ganze lässt sich leicht mit CSS regeln, indem man dem Body folgende Dinge gibt:

```

body{
    overflow-y: scroll;
    -ms-overflow-style: scrollbar;
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