---
title: Umleitung auf Mobile Seite mit Bestätigung
date: '2011-03-26T14:53:49.000Z'
slug: umleitung-auf-mobile-seite-mit-bestaetigung
tags:
  - '1'
  - '2'
  - '3'
  - '4'
  - '5'
  - '6'
description: "UPDATE\nIch habe das Script etwas umgebaut und ein kleines Plugin geschrieben. Das Ganze findet ihr in meinem Github Account.\nhttps://github.com/andreknieriem/redirect\n\nImmer mehr Menschen gehen mit ihren Smartphones ins Internet. Oft ist es von Vorteil eine optimierte Seite für diese Geräte anzufertigen.\nUm dem User mehr Komfort zu bieten, sollte man ihn vorher fragen, ob er denn überhaupt das mobile Angebot\nnutzen möchte, da die optimierten Seiten zum Teil stark abgespeckt sind und nicht den vollen Funktions- und Informationsumfang haben.\nDamit der User nicht jedes Mal wieder klicken muss, auf welche Seite er gerne möchte, wird ein Cookie gesetzt,\nder die Einstellung speichert und einem gleich die richtige Seite verlinkt.\nFalls der User doch irgendwann wieder die mobile oder normale Seite benutzen möchte,\nsollte man auf die jeweilige Seite einen Link setzen.\nDiese Umleitung basiert komplett auf Javascript ohne irgendeine Bibliothek wie jQuery, Dojo oder Sonstiges.\nAm einfachsten ist es den kompletten Code hier zu kopieren, den Pfad zur mobilen Seite anzupassen,\nsowie den Namen des Cookies. function CookieSave(name, value, days)\r\n\t{\r\n\t\tif (typeof days != 'undefined') {\r\n\t\t\tvar date = new Date();\r\n\t\t\tdate.setTime(date.getTime() + (days*24*60*60*1000));\r\n\t\t\tvar expires = \"; expires=\" + date.toGMTString();\r\n\t\t} else {\r\n\t\t\tvar expires = \"\";\r\n\t\t}\r\n\t\tdocument.cookie = name + \"=\" + value + expires + \"; path=/\";\r\n\t}\r\n\r\n\tfunction CookieGet(name) {\r\n\t\tvar nameEQ = name + \"=\";\r\n\t\tvar ca = document.cookie.split(';');\r\n\t\tfor(var i=0;i &lt; ca.length;i++) {\r\n\t\t\t\tvar c = ca[i];\r\n\t\t\t\twhile (c.charAt(0)==' ') {\r\n\t\t\t\t\tc = c.substring(1,c.length);\r\n\t\t\t\t}\r\n\t\t\t\tif (c.indexOf(nameEQ) == 0) {\r\n\t\t\t\t\treturn c.substring(nameEQ.length,c.length);\r\n\t\t\t\t}\r\n\t\t}\r\n\t\treturn null;\r\n\t}\r\n\r\n\tfunction mredirect(){\r\n        var mconfirm = confirm('Wollen Sie auf die mobile Version weitergeleitet werden?');\r\n        if(mconfirm == true){\r\n            window.location.href = mversion; // Hier das Verzeichnis festlegen\r\n        }else{\r\n            // Setze Cookie um spaetere Dialoge zu vermeiden\r\n            CookieSave('NoMobile', '1', '90'); // Hier den Cookie-Namen ändern\r\n        }\r\n    }\r\n\r\n\r\n    function Client() {\r\n    }\r\n\r\n    Client.prototype.mobileClients = [\"240x320\",\"blackberry\",\"netfront\",\"nokia\",\"panasonic\",\"portalmmm\",\"sharp\",\"sie-\",\"sonyericsson\",\"symbian\",\"windows ce\",\"benq\",\"mda\",\"mot-\",\"philips\",\"pocket pc\",\"sagem\",\"samsung\",\"sda\",\"sgh-\",\"vodafone\",\"xda\",\"iphone\",\"android\",\"iemobile\",\"windows phone\"];\r\n\r\n    Client.prototype.OperaMini = [\"midp\",\"opera mini\"]\r\n\r\n    Client.prototype.isMobileClient = function(userAgent)\r\n    {\r\n        userAgent=userAgent.toLowerCase();\r\n        for (var i in this.mobileClients) {\r\n            if (userAgent.indexOf(this.mobileClients[i]) != -1) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\nClient.prototype.isOperaMini = function(userAgent)\r\n    {\r\n        userAgent=userAgent.toLowerCase();\r\n        for (var i in this.OperaMini) {\r\n            if (userAgent.indexOf(this.OperaMini[i]) != -1) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    if(CookieGet('NoMobile') != 1) { // Hier den Cookie-Namen anpassen\r\n\r\n        var client = new Client();\r\n        if (client.isMobileClient(navigator.userAgent)) {\r\n\t\t\t\tmredirect();\r\n            }\r\n        else if(client.isOperaMini(navigator.userAgent)){\r\n                document.observe('dom:loaded', mredirect);\r\n            }\r\n        } Alles in allem macht die Funktion folgendes:\n1. gucken ob es einen Cookie gibt\n2. wenn ja, dann wird entweder auf die mobile Seite verlinkt (oder nicht, je nach Voreinstellung)\n3. wenn nicht, dann wird geguckt, ob man mit einem mobilen Gerät die Seite besucht\n4. wenn dies der Fall ist, dann wird nachgefragt, ob man die mobile Seite besuchen möchte\n5. wenn ja, dann gehe auf die mobile Seite und erstelle einen Cookie\n6. wenn nicht, dann bleibe auf der vollen Seite und erstelle einen Cookie\nDas war auch schon alles.\nWie man am besten Mobile-Seiten erstellt, erkläre ich vielleicht noch einmal später."
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

**UPDATE**

Ich habe das Script etwas umgebaut und ein kleines Plugin geschrieben. Das Ganze findet ihr in meinem Github Account.

[https://github.com/andreknieriem/redirect](https://github.com/andreknieriem/redirect)

* * *

[![](http://andreknieriem.de/wp-content/uploads/2011/03/iphone1-217x300.jpg "iphone weiterleitung")](http://andreknieriem.de/wp-content/uploads/2011/03/iphone1.jpg)Immer mehr Menschen gehen mit ihren Smartphones ins Internet. Oft ist es von Vorteil eine optimierte Seite für diese Geräte anzufertigen.

Um dem User mehr Komfort zu bieten, sollte man ihn vorher fragen, ob er denn überhaupt das mobile Angebot

nutzen möchte, da die optimierten Seiten zum Teil stark abgespeckt sind und nicht den vollen Funktions- und Informationsumfang haben.

Damit der User nicht jedes Mal wieder klicken muss, auf welche Seite er gerne möchte, wird ein Cookie gesetzt,

der die Einstellung speichert und einem gleich die richtige Seite verlinkt.

Falls der User doch irgendwann wieder die mobile oder normale Seite benutzen möchte,

sollte man auf die jeweilige Seite einen Link setzen.

Diese Umleitung basiert komplett auf Javascript ohne irgendeine Bibliothek wie jQuery, Dojo oder Sonstiges.

Am einfachsten ist es den kompletten Code hier zu kopieren, den Pfad zur mobilen Seite anzupassen,

sowie den Namen des Cookies.

function CookieSave(name, value, days)
	{
		if (typeof days != 'undefined') {
			var date = new Date();
			date.setTime(date.getTime() + (days\*24\*60\*60\*1000));
			var expires = "; expires=" + date.toGMTString();
		} else {
			var expires = "";
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function CookieGet(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
				var c = ca\[i\];
				while (c.charAt(0)==' ') {
					c = c.substring(1,c.length);
				}
				if (c.indexOf(nameEQ) == 0) {
					return c.substring(nameEQ.length,c.length);
				}
		}
		return null;
	}

	function mredirect(){
        var mconfirm = confirm('Wollen Sie auf die mobile Version weitergeleitet werden?');
        if(mconfirm == true){
            window.location.href = mversion; // Hier das Verzeichnis festlegen
        }else{
            // Setze Cookie um spaetere Dialoge zu vermeiden
            CookieSave('NoMobile', '1', '90'); // Hier den Cookie-Namen ändern
        }
    }


    function Client() {
    }

    Client.prototype.mobileClients = \["240x320","blackberry","netfront","nokia","panasonic","portalmmm","sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","philips","pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","iphone","android","iemobile","windows phone"\];

    Client.prototype.OperaMini = \["midp","opera mini"\]

    Client.prototype.isMobileClient = function(userAgent)
    {
        userAgent=userAgent.toLowerCase();
        for (var i in this.mobileClients) {
            if (userAgent.indexOf(this.mobileClients\[i\]) != -1) {
                return true;
            }
        }
        return false;
    }

Client.prototype.isOperaMini = function(userAgent)
    {
        userAgent=userAgent.toLowerCase();
        for (var i in this.OperaMini) {
            if (userAgent.indexOf(this.OperaMini\[i\]) != -1) {
                return true;
            }
        }
        return false;
    }

    if(CookieGet('NoMobile') != 1) { // Hier den Cookie-Namen anpassen

        var client = new Client();
        if (client.isMobileClient(navigator.userAgent)) {
				mredirect();
            }
        else if(client.isOperaMini(navigator.userAgent)){
                document.observe('dom:loaded', mredirect);
            }
        }

Alles in allem macht die Funktion folgendes:

1\. gucken ob es einen Cookie gibt

2\. wenn ja, dann wird entweder auf die mobile Seite verlinkt (oder nicht, je nach Voreinstellung)

3\. wenn nicht, dann wird geguckt, ob man mit einem mobilen Gerät die Seite besucht

4\. wenn dies der Fall ist, dann wird nachgefragt, ob man die mobile Seite besuchen möchte

5\. wenn ja, dann gehe auf die mobile Seite und erstelle einen Cookie

6\. wenn nicht, dann bleibe auf der vollen Seite und erstelle einen Cookie

Das war auch schon alles.

Wie man am besten Mobile-Seiten erstellt, erkläre ich vielleicht noch einmal später.