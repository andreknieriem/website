---
title: 'Problemlösung: Wordpress lädt Bilder hoch, kann sie aber nicht bearbeiten'
date: '2013-12-04T11:07:14.000Z'
slug: problemloesung-wordpress-laedt-bilder-hoch-kann-sie-aber-nicht-bearbeiten
tags:
  - '11'
  - '190'
  - '238'
  - '239'
description: >-
  Ich hatte gestern das Problem, dass ich bei einer neu aufgesetzten Seite keine
  Bilder richtig hochladen konnte, zumindest dachte ich das. Der Upload lief
  ohne Probleme und die Datei war auch im uploads-Verzeichnis, jedoch konnte
  Wordpress die Datei nicht skalieren und keine Thumbnails und Weiteres
  erstellen. Nach einigem Rumprobieren bin ich auf die Lösung gestoßen. Die
  Auflösung, also die Pixel in Länge und Breite waren zu hoch. Mein Bild zum
  Beispiel hatte 3500x3000px und anscheinend kommt Wordpress selbst, oder der
  Server auf dem ich die Wordpress-Installation laufen habe, nicht mit
  derartigen Auflösungen klar. Die Problemlösung war, das Bild per Hand auf
  etwas kleinere Werte zu croppen.

  Falls jemand auch den Fehler hat, oder eine andere Lösung, dann bitte im
  Kommentar vermerken!
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Problemlösung: Wordpress lädt Bilder hoch, kann sie aber nicht bearbeiten

#Tutorials#Wordpress

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#upload](/tag.html?tag=190&cHash=7e8ff63c14c864f1a82131fb21a005a8)[#dimensions](/tag.html?tag=238&cHash=6ce41d04c8cfae6780cf1a43d47ae1d7)[#fix](/tag.html?tag=239&cHash=26354d6386315dd8daaccabb7f435be9)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Dec 2013

Ich hatte gestern das Problem, dass ich bei einer neu aufgesetzten Seite keine Bilder richtig hochladen konnte, zumindest dachte ich das. Der Upload lief ohne Probleme und die Datei war auch im uploads-Verzeichnis, jedoch konnte Wordpress die Datei nicht skalieren und keine Thumbnails und Weiteres erstellen. Nach einigem Rumprobieren bin ich auf die Lösung gestoßen. Die Auflösung, also die Pixel in Länge und Breite waren zu hoch. Mein Bild zum Beispiel hatte 3500x3000px und anscheinend kommt Wordpress selbst, oder der Server auf dem ich die Wordpress-Installation laufen habe, nicht mit derartigen Auflösungen klar. Die Problemlösung war, das Bild per Hand auf etwas kleinere Werte zu croppen.

Falls jemand auch den Fehler hat, oder eine andere Lösung, dann bitte im Kommentar vermerken!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.