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
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

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