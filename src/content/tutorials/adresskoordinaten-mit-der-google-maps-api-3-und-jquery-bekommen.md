---
title: Adresskoordinaten mit der Google Maps Api 3 und jQuery bekommen
date: '2012-05-02T17:45:15.000Z'
slug: adresskoordinaten-mit-der-google-maps-api-3-und-jquery-bekommen
tags:
  - '20'
  - '94'
  - '95'
  - '96'
  - '97'
  - '98'
  - '99'
description: "Ich beschäftige mich gerade mit der Google Maps Api 3 und habe gedacht dieses Script, könnte dem ein oder anderen sicherlich helfen Koordinaten für eine Adresse zu bekommen.\nIm Nachfolgenden ist eine komplette test.html-Datei abgebildet. \n&lt;script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\" src=\"https://maps.google.com/maps/api/js?sensor=false\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\"&gt;\nfunction getcoord() {\n\tvar user1Location = jQuery(\"input\").val();\n\t        var geocoder = new google.maps.Geocoder();\n\t        //convert location into longitude and latitude\n\t        geocoder.geocode({\n\t            address: user1Location\n\t        }, function(locResult) {\n\t            console.log(locResult);\n\t            var lat1 = locResult[0].geometry.location.lat();\n\t            var lng1 = locResult[0].geometry.location.lng();\n\t            $(\"#testDiv\").html(\"latitude:\" + lat1 + \"&lt;p&gt;longitude:\" + lng1 + \"&lt;/p&gt;\");\n\t \t\t});\n\t}\n\n$(document).ready(function(){\n\n$(\".los\").click(function(){\n\tgetcoord();\n\treturn false;\n});\n\n});\n&lt;/script&gt;\n&lt;input type=\"text\" /&gt;\n&lt;a href=\"#\" class=\"los\"&gt;Los&lt;/a&gt;\n&lt;div id=\"testDiv\"&gt;&lt;/div&gt;\n Was macht die Datei?\nEs wird jQuery und die Google Map eingebunden.\nEin Input-Feld dient zur Adresseingabe, ein Link zum Absenden der Adresse und eine leerer Div-Container in dem die Koordinaten geschrieben werden.\nDas Script macht dann folgendes: \n$(\".los\").click(function(){\n\tgetcoord();\n\treturn false;\n});\n Hier wird die Funktion getcoord() aufgerufen bei Klick auf den Link. Das return false dient dazu, dass dem Link nicht gefolgt. \nfunction getcoord() {\n\tvar user1Location = jQuery(\"input\").val();\n\t        var geocoder = new google.maps.Geocoder();\n\t        //convert location into longitude and latitude\n\t        geocoder.geocode({\n\t            address: user1Location\n\t        }, function(locResult) {\n\t            console.log(locResult);\n\t            var lat1 = locResult[0].geometry.location.lat();\n\t            var lng1 = locResult[0].geometry.location.lng();\n\t            $(\"#testDiv\").html(\"latitude:\" + lat1 + \"&lt;p&gt;longitude:\" + lng1 + \"&lt;/p&gt;\");\n\t \t\t});\n\t}\n Am Anfang wird die Adresse aus dem Inputfeld ausgelesen. Der Rest ist Benutzung der Google Api. Die Adresse wird der Api übermittelt, diese gibt ein Resultat zurück in dem der Breiten- und Längengrad stehen. (lat1,lng1)\nDanach wird das Ergebnis in den Container testDiv geschrieben. Das wars auch schon ;)\nIch hoffe ich konnte euch damit weiterhelfen."
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#3](/tag.html?tag=94&cHash=33cb333eb64148b73f39889dc2e7b150)[#api](/tag.html?tag=95&cHash=f663cf131019a79c2e068ecbf99e0ce1)[#coordinates](/tag.html?tag=96&cHash=b2b207e82293baafec840f90451ef947)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#google maps](/tag.html?tag=98&cHash=3c16e138928355ce78f495ed52d80d17)[#koordinaten](/tag.html?tag=99&cHash=b7d1a773bde1c377e5415b29ae9b4056)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. May 2012

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/5360467a2ac4cbce717f2cc0ba35b3bf?s=75&d=mm&r=g)
    
    Werner Strohmaier
    
    Hallo,  
    ich habe das Google map auf dem Smartphone und habe jetzt festgestellt, das Adressen angegeben waren, bei denen ich nicht war. Gibt es da Fehler in der Programmierung oder Darstellung?  
    Mit freundlichem Gruß  
    Werner Strohmaier
    
    13\. Oct 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/7ee8e35531c4eb31048a957947af919d?s=75&d=mm&r=g)
    
    KrzysztofJarzyna
    
    Super chilliges Skript. Hab vielen Dank & weiterhin gutes Gelingen beim Arbeiten
    
    26\. May 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/639db3635e17932af6e352039edc56ae?s=75&d=mm&r=g)
    
    paul Meier
    
    Mal testen
    
    04\. Dec 2013 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.