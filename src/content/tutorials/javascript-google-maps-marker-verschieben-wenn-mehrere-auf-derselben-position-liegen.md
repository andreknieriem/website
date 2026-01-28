---
title: >-
  Javascript: Google Maps: Marker verschieben, wenn mehrere auf derselben
  Position liegen
date: '2016-11-27T23:00:00.000Z'
slug: >-
  javascript-google-maps-marker-verschieben-wenn-mehrere-auf-derselben-position-liegen
tags:
  - Google
  - maps
  - api
  - marker
  - same
  - position
  - gleich
  - versetzen
  - tutorial
description: "Bei einer Suche, die Ergebnisse auf einer Google Maps Karte anzeigt, hatte ich ab und zu das Problem, dass zwei oder mehr Marker auf ein und derselben Position lagen. Da man aber nur einen dieser Marker anklicken kann, musste ich eine Lösung für dieses Problem finden. Meine Lösung war es, die mindestens doppelten Marker herauszufinden und diese dann um ein paar Grad zu verschieben. Das verfälscht leider ein bisschen die richtige Position des Ergebnisses, aber ist immerhin besser, als nur einen Marker zu sehen.\r\nHier meine Funktion: // Beispiel Array mit groben Koordinaten und einer Dopplung\r\nvar allitems= [\r\n {lat: 5.1, lon 4.9},\r\n {lat: 5.0, lon 4.9},\r\n {lat: 5.2, lon 4.9},\r\n {lat: 5.1, lon 4.9},\r\n];\r\n\r\n// Doppelte finden und versetzen\r\nvar lls = [];\r\nfor(var i = 0; i &lt; allitems.length; i++){\r\n  var ll = allitems[i].lat+','+allitems[i].lon;\r\n  // nicht doppelt, füg den Punkt hinzu\r\n  if(lls.indexOf(ll) == -1){\r\n    lls.push(ll);\r\n  } else {\r\n    // versetze den Punkt um 0.00005 Grad in Breite und Länge\r\n    allitems[i].lat = allitems[i].lat + 0.00005;\r\n    allitems[i].lon = allitems[i].lon + 0.00005;\r\n    \r\n    // Füge den neuen Punkt dem Array hinzu, damit auch für diesen keine Dopplung bestehen kann \r\n    ll = allitems[i].lat+','+allitems[i].lon;\r\n    lls.push(ll);\r\n  }\r\n}\r\n\r\n Nachdem die For-Schleife gelaufen ist, sind alle doppelten Marker leicht versetzt. Somit kann man diese wieder anklicken.\r\nIch hoffe ich konnte weiterhelfen!"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Bei einer Suche, die Ergebnisse auf einer Google Maps Karte anzeigt, hatte ich ab und zu das Problem, dass zwei oder mehr Marker auf ein und derselben Position lagen. Da man aber nur einen dieser Marker anklicken kann, musste ich eine Lösung für dieses Problem finden. Meine Lösung war es, die mindestens doppelten Marker herauszufinden und diese dann um ein paar Grad zu verschieben. Das verfälscht leider ein bisschen die richtige Position des Ergebnisses, aber ist immerhin besser, als nur einen Marker zu sehen.

**Hier meine Funktion:**

```
// Beispiel Array mit groben Koordinaten und einer Dopplung
var allitems= [
 {lat: 5.1, lon 4.9},
 {lat: 5.0, lon 4.9},
 {lat: 5.2, lon 4.9},
 {lat: 5.1, lon 4.9},
];

// Doppelte finden und versetzen
var lls = [];
for(var i = 0; i < allitems.length; i++){
  var ll = allitems[i].lat+','+allitems[i].lon;
  // nicht doppelt, füg den Punkt hinzu
  if(lls.indexOf(ll) == -1){
    lls.push(ll);
  } else {
    // versetze den Punkt um 0.00005 Grad in Breite und Länge
    allitems[i].lat = allitems[i].lat + 0.00005;
    allitems[i].lon = allitems[i].lon + 0.00005;
    
    // Füge den neuen Punkt dem Array hinzu, damit auch für diesen keine Dopplung bestehen kann 
    ll = allitems[i].lat+','+allitems[i].lon;
    lls.push(ll);
  }
}

```

Nachdem die For-Schleife gelaufen ist, sind alle doppelten Marker leicht versetzt. Somit kann man diese wieder anklicken.

Ich hoffe ich konnte weiterhelfen!