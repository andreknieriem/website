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
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Umleitung auf Mobile Seite mit Bestätigung

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 182 Kommentare](#comments)

* * *

### Tags

[#android](/tag.html?tag=1&cHash=d7c77ffe3de2b6c4933d6ee105c686a0)[#iphone](/tag.html?tag=2&cHash=d7d05c72dcf94fbc4c5651e1e4dc7bc2)[#redirect](/tag.html?tag=3&cHash=cccc0f82a97354088a046b887cc77dc1)[#script](/tag.html?tag=4&cHash=416a5a23b8b12757b9727b97f4cbcd33)[#umleitung](/tag.html?tag=5&cHash=5f1bf2484695bb838d1949c1f28cc0f8)[#weiterleitung](/tag.html?tag=6&cHash=35afa3d59d50cd4b1a39fe8981f0bf80)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Mar 2011

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/9c9e9225faa1ce9cb31be23c74d54e13?s=75&d=mm&r=g)
    
    Frank
    
    Wie würde ein einfacher code lauten, wenn man durch Anklicken eines Bildes auf eine Website verlinken will. Aber vorher soll eine Abfrage kommen, ob der Nutzer dies überhaupt möchte. Aus Datenschutzgründen.  
    Für eine Info wäre ich sehr dankbar.
    
    23\. Jun 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a344ff01223f595d407af4943beb9c76?s=75&d=mm&r=g)
    
    [Berthold Ferner](http://www.shg-depression.at)
    
    Wow, das Script ist echt genial. Allerdings das Original nicht ganz "Deppensicher", weil nicht korrekt. Aber wenn man die Kommentare verfolgt und den Code danach korrigiert, läuft es.  
      
    Ich bin ein kompletter Code-Depp, obwohl schon über 10 Jahre mit Webdesign hobbymäßig zu tun. Aber immer WYSIWYG. Daher noch eine Frage (ich hoffe du antwortest auch 2016 noch):  
      
    Wie funktionieren Cookies? Ich meine, ich habe jetzt das Script eingebaut, die Abfrage nach der und die korrekte Weiterleitung zur mobilen Seite funktioniert auch, nur kommt die Abfrage immer wieder. Muss ich da eine (Cookie-)Datei anlegen? Wie muss ich die benennen, muss ich da was hineinschreiben?  
      
    Wahrscheinlich lauter doofe Fragen, auf die ich auf Antwort hoffe. Danke!
    
    01\. Jun 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Berthold, ein Cookie ist eine Datei, die der Browser sich selbst anlegt. Das Javascript oben bittet den Browser dies zu tun und liest diesen aus. Die Abfrage kommt solange bis du nein sagst. Dann wird deine "Nein"- Antwort für 90 Tage gespeichert und du wirst nicht mehr gefragt.
        
        02\. Jun 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a344ff01223f595d407af4943beb9c76?s=75&d=mm&r=g)
            
            [Berthold Ferner](http://www.shg-depression.at)
            
            Danke, Andre, jetzt ist alles klar.
            
            02\. Jun 2016 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Allerdings habe ich das Skript oben in ein Plugin verwandelt.  
                  
                https://github.com/andreknieriem/redirect Hier kannst du es dir runterladen. Das Skript hat die Funktion des Auto-Redirects.  
                  
                Grüße  
                André
                
                03\. Jun 2016 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/d928c1e5c1a500e13af11fdf7a2af91f?s=75&d=mm&r=g)
    
    [Hermann](http://www.gottliebtuns.com)
    
    (Beim vorigen Kommentar ging Standardseite unter)  
    Mir schwebt diese Lösung vor:  
    – Wenn jemand mit Smartphone eine Seite aufruft, wird er automatisch (oder mit Abfrage wie hier) auf die mobilfreundliche Seite weitergelinkt.  
    ABER  
    wenn er dann auf Standardseite klickt, sollte er auf die normale Seite kommen (umfangreichere mit Menüs usw).  
    PROBLEM DABEI:  
    WIE machen mit js???  
    denn er wird ja so IMMER FIX weitergeleitet.  
    WIE könnte dies denn realisiert werden???  
    Vielen Dank
    
    28\. Dec 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/d928c1e5c1a500e13af11fdf7a2af91f?s=75&d=mm&r=g)
    
    [Hermann](http://www.gottliebtuns.com)
    
    Mir schwebt diese Lösung vor:  
    \- Wenn jemand mit Smartphone eine Seite aufruft, wird er automatisch (oder mit Abfrage wie hier) auf die mobilfreundliche Seite weitergelinkt.  
    ABER  
    wenn er dann auf klickt, sollte er auf die normale Seite kommen (umfangreichere mit Menüs usw).  
    PROBLEM DABEI:  
    WIE machen mit js???  
    denn er wird ja so IMMER FIX weitergeleitet.  
    WIE könnte dies denn realisiert werden???  
    Vielen Dank
    
    28\. Dec 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/d928c1e5c1a500e13af11fdf7a2af91f?s=75&d=mm&r=g)
    
    [Hermann](http://www.gottliebtuns.com)
    
    Hallo,  
    bin auf der Suche nach html Seiten mobile freundlich zu machen hier gelandet.  
    Dieses script funktioniert auch toll!  
    ABER  
    muss ich in jeder html Datei den neuen link mit Namen setzen?  
    Zum Beispiel www.test.de/bsp1.htm leite ich auf www.test.de/mobile/bsp1.htm um.  
    Toll wäre, wenn der Name selbst irgendwie gesetzt würde denn ich habe 400 htm Seiten anzupassen.  
    Zudem muss ich bei dieser Methode alle Bilder auch in../mobile/images kopieren da ich den html Seiten nur den relativen Pfad angegeben habe...  
    Ansonsten gefällt mir diese Lösung nicht schlecht.  
    Weiß jemand, wie google darauf reagiert?  
    mfg  
    Hermann
    
    12\. Dec 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Hermann, normalerweise ist es heutzutage ja üblich einfach responsive Webseiten zu erstellen.  
          
        Wenn du sonst tatsächlich jede Seite auf ihr Pendant zur mobilen Seiten umleiten möchtest, dann könntest du das auch programmieren. Einfach ca so: var mobileUrl = 'mobile.deineseiten.de/' + window.location.pathname.  
          
        Das könnteste mal probieren.  
          
        PS: Google straft heutzutage Webseiten ab, die auf mobilen Geräten nicht funktionieren, also ist das immer gut!
        
        12\. Dec 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    [Andre Knieriem](http://andreknieriem.de)
    
    Ich habe das Script etwas umgebaut und ein kleines Plugin geschrieben. Das Ganze findet ihr in meinem Github Account.  
      
    https://github.com/andreknieriem/redirect
    
    28\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    [Andreas T](http://www.svgehlenberg.de)
    
    Zusatz: Wenn ich die } drinnlasse macht das Script gar nichts und geht direkt und ohne Abfrage auf meine Desktopseite.
    
    27\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    [Andreas T](http://www.svgehlenberg.de)
    
    Hab noch n bisschen probiert. Schwere Geburt. Komm mit echt bescheuert vor...  
      
    Hab jetzt die Klammer nach  
    window.location.href = „/start/frameset\_mobil.php“;  
    }  
    weggelassen. Ich glaub die ist zuviel...  
      
    Ich glaube beide Cookies werden korrekt gespeichert. Das Auslesen klappt irgendwie nicht...  
    Die Desktopseite wird korrekt behandelt.  
    Nachdem ich aber auf der Mobilen Seite war wird immer wieder die Abfrage gestartet...  
      
    Vielleicht könntest Du Dir noch einmal meine Datei ansehen...? Oder vielleicht die Codeschnipsel "oben" und "unten" oder besser das komplette Script hier reinstellen oder mir per Mail schicken...? Das wär echt super...  
      
    Danke vorerst für deine Mühen und Neven. Meine sind im Eimer ;-)  
    Und auch danke für das an sich tolle Script!  
    Ich hab nebenbei bei den Geräten noch "nintendo" eingetragen. So funktioniert die Weiche auch auf den 3DSssen von meinen Kindern...!  
      
    Gruß Andreas
    
    27\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    [Andreas T](http://www.svgehlenberg.de)
    
    OK! Hatte es falsch verstanden. Ich hab den code abgeändert statt das neue If(cockGet(..... unten dranzuhängen.  
      
    Leider gehts immer noch nicht.  
    Wenn ich meine HP starte kommt die Abfrage.  
    Wenn ich OK drücke kommt meine mobile Seite  
    es wird aber kein Cookie abgespeichert.  
    Wenn ich dann nochmal starte kommt wieder die Abfrage.  
    Wenn ich jetzt Abbrechen drücke kommt auch die Mobile Seite.  
    Wenn ich dann wieder beende und die HP neustarte kommt keine Abfrage. Also wurde ein Cookie gespeichert. Nur kommt jetzt, nachdem ich ja vorhin eigentlich auf Abbrechen gedrückt habe, die mobile Seite...
    
    27\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    [Andreas T](http://www.svgehlenberg.de)
    
    Sorry! Ich hab hin und herprobiert...  
      
    http://www.svgehlenberg.de/mobil.js  
      
    Ich hoffe du findest den fehler...
    
    27\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Andreas,  
          
        dein Script hat Fehler, ja. Also erst einmal hast du unten den Code des anderen Cookies entfernt, also  
          
        if(CookieGet('NoMobile') != 1) {  
        ...  
        }  
          
        Der Code var client = new Client(); etc muss dort genauso bleiben.  
          
        Ganz am Schluss kannst du dann deine Abfrage mit dem  
          
        if(CookieGet("ismobil") == 1) {  
        window.location.href = "/start/frameset\_mobil.php";  
        }  
          
        einsetzen. Dann sollte alles klappen.  
          
        Sag bescheid, wenns nicht klappt.  
          
        Grüße  
        André
        
        27\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    [Andreas T](http://www.svgehlenberg.de)
    
    Ich hab jetzt oben:  
      
    if(mconfirm == true){  
    CookieSave("ismobil", "1", "90");  
    window.location.href = "/start/frameset\_mobil.php"; }else{  
    CookieSave("nomobil", "1", "90");  
    }  
    }  
      
    und unten:  
      
    if(CookieGet("ismobil") == 1) {  
    window.location.href = "/start/frameset\_mobil.php";  
    }  
      
    seit dem ich das so hab kommt auch keine abfrage mehr...  
    Ich hab das jetzt genauso wie das im Dialog mit JP.Gerwin auch wohl irgendwann geklappt hat... Sollte zusätzlich noch darunter folgendes stehen...?:  
    if(CookieGet("nomobil") == 1) {  
    window.location.href = "/start/frameset\_desktop.php";  
    }  
      
    PS: Der Link den ich da verwende funktioniert in der Originalversion des Scripts einwandfrei...  
    Und mir fällt auf das mal !=1 und mal ==1 im Script steht...
    
    27\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Andreas,  
          
        das waren aber viele Kommentare :D  
          
        Hast du dein jetziges Script irgendwo liegen, dass ich es sehen kann? Steige nicht ganz durch, was jetzt wie geändert wurde.  
          
        Grüße  
        André
        
        27\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    [Andreas T](http://www.svgehlenberg.de)
    
    Mir ist grad aufgefallen das ich immer mal ‘ oder ' verwendet habe.... Oder sollte ich nur " verwenden...?  
      
    Bitte meine Fragerei vorm Freischalten zusammenfügen... ;-)
    
    27\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
    
    Andreas T
    
    Hi André,  
    Kathrin hatte am 29.August.2013 folgendes geschrieben:  
    .....Hab nur ein kleines Problem  
    Bei mir wird das Cookie nur berücksichtigt, wenn ich auf „Abbrechen“ gehe.  
    Klicke ich auf „Ja, weiterleiten“ wird das nicht gespeichert und ich muss jedesmal .... ist das so gewollt?  
      
    Du hattes geantwortet:  
    ... ja das ist ... so gewollt. Aber das lässt sich relativ leicht ausbauen.  
      
    Ich möchte es genauso haben und hab nun aus deinem Code folgendes gebaut.:  
      
    if(mconfirm == true){ CookieSave('ismobil', '1', '90');  
    window.location.href = "/start/frameset\_mobil.php"; // Hier das Verzeichnis festlegen  
    }else{  
    // Setze Cookie um spaetere Dialoge zu vermeiden  
    CookieSave('nomobil', '1', '90'); // Hier den Cookie-Namen ändern  
      
    \-----------  
    und unten:-  
    \-----------  
    if(CookieGet('ismobil') != 1) {  
    window.location.href = "/start/frameset\_mobil.php";  
    } // Hier den Cookie-Namen anpassen  
      
    Irgendwo ist da aber der Wurm drin. Jetzt funktioniert der Code nicht mehr...:-((  
    Ich bitte daher um unterstützung...  
      
    Gruß Andreas
    
    27\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/adaf3165fc8a6368ca0cac8da9637559?s=75&d=mm&r=g)
        
        [Andreas T](http://www.svgehlenberg.de)
        
        Uuups!  
        Unten hab ich folgendes stehen:  
        if(CookieGet('ismobil') == 1) {  
        window.location.href = "/start/frameset\_mobil.php";  
        }  
        Ich hab aber != und auch == probiert. Ich hab sogar versucht die letzte Klammer wegzulassen... Irgedwie hats auch schon mal funktioniert, aber genau falsch rum...  
          
        Könntest Du mir den korrekten Code schicken angepasst am originalcode ganz oben...?  
        Gruß  
        Andreas
        
        27\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/47ab8160f71d0fd3f186df683ff3796d?s=75&d=mm&r=g)
    
    [J.P. Gerwin](http://www.jpgdesign.de)
    
    Super, hat alles geklappt. Ich danke dir vielmals!!! :-)  
      
    Viele Grüße  
    JP Gerwin
    
    23\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    [Andre Knieriem](http://andreknieriem.de)
    
    Hallo,  
      
    der obere Teil ist super so. Dort machst du ja schon folgendes:  
      
    CookieSave(‚YesMobileJPGdesign‘, ‚1‘, ’90‘);  
      
    window.location.href = 'http://mobile.jpgdesign.de';  
      
    Das speichert ja erst den Cookie und leitet dich dann um.  
      
    Im unteren Teil, musst du nur gucken ob der Cookie da ist und dann umleiten. Also so:  
      
    if(CookieGet('YesMobileJPGdesign') == 1) {  
    window.location.href = 'http://mobile.jpgdesign.de';  
    }  
      
    Das ist auch schon alles glaube ich ;)
    
    21\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/47ab8160f71d0fd3f186df683ff3796d?s=75&d=mm&r=g)
    
    [J.P. Gerwin](http://www.jpgdesign.de)
    
    Ok, vielen Dank für die Antwort... also den oberen Teil habe ich den Code verstanden, glaube ich... der sieht jetzt so aus:  
      
    function mredirect(){  
    var mconfirm = confirm('Wollen Sie auf die mobile Version der Website weitergeleitet werden?');  
    if(mconfirm == true){  
    CookieSave('YesMobileJPGdesign', '1', '90');  
    window.location.href = 'http://mobile.jpgdesign.de'; // Hier das Verzeichnis festlegen  
    }else{  
    // Setze Cookie um spaetere Dialoge zu vermeiden  
    CookieSave('NoMobileJPGdesign', '1', '90'); // Hier den Cookie-Namen ändern  
    }  
    }  
      
    Aber bei dem unteren Teil hab ich noch so meine Probleme, der sieht jetzt momentan so aus... klappt aber nicht:  
      
    if(CookieGet('NoMobileJPGdesign') != 1) { // Hier den Cookie-Namen anpassen  
      
    var client = new Client();  
    if (client.isMobileClient(navigator.userAgent)) {  
    mredirect();  
    }  
    else if(client.isOperaMini(navigator.userAgent)){  
    document.observe('dom:loaded', mredirect);  
    }  
    }  
      
    if(CookieGet('YesMobileJPGdesign') != 1) { // Hier den Cookie-Namen anpassen  
      
    var client = new Client();  
    if (client.isMobileClient(navigator.userAgent)) {  
    mredirect();  
    }  
    else if(client.isOperaMini(navigator.userAgent)){  
    document.observe('dom:loaded', mredirect);  
    }  
    }  
      
      
    Kannst du mir helfen. Ich finde den Fehler nicht bzw ich weiß gar nicht wo ich suchen soll, weil ich eigentlich wenig Plan von Javascript habe. :-)  
      
    Vielen dank und viele Grüße  
    JP Gerwin
    
    21\. Oct 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/47ab8160f71d0fd3f186df683ff3796d?s=75&d=mm&r=g)
    
    [J.P. Gerwin](http://www.jpgdesign.de)
    
    Hey,  
      
    sorry wenn ich noch mal nerven muss. Aber wie genau muss das Skript am Ende aussehen. Ich verstehe momentan nicht, wie unterschieden wird, ob ich auf OK oder auf ABBRECHEN klicke. Nur durch die Änderung des Cookie Namens kann das doch nicht passieren oder?  
      
    Vielen vielen Dank und viele Grüße  
    JP Gerwin
    
    20\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo,  
          
        Das Script reagiert doch jetzt schon auf OK oder Abrechen. Schau dir am besten mal an, was javscript confirm macht:  
        http://www.w3schools.com/jsref/met\_win\_confirm.asp  
          
        oben im Code steht ja if confirm == true. Das bedeutet man hat OK geklickt.  
          
        Ich hoffe das reicht dir als kleiner Anstoß in die richtige Richtung ;)  
          
        Ansonsten sag bescheid wo es hapert.
        
        21\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/47ab8160f71d0fd3f186df683ff3796d?s=75&d=mm&r=g)
    
    [J.P. Gerwin](http://www.jpgdesign.de)
    
    Hallo Herr Knieriem,  
      
    vielen Dank für den Tipp, hat auch geklappt. Allerdings speichert er ja nur einen Cookie, wenn ich auf "Abbrechen" klicke. Geht das auch, dass er einen Cookie speichert, wenn ich auf "OK" klicke. So dass ich beim nächsten mal automatisch ohne Abfrage auf die mobile Version gelange?  
      
    Vielen Dank und viele Grüße  
    J.P. Gerwin
    
    16\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo,  
          
        klar geht das auch. Dafür muss nur der Code erweitert werden, sowie die Abfrage oben.  
          
        ..  
        if(mconfirm == true){  
        // hier jetzt auch nen Cookie speichern, vlt so:  
        CookieSave('YesMobile', '1', '90');  
          
        Und dann ganz unten:  
        if(CookieGet('YesMobile') != 1) { und hier dann ebenfalls diese redirect methode von der mredirect einbauen.  
          
        ...
        
        19\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/47ab8160f71d0fd3f186df683ff3796d?s=75&d=mm&r=g)
    
    [J.P. Gerwin](http://www.jpgdesign.de)
    
    Hallo Herr Knieriem,  
      
    vielen Dank für Ihr Script, hat bei mir auch sehr gut funktioniert. Leider habe ich dennoch ein Problem:  
      
    Anscheinend speichert mein Handy keinen Cookie, da die Abfrage immer wieder kommt, wenn ich die Seite besuche. Der erste Wert vom Cookie in Ihrem Skript steht momentan auf 1, der zweite auf 0. Da bedeutet ja meines Wissens, dass der Cookie nur so lange gilt, wie der Browser geöffnet ist. Wenn ich jedoch den ersten Wert auf 1 und den zweiten auf 90 setze, dann erscheint die Abfrage erst gar nicht.  
      
    Meinen Sie, Sie könnten mir da weiter helfen. Ich würde mich sehr freuen.  
      
    Hier meine Website: www.jpgdesign.de  
    (Ich habe Ihr Skript bisher nur auf der Startseite eingebunden.)  
      
    Viele Grüße  
    J.P. Gerwin
    
    09\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Herr Gerwin,  
          
        das Skript auf Ihrer Seite sieht richtig aus. Wenn Sie den Wert auf 1 und 0 stellen, dann bedeutet, dass das wie schon von Ihnen gesagt, dass die Abfrage nur solange gespeichert wird, wie der Browser geöffnet ist. Das heißt aber auch, dass jedes Mal die Abfrage kommt. Wenn Sie die Parameter auf 1 und 90 gesetzt haben und einmal auf "nein" geklickt haben, dann ist der Cookie 90 Tage lang gespeichert. Schauen Sie doch dort einmal, ob das der Fall ist und probieren Sie es erneut aus.  
          
        Viele Grüße
        
        12\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b56c280a2fdff640778a2a96b0da9dc7?s=75&d=mm&r=g)
    
    [R. Schüler](http://dasBaustoffkontor.de)
    
    Hallo Herr Knieriem,  
      
    ich bin dabei unsere Seite neu z erstellen und hatte versucht Ihre Scipt ein zu bauen, aber irgenwie habe ich bestimmt hier was falsch gemacht, ich würde mich freuen wenn Sie mal ein Blick darauf werfen könnten.  
    Link: http://www.dasbaustoffkontor.de/Neu/index.html  
      
    Besten Dank im Vorraus.  
    R. Schüler
    
    26\. Sep 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Herr Schüler,  
          
        Sie müssen das Skript in <script type="text/javascript"></script> Tags einfügen, sonst weiß der Browser nicht, dass es sich um ein Skript handelt und interpretiert es als Text.  
          
        Also <script type="text/javascript">function CookieSave(nam.... ...</script>.  
          
        Grüße  
        André
        
        26\. Sep 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f5292065d038438243855ed27863f6ef?s=75&d=mm&r=g)
    
    OpalShade
    
    Hey Andre,  
      
    ich bin mal eben über dein Skript gestolpert. Erstaunlich, dass fast alle Antworten online bezüglich einer Weiterleitung für Mobilnutzer die Möglichkeit ausschließen, den Besucher selbst entscheiden zu lassen.  
      
    Was mich jetzt noch stört ist die lange Lebensdauer. Wie ich auf einen Tag verkürze, hab ich schon den Kommentaren entnehmen können. Ich möchte aber gern einen Schritt weitergehen und möchte einen Session Cookie.  
    Eine Lösung wurde bereits weiter oben angegeben, welche aber nicht funktioniert (zumindest bei mir):  
      
    CookieSave('NoMobile', '1', '90');  
    zu  
    CookieSave('NoMobile', '0', '90');  
      
    Was soll dieser Wert beeinflussen, vor allem weil ich keine Funktion für den Wert '0' habe?  
    Weiter unten wurde sogar  
      
    CookieSave ('NoMobile', '1', '0');  
      
    vorgeschlagen, was natürlich auch nicht stimmen kann. 0 Tage heißt nichts anderes als dass der Cookie in dem Moment ungültig würde, in dem er gespeichert wurde.  
      
    Ich hoffe, du kannst mir da aushelfen. Ein Session Cookie wäre wohl kein must-have, aber sicher nice-to-have.  
      
    Gruß  
    Opal
    
    02\. Sep 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Opal,  
          
        CookieSave (‚NoMobile‘, ‚1‘, ‚0‘); ich glaube das ist schon ganz richtig so. Das bedeutet setze einen Cookie, der 0 Tage geht, was bedeutet, dass der Cookie so lange gültig ist, bis der Browser Fenster geschlossen wird.  
          
        http://stackoverflow.com/questions/14196671/session-only-cookies-with-javascript  
          
        Hier steht das Ganze auch nochmal beschrieben.  
          
        Viele Grüße  
        André
        
        03\. Sep 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/cc803548555a7f12687e34ea64526ae8?s=75&d=mm&r=g)
    
    [Tobias](http://www.owlnerfcommunity.de)
    
    Hallo,  
      
    versuche es schon seit Stunden aber bekomme es leider nicht hin, habe auch schon andere Scripte ausprobiert, finde aber den Fehler nicht.  
      
    http://www.owlnerfcommunity.de  
    http://www.owlnerfcommunity.de/mobile
    
    29\. Aug 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Tobias, das sieht bei dir aber eigentlich richtig aus. Sobald du die Option einmal bestätigt oder abgelehnt hast, wird es 90 Tage im Cookie gespeichert. Vlt. musst du deine Cookies leeren, um zu sehen, ob alles gut ist. Zudem würde ich das JS direkt im Head sehr weit oben anbringen, da sonst erst die komplette Seite geladen wird, bevor gefragt wird, ob umgeleitet werden soll und das ist ja nicht Sinn der Sache.  
          
        Viele Grüeß  
        André
        
        31\. Aug 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5813d4b05e4130291e0339bf95b65edd?s=75&d=mm&r=g)
    
    [David Guidali](http://-)
    
    Hallo Andre  
      
    Super Code, genau das was ich gesucht habe, danke!  
      
    Weisst du per Zufall welche Informationen bei der Verwendung von Tablets im userAgent des navigation-Objekts mitgegeben werden? Dieselben wie beim Desktop?  
      
    Gruss
    
    13\. May 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo David. Ipads kannst du einfach mit dem User agent ipad abfangen, android tablets geben leider auch nur android zurück. Dort könnte man aber mit Bildschirmgröße gegensteuern. also wenn android und > 768 breit, dann tablet.
        
        15\. May 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    [Andre Knieriem](http://andreknieriem.de)
    
    Hallo Dirk, danke für die netten Worte. Das Script speichert nur einen Cookie für 90 Tage, wenn man auf ablehnen klickt, sodass man dann die Desktop Variante 90 Tage ohne Frage nutzen kann. Dass er auch die Weiterleitung speichert ist nicht vorgesehen, wäre aber auch eine gute Erweiterung. Dafür müssteste nur an der Stelle wo der redirect kommt nen Cookie setzen und dann vorher wo auch nach dem anderen geguckt wird nach dem neuen gucken und dann redirecten.  
      
    Grüße André
    
    19\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/9be9c2e7c3fc7f2f20de692a57e1c262?s=75&d=mm&r=g)
        
        Dirk
        
        Hallo Andre,  
          
        na, das ging aber schnell. Danke.  
          
        Okay:  
        Dass ein Cookie ermöglicht, 90 Tage ohne Frage auf der Desktopvariante zu verbleiben, wenn ich mich nun mal dafür entschieden habe, finde ich einleuchtend.  
          
        Aber ich habe mich beim ersten Aufruf für die mobile Version entschieden. Beim nächsten Aufruf erhalte ich keine Entscheidungsmöglichkeit und bleibe auf der Desktopvariante. Das finde ich komisch. Nur wenn ich das Cookie lösche, werde ich wieder gefragt. Aber auch wieder nur einmal, obwohl ich mich für die mobile Version entscheide.  
          
        Was verstehe ich falsch.  
          
        Schönes Wochenende.
        
        21\. Mar 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/9be9c2e7c3fc7f2f20de692a57e1c262?s=75&d=mm&r=g)
    
    Dirk
    
    Guten Morgen Andre,  
      
    vielen Dank nachträglich, zu Deinem tollen Script und dafür, dass Du Dich nach fast 4 Jahren immer noch darum bemühst, den vielen Fragenden zu antworten.  
      
    Mein Problem:  
      
    Beim ersten Aufruf kommt die Frage nach der Weiterleitung und je nach Entscheidung kommt man auf die ausgewählte Seite.  
      
    Bei jedem weiteren Aufruf kommt logischerweise keine Frage mehr. Allerdings wird man auch nicht mehr auf die mobile Ausgabe weitergeleitet, selbst wenn man sich beim erstan Aufruf dafür entschieden hatte, Was mache ich falsch?  
      
    Liebe Grüße  
    Dirk
    
    19\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Dirk,  
          
        das hört sich tatsächlich falsch an. Aber wenn ich Code oben nach dem Aufruf der Funktion Cookiesave gucke, dann wird diese nur ausgeführt, wenn man auf "Nein" klickt. Also müsstest du irgendwann Nein geklickt haben.
        
        24\. Mar 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1a395a21acf9616321148f93bd526f25?s=75&d=mm&r=g)
    
    eilico
    
    hi andre, es funktioniert super, nur - wenn der User aber die mobile Website nicht mehr sehen will und die volle Version aufrufen möchte, zeigt sich nur eine blanke weisse Seite.  
    Wenn er also nicht mehr auf die mobile Seite möchte, muss er zuerst die Cookies löschen, dann funktioniert die Umleitung wieder und er kann die volle Seite aufrufen. Aber dann bleibt er ständig auf der vollen Seite und die mobile Seite lässt sich nicht mehr aufrufen.....  
      
    hm.  
    Es ist ja echt ein Krampf mit dem es allen recht machen und inzwischen sind ja alle Smartphones schon soweit, dass sie die vollen Websites auch schon anzeigen können.  
      
    kann man da das Cookie irgendwie wieder löschen durch ein Zusatzscript? Z.B. durch Klick auf einen speziellen Button?? Ich fang nämlich grad an, mich mit JS auseinanderzusetzen :-P uijegerl...  
    Aber Danke wenn du einen Tipp für mich hättest :-)
    
    14\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo eilico, sry für die späte Rückmeldung, hatte keine Zeit bisher.  
          
        Klar kannst du den Cookie via Script "löschen". Das geht indem du Funktion CookieSave() benutzt. Du speicherst den Cookie nocheinmal aber mit einer Lebensdauer von 0 Tagen, 0 Stunden, 0 Sekunden. Somit ist der Cookie sofort abgelaufen und wird gelöscht. Also so:  
          
        CookieSave('NoMobile', '1', '0'); Das sollte klappen denke ich.
        
        18\. Mar 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1be39423ed510dae813c440d180ccd72?s=75&d=mm&r=g)
    
    Alex
    
    Hallo André,  
    ich folgendes Problem. Alles funktioniert soweit ok bis auf die sich dauern wiederholende Abfrage ob ich wechseln will zu mobilen Seite. Der Verfall von Cookie ist auf "0" gesetzt. Redirect ist auf eine "/m.meinedomain.de" gesetzt. Doch jedesmal wenn ich die "meinedomain.de" aufrufe kommt eine Abfrage. Wie kann man dieses lästige Problem loswerden?  
      
      
    Und noch eine Frage:-):  
    Lässt sich für den wiederkehrenden Besucher eine "Willkommen zurück" erzeugen? Falls ja. Was muss dann noch rein in dein Script?  
      
    Danke dir vielmals im Voraus!  
    Sonnige Grüße aus München.  
    Alex
    
    06\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo, der "Der Verfall von Cookie ist auf “0” " heißt doch, dass er den Cookie nicht speichern soll. Somit kommt die Abfrage natürlich jedes Mail. Du musst dort eine Eingabe machen, wie lange der Cookie bestehen bleiben soll. Also wie im Beispiel oben auf 90 Tage.  
          
        Grüße  
        André
        
        09\. Mar 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7cf431da962d50f2ad449255e2aedc12?s=75&d=mm&r=g)
    
    [Namus](http://-)
    
    Hallo Andre,  
      
    ich habe erfolgreich deinen Script auf unserer Seite eingebunden und funktioniert tadellos bis auf ein kleines Manko.  
    Bei der Abfrage der Endgeräte in der Zeile: "Client.prototype.mobileClients" gibt es keine Unterscheidung zwischen "Android Smartphone" und "Android Mobile".  
      
    Aktuell kommt die Abfrage auch bei Android Tablets. Die Weiche soll aber nur bei Mobilen Android User kommen.  
      
    Hast du einen Tipp für mich ?  
      
    Beste Grüße  
    Namus
    
    05\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Namus, laut http://stackoverflow.com/questions/5341637/how-do-detect-android-tablets-in-general-useragent kommen Handys mit Mobile Android als User Agent, Tablets und andere Geräte nur mit Android. Somit müsste es gehen, wenn du in der Liste mobile android, statt android schreibst.  
          
        Grüße
        
        05\. Mar 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    [Andre Knieriem](http://andreknieriem.de)
    
    Hallo Gökhan,  
      
    das geht natürlich auch, da du mit Javascript die derzeige Bildschirmbreite mit dabei hast.  
      
    http://www.w3schools.com/jsref/prop\_win\_innerheight.asp  
    oder mit jQuery $(window).height(), $(window).width(). Bekommst du die Werte in px und kannst dann die Funktion mredirect() aus dem oberen Script aufrufen.
    
    02\. Mar 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/45a732681a62c973f1f0dd2668781514?s=75&d=mm&r=g)
    
    Gökhan Uçar
    
    Hallo André,  
      
    ich bedanke mich im Vorraus für deinen Skript. Momentan mache ich einige Anpassungen an dem Skript. Und zwar versuche ich die Weiterleitung für die Netbook hinzukriegen. Das Problem an diesen Exemplaren sind ihre Ähnlichkeit zu den größeren Brüdern wie PC und Notebook/Laptop. Daher habe ich mir überlegt, die Bildauflößungen/Screensizes der Geräte zu nehmen. Nur werden in dem User-Agent keine Bildauflößungen verwendet. Gibt es da eine Möglichkeit, den Netbooks dennoch auf die mobile Version umzuleiten?
    
    02\. Mar 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/3b9160c992f6dc918a0854874996892b?s=75&d=mm&r=g)
    
    Thomas
    
    Hallo André, ich benutze schon eine Weile Dein script, funktioniert einwandfrei :-)  
    Frage: Muss die Geräteliste im script eigentlich mal aktualisiert werden? Es kommen ja ziemlich oft neue Handys ... u.s.w. mit anderen Auflösungen auf den Markt.  
    Gruß Thomas
    
    14\. Feb 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Thomas, es kommt ab und zu vor, dass ich die Liste ergänze, allerdings kommen kaum noch neue Betriebssysteme heraus. Die Auflösungen spielen eigentlich keine Rolle. Es wird nur geguckt, ob irgendein altes Smartphone, oder IOS, Android, Windows Phone usw... Wenn jetzt beispielsweise Sony ein eigenes System bauen würde, müsste man dieses ergänzen, ansonsten ist die Liste glaube ich aktuell.
        
        18\. Feb 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    [Andre Knieriem](http://andreknieriem.de)
    
    Hi Markus, der Code-Block gehört nicht zum Script dazu, den hatte Wordpress durch ein Update hinzugefügt. Diesen einfach entfernen. Ansonsten musst du nur den obrigen Code in ein script-tag einfügen. Da wo mversion steht musst du dein Zeil in '' packen, also '/mobile/' oder so. Ansonsten schicke mir gerne noch eine E-Mail, diese sollte mein Mailprogramm nicht mehr automatisch wegschmeißen.  
      
    Grüße  
    André
    
    28\. Jan 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e1760e496e78efd1c893851c49a79323?s=75&d=mm&r=g)
    
    Marcus
    
    Hallo,  
      
    ich habe einmal mit:  
      
      
    eine js Datei eingebunden und den obenstehenen quellcode in diese checkdrive.js reinkopiert.  
      
    Dann habe ich lediglich den Pfad geändert:  
    http://www.domain.de/ordner/test/m/;  
    vor ---// Hier das Verzeichnis festlegen  
      
    den cookienamen hab ich nicht geändert-ich denke, das müsste ja auch mit dem vorgegebenen Namen "NoMobile" funktionieren.  
      
    getestet hab ich das mit einem nokia Handy....leider funktioniert es nicht.  
    Was mache ich denn falsch??  
      
    LG  
    Marcus
    
    26\. Jan 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Marcus, wird das Script denn ausgeführt oder gibt es Fehler? Wenn du Firefox, oder Chrome benutzt auf dem PC kannste mal mit "Element untersuchen" auf die Seite klicken, dann in den Tab "Konsole" wechseln und dann die Seite neuladen. Falls es Fehler gibt, siehst du diese da. Da du ein Nokia Handy hast, denke ich mal, dass du Windows Phone hast oder? Der Post ist schon etwas älter, vielleicht funktioniert der nicht so ganz mehr mit neueren Windows Phones. Habe leider auch keins da zum testen. In den Kommentaren steht aber auch, etwas wie man es auf Windows Phone zum Laufen kriegt. Ich suche es gleich mal und ergeänze oben im Code.  
          
        Grüße  
        André
        
        27\. Jan 2015 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e1760e496e78efd1c893851c49a79323?s=75&d=mm&r=g)
            
            Marcus
            
            Hallo Andrè,  
              
            ich habe ein älteres Nokia XpressMusic.  
            Hab es aber auch bereits mit einem Iphone getestet-seite wir nicht weitergeleitet und auch eine Abfrage erscheint nicht-hab grad mal das mit der Chrome Console gemacht und es ist ein syntax Fehler drin...  
              
            Ich habe irgendwie das Gefühl, das es an der Zeile und der Schlusszeile liegen könnte....denn wenn ich das 1 zu 1 reinkopiere, erschein der gesamte snip von Dir als Inhalt und wird gar nich als Script erkannt.  
              
            Evtl. schaust Du mal in deine Mails-da habe ich Dir einen Link mitgesendet....  
              
            Vielen Dank für Deine Hilfe.  
              
            GLG  
            Marcus
            
            27\. Jan 2015 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/e13ac931e6e864374333af703a7a32ac?s=75&d=mm&r=g)
    
    Silko
    
    Hier nochmal ein kleiner Tipp!  
      
    Macht folgendes:  
    Kopiert oben den Code und fügt diesen in ein leere Datei ein.  
    Nennt diese z.B. "weiche" und speichert es als JavaScript ab. Sprich mit der Endung "js" und in bei dem kopierten Text bitte oben und unten den Tag und entfernen dann in die Datei einbinden in der index.php.  
      
      
      
    Jetzt nur noch den Ordner angeben wo die mobile Seite liegt:  
      
    z.B. : window.location.href = "/mobile"; // Hier das Verzeichnis festlegen  
      
    Das sollte eigentlich funktionieren. Jedenfalls bei mir. :-) Hoffe das hilft denen die JS und PHP nicht so kennen.  
      
    Viele Grüße
    
    22\. Sep 2014 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/7e87c2a00c032189e30d2c86ad85dd0c?s=75&d=mm&r=g)
    
    Tobias
    
    Super, funktioniert :) danke!
    
    18\. Sep 2014 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/7e87c2a00c032189e30d2c86ad85dd0c?s=75&d=mm&r=g)
    
    Tobias
    
    Hallo Andre! Super Skript, steh schon ne ganze Weile auf dem Schlauch bei dem Thema :) danke dafür. Jetzt würde ich aber gerne die Abfrage überspringen und direkt nach detection auf die angepasste mobile Seite im Unterverzeichnis verweisen. Inwiefern müsste ich den Code dafür anpassen? Bin leider kein js-Experte ^^
    
    16\. Sep 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Tobias, freut mich, dass das Skript dir geholfen hat. Um die Abfrage zu überspringen musst du einfach in der Funtion "function mredirect(){}" die If-Abfrage entfernen. Also:  
          
        function mredirect(){  
        window.location.href = mversion; // Hier das Verzeichnis festlegen  
        }  
        
        17\. Sep 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c3d7b54091df72d79a7f7370218190dc?s=75&d=mm&r=g)
    
    Dan
    
    Hallo,  
    ich habe das Script eingebunden und es funktioniert. Vielen Dank dafür! Nur beim iPad Mini Retina wird nicht auf die URL weitergeleitet. Liegt es an der hochen Bildschirmauflösung der iPad Mini Retina? Kann man das irgendwie umgehen?  
      
    Vielen Dank im voraus.
    
    12\. Sep 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Dan, die Bildschirmauflösung wird nicht abgefragt. Es wird aber auch nicht nach ipads geguckt, da diese ja normalerweise genügend Auflösung besitzen. Um auch iPads mit zu nehmen, musst du an der langen Liste einfach "ipad" hinzufügen.  
          
        \["240x320","blackberry","netfront","nokia","panasonic","portalmmm","sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","philips","pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","iphone","android","iemobile","windows phone","ipad"\];  
          
        Testen kann ich das leider nicht, da ich keins besitze, sollte aber funktionieren.
        
        12\. Sep 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3a252ae4930e19f634868da56ef78a7a?s=75&d=mm&r=g)
    
    [Frank](http://securitec.lu/)
    
    Hallo,  
    ich habe das Script in eine mit Shopware erstelle Webseite eingebunden.  
    Leider tut sich aber überhaupt nichts.  
      
    Vielen Dank für Deine Hilfe :)
    
    26\. Aug 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/3a252ae4930e19f634868da56ef78a7a?s=75&d=mm&r=g)
        
        [Frank](http://securitec.lu/)
        
        http://securitec.lu/
        
        26\. Aug 2014 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Frank, da ist ein Fehler in deinem Javascript. Wenn du Chrome oder Firefox hast, kannst du diese in der Konsole sehen. Dort sehe ich, dass in der mobile.js der komplette Javascript-Code in "<code>"-Tags gewrappt ist. Also wenn du ganz am Anfang und ganz am Ende das Code-Tag entfernst, sollte es gehen.  
          
        Grüße  
        André
        
        27\. Aug 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/3a252ae4930e19f634868da56ef78a7a?s=75&d=mm&r=g)
            
            [Frank](http://securitec.lu/)
            
            Vielen Dank, das Script läuft jetzt!!  
              
            Zwar gibt es noch ein Problem mit der Weiterleitung, aber das liegt wohl nicht am Script
            
            27\. Aug 2014 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/2244e7c918216c0fe5a11531d6ca2213?s=75&d=mm&r=g)
    
    [Andy](http://www.martins-ferienwohnungen.de)
    
    Hallo,  
    ich habe das script umgeschrieben bzw.angepasst und nach anleitung über NOF 12 eingebunden dann publiziert. Es kommt aber keine Abfrage wie erwartet was kann das Problem sein ?
    
    15\. Aug 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Andy, ohne eine Url zu deiner Seite kann ich nur raten. Hast du die Meldung vlt schonmal weggeklickt? Dann ist ja ein Cookie gesetzt.  
          
        Grüße André
        
        17\. Aug 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8438fa389d5de4065d6b2b18ebea4e68?s=75&d=mm&r=g)
    
    Christian
    
    ergänzung zum vorigen kommentar:  
      
    \*normal binde ich sie so mit javascript ein:  
      
    http://www.onbile.com/redirection/41dcm76yi24odtnh8d3ieyml6557b4z1xwgp3fa32hg46mtjn0?
    
    14\. Aug 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Christian, verstehe leider nicht ganz was du meinst, da die Kommentar-Funktion Scripte-Schnipsel entfernt. Könntest du mir eine Mail schreiben, oder nochmal beschreiben, was genau das Problem ist?  
          
        Grüße  
        André
        
        14\. Aug 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8438fa389d5de4065d6b2b18ebea4e68?s=75&d=mm&r=g)
    
    Christian
    
    Hallo,  
      
    toller Codeschnipsel, gefällt mir gut.  
      
    Funktioniert soweit auch einwandfrei, jedoch möchte ich die Umleitung auf meine mobile Seite welche unter onbile.com gehostet ist.  
      
    Normal binde ich Sie so ein:  
      
      
    jedoch habe ich dann keine Abfrage.  
      
    Wenn ich es mit deinem Code einbinde:  
      
    window.location.href = 'src="http://www.onbile.com/redirection/41dcm76yi24odtnh8d3ieyml6557b4z1xwgp3fa32hg46mtjn0"'; // Hier das Verzeichnis festlegen  
      
    habe ich eine Endlosschleife mit Abfragen..  
      
    Vl. kannst du mir ja helfen :-)  
      
    lg Christian
    
    14\. Aug 2014 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/afffbcd27b3ca713a30e91b7a931fad7?s=75&d=mm&r=g)
    
    [Philip](http://www.sigrist-gravuren.ch)
    
    Einfach nur genial!!!!  
    Tausend Dank, nach so was habe ich schon lange gesucht.  
    Funktioniert einwandfrei!!!!  
      
    Versuche gerade, noch die umgekehrte Variante zu erstellen.  
    Also wenn einer via Dekstop auf der Mobilen Seite geht.
    
    31\. Jul 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hey Philip freut mich, dass alles klappt :) Die umgekehrte Variante geht ja auch so ähnlich.
        
        31\. Jul 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3b9160c992f6dc918a0854874996892b?s=75&d=mm&r=g)
    
    Thomas
    
    Hallo André,  
    muss eigentlich der Cookiename geändert werden?  
    ...  
    CookieSave('NoMobile', '1', '90'); // Hier den Cookie-Namen ändern  
    ...  
    Meinst Du für 'NoMobile' was anderes einsetzen?  
    Wenn ja, was und warum ?  
    Script funktioniert ansonsten - danke :-)  
    Hab eine Extradatei gemacht und einen Link drauf gelegt.  
    Auf dem Samsung dauert alles ziemlich lange, hab noch ´n S2.  
    Das Tablet (auch Samsung) werkelt flotter. Hast Du dafür eine Erklärung? Habe beide Geräte im selben WLAN.  
    Gruß Thomas.
    
    09\. Jun 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Thomas, nein der muss nicht geändert werden ;) Aber kann ja sein, dass schon ein andere Cookie so heißt deswegen meinte ich das.  
          
        Dein Problem kann ich mir nicht wirklich erklären. Du solltest das Script möglichst als erstes in den Head packen,damit die Seite nicht vollständig geladen wird bevor du umleitest. Vlt. braucht das S2 einfach generell länger um die Datei reinzuladen.  
          
        Grüße
        
        11\. Jun 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8e9eee942cbbfa951390d59f904d37ab?s=75&d=mm&r=g)
    
    Patrick
    
    Halli Hallo,  
      
    ich hoffe, ich bekomme hier noch eine Antwort, ist ja schon ne Weile her. Also ich nutze das Script und möchte es in Joomla verwenden. Allerdings hat Joomla eine Restriktion beim Aufrufen der php Dateien. Somit kann ich nicht ohne weiteres auf eine "mobile.php" weiterleiten. Das Joomla Framework wird dann nämlich nicht geladen. Kann mir jemand sagen wie ich das hinbekomme? Das wäre super.. =)
    
    27\. Apr 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Patrick, ich verstehe nicht ganz,was das Problem ist. Du musst ja nicht auf eine Php-Datei umleiten, kannst ja sagen "/mobile/" oder z.B. via Subdomain "mobile.deineurl.de"  
          
        Grüße
        
        27\. Apr 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/8e9eee942cbbfa951390d59f904d37ab?s=75&d=mm&r=g)
            
            Patrick
            
            joomla geht aber ja immer von der index.php aus. selbst wenn ich eine neue beitragsdatei anlegen würde, die dann als url index.php/mobile hätte, würde ich beim klicken eines menüpunktes ja wieder auf index.php/beitrag1 landen, somit müsste ich quasi für die mobile version alle beiträge 2 mal anlegen, das ist natürlich nicht gewollt.  
              
            allerdings habe ich es jetzt gelöst, indem ich in der index.php oben festlege:  
              
            if (isset($\_COOKIE\["pointwhvmobile"\])) {  
            include("mobile.php");  
            }  
            elseif (isset($\_COOKIE\["pointwhvscreen"\])) {  
            include("screen.php");  
            }  
            else { ?>  
              
            <script type="text/javascript" src="baseurl ?>/templates/template ?>/js/mobileabfrage.js">  
              
              
              
            ans anfang des scripts habe ich noch eine prüfung eingefügt, die nachfragt, ob überhaupt cookies aktiviert sind, sonst würde ich in einer schleife landen. Das script wird also nur ausgeführt wenn cookies aktiviert sind. Außerdem wird in beiden Fällen ein Cookie gespeichert, mit unterschiedlichen Namen. Weitergeleitet wird dann auch in beiden Fällen wieder auf index.php.  
              
            Die lösung ist mit meinen noob-Kenntnissen noch gerade so realisierbar gewesen. Allerdings hat sie natürlich noch gewisse Nachteile. z.B. wenn der user keine cookies aktiviert hat, landet er zwangsläufig auf der NICHT-MOBILE seite. Aber ich denke da muss man Kompromisse machen, nicht wahr?  
              
            Eine Frage noch:  
            wenn nun zukünftig mehr Handy-Hersteller hinzukommen, welche ja im Javascript abgefragt werden, woher bekomme ich deren richtige bezeichnung für die Hinzufügung im Script..?  
              
            Übrigens hier der Link zu meiner (vorläufigen) seite:  
              
            http://point.nordkreatur.de  
              
            Liebe Grüße
            
            27\. Apr 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Patrick, das wusste ich nicht, aber gute Lösung. Ich hoffe auch, dass das Update-sicher ist, nicht dass das nächste Joomla Update die Datei wieder überschreibt ;) Da mitlerweile alle Android, Windows Phone oder iOs haben werden wohl kaum noch neue hinzukommen, da diese 3 Systeme ja schon abgefragt werden. Nach Herstellern war die alte Methode, als jeder noch sein eigenes Betriebssystem hatte.  
          
        Grüße!  
          
        Ps: Schöne Seite ;)
        
        28\. Apr 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
    
    [Helmut](http://waveswebdesign.de/)
    
    Hallo,  
    habe die Joomla Version auf 2.5.17 aktualisiert und habe den Eindruck, dass die Weiterleitung nicht fuktioniert :-(  
    Hier die Vorgabe:  
    .........  
    window.location.href = mversion; // Hier das Verzeichnis festlegen  
    }else{  
    // Setze Cookie um spaetere Dialoge zu vermeiden  
    CookieSave('NoMobile', '1', '90'); // Hier den Cookie-Namen ändern  
    ..........  
    mversion ersetzt durch:  
    http://waveswebdesign.de/waveswebdesign.de/Respons  
    funktioniert leider nicht wie gewünscht  
    Helmut
    
    19\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
        
        [Helmut](http://waveswebdesign.de/)
        
        Korrektur:  
        habe weiter oben gelesen, dass der Eintrag der Ziel-Domain eingestellt werden soll und nicht wie vor geschrieben.  
        Helmut
        
        19\. Jan 2014 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hey Helmut, hat es nun geklappt oder nicht? Bin nicht ganz schlau aus deinem Nachtrag geworden.  
          
        Deine Adresse musst du auch in "" oder '' machen, damit es klappt, falls du das nicht getan hast.  
          
          
        Grüße
        
        20\. Jan 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5a6bfaf6a93cfa350ba109dc8ad842b9?s=75&d=mm&r=g)
    
    Erik
    
    Was muss ich an dem Code ändern, dass wenn einer mit seinem PC auf meine Mobile Website kommt, und er gefragt wird, ob er zur Webversion wechseln möchte? (Ab gesehen vom Text).
    
    04\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Erik, das ist nicht so schwer. Dafür musst das Script oben auch bei deiner mobilen Version einbauen. Und dann musst du nur die eine Abfrage verneinen, also so:  
          
        if (!client.isMobileClient(navigator.userAgent)) {  
        mredirect();  
        }  
          
        Das heißt, wenn der Benutzer NICHT mobil ist, dann leite um.  
          
        Grüße
        
        05\. Jan 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/572274b8fef2d930c3e160094ed64721?s=75&d=mm&r=g)
    
    Markus Wiedemann
    
    Hi!  
    Also erstmal...tolle Arbeit...auch wenn ich das nicht gewohnt bin, hab ich es auf Anhieb zum laufen gebracht ;) !  
      
    Wärst Du so nett und schaust es Dir mal an?  
    Ich hab da nämlich noch Fragen bzgl. der Anpassung...  
      
    http://hygiene2014.d3.gs  
      
    Die Seite ist iOS-optimiert und z. B. auf der Startseite öffnen die Links A-C etc. in einer Slide-Show. Das find ich erstens mal ziemlich schön :) und zweitens hat es den Hintergrund, dass es sonst Probleme gibt, wenn die WebApp auf dem iPhone/iPad auf dem Homebildschirm als Pseudo-native-App liegt.  
    Nachdem da dann nämlich alle Safari-Navigationsbuttons ausgeblendet werden, dürfen die pdf-Seiten nicht separat öffnen. Ansonsten kommt man nämlich nicht mehr zur Seite zurück und muss die WebApp neu öffnen.  
      
    Alles soweit so gut...aber auf Android-Geräten habe ich nun festgestellt, dass die Slideshow nicht funktioniert und die pdf´s nicht angezeigt werden können.  
      
    Hier kommt nun also Dein Script genau richtig!  
      
    Es leitet nun zu einer 1zu1-Kopie meiner WebApp weiter, in der ich lediglich das Slideshow-JScript deaktiviert habe.  
      
    Nun meine Fragen...  
      
    Ist es mir möglich einzustellen, dass auf PC/Mac auch die Abfrage kommt?  
    Die pdf´s mittels Slideshow sind da nämlich sehr klein in Safari und in GoogleChrome, Firefox etc. gibt es auch die Probleme...hier wäre die "Android-Version" besser zu nutzen.  
      
    Und...gibt es die Möglichkeit, bei der Abfragebox nicht die Serveradresse, sondern den selbst definierten Seitentitel anzeigen zu lassen?  
      
    Wär nett wenn Du da mal vorbeischaust und mir helfen könntest...!  
      
    Grüße, Markus
    
    04\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/572274b8fef2d930c3e160094ed64721?s=75&d=mm&r=g)
        
        Markus
        
        Also...mittlerweile hab ich den Spies umgedreht und leite zur iOS-Version weiter. Macht ja eigentlich mehr Sinn!  
          
        Das mit der Serveradresse in der Abfragebox würde ich aber immer noch gerne ändern...  
          
        und der Pfeil nach oben (auf dieser Blog-Seite) ist auch cool...wie funktioniert das?  
          
        Grüße, Markus
        
        05\. Jan 2014 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Markus, für den Pfeil habe ich auch ein Tutorial:  
          
        http://andreknieriem.de/schon-zum-seitenanfang-scrollen-mit-jquery-smooth-scroll-to-pagetop/  
          
        Die Serveradresse kann man leider nicht ändern, da es ein Browser Spezisches "Confirm" ist, das jeder Browser anders anzeigt. Hier gibt es mehr Infos:  
          
        http://www.w3schools.com/jsref/met\_win\_confirm.asp  
          
        Du könntest allerdings auch eine komplette eigene Meldung bauen, zum Beispiel mit http://jqueryui.com/dialog/. Dafür ist dann allerdings etwas Arbeit nötig.  
          
        Grüße
        
        05\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/572274b8fef2d930c3e160094ed64721?s=75&d=mm&r=g)
            
            Markus
            
            Herzlichen Dank für die Antwort :)
            
            06\. Jan 2014 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/78399451ad2b5b82585eaecb20ec3d77?s=75&d=mm&r=g)
    
    arexhaj
    
    Hallo,  
    ich habe jetzt das Javascript kopiert und in meiner html datei in den Headerberiech eingebunden. Und wenn ich mit meinem iphone auf meine seite gehe werde ich gefragt ob ich auf die mobile website weitergeleitet werden soll. Ich akzeptiere dass und alles klappt.  
    Doch wenn ich wieder auf meine Seite gehe werd ich nicht mehr gefragt. Ich bin dann nur noch auf der normalen Desktop Version.  
    Wie kann ich es jetzt so machen, dass ich immer wieder gefragt werde ?
    
    18\. Dec 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey arexhaj,  
          
        kann es sein, dass du einmal auf nein geklickt hast? Um Besucher der Seite nciht zu nerven, wird bei Nein ein Cookie gesetzt, dass 90 Tage lang nicht mehr fragt. Wenn du ja geklickt hast, dann sollte die Meldung immer wieder kommen, bis du einmal nein geklickt hast.  
          
        Grüße
        
        20\. Dec 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a54bc5fb6b65ac41b0a3a47bd84d4a1e?s=75&d=mm&r=g)
    
    [Andreas](http://www.der-werbemakler.de)
    
    Hallo Andre,  
      
    habe den Code eingebunden und auf meinem Windows Phone welches ich ergänzt habe funktioniert die Weiterleitung auch. Bei den Android Geräten allerdings funktioniert zwar die Abfrage und die Weiterleitung, jedoch hängen sich die Geräte in einer Endlos-Lade-Schleife auf. Was kann ich tun ?  
      
    MfG Andreas
    
    27\. Nov 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Andreas, kann es sein, dass du auf deiner mobilen Seite auch einen Code hast, um die Handys wieder umzuleiten? Also dass es passiert, dass dein Handy auf die Desktop-Variante geht, dann auf Mobile weitergeleitet und auf der Mobilen Seite steht drin leite weiter auf die Desktop Version. Wenn du mir sagst, wo das passiert kann ich ja mal mit drauf schauen ;)  
          
        Grüße André
        
        28\. Nov 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5beaa243acd802928fa27f697aa38967?s=75&d=mm&r=g)
    
    [Thomas](http://www.ff-lichtenberg.de)
    
    Oh super vielen Dank Andre\` jetzt klappt es super!!!  
    Eine Frage noch, kann man die Buttons "Abbrechen" sowie "OK" umbenennen? z.b.: in Desktop und Mobil? Falls je wie!?  
    Vielen Dank im vorraus.  
    Gruß Thomas
    
    20\. Oct 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Thomas, das geht leider nicht, da jeder Browser die Confirm und Alert-Fenster selber baut. Man kann diese ja auch nicht via CSS umstylen. Das einzige was man machen könnte, wäre zum Beispiel ein kompletter JS Dialog wie bei http://jqueryui.com/dialog/ zu verwenden. Da kann man dann alles so einstellen, wie man es möchte.  
          
        Grüße  
        André
        
        20\. Oct 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5beaa243acd802928fa27f697aa38967?s=75&d=mm&r=g)
    
    [Thomas](http://www.ff-lichtenberg.de)
    
    Hallo Andre, ich muss noch einmal nerven. Ich habe den Script genau so eingefügt in meine index.php des Desktop-Seiten-Templates bei Joomla. Und die checkdevice.js Datei habe ich in die gleiche Ordnerebene wie die index.php geschoben. In der checkdevice.js habe ich CookieSave von 90 auf 0 gesetzt trotzdem bekomme ich kein Fester bzw. Auswahl auf dem iphone wo ich hingeleitet werden möchte! entweder liegt es am falschen bzw. falsch angelegten script oder daran das durch das Mobile-Joomla-Template bereits die automatische Umleitung ja schon aktiv ist und dies sich nicht mit einander verträgt?? ich möchte einfach nur das der Smartephone besitzer ein Fenster bekommt damit er auswählen kann welche seite er besuchen möchte. kannst du bitte noch einmal bei mir nachschauen was da falsch sein könnte. den script findest du ja in meinem Quelltext. www.ff-lichtenberg.de Vielen Dank im voraus
    
    16\. Oct 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Als Webentwickler sollte man immer einen Blick auf die Konsole haben ;)  
          
        Du hast einen Javascriptfehler in der Checkdevice.js ;) Und zwar hast du die URL auf die Umgeleitet werden soll nicht in "" oder '' gepackt. Also  
          
        window.location.href = ff-lichtenberg.de/index.php/de/?device=xhtml;  
          
        muss zu  
          
        window.location.href = "ff-lichtenberg.de/index.php/de/?device=xhtml;"  
          
        Danach sollte das Javascript nicht mehr scheitern und dir den Popup anzeigen.  
          
        Grüße
        
        18\. Oct 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5beaa243acd802928fa27f697aa38967?s=75&d=mm&r=g)
    
    [Thomas](http://ff-lichtenberg.de)
    
    Die Datei habe ich in die gleiche Ordnerebene wie die "index.php" meiner Hauptinternetseite eingefügt. In meine Hauptseiten index.php habe ich "" eingefügt (direkt unter sieht dann so aus:  
      
      
    .....  
      
    Aber es geht dann nicht!?  
    Was habe ich falsch gemacht?
    
    12\. Oct 2013 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5beaa243acd802928fa27f697aa38967?s=75&d=mm&r=g)
    
    [Thomas](http://ff-lichtenberg.de)
    
    Hallo Andre, danke für deine Antwort aber genau das steht ja auch schon oben in den anderen Nachrichten. Ich bin leider nicht der css Held. Nocheinmal meine Frage:  
    ich habe ein neues Textdokument erstellt das checkdevice.js heisst. Dort hab ich den kompletten Script von dir von oben eingefügt.Eingefügt habe ich dann den link zu meiner Mobilen Seite(sieht dann so aus) if(mconfirm == true){  
    window.location.href = ff-lichtenberg.de/index.php/de/?device=xhtml; //  
      
    Die Datei habe ich in die gleiche Ordnerebene wie die "index.php" meiner Hauptinternetseite eingefügt. In meine Hauptseiten index.php habe ich eingefügt (direkt unter sieht dann so aus:  
      
      
    .....  
      
    Aber es geht dann nicht!?  
    Was habe ich falsch gemacht?
    
    12\. Oct 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Thomas,  
        das Skript fügt man so ein:  
        < script type="text/javascript" src="checkdevice.js">  
          
        window.location.href = ff-lichtenberg.de/index.php/de/?device=xhtml;  
          
        Den Teil musst du in "" oder '' einfügen, also  
          
        window.location.href = 'http://ff-lichtenberg.de/index.php/de/?device=xhtml';  
          
        Grüße  
        André
        
        12\. Oct 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5beaa243acd802928fa27f697aa38967?s=75&d=mm&r=g)
    
    [Thomas](http://www.ff-lichtenberg.de)
    
    Hallo Andre,  
    ich habe auch ein Problem.  
    Ich habe vor kurzen für meine Seite "www.ff-lichtenberg.de" das Mobil-Joomla template eingearbeitet. Dies funktioniert soweit auch super. Die Weiterleitung auf dem Iphone funktoniert sofort. Nur würde ich jetzt gern nur vorher immer erst ein Fenster mit der Meldung "Wollen Sie auf die mobile Version weitergeleitet werden?"angezeigt bekommen. Was genau und wo muss ich dies einbinden? Vielen Dank im voraus. Gruß Thomas
    
    11\. Oct 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Thomas,  
          
        du musst einfach nur dieses Script kopieren und in eine Datei mit dem Namen einer Wahl anlegen (name.js) und diese dann einfach in den head-Bereich deiner Seite laden. Das war es auch schon. Danach wird der Benutzer gefragt und weitergeleitet.  
          
        if(mconfirm == true){ window.location.href = mversion; // Hier das Verzeichnis festlegen  
          
        An der Stelle musst du dann dein Verzeichnis oder Pfad festlegen, wo die mobile Seite sich befindet. also ...href = '/mobile/'; beispielsweise.  
          
        Viele Grüße
        
        12\. Oct 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4b1f0f92390895f78d839b5e4903353a?s=75&d=mm&r=g)
    
    Kalle
    
    Hallo!  
    Ein wirklich gutes Script!  
    Herzlichen Dank dafür.  
    Zwei Sachen bekomme ich aber nicht in den Griff:  
    1\. Statt "Wollen Sie..." hätte ich gerne "Möchten Sie..." - mit Umlaut  
    2\. Statt "Abbrechen" hätte ich gerne "Nein"  
    Gibt es dafür eine Lösung?  
    lg Kalle
    
    04\. Sep 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Kalle, schön, dass dir das Script gefällt :)  
          
        1: confirm(unescape('M%F6chten Sie umgeleitet werden?'));  
          
        2: Das geht leider nicht, da jeder Browser die Confirm und Alert-Fenster selber baut. Man kann diese ja auch nicht via CSS umstylen. Das einzige was man machen könnte, wäre zum Beispiel ein kompletter JS Dialog wie bei http://jqueryui.com/dialog/ zu verwenden. Da kann man dann alles so einstellen, wie man es möchte.  
          
        Grüße  
        André
        
        05\. Sep 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1f1dc252c5b4ce1ac3e5158fb25258b0?s=75&d=mm&r=g)
    
    Kathrin
    
    Hi André,  
      
    danke für das Script. Funzt super.  
      
    Der Kunde möchte allerdings jetzt auch noch die Möglichkeit "zurück zur Desctop Version". Dazu muss ich den Cookiewert auf 0 setzten, damit die Weiterleitung auf mobile nicht mehr läuft. Nun ist es so, dass der Cookie ja auf der www.Domain gesetzt ist. Wenn ich bei m.domain den Cookie abfragen möchte, wird er natürlich nicht gefunden.  
    Lange Rede Kurzer Sinn: wie kann ich den Cookie auf beide Domains setzen?
    
    04\. Sep 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Kathrin, dafür müsstest du in der Funktion Cookiesave die Domain mit übergeben.  
          
        document.cookie = name + "=" + value + expires + "; path=/;domain=example.com";  
          
        Grüße  
        André
        
        04\. Sep 2013 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1f1dc252c5b4ce1ac3e5158fb25258b0?s=75&d=mm&r=g)
            
            Kathrin
            
            Mensch, du bist ja fix!  
            Klappt prima. danke!  
              
            Gruß Kathrin
            
            04\. Sep 2013 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/5af7770eeb3454752076bbef97253f88?s=75&d=mm&r=g)
            
            [Erik Poly](http://www.nezrougezuerich.ch)
            
            Hi André  
            Kathrin hat am 4. September gefragt, wie sie das anstellen soll, wenn der Cookie-Wert auf 0 gesetzt werden muss bei einem Back-Link "Zurück zur normalen Ansicht".  
            Wie stelle ich das genau an? Auf meiner mobilen Seite (PHP) steht nur der Link. Wie erreiche ich, dass der Cookiewert auf 0 gesetzt wird?  
            Muss ich eine spezielle Script-Datei für die mobile Seite erstellen? Mit welchem Inhalt?  
            Danke und Gruss aus der CH  
            Erik
            
            01\. Dec 2013 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
                
                [André Knieriem](http://www.andreknieriem.de)
                
                Hi,  
                  
                das geht mit der Cookiesave Funktion. Also einfach hier so aufrufen. CookieSave('NoMobile', '1', '0'); Damit sollte es auf 0 Tage gesetzt sein und sich der Cookie zerstören. Diesen Code solltest du dann ausführen, wenn man den Link zurück zum Desktop klickt.  
                  
                Grüße
                
                02\. Dec 2013 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/bb99fe10bf6fef16fb8521dc47e18c4d?s=75&d=mm&r=g)
    
    Kathrin
    
    Hi André,  
      
    danke für das super Script!  
      
    Hab nur ein kleines Problem:  
    Bei mir wird das Cookie nur berücksichtigt, wenn ich auf "Abbrechen" gehe.  
    Klicke ich auf "Ja, weiterleiten" wird das nicht gespeichert und ich muss jedesmal von der www.domain.de das Cookie bestätigen, um dann auf die m.domani geleitet zu werdeb - ist das so gewollt?
    
    20\. Aug 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Katrin, sry für die verspätete Antwort, ich war im Urlaub ;)  
          
        Also ja das ist bisher im Script so gewollt. Aber das lässt sich relativ leicht ausbauen.  
          
        if(mconfirm == true){  
        // Hier einfach einen anderen Cookie speicher, zb so  
        // CookieSave('IsMobile', '1', '90');  
        window.location.href = mversion;  
        } else{  
        CookieSave('NoMobile', '1', '90');  
        }  
          
        Und dann ganz unten dann:  
          
        if(CookieGet('IsMobile') == 1) {  
        window.location.href = mversion;  
        }  
          
        So sollte es dann gehen! Viel Erfolg dabei ;)
        
        29\. Aug 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b36debf7c70581dad40efc61ae115184?s=75&d=mm&r=g)
    
    Sillo
    
    Erst mal Danke für den tollen Script. Ich muss zugeben ich hab die ganzen Kommentare nur überflogen, aber wie bekomme ich es hin dass dem Besucher sowas angezeigt wird:  
      
    Möchten Sie auf unsere mobile Webseite umgeleitet werden?  
      
    mobile.blablabla.de  
      
    sprich wie bekomm ich in dem fenster ein absatz rein? br un p will er nicht ;)
    
    02\. Aug 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/b36debf7c70581dad40efc61ae115184?s=75&d=mm&r=g)
        
        Sillo
        
        jaja... google ist dein freund... xD  
          
        "/n" wars... xD
        
        02\. Aug 2013 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Genau das wollte ich gerade antworten ;)
        
        02\. Aug 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4891a48d6337331abb6b6c60e86ef084?s=75&d=mm&r=g)
    
    Bernd
    
    Hallo André,  
      
    es klappt wunderbar. Herzlichen Dank und weiter so.  
      
    Gruß  
    Bernd
    
    29\. Jul 2013 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4d94324a4dee8e69fb4a7c1e0bf58e9c?s=75&d=mm&r=g)
    
    [Bernd](http://www.jacobs-hof.de)
    
    Hallo André,  
    Ich habe Dein Script schon seit längerer Zeit im Einsatz. Funktioniert bestens. Nun habe ich mir ein htc Windows Phone zugelegt. Hier funktioniert die Umleitung leider nicht. Woran kann das liegen?  
      
    Gruß  
    Bernd
    
    27\. Jul 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey Bernd, laut http://stackoverflow.com/questions/9926504/how-do-i-check-windows-phone-useragent-with-javascript sollte es gehen, wenn man einfach an diesen langen mobile String noch iemobile und windows phone hinzufügt. Kannst du ja mal ausprobieren und berichten ob es klappt.
        
        27\. Jul 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c30b782529c016bb8feb5654b5f7e2d4?s=75&d=mm&r=g)
    
    Mel
    
    Hallo,  
    bei mir funktioniert alles supper. Ich hab nur mal eine Frage. Kann man das auch einstellen das der Cookie nach einer bestimmten Zeit gelöscht wird? Also das beim nächsten Besuch wieder eine neue Abfrage kommt?  
      
    Grüße  
    Mel
    
    26\. Jun 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Mel, klar kann man das machen. Im Code steht ja:  
          
        CookieSave('NoMobile', '1', '90');  
          
        Die 90 dort ist die Anzahl der Tage, die das Cookie gespeichert wird. Also kannst du es auch auf 0 oder 1 setzen. Dann wird am nächsten Tag oder bei der nächsten Browsersitzung wieder eine Abfrage gestellt.  
          
        Grüße  
        André
        
        02\. Jul 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/74e265f129e22586970fe7b90aa2119b?s=75&d=mm&r=g)
    
    dennis
    
    hallo,  
      
    bei mir am iphone 4s passiert kommt leider keine abfrage :( kannst du mir mal ne mail geben für die domain?  
      
    ist plain html sollte aber dennoch funktionieren oder?
    
    15\. Jun 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Dennis, das sollte auch Plain HTML funktionieren. Eine URL bei der das gerade läuft habe ich nicht mehr da.  
          
        Geh mal auf diese Seite:  
        http://whatsmyuseragent.com/  
          
        Kannst du mir sagen, was oben in der Box steht? Eigentlich sollte er bei iPhone oben irgendwo ein iPhone stehen haben.  
          
        Grüße
        
        19\. Jun 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/aea8b787c6ff95d535b5abbf97cf13bc?s=75&d=mm&r=g)
    
    Flo
    
    Hi André,  
      
    jetzt läuft es, die Pfadzeile war es nicht.  
    Ich bekam dann eine Fehlermeldung wegen der Opera mini abfrage:  
      
    TypeError: 'undefined' is not a function (evaluating 'client.isOperaMini(navigator.userAgent)')  
      
    Ich hab sie gelöscht und ohne die Opera Abfrage läuft das script. Irgendein syntaxproblem, ich werde weiter forschen...  
    warum überhaupt eine extra opera mini abfrage?  
      
    grüße  
    Flo
    
    26\. Apr 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Ah super, dass es geklappt hat ;) Ja der hatte zu den Zeiten noch Probleme gemacht. Das sollte aber mitlerweile auch kein Problem mehr darstellen ;)
        
        05\. May 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/aea8b787c6ff95d535b5abbf97cf13bc?s=75&d=mm&r=g)
    
    Flo
    
    Hi André,  
      
    dein script ist wirklich hervorragend und es funktioniert bei mir auch prima.  
    Ich würde aber gerne auf meine mobile webseite umleiten, ohne dass der user gefragt wird.  
    Könntest du mir helfen, wie der code dann aussehen muss?  
    Ich danke im Voraus  
    Grüße  
    Flo
    
    24\. Apr 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey Flo, das geht sogar viel leichter.  
          
        Dafür nur den unteren Teil:  
          
        function Client() {  
        }  
          
        Client.prototype.mobileClients = \["240x320","blackberry","netfront","nokia","panasonic","portalmmm","sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","philips","pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","iphone","android"\];  
          
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
          
        var client = new Client();  
        if (client.isMobileClient(navigator.userAgent)) {  
        window.location.href = "m.deineseite.de";  
        }  
        else if(client.isOperaMini(navigator.userAgent)){  
        window.location.href = "m.deineseite.de";  
        }  
        }  
          
        Das sollte gehen. Ist ungetestet und nur eben zusammenkopiert. Also du brauchst die Client Funktion. Dann wird geguck ob es ein client ist und gleich umgeleitet
        
        26\. Apr 2013 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/aea8b787c6ff95d535b5abbf97cf13bc?s=75&d=mm&r=g)
            
            Flo
            
            Hi André,  
              
            hab vielen Dank für deine Antwort. DANKE !  
            Es funktioniert leider noch nicht. Der Browser bleibt in der Abfrage irgendwie hängen. Ich bekomme auch eine Source Code Fehlermeldung im html-Editor komischerweise aber in dieser Zeile:  
              
            \-> window.location.href = “/mobile”;  
              
            im vorherigen kompletten script mit cookie ( das ja funktioniert ) ist meine Pfadangabe dieselbe...  
              
            der Block sieht ja so aus:  
              
            var client = new Client();  
            if (client.isMobileClient(navigator.userAgent)){  
            window.location.href = “/mobile”;  
            }  
              
            Das verstehe ich jedoch nicht, denn wo soll der Code denn hier fehlerhaft sein?  
            Ich suche und probiere weiter, vielleicht fällt dir ja noch etwas dazu ein?  
              
            grüße  
            Flo
            
            26\. Apr 2013 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/8da0144a7f5dc983169a8cda58d0c26d?s=75&d=mm&r=g)
    
    Sven
    
    Hi André,  
      
    was muss ich tun wenn ich nun durch den confirm auf eine andere Seite springen will, also kein Unterordner (klappt schon), und trotzdem ein cookie setzen will, damit der User beim nächstenmal automatisch umgeleitet wird?  
      
    Viele Grüße,  
    Sven
    
    11\. Apr 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Sven, genau dasselbe wie sonst auch. Nur muss jetzt ein http://deineurl.de
        
        13\. Apr 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/0a2cb6ba120fc4cce024b3a94f801951?s=75&d=mm&r=g)
    
    [Thomas](http://www.stadtfest-ohz.de)
    
    Hallo Herr Knieriem,  
    was muss als Typ eingegeben werden, wenn eine Umleitung nur für iPad und anderes Tablet PC durchgeführt werden soll? Reicht da "ipad"?  
      
    LG  
    Thomas
    
    03\. Apr 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Thomas,  
          
        wenn du nur iPad schreibst, dann zählt der Code auch ebennur für diese. Um ein Android Tablet abzufangen, würde ich gucken, ob es ein Android Gerät ist und je nach Auflösung dann weiterleiten, also wenn die Auflösung größer als 1000x800 ist oder so. Leider hab ich da nun auch kein direkten Codeschnipsel für.
        
        04\. Apr 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a6ae56093ac4d7fd1e15d925afc6d1bc?s=75&d=mm&r=g)
    
    [Alex](http://www.gerlachpage.de)
    
    He Andre,  
      
    habe den Fehler gefunden ! Habe die Datei "mobile.js" benannt statt "mobil.js" ! Oh je, manchmal wird man schon betriebsblind.  
      
    Danke Dir ! Tolle Arbeit und  
    Hilfe !  
    Bitte weiter so !  
      
    Gruß Alex
    
    11\. Mar 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey Alex, freut mich zu hören ;)
        
        12\. Mar 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a6ae56093ac4d7fd1e15d925afc6d1bc?s=75&d=mm&r=g)
    
    [Alex](http://www.gerlachpage.de)
    
    Hallo,  
    das mit der Weiterleitung auf die mobile Seite war von mir falsch ! :-(. Hatte fälschlicherweise die mobile Seite in den Ordner der normalen Website kopiert ! Mein Fehler !  
    Das mit dem Skripttag wird es wohl sein ! Jetzt muss ich nur noch herausfinden wie ich das Skripttag bei nof12 in die Seite einfüge !  
    Denn das habe ich vergessen !!!  
      
    Ich versuche und melde mich auf jedenfall !  
      
    Danke erstmal für den Tipp !  
      
    Alex
    
    08\. Mar 2013 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a6ae56093ac4d7fd1e15d925afc6d1bc?s=75&d=mm&r=g)
    
    [Alex](http://www.gerlachpage.de)
    
    Hallo Andre,  
      
    habe auch Dein Code kopiert und in die mobile.js kopiert. Der Ordner für die mob. Website ist im Ordner der normalen Seite. Wenn ich jetzt die Website am PC anwähle, bringt er mir die Startseite der mob. Seite. Auch das Skrit für die auswahl geht beim Handy gar nicht ! Habe ich da irgendwas in der Pfadangabe falsch angelegt ?  
    window.location.href = "/mobil" !  
      
    Hast Du eine Idee ???  
      
    Alex
    
    05\. Mar 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Alex. Hast du das Skript in deine normale Seite eingebunden mit einem Skripttag? Du meinst du wirst jetzt von der normalen direkt auf die mobile geleitet? Hört sich alles sehr seltsam an. Kannst du mir sonst nen Link posten?
        
        05\. Mar 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/352541d8276b6fc8e0379791a97395c4?s=75&d=mm&r=g)
    
    Christoph
    
    super Andre...vielen Dank
    
    19\. Feb 2013 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/69ccf517bb46912e6e826ed471fa1509?s=75&d=mm&r=g)
    
    Kai Leonhardt
    
    Hallo, ich danke dir erstmal ;)  
    Also ich brauche mal deine Hilfe, es will einfach nicht funktionieren.  
    Ich habe jetzt alles kopiert und in eine Datei gespeichert und checkDevice.js gespeichert  
    Jetzt habe ich die Datei in einen Unterordner gepackt und dann in der Index Datei die Datei eingebunden  
    Es funktioniert nicht  
    In der Index Datei habe ich nur eine Weiterleitung in einen anderen Unterordner
    
    20\. Dec 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Kai, ich hoffe du bist gut ins neue Jahr gerutscht und hattest schöne Feiertage. Hast du vielleicht einen Link parat, dass ich mir das angucken kann?  
          
        Ansonsten  
        window.location.href = ‘ordner/’; So müsste es dich dann dort hinleiten. Hast du einmal auf Ja geklickt wirst du immer dorthin geleitet, bzw 90 Tage lang. Deswegen kommst du wohl immer in einen Ordner.
        
        02\. Jan 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/283094b3b2422dd65669a779fae470af?s=75&d=mm&r=g)
    
    Simone
    
    Das Script funktioniert auf dem iPod wunderbar! Aber was mache ich bei Table Pcs mit einer viel höheren Auflösung? Freue mich über deine Tipps!  
      
    Gruß Simone
    
    11\. Dec 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Simone. Da Tablets meistens eine Auflösung wie eine Desktop PC haben oder zumindest annähert würde ich in dem Fall ein wenig mit CSS nachhelfen. Also die Desktop Seite da lassen und via MediaQueries und Responsive Webdesign die Seite für Tablets anpassen. Siehe zum Beispiel hier: http://t3n.de/news/mediaqueries-inspiration-381500/  
          
        Eine Möglichkeit Tablets abzufangen und dies im JS Code oben zu ergänzen gibt es sicherlich auch, allerdings kenn ich mich da auch nicht weiter mit aus.  
          
        Grüße  
        André
        
        12\. Dec 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/dde1cea12eed5a25042e2e8eefcb1064?s=75&d=mm&r=g)
    
    Bernd
    
    Hallo André,  
      
    darf ich André sagen? Ich habe dein Script mit Hilfe der Kommentare und der Ergänzung von Babara von der NOF-Schule eingearbeitet. Es funktioniert auf dem iPod wunderbar. Vielen Dank!  
      
    Gruß  
    Bernd
    
    02\. Dec 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f84211efb5d11289e01ccaefdff7d9e9?s=75&d=mm&r=g)
    
    Bernd
    
    Hallo André,  
      
    darf ich André sagen? Habe dein Script eingebunden und mit Hilfe der Kommentare hat es geklappt.  
      
    Vielen Dank!  
    Gruß  
    Bernd
    
    02\. Dec 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Bernd, klar darfst du Andre sagen ;) Freut mich sehr, dass es geklappt hat.
        
        02\. Dec 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/15405c889a2aad30a161cc78b9630a49?s=75&d=mm&r=g)
    
    Christian
    
    na die weiterleitung sollte auf eine WebApp-Seite erfolgen.  
    Die Frames sind so aufgebaut  
    "frameset rows="\*" cols="153,\*" framespacing="0" frameborder="NO" border="0" bordercolor="#666666">  
      
      
      
      
      
      
      
      
    </html"  
      
    Das script hatte ich direkt oben in der ersten Zeile eingefügt. Aber leider ohne erfolg. Es wird nur im Hauptframe geladen. Die Homepage ist www.feuerwehr-bad-duerrenberg.de falls du dir die struktur mal ansehen willst.
    
    22\. Nov 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey, ich verstehe nicht ganz, was das Problem ist :P Du brauchst ne mobile Seite in einer anderen Domain, Orndner. Dort verlinkst du einfach hin. Da sind Framesets auch egal ;)
        
        26\. Nov 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hi Christian, schön dass dir der Code und die Anleitung gefällt. Nun zu deinem Problem. das Script sollte möglichst weit in Head-Bereich packen, da sonst erst die komplette Seite geladen und dann erst umgeleitet wird. Also irgendwo vor  
      
    Was meinst du denn mit Hauptframe und nur da neu geladen?  
      
    Ansonsten geht das glaube ich mit JS so parent.framename.location=URL;  
      
    Also sagste bei framename den namen deines Haupframes und URL ist die Url welche geladen werden soll.  
      
    Also sowas:  
    parent.hauptframe.location='/mobile.html'
    
    22\. Nov 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/15405c889a2aad30a161cc78b9630a49?s=75&d=mm&r=g)
    
    Christian
    
    script src="mobile.js" type="text/javascript"></script
    
    21\. Nov 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/15405c889a2aad30a161cc78b9630a49?s=75&d=mm&r=g)
    
    Christian
    
    Super Erklärung. Ich habe nur noch einige Probleme. Die Einbindung des Scrips habe ich erledigt mit  
      
    Die Abfrage erfolgt auch und alles funktioniert.  
    Nur die Weiterleitung funktioniert nicht so ganz da die mobile Seite nicht komplett neu geladen wird sondern im Hauptframe angezeigt wird.  
    Meine Seite besteht aus mehreren Frames. Den Hauptframe, Navi- und Kopfframe. Welchen Code muss verwenden das er die mobile Seite neu lädt?
    
    21\. Nov 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/15405c889a2aad30a161cc78b9630a49?s=75&d=mm&r=g)
        
        Christian
        
        also ich meinte  
        
        21\. Nov 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hi Peter, ich weiß nicht genau, was du mit Martketing url meinst? Meinst du eine URL die so aussieht? www.domain.de/test/test/die-ist-die-url und die seiten liegen natürlich nicht in dem ordner test? Es müsste eigentlich ein Cookie gespeichert werden für die Domain generell und nicht eine URL. Also müsste der Cookie gesetzt werden und somit die Frage für die nächsten 90 Tage nicht auftauchen. Vielleicht kann ich mir ja mal deine Seite ansehen?  
      
    LG
    
    26\. Oct 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/0ffb3d392ad3738b66227cd3e0e9d16b?s=75&d=mm&r=g)
        
        [PeterH](http://www.webhope.de)
        
        Hall André,  
        Ja so sieht die URL aus. Das CMS gibt mir die Möglichkeit, nach ".de/" einen Namen zu kreieren, wie beispielsweise "test" also "domain.de/test" und bietet mir an, diese auf eine Inhaltsseite, eine Menubutton oder auf eine ext. URL weiter zu leiten. Somit erstelle ich keinen Ordner. Natürlich kannst du dir alles ansehen. oder wir können gern auch telefonieren um die Fragen direkt zu beantworten wenn du magst. Danke Peter
        
        26\. Oct 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/0ffb3d392ad3738b66227cd3e0e9d16b?s=75&d=mm&r=g)
    
    [Peterh](http://www.webhope.de)
    
    Hallo André, ich finde das Tool klasse. bisher habe ich eines genutzt, das nur iphone umleitete, und mir fehlte immer die Option nicht beschränkt zu sein.  
    Ich habe ein Poblem, es eght um die weiterleitung. Ich nutzte ein CMS, das mir sie Möglichkeit gibt eine Martketing url (also kein verzeichnis) zu erstellen, womit ich die "mobilen" htmls erreiche. jetzt stellt mir das Skript immer wieder die Frage "Wollen Sie..." klicke ich auf "ja" kommt wieder die Frage, klicke ich auf nein, leitet er mich auf die Seite auf die ich mobil leiten will. Wenn ich als weiterleitnug "Google " oder zb. meine "WWW.Webhope.de" eintrage, dann läuft es. kannst du mir helfen?
    
    24\. Oct 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
    
    [Helmut](http://waveswebdesign.de)
    
    Hallo Andrè, dank Deiner Vorgaben und Hilfestellungen ist es mir gelungen eine automatische Weiterleitung einzurichten.  
    Die Basisseite: http://waveswebdesign.de aufgerufen mit iPhone werden auf meine mobilfähige Joomla Seite Version weiter geleitet. Der User bekommt die Möglichkeit angezeigt zu wählen zwischen die "normale" Seite anzeigen oder die Mobil Seite anzeigen. Die Einstellung kann man nachvollziehen über den Quelltext der Basisseite und der dort verlinkten Datei "checkdevice.js". In dieser steht Dein angepasster Vorschlag.  
    Vielen Dank für Deine Unterstüzung,  
    Helmut
    
    03\. Oct 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey Helmut, das freut mich sehr!
        
        09\. Oct 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
    
    [Helmut](http://waveswebdesign.de)
    
    Hallo Andrè, ich verwende den http://iphonetester.com/  
    Möglicherweise ist dieser nicht geeignet? Ich versuche mal von einem richtigen Gerät testen zu lassen. Bin mal auf das Egebnis gespannt. Melde mich.  
    Helmut
    
    01\. Oct 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
    
    [Helmut](http://waveswebdesign.de)
    
    Hallo Andrè, ich stehe leider immer noch auf der Leitung :-(  
    Den gezeigten Fehler habe ich berichtigt:  
    ...........  
    function mredirect(){  
    var mconfirm = confirm('Wollen Sie auf die mobile Version weitergeleitet werden?');  
    if(mconfirm == true){  
    window.location.href = ‘http://waveswebdesign.de/m.waveswebdesign.de’; // Hier das Verzeichnis festlegen  
    }else{  
    // Setze Cookie um spaetere Dialoge zu vermeiden  
    CookieSave('iphone', '1', '90'); // Hier den Cookie-Namen ändern  
    }  
    }  
    ...............  
    Aber wenn ich, so wie es verstanden habe, die Datei checkdevice.js in dem Template vor den schließenden header tag () einstelle, kommt der ganze Text im iphonetester.com/  
    Möglicherweise verstehe ich doch einige Vorgaben noch nicht.  
    Helmut
    
    01\. Oct 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hey Helmut, die Datei bindest du so ein: am besten vor das schließende header Tag (). Du hast deine Href ohne '' bzw "" angegeben. Bitte so: window.location.href = 'http://waveswebdesign.de/m.waveswebdesign.de';  
      
    Dann sollte es klappen
    
    01\. Oct 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hey Helmut, ich habe nicht ganz verstanden, was du getan hast. Also du musst in -Teil der Seite dein JS einladen. Danach sollte eine Nachricht auf dem Gerät erscheinen, ob du wechseln willst oder nicht. Hast du dies einmal bestätigt, oder abgelehnt wird ein Cookie angelegt der das Ganze für ich 90 Tage speichert. Wenn du die Meldung also wieder haben möchtest musst du deine Cookie ändern, oder der Funktion Cookie Save eine 0 anstelle einer 90 übermitteln.  
      
    window.location.href = 'http://waveswebdesign.de/m.waveswebdesign.de';  
      
    Sollte bei dir gehen. Nicht die '' oder "" vergessen!
    
    01\. Oct 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
        
        [Helmut](http://waveswebdesign.de)
        
        Hallo Andrè, vielen Dank für die schnelle Antwort. Also in die Datei checkdevice.js habe ich eingebunden:  
        function mredirect(){  
        var mconfirm = confirm('Wollen Sie auf die mobile Version weitergeleitet werden?');  
        if(mconfirm == true){  
        window.location.href = http://waveswebdesign.de/m.waveswebdesign.de; // Hier das Verzeichnis festlegen  
        }else{  
        // Setze Cookie um spaetere Dialoge zu vermeiden  
        CookieSave('iphone', '1', '90'); // Hier den Cookie-Namen ändern  
        }  
        }  
        und in das Template hochgeladen. Ich meine gelesen zu haben diese Datei noch einzubinden? Aber wie und wo binde ich diese ein?  
        Eingebunden in die index.php mit:  
          
        erzeugt Error  
        Gruß Helmut
        
        01\. Oct 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a819b6f0f98dfa2c5d60d4f49fabbe1c?s=75&d=mm&r=g)
    
    [Helmut](http://waveswebdesign.de)
    
    Hallo, ich versuche auch eine Weiterleitung von meiner Seite http://waveswebdesign.de  
    auf:  
    http://waveswebdesign.de/m.waveswebdesign.de  
    oder alternativ auf:  
    http://waveswebdesign.de/Joomla-2.5-Core  
    zu installieren. Bisher beides leider erfolglos.  
    Wenn ich die angepasste Datei checkdvise.js (hochgeladen in den Template Ordner) einbinde in die  
    index.php mit wird nicht mehr angezeigt. Was mache ich falsch ? Vielen Dank für verständliche Tipps.  
    Helmut
    
    01\. Oct 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/66e166e2004e06aaa2988156af504180?s=75&d=mm&r=g)
    
    [Klaus Tröger](http://phoenix-naturkost.de)
    
    Hallo Herr Knieriem!  
    Ja, vielen Dank auch von mir. Ich konnte relativ schnell ein einfaches mobiles Layout erstellen, das dank Ihrer Hilfe jetzt dem Benutzer die Wahl lässt, welche Version er sehen will. Selbst habe ich mich schon oft geärgert, mit dem Tablet auf eine völlig ungeeignete Mobil-Seite umgeleitet zu werden, wo doch die Standardseite auf dem Tablet um Längen besser bedienbar war und auch besser aussah.  
      
    Freundliche Grüße Klaus Tröger
    
    23\. Aug 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Herr Tröger,  
          
        schön, dass ich Ihnen mit dem Script helfen konnte. Falls es noch Fragen gibt, dann fragen Sie ;)
        
        24\. Aug 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/6d312c6bdd4febff7d22a51f76c433dc?s=75&d=mm&r=g)
    
    tty
    
    Vielen Dank, klappt super.  
    für die WP7 Phones sollte der string Client.prototype.mobileClients = \["240x320","windows phone"... aber erweitert werden.  
      
    wie müsste der CookieSave aussehen, wenn es nur ein Session Cookie werden soll ??  
      
    Thanx tty
    
    25\. Jun 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey vielen Dank für die Erweiterung :) Wenn das passieren soll, sollteste hier:  
        // Setze Cookie um spaetere Dialoge zu vermeiden  
        CookieSave('NoMobile', '1', '90'); // Hier den Cookie-Namen ändern den 2ten Wert auf 0 setzen. Dann gilt es nur so lange bis der Browser geschlossen wird.
        
        26\. Jun 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/522135279acf3ac014535fc1eb52cb23?s=75&d=mm&r=g)
    
    [Wilfried Streiner](http://www.toasteria.at)
    
    SUPER Danke, hat alles perfekt geklappt!
    
    20\. Jun 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Das freut mich ;)
        
        21\. Jun 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3fa7fa9a3cc62d2d7844da4dd5eb1553?s=75&d=mm&r=g)
    
    Stevie
    
    Moin,  
    funzt leider überhaupt nicht.  
      
    Gruss
    
    15\. May 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Was funktioniert denn nicht? Also es funzt auf jeden Fall und auch bei Allen. Vielleicht ist einfach iwo ausversehen was falsch eingebunden.
        
        15\. May 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ba7d8bffa4afcb1a3cd6e773ffb2e859?s=75&d=mm&r=g)
    
    Doni
    
    Hey :)  
      
    Kann ich dich um Hilfe bitten? Bei mir funktioniert gar nichts.. Ich habe die .js erstellt (mobile.js), deinen code reinkopiert und die zieladresse editiert.. dann auf meiner index seite die datei mit aufgerufen.. das ganze aud meinen ftp geschoben.. nichts.. mit android und iphone auf meine seite.. es passiert einfach nichts ^^... hast du eine idee, wo ich den fehler mache?..  
      
    Grüsse Don
    
    08\. May 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Klar, sag mir deine Url und wir gucken mal.
        
        08\. May 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/954559fc57c0838570912f81c5d8f1a1?s=75&d=mm&r=g)
    
    [Ben](http://www.taxi.eu)
    
    Hallo Herr Knieriem,  
      
    Danke sehr. Funktioniert super!
    
    30\. Apr 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2706e2240a024b5c13cf7ee880828402?s=75&d=mm&r=g)
    
    Steffen
    
    Hallo,  
      
    herzlichen Dank! Funktioniert einwandfrei.  
      
    Gruß  
    Steffen
    
    19\. Apr 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a971a7bebf03ff456c65447f135a03a6?s=75&d=mm&r=g)
    
    Daniel
    
    Hey ;)  
      
    Bei mir funktioniert es nur teilweise.  
    Wenn ich auf den Button okay klicke, dann werde ich trotzdem auf die normale Webseite geleitet.  
      
    Woran liegt das? Dateipfad stimmt.
    
    12\. Mar 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/246037b90f8cf5e21a0203256bc1a0f3?s=75&d=mm&r=g)
    
    Finn
    
    Mag vielleicht eine blöde Frage sien, aber:  
    Wie muss ich die Datei nennen und wohin muss ich sie auf meinem FTP Server speichern, damit es bei Wordpress funktioniert?  
      
    Danke!
    
    11\. Jan 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Du nennst die Datei wie du willst, zum Beispiel: checkdevice.js Diese legst du in das Verzeichnis deines Templates. Also wp-content/themes/deintemplate  
          
        Danach die Datei einbinden in den header deiner Seite. Meist header.php.  
        Dort dann  
          
        Das sollte alles sein;)  
          
        Sry für die späte Antwort, bekomme so viel Spam, dass die richtigen Kommentar oftmals untergehen...
        
        01\. Mar 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/0ac7d1ab127ab447a07aacd2526068c4?s=75&d=mm&r=g)
    
    Lilo3
    
    Hallo,  
    ich habe gerade den code als mobil.js gespeichert und in mein Verzeichnis assets kopiert und anschließend die Seite mit dem Emulator "IPhony" getestet. Pfad hab ich auch geändert, aber den Cookie Namen nicht. Da ich nicht weiss welchen Namen ich verwenden soll.  
      
    Leider tut sich da nix, an was kann das liegen?
    
    04\. Jan 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Lilo3  
        ich meine, dass der Emulator NICHT den User Agent des iPhones mitsendet und somit als Firefox oder soetwas erkannt wird und das Script deshalb nicht eingreift. Wenn du Firefox benutzt, kann ich dir noch den User Agent Switcher als Addon empfehlen. Dort kannste einfach iPhone auswählen und du siehst, was passiert wenn man als iPhone auf deine Seite kommt.
        
        04\. Jan 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/2df71d47196c7b027ed4df437a9cc011?s=75&d=mm&r=g)
    
    [Ben](http://www.taxi.eu)
    
    Sehr geehrter Herr André Knieriem,  
      
    vielen Dank für diesen Beitrag, das war sehr hilfreich und funktioniert super! Haben Sie (oder jemand anderes) eine Idee bzw. einen Link zu einer Seite in der steht, wie man das Script erfolgreich für Android Smartphones erweitern kann?  
      
    LG Ben
    
    27\. Dec 2011 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Ben,  
          
        Frohes Neues erst einmal ;)  
          
        Also eigentlich müssten auch Android Smartphone umgeleitet werden. Im Code steht  
          
        Client.prototype.mobileClients = \["240x320","blackberry","netfront","nokia","panasonic","portalmmm","sharp","sie-","sonyericsson","symbian","windows ce","benq","mda","mot-","philips","pocket pc","sagem","samsung","sda","sgh-","vodafone","xda","iphone","android"\];  
          
        und somit auch android und eine Weiterleitung sollte stattfinden. Ich habe leider kein Android Gerät und kann es deshalb nicht testen.
        
        04\. Jan 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/fe87c536a5e63ec9988bc96a70cdb30d?s=75&d=mm&r=g)
    
    [Barbara M. Thaler](http://www.thaler-enterprises.com)
    
    Hi, vielen Dank für die tolle Anleitung. Du schreibst ganz unten: "Wie man am besten Mobile-Seiten erstellt, erkläre ich vielleicht noch einmal später." Hast du dazu schon was geschrieben? Würd mich interessieren? Danke.
    
    17\. Aug 2011 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Barbara, ich habe dazu noch nichts geschrieben, allerdings kann ich dir bestimmt einiges erklären. Entweder man baut alles komplett selbst, oder man auch mobile Frameworks verwenden. Ein wirklich schönes und sehr gutes ist zum Beispiel http://jqtouch.com/. Für weitere Rückfragen stehe ich dir sehr gerne zu Verfügung!
        
        17\. Aug 2011 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hi Leon. Der Fehler sollte nicht kommen. Hast du schon was verändert gehabt?  
      
    Also deine mobile Seite musst du so eintragen:  
      
    window.location.href = "/mobile";  
      
    Das heißt er geht in das Verzeichnis "mobile". Wie ist denn die Domain zur mobilen Seite?  
      
    Ansonsten ca so:  
    window.location.href = "http://www.t-newsletter.ch/";  
      
    Hoffe ich konnte dir weiterhelfen ;)
    
    30\. Jul 2011 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/74e265f129e22586970fe7b90aa2119b?s=75&d=mm&r=g)
        
        dennis
        
        hi andré,  
          
        bei mir kommt leider keine abfrage auf dem iphone 4s, hab den code ab komplett übernommen.  
          
        das ist doch javascript sollte also in stinknormalen html seiten funktionieren oder?  
          
        kannst du mir ne email geben wo ich die domain mal hinschicken kann möchte die hier nicht abrufbar machen?
        
        15\. Jun 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/cda4c24e39961b10354a89077d9382aa?s=75&d=mm&r=g)
    
    [leon](http://www.t-newsletter.ch/)
    
    Bei mir kommt die nachricht: javascript ist beschädigt...!  
      
    was muss ich machen?  
      
    und wo muss ich hier (http://www.t-newsletter.ch/) meine website einsetzten?:  
      
    if(mconfirm == true){  
    window.location.href = mversion; // Hier das Verzeichnis festlegen
    
    30\. Jul 2011 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.