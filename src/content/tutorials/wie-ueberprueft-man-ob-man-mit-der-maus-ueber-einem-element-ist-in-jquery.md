---
title: Wie überprüft man, ob man mit der Maus über einem Element ist in jQuery?
date: '2012-11-28T08:56:50.000Z'
slug: wie-ueberprueft-man-ob-man-mit-der-maus-ueber-einem-element-ist-in-jquery
tags:
  - '20'
  - '131'
  - '132'
  - '133'
  - '134'
  - '135'
  - '136'
  - '137'
description: >-
  Diese Frage habe ich mir letztens gestellt. Die Sache ist die:

  Ein Tooltip wird eingeblendet, wenn ich ein bestimmtes Element hover. Der
  Tooltip hat einen Link in sich und ist im Dom über dem schließenden Body-Tag.
  Nun wurde der Tooltip sofort ausgeblendet, wenn man die Maus ein wenig bewegte
  und in den Tooltip ging, weil das Hover von meinem Element nicht mehr aktiv
  war. Um das Ganze abzufangen habe ich folgende Lösung gefunden und angepasst: 

  $("someelement").mouseenter(function(){
      clearTimeout($(this).data('timeoutId'));
      $(this).find(".tooltip").fadeIn("slow");
  }).mouseleave(function(){
      var someElement = $(this);
      var timeoutId = setTimeout(function(){
          someElement.find(".tooltip").fadeOut("slow");
      }, 650);
      //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
      someElement.data('timeoutId', timeoutId);
  });
   Was macht der Code?
  Es ist relativ einfach. Der Tooltip wird mit einer Verzögerung erst
  ausgeblendet. Hovert man in der Zeit den Tooltip wird das die Funktion
  gestoppt, die den Tooltip ausblendet.
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Wie überprüft man, ob man mit der Maus über einem Element ist in jQuery?

#Tutorials#Javascript#jQuery

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#anzeigen](/tag.html?tag=131&cHash=e320e0c23c97b3855a42f9242a0e4bf0)[#ausblenden](/tag.html?tag=132&cHash=0cb09d111500889fb95e0aa2cc85bbe0)[#einblenden](/tag.html?tag=133&cHash=b29acd219afd305ceacadca229e7ad6e)[#hide](/tag.html?tag=134&cHash=bacb6ef1bbc2501f704c5e97e0aec111)[#mouseover](/tag.html?tag=135&cHash=a294d5132db17c58bba16a3b0edd21ff)[#prevent](/tag.html?tag=136&cHash=a5835ef811b982b1ba06bc5d68fb81f9)[#show](/tag.html?tag=137&cHash=be751c589aff29578ff9bbb9d4dd6475)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Nov 2012

Diese Frage habe ich mir letztens gestellt. Die Sache ist die:

Ein Tooltip wird eingeblendet, wenn ich ein bestimmtes Element hover. Der Tooltip hat einen Link in sich und ist im Dom über dem schließenden Body-Tag. Nun wurde der Tooltip sofort ausgeblendet, wenn man die Maus ein wenig bewegte und in den Tooltip ging, weil das Hover von meinem Element nicht mehr aktiv war. Um das Ganze abzufangen habe ich folgende Lösung gefunden und angepasst:

```

$("someelement").mouseenter(function(){
    clearTimeout($(this).data('timeoutId'));
    $(this).find(".tooltip").fadeIn("slow");
}).mouseleave(function(){
    var someElement = $(this);
    var timeoutId = setTimeout(function(){
        someElement.find(".tooltip").fadeOut("slow");
    }, 650);
    //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
    someElement.data('timeoutId', timeoutId);
});
```

**Was macht der Code?**

Es ist relativ einfach. Der Tooltip wird mit einer Verzögerung erst ausgeblendet. Hovert man in der Zeit den Tooltip wird das die Funktion gestoppt, die den Tooltip ausblendet.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.