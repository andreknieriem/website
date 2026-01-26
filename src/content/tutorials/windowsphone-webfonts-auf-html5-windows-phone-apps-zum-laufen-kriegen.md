---
title: 'Windowsphone: Webfonts auf HTML5 Windows Phone Apps zum Laufen kriegen'
date: '2015-06-26T18:46:52.000Z'
slug: windowsphone-webfonts-auf-html5-windows-phone-apps-zum-laufen-kriegen
tags:
  - '344'
  - '350'
  - '431'
  - '697'
  - '703'
  - '717'
  - '718'
  - '719'
  - '720'
  - '721'
  - '722'
  - '723'
  - '724'
  - '725'
description: "Bei einer App für Cordova, Phonegap oder einem anderem Framework habe ich einen seltsamen Fehler bemerkt. Probiert man die Html5 App im IE Browser auf dem Windows Phone aus, so funktionieren alle Webfonts, öffnet man allerdings die Webapp, so wird die Font nicht geladen und an allen Stellen werden Rechtecke angezeigt. Nach langem Kopfzerbrechen und Recherche habe ich die Lösung gefunden. Die App kommt nicht mit Get-Parametern an den Font-Url's klar. Fontawesome und andere Fonts machen die, um bei einem Update den Browsern zu sagen, dass er die Datei nicht aus dem Cache holen soll.\nHier ein Beispiel wie es nicht funktioniert. \r\n  src:url('../fonts/fontawesome-webfont.ttf?v=4.0.3')\r\n Nimmt man die Get-Parameter raus, dann geht es. \r\n  src:url('../fonts/fontawesome-webfont.ttf')\r\n Warum das so ist, kann ich mir auch nicht erklären, aber immerhin kriegt man die Web-Fonts doch zum Laufen."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Windowsphone: Webfonts auf HTML5 Windows Phone Apps zum Laufen kriegen

#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#windows](/tag.html?tag=344&cHash=ba02934ba114aeb772143c98b09e3238)[#windows phone](/tag.html?tag=350&cHash=8f230cf594f9b001541dd82ac1789f63)[#workaround](/tag.html?tag=431&cHash=f66c6296e3ae35864b1ed46c53fdcbe1)[#cordova](/tag.html?tag=697&cHash=6827daac92c6c9a700bc9044746e0e7c)[#phone](/tag.html?tag=703&cHash=27f43407074a0c334c979e805bed60c5)[#webapp](/tag.html?tag=717&cHash=03525becd5579d1f5abd247e4a237cd7)[#phonegap](/tag.html?tag=718&cHash=0637a8c619d1f8eafd716c550fe10641)[#fontawesome](/tag.html?tag=719&cHash=3951faef0712b7ffbef7dd4cde9be715)[#googlefont](/tag.html?tag=720&cHash=1386ee057ce42a523c4b0876187c77fc)[#wp8](/tag.html?tag=721&cHash=7eb94216c075d0bdd6f1538b614b2589)[#webfont](/tag.html?tag=722&cHash=fa23cb0de6f803eca45405f5e79b2a4a)[#square](/tag.html?tag=723&cHash=2364a017667cf204798e80e761ef445b)[#viereck](/tag.html?tag=724&cHash=5944eba7a53968325c75fb1ab7bef700)[#not working](/tag.html?tag=725&cHash=aaf76aee3dd05530244b122d4f9dc10f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Jun 2015

Bei einer App für Cordova, Phonegap oder einem anderem Framework habe ich einen seltsamen Fehler bemerkt. Probiert man die Html5 App im IE Browser auf dem Windows Phone aus, so funktionieren alle Webfonts, öffnet man allerdings die Webapp, so wird die Font nicht geladen und an allen Stellen werden Rechtecke angezeigt. Nach langem Kopfzerbrechen und Recherche habe ich die Lösung gefunden. Die App kommt nicht mit Get-Parametern an den Font-Url's klar. Fontawesome und andere Fonts machen die, um bei einem Update den Browsern zu sagen, dass er die Datei nicht aus dem Cache holen soll.

Hier ein Beispiel wie es nicht funktioniert.

```

  src:url('../fonts/fontawesome-webfont.ttf?v=4.0.3')
```

Nimmt man die Get-Parameter raus, dann geht es.

```

  src:url('../fonts/fontawesome-webfont.ttf')
```

Warum das so ist, kann ich mir auch nicht erklären, aber immerhin kriegt man die Web-Fonts doch zum Laufen.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.