---
title: 'jQuery/JS Funktion: Seiten-Scroll zu einem Element'
date: '2019-09-05T07:28:00.000Z'
slug: jqueryjs-funktion-seiten-scroll-zu-einem-element
tags:
  - '20'
  - '69'
  - '61'
  - '680'
  - '468'
  - '85'
  - '739'
description: "Ich habe hier eine kleine Helper-Funktion für jQuery. Mit dieser Funktion kann man einfach ein Element ansprechen und sagen, dass der Viewport zu diesem Element scrollen soll. Mit dem Parameter addition kann man noch etwas mehr Abstand hinzufügen, damit das Scrollen nicht direkt am oberen Bildschirmrand hängt. /*\r\n* Short helper function to scroll to an element\r\n*\r\n*/\r\n$.fn.scrollView = function (addition) {\r\n    if(!parseInt(addition,10)) {\r\n        addition = 0;\r\n    }\r\n    return this.each(function () {\r\n        $('html, body').animate({\r\n            scrollTop: $(this).offset().top - addition\r\n        }, 200);\r\n    });\r\n}\r\n\r\n// Usage\r\n$('myelement').scrollView();\r\n$('myelement').scrollView(100); // for an offset with 100px"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# jQuery/JS Funktion: Seiten-Scroll zu einem Element

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#scroll](/tag.html?tag=61&cHash=5a73bee04896e919a772699d1f0b0bcd)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#html](/tag.html?tag=85&cHash=91a7ea3a6587e1d4fa3e5c908a161193)[#body](/tag.html?tag=468&cHash=0e6d113fcf354909c999d48eda0d7550)[#element](/tag.html?tag=680&cHash=b28d99e39f2c30c9e9d42958b32a6af7)[#viewport](/tag.html?tag=739&cHash=c1339fc00773e861e62c6ad26d5d9285)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Sep 2019

Ich habe hier eine kleine Helper-Funktion für jQuery. Mit dieser Funktion kann man einfach ein Element ansprechen und sagen, dass der Viewport zu diesem Element scrollen soll. Mit dem Parameter addition kann man noch etwas mehr Abstand hinzufügen, damit das Scrollen nicht direkt am oberen Bildschirmrand hängt.

```
/*
* Short helper function to scroll to an element
*
*/
$.fn.scrollView = function (addition) {
    if(!parseInt(addition,10)) {
        addition = 0;
    }
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - addition
        }, 200);
    });
}

// Usage
$('myelement').scrollView();
$('myelement').scrollView(100); // for an offset with 100px
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a8fbf0d40ce98b3e92fa83bce1702042?s=75&d=mm&r=g)
    
    Andrea
    
    hat bei mir geklappt, vielen Dank!
    
    22\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a8fbf0d40ce98b3e92fa83bce1702042?s=75&d=mm&r=g)
    
    Alex
    
    funktioniert einwandfrei! danke für das Tutorial
    
    17\. Oct 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.