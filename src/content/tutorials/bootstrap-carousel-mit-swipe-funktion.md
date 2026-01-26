---
title: 'Bootstrap: Carousel mit Swipe Funktion'
date: '2014-10-10T16:17:38.000Z'
slug: bootstrap-carousel-mit-swipe-funktion
tags:
  - '12'
  - '215'
  - '395'
  - '539'
  - '544'
  - '545'
  - '546'
description: "Um das Bootstrap Carousel auf mobilen, bzw. Touchgeräten mit einem Fingerwisch (Swipe) zu bedienen habe ich hier ein kleines Snipped gebaut. Das Ganze setzt voraus, dass man das jquery.touchswipe Plugin vorher eingebunden hat. \r\n$('.carousel').swipe({\r\n\tswipeLeft:function(event, direction, distance, duration, fingerCount) {\r\n\t\t$(this).carousel('next');    \r\n\t},\r\n\tswipeRight:function(event, direction, distance, duration, fingerCount) {\r\n\t\t$(this).carousel('prev');  \r\n\t},\r\n\tthreshold:0\r\n});\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap: Carousel mit Swipe Funktion

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#function](/tag.html?tag=12&cHash=c2e2c35e28fadd29f90cdd9ba3ac9efa)[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#how to](/tag.html?tag=395&cHash=0a25a9a9159e9ff676d10a766d9d88d5)[#carousel](/tag.html?tag=539&cHash=84056362616d0e4257729367df84e130)[#swipe](/tag.html?tag=544&cHash=2e19684227136500ddd07ebed459d4db)[#swipeleft](/tag.html?tag=545&cHash=91ee6c34cd0bd41a727e43fd39cae47a)[#swiperight](/tag.html?tag=546&cHash=a3a4e60c0aeb7ed1f851dfa9a80ae774)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. Oct 2014

Um das Bootstrap Carousel auf mobilen, bzw. Touchgeräten mit einem Fingerwisch (Swipe) zu bedienen habe ich hier ein kleines Snipped gebaut. Das Ganze setzt voraus, dass man das [jquery.touchswipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin) Plugin vorher eingebunden hat.

```

$('.carousel').swipe({
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$(this).carousel('next');    
	},
	swipeRight:function(event, direction, distance, duration, fingerCount) {
		$(this).carousel('prev');  
	},
	threshold:0
});
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/340143b622435c4f00c9e0e76ffd8a6e?s=75&d=mm&r=g)
    
    [Mark](www.web-freelancer-gesucht.de)
    
    Super, genau wonach ich gesucht habe! Danke sehr!
    
    15\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich :)
        
        16\. May 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/715ab44610ac66d02e9c3e70f30b782b?s=75&d=mm&r=g)
    
    Bernhard Haberstetter
    
    Danke, funktioniert super!
    
    05\. Feb 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.