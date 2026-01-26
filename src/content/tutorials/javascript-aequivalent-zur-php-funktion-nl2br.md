---
title: Javascript Äquivalent zur Php-Funktion nl2br()
date: '2011-11-14T10:29:26.000Z'
slug: javascript-aequivalent-zur-php-funktion-nl2br
tags:
  - '12'
  - '13'
  - '20'
  - '41'
  - '69'
  - '70'
  - '71'
description: >-
  Ich brauchte eine Funktion, die mir wie die PHP Funktion nl2br Break-Tags
  setzt. Nach kurzem suchen wurde ich fündig ;)

  Einfach diese Funktion in eure Javascript-Datei einfügen und via
  nl2br($string) wie bei PHP aufrufen. Das wars auch schon ;) 

  function nl2br (str, is_xhtml) {

  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '&lt;br /&gt;'
  : '&lt;br /&gt;';

  return (str + '').replace(/([^&gt;rn]?)(rn|nr|r|n)/g, '$1'+ breakTag +'$2');

  }
   
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript Äquivalent zur Php-Funktion nl2br()

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#function](/tag.html?tag=12&cHash=c2e2c35e28fadd29f90cdd9ba3ac9efa)[#funktion](/tag.html?tag=13&cHash=395d33aa14ac557c3256d2625e0c2b41)[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#js](/tag.html?tag=70&cHash=97020bd023d81a2e1d049a787e531ccd)[#nl2br](/tag.html?tag=71&cHash=126acf2cbedf5fc70d5a7701489bc999)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Nov 2011

Ich brauchte eine Funktion, die mir wie die PHP Funktion nl2br Break-Tags setzt. Nach kurzem suchen wurde ich fündig ;)

Einfach diese Funktion in eure Javascript-Datei einfügen und via nl2br($string) wie bei PHP aufrufen. Das wars auch schon ;)

```

function nl2br (str, is_xhtml) {
var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br />';
return (str + '').replace(/([^>rn]?)(rn|nr|r|n)/g, '$1'+ breakTag +'$2');
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a3bb73fed1c73622057ba58e6aaef86d?s=75&d=mm&r=g)
    
    [ascii bilder](http://asciii.com/ascii-bilder-ascii-arts/?lang=de)
    
    nice piece of code, tahnk you
    
    21\. Mar 2012 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.