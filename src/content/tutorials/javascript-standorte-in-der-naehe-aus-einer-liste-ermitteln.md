---
title: 'Javascript: Standorte in der Nähe aus einer Liste ermitteln'
date: '2014-02-17T21:38:01.000Z'
slug: javascript-standorte-in-der-naehe-aus-einer-liste-ermitteln
tags:
  - '69'
  - '411'
  - '412'
description: "Für ein Projekt brauchte ich letztens die 3 dichtesten Standorte von meinem Standort aus gesehen. Da die neuen Browser ja alle ca einen Standort mitliefern kann man dies relativ einfach umsetzen. Falls der Browser zu alt ist, oder der Benutzer nicht den Standort preisgeben möchte, so kann man beispielsweise hier(http://ipinfodb.com/ip_location_api_json.php) einen ungefähren Standort via IP bekommen.\nNatürlich braucht man vorher eine Liste, die schon Latitude und Longitude-Werte enthält. Meine Beispielliste hat folgendes Format:\nBeispielswerte \r\nvar standorte = [\r\n\t['50.9235887','6.9649457', 'Köln'],\r\n\t['XX','XX', 'Musterstadt'], ...\r\n];\r\n  \r\n$(function(){\r\n    // Load the 3 closest\r\n    if (navigator.geolocation) {\r\n\t// get position by browser\r\n    \tnavigator.geolocation.getCurrentPosition(getClosest,getbyIp);\r\n    } else {\r\n  \t// if browser to old, or user disallow, get position by ip\r\n  \tgetbyIp();\r\n    }\t\r\n});\r\n\r\nfunction getClosest(position){\r\n\t\r\n\tcenterPos = [position.coords.latitude,position.coords.longitude]\r\n\t\r\n\tvar list = [], xs, xy;\r\n\r\n\tfor(var i = 0; i&lt;standorte.length;i++) {\r\n\r\n\t\txs = 0;\r\n\t\tys = 0;\r\n\t\txs = centerPos[0] - standorte[i][0];\r\n\t\txs = xs * xs;\r\n\t\t\r\n\t\tys = centerPos[1] - standorte[i][1];\r\n\t\tys = ys * ys;\r\n\t\t\r\n\t\tlist.push( [ Math.sqrt( xs + ys ), standorte[i][2] ] );\r\n\t});\r\n\t\r\n\t// Now sort by distance\r\n\tlist.sort( function( a, b ){\r\n\t\treturn a[0] - b[0];\r\n\t});\r\n\t\r\n\t// get first 3 items\r\n\tlist = list.slice(0,3);\r\n\t\r\n\t// Log the list and do whatever you want with it!\r\n\tconsole.log(list);\r\n}\r\n\r\nfunction getbyIp() {\r\n\t$.ajax({\r\n\t\turl: 'http://api.ipinfodb.com/v3/ip-city/?key=deineigenerapikey&amp;format=json',\r\n\t\tdataType: 'jsonp',\r\n\t\tsuccess: function(data){\r\n\t\t\tconsole.log(data);\r\n\t\t\tvar pos = {\r\n\t\t\t\t'coords': {\r\n\t\t\t\t\t'latitude':data.latitude,\r\n\t\t\t\t\t'longitude': data.longitude\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tgetClosest(pos);\r\n\t\t}\r\n\t});\r\n}\r\n Was macht der Code?\nAls erstes wird oben überprüft, ob der Browser die Position unterstützt. \nIst das nicht der Fall, wird die Position nach Ip angeschaut. (getbyIp())\nWenn der Browser es kann wird je nachdem ob der User seine Positionsabfrage bestätigt oder ablehnt direkt die getClosest-Funktion aufgerufen, oder es wird wieder die Ip-Position benutzt.\nIn der getbyIp-Funktion werden nur die derzeitigen Lat,Lon nach Ip geholt auch danach ebenfalls die getClosest-Funktion aufgerufen\ngetClosest-Funktion macht dann Folgendes:\nEs werden die Abstände der derzeitigen Position, zur Position in unserem Standorte-Array errechnet und in das Array List gespeichert (mit Name)\nDanach wird die Liste nach Werten sortiert (je kleiner der Wert, desto näher)\nSchon hat man eine sortierte Liste und kann via array.slice sich beliebig viele Standorte herauspicken und diese dann wie man möchte benutzen\nDas wars auch schon!"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#Entfernung](/tag.html?tag=411&cHash=acd853bcc906264e4e78f5cdd9a97c12)[#sortieren](/tag.html?tag=412&cHash=ff1b5da47634540c33b66cc75c11d61b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Feb 2014

Für ein Projekt brauchte ich letztens die 3 dichtesten Standorte von meinem Standort aus gesehen. Da die neuen Browser ja alle ca einen Standort mitliefern kann man dies relativ einfach umsetzen. Falls der Browser zu alt ist, oder der Benutzer nicht den Standort preisgeben möchte, so kann man beispielsweise hier([http://ipinfodb.com/ip\_location\_api\_json.php](http://ipinfodb.com/ip_location_api_json.php)) einen ungefähren Standort via IP bekommen.

Natürlich braucht man vorher eine Liste, die schon Latitude und Longitude-Werte enthält. Meine Beispielliste hat folgendes Format:

**Beispielswerte**

```

var standorte = [
	['50.9235887','6.9649457', 'Köln'],
	['XX','XX', 'Musterstadt'], ...
];
```

```

$(function(){
    // Load the 3 closest
    if (navigator.geolocation) {
	// get position by browser
    	navigator.geolocation.getCurrentPosition(getClosest,getbyIp);
    } else {
  	// if browser to old, or user disallow, get position by ip
  	getbyIp();
    }	
});

function getClosest(position){
	
	centerPos = [position.coords.latitude,position.coords.longitude]
	
	var list = [], xs, xy;

	for(var i = 0; i<standorte.length;i++) {

		xs = 0;
		ys = 0;
		xs = centerPos[0] - standorte[i][0];
		xs = xs * xs;
		
		ys = centerPos[1] - standorte[i][1];
		ys = ys * ys;
		
		list.push( [ Math.sqrt( xs + ys ), standorte[i][2] ] );
	});
	
	// Now sort by distance
	list.sort( function( a, b ){
		return a[0] - b[0];
	});
	
	// get first 3 items
	list = list.slice(0,3);
	
	// Log the list and do whatever you want with it!
	console.log(list);
}

function getbyIp() {
	$.ajax({
		url: 'http://api.ipinfodb.com/v3/ip-city/?key=deineigenerapikey&format=json',
		dataType: 'jsonp',
		success: function(data){
			console.log(data);
			var pos = {
				'coords': {
					'latitude':data.latitude,
					'longitude': data.longitude
				}
			}
			getClosest(pos);
		}
	});
}
```

**Was macht der Code?**

Als erstes wird oben überprüft, ob der Browser die Position unterstützt.

*   Ist das nicht der Fall, wird die Position nach Ip angeschaut. (**getbyIp()**)
*   Wenn der Browser es kann wird je nachdem ob der User seine Positionsabfrage bestätigt oder ablehnt direkt die **getClosest**\-Funktion aufgerufen, oder es wird wieder die Ip-Position benutzt.

In der getbyIp-Funktion werden nur die derzeitigen Lat,Lon nach Ip geholt auch danach ebenfalls die **getClosest**\-Funktion aufgerufen

**getClosest**\-Funktion macht dann Folgendes:

*   Es werden die Abstände der derzeitigen Position, zur Position in unserem Standorte-Array errechnet und in das Array List gespeichert (mit Name)
*   Danach wird die Liste nach Werten sortiert (je kleiner der Wert, desto näher)
*   Schon hat man eine sortierte Liste und kann via array.slice sich beliebig viele Standorte herauspicken und diese dann wie man möchte benutzen

Das wars auch schon!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.