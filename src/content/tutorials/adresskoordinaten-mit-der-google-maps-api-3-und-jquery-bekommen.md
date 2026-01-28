---
title: Adresskoordinaten mit der Google Maps Api 3 und jQuery bekommen
date: '2012-05-02T17:45:15.000Z'
slug: adresskoordinaten-mit-der-google-maps-api-3-und-jquery-bekommen
tags:
  - jquery
  - '3'
  - api
  - coordinates
  - get
  - google maps
  - koordinaten
description: "Ich beschäftige mich gerade mit der Google Maps Api 3 und habe gedacht dieses Script, könnte dem ein oder anderen sicherlich helfen Koordinaten für eine Adresse zu bekommen.\nIm Nachfolgenden ist eine komplette test.html-Datei abgebildet. \n&lt;script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\" src=\"https://maps.google.com/maps/api/js?sensor=false\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\"&gt;\nfunction getcoord() {\n\tvar user1Location = jQuery(\"input\").val();\n\t        var geocoder = new google.maps.Geocoder();\n\t        //convert location into longitude and latitude\n\t        geocoder.geocode({\n\t            address: user1Location\n\t        }, function(locResult) {\n\t            console.log(locResult);\n\t            var lat1 = locResult[0].geometry.location.lat();\n\t            var lng1 = locResult[0].geometry.location.lng();\n\t            $(\"#testDiv\").html(\"latitude:\" + lat1 + \"&lt;p&gt;longitude:\" + lng1 + \"&lt;/p&gt;\");\n\t \t\t});\n\t}\n\n$(document).ready(function(){\n\n$(\".los\").click(function(){\n\tgetcoord();\n\treturn false;\n});\n\n});\n&lt;/script&gt;\n&lt;input type=\"text\" /&gt;\n&lt;a href=\"#\" class=\"los\"&gt;Los&lt;/a&gt;\n&lt;div id=\"testDiv\"&gt;&lt;/div&gt;\n Was macht die Datei?\nEs wird jQuery und die Google Map eingebunden.\nEin Input-Feld dient zur Adresseingabe, ein Link zum Absenden der Adresse und eine leerer Div-Container in dem die Koordinaten geschrieben werden.\nDas Script macht dann folgendes: \n$(\".los\").click(function(){\n\tgetcoord();\n\treturn false;\n});\n Hier wird die Funktion getcoord() aufgerufen bei Klick auf den Link. Das return false dient dazu, dass dem Link nicht gefolgt. \nfunction getcoord() {\n\tvar user1Location = jQuery(\"input\").val();\n\t        var geocoder = new google.maps.Geocoder();\n\t        //convert location into longitude and latitude\n\t        geocoder.geocode({\n\t            address: user1Location\n\t        }, function(locResult) {\n\t            console.log(locResult);\n\t            var lat1 = locResult[0].geometry.location.lat();\n\t            var lng1 = locResult[0].geometry.location.lng();\n\t            $(\"#testDiv\").html(\"latitude:\" + lat1 + \"&lt;p&gt;longitude:\" + lng1 + \"&lt;/p&gt;\");\n\t \t\t});\n\t}\n Am Anfang wird die Adresse aus dem Inputfeld ausgelesen. Der Rest ist Benutzung der Google Api. Die Adresse wird der Api übermittelt, diese gibt ein Resultat zurück in dem der Breiten- und Längengrad stehen. (lat1,lng1)\nDanach wird das Ergebnis in den Container testDiv geschrieben. Das wars auch schon ;)\nIch hoffe ich konnte euch damit weiterhelfen."
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Ich beschäftige mich gerade mit der Google Maps Api 3 und habe gedacht dieses Script, könnte dem ein oder anderen sicherlich helfen Koordinaten für eine Adresse zu bekommen.

Im Nachfolgenden ist eine komplette test.html-Datei abgebildet.

```

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
function getcoord() {
	var user1Location = jQuery("input").val();
	        var geocoder = new google.maps.Geocoder();
	        //convert location into longitude and latitude
	        geocoder.geocode({
	            address: user1Location
	        }, function(locResult) {
	            console.log(locResult);
	            var lat1 = locResult[0].geometry.location.lat();
	            var lng1 = locResult[0].geometry.location.lng();
	            $("#testDiv").html("latitude:" + lat1 + "<p>longitude:" + lng1 + "</p>");
	 		});
	}

$(document).ready(function(){

$(".los").click(function(){
	getcoord();
	return false;
});

});
</script>
<input type="text" />
<a href="#" class="los">Los</a>
<div id="testDiv"></div>
```

**Was macht die Datei?**

Es wird jQuery und die Google Map eingebunden.

Ein Input-Feld dient zur Adresseingabe, ein Link zum Absenden der Adresse und eine leerer Div-Container in dem die Koordinaten geschrieben werden.

Das Script macht dann folgendes:

```

$(".los").click(function(){
	getcoord();
	return false;
});
```

Hier wird die Funktion getcoord() aufgerufen bei Klick auf den Link. Das return false dient dazu, dass dem Link nicht gefolgt.

```

function getcoord() {
	var user1Location = jQuery("input").val();
	        var geocoder = new google.maps.Geocoder();
	        //convert location into longitude and latitude
	        geocoder.geocode({
	            address: user1Location
	        }, function(locResult) {
	            console.log(locResult);
	            var lat1 = locResult[0].geometry.location.lat();
	            var lng1 = locResult[0].geometry.location.lng();
	            $("#testDiv").html("latitude:" + lat1 + "<p>longitude:" + lng1 + "</p>");
	 		});
	}
```

Am Anfang wird die Adresse aus dem Inputfeld ausgelesen. Der Rest ist Benutzung der Google Api. Die Adresse wird der Api übermittelt, diese gibt ein Resultat zurück in dem der Breiten- und Längengrad stehen. (lat1,lng1)

Danach wird das Ergebnis in den Container testDiv geschrieben. Das wars auch schon ;)

Ich hoffe ich konnte euch damit weiterhelfen.