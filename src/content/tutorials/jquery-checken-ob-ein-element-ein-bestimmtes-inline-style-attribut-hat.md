---
title: 'jQuery: Checken ob ein Element ein bestimmtes inline-Style Attribut hat'
date: '2014-08-12T15:31:59.000Z'
slug: jquery-checken-ob-ein-element-ein-bestimmtes-inline-style-attribut-hat
tags:
  - '12'
  - '13'
  - '20'
  - '97'
  - '510'
  - '511'
  - '512'
description: "Oft werden von jQuery und Plugins Inline-Styles an Elemente geschrieben. Möchte man diese explizit auslesen, so kann man dies mit der folgenden Funktion tun.\njQuery Funktion: \r\n?(function ($) {\r\n    $.fn.inlineStyle = function (prop) {\r\n         var styles = this.attr(\"style\"),\r\n             value;\r\n         styles &amp;&amp; styles.split(\";\").forEach(function (e) {\r\n             var style = e.split(\":\");\r\n             if ($.trim(style[0]) === prop) {\r\n                 value = style[1];           \r\n             }                    \r\n         });   \r\n         return value;\r\n    };\r\n}(jQuery));\r\n Benutzung: \r\n//Returns value of \"width\" property or `undefined`\r\nvar width = $(\"#someElem\").inlineStyle(\"width\");\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#function](/tag.html?tag=12&cHash=c2e2c35e28fadd29f90cdd9ba3ac9efa)[#funktion](/tag.html?tag=13&cHash=395d33aa14ac557c3256d2625e0c2b41)[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#inline-style](/tag.html?tag=510&cHash=e84d4a71b700630fe3bc047944b5df9a)[#styling](/tag.html?tag=511&cHash=b80401eb5d8a09ddf69c4821a898d0a6)[#bekommen](/tag.html?tag=512&cHash=03330f1d0965d374dabcf8dd59405ca7)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Aug 2014

Oft werden von jQuery und Plugins Inline-Styles an Elemente geschrieben. Möchte man diese explizit auslesen, so kann man dies mit der folgenden Funktion tun.

**jQuery Funktion:**

```

?(function ($) {
    $.fn.inlineStyle = function (prop) {
         var styles = this.attr("style"),
             value;
         styles && styles.split(";").forEach(function (e) {
             var style = e.split(":");
             if ($.trim(style[0]) === prop) {
                 value = style[1];           
             }                    
         });   
         return value;
    };
}(jQuery));
```

**Benutzung:**

```

//Returns value of "width" property or `undefined`
var width = $("#someElem").inlineStyle("width");
```

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.