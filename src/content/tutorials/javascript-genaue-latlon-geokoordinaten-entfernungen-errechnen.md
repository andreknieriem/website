---
title: 'Javascript: Genaue Lat/Lon Geokoordinaten Entfernungen errechnen'
date: '2014-11-07T15:26:28.000Z'
slug: javascript-genaue-latlon-geokoordinaten-entfernungen-errechnen
tags:
  - javascript
  - koordinaten
  - sortieren
  - lat
  - lon
  - geo
  - abstand
  - distance
  - distanz
  - liste
description: "Für eine Sortierung von Standorten nach Entfernung von einem bestimmten Punkt, brauchte ich eine etwas genauere Funktion als meine vorherige (Javascript: Standorte in der Nähe aus einer Liste ermitteln). Diese Funktion rechnet die Erdkrümmung mit ein und man bekommt recht genau Km-Werte.\nHier die Funktion \r\nfunction Deg2Rad( deg ) {\r\n\treturn deg * Math.PI / 180;\r\n}\r\n\r\nfunction PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {\r\n\tlat1 = Deg2Rad(lat1);\r\n\tlat2 = Deg2Rad(lat2);\r\n\tlon1 = Deg2Rad(lon1);\r\n\tlon2 = Deg2Rad(lon2);\r\n\tvar R = 6371; // km\r\n\tvar x = (lon2-lon1) * Math.cos((lat1+lat2)/2);\r\n\tvar y = (lat2-lat1);\r\n\tvar d = Math.sqrt(x*x + y*y) * R;\r\n\treturn d;\r\n}\r\n \nUnd so wird's benutzt \r\nvar entfernung = PythagorasEquirectangular( lat1, lon1, lat2, lon2);\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Für eine Sortierung von Standorten nach Entfernung von einem bestimmten Punkt, brauchte ich eine etwas genauere Funktion als meine vorherige ([Javascript: Standorte in der Nähe aus einer Liste ermitteln](http://andreknieriem.de/javascript-standorte-in-der-naehe-aus-einer-liste-ermitteln/)). Diese Funktion rechnet die Erdkrümmung mit ein und man bekommt recht genau Km-Werte.

**Hier die Funktion**

```js

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

```js

var entfernung = PythagorasEquirectangular( lat1, lon1, lat2, lon2);

```