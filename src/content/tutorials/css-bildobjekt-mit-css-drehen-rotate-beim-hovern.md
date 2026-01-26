---
title: 'CSS: Bild/Objekt mit CSS drehen (rotate) beim Hovern'
date: '2014-01-15T16:14:13.000Z'
slug: css-bildobjekt-mit-css-drehen-rotate-beim-hovern
tags:
  - '20'
  - '78'
  - '396'
  - '397'
  - '398'
description: "Mit CSS3 kann man mitlerweile sehr schöne Animationen bauen und das völlig ohne Javascript. Zwar gibt es im IE Probleme, aber wer den Browser benutzt ist auch selber Schuld. Um etwas um 360° zu drehen, wenn man mit der Maus drübergeht (hover) einfach folgende Zeilen in das CSS kopieren und eurem Bild/Text was auch immer die Klasse \"rotate\" geben. Schon ist man fertig.\nDemo kann man hier sehen:\n .rotate{\r\n    -webkit-transition-duration: 0.8s;\r\n    -moz-transition-duration: 0.8s;\r\n    -ms-transition-duration: 0.8s;\r\n    -o-transition-duration: 0.8s;\r\n    transition-duration: 0.8s;\r\n\r\n    -webkit-transition-property: -webkit-transform;\r\n    -ms-transition-property: -webkit-transform;\r\n    -moz-transition-property: -moz-transform;\r\n    -o-transition-property: -o-transform;\r\n    transition-property: transform;\r\n\r\n    overflow:hidden;\r\n\r\n    }  \r\n\r\n.rotate:hover {\r\n    -webkit-transform:rotate(360deg);\r\n    -moz-transform:rotate(360deg);\r\n    -ms-transform:rotate(360deg);\r\n    -o-transform:rotate(360deg);\r\n} "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# CSS: Bild/Objekt mit CSS drehen (rotate) beim Hovern

#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#css3](/tag.html?tag=78&cHash=8d28466279fde4e903373d7cd58c1dd0)[#rotate](/tag.html?tag=396&cHash=c5b099f400cfcde31d03bb994dd21dfe)[#hover](/tag.html?tag=397&cHash=47f619ae8a6c56718d613349cc8b0724)[#360](/tag.html?tag=398&cHash=f05dd76ed0b7b23c76bf7355e99a61e2)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Jan 2014

Mit CSS3 kann man mitlerweile sehr schöne Animationen bauen und das völlig ohne Javascript. Zwar gibt es im IE Probleme, aber wer den Browser benutzt ist auch selber Schuld. Um etwas um 360° zu drehen, wenn man mit der Maus drübergeht (hover) einfach folgende Zeilen in das CSS kopieren und eurem Bild/Text was auch immer die Klasse "rotate" geben. Schon ist man fertig.

Demo kann man hier sehen:

![](http://andreknieriem.de/wp-content/themes/andreknieriemv3/resources/img/logo@2x.png)

```
.rotate{
    -webkit-transition-duration: 0.8s;
    -moz-transition-duration: 0.8s;
    -ms-transition-duration: 0.8s;
    -o-transition-duration: 0.8s;
    transition-duration: 0.8s;

    -webkit-transition-property: -webkit-transform;
    -ms-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform;

    overflow:hidden;

    }  

.rotate:hover {
    -webkit-transform:rotate(360deg);
    -moz-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    -o-transform:rotate(360deg);
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