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
image: /fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png
demo_url: null
download_url: null
---

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