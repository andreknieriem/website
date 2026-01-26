---
title: Feld leeren X-Button beim Internet Explorer 10+ ausblenden
date: '2014-04-03T16:30:05.000Z'
slug: feld-leeren-x-button-beim-internet-explorer-10-ausblenden
tags:
  - '86'
  - '87'
  - '132'
  - '449'
  - '450'
  - '451'
  - '452'
description: "Der Internet Explorer ab der Version 10 hat ein Feature, was wohl eher mehr für Touch-Geräte gedacht ist. Sobald mindestens 1 Zeichen in einem Input-Feld ist wird hinten ein X eingeblendet, um das Input-Feld mit einem Klick zu leeren. \nHat man nun aber, wie ich eine Validierung, die beispielsweise genau an der Stelle ein Ausrufezeichen anzeigen soll, oder sonst etwas, dann stört dieses X sehr. Immerhin kann man es via CSS ganz einfach ausblenden. Das Ganze geht so: \r\n&lt;code class=\"language-css\"&gt;\r\n/*Style the ::-ms-clear pseudo-element for the box:*/\r\n.someinput::-ms-clear {\r\n    display: none;\r\n}\r\n&lt;/code&gt;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Feld leeren X-Button beim Internet Explorer 10+ ausblenden

#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#ie](/tag.html?tag=86&cHash=759b348c57928fea01a7cffef340e851)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#ausblenden](/tag.html?tag=132&cHash=0cb09d111500889fb95e0aa2cc85bbe0)[#ms-clear](/tag.html?tag=449&cHash=1349e633ae16cd00c28c1facd06c9f0d)[#X](/tag.html?tag=450&cHash=c49a377dc37e1f3908bf386f167be0f5)[#löschen](/tag.html?tag=451&cHash=ee1c5984cbd87533f7a71e7dc89f4b42)[#leeren](/tag.html?tag=452&cHash=93883378f1e50cfb1d8694eedbf5ae2f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. Apr 2014

Der Internet Explorer ab der Version 10 hat ein Feature, was wohl eher mehr für Touch-Geräte gedacht ist. Sobald mindestens 1 Zeichen in einem Input-Feld ist wird hinten ein X eingeblendet, um das Input-Feld mit einem Klick zu leeren.

Hat man nun aber, wie ich eine Validierung, die beispielsweise genau an der Stelle ein Ausrufezeichen anzeigen soll, oder sonst etwas, dann stört dieses X sehr. Immerhin kann man es via CSS ganz einfach ausblenden. Das Ganze geht so:

```

<code class="language-css">
/*Style the ::-ms-clear pseudo-element for the box:*/
.someinput::-ms-clear {
    display: none;
}
</code>
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/4fd211496711fa7aa489168c50eca4d7?s=75&d=mm&r=g)
    
    [wc sitz](https://www.wcsitz.eu)
    
    Hier habe ich einige wertvolle Informationen erhalten die bestimmt sehr hilfreich sein werden. Danke dafür.  
      
    Gruß Anna
    
    08\. Dec 2016 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.