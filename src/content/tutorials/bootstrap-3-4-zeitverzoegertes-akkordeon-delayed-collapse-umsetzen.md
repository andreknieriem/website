---
title: 'Bootstrap 3+4: Zeitverzögertes Akkordeon (Delayed Collapse) umsetzen'
date: '2018-04-06T13:21:00.000Z'
slug: bootstrap-3-4-zeitverzoegertes-akkordeon-delayed-collapse-umsetzen
tags:
  - '215'
  - '1031'
  - '1032'
  - '1033'
  - '1034'
  - '1035'
  - '1036'
description: "Für ein Projekt brauchte ich letztens eine kleine Verzögerung, bis ein Bootstrap Collapse (Akkordeon) geöffnet, bzw. geschlossen werden sollte. Das Ganze hing mit einer CSS Animation zusammen. Folgendes ist dabei herausgekommen und ist sehr leicht zu bedienen und es funktioniert wunderbar. $('[data-delayed-toggle=\"collapse\"]').on('click', function(e) {\r\n\r\n  var delay = $(this).data('delay') || 1000,\r\n  target = $($(this).attr('href'));\r\n\r\n  window.setTimeout(function() {\r\n        \r\n    if (target.hasClass('show')) {\r\n    //if (target.hasClass('in')) { comment in if bootstrap 3, class is \"in\" not \"show\"\r\n      target.collapse('hide');\r\n    } else {\r\n      target.collapse('show');\r\n    }\r\n  }, delay);\r\n\r\n}) Die Benutzung ist relativ einfach und ähnlich dem Vorgehen von Bootstrap selbst. Anstelle von&nbsp;[data-toggle=\"collapse\"] am Link im Panel-Header zu haben, nimmt man&nbsp;[data-delayed-toggle=\"collapse\"]. Zudem kann man mit data-delay noch die Verzögerung in Milisekunden&nbsp;einstellen. Ist nichts gesetzt wird 1 Sekunde verzögert."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap 3+4: Zeitverzögertes Akkordeon (Delayed Collapse) umsetzen

#Tutorials#Bootstrap#Javascript#jQuery

* * *

![](/fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#delay](/tag.html?tag=1031&cHash=2239ea2a8354a743c1d0ad72ebd30662)[#collapse](/tag.html?tag=1032&cHash=ef0d4d3f2ff8bb21de8f399a63daf391)[#accordion](/tag.html?tag=1033&cHash=f26b1b506a943647a0c21047d092fed2)[#akkordeon](/tag.html?tag=1034&cHash=b08182c81715ca1dfdf55f00fd9e2a1b)[#verzögert](/tag.html?tag=1035&cHash=c0851eef37a30ad64427a458fb5c7948)[#timeout](/tag.html?tag=1036&cHash=dd5df81315d5b43fc33fd9326536dd7d)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Apr 2018

Für ein Projekt brauchte ich letztens eine kleine Verzögerung, bis ein Bootstrap Collapse (Akkordeon) geöffnet, bzw. geschlossen werden sollte. Das Ganze hing mit einer CSS Animation zusammen. Folgendes ist dabei herausgekommen und ist sehr leicht zu bedienen und es funktioniert wunderbar.

```
$('[data-delayed-toggle="collapse"]').on('click', function(e) {

  var delay = $(this).data('delay') || 1000,
  target = $($(this).attr('href'));

  window.setTimeout(function() {
        
    if (target.hasClass('show')) {
    //if (target.hasClass('in')) { comment in if bootstrap 3, class is "in" not "show"
      target.collapse('hide');
    } else {
      target.collapse('show');
    }
  }, delay);

})
```

Die Benutzung ist relativ einfach und ähnlich dem Vorgehen von Bootstrap selbst. Anstelle von \[data-toggle="collapse"\] am Link im Panel-Header zu haben, nimmt man \[data-delayed-toggle="collapse"\]. Zudem kann man mit data-delay noch die Verzögerung in Milisekunden einstellen. Ist nichts gesetzt wird 1 Sekunde verzögert.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a8fbf0d40ce98b3e92fa83bce1702042?s=75&d=mm&r=g)
    
    [Alex](https://bachelorschreibenlassen.com/blog/englischsprachige-bachelorarbeit-ohne-worterbuch)
    
    sogar für mich als absoluter Anfänger alles klar :)
    
    22\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/550174dd9891ca8c442a03b847c6e47a?s=75&d=mm&r=g)
    
    [Max](https://studhilfe.de/)
    
    Danke!!das ist richtig was ich brauche
    
    16\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, dass ich helfen konnte!
        
        16\. Apr 2018 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.