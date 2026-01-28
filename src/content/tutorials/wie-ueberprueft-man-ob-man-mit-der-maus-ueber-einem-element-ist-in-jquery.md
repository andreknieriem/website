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
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

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