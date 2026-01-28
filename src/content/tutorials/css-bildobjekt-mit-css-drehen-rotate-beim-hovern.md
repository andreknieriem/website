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
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

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