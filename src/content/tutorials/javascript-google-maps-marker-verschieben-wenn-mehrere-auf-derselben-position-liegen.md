---
title: >-
  Javascript: Google Maps: Marker verschieben, wenn mehrere auf derselben
  Position liegen
date: '2016-11-27T23:00:00.000Z'
slug: >-
  javascript-google-maps-marker-verschieben-wenn-mehrere-auf-derselben-position-liegen
tags:
  - '259'
  - '554'
  - '95'
  - '933'
  - '934'
  - '683'
  - '935'
  - '936'
  - '62'
description: "Bei einer Suche, die Ergebnisse auf einer Google Maps Karte anzeigt, hatte ich ab und zu das Problem, dass zwei oder mehr Marker auf ein und derselben Position lagen. Da man aber nur einen dieser Marker anklicken kann, musste ich eine Lösung für dieses Problem finden. Meine Lösung war es, die mindestens doppelten Marker herauszufinden und diese dann um ein paar Grad zu verschieben. Das verfälscht leider ein bisschen die richtige Position des Ergebnisses, aber ist immerhin besser, als nur einen Marker zu sehen.\r\nHier meine Funktion: // Beispiel Array mit groben Koordinaten und einer Dopplung\r\nvar allitems= [\r\n {lat: 5.1, lon 4.9},\r\n {lat: 5.0, lon 4.9},\r\n {lat: 5.2, lon 4.9},\r\n {lat: 5.1, lon 4.9},\r\n];\r\n\r\n// Doppelte finden und versetzen\r\nvar lls = [];\r\nfor(var i = 0; i &lt; allitems.length; i++){\r\n  var ll = allitems[i].lat+','+allitems[i].lon;\r\n  // nicht doppelt, füg den Punkt hinzu\r\n  if(lls.indexOf(ll) == -1){\r\n    lls.push(ll);\r\n  } else {\r\n    // versetze den Punkt um 0.00005 Grad in Breite und Länge\r\n    allitems[i].lat = allitems[i].lat + 0.00005;\r\n    allitems[i].lon = allitems[i].lon + 0.00005;\r\n    \r\n    // Füge den neuen Punkt dem Array hinzu, damit auch für diesen keine Dopplung bestehen kann \r\n    ll = allitems[i].lat+','+allitems[i].lon;\r\n    lls.push(ll);\r\n  }\r\n}\r\n\r\n Nachdem die For-Schleife gelaufen ist, sind alle doppelten Marker leicht versetzt. Somit kann man diese wieder anklicken.\r\nIch hoffe ich konnte weiterhelfen!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: Google Maps: Marker verschieben, wenn mehrere auf derselben Position liegen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#api](/tag.html?tag=95&cHash=f663cf131019a79c2e068ecbf99e0ce1)[#Google](/tag.html?tag=259&cHash=b1ab39e7e8f860481faa9bb151ed2ce4)[#maps](/tag.html?tag=554&cHash=5a37db67f7c9721b811e3a9a84d34d25)[#position](/tag.html?tag=683&cHash=e3a4b1d1451ac5aa8c77d1d05d0a2752)[#marker](/tag.html?tag=933&cHash=879394706828fd808e1738056bbd0e20)[#same](/tag.html?tag=934&cHash=63706be5480883be1765230af32f4328)[#gleich](/tag.html?tag=935&cHash=20627694826f2f0d58872984fce40bc7)[#versetzen](/tag.html?tag=936&cHash=667dc9275f4e62f356801547afa88f73)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Nov 2016

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.