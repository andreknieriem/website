---
title: 'Javascript: Genaue Lat/Lon Geokoordinaten Entfernungen errechnen'
date: '2014-11-07T15:26:28.000Z'
slug: javascript-genaue-latlon-geokoordinaten-entfernungen-errechnen
tags:
  - '69'
  - '99'
  - '412'
  - '565'
  - '566'
  - '567'
  - '568'
  - '569'
  - '570'
  - '571'
description: "Für eine Sortierung von Standorten nach Entfernung von einem bestimmten Punkt, brauchte ich eine etwas genauere Funktion als meine vorherige (Javascript: Standorte in der Nähe aus einer Liste ermitteln). Diese Funktion rechnet die Erdkrümmung mit ein und man bekommt recht genau Km-Werte.\nHier die Funktion \r\nfunction Deg2Rad( deg ) {\r\n\treturn deg * Math.PI / 180;\r\n}\r\n\r\nfunction PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {\r\n\tlat1 = Deg2Rad(lat1);\r\n\tlat2 = Deg2Rad(lat2);\r\n\tlon1 = Deg2Rad(lon1);\r\n\tlon2 = Deg2Rad(lon2);\r\n\tvar R = 6371; // km\r\n\tvar x = (lon2-lon1) * Math.cos((lat1+lat2)/2);\r\n\tvar y = (lat2-lat1);\r\n\tvar d = Math.sqrt(x*x + y*y) * R;\r\n\treturn d;\r\n}\r\n \nUnd so wird's benutzt \r\nvar entfernung = PythagorasEquirectangular( lat1, lon1, lat2, lon2);\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: Genaue Lat/Lon Geokoordinaten Entfernungen errechnen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#koordinaten](/tag.html?tag=99&cHash=b7d1a773bde1c377e5415b29ae9b4056)[#sortieren](/tag.html?tag=412&cHash=ff1b5da47634540c33b66cc75c11d61b)[#lat](/tag.html?tag=565&cHash=e2ab8ce886252cef00860d7e87feb678)[#lon](/tag.html?tag=566&cHash=e3757abf6a680785a02dfe5521620132)[#geo](/tag.html?tag=567&cHash=470b7b910f682cd849cd34457dfb71b0)[#abstand](/tag.html?tag=568&cHash=fd7fcb23d8958af75f9ab6444c3a1ab5)[#distance](/tag.html?tag=569&cHash=3f32f915dce0ae98e08f1bcf5a8f58c8)[#distanz](/tag.html?tag=570&cHash=14f7f257303a8eec9bb54e4132c9c88f)[#liste](/tag.html?tag=571&cHash=d0afa7f820fe771708ea2964c7450e0b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Nov 2014

Für eine Sortierung von Standorten nach Entfernung von einem bestimmten Punkt, brauchte ich eine etwas genauere Funktion als meine vorherige ([Javascript: Standorte in der Nähe aus einer Liste ermitteln](http://andreknieriem.de/javascript-standorte-in-der-naehe-aus-einer-liste-ermitteln/)). Diese Funktion rechnet die Erdkrümmung mit ein und man bekommt recht genau Km-Werte.

**Hier die Funktion**

```

function Deg2Rad( deg ) {
	return deg * Math.PI / 180;
}

function PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {
	lat1 = Deg2Rad(lat1);
	lat2 = Deg2Rad(lat2);
	lon1 = Deg2Rad(lon1);
	lon2 = Deg2Rad(lon2);
	var R = 6371; // km
	var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
	var y = (lat2-lat1);
	var d = Math.sqrt(x*x + y*y) * R;
	return d;
}
```

  

**Und so wird's benutzt**

```

var entfernung = PythagorasEquirectangular( lat1, lon1, lat2, lon2);
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.