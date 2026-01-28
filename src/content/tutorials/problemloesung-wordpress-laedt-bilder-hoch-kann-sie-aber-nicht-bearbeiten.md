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
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Ich hatte gestern das Problem, dass ich bei einer neu aufgesetzten Seite keine Bilder richtig hochladen konnte, zumindest dachte ich das. Der Upload lief ohne Probleme und die Datei war auch im uploads-Verzeichnis, jedoch konnte Wordpress die Datei nicht skalieren und keine Thumbnails und Weiteres erstellen. Nach einigem Rumprobieren bin ich auf die Lösung gestoßen. Die Auflösung, also die Pixel in Länge und Breite waren zu hoch. Mein Bild zum Beispiel hatte 3500x3000px und anscheinend kommt Wordpress selbst, oder der Server auf dem ich die Wordpress-Installation laufen habe, nicht mit derartigen Auflösungen klar. Die Problemlösung war, das Bild per Hand auf etwas kleinere Werte zu croppen.

Falls jemand auch den Fehler hat, oder eine andere Lösung, dann bitte im Kommentar vermerken!