---
title: jQuery UI Datepicker - Daten nicht anwählbar/verfügbar machen
date: '2013-01-08T06:15:06.000Z'
slug: jquery-ui-datepicker-daten-nicht-anwaehlbarverfuegbar-machen
tags:
  - javascript
  - buchungssystem
  - datepicker
  - jquery ui
  - unavailabled
  - unverfügbar
description: >-
  Möchte man einen Datepicker benutzen kommt man ziemlich schnell auf den, der
  bei jQuery UI eingebaut. Der Datepicker ist schön, flexibel und funktioniert
  browserübergreifend. Ich brauchte ihn allerdings in Verbindung mit einem
  Buchungssystem. Der Datepicker bietet eine Funktion an, die aufgerufen wird,
  bevor die Tage angezeigt werden. Diese heißt "beforeShowDay". Ich habe hier
  eine kleine Funktion, die nun alle Daten ausblendet, die nicht verfügbar sind.
  Diese Daten müssen im JSON Format vorliegen. 

  var unavailableDates = ["09-05-2011","14-05-2011","15-05-2011"];


  function unavailable(date) {
    dmy = ('0' + date.getDate()).slice(-2) + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + date.getFullYear();
    if ($.inArray(dmy, unavailableDates) &lt; 0) {
      return [true,"","Buche Jetzt"];
    } else {
      return [false,"","Ausgebucht"];
    }
  }


  $('#iDate').datepicker({ beforeShowDay: unavailable });
   Die Funktion guckt, ob in dem gerade angezeigten Monat Daten liegen, die nicht verfügbar sind und gibt dann false zurück.
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Möchte man einen Datepicker benutzen kommt man ziemlich schnell auf den, der bei [jQuery UI](http://jqueryui.com/) eingebaut. Der Datepicker ist schön, flexibel und funktioniert browserübergreifend. Ich brauchte ihn allerdings in Verbindung mit einem Buchungssystem. Der Datepicker bietet eine Funktion an, die aufgerufen wird, bevor die Tage angezeigt werden. Diese heißt "**beforeShowDay**". Ich habe hier eine kleine Funktion, die nun alle Daten ausblendet, die nicht verfügbar sind. Diese Daten müssen im JSON Format vorliegen.

```

var unavailableDates = ["09-05-2011","14-05-2011","15-05-2011"];

function unavailable(date) {
  dmy = ('0' + date.getDate()).slice(-2) + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + date.getFullYear();
  if ($.inArray(dmy, unavailableDates) < 0) {
    return [true,"","Buche Jetzt"];
  } else {
    return [false,"","Ausgebucht"];
  }
}

$('#iDate').datepicker({ beforeShowDay: unavailable });
```

Die Funktion guckt, ob in dem gerade angezeigten Monat Daten liegen, die nicht verfügbar sind und gibt dann false zurück.