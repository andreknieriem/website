---
title: Feld leeren X-Button beim Internet Explorer 10+ ausblenden
date: '2014-04-03T16:30:05.000Z'
slug: feld-leeren-x-button-beim-internet-explorer-10-ausblenden
tags:
  - ie
  - internet explorer
  - ausblenden
  - ms-clear
  - X
  - löschen
  - leeren
description: "Der Internet Explorer ab der Version 10 hat ein Feature, was wohl eher mehr für Touch-Geräte gedacht ist. Sobald mindestens 1 Zeichen in einem Input-Feld ist wird hinten ein X eingeblendet, um das Input-Feld mit einem Klick zu leeren. \nHat man nun aber, wie ich eine Validierung, die beispielsweise genau an der Stelle ein Ausrufezeichen anzeigen soll, oder sonst etwas, dann stört dieses X sehr. Immerhin kann man es via CSS ganz einfach ausblenden. Das Ganze geht so: \r\n&lt;code class=\"language-css\"&gt;\r\n/*Style the ::-ms-clear pseudo-element for the box:*/\r\n.someinput::-ms-clear {\r\n    display: none;\r\n}\r\n&lt;/code&gt;\r\n "
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Der Internet Explorer ab der Version 10 hat ein Feature, was wohl eher mehr für Touch-Geräte gedacht ist. Sobald mindestens 1 Zeichen in einem Input-Feld ist wird hinten ein X eingeblendet, um das Input-Feld mit einem Klick zu leeren.

Hat man nun aber, wie ich eine Validierung, die beispielsweise genau an der Stelle ein Ausrufezeichen anzeigen soll, oder sonst etwas, dann stört dieses X sehr. Immerhin kann man es via CSS ganz einfach ausblenden. Das Ganze geht so:

```css

<code class="language-css">
/*Style the ::-ms-clear pseudo-element for the box:*/
.someinput::-ms-clear {
    display: none;
}
</code>

```