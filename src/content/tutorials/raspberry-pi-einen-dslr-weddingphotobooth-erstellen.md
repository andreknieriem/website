---
title: 'Raspberry Pi: Einen DSLR Wedding/Photobooth erstellen'
date: '2016-09-14T22:00:00.000Z'
slug: raspberry-pi-einen-dslr-weddingphotobooth-erstellen
tags:
  - '912'
  - '913'
  - '547'
  - '914'
  - '915'
  - '916'
  - '917'
  - '918'
  - '422'
  - '62'
description: "Für meine Hochzeit habe ich mit einem Raspberry Pi, einem Tablet und unserer Spiegelreflex-Kamera einen Photobooth gebaut.\r\nMitlerweile ist das Projekt gewachsen, sodass es nun auch für diverse Platformen funktioniert. Unterstützt wird:\r\n \tRaspberry Pi \tWindows PC/Tablet \tUbuntu/Debian/Linux \tmacOS (nicht getestet, aber gphoto läuft dort und ein Unix-Terminal ist ja vorhanden) \r\nWas wird benötigt?\r\n \tRaspberry Pi/Unix/macOS/Windows PC mit \t \t\tWebserver ( \t\t \t\t\tPHP \t\t\tPHP GD für QR-Code/Thumb Generierung \t\t \t\t \t\tGphoto2 \t\tggf WLAN Dongle (siehe Wlan Router) \t \t \tEin Tablet (Egal ob iPad, Android oder Windows Tablet, hauptsache mit Wlan) \tWlan Router (falls der Raspberry kein Wlan hat, damit das Tablet und der Rapsberry kommunizieren können) \tEine Digitale Spiegelreflexkamera mit USB Anschluss (bitte prüft vorher, ob eure Kamera von Gphoto2 s.o. unterstützt wird. Hier die Liste: http://gphoto.org/proj/libgphoto2/support.php) oder eine USB Kamera für euer Gerät. Am besten dann eine pi-Camera \tEtwas Know How in HTML/PHP/CSS \r\nWie ist das Photobooth aufgebaut? \r\n Raspberry Pi/Windows PC/Linux System/macOS Gerät\r\nAuf diesem Gerät läuft ein Webserver, der den Code ausführt und die \"Web-Applikation\" ausführt.\r\nWlan Router\r\nDer Wlan Router ist an den Raspberry angeschlossen und erstellt ein lokales Wlan. Ich habe meins damals Photobooth genannt und es öffentlich gemacht. Dadurch konnte man sich mit Smartphone in das Wlan einloggen und via QR-Code die Bilder herunterladen.\r\nTablet\r\nDas Tablet ist via Wlan mit dem Router, bzw dann mit dem Raspberry verbunden. Über einen Webbrowser in Fullscreen Ansicht kann man auf den Raspberry kommen. (Dafür braucht ihr die IP des Raspberries, https://www.raspberrypi.org/documentation/remote-access/ip-address.md). Dadurch wird die von mir geschriebene App (Webseite) ausgeführt, die auf dem Raspberry Webserver läuft.&nbsp;\r\nSpiegelreflexkamera/Pi-Camera\r\nDie Kamera ist via USB an den Raspberry angeschlossen und empfängt das Auslöse-Signal und schickt dann das gemacht Bild an den Raspberry zurück.\r\nDer Ablauf\r\nAuf dem Touchscreen-Tablet wird der \"Foto Machen\"-Button geklickt. Danach zählt ein Countdown runter, damit man sich fertig machen kann. Sobald der Countdown bei 0 ist, schickt der Raspberry das Signal an die Kamera, dass ein Bild gemacht werden soll. Die Kamera macht direkt ein Bild und schickt es an den Raspberry zurück. Dieser legt das Bild in den \"Images\" Ordner ab, erstellt ein Vorschau-Bild für die Galerie, fügt das Bild der Galerie hinzu und schickt das Bild dann über Wlan zurück an das Tablet, auf dem das Bild dann angezeigt wird. Der Ganze Ablauf dauert je nach Bildgröße, Raspberry Pi Model und Wifi Verbindung 3-10 Sekunden. Ich hatte meine Kamera auf 3MP eingestellt und einen Raspberry Pi 2 und es hat so 4-5 Sekunden gedauert. \r\n Schreibt einfach Kommentare hier, oder macht Issues bei Github&nbsp;auf, falls ihr noch etwas braucht ;)\r\nDie kompletten Anleitungen findet ihr auch im Github-Projekt:\r\nhttps://github.com/andreknieriem/photobooth/wiki\r\n\r\n Mir einen Kaffee spendieren? Einfach auf folgenden Button klicken!\r\nWem das Projekt gefällt und mir gerne mal einen Kaffee ausgeben nöchte, kann dies einfach mit dem Paypal Button tun. Der Name der angezeigt, ist noch der von meinem Vater, also nicht wundern ;)\r\n\r\n"
image: /fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Raspberry

* * *

![](/fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png)

### Kommentare

[Es gibt 1168 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#raspberry](/tag.html?tag=547&cHash=8d50f95db3926da29d185e9761fae9ed)[#photobooth](/tag.html?tag=912&cHash=796eb4d792a861e2bf5cac3ab414f44d)[#weddingbooth](/tag.html?tag=913&cHash=ca9eb918a60da05d00a03b77add0b3ea)[#spiegelreflex](/tag.html?tag=914&cHash=64f8cbf9728e2128012deff3958cb210)[#kamera](/tag.html?tag=915&cHash=ced2b0b909519874d7b8a56b608af1c0)[#dslr](/tag.html?tag=916&cHash=fcc91dfd52dbf0cc74d7dd754a8d1635)[#app](/tag.html?tag=917&cHash=e03571c3dc7e3c417bd7ebc7e3dcb672)[#programm](/tag.html?tag=918&cHash=8678166b5aa21aa8bb86d6cdff5514c4)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Sep 2016

Für meine Hochzeit habe ich mit einem Raspberry Pi, einem Tablet und unserer Spiegelreflex-Kamera einen Photobooth gebaut.

Mitlerweile ist das Projekt gewachsen, sodass es nun auch für diverse Platformen funktioniert. Unterstützt wird:

*   [Raspberry Pi](https://github.com/andreknieriem/photobooth/wiki/Installation-on-Debian)
*   [Windows PC/Tablet](https://github.com/andreknieriem/photobooth/wiki/Installation-on-Windows)
*   [Ubuntu/Debian/Linux](https://github.com/andreknieriem/photobooth/wiki/Installation-on-Debian#installation-on-debian--debian-based-distributions)
*   macOS (nicht getestet, aber gphoto läuft dort und ein Unix-Terminal ist ja vorhanden)

### Was wird benötigt?

*   Raspberry Pi/Unix/macOS/Windows PC mit
    *   Webserver (
        *   PHP
        *   PHP GD für QR-Code/Thumb Generierung
    *   [Gphoto2](https://github.com/gonzalo/gphoto2-updater "Opens internal link in current window")
    *   ggf WLAN Dongle (siehe Wlan Router)
*   Ein Tablet (Egal ob iPad, Android oder Windows Tablet, hauptsache mit Wlan)
*   Wlan Router (falls der Raspberry kein Wlan hat, damit das Tablet und der Rapsberry kommunizieren können)
*   Eine Digitale Spiegelreflexkamera mit USB Anschluss (bitte prüft vorher, ob eure Kamera von Gphoto2 s.o. unterstützt wird. Hier die Liste: [http://gphoto.org/proj/libgphoto2/support.php](http://gphoto.org/proj/libgphoto2/support.php "Opens internal link in current window")) oder eine USB Kamera für euer Gerät. Am besten dann eine pi-Camera
*   Etwas Know How in HTML/PHP/CSS

### Wie ist das Photobooth aufgebaut?

[![](/fileadmin/_processed_/e/9/csm_photobooth-wires_00df3c091f.jpg)](/fileadmin/Daten/Tutorials/photobooth-wires.jpg)

### Wie funktioniert das Ganze? Wie agieren die Komponenten miteinander?

**Raspberry Pi/Windows PC/Linux System/macOS Gerät**

Auf diesem Gerät läuft ein Webserver, der den Code ausführt und die "Web-Applikation" ausführt.

**Wlan Router**

Der Wlan Router ist an den Raspberry angeschlossen und erstellt ein lokales Wlan. Ich habe meins damals Photobooth genannt und es öffentlich gemacht. Dadurch konnte man sich mit Smartphone in das Wlan einloggen und via QR-Code die Bilder herunterladen.

**Tablet**

Das Tablet ist via Wlan mit dem Router, bzw dann mit dem Raspberry verbunden. Über einen Webbrowser in Fullscreen Ansicht kann man auf den Raspberry kommen. (Dafür braucht ihr die IP des Raspberries, [https://www.raspberrypi.org/documentation/remote-access/ip-address.md](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)). Dadurch wird die von mir geschriebene App (Webseite) ausgeführt, die auf dem Raspberry Webserver läuft. 

**Spiegelreflexkamera/Pi-Camera**

Die Kamera ist via USB an den Raspberry angeschlossen und empfängt das Auslöse-Signal und schickt dann das gemacht Bild an den Raspberry zurück.

**Der Ablauf**

Auf dem Touchscreen-Tablet wird der "Foto Machen"-Button geklickt. Danach zählt ein Countdown runter, damit man sich fertig machen kann. Sobald der Countdown bei 0 ist, schickt der Raspberry das Signal an die Kamera, dass ein Bild gemacht werden soll. Die Kamera macht direkt ein Bild und schickt es an den Raspberry zurück. Dieser legt das Bild in den "Images" Ordner ab, erstellt ein Vorschau-Bild für die Galerie, fügt das Bild der Galerie hinzu und schickt das Bild dann über Wlan zurück an das Tablet, auf dem das Bild dann angezeigt wird. Der Ganze Ablauf dauert je nach Bildgröße, Raspberry Pi Model und Wifi Verbindung 3-10 Sekunden. Ich hatte meine Kamera auf 3MP eingestellt und einen Raspberry Pi 2 und es hat so 4-5 Sekunden gedauert.

### Bilder des Photobooth

[![](/fileadmin/_processed_/5/f/csm_20160918_171852_795633ce69.jpg)](/fileadmin/Daten/Bilder/photobooth/20160918_171852.jpg)

[![](/fileadmin/_processed_/b/7/csm_20160918_171956_c33a4e5aad.jpg)](/fileadmin/Daten/Bilder/photobooth/20160918_171956.jpg)

[![](/fileadmin/_processed_/f/5/csm_20160918_171944_aa06944763.jpg)](/fileadmin/Daten/Bilder/photobooth/20160918_171944.jpg)

[![](/fileadmin/_processed_/b/8/csm_20160918_172017_e2d82f5834.jpg)](/fileadmin/Daten/Bilder/photobooth/20160918_172017.jpg)

[![](/fileadmin/_processed_/9/6/csm_photobooth-small_4db28a7239.jpg)](/fileadmin/Daten/Portfolio/photobooth-small.jpg)

[![](/fileadmin/Daten/Bilder/photobooth/IMAG0127.jpg)](/fileadmin/Daten/Bilder/photobooth/IMAG0127.jpg)

[![](/fileadmin/_processed_/1/d/csm_photobooth-1_2ba0c59c52.jpg)](/fileadmin/Daten/Portfolio/photobooth-1.jpg)

Die Startseite des Photobooths. Hier kann man die Galerie erreichen und sich alle Bilder ansehen oder über den Foto aufnehmen Button direkt ein neues Foto schießen

[![](/fileadmin/_processed_/a/7/csm_photobooth-2_9e9317542b.jpg)](/fileadmin/Daten/Portfolio/photobooth-2.jpg)

Die Galerieansicht zeigt alle bisherigen Bilder an. Mit einem Klick auf ein Bild wird dieses vergrößert und kann betrachtet werden

### Fragen? Anregungen?

Schreibt einfach Kommentare hier, oder macht Issues bei [Github](https://github.com/andreknieriem/photobooth "Opens internal link in current window") auf, falls ihr noch etwas braucht ;)

Die kompletten Anleitungen findet ihr auch im Github-Projekt:

[https://github.com/andreknieriem/photobooth/wiki](https://github.com/andreknieriem/photobooth/wiki)

### Mir einen Kaffee spendieren? Einfach auf folgenden Button klicken!

Wem das Projekt gefällt und mir gerne mal einen Kaffee ausgeben nöchte, kann dies einfach mit dem Paypal Button tun.

[![](/fileadmin/Daten/paypal.png)](https://www.paypal.me/anrinas)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/fe3742eccfc4ee16b0788d1e510fadc9?s=75&d=mm&r=g)
    
    Viktor
    
    Halo Andre,  
    leider klappt die Installation bei mir nicht, es taucht immer folgender Fehler auf.  
      
    \### Photobooth continued at https://github.com/PhotoboothProject/photobooth  
    \### Please download latest Photobooth installer from https://github.com/PhotoboothProject/photobooth  
    ###  
    \### More information at https://photoboothproject.github.io/  
      
    Könntest du mir da weiterhelfen?  
      
    
    02\. Apr 2024 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/96d2ef6fea0dcdce923ccbfb67cceed7?s=75&d=mm&r=g)
    
    Bene
    
    Hallo Andre,  
    Bei mir funktioniert das irgendwie nicht mit dem Zugreifen über die IP des Pi's.  
    Was mache ich falsch? Bestimmt nur ein dummer Anfänger Fehler
    
    19\. Mar 2023 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e9a34e77b622f279958fa44ae295d295?s=75&d=mm&r=g)
    
    Hubertus
    
    Hallo Andre, danke für dein Super Projekt. Ich bin halt nur zu blöd um meine EOS 450D zum laufen zu kriegen. Ich bekomme Photobooth auf den Pi installiert, aber wo kann ich die Kamera auswählen bzw. konfigurieren. Das wird in deiner Anleitung irgendwie nicht beschrieben. Kannst du mir bitte Helfen? Ich will die Fotobox auf unsere Hochzeit verwenden. Danke dir im voraus
    
    02\. Mar 2023 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/7e3000ec2e16f822ee696951bbbf8c3f?s=75&d=mm&r=g)
        
        [Andi](https://photoboothproject.github.io/)
        
        Hallo Hubertus,  
        schau gerne in unserer Telegram-Gruppe vorbei, da findet sich immer jemand der/die helfen kann.  
        Im FAQ der Projektseite sind ein paar allgemeine Hinweise und mögliche Fehlerursachen beschrieben: https://photoboothproject.github.io/  
          
        Viele Grüße  
          
        Andi
        
        09\. Mar 2023 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/83985197704156aa283daad5b37b59a2?s=75&d=mm&r=g)
    
    Philipp
    
    Hallo,  
    Installation hat super einfach geklappt, Hardware Button zum auslösen der Kamera habe ich auch installiert bekommen.  
    Ein paar Fragen habe ich aber....  
      
    Kamera ist eine Nikon D5300, besteht die Möglichkeit eine Vorschau zu haben, zum Beispiel das aktuelle Bild als Hintergrund beim Countdown?  
      
    Kann ich einen weiteren Hardware Button zum erzeugen des Qr-Codes an einen GPIO anschließen und wenn ja, wie integriere ich das in der Anwendung / Sketch?  
      
    Die Gäste haben nur die Möglichkeit den Hardware Button auf GPIO 21 zum auslösen zu verwenden, das Display ist ohne Touch deswegen die Hardware Buttons zum auslösen /QR Code erstellen  
      
      
    Danke und Gruß
    
    26\. Dec 2022 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4f38044fbc50c914021520cac4d4e689?s=75&d=mm&r=g)
    
    Fabi
    
    Erstmal Großes Lob für dieses Projekt!!! Ich habe Daheim noch ein Surface mit RT8.1 liegen und würde das gerne als Bedienpanel verwenden. Leider kann das Webinterface nicht im Browser(habe auch schon andere Browser versucht über einen Jailbreak) angezeigt werden. Das Adminpanel funktioniert hingegen. Ist die kompatibilität im neuen Update behoben? Wäre schade wenn das Surface nur noch Elektroschrott wäre.
    
    15\. Dec 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Fabi,  
        hast du schonmal Andis Fork ausprobiert? Dieser wird ständig verbessert und angepasst. Meine Version ist mitlerweile sehr veraltet.  
        https://photoboothproject.github.io/
        
        16\. Dec 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/979230ac12150a5a5cd5c60c3b090154?s=75&d=mm&r=g)
    
    Joe Fuchs
    
    wie kann ich die Dateien (images und thumbs) von der Galerie bzw vom raspi löschen? damit ich bei einem event die Fotos des vorigen Events nicht anzeige. LG Joe
    
    07\. Oct 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/7e3000ec2e16f822ee696951bbbf8c3f?s=75&d=mm&r=g)
        
        [Andi](https://photoboothproject.github.io/)
        
        Über die reset Funktion im Adminpanel.  
        Je nach Photobooth Version gibt es auch verschiedene Einstellungen für den reset, so dass man z.B. seine eigene Konfiguration behalten kann - beim Ändern der Einstellungen nur einmal abspeichern VOR dem reset wenn die Photobooth Version kleiner als v4 ist. In den alten Versionen gilt die gespeicherte Konfiguration!  
          
        In der aktuellen Photobooth Version V4.2 wird die eingestellte Konfiguration erst gespeichert und dann entsprechend der Einstellungen ein reset ausgeführt.  
          
        Viele Grüße  
          
        Andi
        
        23\. Oct 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/841ae577e6893672f3844ecd66751cbb?s=75&d=mm&r=g)
    
    Manuel
    
    Ich frage mich die ganze Zeit, warum die Architektur mit einem WLAN Router ist. Man könnte an dem PI genauso gut ein Touchscreen anschließen und beim booten direkt mit dem browser den lokalen server aufrufen, oder sehe ich das falsch?
    
    06\. Sep 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Manuel, das Projekt ist fast 8 Jahre alt. Ich wollte damals einen Photobooth bauen mit der Hardware, die ich Zuhause liegen hatte. Damals war der Raspberry 2 noch neu. Der hatte kein eigenes Wlan. Und ein Tablet hatte ich. Deswegen habe ich das Ganze so gebaut. Natürlich kannst du auch einfach einen Touchscreen an den Raspberry anstecken. Ebenso brauchst du den Wlan-Router auch nicht mehr, wenn du einen Raspberry 3 oder 4 hast. Die können ihre eigenen Hotspots aufmachen. LG  
        Den neusten Stand kriegst du übrigens bei Andi http://andi34.github.io/photobooth.html
        
        07\. Sep 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/325c6983d8e7db2e32fd70eb33f0bc5d?s=75&d=mm&r=g)
    
    Marcel
    
    Vielen Dank für das super Projekt. Hatte es in kürzester Zeit am laufen und wird unseren Fussballjunioren sicher viel Spass bereiten. Ich habe noch ein zusätzliches API gemacht, damit ich über GPIO ein externes Licht automatisch mit dem Countdown ein und nach der Auslösung wieder ausschalten kann. Funktioniert soweit tipptopp. Das mit dem Buzzer, klappte aber leider noch nicht. Muss ich dann nochmals anschauen. Doch zuvor kommt jetzt noch das Thema mit der Box ;-)
    
    29\. Jul 2022 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/3a399d05de743ee378e5899214e50ad8?s=75&d=mm&r=g)
    
    Eric
    
    Hallo Andi,  
    ich verfolge das Projekt jetzt schon einige Zeit und habe mir meine Photobox vor ein paar Monaten sofort erfolgreich zusammengebaut. (Echt klasse Projekt, lief auf Anhieb !!!).  
      
    Nun habe ich das Keying ausprobieren wollen, allerdings muss meines Wissens ja jedes Bild "gekeyed" werden, nachdem es aufgenommen wurde und manuell das ganze angesetzt ist.  
    Gibt es eine Möglichkeit das Keying direkt auszulösen? Also immer wenn das Foto aufgenommen ist auch das Keying durchzuführen?  
    LG Eric
    
    25\. Jul 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/74acbc0b469e3629fe8330c339508921?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hallo Eric,  
        aktuell geht das nicht. Du kannst aber, je nach Version der Photobooth, über localhost/livechroma.php die Aufnahmen durchführen und da vorab einen Hintergrund auswählen.  
          
        Über unsere Photobooth Gruppe gibt es auch fertige Images mit vorinstallierter Photobooth, schau gerne im Telegram vorbei bei Fragen.  
          
        Viele Grüße  
          
        Andi
        
        12\. Aug 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/0006752b2d52e4f80cc4ff0c007f90bd?s=75&d=mm&r=g)
    
    Ina
    
    Hallo Andi,  
    kurzes Feedback ... tolles Projekt, habe 1h gebraucht läuft alles super... Für Anfänger würde ich das Projekt nicht empfehlen.  
    Ich habe mir mal erlaubt eine zusätzliche PHP Datei in die print.php mit "include" einzubinden. Jetzt kann ich auch verschiedne Collagen erstellen und über den Foto Drucker DS820 wir das Bild in 7sek. gedruckt. LG Ina
    
    01\. Jun 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/bf38694f49ac949e6f08dd057848dd88?s=75&d=mm&r=g)
        
        Huhu
        
        Hallo Ina, könntest du das bitte sharen? :)
        
        07\. Jun 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/377c443f42ffde0ef76eb184227b01d1?s=75&d=mm&r=g)
    
    Chris
    
    Hallo zusammen,  
      
    ich habe folgendes Problem, wenn ich auf "Foto erstellen" klicke, löst meinen Kamera (Eos550D) aus aber auf dem Bildschirm, wird dann eine Fehlermeldung angezeigt "Es ist ein Fehler aufgetreten...."  
      
    Kann mir jemand helfen ?  
      
    Gruß Chris
    
    04\. May 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Chris!  
        Die Gründe können ganz unterschiedlich sein. Manche Kameras benötigen zwingend eine SD Karte eingelegt, andere dürfen das W-LAN der Kamera nicht anhaben, andere wiederum laufen nur in gewissen Modi, andere nur ohne zusätzliche Raw Aufnahme.  
          
        Am besten versuchst du über den Terminal als www-data Nutzer ein Bild aufzunehmen um der Ursache genauer auf den Zahn zu fühlen:  
          
        sudo -u www-data gphoto2 --capture-image  
          
        Gerne kannst du auch in unserer Photobooth Telegram-Gruppe (klick auf meinen Namen hier) vorbeischauen, da lässt sich einfacher helfen im Vergleich zur Kommentarfunktion.  
          
        Viele Grüße
        
        09\. May 2022 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/7616762464153d9efe48c5c42d477610?s=75&d=mm&r=g)
            
            Basti
            
            Ich arbeite mit einer 1100D sowie einer 600D.  
            Der Fehler kommt bei mir vor allem dann, wenn das Objektiv entweder eingeklemmt ist (und sich somit nicht bewegen kann), oder wenn der "Sucher" keinen Fokus bestimmen kann (bspw. bei einem weißen Hintergrund ohne Objekt oder, wenn sich zu hastig vor der Kamera bewegt wird)
            
            13\. May 2022 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/b01f1a8af1761cc90ad7aa8f7a04895e?s=75&d=mm&r=g)
    
    Thomas Böggering
    
    Hallo  
    Bei mir funktioniert alles wunderbar. Vielen Dank. Eine Frage habe ich aber. Kann man den Dateinamen irgendwie beeinflussen? Das die Bilder evtl direkt als Bild001.jpg oder so abgelegt werden?
    
    25\. Apr 2022 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ee36fad1e5cb4884ec01d9c212993f19?s=75&d=mm&r=g)
    
    Willy
    
    Hey Andre,  
    vielen dank! Bei mir funktionier alles wunderbar. Ich hab deine App auf einem Raspi 4 und einem alten Laptop (Debian 11) installiert. Gibt es aber eine Möglichkeit den Speicherort der Bilder zu ändern, z.B. direkt auf ein USB Stick?  
      
    Grüße
    
    12\. Apr 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/8b6baf79bf379bc9e60453c684278ffa?s=75&d=mm&r=g)
        
        Jens
        
        Hey,  
        ich dachte ich antworte hier schnell drauf, weil ich das gerade gemacht hab:  
        Du kannst im Admin Menü den Speicherort wechseln. Dazu kannst du den USB-Stick in Linux z.B. unter /var/www/html/stick mounten und den Ort in den Einstellungen wählen.  
        Bei mir hat das zum Problem geführt, dass Bilder über den QR-Code nicht mehr gezogen werden konnten. Dazu musste ich dann im Code einer .php-Datei den Pfad ändern und dann ging es (dummerweise weiß ich gerade nicht mehr welche, aber das sollte man einfach herausfinden können).  
          
        Grüße  
        Jens
        
        13\. Oct 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/290275626d8e9aa0fe4cc594f90891f9?s=75&d=mm&r=g)
    
    Andreas
    
    Hallo André,  
    tolles Projekt!  
      
    Sag mal, gibt es die Möglichkeit http://localhost/gallery.php durch eine andere Domain zu ersetzen?  
      
    Zum Beispiel: photo.booth
    
    10\. Feb 2022 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a32b78bceda695857b2ae762c96ee0bd?s=75&d=mm&r=g)
    
    Niklas Scheffler
    
    Hallo Andre,  
    ich habe eine Funktastatur zerpflückt und in meinen Buzzer gebaut, der mir demnach direkt eine Enter-Taste an den Raspi gibt. Funktioniert auch soweit.  
    Da mein Buzzer jedoch nicht über dein Button.py Script läuft habe ich keine Möglichkeit gefunden ein Delay einzufügen, sodass der Buzzer nicht mehrfach die takepic.php aufruft und das System dadurch durcheinander bringt.  
    Kannst du mir da helfen?  
    Liebe Grüße
    
    17\. Jan 2022 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hallo Niklas,  
        ich habe das in meinem Fork vor geraumer Zeit schon eingearbeitet, läuft bereits ein Aufnahme-Prozess wird das neu-triggern ignoriert. Schau doch gerne mal in unserer Telegram-Gruppe vorbei (Klick auf meinen Namen hier).  
          
        Viele Grüße  
          
        Andi
        
        14\. Mar 2022 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/01ffbe5aec42c417a2ef276b49587536?s=75&d=mm&r=g)
    
    Kai
    
    Hallo, super Idee das Projekt. Ich habe einen Pi 4 und stoße bei der Installation von yarn auf Fehler. Da bereits python3 installiert ist und aber auf python 2 verwiesen wird, knallt es. Da ich mit dem Pi noch nicht so vertraut bin, kann ich auch nicht sagen, ob es das einzige Problem ist.  
    Kann jemand helfen?  
    Viele Grüße,  
    Kai
    
    15\. Nov 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Kai!  
        Das liegt vermutlich an gulp-sass welches node-sass nutzt. Auf Raspberry Pi OS bullseye braucht es eine neuere Version und ein weiteres kleines Update um sass zu nutzen anstelle von node-sass.  
          
        Mit Pi OS auf Buster Basis solltest du da keine Probleme haben.  
        Die Änderungen würden jedoch Probleme auf Buster machen, da hier die Node.js Version zu alt ist.  
          
        Ggf schau auf Telegram in unserer Photobooth Gruppe vorbei.  
          
        Grüße  
          
        Andi
        
        17\. Nov 2021 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Kai!  
        Ich habe meinen Fork der Photobooth angepasst, damit es auch dem neuen Pi OS installierbar ist. Support für das alte Pi OS nur bei Update von Node.js auf v 12.22.x  
          
        Bei Fragen weiteren Fragen auch gerne über unsere Telegram Gruppe (klick auf meinen Namen des Kommentars).  
          
        Viele Grüße  
          
        Andi
        
        25\. Nov 2021 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/af534e8d47c0e21e8d83e276d5eaf454?s=75&d=mm&r=g)
    
    Marc
    
    Hallo funktioniert super. Wollte nur fragen ob man die zeit verkürzen kann zwischen foto schiessen und zum home menu zurück kehren. Dass könnte bei mir schneller gehen. Oder sogar nach dem foto aufnehmen direkt zum home menu um ein neues aufzunehmen.  
    Danke im voraus
    
    05\. Nov 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f7266d97b672371e46043e0d366465f8?s=75&d=mm&r=g)
    
    Chris
    
    Hallo, erstmal vielen dank für die zur Verfügung stellen. Das ist ein echt cooles Projekt. So und nun zu meinem Problemchen. Ich wollte die PhotoBooth mit meiner Canon 7D betreiben. Jetzt ist es leider so dass sie 6-7 Bilder macht und dann kommt eine Fehlermeldung, ich muss dann die Kamera aus und wieder einschalten was auf nem Event ziemlich nervig ist, Mit der 600D geht es, die kann ich aber nicht benutzen da sie auf astro umgebaut ist und meine 5Dmk4 will ich dafür nicht benutzen ? also wenn mir jemand helfen kann mit dem 7D Problem wäre ich echt dankbar ?
    
    10\. Oct 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Chris!  
        "(...) dann kommt eine Fehlermeldung (...)": Was sagt denn die Fehlermeldung genau? Meist gibt es ja mehr als nur eine Fehlermeldung bei so einem Gerät.  
          
        Hast du gphoto2 mal auf die aktuelle Version upgedated (gonzalo gphoto2-updater)? Die offiziellen Pakete im OS hängen meist etwas hinterher. Du kannst dich auch gerne über unsere Telegram Gruppe melden, falls du Fragen hast oder das Problem nicht lösen kannst.  
          
        Beste Grüße  
          
        Andi
        
        11\. Oct 2021 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/f7266d97b672371e46043e0d366465f8?s=75&d=mm&r=g)
            
            Chris
            
            Hey Andi, danke für die Antwort.  
            Also die Fehlermeldung sagt „ gphoto returned with an error code“ also sagt jetzt nicht so viel aus.  
            Also ich meine, ich habe 2.5.27 drauf. Das Problem kommt auch nur bei der Canon 7D  
              
            Ich glaube ich hatte auch Probleme mit Apache, ich glaube der Service konnte nicht starten und mit dem yarn und Build war auch irgendwas wegen json? Irgendwie sowas? ? aber wie gesagt mit der 600D und mit der 5Dmk4 funktioniert’s nur die eine kann ich nicht benutzen und die andere will ich nicht benutzen dafür ?
            
            11\. Oct 2021 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://t.me/PhotoboothGroup)
                
                An Apache und Yarn wird es nicht liegen. gphoto müsste aktuell sein in deiner Version, neuer wäre nur selbst kompiliert.  
                  
                Den Fehler kann man auslesen, die Rückmeldung in der Photobooth ist da recht allgemein gehalten. Meld dich am besten im Telegram, das würde hier sehr den Rahmen der Kommentarfunktion sprengen.  
                t.me/PhotoboothGroup  
                  
                Beste Grüße  
                  
                Andi
                
                11\. Oct 2021 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/bf1fea06c2a06637a214db8f23bb3cda?s=75&d=mm&r=g)
    
    Dennis
    
    Hi,  
    ICh krieg den Hardware button nicht zum laufen. Hab die Schritte wie auf Github beschrieben ausgeführt und ENTER als eingabe gewählt. Mit einer Tastatur funktioniert das problemlos wenn ich enter drücke. Aber wenn Ich GPIO24 auf Masse setze, passiert dann nichts. Jemand eine Idee?
    
    14\. Sep 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f63d18c350d85fdc44a6ee458d434bb0?s=75&d=mm&r=g)
    
    Helge
    
    Erstmal, megacooles Projekt. Läuft auf meinem PI einwandfrei. Kleine Startschwierigkeiten mit der Kamera. Aber nachdem ich den Autofokus ausgeschalten habe gings auch.  
      
    Jetzt habe auch ich ein kleines Problem und dummerweise ist es ein Druckerproblem. Ich habe einen Canon Selphy CP 1300 Drucker. Der wird von CUPS gefunden und druckt auch brav eine Testseite. Wenn ich von Photobooth ausdrucken möchte, passiert nichts. Na ja, es landet scheinbar ein Auftrag bei Cups. Aber wenn ich auf meinen 'normalen' Drucker gehe, dann tut es einwandfrei. Zufällig jemand eine Idee?
    
    04\. Jul 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/22cd1a903680f432c9fd07fae98ebe3f?s=75&d=mm&r=g)
        
        Roland
        
        Bei mir müsste ich mit dem Selphy CP1300 den Druckbefehl anpassen  
        LP -d Canon\_SELPHY\_CP1300 %s  
        Dazu muss www-data in den Gruppen LP und lpadmin sein
        
        23\. Sep 2021 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d72eddc5be1a1eb95ab46cd3de28766c?s=75&d=mm&r=g)
    
    Hartmut
    
    Hab es gefunden !!! einfach weiterlesen :-(  
    Danke Hartmut
    
    01\. Jul 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/d72eddc5be1a1eb95ab46cd3de28766c?s=75&d=mm&r=g)
    
    Hartmut
    
    Eine schönen guten Abend,  
    habe deine Box immer wieder in Betrieb.;-))  
    Da meine Tochter ende des Jahres heiratet habe ich vor das die Gäste über einen Button (Hardware schalter) das Foto auslösen. habe aber noch keine wie ich das in der Software einbaue, ausser es ist schon drin und ich sehe es nicht.  
    Danke Hartmut
    
    01\. Jul 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5071481e7a2a23affeac99f490494e8c?s=75&d=mm&r=g)
    
    Sven
    
    Hi Chris,  
    super Projekt hast du da an den Start gebracht. Ich würde dir gerne nacheifern und die Fotobox nachbauen. Leider erkennt das Programm meine Raspberry Pi Kamera nicht. Die Kamera ist enabled und gibt auch abseits der Seite ein Bild aus. Wenn ich auf "Take Pic" gehe kommt nur "Something went wrong. Please try again. Photo returned with an error code".  
      
    Hast du evtl. eine spontane Hilfestellung?  
      
    Danke dir und viele Grüße  
    Sven
    
    29\. Apr 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Sven!  
          
        Schau Mal hier im FAQ, da ist alles beschrieben:  
        github.com/andreknieriem/photobooth/wiki/FAQ#is-pi-camera-supported  
          
        LG  
          
        Andi
        
        02\. May 2021 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/95475413b09f123fd2998def4c7f4047?s=75&d=mm&r=g)
    
    Chris
    
    Hallo,  
    ich bin leider am verzweifeln, da ich mich zu wenig auskenne und nicht wirklich einen Ansatz finden.  
    Ich folge der anleitung und bekomme bei  
    "yarn build"  
    diese Fehlermeldung  
    Couldn't find a package.json file in "/var/www/html"  
      
    Kann mir jemand helfen, was ich falsch mache, würde mich riesig freuen!?  
      
    Gruß  
    Chris
    
    15\. Feb 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Chris. Hast du das Paket von Github komplett geladen? Dort ist nämlich eine package.json auf unterster Ebene. Oder hast du in var/www/html noch einen Unterordner namens photobooth? Wenn ja dann musst du dort yarn build ausführen.
        
        15\. Feb 2021 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/95475413b09f123fd2998def4c7f4047?s=75&d=mm&r=g)
    
    Chris
    
    Hey,  
    erstmal danke für das Projekt. Ich will mir für meine alte Canon 1100D eine Photobox bauen. Ich habe auf einem mini PC "Raspbian Buster with desktop" installiert und bin der anleitung gefolgt. Wenn ich nun localhos - Photobooth aufrufe, bekomme ich zwar die Seite von der Photobooth, allerdingt komplett ohne Grafiken und nur mit ein wenig text. Weißer Hintergrund und darauf "Photobooth  
    Webinterface by AndrÃ© Rinas  
    Fork me on GitHub  
    None  
    Antique  
    Aqua  
    ...  
    ...  
    ...  
      
    Hat jemand eine Idee, was ich falsch gemacht habe bzw. was ich vergessen habe.  
    Freu mich über jede Anregung.  
    Gruß  
    Chris
    
    14\. Feb 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/dba13d0a17944f4b4db366aa18e7d615?s=75&d=mm&r=g)
    
    Chris
    
    Hallo,  
    vielen Dank für dieses geniale Programm und den guten Support hier auf der Seite.  
    Eigentlich läuft alles super. Nur habe ich ein Problem: Das von mir geänderte Hintergrundbild wird mir im Chrome-Browser unter Windows ohne Probleme angezeigt. Jedoch fehlt es auf Applegeräten (iPhone/iPad). Dort wird lediglich die Hintergrundfarbe angezeigt (die Bedienung ist nicht beeinflusst). Auf einem älteren iPad wird sogar ausschließlich die Hintergrundfarbe beim Öffnen des Webservers angezeigt. Die Oberfläche lässt sich dort also gar nicht bedienen. Hat da jemand einen Rat für mich?  
      
    Vlt hab ich ja irgendetwas übersehen.  
    Aktuell läuft es auf einem Pi 4 B mit Raspberry Pi OS inkl. GUI.  
    Bin für jeden Tipp dankbar.  
    Chris
    
    26\. Jan 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Chris!  
        Gib den Pfad zum Hintergrundbild voll und nicht relativ an., Also z.B. url(/resources/img/bg\_bluegray.jpg)  
          
        Beste Grüße  
          
        Andi
        
        02\. Feb 2021 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/cd9cacc2c8e5400429a5b235f47e5273?s=75&d=mm&r=g)
            
            thomas
            
            Hallo,  
            ich habe das selbe Problem mit einem iPad 3.  
            Ich hab jetzt den vollen Pfad angegeben (url(/resources/img/bg.jpg)) und das Hintergundbild passt jetzt auch, allerdings sehe ich nur das Hintergundbild und keine Schaltflächen.  
              
            Gibt es da eine Lösung?  
              
            Beste Grüße  
            Thomas
            
            13\. Feb 2021 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://t.me/PhotoboothGroup)
                
                Hey Thomas,  
                Du könntest meinen Fork versuchen, schau doch gerne in der Telegram Photobooth Gruppe vorbei: t.me/PhotoboothGroup  
                  
                Viele Grüße  
                  
                Andi
                
                25\. Feb 2021 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/3fedee0ce63188083fcd54f4af7efa8c?s=75&d=mm&r=g)
    
    Sebastian
    
    Hi,  
    tolle Anleitung, habe auch alles gut hinbekommen. Vielleicht hat jemand eine Idee zu meinem Problem. Ich habe in meine Fotobox eine LED Strahler mit eingebaut welcher vor dem auslösen angehen soll und danach wieder ausgehen soll um die Umgebung schön auszuleuchten. Der Strahler ist mit einer modifizierten Steckdose verbunden welche ich über GPIO steuere. In meinem Script funktioniert das ganze gut, das Licht geht an das Foto wird erstellt und das Licht geht aus.  
    Folgendes habe ich in der Software probiert leider ohne Erfolg. Als Befehl habe ich den Pfad zu meinem Script hinterlegt. Ein Foto wird gemacht aber es kommt die Fehlermeldung GPHOTO returned with an error code. Die Relais schalten gar nicht erst. Die Berechtigung sitzen auf www-data. In den Ordner Images / tmp / thumbs werden auch keine Bilder abgelegt.  
    Innerhalb vom Script wird folgendes abgearbeitet, es ist sehr rudimentär.  
    python relais\_an.py  
    gphoto2 --capture-image-and-download --filename=%s  
    python relais\_aus.py  
      
    Eine weitere Idee war innerhalb von der takePic.php das bash script aufzurufen welches mit das Licht an und aus schaltet, aber leider funktioniert das auch nicht.  
    Könnt Ihr helfen?  
    Danke im Voraus.  
    Sebastian
    
    25\. Jan 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/e69aba31cf62728623a80531569f284c?s=75&d=mm&r=g)
        
        [Manu](www.mobiler-dj-manu-augsburg.de)
        
        Ich habe das selbe Problem aus also fast.  
          
        Ich habe alle installiert wie beschrieben und programmiert.  
        Aber sobald ich auf auslösen klicke zählt er den Countdown und dann Bild schwarz und das war’s. In der Galerie zeigt er mir auch nur schwarze Bilder an.  
        Ist eine Nikon P500 Camera  
          
        Kann mir jemand sagen an was das liegt ?  
          
        Liebe Grüße  
          
        Manu
        
        25\. Jan 2021 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            [Andi](https://t.me/PhotoboothGroup)
            
            Hey Manu!  
            Wie schaut's aus, wenn du per Hand im Terminal aufnimmst?  
            gphoto2 --capture-image-and-download --filename="/home/pi/Desktop/test.jpg"  
            (Pfad ggf anpassen)  
            ?  
              
            Viele Grüße  
              
            Andi
            
            02\. Feb 2021 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Sebastian,  
          
        Ich vermute hier passt etwas an den Berechtigungen nicht. Problembehandlung über die Kommentare ist recht unkomfortabel, meld dich am besten Mal über GitHub und poste dabei deine beiden Python Scripte.  
          
        Beste Grüße  
          
        Andi
        
        02\. Feb 2021 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c6123b7175eb6435b88afe8ee7a0aa39?s=75&d=mm&r=g)
    
    Lukas
    
    Hallo,  
      
    vielen Dank für Photobooth!  
      
    Alles funktioniert super! Fast alles... ein kleines Problem hab ich: Meine Kamera Alpha 6000 geht nach einiger Zeit in einen Ruhemodus. Komplett deaktivieren kann ich das nicht.  
    Wenn man dann ein Foto aufnimmt, hängt es bei "Cheeeeeseeee". Erst wenn ich manuell den Auslöser an der Kamera drücke wird das Bild aufgenommen und übertragen.  
    Ist das Problem bekannt? Kann man was dagegen tun?  
      
    Ist es ebenfalls möglich den Text, der unter dem QR-Code gezeigt wird, zu ändern?  
      
    Besten Dank vorab!!  
    Viele Grüße,  
    Lukas
    
    24\. Jan 2021 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Lukas,  
          
        Bezüglich deiner Alpha schaust du am besten bei gphoto, da es kein Problem mit der Photobooth Software an sich ist: github.com/gphoto/gphoto2/issues  
          
        Bezüglich QR: ist möglich? Was willst du genau ändern? Du kannst den kompletten Text in /resources/lang/de.json ändern.  
        Je nach Photobooth Version lässt sich sie WiFi SSID aber auch im Adminpanel eingeben, falls es nur darum geht.  
          
        Beste Grüße  
          
        Andi
        
        02\. Feb 2021 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/5dcf85813be28bb248c66815347455dc?s=75&d=mm&r=g)
            
            Hans
            
            Hallo, an welcher Stelle im Admin Panel kann ich die SSID eingeben? Find eleider nichts. Habe Version 2.1.0...  
              
            Danke.
            
            05\. Aug 2022 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/be4ed21114ffbde214e986d8cbd61d6c?s=75&d=mm&r=g)
    
    Daniel Raab
    
    Hallo,  
      
    zuerst einmal vielen Dank für die Implementierung dieser tollen Software zur Steuerung meiner Fotobox. Soweit funktioniert auch alles einwandfrei, jedoch habe ich folgendes Phänomen entdeckt:  
    Ich nutze als Tablet ein Lenovo YogaTab (Android 6, somit nicht mehr das neuste) und mir ist aufgefallen das beim Drücken der Buttons diese manchmal hängen bzw. erst durch ein festeres Drücken betätigt werden. Dies ist im Prinzip nicht weiter schlimm, jedoch sprachen mich schon einige im Freundeskreis darauf an dass es doch etwas nervig ist.  
      
    Hat einer hier ein ähnliches Problem und weiß zufällig Abhilfe?  
      
    Viele Grüße  
      
    Daniel
    
    26\. Nov 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/fda1472caeff86eb4e4ef31315595752?s=75&d=mm&r=g)
    
    Tobias Behn
    
    Hallo,  
      
    noch eine kleine Frage. Gibt es schon Fortschritte bei der DLSR Preview?  
      
    Viele Grüße,  
    Tobias
    
    26\. Oct 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Tobi,  
          
        Es gibt tatsächlich kleine Fortschritte, schau gerne Mal auf github vorbei: github.com/andi34/photobooth/pull/131  
          
        Beste Grüße  
          
        Andi
        
        15\. Nov 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/fda1472caeff86eb4e4ef31315595752?s=75&d=mm&r=g)
    
    Tobias Behn
    
    Hallo,  
    erstmal vielen Dank für dieses tolle Projekt!  
    Ich habe ein Problem mit der Bildverarbeitung des Programms. Ich habe den Eindruck, das während der Verarbeitung sich die Qualität verschlechtert und die Bilder vor allem dunkler werden. Kann ich das irgendwie abstellen?  
    Zunächst habe ich versucht Bilder mit der Raspberry Pi HQ Camera mit 6mm Weitwinkel aufzunehmen, leider wurden die Bilder nicht besonders toll. Ich habe jetzt auf eine Nikon D300 mit autofokus gewechselt und die Bilder werden auch durch bessere Beleuchtung deutlich besser, allerdings bleibt das Problem bestehen.  
      
    Viele Grüße,  
    Tobias
    
    26\. Oct 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Tobias,  
          
        du musst über github über die "master" branch installieren und im Adminpanel die Jpeg Qualität auf -1 setzen, ansonsten schau Mal im data/tmp, dort liegen die Original Aufnahmen.  
          
        Beste Grüße  
          
        Andi
        
        03\. Nov 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d0bf95efa9f4eb1823e391ec7766fe73?s=75&d=mm&r=g)
    
    Alex
    
    Hallo,  
    meine Canon EOS600D löst nicht über die Photobooth Oberfläche aus. Wenn ich mich allerdings direkt per ssh auf den Raspi einwähle und dort "gphoto2 --capture-image-and-download" eingebe, funktioniert alles. Der selbe Befehl ist auch in der Photobooth Oberfläche eingetragen. Was kann ich da tun? Weiß nicht mehr weiter. Kann ich mir irgendwo den kompletten Code der Fotobooth Software angucken?  
    Viele Grüße  
    Alex
    
    13\. Oct 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Alex!  
        Setz nochmal die Berechtigungen, am gphoto-Befehl brauchst du normalerweise nix ändern im Adminpanel, wichtig ist dort auch den Dateinamen und -pfad mitzugeben (.--filename=%s).  
          
        Der Quellcode ist auf GitHub, einfach dem Link unter "Fragen? Anregungen?" folgen .  
          
        Berechtigungen nochmal setzen, danach einmal neustarten:  
        sudo chown -R www-data:www-data /var/www/  
        sudo gpasswd -a www-data plugdev  
        sudo chmod -x /usr/lib/gvfs/gvfs-gphoto2-volume-monitor  
        reboot  
          
        Ansonsten noch weitere Fehlerquellen:  
        Kamera hat WLAN?  
        Gphoto mag es teilweise nicht, wenn das WLAN an der Kamera eingeschaltet ist.  
          
        Speicherkarte eingelegt?  
        Gphoto kann teilweise nicht auslösen, wenn keine Speicherkarte eingelegt ist.  
          
        Probleme mit dem Autofokus? Ggf. Testweise den Autofokus ausschalten.  
          
        Anderes Aufnahmeprogramm der Kamera getestet? Ggf. wird die Aufnahme nicht in allen Modi unterstützt?  
          
        Beste Grüße  
          
        Andi
        
        15\. Oct 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/94a6718b1e4652e980485c7276ec18e5?s=75&d=mm&r=g)
    
    Florian
    
    Moin, gibt es auch die Möglichkeit das die Bilder direkt auf usb gespeichert werden statt auf der sd karte ?  
      
    Gruß  
    Florian
    
    05\. Oct 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Florian,  
          
        Eine Implementierung ist gerade WIP, welche die Daten auf einen USB Stick kopiert, fehlt noch der Eintrag fürs Admin Panel. Denke in den nächsten 2 Wochen wird es fertig sein.  
        github.com/andi34/photobooth/pull/115  
          
        Beste Grüße  
          
        Andi
        
        05\. Oct 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/94a6718b1e4652e980485c7276ec18e5?s=75&d=mm&r=g)
    
    Florian
    
    Hallo, könnt ihr mir den standert admin nehme vill sagen. Hab den leider vergessen und komme da nicht mehr rein.  
      
    Gruß Florian
    
    03\. Oct 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Standard Name fürs Login?  
        Photo  
          
        Steht in der config/config.inc.php ;)  
          
        Viele Grüße  
          
        Andi
        
        04\. Oct 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ed88739b25febc38666bace2c6c129d7?s=75&d=mm&r=g)
    
    Tom
    
    Hallo! Gibt es die Möglichkeit mit einer Hardware Taste auf die index.php zu wechseln, wenn man sich gerade auf der chromakeying.php befindet? Oder mit einer Timeout funktion?  
    Ich suche schon einige zeit nach einer Lösung leider sind meine Programmierkenntnisse aber sehr beschränkt :D. MfG Tom
    
    27\. Sep 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4b4cff9a6fcf877a0fce3fa269c8b132?s=75&d=mm&r=g)
    
    Peter
    
    Schade. ich immer noch auf der 2.1.0 udates oder Neuinstallation läuft nicht Verbindungsaufbau zu raw.githubusercontent.com (raw.githubusercontent.com)|151.101.112.133|:443 … fehlgeschlagen: Das Netzwerk ist nicht erreichbar. kann mir jemand helfen bitte? ich bezahle auch dafür
    
    26\. Sep 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Peter,  
        schau doch gerne auf Telegram in der Photobooth Gruppe vorbei und wir schauen nach einer Lösung auch ganz ohne Bezahlung: t.me/PhotoboothGroup  
          
        Beste Grüße  
          
        Andi
        
        27\. Sep 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c5b3f350968693b8d73685d670c4d262?s=75&d=mm&r=g)
    
    Peter
    
    Hallo Andi.  
    Ich bin erstmal begeistert von deinem Projekt.  
    Es passt super zum 18en Geburtstag von meinem Sohn.  
    Meine Fragen: Kann man sich vorher im Bildschirm sehen bevor der Button gedrückt wird?  
    Und kann man einen externen Taster an den Raspberry anschließen um dierekt von weiter weg den Auslöser zu betätigen?  
    Lieben Gruß  
    Peter.  
    Wenn ich fertig bin bekommst du eine ganze Kanne Kaffee ;-)
    
    23\. Sep 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Peter,  
        zu deinen Fragen. Ja es geht beides. Der Fork von Andi ist etwas weiter als mein Hauptprojekt, weil ich in letzter Zeit nicht die Zeit finde, an dem Projekt weiterzuarbeiten.  
        Deine Fragen werden aber im Wiki auf Github beantwortet:  
        https://github.com/andi34/photobooth/wiki  
          
        Viel Spaß damit!
        
        24\. Sep 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/4b4cff9a6fcf877a0fce3fa269c8b132?s=75&d=mm&r=g)
            
            Peter
            
            Also bei mir klappt das alles hinten und vorne nicht...  
            Wie ich gesehen habe, habe ich die Version 2,1,0 installiert.  
            Es gibt aber schon die 2.9.0.  
            Leider habe ich keinen blassen Schimmer wie ich die installieren / updaten kann...  
              
            Kannst Du mir unter die Arme greifen?  
              
            LG  
            Peter
            
            24\. Sep 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/4b4cff9a6fcf877a0fce3fa269c8b132?s=75&d=mm&r=g)
                
                Peter
                
                Leider sind die updare server nicht erreichbar
                
                25\. Sep 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/cb95df171427f93e6b8b88dec5167438?s=75&d=mm&r=g)
    
    Patrick
    
    Servus,  
      
    Mega tolles Photobooth bin begeistert hab nur ein Problem ich nutzte zum anzeigen ein ipad da ist der hintergrund nicht ein Foto sondern orange obwohl ich das umgestellt hätte im adminpanel auf ein bild und stattdessen nimmt er am ipad nur die primary color her! Kann man das iwie ändern?
    
    28\. Aug 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Patrick!  
        Versuch Mal den Pfad voll anzugeben und nicht relativ:  
        url(/resources/img/bg\_bluegray.jpg)  
          
        Beste Grüße  
          
        Andi
        
        02\. Sep 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/659085fb2ed9dfa9696fb1c218ae8f72?s=75&d=mm&r=g)
    
    Alex
    
    Erstmal danke für Deine großartige Arbeit!  
    Nutze einen Raspi mit 7Zoll Display...daher würde ich gerne den Countdowntimer/Cheesee vergrößern bzw. evtl. auch diesen Effekt beim Herunterzählen ausschalten. Leider habe ich noch nicht den richtigen Punkt in der style.css gefunden was ich da ändern muss. Hat hier evtl. jemand die Lösung für mich? Dankeschön
    
    24\. Aug 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/659085fb2ed9dfa9696fb1c218ae8f72?s=75&d=mm&r=g)
        
        Alex
        
        habe nun selbst den richtigen Punkt bzw. Lösung für mich gefunden.  
        folgendes habe ich in der /var/www/html/resources/css/style.css geändert:  
        #counter {  
        position: absolute;  
        top: 50%;  
        left: 50%;  
        transform: translate(-50%, -50%);  
        backface-visibility: hidden;  
        font-size: 22em/\*12em\*/;  
        opacity: 0.2; }  
          
        #counter.tick {  
        font-size: 15em/\*1em\*/;  
        opacity: 1;  
        transition: font-size /\*0.75s\*/0.5s, opacity 0.5s/\* 0.75s\*/; }  
          
        .cheese {  
        position: absolute;  
        color: var(--cheese-color);  
        top: 50%;  
        left: 50%;  
        transform: translate(-50%, -50%);  
        backface-visibility: hidden;  
        font-size: 7em;/\*3em\*/ }  
        Damit ist der Countdown und das Cheese auf dem kleinen Display gut zu erkennen  
          
        Da ich die Raspicam v2 um 180° gedreht einbauen musste habe ich noch folgende Sachen in die style.css eingetragen:  
        #video--view {  
        top: 0;  
        left: 0;  
        position: fixed;  
        height: 100%;  
        width: 100%;  
        object-fit: cover;  
        transform: scaleX(-1);/\*neu eingefügt, spiegelt horizontal\*/  
        }  
          
        #video--preview {  
        top: 0;  
        left: 0;  
        position: fixed;  
        height: 100%;  
        width: 100%;  
        object-fit: cover;  
        transform: scaleX(-1);/\*neu eingefügt, spiegelt horizontal\*/}  
        Um das Foto richtig herum zu speichern den Befehl im Admin Panel geändert:  
        raspistill -n -o %s -ISO 300 -hf -rot 180 -q 100 -t 1 -w 1920 -h 1080 | echo Done  
        hier sind noch ISO-Wert und Auflösung (-w 1920 -h 1080) ergeänzt.  
          
        Vielleicht hilft es ja auch jemanden weiter. Habe die Werte übrigens bewusst in der css und nicht in der sass geändert, damit ich immer den original-Zustand herstellen kann.  
        Wäre schön wenn Du evtl. die Rotation auch für Gerätekameras mit ins Admin Panel packen würdest, bisher wird das ja nur für den Stream unterstützt.  
          
        
        28\. Aug 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e48f3c82032e77172062f27175260320?s=75&d=mm&r=g)
    
    Rainer
    
    Hallo,  
    ich habe ein kleines Problem beim Funkauslöser - habe zu Testzwecken mal einen kleinen Bluetooth Funkauslöser von einem Selfie Stick mit dem Raspberry verbunden, der bei jedem Drücker zwischen Volume up und Volume down umschaltet -> also einmal Keycode 114 und dann 115.  
      
    Habe im Adminpanel eingestellt dass bei 114 ein Foto aufgenommen werden soll.  
      
    Jedoch wird leider kein Foto aufgenommen.  
      
    Was kann es da haben?  
      
    Lg Rainer
    
    07\. Aug 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Rainer,  
          
        Ich nutze einen günstigen (~10A€) Presenter ohne Probleme ("CSL - Presenter USB 2,4 GHz Fernbedienung für Präsentationen").  
        Kommt der Keycode am Pi denn an? Im Browser überprüft?  
          
        Beste Grüße  
          
        Andi
        
        08\. Aug 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Achso, ganz vergessen:  
        Wie rufst du die Photobooth auf?  
        Damit es funktioniert musst du am Pi selbst die Photobooth im Browser aufgerufen haben, entweder über localhost oder 127.0.0.1  
          
        Beste Grüße  
          
        Andi
        
        08\. Aug 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e48f3c82032e77172062f27175260320?s=75&d=mm&r=g)
            
            Rainer
            
            Hi!  
              
            Danke für die Tipps!  
            Dachte mir schon dass es daran liegt und habe den BT Auslöser mit dem Android Tablet verbunden (auf dem auch Photobooth aufgerufen wird) und habe zum Auslösen im Admin Panel den Keycode 24 eingestellt (Volume up).  
            Der Keycode kommt am Tablet an aber ausgelöst wird leider nicht.  
              
            Lg
            
            09\. Aug 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://t.me/PhotoboothGroup)
                
                Ok, das sollte aber dann auch funktionieren wenn du den Empfänger am Tablet hast (im ersten Post steht er ist am Pi angeschlossen). Vllt kommt er mit dem "keyup" Event auf Android nicht zurecht.  
                Hast du Mal verschiedene Browser versucht?
                
                10\. Aug 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/e48f3c82032e77172062f27175260320?s=75&d=mm&r=g)
                    
                    Rainer
                    
                    Hallo Andi!  
                      
                    Danke für die Hilfe - es funktioniert jetzt alles so wie es soll.  
                    Hab mir den Logitech R500 Presenter bestellt (weil Bluetooth) und diesen mit dem Android Tablet verbunden.  
                    Laut KeyEvent Display schickt der entweder den KeyCode 21 bzw. 22 an das Tablet - leider löste die Photobooth Site noch immer nicht aus.  
                    Jetzt habe ich in der core.js noch eine kleine Ausgabe hinzugefügt um den richtigen KeyCode rauszufinden ( window.alert("Nachricht " + ev.KeyCode); ) und siehe da - am Tablet kommt der KeyCode 39 (KEYCODE\_K) an.  
                      
                    Im Adminpanel eingestellt und alles läuft so wie es soll!  
                      
                    Vielen Dank nochmal!!!  
                      
                    Lg Rainer
                    
                    13\. Aug 2020 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/ed582856500a4d0081f57e26b2e5f9c0?s=75&d=mm&r=g)
    
    Peter
    
    Hi,  
      
    nachdem ich vor einem halben Jahr die Software mit meinen Komponenten zum Laufen gebracht habe, kam nun der große Augenblick: ein Gehäuse. Da ich einen 7" Touchscreen übrig hatte habe ich mir auch Buttons zugelegt, um die wichtigsten Funktionen altersgerecht auszulösen können statt durch Zielübungen auf dem Touchscreen. Irgendwie kamen dabei 4 Buttons raus. Die Software unterstützt aber aktuell nur 2. Mir schweben die Funktionen Foto, Druck, Home und Gallerie vor. Kommt da demnächst eine Erweiterung bzw. gibt es einen Tipp wie ich die selbst einbauen kann?  
      
    Ciao  
    Peter  
      
    P.S. Dass ich die Software gut finden hatte ich ja vor einem halben Jahr schon auf guthub kundgetan :-).
    
    06\. Aug 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://t.me/PhotoboothGroup)
        
        Hey Peter!  
          
        Meinerseits ist da nichts geplant. Du kannst dir das aber von den bereits implementierten Funktionen abschauen (resources/js/core.js, sowie config/config.inc.php und lib/configsetup.inc.php).  
        Per "git grep photo\_key" solltest du alle Teile im Quellcode finden die interessant sind.  
          
        Ggf. Macht es Sinn das dann über die photoinit.js umzusetzten.  
          
        Beste Grüße  
          
        Andi
        
        07\. Aug 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/dc411f9fdf81d1d2f3e7913c55660045?s=75&d=mm&r=g)
    
    AKB
    
    Hallo,  
      
    wirklich ein Spitzen-Projekt. Basteln auch gerade an einer für unsere Hochzeit. Funktioniert soweit auch alles. Bin aber leider wirklich kein IT-Profi, daher eine kurze Frage: es ist noch ncht sicher, ob es vor Ort Zugang zum Internet gibt. Aber ist dieser überhaupt notwendig? Es wird immer überall nur von WLAN gesprochen, nie davon, dass auch Internet benötigt wird. Läuft die Sache auch ohne Internetzugang?
    
    02\. Aug 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hey, nein Internet wird nicht benötigt.  
        Liebe Grüße André
        
        02\. Aug 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d72eddc5be1a1eb95ab46cd3de28766c?s=75&d=mm&r=g)
    
    Hartmut
    
    Super Software,  
    habe dann dir Andi alles zum laufengebracht!  
    Jetzt würde mir nur noch ein Tip fehlen wie ich deine Updates automatisieren kann.  
    Vielen Dank  
    Hartmut
    
    02\. Aug 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hallo Hartmut!  
          
        Einen integrierten Updater gibt es leider (noch) nicht. Ich habe mir aber schon Gedanken gemacht und muss Mal ausprobieren ob das klappt. Wenn's diesbezüglich was neues gibt werde ich es im Changelog erwähnen.  
          
        Beste Grüße  
          
        Andi
        
        04\. Aug 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d67506ae41ccaa53adf3b00e4a40ac4f?s=75&d=mm&r=g)
    
    Chris
    
    Hallo Zusammen und vielen Dank für die tolle Arbeit. Die Fotobox hat bisher sehr viel Spass gemacht.  
    Seit 2 Tagen erscheint allerdings auf dem "Homescreen" ein breiter, waagerechter Streifen, der sich hinter die Galerieschaltfläche legt und den Schalter zum auslösen nach unten verschiebt. Auf dem Tablet ist er dann sogar gar nicht mehr sichtbar. Vorweg, ich habe die Fork von Andi installiert und bin auf dem neusten Stand/Update.  
      
    Ich habe inzwischen folgendes ausgetestet:  
    1) Ändern von Farbe, Schrift und Hintergrundbild, hat nichts geändert.  
    2) Aktivieren von diversen Schaltflächen (Forklogo etc), hat nichts geändert  
    3) Löschen des CSS Ordners und Update auf die neuste Version, ebenfalls erfolglos  
      
    Hat jemand eine Idee wo der Fehler liegen könnte? Wollte hier mal nachfragen, bevor ich den Pi auf Null setze und eine Neuinstallation versuche.  
      
    Vielen Dank und LG  
    Chris
    
    27\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Chris,  
          
        Meld dich doch bitte über die Issues in meinem Fork, dann schauen wir nach einer Lösung.  
          
        Beste Grüße  
          
        Andi
        
        28\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/293fdc6ea2f43f46ae85dfb017387b95?s=75&d=mm&r=g)
    
    Michael
    
    Hallo,  
    vielen Dank für dieses tolle Projekt. Es ist wirklich UNGLAUBLICH einfach, gerade dank des installer-skriptes, zu starten. Und wenn man sich etwas umschaut merkt man gleich, dass das Projekt gereift ist und solide gebaut.  
    Finde ich klasse!
    
    26\. Jul 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/acd134d42c30bd7fb313b061fab8475d?s=75&d=mm&r=g)
    
    Philip
    
    Hallo Leute,  
    erst einmal Danke für die geile und einfache Software.  
      
    Ich habe die Photobox bereits seit letztem Jahr am laufen. Nun stand sie ca 3 Monate rum und jetzt kann ich kein Foto mehr machen.  
    Countdown zählt runter und dann kommt ein Fehler.  
    "Gphoto returned with an error code"  
      
    Habe nun versucht die Kamera über das Terminal anzusteuern mit  
    gphoto2 --capture-image aber auch da kommt nur ein fehler, mit  
    gphoto2 --camera "Canon EOS 600D" --capture-image funktioniert es.  
      
    Daraufhin habe ich versucht diesen Code in /var/www/html/lib/config.php einzufügen, dann klappts auch wieder mit dem foto machen, jedoch sobald ich was im admin änder kommt wieder eine fehlermeldung "file was not created"  
      
    Ich bin am verzweifeln, hab schon den kompletten raspi neu installiert und alles neu gemacht aber es bleibt derselbe Fehler.  
      
    Ich hoffe irgendwer kann mir helfen.  
      
    Danke
    
    24\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Philip!  
          
        Aktuell.ist es so, das Text mit Anführungszeichen beim laden verloren geht und somit beim erneuten speichern dann auch aus der config verschwunden ist.  
          
        Damit du Text mit Anführungszeichen im Adminpanel richtig laden kannst musst du folgende Änderungen durchführen:  
        github.com/andi34/photobooth/commit/77e4cce88d4443c06045c5dc3472c5673e85c28e  
          
        Beste Grüße  
          
        Andi
        
        25\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/60aad3722ec054b1bf2f086937d541fb?s=75&d=mm&r=g)
    
    Patrick
    
    Hey Andi,  
      
    vielen Dank für deine super Anleitung. Ich habe deine Anleitung befolgt, meine Kamera, die Canon Eos 550D an den raspbi angeschlossen und den Webserver eingerichtet. Wenn ich jetzt auf dem Webserver ein Foto schießen möchte, kommt die Fehlermeldung "Es ist ein Fehler aufgetreten, bitte versuche es erneut! File was not created". Die Kamera hatte auch nicht ausgelöst.  
      
    Wenn ich hingegen in der Kommandozeile" sudo -u www-data gphoto2 --capture-image " eingebe, macht die Kamera ein Foto. Weiß jemand was ich Falsch gemacht habe?  
      
    Danke und lieben Gruß  
      
    Patrick
    
    22\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Ein Fehler mit den Rechten?  
        Versuch Mal sudo chown -R www-data:www-data /var/www/  
          
        Ansonsten über F12 in die Konsole schauen ob der Fehler etwas genauer dort steht.  
          
        Viele Grüße  
          
        Andi
        
        22\. Jul 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/60aad3722ec054b1bf2f086937d541fb?s=75&d=mm&r=g)
            
            Patrick
            
            Hey,  
              
            danke für deine schnelle Antwort. In der Zwischenzeit habe ich mir eine pi cam zugelegt, damit funktioniert es bestens. Meine Eos 550D war aufgrund des großen Objektivs sowieso nicht gut für den Einsatz in der Box geeignet.  
              
            Danke nochmal.
            
            31\. Jul 2020 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/11ac0ebff28119d51226a0cddf375373?s=75&d=mm&r=g)
            
            Dennis
            
            Hi,  
            ich habe das gleiche Problem mit meiner 350D. Über das Terminal kann ich per gphoto2 --capture-image ein Bild machen. Über Photobooth geht es nicht. Er kann die Datei nicht anlegen.  
            Wenn ich im Terminal gphoto2 --capture-image-and-download eingebe, kommt folgender Fehler:  
            \*\*\* Fehler \*\*\*  
            canon\_usb\_set\_file\_attributes: canon\_usb\_dialogue failed  
            Speichere Datei als IMG\_4863.JPG  
            Lösche Datei /DCIM/248CANON/IMG\_4863.JPG auf der Kamera  
              
            Kann mir bitte jemand helfen?  
            Danke  
            Dennis
            
            12\. Aug 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/11ac0ebff28119d51226a0cddf375373?s=75&d=mm&r=g)
                
                Dennis
                
                Hat sich erledigt.  
                Habe im Admin Panel bei dem Befehl vor das "gphoto2....." noch ein sudo gemacht und jetzt geht alles perfekt.  
                  
                Gruss  
                Dennis
                
                13\. Aug 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                    
                    [Andi](https://t.me/PhotoboothGroup)
                    
                    Hey nochmal!  
                    Gut wenn es damit läuft, dann stimmt aber irgendwas mit den Berechtigungen nicht. Falls du auf Photobooth v1.x warst war das Mal benötigt, mit den neuen Installations-Instruktionen für v2.x (siehe Wiki) wird aber kein "sudo" mehr benötigt und es sollte auch aus Gründen der Systemsicherheit vermieden werden dem www-data Nutzer solche Rechte zu geben.  
                      
                    Wenn's dich nicht juckt kannste es aber so laufen lassen, ansonsten einfach das neue Raspberry Pi OS runterladen und installieren, anschließend über den Photobooth Installer die Photobooth neu aufsetzen (z.B. 2. microSD nehmen zum Testen).  
                      
                    Beste Grüße  
                      
                    Andi
                    
                    18\. Aug 2020 [Antworten](#)
                    
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://t.me/PhotoboothGroup)
                
                Hey Dennis,  
                \- Berechtigungen passen am Ordner?  
                sudo chown -R www-data:www-data /var/www/  
                  
                \- Falls die Kamera WLAN hat: ausschalten!  
                  
                \- Speicherkarte eingelegt?  
                  
                \- versucht das capturetarget auf die Speicherkarte zu setzen? Meist ist es die 1.  
                (findest du über folgenden Befehl raus:  
                gphoto2 --get-config capturetarget  
                )  
                  
                Im Adminpanel dann folgendes eingeben als gphoto Befehl:  
                gphoto2 --set-config capturetarget=1 --capture-image-and-download --filename=%s  
                  
                Ansonsten, wenn das nichts bringt:  
                sudo chmod -x /usr/lib/gvfs/gvfs-gphoto2-volume-monitor  
                reboot  
                (Wird über das Installationsscript eigentlich bereits erledigt).  
                  
                Oder (manche brauchen es):  
                sudo chmod +x /usr/lib/gvfs/gvfs-gphoto2-volume-monitor  
                reboot  
                  
                Beste Grüße  
                  
                Andi
                
                18\. Aug 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/a37d991072de8e33eff9223e08bf7bd1?s=75&d=mm&r=g)
    
    Chris
    
    Hi zusammen, eine kurze Frage. Verstehe ich das richtig, dass ich noch zusätzlich eine Pi Cam brauche um den live Preview zu aktivieren? Also das es nicht möglich ist über die DSLR Cam? Schonmal vielen Dank!
    
    22\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hallo Chris,  
          
        genau das ist aktuell der Fall. Wenn du die Anzeige der Photobooth über ein Tablet machst geht aber die Vorschau auch über die Kamera des Tablets.  
          
        Viele Grüße  
          
        Andi
        
        22\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d67506ae41ccaa53adf3b00e4a40ac4f?s=75&d=mm&r=g)
    
    Christoph
    
    Hallo liebe Entwickler,  
      
    vielen Dank für euer super Projekt!  
    Soweit klappt alles tadellos und ich habe den Fork von Andi bereits nachinstalliert, und die Seite lädt bei einem Fehler automatisch neu. Eine ergänzende Frage hätte ich noch: gibt es eine Möglichkeit Texte anzupassen?  
      
    Konkret meine ich bspw. die Error-Message "Es ist ein Fehler aufgetreten..." und den Text unter dem QR-Code "Um das Bild auf Ihr Handy herunterzuladen..."  
    Ich finde mich zwar mittels WinSCP ganz gut im Verzeichnis zurecht, finde aber nicht die Datei in der ich es anpassen kann und bin iim Programmieren nicht wirklich fit.  
    Vielen Dank für eure Hilfe.  
      
    Beste Grüße  
    Christoph
    
    21\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Christoph!  
        Schau Mal unter /var/www/html/resources/lang/  
        Dort die entsprechende Sprachdatei mit einem Texteditor bearbeiten, z.B. Notepad++  
          
        Viele Grüße  
          
        Andi
        
        22\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5cad959c5773c3d755f277a474cad75a?s=75&d=mm&r=g)
    
    Daniel
    
    Hi André,  
    Erstmal großes Lob! Es läuft alles soweit. Nun würde ich gerne einen Hardware Button einbinden der das ganze auslöst. Ich hatte überlegt hier einen Wemos D1 Mini zu nehmen oder ein Esp8266. Leider fehlt mir hier die Erfahrung. Wäre es möglich damit einen Befehl an den raspberry pi zu schicken? Wenn ja wie? Mfg Daniel
    
    11\. Jul 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/86d1ce936f57ffbfcbae181a7bc9a302?s=75&d=mm&r=g)
    
    Thomas
    
    Hallo alle,  
      
    nachdem ich längere Zeit photobooth nicht mehr genutzt habe, habe ich die neuste Version 2.6.0 auf dem aktuellsten Rasperian installiert.  
      
    Folgendes Problem tritt auf: Auf dem PC (Firefox) zählt der Countdown herunter und es wird nach dem Cheeeeeeese! ein Foto erstellt. Versuche ich es mit einem iPad oder iPhone (neustes ios 13.5.1 - Safari), so zählt er nur den Countdown herunter - es kommt aber kein Cheeeeeeese! und es wird auch kein Foto aufgenommen :-(  
      
    Hat da jemand eine Idee/Lösung?  
      
    Ich habe schon Chrome auf ios probiert - keine Änderung ... auch Safari auf dem Macbook verweigert nach dem Countdown.  
      
    iPad ist ein iPad 2019
    
    10\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Thomas!  
        Hast du an deinem MacBook Mal mit F12 in die Konsole geschaut, ob ein Fehler angezeigt wird?  
        Mach gerne im Fork auf GitHub ein Issue auf, dann können wir gemeinsam nach einer Lösung schauen.  
        Ich habe selbst keine Apple Geräte, kann also nicht selbst testen.  
          
        Beste Grüße  
          
        Andi
        
        11\. Jul 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/86d1ce936f57ffbfcbae181a7bc9a302?s=75&d=mm&r=g)
            
            Thomas
            
            Hallo Andi,  
              
            nach weiteren Tests scheint es, als ob das ES6 die Probleme bereitet ... mit ES5 aus Deiner Version 2.2.5 ("ipad2/ipad3") funktioniert es.  
              
            Leider klappt dort dann die Nutzung der Enter-Taste o.ä. nicht ...  
              
            Ich prüfe mal, ob Apache2 oder nginx einen Unterschied macht ...  
              
            
            13\. Jul 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi34.github.io)
                
                Hey Thomas!  
                Melde dich doch gerne über GitHub Mal, da lässt sich einfacher hin und her schreiben bei sowas, dann schauen wir nach einer Lösung für die Probleme.  
                  
                Beste Grüße  
                  
                Andi
                
                15\. Jul 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/dec1ebf0090c927e32a1500d5fc290d2?s=75&d=mm&r=g)
                    
                    Andreas
                    
                    Hallo zusammen,  
                      
                    gibt es mittlerweile eine Lösung für das Problem? Bei mir besteht das selbe Problem wie bei Thomas. Mit sämtlichen Apple Geräten wird der Countdown runter gezählt, aber das Cheese und das Auslösen der Kamera bleibt aus.  
                      
                    Zudem bekomme ich einfach nicht hin, dass mir das Livebild als Background angezeigt wird.  
                      
                    Ich habe eine Pi Cam angeschlossen und in der Config aktiviert. Motion ist installiert, allerdings werde ich nicht schlau daraus was ich für Einstellungen unter /etc/motion/motion.conf vornehmen muss.  
                      
                    Vielleicht kann es mir ja einer für dumme erklären wie ich Step-by-Step vorgehen muss um zum Ziel zu kommen ??‍♂️.  
                      
                    Danke schonmal für eure Hilfe und Bemühungen!  
                      
                    Gruß Andreas
                    
                    17\. Jul 2020 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                        
                        [Andi](https://andi34.github.io)
                        
                        Hey Andreas,  
                          
                        Habe von Thomas leider nichts gehört, hoffe aber den Fehler behoben zu haben. Wenn du via git installiert hast folgendes im Terminal eingeben:  
                        sudo -u www-data -s  
                        cd /var/www/html  
                        git fetch origin  
                        git checkout origin/dev  
                        git submodule update --init  
                        yarn install && yarn build  
                        exit  
                          
                        Bezüglich Motion:  
                        datenreise.de/raspberry-pi-ueberwachungskamera-livestream  
                          
                        Beste Grüße  
                          
                        Andi
                        
                        22\. Jul 2020 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/d67506ae41ccaa53adf3b00e4a40ac4f?s=75&d=mm&r=g)
    
    Nicklas
    
    Hallo zusammen,  
      
    zunächst einmal ein ganz dickes Lob an Andre und alle anderen Entwickler, die uns die Software gebaut haben. Vielen Dank.  
      
    Ich unterziehe die Fotobox gerade einem kleinen "Stresstest" bevor sie im kommenden Monat auf der Feier aufgebaut wird.  
    Dabei ist folgendes Problem aufgetaucht:  
    Ich habe bei der Kamera den Autofokus aktiviert. Wenn ich sehr nah an der Kamera stehe findet sie den Fokus nicht. Die Software zeigt dann den Screen "Es ist ein Fehler aufgetreten, File was not created" sowie den Reaload-Button. Der Reaload-Button ist allerdings tot, bzw. er reagiert nicht und die Seite wird nicht neu geladen.  
    Den Autofokus würde ich ungerne ausstellen und habe daher zwei Ansätze:  
    1) Gibt es eine Möglichkeit den Reload-Button zu "reparieren"?  
    2) An welcher Stelle könnte man in der Software einen Countdown/Zähler setzen, damit die Seite nach X Sekunden automatisch neu lädt?  
      
    Vielen Dank für eure Hilfe  
      
    VG  
    Nicklas
    
    08\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Nicklas,  
        Das Problem mit dem Reload Button ist bereits in der master branch von André behoben:  
        Du musst allerdings die Installation via git durchführen.  
          
        Wenn du das gemacht bereits gemacht hast nach Anleitung oder per Installationsscript, dann im Terminal folgendes eingeben:  
        cd /var/www/html  
        sudo -u www-data -s  
        cd /var/www/html  
        git fetch origin  
        git checkout origin/master  
        yarn install && yarn build  
        exit  
          
        Zu 2.)  
        Müsstest du in resources/js/core.js einprogrammieren. Vllt nehme ich das als Feature request / enhancement mit auf.  
          
        Beste Grüße  
          
        Andi
        
        08\. Jul 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Nicklas!  
        github.com/andi34/photobooth/commit/fe384406c8e6a754b65299c0dd70f8a55451ca63  
          
        Damit lässt lädt er nach 5 Sekunden automatische die Seite neu, wenn es bei der Bildaufnahme ein Problem gibt. Lässt sich im Adminpanel auf Wunsch auch deaktivieren und der Reload Button wieder anzeigen.  
          
        Beste Grüße  
          
        Andi
        
        09\. Jul 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d67506ae41ccaa53adf3b00e4a40ac4f?s=75&d=mm&r=g)
            
            Nicklas
            
            Habe deinen Fork nachinstalliert.  
            Klappt wunderbar, vielen Dank :)  
              
            VG  
            Nicklas
            
            21\. Jul 2020 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/add2a90ba86981d43005114dcba310ca?s=75&d=mm&r=g)
    
    Alex
    
    Hallo Leute,  
    vielen Dank für dieses Mega Projekt. Es funktioniert soweit alles gut und ich bin absolut zufrieden mit dem Programm.  
    Ich benutze die Software jetzt schon ne ganze Weile und hatte immer einen zweiten Monitor für die Live Ansicht der DSLR. In meiner neuen Box soll dieser wegfallen.  
    Ich benutze einen Pi3B und ein altes Sony Tablet mit Android 5.1.1. Auf diesem würde ich gerne die Tablet Frontkamera oder gerne auch ne PI Kamera als Vorschau benutzen. Im Adminpanel ist dies auch eingestellt, allerdings zeigt mir mein Tablet auf keinem Weg was an. Ich probiere jetzt seit Stunden rum und bin definitiv am Ende meines Wissens. Hat einer ne Idee was ich hier übersehe?  
    Installiert ist die Aktuellste Version über Git  
      
    Gruß und Danke
    
    05\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Alex!  
        Schau Mal im FAQ im Wiki, dort ist alles beschrieben (Q: Preview by device cam  
        Q: Can I use a live stream as background?)  
          
        Beste Grüße  
          
        Andi
        
        07\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/72326c1fc5a0b0917e67bff1ec8e2a77?s=75&d=mm&r=g)
    
    Thomas
    
    Hallo zusammen,  
    ich war auf der Suche nach einer Photobooth-Software und bin begeistert, wie gut und einfach die Installation sowie die Handhabung bisher funktioniert hat!  
      
    Eine Frage habe ich jedoch bzgl. des externen Buttons. Funktioniert dieser überhaupt, wenn die Website auf einem Tablet dargestellt wird? In diesem Fall wird das "Enter" ja auf dem Raspberry ausgeführt und nicht auf dem Tablet.  
      
    Hat jemand eine Idee, wie ich den Button dennoch so einbinden kann, dass es funktioniert und die Oberfläche auf dem Tablet reagiert?  
      
    VG  
    Thomas
    
    03\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Thomas,  
          
        Das geht nur, wenn du den Buzzer/Button am Tablet anschließen kannst.  
        Ansonsten per Remote desktop über den Pi aufrufen. Für Android gibt es einen VNC Viewer.  
          
        Beste Grüße  
          
        Andi
        
        04\. Jul 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/72326c1fc5a0b0917e67bff1ec8e2a77?s=75&d=mm&r=g)
            
            Thomas
            
            Hi Andi,  
            danke fuer den Tipp mit dem VNC Viewer ... das werde ich mir einmal anschauen.  
            Das bringt vermutlich den Nachteil mit sich, dass dann die Webcam des Tablets nicht mehr genutzt werden kann, oder?  
              
            VG Thomas
            
            06\. Jul 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi34.github.io)
                
                Hey Thomas!  
                  
                Ja, das ist richtig. Aber wenn du eine Raspberry Cam hast kannst du diese nehmen.  
                  
                Das beste ist vermutlich sich einen Display zum Anschluss an dem Pi zu besorgen. Hatte einen 7 Zoll bestellt, welcher aber wegen Kratzern und eingebranntem Bild (vom Vorgänger) Retoure ging. Nicht so schlimm, 7 Zoll wäre für die Booth aus meiner Sicht dann doch auch zu klein gewesen.  
                  
                Beste Grüße  
                  
                Andi
                
                08\. Jul 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/b550c67d35f8db618951ec02cc116891?s=75&d=mm&r=g)
    
    Marc
    
    Grüß Gott liebe Fotobox Gemeinde,  
      
    ich habe folgendes Problem, wenn ich mich in der Galerie befinde und dort ein Foto öffne (Einzelansicht) und nun meinen Fernauslöser betätige, macht die Fotobox zwar im Hintergrund ein Foto jedoch bleibt es in der Galerie-Einzelansicht. Alles passiert im Hintergrund. Wie bekomme ich es hin, dass sich die Einzelansicht schließt, quasi so wie in der Galerieübersicht.  
      
    Gruß Marc
    
    03\. Jul 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Marc!  
          
        Das ist aktuell nicht möglich/nicht berücksichtigt im Code. Ich habe vorhin Mal schnell reingeschaut, aber noch keine passende Lösung. Ich werde mir das die Tage wenn ich etwas mehr Zeit habe genauer anschauen und werde versuchen eine Lösung dafür zu finden.  
          
        Beste Grüße  
          
        Andi
        
        04\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/dec1ebf0090c927e32a1500d5fc290d2?s=75&d=mm&r=g)
    
    Andreas
    
    Hallo Andre,  
      
    danke das du dein Projekt mit uns teilst!  
      
    Ich habe das Problem wenn ich mit:  
    sudo nano /etc/xdg/lxsession/LXDE-pi/autostart  
      
    den Kioskmodus aktivieren will, dass ich den Fehler bekomme das Verzeichnis würde nicht existieren.  
      
    Woran kann das liegen? Stelle ich mich dumm an?  
      
    Zudem wäre es schön, wenn es die Möglichkeit gäbe den Löschen Button nach der Aufnahme zu entfernen, damit die User keine Aufnahmen löschen können.  
      
    Vielen Dank schonmal und ich hoffe du kannst mir helfen.  
      
    Gruß Andreas
    
    29\. Jun 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Andreas!  
          
        Eine Option gibt es schon zum ausblenden des Löschen Buttons, nur nicht in der fertigen ZIP oder stable2 branch.  
          
        Ich gehe davon aus du hast die Installation via git durchgeführt?  
        Wenn ja, dann im Terminal in das Photobooth Installationsverzeichnis wechseln. Standartmäßig:  
        cd /var/www/html  
          
        Nun:  
        git fetch origin  
        git checkout origin/master  
        yarn install && yarn build  
          
        Ansonsten Installation via git und die obige Anleitung befolgen.  
          
        Beste Grüße  
          
        Andi
        
        30\. Jun 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/dec1ebf0090c927e32a1500d5fc290d2?s=75&d=mm&r=g)
            
            Andreas
            
            Hallo Andi,  
              
            danke schonmal für deine Antwort. Habe es gerade versucht wie du beschrieben hast.  
              
            Ich habe die Installation via Git durchgeführt und bin somit direkt deiner Anleitung gefolgt. Der Aufruf des Verzeichnisses hat auch problemlos funktioniert.  
              
            Doch bei: git fetch origin  
            bekomme ich direkt die Fehlermeldung: error: kann '.git/FETCH\_HEAD' nicht öffnen: Keine Berechtigung  
              
            Hast du oder jemand anders einen Rat für mich?  
              
            Beste Grüße  
            Andreas
            
            02\. Jul 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi34.github.io)
                
                Hey Andreas,  
                  
                Sorry habe ich vergessen. Das ganze als www-data Nutzer ausführen.  
                  
                sudo -u www-data -s  
                  
                Dann wie oben beschrieben:  
                cd /var/www/html  
                git fetch origin  
                git checkout origin/master  
                yarn install && yarn build  
                exit  
                  
                Beste Grüße  
                  
                Andi  
                  
                
                04\. Jul 2020 [Antworten](#)
                
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Andreas!  
          
        Du kannst dir auch einfach einen Shortcut auf dem Desktop erstellen. Danke an jarettrude!  
          
        Nenn ihn z.B. "Photobooth.desktop" mit folgendem Inhalt (IP Adresse und Pfad zum favicon ggf anpassen):  
        \[Desktop Entry\]  
        Version=1.0  
        Terminal=false  
        Type=Application  
        Name=Photobooth  
        Exec=chromium-browser --noerrdialogs --start-fullscreen --kiosk http://127.0.0.1 --incognito --disable-translate --no-first-run --fast --fast-start --disable-infobars --touch-events=enabled  
        Icon=/var/www/html/resources/img/favicon-32x32.png  
        StartupNotify=false  
        Terminal=false  
          
          
        
        01\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d72eddc5be1a1eb95ab46cd3de28766c?s=75&d=mm&r=g)
    
    Hartmut Kastl
    
    Hallo Andre,  
    dein Projekt ist Super, es funktioniert bei mir. Meine 1. Frage:  
    Ich würde gerne meine Raspberrykamera so aktivieren das ich das aktuelle Bild immer auf dem Monitor habe und erst beim auslösen über Handy das Bild auf dem Monitor erscheint. Geht das überhaupt.  
    2 Frage: wo liegt den, nach Installation der Programmcode. Habe mal vor Jahren ein wenig Programmiert.  
    Grüße  
    Hartmut
    
    23\. Jun 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo Hertmut,  
        im Branch von Andi34 gibt es was neues. da wird dann das Raspi-Cam Bild als Fullscreen Background verwendet. Configurieren kannst du alles über das Admin Panel.  
          
        Den Programmcode findest du unter /var/www/html dort liegt die Photobooth Seiten.  
          
        Gruß  
        Steffen
        
        29\. Jun 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d72eddc5be1a1eb95ab46cd3de28766c?s=75&d=mm&r=g)
            
            hartmut
            
            Danke
            
            04\. Jul 2020 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/64c0b8c8b3399a497a935b9e33751cbd?s=75&d=mm&r=g)
    
    Miha Zlatarek
    
    Hallo Andre,  
      
    ielen Dank für das coole Projekt.  
      
    Ich habe ein Problem mit der Aktualisierung auf die Version 2.4. Wenn ich im Terminal eintrete:  
    cd /var/www/  
    sudo -u www-data -s  
    cd /var/www/html  
    git fetch origin  
    git checkout origin/master  
    git submodule update --init  
    yarn install  
    yarn build  
    exit  
    Ich bekomme not a git repository error.  
    ich habe Git, Yarn installiert, aber immer noch kein Erfolg und auch, welche Version des Androiden haben Sie auf Ihrem alten Tablett verwendet? ich habe einen Galaxie-Tab 2 mit Android 6 gefunden, aber ich kann während des Countdowns keine Vorschau sehen. Auf meinem s9 sehe ich es in Chrom, aber nicht im fully Kiosk-Browser.  
      
    LG, Miha
    
    17\. Jun 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hallo Miha,  
        das ganze funktioniert nur:  
        \- wenn die Installation über git gelaufen ist,  
        \- zum anderen muss das richtige Repo als Origin hinterlegt sein  
          
        Am besten setzt du das ganze einmal ein auf oder folgst der Anleitung im Wiki für die manuelle Installation.  
          
        Beste Grüße  
          
        Andi
        
        18\. Jun 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/035606b2262acfc7306a6f64f939c1a5?s=75&d=mm&r=g)
    
    Ulf
    
    Hallo,  
    Super projekt.  
    ich möchte gerne, dass die Photo booth über die linke maustaste auslöst.  
    Wie kann ich es realisieren?  
    über die Entertaste der Funktastatur fünktioniert es.  
    später möchte ich gerne einen Funkempfänger anschließen als Buzzer.  
    Gruß Ulf
    
    09\. Jun 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/9dc6dec51fac9c89d4b62b87a0471864?s=75&d=mm&r=g)
        
        Dennis
        
        Gibt es dafür eine Lösung?  
        Kann man den ganzen Bereich des Bildschirms als Auslöser nehmen? Habe nur ein 6€maus verbaut wo ich keine entertaste drauf programmieren kann.  
        Liebe Grüße
        
        25\. Jul 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a32b78bceda695857b2ae762c96ee0bd?s=75&d=mm&r=g)
    
    Niklas
    
    Hallo zusammen,  
    ich habe folgendes Problem:  
    Ich löse bei mir das Bild mit einem Buzzer über die Enter-Taste aus.  
    Wenn nun der Countdown runterzählt und ich erneut den Buzzer betätige, beginnt ein zweiter Countdown und es erscheint ein schwarzes Bild.  
    Schöner wäre es wenn eine Zeit abläuft bis ich den Buzzer erneut betätigen kann bzw. der Ablauf abgefragt wird.  
    Wie kann ich das realisieren?  
      
    Gruß  
    Niklas
    
    23\. May 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hallo.Niklas,  
          
        time.sleep(10)  
          
        Im button.py einfach erhöhen auf die gewünschte Sekundenzahl.  
          
        Beste Grüße  
          
        Andi
        
        26\. May 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo Gemeinde,  
    kann mir jemand Hilfe zur GPIO des Raspi geben? Ich möchte per Mikroschalter an meiner neuen Fotobox einen Kopierbefehl kreieren. Das heisst, daß der Kunde einen USB Stick einstecken kann und die Bilder dann auf Knopfdruck auf diesen kopiert werden. Hat jemand so etwas am laufen?  
      
    Gruß
    
    18\. May 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
        
        Dirk
        
        Hallo Leute,  
          
        habe es geschafft zwei Knöpfe über GPIO zu programmieren (juhuuu!).  
        So werden per Knopfdruck die Bilder auf einen USB Stick kopiert und die Box per Knopfdruck heruntergefahren. Falls jemand Interesse hat, stehe ich jederzeit zur Verfügung.
        
        08\. Jun 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d67506ae41ccaa53adf3b00e4a40ac4f?s=75&d=mm&r=g)
            
            Chris
            
            Hallo Dirk,  
            an einem Herunterfahren bevor der Stecker gezogen wird, wäre ich auch sehr interessiert. Wie hast du das hardwareseitig gelöst?
            
            08\. Jul 2020 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
    
    steffen
    
    Hallo,  
      
    ich habe mir auch die neue Raspi Cam gekauft. Vorschau funktioniert nur mit dem Befehl habe ich noch ein Problem. Ich bekomme die Meldung "File was not created".  
      
    Was mache ich falsch?  
      
    Gruß  
    Steffen
    
    14\. May 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo,  
          
        Habe meine Fehler gefunden! Ich musste dem User www-dat Berechtigungen auf Video erteilen mit chmod -a -G www-data video  
          
        Gruß Steffen
        
        15\. May 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Im Adminpanel:  
        "Befehl zum Kamera auslösen":  
        raspistill -n -o %s -q 100 -t 1 | echo Done  
          
        "Erfolgsnachricht fürs Foto":  
        Done
        
        15\. May 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo!  
    Ich habe mal wieder eine Frage an die Entwickler. Ich habe derzeit eine neue Box im Bau. Diese soll mit der neuen Raspi HQ Kamera arbeiten. Grundsätzlich funktioniert alles, außer dass die Qualität der Vorschau und des gemachten Bildes weit hinter der Qualität liegen, die ich mit dem raspistill Befehl bei gleichen Lichtverhältnissen erreiche. Was kann ich tun? Die Vorschau ist nicht so wichtig, aber diese Kamera liefert mit einem guten Objektiv hervorragende Bilder. Selbstverständlich soll eine LED Beleuchtung zusätzlich für Licht sorgen, um auch dunkle Umgebungen zu kompensieren. Über jede Hilfe würde ich mich sehr freuen!  
    Liebe Grüße
    
    08\. May 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
        
        Dirk
        
        Bin dem Wiki gefolgt und nutze folgenden Befehl laut Wiki:  
        raspistill -n -o %s -q 100 -t 1 -sa 55 | echo Done  
        So wird leider kein Bild gespeichert und dementsprechend mit "File was not created" quittiert.  
        Wenn ich selben Befehl im Terminal eingebe erscheint folgende Fehlermeldung:  
        Filename contains % characters, but not %d or %% - sorry, will fail  
        Was mache ich falsch?
        
        08\. May 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
            
            Dirk
            
            Nach etwas Gefummel habe ich den Fehler gefunden. Ich habe etwas missverstanden. Ich habe den Befehl auf alt hergebrachte Weise per Terminal eingefügt. Nun habe ich den Befehl einfach in die Befehlsseite auf der Admin Page eingegeben und siehe da. Es klappt. Mit der neuen Kamera und einem guten Objektiv kann man sich eine DSLR fast sparen. Die Qualität der Bilder ist hervorragend.
            
            08\. May 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/eb6e8d4bf1300a44dd39f20883c1f23f?s=75&d=mm&r=g)
                
                nicolas
                
                welches objektiv verwendest du? und ists kein problem, dass die neue raspi kamera keinen autofokus hat? brauchst du dazu noch externe beleuchtung?
                
                24\. May 2020 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/2e728a748f81114ca76677de584afda5?s=75&d=mm&r=g)
                
                Jan
                
                Hi Dirk,  
                ich überlege auch, mir die neue RaspberryPi Cam 12 MP zu holen mit dem Teleobjektiv. Wichtig wäre für mich auch, dass sich damit folgendes realisieren lässt:  
                \-LivePreview auf dem Startbildschirm  
                \-LivePreview beim Countdoen  
                \-und natürlich letztendlich das Foto machen  
                  
                Kannst du mir hier vielleicht eine Auskunft geben, ob das alles klappen würde?  
                  
                Besten Gruß
                
                14\. Jun 2020 [Antworten](#)
                
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            [Andi](https://andi34.github.io)
            
            Hallo Dirk,  
              
            %s ist der Pfad und Dateiname, das wird aus der Booth übergeben. Den Pfad und Dateinamen müsstest du bei Eingabe über die Konsole also per Hand mit eingeben:  
            raspistill -n -o "~/Desktop/test.jpg" -q 100 -t 1 -sa 55 | echo Done  
              
            Als Lösungsansatz:  
            Für "Erfolgsnachricht fürs Foto" im Adminpanel unbedingt das "Done" eintragen, damit es den Erfolg erkennt.  
              
            Ansonsten versuch Mal ohne -sa 55:  
            raspistill -n -o %s -q 100 -t 1 | echo Done.  
              
            Selbes Problem? Auf Raspbian Buster habe ich damit keine Probleme.  
              
            Um auch das andere Anliegen zu klären:  
            Wenn du aus der Vorschau das Bild aufnimmst (Gerätekamera zur Bildaufnahme verwenden), dann wird sozusagen ein Screenshot erzeugt, daher die schlechtere Qualität.  
              
            Beste Grüße  
              
            Andi
            
            08\. May 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/28658a1a3194482d790fcb8081071a3b?s=75&d=mm&r=g)
                
                Dirk
                
                Danke für Deine Antwort. Aktuell läuft es rund und kann so an den Start gehen.
                
                18\. May 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/5929fdb5b71458d054bc760e55d2ea7c?s=75&d=mm&r=g)
    
    Matthias
    
    Hallo Andre,  
    geiles Projekt und danke für die Veröffentlichung. Ich habe folgende Problematik:  
      
    Ich möchte mit einem Grobhandtaster (Buzzer) erreichen, dass die Webseite sich so präsentiert, als würde ich den Button "Foto erstellen" auf der Webseite betätigen. Den Buzzer verbinde ich dabei direkt mit den GPIO-Pins.  
    Wie genau kann ich das realisieren?
    
    04\. May 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io/photobooth)
        
        Hallo Matthias,  
          
        Schau Mal im Wiki im FAQ, das steht beschrieben wie man einen Hardware-Button verwenden kann.  
          
        Es gibt im Source schon eine button.py welche über den GPIO24 einen "Enter"-Druck simuliert (im Kommentar von Martin vor 3 Jahren geteilt).  
        Im Adminpanel kannst du einen Keycode für die Fotoauslösung definieren (13 für Enter).  
          
        Zu guter Letzt gibt es noch die Option "Verstecke Auslöse-Taste" um auf dem Startbildschirm "Buzzer verwenden, um ein Bild aufzunehmen" angezeigt zu bekommen.  
          
        Beste Grüße  
          
        Andi
        
        04\. May 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7b074af34bdac86146884175ffda60c2?s=75&d=mm&r=g)
    
    Jennifer
    
    Hallo Andre,  
      
    erstmals danke letztens für deine Hilfe.  
    Ich hätte wieder eine Frage: Und zwar möchte ich den Button "Foto erstellen" und weiters auch die Leiste mit QR-Code, Drucken, Löschen etc. ein wenig nach oben verschieben. Wie ändere ich die style.scss Datei? Brauche ich hierfür ein eigenes Programm?  
    (Sorry für meine Linux-Unkenntnisse...)  
      
    Danke!  
      
    LG Jennifer
    
    27\. Apr 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jennifer,  
        mit yarn build wird eine neue CSS aus der Scss erzeugt. https://github.com/andreknieriem/photobooth/wiki/Installation-on-Debian#install-photobooth . Siehe hier der vorletzte Eintrag.
        
        27\. Apr 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/7b074af34bdac86146884175ffda60c2?s=75&d=mm&r=g)
            
            Jennifer
            
            Hallo Andre,  
              
            yarn habe ich gemäß Anleitung von dir installiert. Wie erzeuge ich mit yarn build aus der style.scss eine css Datei? Könntest du mir das etwas genauer erklären?...  
            Ich habe schon herumprobiert, hat aber nichts funktioniert.  
              
            Danke!  
              
            LG Jennifer
            
            27\. Apr 2020 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Jenny,  
        Sobald du mit deinem Putty/Terminal auf dem Raspberry bist und in dem Hauptordner (in dem liegt eine package.json liegt) müsste yarn build die scss direkt nehmen und eine neue css schreiben. Ansonsten kannst "gulp sass" mal machen. Das ist der Befehl, der von yarn build aufgerufen wird. LG
        
        27\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4291960041d356052b483d3e8fbe3b45?s=75&d=mm&r=g)
    
    Jan
    
    Hey Andre,  
    tolles Projekt. Vielen Dank dafür.  
      
    In meiner Box hängt die Kamera gedreht unterm Deckel, da ich unten das Flansch für das Stativ verbaut habe. Um also die Bilder gedreht zu bekommen, habe ich jpegtran als Tool nach installiert und in der config den Auslöse Befehl damit ergänzt. "gphoto2 --capture-image-and-download --filename=%s ; jpegtran -flip vertical -outfile %s %s" um die Variable noch zwei weitere Male benutzen zu können habe ich in API/takepic.php in Zeile 35 noch um die Variable zwei mal erweitern müssen. "$cmd = sprintf($config\['take\_picture'\]\['cmd'\], $filename, $filename, $filename);"  
    Vielleicht hat ja der ein oder andere das Selbe Problem oder man könnte es als Option einfügen.  
      
    Liebe Grüße,  
    Jan
    
    26\. Apr 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Jan,  
        Hiermit kannst du das Bild drehen nach der Aufnahme github.com/andi34/photobooth/commit/c1dc2629104e1e01ef7f2b8e72a40655162239cc  
          
        Beste Grüße  
          
        Andi
        
        27\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/69c253ead5553d7f71aa8b1a34132063?s=75&d=mm&r=g)
    
    Herbert
    
    zur Info: Ich hab dir mal 20€ 'gespendet' .. (ist ja keine Spende .. das ist es allemal wert ;-) ) ..  
      
    nochmals vielen Dank.. und jetzt lass ich dich erstmal in Ruh .
    
    10\. Apr 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/69c253ead5553d7f71aa8b1a34132063?s=75&d=mm&r=g)
    
    Herbert
    
    Aja .. sorry noch was vergessen.. ich bin draufgekommen das sehr wohl auf den Home-BS zurückgeschalten wird .. allerdings erst nach 90 sec. Wo könnte man das runterstellen??  
      
    LG Herbert
    
    10\. Apr 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Herbert, das kann man bisher nur im Code umstellen. Im Order resources/js die core.js. Dort ziemlich weit oben gibt es die: timeToLive = 90000. Das sind 90000 Milisekunden, also 90 sekunden. Die Zahl kannst du anpassen.  
        Grüße André
        
        14\. Apr 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            [Andi](https://andi34.github.io)
            
            Um das ganze via Adminpanel zu justieren:  
            https://github.com/andi34/photobooth/commit/960165434cbbe38a99d450089525da50cfb46bf5  
              
            Beste Grüße  
              
            Andi
            
            15\. Apr 2020 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/bf18358fcce76fc34a18805f491fb613?s=75&d=mm&r=g)
        
        [Michael](-)
        
        Du findest den Timer (TimeToLive) in der "Core.js" (/var/www/html/resources/js).
        
        14\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/69c253ead5553d7f71aa8b1a34132063?s=75&d=mm&r=g)
    
    Herbert
    
    Hallo .. ich nochmal .. mir ist eines aufgefallen:  
    Wenn ich mit meiner Canon EOS 2000D ein Foto direkt mache hat es über 6 MB (6000x4000) ..  
    Mache ich mit der gleichen Kamera über den raspberry ein Foto ist es plötzlich nur knapp 3 MB groß .. es wird aber behauptet das es die gleiche Auflösung hat .. allerdings merkt man das es nicht stimmen kann aufgrund der qualität des Bildes.  
      
    Wäre super wenn du da einen Grund sagen könntest .. bzw. auch eine Lösung ;-)  
      
    LG Herbert
    
    10\. Apr 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Jpeg Qualität lässt sich im Adminpanel definieren, auf -1 stellen damit das Bild im Original bleibt, ansonsten passt gd es an.
        
        15\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/69c253ead5553d7f71aa8b1a34132063?s=75&d=mm&r=g)
    
    Herbert
    
    Hallo  
      
    Super Anleitung .. vielen Dank dafür.  
    Ich hab nur ein kleines Thema/Problem:  
    Mein Hintergrund vom Countdown ist ein livestream. Soweit passt es perfekt.  
    Wird nun ein Foto gemacht bleibt dieses nun so lange am Schirm bis jemand auf Home klickt oder ein neues Foto aufnimmt.  
    Hier wäre meine Frage ob es möglich wäre eine Zeitdauer zu definieren ab wann ohne aktion wieder auf den home-schirm zurückgekehrt wird? .. und  
    klickt jemand auf neues Foto (beim Fenster wo das letzte Foto angezeigt wird. Bleibt auch während des Countdowns das letzte Foto als Hintergrund .. und es wird nicht der Livestream angezeigt.  
    nun wäre die eine Möglichkeit den Punkt 'neues Foto' aus der übersicht des ganzen Bildes rauszunehmen .. oder besser - es würde während des countdowns wieder der Livestream angezeigt. ;-)  
      
    LG und nochmals vielen Dank für diese geniale Lösung  
      
    Herbert
    
    10\. Apr 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ef7fc830d2efb6307da5b384bb4077e4?s=75&d=mm&r=g)
    
    Frank
    
    Hallo,  
    ich bekomme es nicht hin, dass die PI Camera V2 die Bilder aufnimmt geschweige denn die Vorschau! Habe den Befehl aus der FAQ benutzt und die config.inc.php editiert (nachdem ich den Schreibschutz der Datei entfernt habe).  
    Was mache ich falsch?  
    PS: Häkchen sind gesetzt bei "Gerätekamera zur Bildaufnahme verwenden" und "Vorschau aus der Gerätekamera anzeigen"  
    Viele Grüße  
      
    Frank
    
    09\. Apr 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Ausnahme im Chrome hinzufügen oder HTTPS Zugriff einrichten. Siehe https://medium.com/@Carmichaelize/enabling-the-microphone-camera-in-chrome-for-local-unsecure-origins-9c90c3149339
        
        15\. Apr 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Bei "Gerätekamera zur Bildaufnahme verwenden" wird der cmd ,(gphoto/raspistll/digicamcontrol) nicht ausgeführt sondern ein Bild aus der Vorschau der Gerätekamera erstellt. geht nur entweder oder.
        
        15\. Apr 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Bei "Gerätekamera zur Bildaufnahme verwenden" wird ein Bild aus der Vorschau aufgenommen, der Take Picture cmd (gphoto / raspistll / digicamcontrol) wird dann ignoriert.  
          
        Es gibt keinen Grund mehr die Config per Hand zu ändern, vorallem wenn du an dieser Datei die Berechtigungen änderst könntest du dir auch alles zerschießen.  
          
        Es gibt ein schönes Adminpanel wo sich alles regeln lässt.
        
        15\. Apr 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Noch ein Nachtrag:  
        Ich habe im Wiki nochmal die Infos aus meinem eigenen Wiki hinterlegt:  
        https://github.com/andreknieriem/photobooth/wiki/FAQ#preview-by-device-cam  
          
        Beste Grüße  
          
        Andi
        
        15\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/20c6e50b04fa00b7ad94e7a714542707?s=75&d=mm&r=g)
    
    Patrick
    
    Hallo  
    ich hätte gerne das es mir ein Live Bild auf meinen Ipad anzeigt während der Countdown runterläuft. Allerdings bekomme ich das nicht hin. Hat jemand eine Lösung wie das funktioniert?
    
    30\. Mar 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hallo Patrick,  
          
        Meine Implementierung dafür findest du hier:  
        github.com/andi34/photobooth/issues/44  
          
        Viele Grüße  
          
        Andi
        
        31\. Mar 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/47a192797082580c6e463d923e1bd9cb?s=75&d=mm&r=g)
            
            Patrick
            
            Leider hab ich es nicht hinbekommen. Der Liev view funktioniert immer noch nicht und jetzt geht auch das aufnehmen einer Collage und das Löschen nicht mehr. Ich habe jetzt wieder die Basis Installation durchgeführt. Kannst du mir vllt von hier an nochmal eine Schritt für Schritt Anleitung geben. Muss ich noch eine Software installieren? In den Link den du geschickt hast gibt es doch 3 verschiedene Methoden. Muss ich alle 3 ausführen? Ich bin gerade echt ein ratlos
            
            04\. Apr 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi34.github.io)
                
                Hey Patrick!  
                  
                Entweder lädst du dir die Version runter in der bereits alles implementiert ist (Link ist im Issue) oder du wendest die Codeänderung an deinem Quellcode an und erstellst die CSS Dateien neu.  
                  
                Anschließend kannst du den Instruktionen im FAQ dafür folgen.  
                  
                Für spezifische Fragen kannst du dich gerne auf GitHub im Issue melden.  
                  
                Beste Grüße  
                  
                Andi
                
                05\. Apr 2020 [Antworten](#)
                
        
        *   ![](https://www.gravatar.com/avatar/20c6e50b04fa00b7ad94e7a714542707?s=75&d=mm&r=g)
            
            Patrick
            
            Ich wollte noch erwähnen, dass es sich bei der Kamera um eine Canon EOS 200D handelt. Funktioniert das auch oder benötige ich eine PI Camera um einen Live View zu bekommen?
            
            05\. Apr 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                Andi
                
                Das geht nicht, da brauchst du z.B. eine Pi Camera. Gibt aber auch Apps womit du ein Android Handy nehmen kannst um einen Stream zu erzeugen.
                
                05\. Apr 2020 [Antworten](#)
                
    
    *   ![](https://www.gravatar.com/avatar/db319095199ddb20e87228a0280d2b5a?s=75&d=mm&r=g)
        
        [Michael](-)
        
        Hallo,  
        ich habe das Live-Bild, mit einer Raspberry Kamera realisiert. Kauf dir ein Camera Modul und ein extra Kabel. Das mitgelieferte ist definitiv zu kurz. Sobald das Modul gesteckt ist, bekommt man einen Hintergrund, in dem man sich für die Aufnahme positionieren kann.  
        Vorteil: Eine Spiegelreflex oder eine andere Kamera, muss nicht zwingend angeschlossen sein. Das Modul übernimmt auch diese Funktion. Oder man mischt es...... Modul, für das Livebild und die Spiegelreflex, für die Aufnahme.  
          
        Ein Dankeschön an Andre echt ein tolles Projekt.
        
        02\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7b074af34bdac86146884175ffda60c2?s=75&d=mm&r=g)
    
    Jennifer
    
    Hallo,  
    ich möchte als Tablet mein altes ipad2 verwenden. Gebe ich dort allerdings die IP Adresse ein, erscheint nur ein oranger Bildschirm. Am Handy und PC funktioniert's allerdings. Weißt du woran das liegen könnte?  
    LG jennifer
    
    25\. Mar 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hey Jennifer,  
        welchen Browser benutzt du? Wenn nicht Chrome, dann probiere mal den.  
        Grüße André
        
        25\. Mar 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/7b074af34bdac86146884175ffda60c2?s=75&d=mm&r=g)
            
            Jennifer
            
            Ich nutze Safari und habe die iOS Version 9.3.5 am iPad. Eine neuere Version ist nicht mehr verfügbar. Chrome, Firefox, etc kann ich deswegen nicht herunterladen.
            
            26\. Mar 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi.github.io)
                
                Hey Jennifer,  
                  
                Schau Mal in die geschlossene Pullrequest 208:  
                github.com/andreknieriem/photobooth/pull/208  
                  
                Beste Grüße  
                  
                Andi
                
                28\. Mar 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/0c1a42356498397d4f4c0b5eb330ffc6?s=75&d=mm&r=g)
    
    Johann
    
    Hab immer noch kein Live-Hintergrund hinbekommen, weiß nicht was ich noch machen soll, hat es jemand geschafft, und kann mir weiter helfen??  
      
    Schöne Grüße
    
    22\. Mar 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](http://andi34.github.io)
        
        Schau Mal im FAQ im Wiki, dort steht alles beschrieben.
        
        22\. Mar 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/682c7f595ac1c172d66a0b62aa48cc23?s=75&d=mm&r=g)
    
    simone
    
    und wie bekomm ich das ganze wieder da runter geworfen?
    
    21\. Mar 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](http://andi34.github.io)
        
        sudo rm -rf $Pfad  
          
        Also z.B.:  
        sudo rm -rf /var/www/html  
          
        Anschließend kannst du die nicht benötigen Pakete deinstallieren:  
        sudo apt-get purge gphoto2 libgphoto2-6 nginx php-fpm php-gd  
          
        Beste Grüße  
          
        Andi
        
        22\. Mar 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c33f37f3f8f09754e649ff13f3089ef4?s=75&d=mm&r=g)
    
    Manuel
    
    Hi zusammen, bin auch dabei das Projekt Photobox hoffentlich erfolgreich abzuschließen.  
      
    Ich habe lt. Anleitung alles installiert, bekomme aber eine Fehlemeldung beim auslösen eines Fotos (Gphoto returned with an error code) Kann dann die Seite nur neu laden - selbes Problem.  
      
    Die Camera, eine EOS 4000 ist per USB angeschlossen und an (Modi ist ja egal denke ich).  
      
    Muss ich an der Kamera noch Einstellungen vornehmen? Oder muss ich im Terminal noch Einstellungen vornehmen das Gphoto weiß um welche Kamera es sich handelt mit welcher Fotos geschossen weden?  
      
    Danke euch für die Hilfe.
    
    11\. Mar 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c33f37f3f8f09754e649ff13f3089ef4?s=75&d=mm&r=g)
        
        Manuel
        
        Kamera ließ sich jetzt verbinden (WLAN muss deaktiviert werden- muss man erstmal wissen ;) )  
          
        Bekomme jetzt aber trotzdem wieder einen Fehlerhinweis wenn ich den Befehl:  
          
        gphoto2 --capture-image-and-download  
          
        eingebe.  
        pi@raspberrypi:~ $ gphoto2 --capture-image-and-download  
          
        \*\*\* Fehler \*\*\*  
        Canon EOS Full-Press failed (0x2019: PTP Device Busy)  
        FEHLER: Konnte Bild nicht aufnehmen.  
        FEHLER: Konnte nicht aufnehmen.  
        \*\*\* Fehler (-110: »I/O in progress«) \*\*\*  
          
          
        Jemand Hilfe?
        
        11\. Mar 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            [Andi](http://andi34.github.io)
            
            sudo chmod -x /usr/lib/gvfs/gvfs-gphoto2-volume-monitor  
              
            Danach einmal den Pi Neustarten
            
            11\. Mar 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c33f37f3f8f09754e649ff13f3089ef4?s=75&d=mm&r=g)
                
                Manuel
                
                Wenn ich den Befehl so eingebe passiert garnichts....?
                
                17\. Mar 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                    
                    Andi
                    
                    Doch, er entzieht dem gphoto Volume Monitor die ausführ-berechtigung. Bei vielen Canon und Nikon Kameras ist sonst ein auslösen per gPhoto nicht möglich
                    
                    17\. Mar 2020 [Antworten](#)
                    
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](http://andi34.github.io)
        
        Versuch doch Mal über den Terminal ein Foto per gPhoto aufzunehmen und schau was genau ausgespuckt wird an Fehler.
        
        11\. Mar 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c33f37f3f8f09754e649ff13f3089ef4?s=75&d=mm&r=g)
            
            Manuel
            
            Ok, wie mache ich das denn? War auch meine Überlegung...
            
            17\. Mar 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](http://andi34.github.io)
                
                Steht alles im Wiki ;)  
                  
                sudo -u www-data gphoto2 --capture-image  
                  
                Wie gesagt, im Zweifelsfall auch im Wiki die Anleitung zur manuellen gphoto Installation folgen.  
                  
                "Optional: If you have a new camera, you can also install the latest version of libgphoto2 directly from the maintainer. Choose "Install last stable release""
                
                17\. Mar 2020 [Antworten](#)
                
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](http://andi34.github.io)
        
        Im Zweifel einfach die aktuellste gphoto und libgphoto von git installieren, im gphoto GitHub sind einige Issues mit deinem Problem. Das Problem ist wohl der Fokus, aber bin nicht ganz schlau geworden ob in der aktuellen git version alles läuft.  
          
        Im Wiki findest du Instruktionen wie du die aktuelle git version installierst:  
        sudo apt-get purge gphoto2 libgphoto2-6
        
        12\. Mar 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c33f37f3f8f09754e649ff13f3089ef4?s=75&d=mm&r=g)
            
            Manuel
            
            Hab ich gemacht, musste mit (j) bestätigen, dass 6 Pakete die nicht mehr benötigt werden entfernt werden, neue Pakete wurden aber meiner Meinung nach keine installiert:  
              
            Entfernen von colord (1.4.3-4) ...  
            Entfernen von gphoto2 (2.5.20-3) ...  
            Entfernen von gvfs-backends (1.38.1-5) ...  
            Entfernen von sane-utils (1.0.27-3.2) ...  
            Entfernen von libsane:armhf (1.0.27-3.2) ...  
            Entfernen von libgphoto2-6:armhf (2.5.22-3) ...  
            Trigger für libc-bin (2.28-10+rpi1) werden verarbeitet ...  
            Trigger für man-db (2.8.5-2) werden verarbeitet ...  
            Trigger für dbus (1.12.16-1) werden verarbeitet ...  
            Trigger für udev (241-7~deb10u3+rpi1) werden verarbeitet ...  
            Trigger für libglib2.0-0:armhf (2.58.3-2+deb10u2) werden verarbeitet ...  
            (Lese Datenbank ... 96544 Dateien und Verzeichnisse sind derzeit installiert.)  
            Löschen der Konfigurationsdateien von colord (1.4.3-4) ...  
            Löschen der Konfigurationsdateien von sane-utils (1.0.27-3.2) ...  
            Trigger für systemd (241-7~deb10u3+rpi1) werden verarbeitet ...
            
            17\. Mar 2020 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/00852d95e2e72e65b36d207af1e8efbe?s=75&d=mm&r=g)
    
    Sascha
    
    Kann ich die Bilder auch direkt via USB oder WLAN am Laptop aufrufen?  
      
    Die Bilder sollen gedruckt werden, allerdings gegen eine kleine Gebühr als Spende daher kann ich den Druck nicht direkt über den Pi laufen lassen
    
    08\. Mar 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](http://andi34.github.io)
        
        Richte dir.doch eine cronjob ein oder so um Bilder von a nach b zu schieben oder den Images Ordner einfach als Netzwerkfreigabe einrichten.
        
        11\. Mar 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/52b9767f4789f990dd6502881adbdc9c?s=75&d=mm&r=g)
    
    Benjamin
    
    Hi,  
    wie könnte man den QR-Code und das Bild/Collage auf einer Seite nach der Aufnahme darstellen.  
    Gruß Benjamin
    
    03\. Mar 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/59087bd7bf5f0138e957cb8733f7d800?s=75&d=mm&r=g)
    
    DJ
    
    Hi,  
    kann mir das mit den Live-Hintergrund mal jemand genauer erklären?  
    Sehe ich das richtig, dass es nur mit motion geht?  
    Ich wollte ein Tablet als Anzeigegerät nehmen und den Live-Hintergrund mit der Tablet-Front-Cam realisieren.  
    Dafür Motion installieren, und in dem Admin-Panel "Geräte-Kamera verwenden" anhaken? Und als Livestream Adresse die IP des Tablet?  
    Wie muss dann motion konfiguriert sein um auf die Tablet-Cam zugreifen zu können?  
      
    Vielleicht ist ja mal einer so gut und kann mir da auf die Sprünge helfen, danke.
    
    24\. Feb 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/37bcbab76f96aa8ca4b053b6fd385b90?s=75&d=mm&r=g)
        
        Matthias
        
        Hallo,  
        also ich hab das mit dem Live-Hintergrund so verstanden:  
          
        Man kann die Url von Motion als Hintergrund definieren, aber die Funktionen "Vorschau aus Gerätekamera" sowie "Gerätekamera für die Bildaufnahme" beziehen sich auf das Gerät von dem der Browser gestartet wird. In meinem Fall habe ich ein extra Tablet (in meinem Fall Android) für die Steuerung, und habe kein Live-Bild zusammengebracht. Weder mit Firefox noch mit Chrome nur der Fully Kisok Browser hat zumindest schwarz angezeigt aber auch nicht mehr. Wenn man das ganze lokal vom Raspi steuert (also mit Touch Bildschirm) wird das schätze ich schon soweit funktionieren.  
          
        Als Quick Fix habe ich in der style.css der Klasse #loader:after folgendes definiert:  
        background: var(--background-default) center center no-repeat;  
          
        Somit wird auch beim Countdown das Live-Bild angezeigt :)  
          
        LG  
        Matthias
        
        28\. Feb 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/0c1a42356498397d4f4c0b5eb330ffc6?s=75&d=mm&r=g)
            
            247
            
            Hey Matthias  
              
            kannst du bitte nochmal etwas genauer erklären wie du es gemacht hast? Will auch beim Countdown das Live-Bild angezeigt wird, kriege nur nicht hin :-(  
            Schöne Grüße
            
            01\. Mar 2020 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/00bcfecbe040e3987e233a6eceaaa586?s=75&d=mm&r=g)
            
            DJ
            
            Hi,  
            Live-Bild funktioniert jetzt, aber mich würde es auch freuen wenn beim countdown noch nen Live-Bild angezeigt würde.  
            Mit dem Quick Fix Tipp habe ich es auch nicht hinbekommen.
            
            06\. Mar 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/0c1a42356498397d4f4c0b5eb330ffc6?s=75&d=mm&r=g)
                
                247
                
                Hey,  
                DJ Quick Fix Tipp hat bei mir leider auch nichts gebracht, wie hast du überhaupt ein Live Bild bekommen?  
                  
                Gruß  
                247
                
                10\. Mar 2020 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](http://andi34.github.io)
                
                Auf GitHub ist entsprechender Code in meinem Fork verfügbar.  
                  
                Beste Grüße
                
                11\. Mar 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/b8249e4cc5fb6f461cfdb9b3c4eab9aa?s=75&d=mm&r=g)
    
    Christian
    
    Hallo,  
    ich habe photobooth über das installscript auf einem Raspberry installiert und eine Canon EOS 300D angeschlossen.  
    Als Benutzer pi kann ich mit gphoto ein Bild machen und downloaden.  
    Als www-data Benutzer bekomme ich aber die Fehlermeldung:  
      
    sudo -u www-data gphoto2 --capture-image-and-download  
      
    \*\*\* Fehler \*\*\*  
    An error occurred in the io-library ('I/O-Problem'): Keine Fehlerbeschreibung verfügbar.  
    FEHLER: Konnte Bild nicht aufnehmen.  
    FEHLER: Konnte nicht aufnehmen.  
      
    \*\*\* Fehler \*\*\*  
    An error occurred in the io-library ('I/O-Problem'): Keine Fehlerbeschreibung verfügbar.  
      
    Ich habe sudo gpasswd -a www-data plugdev und sudo chmod -x /usr/lib/gvfs/gvfs-gphoto2-volume-monitor aus der manuellen Anleitung ausgeführt, ohne weiteren Erfolg.  
      
    Hat jemand vielleicht noch einen Hinweis?  
      
    
    14\. Feb 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Schau Mal Issue 101, da sind ein paar Lösungsvorschläge.  
          
        Einer z.B.  
        "Also meine Kamera löst nur aus wenn ich die Speicherkarte entferne und im Kamaramenü einstelle das die Kamera auch ohne Speicherkarte auslösen soll.  
        Für mich ist das ok so.  
          
        EOS 500D"  
          
        Ansonsten könnte es noch ein Problem mit den Rechten sein, so dass du vielleicht einfach die Installation noch Mal neu durchführen magst.
        
        14\. Feb 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/b8249e4cc5fb6f461cfdb9b3c4eab9aa?s=75&d=mm&r=g)
            
            Christian
            
            Also mit oder ohne Speicherkarte macht keinen Unterschied.  
            Werde es nochmal mit einer sauberen manuellen Installation probieren.
            
            17\. Feb 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/b8249e4cc5fb6f461cfdb9b3c4eab9aa?s=75&d=mm&r=g)
                
                Christian
                
                Pi neu installiert, aktualisiert und dann die Schritte laut Anleitung durchgeführt, Fehler bleibt.
                
                18\. Feb 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                    
                    Andi
                    
                    sudo -u www-data gphoto2 --capture-image-and-download  
                      
                    Vs  
                      
                    sudo -u www-data gphoto2 --capture-image
                    
                    18\. Feb 2020 [Antworten](#)
                    
    
    *   ![](https://www.gravatar.com/avatar/bc92ca61da2acea397d7edd04a731c02?s=75&d=mm&r=g)
        
        Raphael
        
        Habe den selben Fehler mit einer EOS 300D.  
        Mit Benutzer pi funktioniert alles.
        
        16\. Feb 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/bc92ca61da2acea397d7edd04a731c02?s=75&d=mm&r=g)
            
            Raphael
            
            Hat irgendwer eine Lösung?  
            Habe schon sehr viel probiert wie Christian aber nichts funktioniert.
            
            16\. Feb 2020 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            [Andi](https://andi34.github.io)
            
            Mal versucht die aktuellste gphoto zu installieren? Im Wiki gibt's ne optionelle Anleitung wie manuell gphoto2 vom Entwickler installiert werden kann.
            
            16\. Feb 2020 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/bc92ca61da2acea397d7edd04a731c02?s=75&d=mm&r=g)
        
        Raphael
        
        Hallo, habe eine Lösung gefunden. Wenn ich mich als www-data user anmelde funktioniert alles :)
        
        16\. Feb 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        sudo -u www-data gphoto2 --capture-image-and-download  
          
        Vs  
          
        sudo -u www-data gphoto2 --capture-image  
          
        Downloaden kann der www-data User das Bild natürlich nicht da er keine Berechtigung im Home Verzeichnis vom Nutzer Pi hat.
        
        17\. Feb 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
    
    Nico
    
    Hallo,  
    Live view funktioniert nur mit einer Webcam?  
    Oder kann ich auche meine DSLR nehmen die das Liveview Bild mit überträgt?  
    VG  
    Nico
    
    12\. Feb 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Live-View der DSLR geht soweit ich weiss nicht, zumindest ist mir kein Weg bekannt.  
        Einfach eine Pi Cam V2 nehmen, kannst du am Sucher deiner DSLR platzieren für die Ausrichtung.
        
        13\. Feb 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
            
            Nico
            
            Okey ja vielen dank ;)
            
            13\. Feb 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
                
                Nico
                
                irgendwie ist meine Pi Cam zu doof vernünftig durch den sucher zu gucken.  
                Ich muss die Helligkeit der Kamera um einiges hoch stellen und egal wie man es macht, der Sucher nimmt nur so geschätzt 1/4 von dem display ein weil der rest der kamera quasi um den sucher drum rum filmt. obwohl die kamera so weit im sucher drin ist wie es nur geht.
                
                13\. Feb 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
                    
                    Nico
                    
                    Falls es viele mit dem gleichen Problem gibt, könnte ich eventuell bald helfen. Ich experementiere gerade ein bisschen mit den CAD Programmen rum und erstelle eine Halterung für die Kamera. so das die vor die DSLR geklemmt werden kann (in meinem Fall die Canon eos 550d) wenn man das KIT Objektiv so zwischen 18 und 24 mm einstellt hat es den gleichen Bildauschnitt wie die PI Kamera.  
                      
                    Ist zwar nicht die schönste Variante aber anscheint die einzig mögliche.  
                      
                    Gruß Nico
                    
                    14\. Feb 2020 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/a32b78bceda695857b2ae762c96ee0bd?s=75&d=mm&r=g)
                        
                        Niklas
                        
                        Ich wäre an so einer Halterung interessiert. Bist du noch dran?  
                        Benutze auch eine EOS 550d. Meld dich mal.  
                          
                        Gruß Niklas
                        
                        10\. Mar 2020 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/7d18b4548f47b42d518a09182867c271?s=75&d=mm&r=g)
    
    [Jörg Schwarze](www.webserv-it.de)
    
    Hallo, ich habe mir die Software mal auf einen Raspberry Pi 4 installiert und es läuft alles. An dem Pi habe ich eine kleine Kamera, die das Livebild auf den Touchscreen bringt, das Wlanmodul ist als AP konfiguriert und ich bin sehr zufrieden, wie alles läuft. Da ich nun soweit fertig bin kommt lange Weile auf und ich würde gerne noch einen Buzzer, der richtig Alar macht (am liebsten Funk, Kabel geht aber auch) und einen Drucker einbauen. Welchen Buzzer und welchen Drucker kann ich nehmen, bzw. wird unter der Software angesteuert?  
    VG  
    Joe
    
    12\. Feb 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
        
        Nico
        
        Buzzer ist nur eine verdrahtungsart, da kannst du jeden Buzzer nehmen musst nur verdrahten mit dem Pi. Ist halt auch einfach nur ein Großer Taster.  
          
        Gruß Nico
        
        12\. Feb 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Schau mal.auf GitHub im Issue 198, flighter18 hat da eine sehr edle Lösung (wenn auch nicht ganz billig).  
        Ansonsten tut's natürlich auch eine IR Presenter für 10-20€.
        
        13\. Feb 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Bezüglich Drucker ganz vergessen:  
        z.B. Canon Selphy CP1300  
          
        Beste Grüße  
          
        Andi
        
        13\. Feb 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b25baf7939cb4b43da71da9ff6cc03e0?s=75&d=mm&r=g)
    
    Viktor Tissen
    
    Hallo,  
    ich habe gerade alles soweit Installiert. Leider kann ich nicht auf das Webinterface zugreifen. Hast du einen Tipp für mich?
    
    11\. Feb 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
    
    Nico
    
    Guten Abend,  
      
    ich habe alles schön so eingerichtet wie ich das haben will, läuft auch alles auch mit einem Pilzdrucktaster wo man zur not auch ordentlich hinterzimmern kann ohne das er kaputt geht. Jetzt hänge ich nur noch an der Sache mit dem QR Code.  
      
    Man soll sich ja ins eigene WLAN einwählen. Kann mir einer sagen wie ich das hin bekomme? habe einen pi3 B also mit WLAN...  
    Falls alle Stricke reißen werde ich es wohl mit meinem alten Router machen müssen wäre nur schöner ohne.  
      
    Danke im Vorraus.  
    Gruß Nico
    
    07\. Feb 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Nico,  
          
        Schau Mal im Wiki, da gibt's ne Anleitung wie du aus dem Pi einen Access-Point machst.  
        Über das Admin Panel nur die IP deines Pi dann hinterlegen, falls du über localhost/127.0.0.1 am Pi selbst auch die booth aufrufst.  
          
        Beste Grüße  
          
        Andi
        
        09\. Feb 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
            
            Nico
            
            hab das hinbekommen aber nur weil ich wpa2 ausgeschaltet habe.  
            Mein größtes Problem gerade ist das er mit meinem handy nach dem Scannen die Seite nicht öffnen kann. Obwohl ich mit dem PI über Acces-Point verbunden bin.  
              
            Aber ich finde das schon mal echt klasse was mit dem Programm alles machbar ist und wie gut überarbeitet das eigentlich ist.  
            Anpassungen gehen auch sehr gut und einfach und eine schöne Oberfläche.  
            Müsste das mit dem zugriff und Localhost noch hinkriegen dann kann ich die Elektrik auch mal in die Box verbauen und habe für unsere Hochzeit eine wirkich gelungene Fotobox.  
              
            Gruß Nico
            
            09\. Feb 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi34.github.io)
                
                Von einem anderen Gerät aus musst du natürlich die IP-Adresse des Pi eingeben um auf die Seite zuzugreifen (sofern beide Geräte im selben Netzwerk sind).  
                  
                Wenn ein Display am Pi hängt, nur dann funktioniert dort der Zugriff auch via localhost oder 127.0.0.1 - damit der QR Code dann aber an diesem Bildschirm den richtigen Link bekommt, musst du im Adminpanel die IP Adresse des Pi aber hinterlegen.  
                  
                Beste Grüße  
                  
                Andi
                
                09\. Feb 2020 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
                
                Nico
                
                Kann man den QR Code der Generiert wird ändern? das er localhost durch die IP Adresse ersetzt und den Namen des WLAN ändern?  
                Und irgendwie macht er manchmal den QR Code größer als den Monitor.  
                und beim downloaden mit der Manuellen Eingabe downloadet er nur eine 0kb datei.  
                  
                Gruß Nico
                
                10\. Feb 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                    
                    Andi
                    
                    Wie bereits erwähnt, im admin panel 'IP-Adresse des Photobooth Webservers' definieren für den QR Code.  
                      
                    Text des QR kannst du ändern, schau im resources/lang/de.js  
                      
                    Bezüglich der Größe: musst du im style.css/style.scss ändern.
                    
                    10\. Feb 2020 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
                        
                        Nico
                        
                        ja das mit der IP Adresse habe ich auch gelesen nach dem abschicken sorry .  
                          
                        und mit dem DOwnload? das er nur 0kb datein downloadet also quasi nichts?
                        
                        10\. Feb 2020 [Antworten](#)
                        
                        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                            
                            Andi
                            
                            Ggf das selbe Problem wie im Wiki unter "Cromakeying is saving without finishing saving" zu finden, einfach Mal die Lösung dafür im Wiki ausprobieren.
                            
                            10\. Feb 2020 [Antworten](#)
                            
                        
                        *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
                            
                            Nico
                            
                            alles gut :D tut mir leid fürs nerven hab alles am laufen. das ist ein Träumchen vielen Dank dir.
                            
                            10\. Feb 2020 [Antworten](#)
                            
                        
                        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                            
                            Andre
                            
                            Hey Nico, was war denn das Problem mit dem Download?
                            
                            11\. Feb 2020 [Antworten](#)
                            
                            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                                
                                [Andi](https://andi34.github.io)
                                
                                Ich denke Mal liegt an NGINXs Default Config:  
                                413 (Request Entity Too Large).  
                                  
                                Problem info:  
                                The problem arrives when client tries to send a request which is more than the default 1 MB in size, for example, uploading an image or downloading a plugin or something.
                                
                                11\. Feb 2020 [Antworten](#)
                                
                            
                            *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
                                
                                Nico
                                
                                das Problem hat sich selbst gelöst, nach der änderung der IP adresse.  
                                  
                                jetzt fummel ich nur noch an der style.scss rum damit alles passt. die firsch aufgenommenen Fotos sind auch 1 mm oder so abgeschnitten oben und unten und der QR auch. auch wenn ich .qr die werte änder ändert sich auch nichts an der größe vom qr code
                                
                                11\. Feb 2020 [Antworten](#)
                                

*   ![](https://www.gravatar.com/avatar/3f0d6c89d1c86679188ac199f3563f91?s=75&d=mm&r=g)
    
    Herbert Eberhardt
    
    Hallo,  
    Ich habe voriges Jahr die Box nachgebaut.  
    Nun hätte ich gerne ein Livebild. Ich verwende die Canon M50, diese hat ein HTML - Live Out und eine Corsair Elgato Cam Link 4K. Mit diesem USB - Adapter habe ich schon erfolgreich Videos am PC erstellt (2 Quellen, Bildschirmmittschnitt, Logos, Zoomen, Ton und ....) - Live mpg - File und Streaming möglich. Am Raspberry Pi stellt der Stick auch ohne Treiber eine Webcam dar. Das würde ich gerne auf der HTML-Seite darstellen.  
    2\. Überleg ich die HTML - Seite direkt dem Rastpberry Pi auf einem 10 Zoll Touchscreen anzuzeigen.
    
    26\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/3f0d6c89d1c86679188ac199f3563f91?s=75&d=mm&r=g)
        
        Herbert Eberhardt
        
        Zuerst, ganz tolle Arbeit!!!  
        Folgende Probleme habe ich noch.  
        1\. Ich muss die Kamera aus und einschalten, dann kommt das Bild von der Kamera als Hintergrund kommt.  
        2\. Nachdem ich ein Foto gemacht habe, kommt das Livebild leider nicht mehr. Ich muss die Kamera (M50) wieder aus und einschalten.  
        3\. Beim Countdown habe ich nur einen weißen Schirm.  
        4\. Beim Starten des Raspberry PI läuft startet der Monitor mit 1280x800 (nativ des Elecrow 10.1). Sobald der Desktop kommt, schaltet er auf 1024x768 um. Dadurch ist alles verzerrt (gestaucht).
        
        29\. Jan 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/3f0d6c89d1c86679188ac199f3563f91?s=75&d=mm&r=g)
            
            Herbert Eberhardt
            
            zu 2: Ich habe es mit einem Monitor zu Kontrolle des Ausganges der Canon M50 untersucht. Die Ausgabe wird beendet, sobald das Foto geschossen wurde.
            
            29\. Jan 2020 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/3f0d6c89d1c86679188ac199f3563f91?s=75&d=mm&r=g)
            
            Herbert Eberhardt
            
            Zu Punkt 1 und 2, Kamera gibt nichts auf HDMI aus, erst wieder durch ein und ausschalten: Gibt es eine Möglichkeit einen Befehl über gphoto2 zu senden?  
            Wenn, wo kann, bzw. muss ich das einbauen?  
            Hat wer eine Idee zu Punkt 3, weißer Schirm statt Webcam, Der HDMI Input wird wie eine interene Webcam gesehen (127.0.0.1:8081). Gibt es da eine Möglichkeit?  
            Punkt 4 hat sich gelöst. Elecrow hat Befehle in das boot/config.txt geschrieben (ich auch) und den Monitor von Auto auf HDMI geschalten, Dann hat die Auflösung und Bildverhältnis geklappt.  
            Versuche es gerade mit einen Rapsberry 3 statt 4
            
            30\. Jan 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                [Andi](https://andi34.github.io)
                
                Bezüglich der Vorschau, wie oft erwähnt geht nur mit der Gerätekamera selbst (Pi Cam wird als solche erkannt), der Port ist da nicht einstellbar. Auch muss dann der Aufruf am Pi selbst über localhost/127.0.0.1 laufen.  
                  
                Bezüglich dem Ein und Ausschalten nach gphoto Befehl um die Vorschau wieder zu erlangen:  
                Schau Mal in den Issues bei gphoto auf GitHub, ansonsten ein Issue entsprechend aufmachen.  
                  
                Beste Grüße  
                  
                Andi
                
                30\. Jan 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/c454ddcdbcb69b6ed442d47ff1cd5f38?s=75&d=mm&r=g)
    
    [Stoffl](www.stoffl.info)
    
    Hallo zusammen,  
    vielen Dank für das Projekt,  
      
    ich habe eine kurze Frage zu den Kameras.  
    Bei der Supportet liste, miss dort in der zweiten spalte (Additional Abilities) Image capture dabei stehen, oder sind das einfach nur "randinfos" ? - ich versuche seit Stunden eine IXUS 65 und 70 anzusteuern.  
      
    Das Manuelle ausführen von gphoto2 --get-config capturetarget  
    geht nur, wenn ich bei der Kamera in der "Galerie" bin, dann ist auch lt. lsusb die Kamera im PTP modus.  
      
    Sonnst passiert rein gar nichts.  
      
    Ich vermute, ich benötige eine EOS xxx - was könnt Ihr empfehlen?  
    Dachte an eine EOS1100d - 550d ? diese sollten ja ohne weitere Probleme funktionieren?  
      
    Vielen Dank  
    Stoffl
    
    25\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Stoffl,  
          
        "Image Capture" muss natürlich von gphoto2 für deine Kamera unterstützt sein. Ich selbst nutze eine Canon 1100D und eine Nikon D3000. Ich denke du findest eine unterstützte Kamera auch günstig 2nd Hand wenn's keine neue sein muss.  
          
        Du kannst aber gerne die Schritte im Wiki befolgen um die aktuellste gphoto2 zu installieren, vielleicht hast du ja damit auch Glück.  
          
        Beste Grüße  
          
        Andi
        
        31\. Jan 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/978d0b71595de57f314fd56cc50f79b7?s=75&d=mm&r=g)
        
        Nico
        
        Guten Abend,  
          
        ich kann dir auf jedenfall schonmal sagen, dass es mit der Canon EOS 550d ohne jegliche Probleme funktioniert. Und funktioniert quasi Out of the Box.  
          
        Gruß Nico
        
        07\. Feb 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/bd6c582bc02d544700f342efff49bd0c?s=75&d=mm&r=g)
            
            stoffl
            
            Hi, ja hab mir eine 550 gekauft - funktioniert soweit perfekt!  
            danke
            
            17\. Feb 2020 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/d62a55ea2b45db662938e13a20c79b0f?s=75&d=mm&r=g)
    
    PaLa
    
    Hallo Leute,  
    erst einmal vielen Dank für das Projekt hat Spass gemacht es nach zu basteln.  
    Aber ein kleines Problem habe ich noch, egal was ich mache, ich bekomme den Background Stream nicht wenn ich ein Foto/Collage auslöse. Dann ist das Bild immer weiß und die Zeit zählt. Hat jemand eine Idee wie ich das einstelle?  
    Vielen Dank im Voraus  
    VG  
    Pala  
      
    Konfig:  
    Motion V 4.2.2-1  
    gphoto2 2.5.23  
    libgphoto2 2.5.22  
    libgphoto2\_port 0.12.0
    
    24\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/d62a55ea2b45db662938e13a20c79b0f?s=75&d=mm&r=g)
        
        Pala
        
        Aso 2 Sachen habe ich noch vergessen:  
          
        ich benutze einen Rasp PI 4 4GB und der Livestream im Anfangsmenü (Webbrowser) läuft tadellos.  
        Danke :)
        
        24\. Jan 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Die Vorschau während des Countdowns lässt sich NUR von der am bedienenden Gerät direkt angeschlossen Cam nutzen.  
        Beispiel: Willst du eine PiCam nutzen die am Pi angeschlossen ist, dann musst du auch am Pi selbst die Booth aufrufen und das Bild oder Collage dort auslösen. Rufe ich also von einen anderen Gerät die Booth auf sehe ich also nicht Vorschau über die Pi Cam, am Handy würde er versuchen deine Handy Cam für die Vorschau zu nutzen.  
          
        Hoffe die Info hilft dir weiter.
        
        24\. Jan 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d62a55ea2b45db662938e13a20c79b0f?s=75&d=mm&r=g)
            
            Pascal
            
            Hallo Andi,  
            danke für die Antwort. Ok das habe ich jetzt soweit verstanden. Das hat aber nichts mit den Einstellungen ("Pfad zum Hintergrundbild") zu tuen?  
            Sondern man aktiviert dann die option "Vorschau aus der Gerätekamera anzeigen" ?  
              
            Sprich wenn ich dann die Booth über den Webbrowser am iPad aufrufe nutzet er dann die CAM von dem aktuellen Geräte für das Bild oder Collage. Aber Das Hintergrundbild auf der Webpage kommt dann von der PiCam, weil das sehe ich permanent auf dem Startbildschirm?  
              
            Bin mir nicht sicher ob ich einen Denkfehler habe :D  
              
            Vielen Dank für die Hilfe.  
            VG PALA :)
            
            27\. Jan 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                Andi
                
                Genau, aber am iPad auch nur dann, wenn du einen sicheren Zugriff eingerichtet hast (HTTPS) oder in Chrome eine Ausnahme hinzugefügt hast - ansonsten bleibt es ohne Bild weil er keinen Zugriff auf deine iPad Cam bekommt.  
                  
                Der Hintergrund, wo definierbar, kann auch eine URL mit Portangabe sein, dies wird dann auf allen Geräten gleichermaßen angezeigt, aber eben als Hintergrund. Hier trixen wir etwas über CSS und JS um das zu ermöglichen
                
                31\. Jan 2020 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                Andi
                
                Vorschau aus der Gerätekamera anzeigen = Vorschau aus der Kamera am Gerät wo die Booth aufgerufen wird.  
                  
                Die Vorschau sagt NICHTS über die Aufnahme-Quelle aus!  
                Wenn die Option zur Nutzung der Gerätekamera zur Aufnahme nicht aktiv ist, dann wird ganz normal per command line die Aufnahme am Pi gestartet, also via gphoto2 + abgeschlossener Kamera.  
                  
                Hintergrund = Hintergrund, also keine Vorschau. Stellst du aber eine URL ein, dann läuft der Stream natürlich auf allen Geräten wo die Booth aufgerufen wird. Dies ist dank CSS und JS Variablen möglich.  
                  
                Am besten einfach mit den Einstellungen spielen und schauen was passiert - wird sich alles am.Ende selbst erklären.  
                  
                Beste Grüße  
                  
                Andi
                
                31\. Jan 2020 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/d62a55ea2b45db662938e13a20c79b0f?s=75&d=mm&r=g)
                    
                    PaLa
                    
                    Hey Andi,  
                      
                    wunderbar danke für die Hilfe. Ich hatte auch schon im Forum gelesen, das dazu eine HTTPS Konfiguration notwendig ist. Nach der SSL Konfig im NGINX läuft jetzt alles!  
                      
                    Schade ist, dass es noch ein delay gibt bis die Kamera angezeigt wird von etwa 2 sek, aber das ist meckern auf hohem Niveau ;)  
                    VG  
                    PaLa
                    
                    03\. Feb 2020 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/b550c67d35f8db618951ec02cc116891?s=75&d=mm&r=g)
    
    Marc
    
    HeyHo,  
    nochmal Marc hier.  
      
    Erstmal Danke an Andi \*Daumen hoch\*, es lag am "yarn build", hat sich wohl bei der Generierung verschluckt.  
      
    Wäre es möglich anstelle der Collage ein GIF zu erzeugen oder sogar dies als neue Funktion zu implementieren (#Boomerang function)?  
      
    z.B. mit ImageMagick? oder ist es zu viel für den kleinen Pi?  
      
    Freundliche Grüße  
    Marc
    
    23\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Das Projekt ist Quelloffen, gerne kannst du weitere Funktionen einbauen.  
          
        Imagemagick schien mir beim Testen recht langsam weshalb es nicht auf meiner To-Do Liste steht.  
        Ein Issue hierfür ist aber auf GitHub offen, aber keine Ahnung ob sich jemand der Sache annimmt auf Imagemagick "umzubasteln"..  
          
        Beste Grüße  
          
        Andi
        
        24\. Jan 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/0cd7dab1813376d743189d004c3c2f91?s=75&d=mm&r=g)
    
    Mario
    
    Hallo,  
      
    Ich breuchte mal eure bzw deine Hilfe.  
    Da ich ein absoluter Linux Nop bin hätte ich eine Frage ? Ich habe alles soweit hinbekommen und es funktioniert auch Perfekt nun zu meiner 1 Frage , kann man es vieleicht so einstellen das wenn das Photo gemacht wurde es für x sekunden angezeigt wird und dann wieder zum Homebildschirm wechselt ?  
    DIe 2 Frage wo finde ich den Ordner für die Hintergrundbilder ?  
      
    MFG  
    Mario
    
    22\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Zu Frage 1: 90 Sekunden sind fest einprogrammiert, lässt sich zur Zeit nicht per Config anpassen.  
          
        Zu Frage 2:  
        Schau Mal im "resources" Ordner und dessen Unterordnern ;)  
          
        Beste Grüße  
          
        Andi
        
        24\. Jan 2020 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](https://andi34.github.io)
        
        Hey Mario,  
          
        Zu Frage 1:  
        Die Funktion zum Anpassen der Zeit die das Bild angezeigt wird nach der Aufnahme habe ich in meinem Fork hinzugefügt.  
          
        Beste Grüße  
          
        Andi
        
        25\. Jan 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ab3ad7c51f9f81030f28fdcd46022956?s=75&d=mm&r=g)
    
    Tino
    
    Hallo,  
    ich versuche leider verzweifelt das photobooth zum Laufen zu bringen und komme nicht weiter. Liegt bestimmt auch an meiner mangelnden Erfahrung und hoffe auf eure Unterstützung. System ist mittlerweile ein Pi4B 1GB  
    Habe alles soweit eingerichtet, Webserver läuft und die Kamera macht aus der Konsole raus Fotos. Wenn ich aber mit dem Firefox die Fotobox öffne, dann bekomme ich das nicht so angezeigt, wie auf den Screenshots dargestellt. Die Button sind nur graue Felder und lassen sich auch nicht bedienen. In der Config kann ich den Text „$config\['start\_screen\_title'\] = 'Test';“ ändern und es wird auch so angezeigt, aber das war es auch   
    Für Hilfe wäre ich sehr dankbar. Es ist bestimmt nur eine Kleinigkeit die ich nicht finde  
    Gruß Tino
    
    12\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/763b9ce743d3be394e62015aa9911a38?s=75&d=mm&r=g)
        
        Marc
        
        Hi,  
        erstmal Danke für eure Arbeit hier.  
          
        Ich habe leider eine ähnliche Problematik wie Tino.  
          
        Vor ein paar Tagen habe ich schonmal einen Photobooth erstellt (Gemäß Anleitung - Raspberry Pi), dieser lief ohne Probleme in der Standard Konfiguration.  
        Als ich heute die Photobooth erneut aufsetzen wollte (habe etwas viel rumgespielt :-)), Wurde mir zwar eine Webpage angezeigt, aber ohne jegliche Funktion und Styles.  
          
        Gruß Marc
        
        13\. Jan 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Hey Marc, hey Tino,  
              
            Bitte den Installationsanweisungen im Wiki folgen, ich denke ihr habt die .CSS Dateien nicht erstellt ("yarn build").  
              
            Beste Grüße  
              
            Andi
            
            14\. Jan 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/ab3ad7c51f9f81030f28fdcd46022956?s=75&d=mm&r=g)
                
                Tino
                
                danke Andi,  
                das war die Lösung :)  
                und vielen dank an alle beteiligten. Das ist eine super Fotobox für meine Hochzeit. Danke
                
                18\. Jan 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
    
    [Andreas](https://andi34.github.io)
    
    Hallo zusammen!  
    Ich habe nun die Optionen in den aktuellen Source gemerged den Admin Panel und auf Wunsch die Startseite mit einem Passwort zu schützen.  
      
    Desweiteren ist es nun möglich die Gerätekamera (also auch Tablet oder Handy Kamera) für die Aufnahme zu nutzen - "Photobooth to go" sozusagen.  
    Zwingende Voraussetzung für die Aufnahme von der Gerätekamera ist jedoch, dass euer Webserver per HTTPS erreichbar ist.  
      
    Weitere Optionen die ich eingepflegt habe (noch nicht OpenSource verfügbar, teils WIP) folgen in Zukunft über meinen eigenen Fork.  
      
    Ich möchte mich an dieser Stelle nochmal herzlich bei André für die Initiale Arbeit an der Photobooth bedanken!  
      
    Beste Grüß  
      
    Andi
    
    11\. Jan 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/af534e8d47c0e21e8d83e276d5eaf454?s=75&d=mm&r=g)
    
    Marc Wirth
    
    Halle  
    Hätte eine frage. Wie kann man das x also den close buttom im der gallery verschieben. Er sitz bei mir so am rand dass man ihn fas nicht drücken kann.  
    Danke im voraus m. Wirth
    
    07\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hey Marc,  
          
        resources/sass/style.scss  
          
        Ab Zeile 328 ist der Button definiert. Entsprechend deiner wünsche anpassen und anschließend "yarn build" wieder ausführen.  
          
        Beste Grüße  
          
        Andi
        
        08\. Jan 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo und Frohes Neues!  
    Ich bin erst jetzt dazu gekommen die vielen neuen Funktionen und die neue Installation zu testen. Ich bin begeistert.  
    Eine Sache bereitet mir noch Probleme.  
    Das Vorschaubild der Raspi Camera ist in den meisten Fällen zu dunkel. Wo kann ich die Parameter einsehen und ändern?  
      
    Gruß  
    Dirk
    
    04\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/7a420f46c8dde70ac732570b334187db?s=75&d=mm&r=g)
        
        Manuel
        
        hey dirk, wie hast du die raspi cam überhaupt als live wallpaper gemacht? ich schaffe das nicht :(
        
        06\. Jan 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ab3ad7c51f9f81030f28fdcd46022956?s=75&d=mm&r=g)
    
    Tino
    
    hallo, ich bin grade am einrichtenvom Raspberry und habe die Config gelöscht :(  
    Hat jemand den kompletten inhalt der original config.inc.php? ich habe diese ausversehen gelöscht!
    
    02\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/ab3ad7c51f9f81030f28fdcd46022956?s=75&d=mm&r=g)
        
        Tino
        
        hab den inhalt im Github gefunden :)  
        habe aber noch das Problem, dass alles nicht ordentlich angezeigt wird, bzw. eigentlich gar nichts läuft! Ich nutze eine Pi 1B+, könnte es daran liegen?
        
        03\. Jan 2020 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Der 1B+ ist vermutlich zu schwach auf der Brust, kann aber auch am falschen Setup liegen - lässt sich ohne Details nicht nur schwer beantworten.  
              
            LG  
            Andi
            
            04\. Jan 2020 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/54ea6445503d75f1cb04ecb5c7f4852f?s=75&d=mm&r=g)
    
    Mike
    
    habe das jetzt so gelöst, in der admin/index.php  
      
      
      
      
    // Benutzername und Passwort definieren  
      
    $username = "bojan.rauch";  
      
    $password = "bartbart01";  
      
      
      
    if ($\_POST\['txtUsername'\] != $username || $\_POST\['txtPassword'\] != $password) {  
      
      
      
    ?>  
      
      
      
    Login  
      
      
      
      
      
      
      
    Username:  
      
    <input type="text" title="Enter your Username" name="txtUsername" />  
      
      
      
    Password:  
      
    <input type="password" title="Enter your password" name="txtPassword" />  
      
    <input type="submit" name="Submit" value="Login" />  
    </form>
    
    30\. Dec 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/54ea6445503d75f1cb04ecb5c7f4852f?s=75&d=mm&r=g)
    
    Mike
    
    Hallo Andi, habe da nochmals eine frage...  
    Wenn jemand ein Foto per QR Code runterlädt, sieht man ja die IP Adresse (jedenfalls bei meinem Android).  
      
    Dann könnte jeder der im Wifi ist mit seinem Handy ein Foto auslösen wenn er auf die IP Adresse geht was ja ziemlich blöd wäre...  
      
    oder sehe ich das falsch?
    
    29\. Dec 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Ja, das ist so. Der Quellcode ist auf GitHub für jeden zugänglich, per Pullrequest können Verbesserungen gerne beigesteuert werden.  
          
        In den Pullrequests bzw in meinem Fork findest du meine Arbeit an einer Login Lösung (hierüber können gewisse Bereiche per Login geschützt werden).  
          
        Viele Grüße  
          
        Andi
        
        30\. Dec 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/54ea6445503d75f1cb04ecb5c7f4852f?s=75&d=mm&r=g)
    
    Mike
    
    Hallo Andre  
      
    Erstmal super sache dein projekt, echt klasse!  
      
    Hätte ein paar fragen...  
      
    1\. Könnte man den admin panel passwort schützen?  
    Habe gesehen, das wenn man ein bild per qr code herunter ladet, sieht man auf dem Smartphone die ip adresse.. und wenn jemand aus jux da noch /admin eingibt kann jedermann alles ändern?  
      
    2\. Die front kamera vom tablet als vorschau beim countdown zu machen, ist das kompliziert? Wäre es einfacher die pi camera zu nehmen?
    
    28\. Dec 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hey Mike,  
          
        Auf GitHub sind bezüglich schützen des Admin Panels schon Sachen In Gang, aber noch nichts finales. Für die Vorschau via Tablet/Handy Kamera brauchst du HTTPS Zugriff.  
        Auf GitHub ebenso WIP über HTTPS die Aufnahme von Handy/Tablet Kamera zu ermöglichen.  
        Schau entsprechend bei den Pullrequests oder Issues.  
          
        Beste Grüße  
          
        Andi
        
        28\. Dec 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/04cb46093734a6cf30ff321b2e092bbd?s=75&d=mm&r=g)
    
    Julian V
    
    Hallo Zusammen wir haben seit dem großen Update das Problem das der QR Code der generiert wird nicht die IP Adresse des Raspberris beinhaltet sondern den Hostname localhost der sich nicht ändern lässt. Hat jemand dazu eine Lösung.
    
    10\. Dec 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        [Andi](www.andi34.github.io)
        
        Hey Julian!  
        Eine neue Option die IP für den QR vorzugeben befindet sich gerade noch zur review auf GitHub, sollte demnächst gemerged werden wenn alles gut geht.  
          
        Beste Grüße  
          
        Andi
        
        18\. Dec 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Hey Julian,  
              
            die Codeänderung sind nun übernommen und im aktuellen master branch auf GitHub zu finden.  
              
            Beste Grüße  
              
            Andi
            
            19\. Dec 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/2d2776a488619d3c04d468d34ea235e7?s=75&d=mm&r=g)
            
            [Sasha](-)
            
            Hallo Andi,  
            erstmal vielen Dank für das schöne Projekt.  
            Da habt ihr super Arbeit geleistet.  
            Ich bin momentan auf der Version 2.02, wurde hier das Problem mit dem localhost behoben? Ich habe leider noch das Problem, dass der QR-Code hier auf localhost und nicht auf die IP verweist.  
            Hast du mir dafür vielleicht eine Lösung?  
            Vielen Dank schon mal im Voraus für jede Hilfestellung.  
            Viele Grüße  
            Sasha
            
            15\. Jan 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/2d2776a488619d3c04d468d34ea235e7?s=75&d=mm&r=g)
                
                Sascha
                
                Habs nun raus.  
                Im autostart die statische IP des raspberry statt localhist eintragen, dann funktioniert es. Trotzdem vielen dank für das projekt
                
                19\. Jan 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/4f2c149551632064462200ab3bdcd791?s=75&d=mm&r=g)
    
    Patrick Brx
    
    Hey.  
    Gibts denn ne Möglichkeit die Cam des Tablets zu nutzen?
    
    20\. Nov 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hey Patrick,  
          
        Dein Server muss so konfiguriert sein, dass er per HTTPS aufgerufen werden kann, dann kann man Handy/Tablet Cam für die Vorschau während des Countdown nutzen. Eine Aufnahme per Handy/Tablet Cam ist nicht möglich zur Zeit.  
        In den Issues auf GitHub gibt es ein entsprechendes Topic.  
          
        Beste Grüße  
          
        Andi
        
        23\. Dec 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c5fa24cb832850789cfb5af655af9161?s=75&d=mm&r=g)
    
    Christoph.b
    
    Hallo,  
    Super Anleitung,  
    Eine Frage. Kann man das Design der Collage zu ändern? Wenn ja wo  
      
    Danke Chris
    
    18\. Nov 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Ist nicht möglich zur Zeit.
        
        19\. Nov 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4f2c149551632064462200ab3bdcd791?s=75&d=mm&r=g)
    
    Patrick Brx
    
    Hey,  
    Funktioniert gut. Wie bekomme ich denn jetzt die Pi Cam als LiveView dazu? Als normale Cam ist eine Canon dran.  
    Danke für die Hilfe
    
    16\. Nov 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Einfach Live View im Admin Panel aktivieren und dann über den Display die Booth aufrufen, der am Pi hängt.
        
        17\. Nov 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/4f2c149551632064462200ab3bdcd791?s=75&d=mm&r=g)
            
            Patrick Brüls
            
            LiveView ist aktiviert. Die PiCam kann ich auch über "raspistill" ansteuern und ein Foto machen, allerdings zeigt er mit keine LiveView an. Wird diese dann im Hintergrund oder während des Countdown angezeigt?  
            Und muss ich noch irgendwas in der Config ändern?  
            Gruß
            
            18\. Nov 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                Andi
                
                Wird beim Countdown angezeigt, aber nur an dem Display welcher am Pi angeschlossen ist.
                
                18\. Nov 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/fd975d2d42f3fc5ffd44be67ba4f08e2?s=75&d=mm&r=g)
                    
                    Steffen
                    
                    Browser fragt mich nach Zugriff zur Cam bleibt aber trotzdem weißer Hintergrund
                    
                    18\. Nov 2019 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                        
                        Andi
                        
                        Keine Probleme hier.  
                        Foto per gphoto und Canon EOS 1100D, Preview mit Pi Cam während des Countdown.  
                        Hast du die Pi Cam in der Raspberry Pi Konfiguration aktiviert?
                        
                        23\. Nov 2019 [Antworten](#)
                        
                    
                    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                        
                        Andi
                        
                        Achso: am Pi selbst musst du per localhost oder 127.0.0.1 die Booth aufrufen, nicht per direkter IP-Adresse.
                        
                        23\. Nov 2019 [Antworten](#)
                        
                        *   ![](https://www.gravatar.com/avatar/fd975d2d42f3fc5ffd44be67ba4f08e2?s=75&d=mm&r=g)
                            
                            Steffen
                            
                            Egal wie rufe ich die Raspberry Cam direkt auf hab ich einen Livestream in der Software der Photobooth kommt beim Countdown die Abfrage zwecks Berechtigung aber es kommt kein Bild kann ich den Stream direkt einbinden das er beim Countdown angezeigt wird ?
                            
                            24\. Nov 2019 [Antworten](#)
                            
                            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                                
                                Andi
                                
                                Getestet habe ich das ganze mit einem frisch aufgesetzten Raspbian Buster und Pi4. Im Chromium kommt einmal die Abfrage und danach läuft es bei mir ohne Probleme. Kann mir nicht erklären, warum es bei dir nicht geht (abgesehen von altem Photobooth source?).  
                                  
                                Einfach dem Wiki folgen zum frisch aufsetzen und zusätzlich eben in der Pi Config die Pi Cam aktivieren - Neustart nicht vergessen danach!  
                                  
                                Am Besten nutzt du den  
                                aktuellen git Source der Photobooth um auszuschließen, dass du noch eine alte Version hast wo es Mal Probleme mit gab.  
                                  
                                Beste Grüße
                                
                                29\. Nov 2019 [Antworten](#)
                                
                                *   ![](https://www.gravatar.com/avatar/fd975d2d42f3fc5ffd44be67ba4f08e2?s=75&d=mm&r=g)
                                    
                                    Steffen
                                    
                                    Ich weiß nicht was ich falsch mache.  
                                    Hab auch das ganze System neu aufgesetzt.  
                                    Photobooth hab ich die 2.1.0-alpha drauf.  
                                    Kamera kann ich über localhost:8081 aufrufen im Browser kommt Frage nach Berechtigung aber es passiert nichts. Bleibt weiß :(
                                    
                                    30\. Nov 2019 [Antworten](#)
                                    
                                    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                                        
                                        Andi
                                        
                                        Reden wir noch über die Raspi Cam oder Webcam?  
                                        Im FAQ des Wiki ist beschrieben wie man einen Livestream also background laufen lassen kann.  
                                          
                                        Beste Grüße  
                                          
                                        Andi
                                        
                                        04\. Dec 2019 [Antworten](#)
                                        
                                        *   ![](https://www.gravatar.com/avatar/fd975d2d42f3fc5ffd44be67ba4f08e2?s=75&d=mm&r=g)
                                            
                                            Steffen
                                            
                                            Kamera ist eine Eos 1300d verbaut.  
                                            Für den Livestream ist eine Raspberry Pi V2.1, 8 MP 1080P Kamera-Modul verbaut.
                                            
                                            05\. Dec 2019 [Antworten](#)
                                            
                                            *   ![](https://www.gravatar.com/avatar/fd975d2d42f3fc5ffd44be67ba4f08e2?s=75&d=mm&r=g)
                                                
                                                Steffen
                                                
                                                Ich habs. Problem lag an Motion. Dieses war installiert und hat den Zugriff verhindert. Läuft jetzt Danke für die Mühe.
                                                
                                                08\. Dec 2019 [Antworten](#)
                                                
                                            
                                            *   ![](https://www.gravatar.com/avatar/fd975d2d42f3fc5ffd44be67ba4f08e2?s=75&d=mm&r=g)
                                                
                                                Steffen
                                                
                                                Jetzt bin ich trotzdem verwirrt. Wenn ich jetzt über 127.0.0.1 aufrufe geht zwar LiveView aber der QR-Code funktioniert nicht mehr da ja der pi eine andere ip hat. Router geht aber nicht auf dieses IP-Bereicht einzustellen. Bin am verzweifeln...
                                                
                                                08\. Dec 2019 [Antworten](#)
                                                

*   ![](https://www.gravatar.com/avatar/41e41e82433b9cf5956891d12a485834?s=75&d=mm&r=g)
    
    Maik
    
    Hallo,  
    Klasse Projekt. Genau so was hab ich gesucht. Danke dafür.
    
    01\. Nov 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/41e41e82433b9cf5956891d12a485834?s=75&d=mm&r=g)
        
        Maik
        
        Kurze Frage wieso wird nicht immer beim anzeigen des QR-Codes der Text angezeigt mit welchem Wlan man sich verbinden muss ? Und wie bzw wo kann man den Namen des Wlan anpassen ?
        
        14\. Nov 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Wird nur in der Galerie mit angezeigt beim QR, nicht direkt nach dem schiessen des Bildes.  
            resources/lang/de.js zum Anpassen bearbeiten ('qrHelp': 'Um das Bild auf dein Handy zu laden, verbinde dich mit dem WLAN photobooth',)
            
            17\. Nov 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/41e41e82433b9cf5956891d12a485834?s=75&d=mm&r=g)
                
                Maik
                
                Sehr gut danke.  
                jetzt hab ich noch eine Frage.  
                Der Link leitet mich über localhost zum Bild. Kann man Localhost durch eine feste IP ersetzen ? Wenn ja wo?
                
                18\. Nov 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                    
                    Andi
                    
                    Einfach die Booth über die IP-Adresse aufrufen anstelle von "localhost"
                    
                    19\. Nov 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/e48f3c82032e77172062f27175260320?s=75&d=mm&r=g)
    
    rainer.w1989@gmail.com
    
    Richtig dickes Lob für das Projekt! Ist FAST genau das was ich gesucht habe! Danke hierfür. Werd das bei Zeiten mal nachbasteln - bis August hab ich ja noch ein wenig Zeit :D  
    Wenn ich das richtig verstanden habe werden die Bilder einfach in die ganz normale Galerie abgespeichert? Würde die Photobox noch gerne um einen Polaroiddrucker erweitern wo sich die Gäste dann die Fotos sofort ausdrucken können. Das sollte ja eigentlich einfach umzusetzen sein.  
      
    lg Rainer
    
    28\. Oct 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hallo Rainer,  
          
        Die Bilder sind alle im "data" Ordner der Photobooth Webseite zu finden. Es besteht die Möglichkeit Bilder auch auszudrucken, hierfür musst du nur den Befehl im Zweifelsfall anpassen, geht aber im Admin Panel.  
          
        Beste Grüße  
          
        Andi
        
        28\. Oct 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e48f3c82032e77172062f27175260320?s=75&d=mm&r=g)
            
            Rainer
            
            Hi Andi,  
            hab mich schon überall an und für sich zurecht gefunden.  
            Das einzige Problem was ich noch habe ist der Ausdruck. Habe CUPS installiert und über die CLI Drucken funktioniert auch.  
            In der confg.inc.php hab ich das Drrucken auch aktiviert und die Zeile bearbeitet.  
            In meinem Fall:  
            $config\['print'\]\['cmd'\] = 'sudo lp -d <dein CUPS-Drucker> -o landscape -o fit-to-page %s'  
            jedoch wird nichts ausgedruckt. In der CLI kann ich das Foto ganz normal drucken.  
              
            Weißt du da vielleicht was falsch sein könnte?  
              
            lg
            
            09\. Nov 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/e48f3c82032e77172062f27175260320?s=75&d=mm&r=g)
            
            Rainer
            
            Ok habe den Fehler gefunden - in der config.inc.php war die Zeile zwar richtig eingetragen aber im Admin-Panel fehlte beim Befehl der Ausschnitt "-d MeinCUPSDrucker"  
            Hab den Befehl im Admin Panel korrigiert und das Drucken funktioniert jetzt auch.  
              
            Nochmal vielen Dank für das Projekt ist echt klasse!!!
            
            09\. Nov 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/34daa8dc68df4f056e2be4f3c2526e20?s=75&d=mm&r=g)
    
    Eric
    
    Hallo,  
    kann man beim Greenscreen auch vorher ein Bild festlegen ?  
    Damit man zum Beispiel auf einer Feier immer den gleichen Hintergrund hat.  
      
    Vorab schon vielen Dank ;)
    
    25\. Oct 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hey Eric, zur Zeit nicht. Aber Chromakeying soll im ganzen in Zukunft etwas umgearbeitet werden.  
          
        Beste Grüße  
          
        Andi
        
        26\. Oct 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/92cebef20ee69c800ca179b32d8b14b4?s=75&d=mm&r=g)
    
    Thomas
    
    Hallo,  
    erstmal ein dickes Lob an allen Entwicklern!  
    Ich habe mir die Box ebenfalls aufgebaut mit einem Raspberry Pi 4. Habe jedoch noch ein Problem mit dem ich nicht weiterkomme... Ich bekomme weder der Eingabe per Tastatur (direkt am Pi angeschlossen), noch per Eingangspin 24 ein Photo ausgelöst. Auf der Admin-Seite habe ich natürlich die "13" eingetragen. Habe schon echt lange probiert und die Anleitung genau befolgt. Kann mir jemand weiterhelfen?  
    Gruß Thomas
    
    23\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/3b91572e9be92dee6e0f0e5f47ec30b3?s=75&d=mm&r=g)
    
    Maddin
    
    Hi zusammen echt tolles Projekt funktioniert auch soweit alles super meine frage ist es möglich einzelne Filter zu deaktivieren ? Habe bei dem Filter blur und bei einem der sepia Filter das Problem das die Rechenzeit die timeout zeit überschreitet alle anderen Filter funktionieren ohne Probleme  
    Gruß Maddin
    
    23\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/93da978300664df1b29b84bed7ac23c9?s=75&d=mm&r=g)
    
    Nico
    
    Hallo  
    Habe da zwei Problem nachdem ein Foto gemacht wurde wird es nicht in der Galerie angezeigt?  
    Und wenn ein Filter ausgewählt wurde wird zwar ein Foto gemacht aber es steht die ganze Zeit Foto wird verarbeitet und es passiert nichts mehr  
    Kannst du mir helfen  
      
    Mit freundlichen Grüßen  
    Nico
    
    09\. Oct 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/92cebef20ee69c800ca179b32d8b14b4?s=75&d=mm&r=g)
        
        Thomas
        
        Hallo,  
        bei mir lag es an einer zu langsamen Speicherkarte im Raspberry Pi.  
          
        MfG  
        Thomas
        
        23\. Oct 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo!  
      
    Wow. Wirklich tolle Verbesserungen in der aktuellen Version!  
    Eine Frage hätte ich da jedoch noch.  
    Ist es möglich Einfluss auf die Einstellungen von Cheese zu nehmen? Was mich etwas stört sind die Einstellungen der Helligkeit des Vorschaubildes. Was die Auflösung angeht würde ich in Zukunft auf den RPi 4 aufrüsten und der sollte ja auch eine höhere Auflösung gut darstellen können.  
      
    Gruß  
      
    Dirk
    
    03\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2bf8eff17442a69cbd22c61b07d0e6ba?s=75&d=mm&r=g)
    
    Marcus L
    
    Hallo zusammen! Zunächst mal vielen Dank @Andre - wirklich ein tolles Projekt.  
      
    Ich habe, wie viele andere auch, einzig ein LiveView-Problem, und da die Kommentare hier teilweise schon recht alt sind, wollte ich fragen, ob hier schon jemand Erfolg mit einem iPad und aktueller iPadOS-Version (13.1 oder größer) gehabt hat.  
    Bei mir ging der LiveView mittels HTTPS (Anleitung für das Erstellen eines eigenen Zertifikats laut Internet verwendet), da anstonsten überhaupt keine Abfrage kam, allerdings war das Problem, dass er bei jeder Auslösung nach dem Kamerazugriff gefragt hatte.  
    Mit der neuen iPadOS-Version lässt sich dieser Zugriff dauerhaft erlauben (!nice!), leider wird mir der Kamerastream nun nicht mehr angezeigt, seitdem ich die neueste Version von Photobooth in Kombination mit der neuesten iPadOS-Version verwende?! Ich bekomme den Fehler einfach nicht raus... Hat hier zufällig jemand ähnliche Erfahrungen gemacht?  
      
    Liebe Grüße,  
    Marcus
    
    01\. Oct 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hallo Marcus,  
          
        Schau Mal hier vorbei und hinterlasse eine Rückmeldung ob's geht oder nicht geht mit der Änderung:  
        https://github.com/andreknieriem/photobooth/issues/87  
          
        Beste Grüße  
          
        Andi  
          
        
        02\. Oct 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Hallo Marcus,  
              
            die Änderungen sind nun im Code, die Livepreview sollte nun wieder gehen (per localhost aufrufen und/oder 127.0.0.1).  
              
            Beste Grüße  
              
            Andi
            
            03\. Oct 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/684c2ad8237fc1d67e9c33a7fb272c20?s=75&d=mm&r=g)
    
    Markus
    
    Hallo,  
    ich find den Photo Booth echt klasse und wollte es gleich mal versuchen für meinen Geburtstag. mein problem ist aber, ich versuche schon seit 3 Tagen Photo Booth auf meinen Raspberry zu bringen. Ich bekomme es einfach nicht zum laufen, habe alles so wie in der Anleitung steht gemacht. Wenn es dann geht macht er nur ein Bild und dann nichts mehr, Filter wenn ich auswähle macht er auch kein Bild mehr.  
      
    kann mir da vielleicht wer weiter helfen?  
      
    lg Markus
    
    30\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hallo Markus,  
        Ein ähnliches Problem hatte ein User neulich auf Windows, die Kameraeinstellungen mussten geändert werden (in dem Fall gab es 2 Speicherkarten, auf jpeg only eingestellt ging es dann).  
          
        Beste Grüße  
          
        Andi
        
        02\. Oct 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/58b739d5d3c817e6fa3ad52584bbad46?s=75&d=mm&r=g)
    
    Wolfgang
    
    Morgen :)  
    Live View bereitet mir Kopfzerbrechen, an sich ne super Sache mit Webcam oder PI Cam..  
    Aaaaber, es passt in der Regel ja nicht der Winkel der PI Cam mit den Einstellungen der eigentlichen Kamera, es sollte halt genau das Abgebildet werden was man auch auf dem Display zu sehen bekommt..  
    Also Sprich bei einem Gruppenfoto quetscht sich noch ein Gast aufs Bild, dieser ist dann aber auf dem Bild nicht mehr zu sehen.. Ich hoffe ihr versteht was ich meine, am besten wäre halt eine Live Ansicht iwie von der Kamera zu bekommen.. Das geht wohl nicht? Zumindest mit der Canon 2000D? Also ich finde nichts dazu..
    
    30\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Wolfgang,  
        das war auch der Grund, weshalb ich damals bei der ersten Version keine Live-View eingebaut habe, da die Vorschau nicht dem entspricht, was die Kamera später aufnimmt. Leider bekommt man den Live-Stream der Kamera nicht heraus. Das habe ich lange probiert. Mit einer Pi-Cam oder der Tablet-Kamera ist die einzige Möglichkeit. Man könnte jetzt den Zoom der Kamera der Live-Kamera angleichen um so zumindest etwas ähnlichere Ergebnisse zu erzielen.  
        Grüße André
        
        30\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/3cc3e0cb7b8afb7173da3f4a16efeff7?s=75&d=mm&r=g)
            
            Christian
            
              
            Hallo Andre,  
              
            Über gphoto2 kann man doch auch Videos aufnehmen. "--capture-movie SECONDS". Kann man die Ausgabe nicht als Stream übergeben und im Browser anzeigen?
            
            30\. Sep 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/58b739d5d3c817e6fa3ad52584bbad46?s=75&d=mm&r=g)
            
            Wolfgang
            
            Vielen Dank für die Rückmeldung..  
            Mit solch einer Antwort habe ich fast gerechnet :)  
            Ok wäre ja noch wenn man den Zoom der PI, Webcam oder was auch immer, der Kamera anpassen könnte, und nicht andersrum, das ist so wohl aber nicht möglich?
            
            30\. Sep 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/bce56f9ebc80ee680f2942829a3b498b?s=75&d=mm&r=g)
            
            Gerrit
            
            Wir haben uns für das Problem mit dem falschen Winkel überlegt, die Picam in den Sucher der Spiegelreflexkamera zu setzen. Somit hat man genau die perfekte Position
            
            05\. Oct 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/3141ae08d327112e5fb7475b3db8b28f?s=75&d=mm&r=g)
    
    Jessica
    
    Hallo Leute,  
    Ihr macht alle klasse Arbeit, aber warum habt Ihr die PI Came Vorschau entfernt???  
    Also die Mobile Ansicht fehlt jetzt. Oder hängt das nicht zusammen?!  
      
    Danke und hoffe auf eine Antwort :-)
    
    29\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hallo Jessica,  
        ein Fix für das Problem wird gerade getestet, hat mit der mobilen Ansicht nichts zu tun.  
        Die Option ist mittlerweile überflüssig dank responsive Theme von Klaus.  
          
        Schau gerne Mal in den Issues auf GitHub vorbei, da findest du den möglichen fix.  
          
        Beste Grüße  
          
        Andi
        
        02\. Oct 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/9879387aa43aaec32c126b62931b520e?s=75&d=mm&r=g)
    
    Kosta
    
    Hallo Leute,  
    alles funktioniert genau so wie es soll. Aber ein problem habe ich dennoch, das versenden der e-mails funktioniert nicht. Bekomme jedesmal eine Meldung das ich die GitHub Seite besuchen soll mit Troubleshooting. Aber da versteh ich nur Bahnhof, kann mir da eine erklären wie ich das beheben kann?!  
      
    Danke schön
    
    25\. Sep 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/fc8a2f80001192f235847c6d5ecda56a?s=75&d=mm&r=g)
    
    Peter
    
    Hallo André,  
    Deine PhotoBooth ist eine schöne Sache. Bei mir läuft jetzt alles:  
    \- Picam  
    \- diverse Canon Kameras  
    \- Ausdruck auf Canon SELPHY CP910  
      
    Bitte den Wunschzettel-Zähler für "Ausdruck gestartet, bitte warten ..." für mich um 1 erhöhen.  
    Bei mir war der Ausdruck auf dem CP910 verzerrt. Der hat ein Papierformat von 100x148 mm, die Fotos sind aber im 4:3 Format. Ich habe mir ein bash-Script fürs Resizing und Drucker erstellt. Es wäre aber schön, wenn der Name des Drucker und height/width des Papiers in der Config angegeben und das Foto vor dem Ausdruck entsprechend zugeschnitten werden könnte.  
      
    Außerdem auf dem Wunschzettel: In der config direkt auch (aoskommentierte) Beispiel für die Picam einfügen.  
      
    Ciao, Peter
    
    22\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hallo Peter,  
          
        Die Print confirmation ist im aktuellen Source schon drin.  
        Teil doch dein batch script gerne über GitHub, dann schaue ich mal was ich für dich anpassen kann.  
          
        Bezüglich picamera:  
        Mein Plan ist eine Config zum einschalten und automatischer Übernahme der takepic cmd. Dauert nur ein paar Tage.  
          
        Beste Grüsse  
          
        Andi
        
        26\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/fc8a2f80001192f235847c6d5ecda56a?s=75&d=mm&r=g)
            
            Peter
            
            Hallo Andi,  
            ja, nach einer Aktualisierung habe auch ich jetzt Meldungen, dass gedruckt wird. Ist das immer eingeschaltet oder muss die Zeile  
            $config\['print'\]\['msg'\] = '';  
            angepasst werden?  
              
            Resizing des Ausdrucks  
            \--------------------------  
            Vorbereitung:  
            apt-get update  
            apt-get install imagemagick  
              
            In der config.inc.php steht bei mir:  
            $config\['print'\]\['cmd'\] = '/var/www/html/prep\_and\_print.sh %s';  
              
            Das Script /var/www/html/prep\_and\_print.sh sieht so aus:  
            \----------------------------------------------  
            #!/bin/bash  
              
            \# anzupassende Parameter je nach Drucker  
            printer\_name="Canon\_CP910"  
            printer\_max\_width=1868  
            printer\_max\_height=1261  
              
            \# Übernahme von Parametern  
            foto=$1  
              
            rm images/print.jpg  
            mydate=\`date\`  
            echo "$mydate Printing file $foto" >> /tmp/print.log  
              
            \# Cropping berechnen  
            wid\_hig=\`identify $foto\`  
            wk1="${wid\_hig##\*JPEG }"  
            wk2="${wk1%% \*}"  
            is\_wid="${wk2%%x\*}"  
            is\_hig="${wk2##\*x}"  
              
            let is\_ratio=1000\*$is\_wid/$is\_hig  
            let tgt\_ratio=1000\*$printer\_max\_width/$printer\_max\_height  
              
            echo $is\_ratio $tgt\_ratio  
              
            if \[ $is\_ratio -lt $tgt\_ratio \]  
            then  
            \# crop height  
            tgt\_width=$is\_wid  
            let tgt\_height=1000\*$is\_wid/$tgt\_ratio  
            let y\_crop=($is\_hig-$tgt\_height)/2  
            x\_crop=0  
            echo $tgt\_width $tgt\_height $x\_crop $y\_crop  
            else  
            \# crop width  
            let tgt\_width=$is\_hig\*$tgt\_ratio/1000  
            tgt\_height=$is\_hig  
            y\_crop=0  
            let x\_crop=($is\_wid-$tgt\_width)/2  
            echo $tgt\_width $tgt\_height $x\_crop $y\_crop >> /tmp/print.log  
            fi  
              
            #convert -crop 2592x1750+0+97 ee764c4d27a32725e79c2fc796e9806e.jpg images/print.jpg  
            convert -crop ${tgt\_width}x${tgt\_height}+$x\_crop+$y\_crop $foto images/print.jpg  
              
            sudo lp -d $printer\_name -o landscape -o fit-to-page images/print.jpg  
            \----------------------------------------------  
              
            Das war's.  
            VG Peter
            
            26\. Sep 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/1d6f4caa1eeab0777c9079cc1c55f12a?s=75&d=mm&r=g)
    
    David
    
    Hallo miteinander.  
    Seit ich gestern abend die neue Version aufgespielt habe (Windows 10 Tablet), funktioniert keine Auslösung mehr, weder Einzelfoto noch Collage. Das erste Foto klappt, danach nichts mehr. Es kommt eine Fehlermeldung, dann aber springt es zu "wird bearbeitet". Einziger Error in den Logs ist, dass er irgendeine Font nicht findet/zugreifen darf. Bin bisschen am verzweifeln, da ich die Box eigentlich am Samstag einsetzen will...
    
    19\. Sep 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5900aa45413f5a74ecdad122671b68d7?s=75&d=mm&r=g)
    
    Kai
    
    Hallo zusammen,  
      
    erst einmal vielen Dank an alle, die dieses Projekt vorantreiben (vor allem natürlich vielen Dank André).  
      
    Bisher lief bei mir immer alles tadellos. Seitdem es das Collage-Feature gibt, habe ich allerdings Probleme. Die Funktion mit den Einzelbilder ist davon nicht betroffen hier ist der Ablauf ganz normal (Button drücken --> Countdown --> Kamera wird ausgelöst --> Bild wird angezeigt).  
      
    Allerdings funktioniert die Collage nicht. Hier drücke ich auf den Button und zu beginn ist alles in Ordnung. Es werden 4 Bilder gemacht und auch im "tmp" Ordner abgelegt. Auf dem Display steht auch Collage wird bearbeitet. Nach einer gewissen Zeit kommt dann die Error-Message "Es ist ein Fehler aufgetreten. Bitte versuche es erneut." mit dem Button "Seite neu laden". Manchmal wird die Collage trotzdem erzeugt und im "img" Ordner gespeichert. Allerdings nur manchmal. Ich habe die Vermutung, dass es sich hier um ein Rechteproblem handelt. Ich habe die Rechte schon neu gesetzt und trotzdem steht bei den Bilder nachher root-User und nicht Webserver-User (www-data) bzw. pi.  
      
    Kann es sein, dass daher die Collage nicht verarbeitet werden kann? Wenn ja wie behebe ich dieses Problem?
    
    19\. Sep 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/6e05c1421d4c9ecf75c760029a28c7b9?s=75&d=mm&r=g)
    
    Marvin
    
    Hallo,  
      
    ich habe folgendes Problem.  
    Meine Bilder werden richtig erstellt aber die Vorschau sowie die Galerie zeigen "Platzhalter"(?) Bilder an. Sie sehen aus die was Bild.  
    photobooth/resources/img/bg.jpg  
      
    Ich habe habe mir die Ordner auf dem Pi angeschaut. Im Images ordner liegen die richtigen Bilder so wie sie sein sollte. Im thumbs ordner werden Bilder erstellt aber diese sind wie gesagt Platzhalter. Die Rechte sind soweit ich das sehen kann auch korrekt gesetzt.  
    In der Textdatei sind die Namen auch richtig aufgelistet.  
      
      
    Könnt ihr mir dort weiterhelfen?
    
    14\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        Hey Marvin,  
        eine logische Erklärung habe ich dafür nicht.  
        Hast du an der takePic.php etwas geändert?  
          
        cd /var/www/html  
        git config core.fileMode false  
        sudo git config core.fileMode false  
        git diff  
          
        Das spuckt dir aus was am Source geändert wurde.  
          
        Im Zweifelsfall einfach den aktuellen Source neu clonen von GitHub.  
          
        Beste Grüße  
          
        Andi
        
        16\. Sep 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3aba5848a44c5def43085d4c12edf5d0?s=75&d=mm&r=g)
    
    Christian
    
    Hallo zusammen!  
    Ich scheitere schon Tage an den externen Schalter um das Foto auszulösen. Mit der Tastatur funktionert das Auslösen (Alt+P) Taste aber nicht mit dem GPIO 24.  
    Ich habe schon folgendes getestet  
    #!/usr/bin/python3  
    import RPi.GPIO as GPIO  
    import time  
      
    GPIO.setmode(GPIO.BCM) #Art der Pin-Nummerierung  
      
    GPIO.setup(24, GPIO.IN) #Pin24 als digitalen Eingang festlegen  
      
    try:  
    while True: # Endlosschleife, mit Strg-C beenden  
    input = GPIO.input(24) # Eingang einlesen  
    print("Zustand: " + str(input)) #Ausgabe auf Bildschirm  
    time.sleep (0.2) # kurze Pause  
    except KeyboardInterrupt:  
    GPIO.cleanup()  
      
    Das funktioniert auch aber wenn ich das Python Button.py starte kommt diese Meldung:  
    Traceback (most recent call last):  
    File "button.py", line 6, in <module>  
    import uinput  
    ImportError: No module named uinput  
      
    Bitte um Hilfestellung
    
    12\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        pip3 install uinput  
        sudo reboot  
          
        
        19\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c454ddcdbcb69b6ed442d47ff1cd5f38?s=75&d=mm&r=g)
            
            [Stoffl](www.stoffl.info)
            
            Hallo, ich habe irgendwie auch probleme mit dem button, wenn ich die Date button.py ausführe, den Button drücke bekomme ich das zurück:  
              
            pi@raspberrypi:/var/www/html $ python button.py  
            Traceback (most recent call last):  
            File "button.py", line 17, in <module>  
            with uinput.Device(\[uinput.KEY\_ENTER\]) as device:  
            File "/usr/local/lib/python2.7/dist-packages/uinput/\_\_init\_\_.py", line 178, in \_\_init\_\_  
            self.\_\_uinput\_fd = fd or fdopen()  
            File "/usr/local/lib/python2.7/dist-packages/uinput/\_\_init\_\_.py", line 84, in fdopen  
            return \_libsuinput.suinput\_open()  
            File "/usr/local/lib/python2.7/dist-packages/uinput/\_\_init\_\_.py", line 70, in \_open\_error\_handler  
            raise OSError(code, msg)  
            OSError: \[Errno 13\] Failed to open the uinput device: Permission denied  
              
              
            was mache ich falsch?  
              
            Mit dem Enter, funtkioniert die webseite perfekt.  
              
            danke
            
            16\. Feb 2020 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c454ddcdbcb69b6ed442d47ff1cd5f38?s=75&d=mm&r=g)
                
                stoffl
                
                Kurzes update:  
                wenn ich die echo Kommentare in der Datei button.py auskommentiere, dann erkennt der Script, dass ich den "Hardware" Button drücke. in der while schleife ;), genau nur 1x - nicht öfters, aber es passiert noch nichts in der Weboberfläche. Somit muss der GPIO 24 stimmen und steuere nicht den falschen GPIO an oder? :(  
                Eventuell hat noch jemand eine Idee, woran das liegen könnte. Wäre richtig cool, da wir den Ball demnächst haben (worry) :)  
                  
                danke  
                Stoffl
                
                17\. Feb 2020 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/1d6f4caa1eeab0777c9079cc1c55f12a?s=75&d=mm&r=g)
    
    David
    
    Hallo liebe Photobooth-Bastler,  
    erst einmal vielen Dank für die kontinuierliche Arbeit an diesem tollen Projekt! Ich versuche gerade, die neue Version mit den wunderbaren neuen Funktionen auf einem Windows-Tablet mit einer angeschlossenen DSLR zum laufen zu bekommen.  
    Wo ich gerade hänge:  
    Die Kamera löst aus (sowohl bei Collage (4x) und Einzelfoto).  
    Dann erscheint der "Bild wird verarbeitet"-Screen und dreht sich leider unendlich.  
    Die Konsole zeigt an:  
    "SyntaxError: JSON.parse unexpected character at line 1 column 1 of the JSON data. Verweis auf resources/js/core.js: 147, 21 (das = Zeichen, glaube ich).  
    Das zweite Problem: Wenn ich dann aktualisiere und in die Galerie gehe, werden die Bilder angezeigt, allerdings erscheint eine Fehlermeldung über jedem Bild: "Undefined variable: date in \[...\]index.php on line 166"  
    Weiß jemand, ob man auch die eingebaute Webcam des Tablets für das Liveview nutzen kann?  
    Könnt ihr mir da weiterhelfen? Ich würde das ganze sehr gern nächste Woche bei einer Hochzeit einsetzen :)  
    Gruß  
    David
    
    12\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
        
        Andi
        
        In der insex.php Line 153:  
        $date;  
          
        Bitte in  
        $date = false;  
          
        Ändern. Könnte dein 2. Problem lösen.  
          
        Für dein erstes Problem vermute ich die  
        $config\['take\_picture'\]\['msg'\]  
        Passt nicht.
        
        13\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1d6f4caa1eeab0777c9079cc1c55f12a?s=75&d=mm&r=g)
            
            David
            
            Ah, dein Kommentar war noch nicht sichtbar. Danke!  
            Das date war schon auf false. Jedenfalls funktioniert dieser Teil jetzt mit der neuen Version von Github.  
            Wegen dem Auslösen: Bei Einzelfotos klappt jetzt alles, die Collage hängt noch.  
            Noch Ideen?
            
            14\. Sep 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                
                Andi
                
                Funktioniert es im devmode? (Über Admin Panel aktivieren, dann macht er aus dem BG.jpg einfach eine Kollage).  
                  
                Wenn ja:  
                Im console log des Browsers was sichtbar?  
                Mit F12 Mal in der console schauen ob er einen Fehler ausspuckt.
                
                15\. Sep 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/1d6f4caa1eeab0777c9079cc1c55f12a?s=75&d=mm&r=g)
                    
                    David
                    
                    Im Devmode funktioniert die Collage. Sonst dreht er unendlich "es wird bearbeitet", es kommt keine Errormsg.  
                    In der Console zeigt er dann den SyntaxError: JSON.parse unexpected character at line 1 column 1 of the JSON data an und verweist auf resources/js/core.js line 147  
                    Kann es sein, dass die Bilder irgendwie falsch benannt/generiert werden oder es einfach zu lange braucht? Ich habe Bildfilter, Chroma, Date, usw. testweise ausgeschaltet.
                    
                    19\. Sep 2019 [Antworten](#)
                    
    
    *   ![](https://www.gravatar.com/avatar/1d6f4caa1eeab0777c9079cc1c55f12a?s=75&d=mm&r=g)
        
        David
        
        Kann niemand helfen? Ich würde mich sehr freuen!
        
        14\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Hey David,  
            habe zumindest das eine Problem behoben, ist auf GitHub André mit drin.  
              
            Manchmal dauert es einen Moment bis André die Kommentare frei gibt, daher erscheinen Rückmeldung/Antworten teils zeitversetzt. Einfach ein bisschen Geduld.  
            Im Zweifelsfall auch über die GitHub Issues des Projektes nach Hilfe fragen.  
            Bezüglich der Bildaufname: einfach über den Terminal per Hand was aufnehmen und schauen welche Rückmeldung ausgespuckt wird im Terminal. Entsprechend dann die $config\['take\_picture'\]\['msg'\] anpassen.  
              
            Beste Grüße  
              
            Andi
            
            14\. Sep 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo mal wieder.  
      
    Ich bekomme immer wieder Anfragen zu Rahmen oder Wasserzeichen im Bild.  
    Die interne Verarbeitung läuft ja über Imagemagick. Hat jemand so etwas schon hingekriegt? Und wen ja, wie?  
      
    
    05\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        HAllo Dirk,  
          
        ja das ist eine Verbesserung und das wurde schon mal von mir rein gebastelt.  
        Ich habe meine SOurcen, wie die vom Greenscreen zur verfügunggestellt. Es ist bei den Entwicklern auf der todo-List.  
          
        Hier kannst du mein gebastel schon mal runterladen.....  
          
        unter http://musch.info/rahmen.zip findest du die Dateien.  
        Die Zip -Datei entpackst du direkt in das Photobooth Verzeichnis. Am Besten die vorhandene print.php umbenennen. Dann ist das ganze eigentlich einfach. Die rahmen.png wird beim Ausdrucken über das bild gelegt.  
        Also diese mit deiner Vorlage ersetzen. Als Template liegt eine rahmen\_leer.png bei.  
        Wenn man keinen Rahmen möchte kann man auch diese umbennen in Rahmen....  
          
        Ich denke das Prinzip ist klar.  
        Gruß  
        Steffen
        
        06\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
            
            Dirk
            
            Ok. Nette Bastelei. Ich habe hier ein Wasserzeichen vom Mieter. Das würde ich gerne an einem Punkt im Bild platzieren.  
              
            Kannst Du mir eine Schritt für Schritt Anleitung geben?  
              
            Danke im Voraus!
            
            07\. Sep 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
            
            Dirk
            
            Habe mir die modifizierte print.php angeschaut.  
            Ich habe bei mir filename\_print in filename\_source umbenannt, damit er den QR Code nicht aufs Bild druckt. Das müsste ich ja auch wieder anpassen.  
            Wenn Du magst, kannst Du mir per mail@ld-foto.de eine Nachricht zukommen lassen.  
              
            Gruß
            
            07\. Sep 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Dirk,  
                  
                Die Rahmen Funktion ist heute eingebaut worden......  
                  
                Danke an Andi  
                  
                Gruß Steffen
                
                08\. Sep 2019 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Dirk,  
                  
                Die Rahmen Funktion ist heute eingebaut worden......  
                  
                Danke an Andi  
                  
                Gruß Steffen
                
                08\. Sep 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
                    
                    Dirk
                    
                    Ok. Ich sehe die Veränderung, dass der QR Code jetzt optional beim Drucken ist. Das löst eines meiner Probleme.  
                      
                    Aber wie das jetzt mit dem "Rahmen" funktionieren soll habe ich leider noch nicht verstanden.
                    
                    09\. Sep 2019 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                        
                        Steffen
                        
                        Hallo Dirk,  
                        im offiziellen Release von Andre ist die Rahmenfunktion jetzt auch drin. In den Kommentaren ist auch erklärt, wie es Funktioniert.  
                          
                        Du musst in den Resources\\img\\Frame Ordner deinen Rahmen rein stellen. Am besten das vorhandenes Bild als Vorlage nehmen und editieren. Da es transparent sein muss.  
                        Dann wird bein Drucken und nur beim Drucken das Bild mit Rahmen gedruckt. PS: Der QR-Code muss natürlich deaktiviert sein, Der Rahmen wird auf keinem original Bild bespeichert.  
                        Eventuell findest du im print Ordner die Bilder mit Rahmen.  
                        Gruß  
                        Steffen
                        
                        10\. Sep 2019 [Antworten](#)
                        
        
        *   ![](https://www.gravatar.com/avatar/79d0f38135a25f892d6673206f6c167e?s=75&d=mm&r=g)
            
            Manuel Eichner
            
            Wie läuft das bei dem greenscreen ab  
            Muss ich da ein Bild vorher einstellen oder kann ich das in ner Auswahl am Bildschirm für jedes Bild separat einstellen?  
              
            Haben ne LAN und wir würden gerne ein paar nerdige Bilder zur Auswahl stellen
            
            10\. Sep 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Manuel,  
                du kannst den Hintergrund für jedes bild separat auswählen.  
                Gruß  
                Steffen
                
                10\. Sep 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/79d0f38135a25f892d6673206f6c167e?s=75&d=mm&r=g)
                    
                    Manuel
                    
                    Sorry mein projekt hat jetzt bisschen pausieren müssen aber ist noch up to date  
                      
                    kann mir jemand ne anleitung schicken wie ich das ganze einstelle
                    
                    18\. Dec 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/7ff169f126623f5d0b86417e444660f6?s=75&d=mm&r=g)
    
    Chris
    
    Hallo! Vielen Dank schon einmal für die Software. Habe soweit alles hinbekommen. Leider schaffe ich es nicht den Live-View zu aktivieren (auf true steht er). Sowohl die iPAD Kamer als auch eine Raspberry-Kamera bekomme ich nicht angezeigt (motion installiert, Zugriff über Port 8081 funktioniert).  
      
    Hat jemand eine Idee was ich noch machen kann?  
      
    Vielen Dank!
    
    03\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo Chris,  
          
        Es kann sein, wenn Motion aktiviert ist, das die live Vorschau nicht funktioniert.  
          
        Eine weitere Möglichkeit ist, das im admin Ordner eine config. Json existiert, dann wird die config. Php nicht gelesen. Auch wenn eine my. Config. Php existiert kann das stören. Bitte mal alle config Möglichkeiten prüfen.  
          
        Gruß Steffen
        
        04\. Sep 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3ed6d5eb06b7f6b4319acfbf966e5c73?s=75&d=mm&r=g)
    
    Philip
    
    Hallo zusammen.  
    Ich habe es nun soweit am laufen, jedoch werden keine Fotos in der Galerie angezeigt.  
    Die Fotos sind im Ordner "images" abgelegt. Und Galerie ist im Adminmenü aktiviert.  
    Weiß da vielleicht jemand einen Rat, woran es liegen kann?  
      
    Und kann ich die Raspeberry Cam zusätzlich laufen lassen für eine Live View Ansicht?  
      
    Danke für die hilfe
    
    02\. Sep 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Philip,  
        sind im Oder Thumbs auch die Bilder verkleinert angelegt? und ist die Data.txt gefüllt. Eventuell musst du die berechtigungen noch mal setzen, wenn da was fehlt.  
          
        Get the Photobooth source and set perms  
          
          
        sudo mkdir -p /var/www/html/images  
        sudo mkdir -p /var/www/html/keying  
        sudo mkdir -p /var/www/html/print  
        sudo mkdir -p /var/www/html/qrcodes  
        sudo mkdir -p /var/www/html/thumbs  
        sudo mkdir -p /var/www/html/tmp  
        sudo chown -R pi: /var/www/  
        sudo chmod -R 777 /var/www  
          
        DieRaspi Cam kannst du aktivieren, sodass die wenn eine Foto gemacht wird, eine Vorschau anzeigt.  
          
        oder du installierst motion auf dem pi und bindest den Livestream ein  
        Gruß  
        Steffen
        
        03\. Sep 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
            
            Kosta
            
            Hallo Steffan,  
            wärst du so nett mir zu sagen wo ich und wie ich motion einbinden kann für den Livestream?  
              
            Vielen dank
            
            03\. Sep 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Kosta,  
                meine Anpassungen sind leider nicht immer die optimale Lösung, das meiste bekomme ich irgendwie durch probieren hin.  
                Erst musst du Motion auf dem Raspberry Pi Installieren. Anleitungen findest du im Netz. Hab auch ein bisschen gebraucht, bis es funktioniert hat.  
                  
                Dann musst du in der index.php folgende Zeilen einfügen.  
                  
                  
                  
                :8081" seamless frameborder="0">  
                  
                  
                  
                Größe vom Fenster musst du auf deine Auflösung anpassen.  
                Ich habe alles auf einem Raspberry PIe laufen. Kein Tablet oder so dazwischen,  
                Eventuell musst du die URL noch anpassen.  
                  
                Gruß  
                Steffen
                
                04\. Sep 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                    
                    Steffen
                    
                    Der PHP Code ist nicht mit gekommen!  
                      
                    hier der Link zum Download. Wie gesagt diese Zeilen in die Index.php einfügen (an die Richtige stelle)  
                      
                    http://www.musch.info/motion.zip  
                      
                    Gruß  
                    Steffen
                    
                    04\. Sep 2019 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
                        
                        Kosta
                        
                        Hallo Steffen,  
                        dafür das ich blutiger Anfänger bin habe ich den live stream nach stunden hinbekommen. Während er Bilder macht habe ich den LiveStream, bin echt stolz auf mich.  
                        Dir möchte ich auch recht Herzlich danken für den Code und die kleine Hilfestellung mit Index.php.  
                        Vielen, vielen dank dafür, echt top.  
                          
                        Danke nochmals.
                        
                        05\. Sep 2019 [Antworten](#)
                        
        
        *   ![](https://www.gravatar.com/avatar/3ed6d5eb06b7f6b4319acfbf966e5c73?s=75&d=mm&r=g)
            
            Philip
            
            Vielen Dank.  
            Habe nun während des Timers das Livebild der Raspi Cam und Bilder werden in der Galerie angezeigt.  
            Nun noch ein Problem.  
            Wollte es mit einem Touchmonitor betreiben der direkt an den Raspi angeschlossen ist über hdmi und usb.  
            Wenn ich auf dem Raspi nun die Seite über Localhost aufrufe, zeigt er LiveView und löst auch aus, dann bekomme ich aber eine Fehlermeldung "Es ist ein Fehler aufgetreten. Bitte versuche es erneut." Wenn ich die Anwendung über die IP starte vom Ipad, Handy oder über den Raspi habe ich kein LiveView aber Kamera löst aus und Bild wird angezeigt.  
              
            Habt ihr da noch eine Lösung für mich?  
              
            Vielen Danke für die schnelle Hilfe hier.
            
            03\. Sep 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
    
    Kosta
    
    Hallo Leute, ich hätte da mal wieder eine Frage. Der Startbildschirm würde ich gerne Transparent machen, sprich da wo steht Photobooth und Webinterface. Wo kann ich das machen ??  
      
    Danke für jede Hilfe
    
    31\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2ef746ed0bbb1c2b069d7ada99049133?s=75&d=mm&r=g)
    
    [David](jurzak.photos)
    
    Huhu,  
    ich habe mal ne Frage deine Box Methode gefällt mir gut. Technisch sieht das echt sauber aus. Was mich aber interessiert ist die Übertragungszeit auf das Tablet. Ich habe mal eine Variante gebaut mit WIFI-SD Karte und einem Ipad. Das Problem dabei war dass die Übertragung der Bilder einfach zu lange gedauert hat.  
      
    Kannst du mir deshalb sagen, wie lange die Übertragung der Bilder bei dir gebraucht hat?  
      
    Besten Dank und viele Grüße!
    
    29\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        André Rinas
        
        Hallo David,  
          
        ich habe die Qualität meiner Kamera runtergestellt, dass die Bilder nur noch so 5MB groß waren und hatte einen Raspberry 2 im Einsatz. Das Ganze hat dann so zwischen 5 und 10 Sekunden gedauert bis ein Bild kam.  
        Grüße André
        
        29\. Aug 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
    
    Tobias
    
    Hallo zusammen,  
      
    auch ich betreibe die Fotobox seit einiger Zeit erfolgreich :-) Nun habe ich "MARK II" angefangen, bei der ich einiges vom Aufbau her anders gestaltet habe.  
      
    Bei meinen ersten Tests, funktionierte alles Tadellos.  
    Beim ersten Einsatz dann, funktionierte das Laden der Bilder über den QR-Code nicht mehr. Anfangs ging es, später wurden auf dem Handy nur noch ein kleiner weißer Würfel auf der Webseite angezeigt. Das Bild blieb leider aus....  
      
    Nach einem Neustart des Raspberrys funktionierte ein Bild wieder, dann ging es wieder nicht mehr...  
      
    Hat jemand eine Idee voran es liegen könnte? Ich habe keine Speicherorte verändert oder so, alles bei den Standardeinstellungen belassen.  
      
    Lieben Gruß!  
      
    Tobias
    
    29\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Ich schon wieder.  
    Mir ist ein weiteres Problem aufgefallen. Zunächst habe ich den Fehler bei Cups oder dem Druckertreiber gesucht. Es kam jedoch zu einem merkwürdigen Ereignis:  
      
    Ich habe mit der neuen Version das Problem, dass mein Drucker jedes Bild zweimal druckt. Durch Zufall habe ich auf der Adminpage entdeckt,dass in der Zeile für den Druckbefehl derselbe Befehl zum Foto machen steht. Nach einem Click auf Zurücksetzen löste nun plötzlich beim Tippen auf Drucken die Kamera aus. Allerdings auch gleich zweimal. Ulkig war dass in der config.inc.php keine Änderung an den Befehlen zu sehen war. Der Fehler mit dem doppelten Ausdruck (und der zweifachen Auslösung der Kamera) muss also irgendwo im Adminpanel zu suchen sein. Oder liege ich da falsch. Ich bin im Moment ziemlich verzweifelt, weil das Ding bis Samstag wieder einwandfrei funktionieren muss. Allerdings arbeitet der Liveview von der Raspi camera plötzlich auch nicht mehr. Er fragt mich zwar nach der Erlaubnis, zeig mir aber kein Bild an. Was ist da los?
    
    27\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
        
        Dirk
        
        Ich habe mich weiter mit dem Problem beschäftigt und komme einfach nicht weiter.  
        LiveView funktioniert wieder. Es liegt ulkigerweise am Gehäuse für die Raspi-Kamera. Sobald ich es entferne funktioniert der LiveView wieder. So weit dazu.  
          
        Ich habe ältere Versionen der Photobooth ausprobiert und habe bei allen das Problem des doppelten Drucks. Wenn ich den Druckbefehl über die Kommandozeile auslöse druckt er nur einmal. Wenn ich den Druck von einem entfernten Computer im Netzwerk auslöse druckt er nur einmal. Also habe ich versucht das Touchdisplay als Ursache asuzuschliessen. Auf der Desktopoberfläche scheint es aber einwandfrei zu funktionieren. Es wird bei einmaligem Tippen auch nur ein Klick registriert. Ich stehe kurz davor, das gesamte System neu aufzusetzen. Ich bin echt verzweifelt mittlerweile.
        
        29\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            André Rinas
            
            Hallo Dirk, das kann an einem Fehler im Javascript liegen. Vielleicht wird dort der Befehl doppelt versendet (Touchstart und Click, was manche Browser als 2 "Events" ansehen und dann meinen bei einem Touch wäre es auch gleichzeitig ein Klick und die Aktion wird doppelt ausgeführt) Ich habe leider erst wieder ab Mitte September Zeit für das Projekt. Der Andreas und der Steffen betreuen gerade das meiste. Aber du könntest in der core.js bei dir mal nach dem Print gucken und gucken ob da ein click und touchstart gleichzeitig drin steht und dann nur durch click ersetzen.
            
            29\. Aug 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
                
                Dirk
                
                Danke André, das war die Lösung!!!  
                Habe alles neu mit Buster aufgesetzt und es konnte nur irgendwie mit dem Display zu tun haben. Ich danke Dir!
                
                29\. Aug 2019 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
                
                Dirk
                
                Ich habe übrigens eine "warten html" und die entsprechenden Zeilen in die Core.js eingefügt, um eine kurze Bestätigung auf dem Bildschirm anzuzeigen.  
                  
                Wer Interesse hat...  
                Es geht bestimmt hübscher, aber es funktioniert.
                
                29\. Aug 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
                    
                    Anderas
                    
                    Hey Dirk!  
                    Schick's mir gerne Mal rüber per Mail, ich schau mal ob wirs so übernehmen können.  
                    andi@unlegacy-android.org  
                      
                    Beste Grüße
                    
                    10\. Sep 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/63b581d28579e2561aef1cccdb3b3760?s=75&d=mm&r=g)
    
    Dirk v.G.
    
    Hallo,  
    die Photobox hatte am letzten Wochenende ihren erfolgreichen Einsatz anlässlich unseres Gemeindefestes.. Das Feedback war überwiegend positiv. Danke also für dieses Projekt.  
      
    Als Anmerkung bzw. Wunsch folgendes:  
    Da das Publikum durchaus durchmischt war, jüngere und ältere Gäste, Stellte sich heraus, dass bei der Klientel, die noch kein Smartphone haben oder die, die keines mehr verwenden wollen, sich die "Übergabe" der Bilder als etwas kompliziert darstellte. Ich kann, wenn ich die Funktionen richtig deute das Datum/Uhrzeit beim scrollen durch die Bilder anzeigen lassen. Wäre es auch möglich die Bilder zu indizieren und eine 3-,4-stellige Bildnummer anzeigen zu lassen? So, dass die Gäste sich nur die Bildnummer merken müssten oder in eine beiliegende Liste eintragen müssten?  
      
    Danke und Gruß  
    Dirk v.G.
    
    27\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo nochmal!  
    Die neue Version gefällt mir wirklich gut.  
    Ich habe dennoch zwei Fragen.  
    Ich habe in der print.php "filename\_print" in "filename\_source" geändert, um keinen QR Code auf dem Bild zu haben. Wie kann ich diese QR Code Prozedur im Hintergrund vollständig deaktivieren? Ich würde damit gerne Rechenzeit sparen. Außerdem fehlt mir immer noch ein Hinweis wenn man auf "Drucken" drückt. Ein Freund von mir hatte da etwas gebaut. Es wurde dann eine "warten.html" aufgerufen und auf dem Bildschirm ein Hinweis angezeigt, dass jetzt gedruckt wird. Ich habe keine Ahnung von Webdesign und würde mich über HIlfe freuen. Zum Dank sende ich ein Spende über PayPal! Gruß
    
    26\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    Dirk
    
    Wäre es möglich mit der Raspi Kamera einen Liveview auf der Startseite einzubinden? Am Besten solange der Countdown läuft.
    
    23\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
        
        Kosta
        
        Hallo Dirk,  
        bei mir geht das. Habe meine Nikon angeschlossen die kein Live Bild liefert und meine PiCam. Habe alles am grossen TV angeschlossen , wenn ich Neues Foto mache fragt es mich beim ersten Bild ob die PiCam Erlaubnis bekommt.....  
        Im PI muss sie auch aktiviert sein  
          
        Musst über dem Admin Panel frei geben .  
        http://localhost (oder IP vom PI)/admin/index.php
        
        24\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
            
            Dirk
            
            Danke für die Antwort. Wird der Stream dann automatisch auf der Webpage angezeigt? Oder wie hast Du das gelöst?
            
            25\. Aug 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Dirk,  
                Ja der Stream wird dann automatisch angezeigt.  
                Gruß  
                Steffen
                
                26\. Aug 2019 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
                
                Kosta
                
                Wenn die picam angeschlossen ist und du sie über Pi frei gegeben hast, dann wirst du beim aller ersten Foto oben rechts gefragt ob sie Zugriff erlaubt bekommt.  
                  
                Wie gesagt, in den PI Einstellungen muss aktiviert sein und über admipanel von photobooth. Mehr habe ich nicht gemacht.
                
                26\. Aug 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
                    
                    Dirk
                    
                    Hat prima geklappt!
                    
                    26\. Aug 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/e527ab7861f12468f32b69d418aef67b?s=75&d=mm&r=g)
    
    Andy
    
    Hallo,  
      
    Bei mir löst die Kamera nicht aus, der Countdown zählt herunter und dann erscheint die Meldung „Es ist ein Fehler aufgetreten, bitte versuche es erneut!“ Bin nun echt so langsam am verzweifeln... ?  
    Hilfe!  
      
    Hardware: Pi3+, Nikon D300s, D700, D800, Sony RX100M3  
      
    VG Andy
    
    23\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e086a1596b338122606138a0c0a6dc17?s=75&d=mm&r=g)
    
    Adam S
    
    Mein Deutsch ist nicht so gut, aber ich werde es in Deutsch versuchen, englischer Kommentar unten.  
    Ich habe die Box erfolgreich gebaut, es funktioniert. Vielen Dank Andre und allen anderen Contributors.  
    Ich habe eine Frage, vielleicht könnte jemand mit einem Tipp helfen.  
    Hat jemand mehrere Fotos nacheinander gemacht und ein einzelnes Foto mit mehreren Bildern darauf zusammengestellt? Ich bin nicht ein developer und konnte noch keine Lösung finden.  
      
    I have successfully built the box, it is finally working. Thank you very much Andre and all other contributors.  
    I have a question, maybe somebody could help at least with a tip.  
    Did anyone made multiple photos one after another and let the software compose one single photo with multiple pictures on it? I'm not a developer and I couldn't find a solution yet.
    
    22\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Adam,  
        Im dev Fork von Andi34 wurde diese Funtion eingebaut.  
        Gruß  
        Steffen
        
        26\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e086a1596b338122606138a0c0a6dc17?s=75&d=mm&r=g)
            
            Adam S
            
            Danke Steffen!  
            Ich werde es versuchen
            
            26\. Aug 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/7f38382783d97662a8018d87afda0cac?s=75&d=mm&r=g)
            
            Gabriela
            
            Hallo,  
            leider habe ich damit ein Problem. Meine Kamera löst 4 x aus. Dann kommt "Bild wird verarbeitet." Und dann bekomme ich die Fehlermeldung "Es ist ein Fehler aufgetreten, bitte versuche es erneut!  
            Der Ordner Image ist leer und im Ordner tmp sind zwar die Bilder, es steht aber hinter JPG jeweils -0; -1; -2; -3  
            Die Gallery ist auch leer. Vielleicht kann mir ja jemand einen Tipp geben. Mir würde es auch reichen, wenn nur ein Bild gemacht wird.  
            Vielen Dank.  
            LG
            
            26\. Aug 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Gabriela,  
                das Hört sich fast so an, als ob du den neuen Collagen Modus gewält hast.  
                Wie löst du den Vorgang aus? über Collage erstellen oder über Foto erstellen?  
                  
                Collage erstellen macht 4 Bilder  
                Foto erstellen eins. Wenn du keine Collagen haben willst, dann stelle die Option im Admin Panel aus.  
                  
                Gruß  
                Steffen
                
                27\. Aug 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/7f38382783d97662a8018d87afda0cac?s=75&d=mm&r=g)
                    
                    Gabriela
                    
                    Hallo Steffen,  
                    Danke für die schnelle Antwort.  
                    Aber es ist egal, ob der Haken bei Coulage im Admin Panel gesetzt ist oder nicht, es werden immer 4 Bilder gemacht und dann kommt der besagte Fehler.  
                    LG Gabriela
                    
                    27\. Aug 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/051e29dab65f0a9405233e99d2abe451?s=75&d=mm&r=g)
    
    Andreas Maier
    
    Pi Camera funktioniert mit folgenden Codezeilen in der config.inc.php  
    $config\['take\_picture'\]\['cmd'\] = 'sudo raspistill -n -o $(date +%s) | echo "Done"';  
      
    $config\['take\_picture'\]\['msg'\] = 'Done';  
      
    raspistill erzeugt keine Ausgabe nach der Bildaufnahme daher muss man mit echo tricksen.
    
    19\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
        
        Kosta
        
        Hallo Andreas  
        da meine Nikon leider jetzt den geist aufgegeben habt wollte ich ja über meine PiCam Fotos machen, habe deinen Code hinzugefügt, den photo2 komplett gelöscht und nur deinen hinzugefügt. nichts geht die macht keine Fotos.  
        Muss ich da noch was installieren?? Bin leider Blutiger Anfänger
        
        01\. Sep 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3141ae08d327112e5fb7475b3db8b28f?s=75&d=mm&r=g)
    
    Jessica
    
    Hallo, ist es möglich verschiedene Rahmen einzubauen?! Ist sehr mühsam bei 200 Fotos noch einen Rahmen um das Bild hinzu zufügen.  
      
    Optimal wäre es natürlich über den Adminpanel.  
      
    Gruß und Danke
    
    16\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c78d8d48c290f239fd958dc39688d0e6?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Jessica,  
          
        ich habe da mal eine Lösung eingebaut. Ist aber nur eine schnell Lösung.  
        unter http://musch.info/rahmen.zip findest du die Dateien.  
        Die Zip -Datei entpackst du direkt in das Photobooth Verzeichnis. Am Besten die vorhandene print.php umbenennen. Dann ist das ganze eigentlich einfach. Die rahmen.png wird beim Ausdrucken über das bild gelegt.  
        Also diese mit deiner Vorlage ersetzen. Als Template liegt eine rahmen\_leer.png bei.  
        Wenn man keinen Rahmen möchte kann man auch diese umbennen in Rahmen....  
          
        Ich denke das Prinzip ist klar.  
          
        Gruß  
        Steffen
        
        22\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/2d1ad21fb12e4a84d1b61a665d91838b?s=75&d=mm&r=g)
            
            Jessica
            
            Hallo Stefan,  
            danke für die zip.  
            wie kann ich sowas auch wären dem Bilder machen einfügen?!  
            Bin eher eine Anfängerin und zerschiessen mag ich das jetzt nicht, bin froh das es grad läuft
            
            24\. Aug 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                Hallo Jessica, ich bin auch Anfänger. Aber wären den Bilder machen ist das meiner Meinung nach nicht so doll. Mein Plan ist dann, anstatt Sterne zum Beispiel Hochzeit von ... auf dem Ausdruck einzublenden. dafür wurde das gemacht.  
                  
                Gruß  
                Steffen
                
                26\. Aug 2019 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
    
    Freddy
    
    Hallo Zusammen,  
      
    ich habe meine Box erfolgreich für meine Hochzeit am letzten Freitag gebaut.  
    Nach etwas Anlaufschwierigkeiten (was aber scheinbar an meiner Kamera/Hardwaresetup lag) ging dann auch alles!  
    Vielen vielen Dank an Erfinder, Entwickler und Helfer.  
    Ich will jetzt versuchen, dass ganze System noch etwas zu erweitern (kann sich aber etwas hinziehen).  
    Wenn bedarf besteht, kann ich gerne etwas genauer auf mein Setup eingehen und auch Bilder posten.  
      
    Echt super Sache das Ganze.  
      
    Viele Grüße  
    Freddy
    
    12\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        André Rinas
        
        Hey Freddy,  
          
        freut mich zu hören! Gerne kannst du dein Setup und dein Bilder hier posten. Würde mich interessieren. Und deine Codeanpassungen sind immer wollkommen. Schau einfach bei Github vorbei.;)  
          
        Viele Grüße  
        André
        
        13\. Aug 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/36bdd05776532cd97b22883041286f37?s=75&d=mm&r=g)
    
    Daniel
    
    Hallo zusammen,  
      
    ich bin kompletter Linux-Neuling und habe entsprechende Schwierigkeiten, die Software zum Laufen zu bekommen.  
      
    Mein Setup:  
    \- Raspberry Pi 3 Model B+  
    \- Canon EOS 450D  
      
    Mein Fortschritt:  
    \- apache2 mit PHP installiert  
    \- PHP GD installiert  
    \- Photobooth Code in /var/www/html kopiert (index.php ist unter lokaler IP erreichbar  
    \- gphoto2 installiert  
      
    Meine Probleme:  
    \- ich habe kein Verzeichnis etc/sudoers, nur ein etc/sudoers.d  
    \- im sudoers.d sind 2 Dateien: README und "010\_pi-nopassword". Letztere Datei ist komplett leer, ich habe die genannte Zeile "www-data ALL=(ALL) NOPASSWD: ALL" eben in die leere Datei kopiert  
    \- gphoto2 kann nicht auf die Kamera zugreifen (weder als Pi noch als root). Ich bekomme folgende Fehlermeldung:  
      
    root@raspberrypi:/# gphoto2 --capture-image  
      
    \*\*\* Fehler \*\*\*  
    An error occurred in the io-library ('Konnte das USB-Gerät nicht beanspruchen'): Konnte Schnittstelle 0 nicht reservieren (Das Gerät oder die Ressource ist belegt). Stellen Sie sicher, dass kein  
    anderes Programm (gvfs-gphoto2-volume-monitor) oder Kernelmodul (z.B. sdc2xx, stv680, spca50x) das Gerät verwendet und Sie  
    Lese- und Schreibrechte für das Gerät haben.  
    FEHLER: Konnte Bild nicht aufnehmen.  
    FEHLER: Konnte nicht aufnehmen.  
    \*\*\* Fehler (-53: »Konnte das USB-Gerät nicht beanspruchen«) \*\*\*  
      
    Für Debug-Meldungen verwenden Sie bitte die Option »--debug«.  
    Diese Meldungen können Ihnen helfen, eine Lösung für Ihr Problem zu  
    finden. Wenn Sie jedoch Fehler- oder Debug-Meldungen an die  
    Mailingliste <gphoto-devel@lists.sourceforge.net> schicken wollen,  
    so starten sie gphoto2 bitte wie folgt:  
      
    env LANG=C gphoto2 --debug --debug-logfile=my-logfile.txt --capture-image  
      
    Bitte stellen Sie sicher das die uebergebenen Argument ausreichend gequoted sind.  
      
    Meine Kamera wird jedoch mit "gphoto2 --auto-detect" sauber erkannt.  
      
    Kann mir wer helfen?  
      
    Vielen Dank im Voraus.
    
    11\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Daniel,  
        bei Linux ist das ein wenig verwirrend. sudoers ist eine Datei.  
        Bei Linux müssen die Dateien nicht immer eine Endung haben.  
        gib einfach im Terminal sudo nano /etc/sudoers ein.  
        es geht ein Editor (nano) mit der Datei auf.  
          
        Gruß  
        Steffen
        
        12\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/41e41e82433b9cf5956891d12a485834?s=75&d=mm&r=g)
            
            Maik
            
            Habe auch genau dieses Problem.  
            Die Zeile  
            www-data ALL=(ALL) NOPASSWD: ALL  
            hab ich in /etc/sudoers hinzugefügt  
            Über auto-detect wird meine EOS 1300D auch erkannt aber bekomm über summary oder capture image selbe Fehlermeldung wie Daniel  
              
            Kann mir jemand helfen ?!
            
            15\. Sep 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/3ed6d5eb06b7f6b4319acfbf966e5c73?s=75&d=mm&r=g)
    
    Philip
    
    Hallo zusammen!  
      
    Sieht sehr gut aus deine Arbeit. Habe nun schon mehrere Stunden damit verbracht, aber bekomme es nicht hin.  
    Habe den Raspberry Pi 3 B+, ein IPAD und die Canon EOS 600D.  
      
    Wie bekomme ich die Software gestartet auf dem IPAD? IP-Adresse vom Raspberry habe ich. Sind auch beide im selben Netzwerk.  
      
    Hoffe mir kann jmd helfen?!  
    Danke im Vorraus
    
    10\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Philip,  
        rufe bitte im Safari Browser auf deinem IPad die IP des Raspi auf.  
        Also http://IP-Adresse  
        Dann sollte die Website der Photobooth zu sehen sein.  
          
        hast du geprüft, ob die Kamera auch von gphoto erkannt wird?  
        auf dem Raspberry im Terminal folgendes eingeben:  
        sudo gphoto2 --auto-detect  
        da soltle dann die Kamera genannt werden.  
          
        läuft den Apache Webserver?  
        Bitte Prüfen mit:  
        service apache2 status  
        Sollte als Rückmeldung running kommen  
        wenn nicht bitte Starten mit:  
        service apache2 start  
          
        Gruß  
        Steffen
        
        12\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/3ed6d5eb06b7f6b4319acfbf966e5c73?s=75&d=mm&r=g)
            
            Philip
            
            Hallo Steffen und der Rest,  
              
            danke für deine Antwort.  
            1\. über Safari und IP-Adresse zeigt er mir nur ein script an  
            2\. kamera wird angezeigt  
            3\. apache server läuft  
              
            Ich habe heute den Pi zurückgesetzt und nochmals alles Punkt für Punkt so gemacht wie beschrieben. Aber es klappt immer noch nicht.  
              
            Hat jemand noch eine Idee? Vielleicht übersehe ich auch was. Bin halt totaler Neuling.  
              
            Danke schonmal  
              
            Philip
            
            13\. Aug 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
                
                Steffen
                
                zeigt nur ein script?  
                ist PHP richtig installiert?  
                Läuft die PHP ausgabe?  
                Hast du am Raspberry Pi eine Grafische Oberfläche oder nur Commandozeile.  
                Wenn du eine Oberfläche hast, teste doch bitte erst mal auf dem Pi im Chromium ob eine Website angezeigt wird.  
                Eventuell auch mal auf der RCommandozeile php -v anzeigen lassen .  
                dann sollte die Version angezeigt werden.  
                  
                Im Apache muss auch PHP aktiviert werden!  
                  
                gruß  
                Steffen  
                  
                  
                
                20\. Aug 2019 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
    
    Kosta
    
    Wie kann ich anstelle der DSLR Kamera meine interne PI Kamera nutzen?!  
      
    Habe eine alte Nikon DSC D60 aber da kommt immer eine Fehlermeldung.  
      
    
    06\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        STeffen
        
        Hallo Kosta,  
          
        hast du das Problem schon gelöst?  
        vor 2 Monaten wurde hier schon die , von André die Lösung gepostet.  
          
        Die Raspberry Camera kannst du auch benutzen, dafür müsstest du allerdings die "Ausführ" Kommandos in der config.inc.php oder im Admin-Panel auf die für die Raspi Camera ändern. Also anstelle von gphoto... dann iwas mit raspistill -o cam.jpg in der Art.  
        Grüße André  
          
        Gruß  
        Steffen
        
        09\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/db812a728fd1b072d56e8f2df9cf4622?s=75&d=mm&r=g)
            
            Kosta
            
            Hallo Steffen,  
            nein leider noch nicht. Aber danke für dein tipp.  
            Mal schauen ob ich es hin bekomme mit meiner null Ahnung :-)  
              
            Trotzdem Danke
            
            09\. Aug 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
    
    Freddy
    
    Und nochmal eine Frage.  
    Wo kann ich den im QR-Code dargestellten Namen für das WLAN ändern?  
    Habe schon alle Dateien durchgesucht, aber nichts gefunden.  
    Will das ganze über das lokale WLAN laufen lassen und dann natürlich auch gerne das richtige WLAN dort anzeigen.  
      
    Besten Dank
    
    05\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        HAllo Freddy,  
          
        ich habe mir im Internet eine qr-Code für das Wlan genneriert und den auf die Box geklebt. kann dann jeder abfotografieren.....  
          
        Gruß Steffen
        
        06\. Aug 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
            
            Freddy
            
            Habe ich auch so gemacht, aber mich würde interessieren, ob man es trotzdem irgendwo umstellen kann.  
            Will aber jetzt auch versuchen, den ganzen Code zu verstehen und etwas zu erweitern/verändern.
            
            12\. Aug 2019 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        André Rinas
        
        Hey zusammen.  
        Der Name steht in den Language Dateien unter dem Label: qrHelp (de.js,en.js,fr.js)  
        Grüße André
        
        13\. Aug 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
    
    Freddy
    
    Und noch einen Fragen.  
      
    Funktioniert bei euch der  
    gphoto2 --get-config capturetarget  
    Befehl?  
      
    Bei mir kommt da immer ein Fehler und außer dem Kameramodel steht in den Settings auch nicht viel drin.  
    Händisch reinkopieren geht übrigens auch nicht :-(
    
    05\. Aug 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
    
    Freddy
    
    Hat noch jemand eine Sony (am besten 6300 oder a6000) im Einsatz?  
    Bei mir ist es so, dass gelegentlich die Verbindung nicht richtig funktioniert. Dann wird versucht ein Bild zu machen, wird aber keins gemacht. Dafür steht da dauerhaft "Bild wird verarbeitet". Wenn ich die Kamera dann einmal aus mache und wieder einschalte, gehts meist.  
      
    Hat jemand ähnliche Probleme?  
    Gibt es eine Lösung für das RAW-Problem?  
      
    Wie kann ich die SW eigentlich updaten?  
    Beim ChangeLog steht leider kein Datum dabei, andem man gucken kann, ob die Version neuer ist.  
      
    @Steffen: Ist dies mit dem Pi4 besser, da USB3.0?  
      
    Viele Dank schonmal an Alle für die Hilfe und natürlich an Andre für die tolle Arbeit und das Bereitstellen.
    
    04\. Aug 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        @ Freddy  
          
        Bin noch am testen mit dem RPI4
        
        06\. Aug 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f231d7e073543f9efb40049a4fded0cc?s=75&d=mm&r=g)
    
    Simon Hartmann
    
    Wenn ich grad dabei bin.. noch eine Frage.  
      
    Ist die Verbindung vom Raspberry zum Tablet auch via Kabel möglich? Dass ich den WLAN-Router weglassen kann?  
      
    Danke!!
    
    27\. Jul 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Simon,  
        such mal nach USB Tethering. Eventuell hilft dir das weiter.  
        Ansonsten würde ich dir empfehlen, den Raspberry pi als AccessPoint einzurichten.  
        Hab ich auch so gemacht, mit meinem neuen Raspberry Pi 4.  
        Gruß  
        Steffen
        
        29\. Jul 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f231d7e073543f9efb40049a4fded0cc?s=75&d=mm&r=g)
    
    Simon Hartmann
    
    Hallo nochmal,  
      
    das mit den Bildern hat geklappt - jetzt aber noch eine Frage... meine Freundin möchte zusätzlich zum JPG, das auf der Seite angezeigt wird, auch noch die RAW-Datei abspeichern - gibt es dazu eine Möglichkeit? Aktuell kommt ein Fehler, wenn wir nur die RAW-Datei abspeichern, da diese nicht verarbeitet werden kann - nehme ich an.  
      
    Wir würden uns über eine Lösung dazu sehr freuen!  
      
    Vielen Dank und Gruss,  
    Simon
    
    27\. Jul 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
        
        Freddy
        
        Das würde mich auch interessieren.  
        Arbeite mit einer Sony A6300 und es klappt auch alles soweit gut.  
        Als LiveView habe ich die PiCam.  
        Mein Problem ist nur, dass selbst wenn man RAW einstellt und mit --keep-raw arbeitet, das RAW immer danach weg ist.  
        Zudem dauert das Übertragen der Bilder an den Pi sehr lange, egal welche Größe eingestellt ist (gefühlt auch immer gleich lang).  
        @Steffen: Ist dies mit dem Pi4 besser, da USB3.0?  
        Denke bei dem ist dann die Kamera der Flaschenhals, oder?  
          
        Besten Dank übrigens an den Erfinder!!! Echt tolles Projekt!
        
        30\. Jul 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/16ed5f707e1fc3f1003741fa12e896e1?s=75&d=mm&r=g)
    
    Alexander
    
    Gibt es eine Möglichkeit wie ich externe Buttons anschließen kann um die fotobox auszulösen vielleicht sogar die Möglichkeit LEDs anzusteuern ? Dann wäre das Skript echt der Knaller :)
    
    19\. Jul 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Alexander,  
          
        ich habe ddas ganze über einen Fußschalter gelöst, Dieser wird als Keyboard erkannt und die Photobox löst dann auf Betätigung des Tasters aus.....  
          
        Das war auch nicht ganz einefach. Taster kaufen und auf einen Key der Tastatur festelgen. z.b. "z".  
          
        Dann muss der button der Photobooth in Script bekannt gemacht werden. War einen Erweiterung die ein User hier beschrieben hatte. Hab ich aber im moment nicht greifbar.  
        So hat das Auslösen über Button Funktioniert.  
          
        Musst du am besten mal ein wenigh Googlen. Dort findest du bestimmt eine ANleitung wie du ber GPIO eine Keyboard Eingabe simulierts. Damit sollte es funktionieren.  
          
        Gruß  
        Steffen
        
        23\. Jul 2019 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        HAllo,  
          
        auf Github hat andi34 eine Version mit Hardware Button Support veröffentlicht.  
        Gruß  
        Steffen
        
        31\. Jul 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f046b15b0e2d769202c2411b6790de2c?s=75&d=mm&r=g)
    
    Oliver
    
    Hallo Andre.  
    Vielen Dank für die Bereitstellung des Codes für die Fotobox.  
      
    Als ich vor einem halben Jahr das erste Mal auf deiner Seite war hab ich mir direkt meinen Pi geschnappt und alles auf einer alten 16GB SD Karte installiert.  
    Zusätzlich hab ich den Pi als AP laufen lassen da ich keinen Router zur Hand hatte. Auch das lief bzw. läuft wunderbar.  
    Vor 2 Wochen fing ich dann an eine Box um die Hardware zu bauen da ich zum Geburtstag meiner Frau die Box aufstellen will. Auf dem Geburtstag eines Freundes lief die Box dann Probe und machte 321 Bilder ohne Probleme.  
    Kurz zuvor habe ich dann gesehen das es ein Update der Software gab. Diese wurde installiert und nach ein paar Rechteprobleme lief dann alles stabil. Allerdings ist mir aufgefallen das der Dialog, nachdem ein Foto gemacht wurde, „Bild wird verarbeitet“, nicht mehr erscheint. Der Bildschirm bleibt bei „Cheeeees“ hängen. Das Foto wird dann ganz normal angezeigt.  
    Als ich nun das ganze System auf eine bessere, schnellere, SD Karte installiert habe ist mir aufgefallen das dieses Problem erst auftritt wenn der Pi als AP läuft. Bei der alten Version war das nicht der Fall.  
    Das ist zwar nicht wirklich ein großes Problem da ja eigentlich alles funktioniert aber das drehende Zahnrädchen sah schon ganz cool aus :-)  
    Mit der neuen SD Karte hab ich meine Cam auf 8MB stehen und das Bild erscheint nach gut 4-5 Sekunden.  
      
    Desweiteren würde ich noch gerne einen Tipp für diejenigen abgeben die ein iPad als Fullscreen Anzeige benutzen.  
    Nachdem man die Webseite der Fotobox aufgerufen hat muss man sich die Desktopversion der Seite anzeigen lassen. Optisch passiert da zwar nichts aber nun kann man die Seite zum Startbildschirm hinzufügen und hat einen Fullscreen ohne Eingabeleiste.  
      
    Gerne zeige ich auch Fotos meiner Box.  
      
    VG  
    Olli
    
    19\. Jul 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c1c0716390c85cac57e6bc3c907637c8?s=75&d=mm&r=g)
    
    Michael
    
    Hall Andre. 2 Jahre Pause hatte der Photobooth. Nun ist er zum zweiten Mal in der neuen Version zum Einsatz gekommen. Wunderbar! Gerade die Druckfunktion ist eine echte Bereicherung und die Gäste haben diese auch extensiv genutzt. Leider hatte ich das Problem dass viele der nicht so computeraffinen Nutzer mit der Touchfunktion Probleme haben und so in der Unsicherheit ob sie den Knopf denn richtig getroffen haben sehr viele Mal einen Druckauftrag angestossen haben. 5x das gleiche Bild gedruckt war leider keine Seltenheit. Kannst Du mir Hilfestellung geben an welcher Stelle ein "Prallschutz" gegen unbeabsichtigte Mehrfachauslösung eingebaut werden kann bzw. eine Dialogmeldung an den Nutzer dass der Auftrag angenommen wurde und bearbeitet wird um "unbeabsichtigte" Mehrfachauslösungen zu verhindern? Ansonsten war Dein Projekt wiederum der Knaller! Vielen, vielen Dank nochmal!
    
    14\. Jul 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/dc7a057138e01182ac607da7464e6992?s=75&d=mm&r=g)
    
    Dominik Luther
    
    Hallo,  
    gehe ich recht in der Annahme, dass es jetzt eine Live-Preview gibt ?  
      
    Danke
    
    28\. Jun 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
    
    Retch
    
    Die Idee mit dem QR Code ist ziemlich gut und funktioniert auch mit dem iPhone wunderbar, aber die Androiden nutzen dann immer die Datenverbindung weil das wlan ja kein Netz hat. Hast du eine Idee wie man das umgehen kann? Daten deaktivieren funktioniert zwar aber ist nicht wirklich nutzerfreundlich.
    
    24\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
        
        Retch
        
        Ich habe eine Idee wie es funktionieren könnte, aber stehe nun vor einem Hindernis.  
        Ein WLAN Router mit OpenWrt macht ein Netz auf für das surface zum Anzeigen der Page, und ein Android Smartphone mit Netzclub sim soll einen hotspot machen bei dem die Androiden Internet bekommen und das so dann funktioniert. Jedoch hat der pi (über wlan ins Handy eingeloggt) eine andere IP als über den Router, und der qr Code wird für die lan IP erstellt. Wo kann man denn php-gd sagen welche IP für den QR verwendet werden soll?  
        MfG
        
        24\. Jun 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/da48026d1deb2d2659c8abfdd5fbc38c?s=75&d=mm&r=g)
    
    Dominik
    
    Hallo,  
      
    ich habe noch eine Frage zur Live-Preview. Das ganze funktioniert nur wenn HTTPS in Apache aktiviert ist. Ich habe mir dazu über openssl eigene Zertifikate erzeugt. HTTPS läuft damit zwar nur wird das Zertifikat von keinem Browser (weder Safari, Chrome, Firefox, Edge) auf meinem iPad akzeptiert. sprich die Live-Preview wird nicht aktiviert da die Browser keine sichere Verbindung erkennen.  
    Wie kann man das lösen? Ideal wäre ein Zertifikat das von den Browsern ohne Probleme akzeptiert wird...  
      
    In Safari bekomme ich die Live-Preview zum laufen, allerdings muss ich den Kamera-Zugriff bei jedem Foto neu erteilen, was ziemlich doof ist.  
    Hat damit jemand Erfahrungen?
    
    23\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
        
        Tobias
        
        Moin Dominik,  
          
        hast du bereits eine Lösung für das Problem mit dem regelmäßigen Bestätigen des Zugriffs auf die Kamera des Ipads?  
          
        Ich hab exakt das gleiche Problem. Zudem bekomme ich das Live-Bild gar nicht, wenn ich die Webseite vorher zum Homebildschirm hinzugefügt habe und von dort aus starte...  
          
        LG Tobias
        
        29\. Jul 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/da48026d1deb2d2659c8abfdd5fbc38c?s=75&d=mm&r=g)
    
    Dominik
    
    Hallo zusammen,  
      
    ich bin gerade dabei das Photo Booth aufzusetzen... Läuft soweit auch wunderbar, nur die Live-Preview kriege ich nicht zum laufen. während des Countdowns wird nichts angezeigt. Den entsprechenden Wert in der Config habe ich auf True gesetzt. Muss dazu noch etwas installiert werden bzw. an anderer Stelle konfiguriert werden?  
    Ich habe das ganze mit meinem iPad auf Safari, Chrome und Edge getestet. Keine Preview in keinem der Browser.
    
    20\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Dominik. Hast du es in der config.php gesetzt oder im Admin-Panel? Zudem wird man im Browser dann eigentlich gefragt und man muss die Berechtigung für die Kamera erteilen. Vlt. hast du das beim ersten Mal weggeklickt. Schau das mal nach.  
        Grüße André
        
        21\. Jun 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/169e7e6624373cf41bff11e073684749?s=75&d=mm&r=g)
            
            Marco Gracklauer
            
            Das gleiche Problem habe ich auch festgestellt. Nach einiger Recherche habe ich festgestellt, dass es nur mit einer SSL-Verschlüsselten Verbindung funktioniert. Allerdings ist mir noch nicht gelungen diese im gleichen Netzwerk mit lokaler IP herzustellen ...
            
            22\. Jun 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
    
    [Reinhard Rebernig](https://www.reinhard-rebernig.at/website/websites/fotokasterl)
    
    Hallo zusammen, habe mich vor ca. einem Jahr mal gemeldet. Auch ich hab damals mit dem tollen Projekt von Andre begonnen und habe es mittlerweile etwas eskalieren lassen ;) musste auch auf ein netbook mit ssd umsteigen um meine Live View per DSLR Cam zu realisieren. Ich habe nun sogar eine Webview als Demo erstellt (siehe Website Link) mit der schon einige tolle Features erkennbar sind (live view, filter, foto export usw.). Bei Fragen gerne hier oder per Mail. LG aus Österreich
    
    16\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
        
        Retch
        
        Wie hast du denn den Live-View mit DSLR hinbekommen? Habe den dpi dran und auch mit gphoto und dem livestream probiert aber geklappt hat nicht so wirklich. Auch gefallen mir die Filter, würd da gerne was von in mein Projekt implementieren.  
        Mit freundlichen Grüßen
        
        16\. Jun 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
            
            [Reinhard Rebernig](http://reinhard-rebernig.at)
            
            Hallo vielen Dank für das Interesse ;)  
            (derzeit ist die Seite leider gerade unbesuchbar werde das heute am Abend fixen)  
            Das mit der Liveview ist eine Trickserei, ein direkter Stream war mir bislang nicht möglich da im Hintergrund binnen Sekunden eine richtig große Datei entsteht (GB!!!) und ich den Stream leider noch nicht direkt ins HTML Canvas lenken konnte. Mein Workaround war alle 40ms einen Preview zu knipsen und diesen gleich im Canvas darzustellen (deshalb ruckelt auch das Bild mit der Webcam da ich das 1:1 für die Webcam übernommen habe). 40ms Sind aus meiner Sicht gerade noch erträglich wenn auch nicht flüssig.  
            Zurück zum Workaround, da der Spiegel beim Preview hochgeklappt ist wäre somit ein Stream bzw. in kurzen Abständen ein Preview Pic möglich aber da begrenzen wir uns dann leider auf USB und HDD Schreib- bzw. Übertragungsgeschwindigkeiten (daher SSD und daher bislang min. 40ms). Wichtig ist natürlich auch 1-2 Sekunden vor dem Auslösen die Cam zu initialisieren ansonsten ist der Spiegel oben und kein Foto möglich! Der Befehl für die Preview lautet sudo gphoto2 --capture-preview --force-overwrite. Die Spielereien am Frontend mit HTML Canvas würden nun hier den Rahmen sprengen, bin aber gerne bereit per Mail weiter zu kommunizieren ;)
            
            17\. Jun 2019 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/893f194bc2ea34c537c71437a2c2a2a2?s=75&d=mm&r=g)
        
        Daniel König
        
        Hallo Reinhard,  
        tolle Weiterentwicklung die du da als Webdemo bereitstellst. Aktuell laufen ja einige Forks bei Github mit ebenfalls einer tollen Entwicklung und Erweiterung des Funktionsumfangs.  
        Meinst du du kannst deine Erweiterungen da auch mit einbringen und öffentlich machen??  
        Würde mich freuen zukünfitg einige der Funktionen nutzen zu können.  
        Gruß Daniel
        
        17\. Jun 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
            
            Reinhard Rebernig
            
            Hi war ursprünglich auch meine Idee nur müsste ich mich mal mit Git befassen (shame on me :) ) und meine Entwicklung ist wirklich schon sehr speziell auf meine Fotobox abgestimmt und teilweise für den Raspberry nicht mehr ganz machbar. Ich kann aber gerne diverse Funktionen versuchen auf Anfrage bereitzustellen und versuche dabei das ganze universell implementierbar zu gestalten.
            
            17\. Jun 2019 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/f63c973cf232bb4716419a104e8346d7?s=75&d=mm&r=g)
        
        Freddy
        
        Hallo Reinhard,  
          
        sieht sehr interessant aus, was du da gebaut hast.  
        Ist es möglich den Code dazu zum min teilweise zu bekommen.  
        Mich interessieren bspw. die Filter.  
        Gibt es auch eine Möglichkeit die Filter erst auf das fertige Bild anzuwenden? Bspw. für einen Mail oder QR Versand? Damit das Original erhalten bleibt.  
          
        Besten Dank und viele Grüße
        
        05\. Aug 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
    
    Retch
    
    Hallo Andre,  
    ich habe es jetzt für das Surface angepasst und es Funktioniert auch beinahe...  
    Nach einem gewissen Timeout lädt die Seite erneut (wie druck auf den Home Button), das Surface hat aber Probleme damit. Wo kann ich das timeout einstellen? finde nichts dazu im code.
    
    16\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Retch,  
        ich habe auch ein Windows Tablet und damit hatte ich keine Probleme. Am besten lief es bei mir tatsächlich im Edge.  
        Ansonsten kannst du in der core.js Datei ganz oben der timer auf sehr hohe Zahl stellen. Gerade ist er auf 90000, was 90 Sekunden entspricht. Häng noch 10 Nullen dran und die Seite wird nie zurückgesetzt.  
        Grüße André
        
        17\. Jun 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
            
            Retch
            
            Okay, werde ich probieren.  
            Jetzt hab ich aber noch ein Problem gefunden, welches am Mac genauso auftritt wie am IE. Wenn man das Foto gemacht hat und dann auf QR Code klickt buggt es relativ oft, dann kommt nur eine "Seiten-schiebe-Animation".
            
            18\. Jun 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/00c1f0bf4666f69d9c7bafde6f34f9ba?s=75&d=mm&r=g)
    
    Michael Sessler
    
    Hallo,  
    erst mal Danke für dieses tolle Tool!  
      
    Und hier mein kleiner Beitrag:  
    Ich bin gerade über eine Fehlerquelle gestolpert, die für Andere auch interessant sein könnte:  
    Beim Aufruf der gphoto2 Kommandos wartet das Skript auf die Rückmeldung von gphoto2 und sucht dann nach Erfolgs- oder Fehlermeldungen. Die entsprechenden Texte sind in der config.inc.php aber nur auf englisch vorhanden. Wenn der pi User auf eine andere Sprache eingestellt ist, dann wertet das Skript JEDE Rückmeldung als Fehler.  
      
    Lösung: User pi unbedingt auf englisch einstellen!  
    sudo raspi-config --> 4 Localisation Options --> I1 Change Locale --> en\_GB.UTF8  
    Danach noch einmal rebooten:  
    sudo reboot  
    Und dann hat es bei mir funktioniert :-)  
    Getestet mit Canon EOS 70D  
      
    
    13\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hall Michael, danke für den Tipp!
        
        17\. Jun 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b1dd4787268f2125c49413e2529f2628?s=75&d=mm&r=g)
    
    Michael
    
    Hallo,  
      
    Gibt es irgendwie die Möglichkeit dass die Applikation sofort bei, Start ausgeführt wird?  
    Ich habe einen Rasberry mit Touch Display am laufen.  
    Geht die Vorschau auch mit einer DSLR Kamera anstelle der Webcam ? Und ich suche noch nach eine, Script mit dem ich dann die Bilder auf einen usb Stick verschieben kann.  
      
    Danke im Voraus !  
    Michael
    
    07\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen musch
        
        Hallo Michael,  
        Ja geht! Der Apache Webserver und gPhoto starten schon automatisch. Du musst nur den Webbrowser in den Autostart eintragen und photobooth als Startseite festlegen. Anleitungen gibt es auf Google. Hab ich auch so gelöst....  
          
          
        Gruß Steffen
        
        15\. Jun 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/32a65aacde63ecf2f5b902c29de704aa?s=75&d=mm&r=g)
    
    Sascha Bauer
    
    Hallo Andre,  
    vielen Dank für die super Fotobox. Mit der neuesten Version hat sich ja so einiges getan. Einerseits super, dass die Video-Vorschau über Webcam vorläufig gelöst werden konnte - andrerseits sind die Skripte nun etwas unübersichtlich, da du vieles ausgelagert hast und ich mich nur noch schwer darin zurecht finde ;)  
      
    Das ganze läuft mittlerweile echt super, nur ein einziges Problem gibt es noch: Bei TakePicture von der Startseite wird die Webcam richtig dargestellt. Wenn ich aber ein zweites Bild auslöse, ohne vorher zur Startseite zurückzugehen, ist die Position des Webcam-Bildes eine völlig andere (links aus dem Bildschirm hinausgeschoben).  
    Wo kann denn die Position verändert werden? Bzw. was ist der Unterschied bzgl. Position bei den beiden Aufrufen?  
      
    Viele Grüße  
    Sascha
    
    06\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hey Sascha,  
        danke für die Fehlermeldung. Habe ich im neuen Release mit behoben ;) Viel Spaß damit!  
        Grüße André
        
        07\. Jun 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
            
            Dirk
            
            Was heißt Webcam Preview? Kommt die Preview von der Webcam des Tablets oder als Liveview von der DSLR? Das zweite wäre nämlich eine tolle Sache für mich, da ich keine Tablet sondern einen Touchscreen direkt am RPI nutze. Lässt sich eigentlich die Raspberry Pi Camera auch steuern? Ich möchte nämlich eine zweite, nur Fotos machende Box bauen und mit dem Camera Modul des RPI arbeiten.
            
            10\. Jun 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Dirk,  
                bisher nur mit der Webcam des Tablets, da das Live-Bild von der Kamera schwierig abzufangen ist. Die Raspberry Camera kannst du auch benutzen, dafür müsstest du allerdings die "Ausführ" Kommandos in der config.inc.php oder im Admin-Panel auf die für die Raspi Camera ändern. Also anstelle von gphoto... dann iwas mit raspistill -o cam.jpg in der Art.  
                Grüße André
                
                11\. Jun 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
                    
                    Dirk
                    
                    Da kommt mir eine weitere Idee in den Sinn.  
                    Wäre es möglich mit der Raspi Kamera einen Liveview auf der Startseite einzubinden? Am Besten solange der Countdown läuft.
                    
                    11\. Aug 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/2a4f41822268e0c44f5d2e8dc8302803?s=75&d=mm&r=g)
    
    Tino
    
    Hallo Andre,  
      
    vielen Dank für diese tolle Arbeit und das du diese frei zur Verfügung stellst.  
    Ich konnte alles in Betrieb nehmen. Mit den Kommentaren ließen sich auch viele vermeintliche Fehler beheben.  
    Ich habe dennoch ein Problem: Wenn das Foto geschossen ist, dann kann ich bei der direkten Vorschau über den QR-Code einwandfrei das Bild auf ein Handy laden. Gehe ich jedoch über die Galerie und lade dort den QR-Code erhalte ich nur einen kleinen eckigen Kasten und kein Foto. Woran liegt das? In den alten Versionen hat es super funktioniert, in der neusten jedoch nicht.  
    Freue mich über eine Rückmeldung.  
      
    Beste Grüße  
    Tino
    
    05\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tino, den Fehler habe ich in der neuesten Version behoben.  
        Grüße André
        
        11\. Jun 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/2180e65506d00dec2a9dfcd475efd969?s=75&d=mm&r=g)
    
    Thymon
    
    Hi Andre,  
    First : sorry for my english. :)  
      
    How to turn on the countdown when clicking on print? In the same way as to take a picture? Because I have to block the button "print" when the photo printing. Otherwise it makes me crash the printer.
    
    26\. May 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f231d7e073543f9efb40049a4fded0cc?s=75&d=mm&r=g)
    
    Simon Hartmann
    
    Hallo,  
      
    super Anleitung! Hat einwandfrei geklappt.  
      
    Jetzt habe ich aber noch eine Frage.  
      
    Wo wird denn definiert, mit welcher Auflösung die Kamera die Fotos macht und wo werden diese Bilder endgültig abgelegt?  
    Können diese dann auch einfach exportiert werden? Kann die Qualität festgelegt werden?  
      
    Vielen Dank im Voraus für deine Hilfe!  
      
    Gruss,  
    Simon
    
    26\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        Steffen
        
        Hallo Simon,  
        an der Kamera wird die Auflösung eingestellt. Mit dieser Auflösung wird das Bild im Image Ordner abgelegt. Zum exportierender Bilder baue ich eine Winscp Verbindung mit meinem Laptop zur Photobooth auf. Dann gehe ich in den Order /var/www/images oder so Ähnlich und kopiere alle Bilder auf den USB Stick.  
          
        Gruß  
        Steffen
        
        27\. May 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e09cab6a354b966c1d65aa630128c95f?s=75&d=mm&r=g)
    
    René Kleidt
    
    Hi Andre,  
    Vielen Dank für das Super Projekt. Ich hatte die Box bereits letztes Jahr für meine Hochzeit gebaut und sie lief wunderbar. Nun habe ich mal auf Version 1.5 geupdatet. Ich habe allerdings ein Problem mit dem Drucken. Wenn ein Bild gemacht wurde und ich auf Drucken klicke passier erstmal nichts, dann wird ein neues Bild geschossen (ohne Countdown) ohne das dieses angezeigt wird. Aber ein Bild wird nicht gedruckt. Ich habe in der config.php den Drucker (Selphy DP400) hinterlegt. Testseite über Posrt 631 funktioniert auch. Hast du vielleicht eine Idee woran dies liegen könnte?  
    Gruß  
    René
    
    25\. May 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/73f5a9789aac90a0d2b865cb5fe52206?s=75&d=mm&r=g)
    
    Philipp
    
    Hallo Andre :)  
      
    Ich kann mich nur meinen Vorrednern anschließen: vielen, vielen Dank für dieses coole Projekt!  
    Ich hätte noch eine Frage: hast du (oder jemand anderes hier) eine Empfehlung welchen Browser man am besten auf einem Android Tablet verwendet? Es ist ein Huawei MediaPad m5 lite.  
    Manche Browser können die Kamera im ersten Test gar nicht auslösen, manche schon... Und so einen richtigen guten Fullscreenmodus hab ich auch noch nirgends gesehen. Tipps?  
      
    Vielen Dank vorab und viele Grüße,  
    Philipp
    
    23\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Philipp,  
        das ist aber komisch, da das Auslösen der Kamera nichts mit dem Browser zu tun hat. Ansonsten kannst du den Chrome nehmen und mit der Funktion "Zum Startbildschirm hinzufügen" eine Verknüpfung anlegen, die im Fullsqureen Mode läuft. Aber so könnten Benutzer die Oberfläche bestimmt immernoch verlassen. Am besten nimmst du eine Kiosk Mode App. Da weiß ich leider nicht welche gut ist.  
        Grüße
        
        24\. May 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
            
            Retch
            
            Als Kiosk App nutze ich (aber für Homeautomation) "Fully". Hat sehr viele Funktionen, aber ob ne Passwort Sperre oder so drin ist weiß ich nicht.
            
            24\. May 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/73f5a9789aac90a0d2b865cb5fe52206?s=75&d=mm&r=g)
            
            Philipp
            
            Vielen Dank!  
            Leider klappt das bei mir nicht so recht... Firefox ist leider der einzige Browser, in dem ich die Kamera auslösen kann. Auf die Galerie komme ich in jedem anderen Browser auch...
            
            25\. May 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/73f5a9789aac90a0d2b865cb5fe52206?s=75&d=mm&r=g)
            
            Philipp
            
            Hey, ich habe die Lösung. Problem war die Live-Vorschau. Nachdem ich diese deaktiviert habe, läuft alles wie es soll. Keine Ahnung, woran das liegt, aber für mich ist das egal, ich wollte sie vermutlich eh nicht nutzen.  
            Jetzt hätte noch drei optische Fragen.  
            1) nachdem ich ein Bild geschossen habe und auf den QR Button drücke, wird mit das entstehende Textfeld nicht exakt mittig angezeigt. Wo genau kann ich die Größe und Position des Textfeldes anpassen?  
            2) wenn ich aus der Galerieansicht heraus auf den QR-Button drücke, wird mir nicht der Text darunter angezeigt in dem steht, dass man sich mit dem WLAN verbinden muss. Wo könnte ich das noch einstellen?  
            3) wenn ich ein Bild aus der Galerie betrachte, überlagern sich die drei Symbole im oberen rechten Eck teilweise. Wo kann ich deren Position einstellen?
            
            25\. May 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
    
    Retch
    
    Habe jetzt mal die Releases alle durchprobiert - mit der 1.4 funktioniert es am Surface und am iPad ganz gut, aber bei der 1.5 hat der Foto Button bei beiden Geräten keine Funktion.
    
    23\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hey,  
        seit Version 1.5 gibt es eine Webcam Vorschau und ein Admin-Panel. Einfach im Admin-Ordner die config.json löschen und die Anpassungen aus der config.inc.php funktionieren wieder. Zudem gibt es eine neue Version. Der Fehler beim Internet Explorer war, dass er das Webcam Feature nicht unterstützt und deswegen Fehler wirft, das habe ich abgefangen.
        
        23\. May 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
            
            Retch
            
            Funktioniert gut, danke für den Support.  
            Allerdings habe ich noch eine Kleinigkeit: Wenn das Foto gemacht wurde und man beim Surface auf den "Home" Button drückt landet man bei "192.168.1.123/undefined" Error 404. Ich denke es hat etwas mit dem Javascript im Internet Explorer zu tun. Ich habe aber keine si richtige Ahnung von html und habe es nicht gefunden, aber kann man denn um das zu Umgehen einen href auf 192.168.1.123/index.php setzen? Das würde nämlich selbst der Internet Explorer verstehen denke ich.
            
            23\. May 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
    
    Retch
    
    Super Software, hab mich jetzt mal an die neuste Version gesetzt. Habe aber das gleiche Problem wie Markus. Es scheint so als ob die false Option überhaupt keine Auswirkungen hat, kannst du da mal nachschauen?  
    Mit freundlichen Grüßen
    
    21\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/3c2c91758c0d8a16be13b6e3d82fe5ce?s=75&d=mm&r=g)
        
        Marcus
        
        Danke für das Feedback. Interessant, dass es bei dir ebenfalls Probleme gibt. Hast du denn mit einer alten Version schon erfolgreich gearbeitet?  
          
        Welche Änderungen wurden denn in der Programmierer vorgenommen? Vielleicht könnte eine alte, aber stabil laufende Version zur Verfügung gestellt werden?  
          
        Danke und Grüße
        
        22\. May 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
            
            Retch
            
            Ich hab damals bei Version 1.3.x das Repository geklont bei GitHub und die Version funktioniert auch noch gut, habe aber etliche Sachen verändert. Es scheint halt wirklich so wie ich im Post schon geschrieben habe. Aber wenn du das unbedingt benötigst kann ich auch den Link zum Repository posten.
            
            22\. May 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
            
            Retch
            
            Habe es gefunden!  
            Du musst in der config im Hauptverzeichnis dev auf false stellen und dann im Ordner admin in der config auch noch dev auf false. Jetzt funktioniert es ohne Mucken in der neusten Version!
            
            22\. May 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Dann hättet ihr auch einfach einmal im Admin Panel den Haken bei Dev rausnehmen können. Das schreibt die config.json im admin Ordner, welche die config.inc.php komplett überschreibt.
            
            22\. May 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/a0f8300abcd5ed10a5468f4d78b5dbdd?s=75&d=mm&r=g)
                
                Retch
                
                Habe nur hier auf der Website darüber gelesen aber wusste nichts von dem admin Panel. Aber es funktioniert ja.  
                Aber jetzt hab ich ein neues Problem: Es funktioniert alles Top, aber als Display wollte ich ein Surface RT mit Internet Explorer nehmen. Mit der Version 1.3 hat das auch geklappt, aber in der neusten Version funktioniert der Druck auf den "Foto Erstellen" Button nicht, der wird nur markiert aber es passiert nichts. Ist da was am "Mechanismus" geändert?
                
                22\. May 2019 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/3c2c91758c0d8a16be13b6e3d82fe5ce?s=75&d=mm&r=g)
    
    Marcus K.
    
    Hallo und vielen Dank für die tolle Anleitung.  
    Leider verzweifele ich gerade: Ich habe letzte Woche an einem Raspberry Pi 3 B+ von einem Kollegen das ganze nachgebaut (bis auf das lokale WLAN). Nach etwas Try & Error hat es geklappt (ich bin ein absoluter Raspberry Neuling). Über die Website hat meine Sony Alpha 6000 brav auagelöst.  
    Nun habe ich mir selber das gleiche Raspberry besorgt und habe mich exakt an die Anleitung gehalten. Leider habe ich den Fehler, dass die Kamera nicht auslöst. Mit dem Kommando "gphoto2 --capture-image" klappt es.  
    Die config.inc.php wurde auf "false" gestellt und auch die Rechte in sudo nano /etc/sudoers geändert.  
    Muss die Zeile "www-data ALL=(ALL) NOPASSWD: ALL" an eine bestimmte Position in der Datei?  
    Ich würde mich über Hilfe sehr freuen, denn ich weiß wirklich nicht, was ich letztes mal anders gemacht habe.  
    In beiden Fällen war es eine saubere, neuinstallierte Platform...  
      
    Beste Grüße und Danke im Vorraus!  
    Marcus
    
    20\. May 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/3c2c91758c0d8a16be13b6e3d82fe5ce?s=75&d=mm&r=g)
    
    Marcus
    
    Hallo,  
    vielen Dank für diese tolle Anleitung. Ich möchte für meine Hochzeit ebenfalls eine Fotobox bauen und hatte bis dato keine Raspberry Fähigkeiten. Mit deiner Anleitung ging es aber sehr gut. Vom Raspberry selber konnte ich deine Website aufrufen und die Sony Alpha 6000 hat brav Fotos geschossen. (Blöde Frage, wo werden die Bilder auf dem RPI gespeichert?  
      
    Wo es momentan noch hapert. Ich verstehe noch nicht ganz, wie ich ein lokales WLAN erzeugen kann. Ich habe das Rasperry Pi 3 B+, brauche ich da überhaupt einen Router? Denn WLAN hat das Teil ja.  
    Ansonsten habe ich auch einen einen Accesspoint fährigen WLAN Stick (LogiLink WL0084B).  
      
    Hat jemand vielleicht Hilfe für mich?
    
    19\. May 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
    
    Marcus Postel
    
    Hallo Andre.  
    Nochmal eine kleine Frage von mir: kannst Du mir bitte einen Tipp geben wie ich es erreichen kann, dass auf einem eben gemachten und direkt ausgedruckten Foto der dazugehörige QR-Code nicht daneben erscheint sondern dass das Foto allein ausgedruckt wird?  
      
    Danke im Voraus!
    
    16\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Marcus,  
        du könntest einfach folgende Zeile auskommentieren:  
        https://github.com/andreknieriem/photobooth/blob/master/print.php#L46  
          
        Grüße
        
        20\. May 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
            
            Marcus Postel
            
            Hallo Andre.  
              
            Danke für den Tipp. Das Auskommentieren der Zeile 46 war allerdings nur die halbe Wahrheit, denn danach wird das Bild nicht flächig füllend ausgedruckt. Nach Änderung der Zeile 41 in der print.php hat's dann aber noch geklappt:  
              
            alt: $print = imagecreatetruecolor($newwidth, $newheight);  
            NEU: $print = imagecreatetruecolor($width, $height);  
              
            Danke nochmals für Dein tolles Projekt! Nun können die verrückten Hochzeitsgäste nach Lust & Laune Fotos machen und ausdrucken :-)
            
            28\. May 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/85f7b551861bc752d26e351d98cc15ab?s=75&d=mm&r=g)
    
    Peter
    
    Hallo Andre,  
    danke für das Projekt. Hab es intalliert und angepasst. Läuft alles tippi toppi. Wenn man einen Wunsch äußern darf... Ich würde gerne den HDMI Ausgang der Kamera auf einen Monitor nutzen. Wäre also toll wenn die Kamera in den Live View Modus geschaltet wird in der Zeit in der kein Foto geschossen wird. Lässt sich das bewerkstelligen? Spreche dabei nicht von Live View auf dem Raspberry sondern wirklich nur den Kamera HDMI auf einem Monitor laufen zu lassen.  
    Hat da jemand eine Idee, oder der Master selbst? ;-)
    
    10\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
        
        Marcus Postel
        
        Hallo Peter.  
          
        Sollte das nicht die Kamera selbst direkt machen? Vielleicht kann Dir zu Deiner Frage aber auch die gphoto-Dokumentation hier weiterhelfen => http://www.gphoto.org/doc/
        
        16\. May 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/52c5368ea1926b4665723b2fc601969f?s=75&d=mm&r=g)
    
    Boris
    
    Hallo beim Auslösen bekommen ich immer "es ist ein Fehler aufgetrten, bitte versuchen sie es erneut".  
    Unter lsusb wird die canon angezeit  
      
    hat jemand eine idee?
    
    09\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo Boris,  
          
        hatte ich auch.  
        Hat der Webserver auch zugriff auf den USB Port.  
          
        Give sudo rights to the webserver user (www-data)  
          
        sudo nano /etc/sudoers and add the following line to the file: www-data ALL=(ALL) NOPASSWD: ALL  
          
        Das sollte das Problem beheben..  
          
        Gruß  
        Steffen
        
        10\. May 2019 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/6192b6edcf461fb0a5e875b857daf273?s=75&d=mm&r=g)
        
        Kai
        
        Habe leider genau das gleiche Problem. Habe nun bereits 3x neu angefangen, aber leider ohne Erfolg. Wäre über eine Lösung ebenfalls sehr dankbar :)
        
        12\. May 2019 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Habt ihr php-gd installiert? Es gibt nur 2 Fehlerquellen:  
        1\. Die Kamera wird nicht erkannt  
        2\. Er kann keine Thumbs erzeugen  
          
        Guckts mal in euren images Ordner. Wenn dort Bilder sind sind ist es Punkt 2.  
        apt-get install php-gd. Hier in den vielen Kommentaren steht das auch nen paar mal.
        
        16\. May 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7f3b68d93fb65e635c461ecea66f96c4?s=75&d=mm&r=g)
    
    [andreas](www.mades.me)
    
    hallo, ich habe deine software auf einen raspberry 3+ aufgespielt mit Apache. und php.  
    Leider kann er die picam nicht finden oder auslösen  
    mfg andreas
    
    06\. May 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo andreas,  
        geht das überhaupt? Wird die picam von gphoto unterstützt? Normalerweise wird für die Photobox einen Spiegelreflex Kamera genutzt.  
          
        Gruß  
        Steffen
        
        08\. May 2019 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Genau, es ist ein DSLR Photobooth, also für eine Digitale Spiegelreflexkamera. Wenn du die Picam benutzen willst, musst du die Befehle in config Datei anpassen. Hier dann für den Linux Befehl zum Bild machen ändern und bei Msg einen Teil was der Befehl ausgibt, wenn er Erfolg hat. Also wenn du sowas kommt wie "Picure cyx.jpg saved successfully under ../images" oder so, dann dort nur saved successfully eintragen, da der rest ja variabel ist.
        
        16\. May 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
    
    Marcus
    
    Hi Andre!  
    Ich hatte schon einmal einen Kommentar hinterlassen weil die Homepage nicht geladen wurde. Jetzt ist dank Deiner tollen Vorarbeit alles einsatzbereit und ich kann sogar Bilder ausdrucken mit einem über CUPS angeschlossenen Canon Selphy CP1300. Einziges Problem: das Bild wird zusammen mit dem zugehörigen QR-Code gedruckt :( Ich bin noch nicht auf den Trichter gekommen, wie ich NUR DAS BILD drucken kann.  
      
    Kannst Du mir da vielleicht noch einen Tip geben?  
      
    Danke im Voraus & Grüße, Marcus
    
    17\. Apr 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/272153dbd7400d5cf98a637ff925604b?s=75&d=mm&r=g)
    
    Alexander Kremer
    
    Hi Andre,  
    super Sache deine Photobox. Ich hatte Sie auch schon im Einsatz. Manchen war das mit QR Code zu umständlich. Es sollte doch auch möglich sein das Bild per Mail zu verschicken. Einen Router habe ich und auf meinem Raspberry Pi habe ich auch schon ssmtp erfolgreich eingerichtet. Wie bekomme ich es hin, dass der Benutzer seine Mailadresse eingibt und das Bild dann automatisch versendet wird. Hat hier zu jemand eine Idee oder ein paar gute Links zur Hand, die diesen Sachverhalt erklären. Vielen Dank im Voraus.  
    Viele Grüße,  
    Alexander Kremer
    
    10\. Apr 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/9eddd92a504b37e5cafe9e1965a3db56?s=75&d=mm&r=g)
    
    Alex
    
    Hi Andre,  
      
    sehr, sehr cooles Projekt!  
      
    Ich würde es gerne um einen Actionbutton erweitern, der mit einem ESP8266 die Seite /takePic.php aufruft. Allerdings kenne ich mich nicht gut mit php aus. Wie würde man es denn anstellen, dass die Seite die auf dem Tablet läuft auf ein derart geschossenes Foto reagiert und am besten direkt anzeigt? Bisher muss ich die Seite auf dem Tablet manuell aktualisieren um es zumindest in der Galerie zu sehen...  
      
    Außerdem würde ich gerne mit dem QR-code den Dateinamen anzeigen lassen, um analogen Menschen die Möglichkeit zu geben, sich Ihr Bild bei mir zu "bestellen".  
      
    Vielen Dank im Voraus und viele Grüße  
    Alex
    
    08\. Apr 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/9eddd92a504b37e5cafe9e1965a3db56?s=75&d=mm&r=g)
        
        Alex
        
        Habs hinbekommen. Die takePic.php speichert jetzt den Output in ein file und die Hauptwebseite schaut regelmäßig, ob sich da was tut. Vielleicht nicht die eleganteste Lösung, aber tut :-)  
        Und das mit dem Dateinamen ging dann auch noch :-)
        
        09\. Apr 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1ed4deae9ea882bc80870c3a36a1b0b1?s=75&d=mm&r=g)
    
    Christian Kleine-Börger
    
    Hi,  
      
    leider schleicht sich noch eine Frage von mir ein =)  
    Habe für Testzwecke natürlich einige Fotos geschossen. Die habe ich dann auf der SD Karte auch aus dem Speicherpfad (Images) und auch die Thumbs / Vorschaubilder habe ich gelöscht. Jedoch werden immer noch in der Galerie viele Fotos angezeigt, die gelöschten aber nur als durchsichtiger Kasten mit dem "Broke" Symbol. Muss ich noch etwas beachten?
    
    08\. Apr 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi, ja die data.txt musste noch löschen/leeren.  
        Grüße Andre
        
        08\. Apr 2019 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/e81abfee20a1c255f2d4ddf8e4909745?s=75&d=mm&r=g)
        
        Jéremy
        
        Die liste von Fotos kommt auf data.txt File.
        
        08\. Apr 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e81abfee20a1c255f2d4ddf8e4909745?s=75&d=mm&r=g)
    
    Jéremy
    
    Hallo André,  
    Erst Vielen Dank für dein Projekt, es ist wirklisch cool.  
    Es braucht mehr oder weniger 10 Sek. nach dem "Cheeese" zu bearbeiten. Ist es normal ? Weisst du ob es wäre möglich zu schneller machen ? Ich benutze ein RPI3 aber ich habe auch ein PC probiert.  
    P.S. Ich hoffe dass mein deutsch ist nicht so schlimm :)
    
    07\. Apr 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
    
    Marcus
    
    Hallo Andre.  
      
    Vielen Dank für die Bereitstellung dieser Anleitung! Das spart schon mal eine Menge Arbeit.  
    Ich konnte das RPi soweit aufsetzen und habe mein Tablet sogar schon direkt mit dem Gerät verbunden. Wenn ich allerdings die Webseite aufrufe, sehe ich nur Deinen Banner ("Fork me on GitHub") in der rechten oberen Ecke und links oben die Zeichenfolge " ';} ?>"  
      
    Hast Du evtl. eine Idee was das Problem sein könnte? Danke im Voraus für eine Rückmeldung!
    
    04\. Apr 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Marcus,  
        das ist schwer zu sagen, da können einige Dinge nicht laufen. Du könntest mal gucken, ob du PHP richtig installiert hast. Hierfür könntest du neben die index.php eine test.php anlegen und <?php phpinfo() reinschreiben und diese Datei aufrufen. Ansonsten schaue mal, ob du evtl. in der config.inc.php etwas falsch geschrieben hast.  
        Viele Grüße André
        
        05\. Apr 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
            
            Marcus
            
            Hi Andre.  
              
            Danke für die Anregung, ich hab den RPi einfach mal neu aufgesetzt und dieses Mal folgenden 'apt-get' ausgeführt:  
              
            apt-get install -y git apache2 php7.0 php7.0-gd gphoto2 libav-tools  
              
            Mit der neuen PHP-Version kann ich die Homepage aufrufen :-)
            
            06\. Apr 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
    
    Christian
    
      
    Hallo André  
      
    meine Photobox zeigt sich mit einem Performanceproblem, für das ich nur die Ursache liefern kann und um Hilfe bitte.  
      
    Wenn ich den Button btn newpic verwende, wird die Vorschau nicht anzeigt.  
      
    Der Countdown zur Anzeige des Bildes bleibt in diesem Vorgang aktiv. Entscheidet man sich nicht rechtzeitig ein neues Foto zu machen (hab 10s eingestellt), wird alles ausgeführt bis takepic danach springt die Anzeige zurück auf den Startscreen.  
      
    Verlängere ich die Anzeige des Bildes (timetolive) auf z.B. 30s, gelingt die Anzeige immer (15s scheint die magische Grenze zu sein).  
      
    Ich denke, dass ein cleartimeout gesetzt werden muss. Leider gelingt es mir aber nicht die korrekte Stelle im code zu identifizieren.  
      
    Ich hab es im //Take Picture Button versucht, aber das zeigt keine Wirkung, wenn ich mich auf die Class newpic beschränke.  
      
    Hast du eine Idee, an welcher Stelle ich den clearTimeout einfügen muss, um dem entgegen zu wirken?  
      
    Gruß,  
    Christian
    
    29\. Mar 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Christian, ich verstehe dein Problem nicht ganz.  
        Die timetolive ist dafür da, dass jemand nachdem er ein Bild gemacht hat und nicht selbst wieder auf den Start-Bildschirm geklickt hat die Oberfläche für den nächsten Benutzer wieder zurückgesetzt wird. Also Ich mache ein Bild, gucke es mir an, stöbere vlt. durch die Galerie und dann gehe ich. Dann setzt sich nach normalerweise 90s die Oberfläche auf die Startseite zurück. 15Sekunden sind auf jeden Fall zu wenig, da das Signal an die Kamera gehen muss, die Kamera macht das Bild, sendet es zurück und der Raspberry rechnet es klein. Das dauert ein paar Sekunden und kann dann zu einem Reset direkt beim Bild machen führen. https://github.com/andreknieriem/photobooth/blob/master/resources/js/core.js#L691 Hier wird bei jedem Klick, der nicht auf der Startseite ist, wieder um die timetolive verlängert. Grüße André
        
        05\. Apr 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
            
            Christian
            
            Hallo André  
              
            vielen Dank für deine Antwort. Ich habe die Zeit runtergesetzt, da ich Galerie und Co nicht benutze. Ich hab alternativ dafür ne Slideshow auf einem zweiten Pi laufen, der die Bilder abgreift und anzeigt.  
              
            Es macht für mich jedoch den Anschein, dass der Timeout beim Klick auf "Neues Bild" nicht zurückgesetzt wird, sondern vom vorherigen Bild weiter läuft. Ich glaube aber auch, dass das Problem tatsächlich die Performance des Raspberries ist. Der Browser stellt die Countdowns nicht ordnungsgemäß dar, wenn die Power fehlt. Zumindest augenscheinlich, ich müsste mal stoppen.  
              
            Lasse ich die Seite ferngesteuert am PC laufen, komme ich mit 15Sek. ganz bequem aus, läuft die Seite im Chromium am Pi mit Touchscreen reichen die 15 Sekunden nicht aus. Es braucht wohl einen schlankeren Browser dafür.  
              
            Mein Gedanke war, den Timeout nicht zu verwenden, solange der Fotoerstellprozess läuft und erst damit zu beginnen, wenn das gemachte Bild angezeigt wird. Im Prinzip so, wie es auch von der Startseite aus der Fall ist. Aber das scheint architektionisch nicht vorgesehen zu sein, richtig?  
              
            Gruß,  
            Christian
            
            06\. Apr 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/0e4d1c3e44926da51e0c40c1a2b728ec?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo Andre,  
    zunächst einmal möchte ich mich für diese geniale Stück Arbeit bedanken. Ich plane dieses im Rahmen eines Gemeindefestes einsetzen zu wollen. Passende Box muss ich noch bauen.  
    Ich habe als Grundbaustein einen Raspi 1 b+ mit einer Canon EOS 450D, und der KitLinse (18-55) im Einsatz. Als Router eine alte Fritzbox 7270.  
    Nach ein paar Anlaufproblemen läuft das System jetzt schon recht gut, muss nur noch eine Stromquelle an die Canon anschließen und sehen, dass ich den Poweroff deaktiviert bekomme.  
    So, jetzt hätte ich aber doch noch einen Wunsch um glücklich zu sein (oder vielleicht doch zwei.) ;-)  
    1\. Wie und wo könnte ich noch eine Funktion einbauen, das eben getätigte Foto doch lieber wieder zu löschen und  
    2\. Wie muss ich es in den Pfaden eintragen, wenn z.B. der images-Ordner auf "/media/pi/VOL/images" liegt (externe Festplatte)? Das bekomme ich einfach nicht hin.  
      
    Gruß  
    DIrk
    
    28\. Mar 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/87552edec5a92e89114445ac17fcbd87?s=75&d=mm&r=g)
    
    Marc
    
    Nachtrag: In der config.inc.php in /var/www war \[dev\] = false, in /var/www/html stand es noch auf true (Fehler beim Speichern gemacht). Jetzt wird mir nach dem Countdown eine Fehlermeldung ausgegeben.  
    Du brauchst meine Kommentare nicht freigeben, ich versuche es nochmal mit einer Neuinstallation der App. Entschuldige den vielen Text.
    
    28\. Mar 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Marc, ist kein Problem ,dafür ist die Kommentar-Spalte ja da. Die Fehlermeldung kann von einem nicht richtig installierten php-gd kommen. Schau das mal nach ;)  
        Grüße André
        
        28\. Mar 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/87552edec5a92e89114445ac17fcbd87?s=75&d=mm&r=g)
            
            Marc
            
            Danke für die schnelle Antwort, nach der Neuinstallation hat es direkt geklappt! :)
            
            28\. Mar 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/87552edec5a92e89114445ac17fcbd87?s=75&d=mm&r=g)
    
    Marc
    
    Hallo André,  
    vielen Dank für Dein super Tutorial. Mein Problem: Statt eines Fotos wird nach dem Countdown nur der bunte Hintergrund der App angezeigt, unten die Optionen für QR Code, Druck etc.  
    Auf dem Pi 3 B+ mit einer Nikon D5100 kann ich über den Befehl gphoto2 --trigger-capture ein Foto machen. Der Prozess gvfsd-gphoto2 ist beendet und die App läuft auch nicht im dev mode. Ist das ein Rechte-Problem zwischen Server und gphoto2?  
    In /etc/sudoers habe ich (mit visudo) die Zeile www-data ALL=(ALL) NOPASSWD: ALL ganz am Ende eingefügt. Wo könnte mein Fehler liegen?  
    Danke und viele Grüße Marc
    
    28\. Mar 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/78a4c953ec02803702620f5ac856d993?s=75&d=mm&r=g)
    
    Peter
    
    Hallo ! Ich bekomme bei den Fotos immer sehr "kryptische" Dateinamen, z.B. 21be65cb961d3668f3a6213081cdb1cc.jpg ; 4cdc8a42493e5aad5a97b249286d0795.jpg  
      
    Weiß vielleicht jemand wie man das ändern kann ?  
      
    VG
    
    17\. Mar 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/571c4348f73a52b36c0ffda205d07427?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Peter,  
        Die Namen kommen aus takePic.php Zeile 6. Dort wird der Name auf einen Hash-Wert gesetzt, um Dopplungen zu vermeiden. Du kannst dort auch einen String mit einem Datum eintragen. Das würde dann so aussehen: $file = date('d.m.Y:h:i:s').'-meinTitel.jpg';  
        Grüße André
        
        18\. Mar 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1ed4deae9ea882bc80870c3a36a1b0b1?s=75&d=mm&r=g)
    
    Christian Kleine-Börger
    
    Moin, sehr geniales Projekt. Klappt in Kombi Pi3/D5200 auf Anhieb.  
    Aber gibt es die Möglichkeit die Fotos nur zu kopieren (sodass die auch auf der Kamera bleiben)?  
    Habe gphoto (vermeintlich) angepasst, aber die Fotos werden noch gelöscht.
    
    10\. Mar 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a3e8fa4a37b62193194128ffbb0067e6?s=75&d=mm&r=g)
        
        Manuel
        
        Hi, das ist eine super Frage an die ich mich gerne anschließen möchte ;-) Hinzu kommt noch wo ich genau die Einstellungen ändern kann um den Speicherort ggf. zu ändern. Habe vor die Bilder evtl. direkt extern, also auf einen Stick zu speichern.  
          
        Ich freue mich auf eineRückmeldung .  
          
        VG  
        Manuel
        
        11\. Mar 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
            
            Christian
            
            Hallo Manuel,  
              
            den Speicherort der Bilder kannst du in der Datei config.inc.php unter // FOLDERS anpassen. Du musst entsprechend dafür sorgen, dass die ausführende Anwendung in diesen Ordner schreiben darf.  
            Bei einem Stick musst du außerdem darauf achten, dass dieser beim Startup gemountet wird und bestenfalls immer den gleichen Namen bekommt, sonst wirst du jedesmal die Config-Datei anpassen müssen bevor du die Photobox verwenden kannst.
            
            29\. Mar 2019 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/e625f4fa08ab2ea3109afc2c52462683?s=75&d=mm&r=g)
        
        [Marvin Berstecher](maovies.de)
        
        Ich habe mich da mal reingelesen und man müsste so wie es im Projekt realisiert ist vor jedem Bild die einstellungen anpassen mit gphoto. Da sonst das bild nicht auf der SD-Karte der Kamera gespeichert wird, sondern nur im Ram wenn ich mich recht erinnere. An die Lösung erinner ich mich leider nicht mehr.
        
        11\. Mar 2019 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/2180e65506d00dec2a9dfcd475efd969?s=75&d=mm&r=g)
        
        Jean-Michel AMPHOUX
        
        add an option for gphoto. like --keep-raw for exemple.  
        in config.inc.php (line 36)
        
        11\. Mar 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/87552edec5a92e89114445ac17fcbd87?s=75&d=mm&r=g)
            
            Marc
            
            Unfortunately this isn't working. A line like sudo gphoto2 --capture-image-and-download --keep --filename=%s images'; does not produce an error, but also it does not what the command is supposed to do. Is there really no possibility of saving the images to SD or Raspi?
            
            28\. Mar 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/87552edec5a92e89114445ac17fcbd87?s=75&d=mm&r=g)
            
            Marc
            
            Die Fotos landen, wie im Tutorial steht, im Ordner images. Falls jemand von der Frage so wie ich aufs Glatteis geführt wird.
            
            28\. Mar 2019 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
        
        Christian
        
        Hallo Christian,  
        anpassen kannst du das in der Zeile:  
        $config\['take\_picture'\]\['cmd'\] = 'sudo gphoto2 --capture-image-and-download --filename=%s images';  
          
        laut gphoto2 --help ist der Parameter um Bilder auf der Kamera zu behalten --keep  
          
        Du kannst das am besten über das Terminal ausprobieren ohne die Webseite anpassen zu müssen. Wenn die Reihenfolge aus gphoto2 --usage relevant ist, sollte der Befehl wie folgt lauten:  
        sudo gphoto2 --keep --capture-image-and-download --filename=<deinpfad&dateiname>  
          
        
        29\. Mar 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1ed4deae9ea882bc80870c3a36a1b0b1?s=75&d=mm&r=g)
            
            Christian
            
            Hi,  
              
            danke, aber genau den Befehl habe ich schon eingetragen. Das funktioniert so leider nicht..
            
            05\. Apr 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/61a9790a924b634b7298f919cc67884b?s=75&d=mm&r=g)
            
            Andi
            
            Also inside the README now:  
              
            On some cameras you also need to define the capturetarget because Internal RAM is used to store captured picture. To do this use --set-config capturetarget=X option for gphoto2 in my.config.inc.php (replace "X" with the target of your choice):  
              
            $config\['take\_picture'\]\['cmd'\] = 'sudo gphoto2 --set-config capturetarget=1 --capture-image-and-download --keep --filename=%s images';  
            To know which capturetarget needs to be defined you need to run:  
              
            gphoto2 --get-config capturetarget
            
            10\. Sep 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/1297342e1d9502d19ff3ed7f513668c9?s=75&d=mm&r=g)
    
    Manuel
    
    Hallo,  
    zunächst mega Lob an das ganze Projekt. Leider bekomme ich das nicht ordentlich zum laufen, es scheint mir so als würde gphoto sich selbst im weg stehen. Wenn ich den Prozess gvfs beende funktioniert da ganze. Jemand ne idee? Kamera canon1200d  
      
    Gruß  
    Manuel
    
    07\. Mar 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2180e65506d00dec2a9dfcd475efd969?s=75&d=mm&r=g)
    
    Jean-Michel
    
    Hi Andre,  
      
    Do you have an exemple to insert imagamagick code in the print.php file ?  
    I do not have much skill on that. But it could make a research start.  
      
    Thx
    
    04\. Mar 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/78a4c953ec02803702620f5ac856d993?s=75&d=mm&r=g)
    
    Peter
    
    Hallo Andre,  
      
    danke für die tolle Fotobox. Ich würde sie gerne etwas anpassen. Könntest Du mir vielleicht die Dateien nennen, in denen der Countdown, das "Cheeeese" und der Text (Photobooth, Webinterface etc.) angepasst werden können ?  
      
    Vielen Dank !  
      
    
    02\. Mar 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/2180e65506d00dec2a9dfcd475efd969?s=75&d=mm&r=g)
        
        Jean-Michel
        
        folder "lang"
        
        04\. Mar 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/2180e65506d00dec2a9dfcd475efd969?s=75&d=mm&r=g)
    
    Jean-Michel
    
    Hi,  
      
    thx for this amazing Photobooth !  
    Question :  
    How print without QR CODE merge ?
    
    27\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi,  
        what do you mean? Is there a QR Code on your image? Because the image itself gets printed as far as I know, not the whole page.
        
        28\. Feb 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/2180e65506d00dec2a9dfcd475efd969?s=75&d=mm&r=g)
            
            Jean-Michel
            
            Hi,  
            when I print, I have the photo with the QR code.  
            But I found how to do it. By modifying the print.php  
              
            At line 58 I changed "$ filename\_print" to "$ filename\_source"  
            This print.php makes you want to use imagemagik. But I do not understand anything :)
            
            28\. Feb 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/882947f0b44d94be264b5d016ebac5f4?s=75&d=mm&r=g)
    
    Bernd
    
    Moin Andre,  
    vielen Dank für die sehr ausführliche Beschreibung der Photobox…  
    Es hat auch alles erstaunlich gut geklappt und ich konnte sogar meine alte EOS 350D reaktivieren. Nachdem ich die dann auf den normal Modus gestellt hatte, funktionierte auch alles.  
    Nur werden die Bilder nicht richtig in der Galerie angezeigt.  
    Mir kommt es so vor, als wenn das Platzhalter wären. Allerdings werden die Bilder richtig angezeigt, wenn man diese anklickt.  
    Ich melde mich per Email, damit ich auch einen Screenshot senden kann.  
      
    Ist dir so ein Fehler bekannt? Eventuell hat es ja etwas mit der Größe der Thumbs zu tun?? Da bin ich leider nicht so versiert im Web-designern…
    
    26\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Bernd,  
        hast du php-gd für deine PHP-Version installiert? Es scheint mir, als wären deine Thumbnails nicht generiert worden. Kannst du mal in den thumbs-Ordner schauen? Wenn da kein Bild drin ist, dann gibt es da Probleme.  
        Grüße André
        
        27\. Feb 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/882947f0b44d94be264b5d016ebac5f4?s=75&d=mm&r=g)
            
            Bernd
            
            Moin Andre,  
            vielen Dank für die rasche Antwort.  
            Nachdem ich nun die PHP7.0-GD installiert habe, funktioniert alles wie geplant.  
            Vielen Dank für die Beschreibung und die Hilfe.  
            Nun gehts vom Schreibtisch in die Scheune, um die Box zu bauen. :)  
            Sorry für den Doppelpost. ^^  
            Grüße
            
            06\. Mar 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/882947f0b44d94be264b5d016ebac5f4?s=75&d=mm&r=g)
    
    Bernd
    
    Hi,  
    bei mir funktioniert die Oberfläche und das Foto aufnehmen sehr gut.. Danke für die gute Beschreibung.  
    Mein Problem liegt in der Darstellung der Fotos in der Galerie. Dort sind nur Platzhalter angezeigt, die dann aber die richten Bilder sind, wenn man sie auswählt zum Anzeigen.  
    Das bezieht sich auf das Tablet, aber auch am PC..  
    Liegt das eventuell an zu großen Fotos. Ich meine die Dimensionen und nicht die MBs.. :)  
    Gab es schon ein ähnliches Problem??  
    Grüße
    
    26\. Feb 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a170a249fb6e46d9725a76e6eeb7e7ab?s=75&d=mm&r=g)
    
    florian
    
    Habt ihr schon Erfahrung mit der aktuellen PI Kamera gemacht?  
      
    Ich bekomme diese unter gphoto2 immer nur "Could not detect any camera  
    \*\*\* Fehler (-105: »Unknown model«) \*\*\*"  
      
    Die Kamera als solche ist korrekt am PI angeschlossen und mit "raspistill -o test.jpg" bekomme ich ein Bild.  
      
    Die Version von gphoto2 ist 2.5.20.1...  
      
    Habt ihr eine Idee für mich? :-/
    
    26\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Florian,  
        für die Kamera musst du gphoto nicht verwenden. Gphoto ist ein Treiber für den Raspberry, dass er DSLR Kameras bedienen kann. Da du deinen Befehl ja gepostest hast, kannst du sicherlich in der config.inc.php unter $config\['take\_picture'\]\['cmd'\] dein Kommando eintragen und es müsste funktionieren. Vielleicht musst du in der takePic.php dann nochmal schauen, was dein Kommando zurückgibt, da du irgendwie den Dateinamen und den Pfad und so dir angucken solltest ;) Wenn du was funktionierendes hast, kannst du es gerne hier mal zeigen, dann könnte man das als Feature ergänzen.  
        Grüße André
        
        26\. Feb 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a170a249fb6e46d9725a76e6eeb7e7ab?s=75&d=mm&r=g)
            
            Florian
            
            Ich habe in der Config jetzt folgende Zeile:  
            $config\['take\_picture'\]\['cmd'\] = 'sudo raspistill -o %s';  
              
            Das sorgt dafür, dass das Webinterface beim Bild aufnehmen auch den „Wird verarbeitet“ Textzug anzeigt bis schlussendlich ein Fehler angezeigt wird.  
              
            Unter Images sehe ich dann ein Bild mit dem (ich glaube) Datum als md5-Hash mit der Dateiendung jpg. Das sieht ja soweit erstmal nicht schlecht aus. Ich könnte mir vorstellen, dass das Problem darin liegt, dass die Datei root und nicht www-Data gehört. Das hab ich aber eben irgendwie (auch mit einem „chown www-data:www-data %s“ das ich einbauen wollte nicht lösen... :/  
              
            In der takepic.php dürften ja gar keine Anpassungen notwendig sein, oder? Die Dateinamen scheinen ja zu passen.  
              
            Viele Grüße  
              
            Florian
            
            27\. Feb 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hi Florian,  
                du musst noch in der Config.php die Einstellung für \['take\_picture'\]\['msg'\] anpassen. Da ist das, was deine Kamera-Software ausgibt, wenn das Bild gemacht wurde. Es muss nicht komplett passen, nur ein Teil muss drin stehen. Also gibt dein Pi-Camera Befehl sowas wie successfully saved 1243.jpg kannst du einfach in die Message successfully saved reinschreiben.  
                Anhand der Meldung erkennt der Befehl, ob das mit dem Bild geklappt hat und wenn nicht, dann kommt die von dir angesprochene Fehlermeldung und eine Erzeugung des Thumbnails und die Eintragung in die data.txt findet nicht statt.  
                Grüße André
                
                28\. Feb 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/04cb46093734a6cf30ff321b2e092bbd?s=75&d=mm&r=g)
                    
                    Julian
                    
                    Hi Andre,  
                    ich bekomme die raspistill Kamera einfach nicht zum laufen... trotz "take\_picutre\_msg".  
                      
                    Wenn ich den Befehl wie oben von Florian "sudo raspistill -t 1 -o %s"hinterlege werden Bilder aufgenommen und im Ordner "tmp" im Root abgespeichert das war es auch schon... :-( die Web Oberfläche meldet "Es ist ein Fehler aufgetreten bitte...."  
                    Wenn ich den Befehl mit festem Pfad angebe "sudo raspistill -t 1 -o /var/www/html/tmp/img.jpg" erstellt er das Bild wenigstens im richtigen Ordner aber auch leider nicht fortlaufend und wird auch anscheinend nicht von der Weboberfläche erkannt das er ein Foto gemacht hat.  
                      
                    Liegt es wirklich an den Fotos die unter root erstellt werden ?  
                      
                    würde mich sehr über Hilfe freuen bin leider am Ende meines Latein...  
                      
                    Danke und Gruß  
                    Julian
                    
                    15\. Aug 2019 [Antworten](#)
                    
            
            *   ![](https://www.gravatar.com/avatar/45315203953f63ce022c54add9846eb3?s=75&d=mm&r=g)
                
                Thorsten
                
                Hallo  
                  
                Hast du mitlerweile eine Lösung gefunden welcher Satz in der \['take\_picture'\]\['msg'\] stehen muss  
                Finde leider nirgends welchen Befehl die Kamera ausgibt damt die Fotos auch richtig gespeichert werden
                
                18\. Jul 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/45315203953f63ce022c54add9846eb3?s=75&d=mm&r=g)
                    
                    Thorsten
                    
                    @Andre  
                    Kann es auch damit zusammen hängen das die Rechte nicht stimmen?  
                    Wird der befehl ausgefürt das ein Foto gemacht werden soll wird eine Datei angelegt names data.txt besitzer ist www-data  
                    Die Bilder die aber gemacht werden sind vom Besitzer root gehe ich in den Entwicklermodus gehören die Bilder www-data  
                    Wo kann ich den Bsitzer www-data ändern das er auch root ist  
                      
                    Gruß  
                    Thorsten
                    
                    19\. Jul 2019 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/b1918702f7eb4ced73b2e8083701dd24?s=75&d=mm&r=g)
    
    Domi
    
    Hallo,  
    Nach einem „Einsatz“ kam die Frage auf, ob man sich nicht vor dem Auslösen der Kamera nochmal kurz sehen könnte. Ich hatte in meinen anfängen einen Monitor mit live view, dass war für viele Damen sehr wichtig. :)  
      
    Ist diese Lösung mit deinem System auch möglich? Ich dachte ich hätte das schon irgendwo mal gelesen.  
      
    Grüße  
      
    
    25\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Domi, das ist schon lange ein Thema und oft gefragt wurden. Ein Live-View vorher habe ich mit meiner Kamera damals nicht machen können und eine Raspberry Kamera oder ähnliches habe ich nicht. Bei Github im Projekt in den Pull-Request sind ein paar Ansätze/Umsetzungen (https://github.com/andreknieriem/photobooth/pulls).  
        Grüße  
        André
        
        26\. Feb 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/bdaa55069bbb568bc919dece2b44f4fd?s=75&d=mm&r=g)
    
    Flo
    
    Hi,  
    erstmal vielen Dank für die super Anleitung und Umsetzung!  
      
    Ich bin noch auf der Suche nach einem passendem Drucker. Kann jemand hierfür einen Fotodrucker empfehlen. Idealerweise recht "wartungsarm". Heist, dass man nicht ständig nach dem Papier oder Patronen schauen muss.  
      
    Danke!
    
    24\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Flo,  
        hier in den Kommentaren haben schon viele den Canon Selphy sehr gelobt und benutzt. Der soll auch ohne Probleme laufen.  
        Grüße André
        
        24\. Feb 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5f0f3879862ff34b3e6d9d3c28de9f59?s=75&d=mm&r=g)
    
    [Florian](fb-webservice.de)
    
    Hallo,  
    erstmal ein großes Dankeschön für dieses klasse Tutorial!  
    Dennoch habe ich eine frage. Wie ist es möglich das beim Fotoaufnehmen und speichern ein Rahmen um das Auto gesetz werden kann. Also sozusagen habe ich das Foto und ein "2. Bild" was ich gerne dadrüber legen möchte. Ich hoffe ihr könnt mir dabei helfen. Es ist mein 1. Projekt mit dem Raspberry
    
    02\. Feb 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/23e435da57466e1ffecde2678f510199?s=75&d=mm&r=g)
    
    schlupsi
    
    Hallo Zusammen,  
    leider habe auch ich ein problem und hoffe auf hilfreiche tips.  
    Mein Problem ist das nach installieren, einrichten und aufruf der Weboberfläche die Kamera nicht auslöst. Nach cheeeese :-) wird das Hintergrundbild der Weboberfläche gespeichert.  
    Die Kamera selbst wird unter der Shell von gphoto 2 erkannt und auch dort sind aufnahmen möglich.
    
    31\. Jan 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo, du musst in der config.php dev auf false setzen. Du hast den Demo Modus noch an.  
        Grüße Andre
        
        31\. Jan 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/23e435da57466e1ffecde2678f510199?s=75&d=mm&r=g)
            
            schlupsi
            
            Das ging ja super schnell, aber das hatte ich bereits gemacht.  
            $config\['dev'\] = false;
            
            31\. Jan 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/23e435da57466e1ffecde2678f510199?s=75&d=mm&r=g)
            
            schlupsi
            
            hat denn noch jemand eine idee, warum die Weboberfläche anstatt den Auslöser der Kamera zu betätigen, ein screenshot des hintergrundbildes tätigt?
            
            01\. Feb 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/23e435da57466e1ffecde2678f510199?s=75&d=mm&r=g)
            
            schlupsi
            
            niemand mehr eine Idee?  
            ich habe jetzt nochmals alles schritt für schritt wiederholt,mit dem gleichen Ergebnis.  
            Um zu testen ob gphoto überhaubt die kamera erkennt und auslösen kann, musste ich über die PI config erst die GUI ausschalten und die reine Shell starten.
            
            01\. Feb 2019 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/23e435da57466e1ffecde2678f510199?s=75&d=mm&r=g)
            
            schlupsi
            
            ich geb jetzt auf. Habe jetzt noch ein paar stunden probiert, aber über Webpage scheint der capture befehlt nicht an die kamera gesendet zu werden.  
            Direkt über die Shell mit "sudo gphoto2 --capture-image-and-download" funktioniert es.  
            dev ist auch auf false und der sudoers eintrag auch gemacht.  
            wäre es möglich, wenn jemand ein lauffähiges image bereitstellen könnte?
            
            02\. Feb 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/7bdf7c3d19f6e85cba22dea20004acdc?s=75&d=mm&r=g)
                
                Targus
                
                Hey Schlupsi. Ich hänge gerade an der gleichen Stelle fest, indem wohl kein Befehl (nach dem Cheese) zum auslösen der Kamera geschickt wird. Könnte es evtl. ein Berechtigungsproblem sein, oder wird dies einfach nur nicht ausglöst?
                
                04\. Feb 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/6d90bfcbe184efa8f656a93a1bcc8ceb?s=75&d=mm&r=g)
                    
                    [Martin](brauchichnicht)
                    
                    Damit der Webserver-User www-data gphoto2 ausführen darf, muss man noch folgende Dinge tun  
                      
                    in /etc/sudoers muss folgende Zeile hinzugefügt werden www-data ALL=(ALL) NOPASSWD: ALL
                    
                    10\. Feb 2019 [Antworten](#)
                    
    
    *   ![](https://www.gravatar.com/avatar/27db81778480f1569ae30b975c41de9d?s=75&d=mm&r=g)
        
        Sepp
        
        mit imagemagick geht das, habe das vor ein paar Monaten mal hinbekommen. Leider finde ich das Script nicht. Habe dabei das Originalbild genommen, mit dem imagemagick Befehl Combine mit einem Wasserzeichen versehen und in einem Dritten Ordner gespeichert.
        
        19\. May 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ce304b60dedfe427e79b661da098ffcc?s=75&d=mm&r=g)
    
    Thomas
    
    Hallo André  
    Vorweg ein großes Dankeschön für die grandiose Fotobox.  
    Möchte für ein neues Projekt (die erste Box läuft schon) die komplette Oberfläche schwarz bekommen und mit weißer Schrift. Alle anderen Elemente (Rahmen etc.) müssen verschwinden.  
    Ausgelöst und gedruckt soll mittels Button werden.  
    Komme aber mit dem Farben nicht hin. Was muss dafür alles geändert werden. Wo sind die Buttonfarben?  
    Grüße Thomas
    
    31\. Jan 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/af0bd42f3271729c9fa45b3964952cad?s=75&d=mm&r=g)
    
    DOMF
    
    wie stelle ich es am besten an, wenn ich möchte das der pi das WLAN erstellt und nicht den Umweg über den router gehen muss?  
    benutzt werden soll ein pi3, der bereits mit WLAN ausgestattet ist.
    
    31\. Jan 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi, dafür musst du in die Raspberry Einstellungen gehen.  
        https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md  
          
        Dort bekommst du dann auch deine IP-Adresse zu sehen, die du mit deinem Tablet aufrufen musst.  
          
        Grüße
        
        01\. Feb 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/0761d2093d61a45f0287ed3a91e6378a?s=75&d=mm&r=g)
    
    Phil
    
    Hi,  
    ich hatte vor ca. 1 Monat Dateien aus Git Code für mich übernommen. Nun habe ich blöderweise die Style.css angepasst und den entsprechenden Eintrag gelöscht. Die Änderungen finde ich nun auf Git nicht mehr!?  
    Es geht darum, wenn man auf den Drucken Button klickt, eine Message kommt "Bitte warten. Das Bild wird an den Drucker gesendet.". Dabei ist der Bildschirm gesperrt. Somit erhalten die Benutzer die Info, dass gedruckt wird und geben nicht nochmals x-beliebige Druckaufträge.  
    Der Eintrag in der index.php sieht wie folgt aus:  
      
      
    Bitte warten. Das Bild wird an den Drucker gesendet und gedruckt.  
    .  
    Hat jemand den Code für die Style.css oder kann mir da weiterhelfen?  
      
    Gruss Phil
    
    31\. Jan 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/9b7807bd6f638c539e39b090f1d5e099?s=75&d=mm&r=g)
    
    Nico
    
    Hi,  
      
    Ich habe leider folgendes Problem: wenn ich keine Kamera angesteckt habe und photo-booth starte zeigt es mir an das keine Kamea angsteckt ist. Sobald ich die Kamera anstecke zeigt es mit nur noch einen schwarzen Bildschirm an. Die Kamera ist eine Canon eos 500d. Hoffe es hat jemand einen Lösung.  
    Vielen dank schon einmal.  
      
    Grüße  
    Nico
    
    19\. Jan 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/dc7a057138e01182ac607da7464e6992?s=75&d=mm&r=g)
    
    Domi
    
    Hallo zusamen,  
    super tolles Projekt, danke dafür.  
      
    Leider schaffe ich es nicht, meine Nikon D5300 zu Verbinden. Muss ich evtl irgendwo noch was einstellen (config) oder ähnliches ?!  
      
    Gruß Domi
    
    10\. Jan 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo Domi,  
        bitte schaue mal im gphoto, ob deine kamera überhaupt erkannt wird.  
        gruß  
        steffen
        
        11\. Jan 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/dc7a057138e01182ac607da7464e6992?s=75&d=mm&r=g)
            
            Domi
            
            Hallo Steffen,  
            ja, Kamera wird erkannt. Leider bin ich ein blutiger Anfänger und weiß nicht mehr weiter :(  
            Grüße
            
            11\. Jan 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/d906ccd7c688838dbba2754e827db17c?s=75&d=mm&r=g)
                
                Thore
                
                Hallo, selbes Problem mit der Nikon D3100.  
                Zudem erscheint die Fehlermeldung nach auslösen des Programmes:  
                "Es ist ein Fehler aufgetreten, bitte versuche es erneut"  
                php-gd wurde erfolgreich installiert.  
                Bevor ich in der config.inc.php den Wert von true auf false geändert habe, hatte ich das Programm getestet und das Programm macht auch einen Screenshot und legt es in den richtigen Ordnet ab.  
                Was mache ich falsch bzw. was habe ich vergessen.  
                Muss ich die Rechte für den thumbs und image Ordner ändern und wenn ja wie?  
                Schon mal Danke für eure Antworten.  
                Gruß
                
                13\. Jan 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/6a9b3efed2848f7a80d68760764451c0?s=75&d=mm&r=g)
                    
                    [Enno](tricktresor.de)
                    
                    Du musst wahrscheinlich die library für die thumbnails installieren (avconv, siehe Blog).
                    
                    13\. Jan 2019 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/d906ccd7c688838dbba2754e827db17c?s=75&d=mm&r=g)
                        
                        Thore
                        
                        Ist auch installiert, allerdings klappt es immer noch nicht. Hättest du noch eine weitere Idee, woran es liegen könnte?  
                        Gruß
                        
                        14\. Jan 2019 [Antworten](#)
                        
                
                *   ![](https://www.gravatar.com/avatar/e5adcb6c0f90d28de0199c813af8d1bc?s=75&d=mm&r=g)
                    
                    Kai
                    
                    Das Problem hatte ich mit der Nikon D3100 als ich mit Noobs das Raspbian mit grafischer Oberfläche als Basis installiert hatte. Nach einer Neuinstallation mit Raspbian Strech Lite (ohne GUI) als Basis war dann der Fehler beseitigt. Ich kämpfe nur noch mit den langen Übertragungszeiten nach dem Auslösen bis zur Anzeige des Bildes
                    
                    10\. Apr 2019 [Antworten](#)
                    
    
    *   ![](https://www.gravatar.com/avatar/6d90bfcbe184efa8f656a93a1bcc8ceb?s=75&d=mm&r=g)
        
        [Martin](brauchichnihct.de)
        
        Kannst du die Kamera denn über die Konsole auslösen?  
        Die Verbindung erfolgt über ein USB Kabel, das von der Kamera an den Raspberry geht.  
        Wenn alles läuft und du auf der Konsole des Pis bist, versuch mal das:  
        "gphoto 2 --auto-detect" (ohne Anführungszeichen)  
        Findet gphoto dann deine Kamera?  
          
        
        10\. Feb 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/59a22d59f4a014a78e31ee0c0468b412?s=75&d=mm&r=g)
    
    Florian
    
    Hallo zusammen,  
    danke erstmal für das tolle Projekt.  
    Das Basissystem läuft bei mir relativ stabil dennoch habe ich ein paar Probleme:  
    1.  
    Kamera löst manchmal nicht aus. Denke es liegt am AF. Hat da jemand Empfehlungen für die Einstellung an der Sony Alha 6000?  
    2.  
    Wenn der Fokus genug Licht hat und dann auslöst ist die 1. Anzeige des Bildes total überdimensioniert. Wo kann man die Auflösung für die Anzeige des 1. Bildes einstellen? Danach in der Galerie wird alles super angezeigt und an die Bildschirmauflösung angepasst.  
    3.  
    Ich habe das Bild bg.jpg (ressources Ordner)ausgetauscht durch meinen eigenen Hintergrund. (ersetzt durch meinen mit gleichem Namen)  
    Dennoch wird nach Neustart des PIs und aktualisieren der Internetseite im Browser der gleiche Hintergrund angezeigt.  
    Hat jemand eine Idee woran es liegt? Ich arbeite nur gelegentlich mit raspberry PI und mein HTML ist etwas veraltet.  
    Danke schon mal!
    
    07\. Jan 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/e625f4fa08ab2ea3109afc2c52462683?s=75&d=mm&r=g)
        
        Marvin
        
        Für dein erstes Problem würde ich dir generell empfehlen keine AF bei einer Photobox zu verwenden, sondern diesen vorher einzustellen.
        
        21\. Jan 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/59a22d59f4a014a78e31ee0c0468b412?s=75&d=mm&r=g)
    
    [Florian](-)
    
    Hallo,  
    bei mir läuft der das ganze auch ziemlich gut. Habe aber 2/3 Problemchen.  
    Evtl. hat jemand Tipps dazu.  
    1\. Meine Sony Alpha 6000 scheint manchmal nicht richtig zu fokusieren und dann tritt ein Fehler auf. Ich habe das Gefühl das tritt nur bei schlechtem Licht auf. Hat wer ne Idee für die Kamera Einstellungen?  
    2\. CUP unterstützt meine verfügbaren Druck wohl nicht. Da muss ich sehen was ich organisieren kann.  
    3\. Ich würde gerne mein eigenes Hintergrundbild für meine Hochzeit einbinden. Wenn ich jedoch den original Hintergrund bg.jpg ersetze scheint das nicht zu helfen und der bisherige Hintergrund bleibt aktiv. Was muss ich tun damit das neue Bild verwendet wird?  
    Danke schon mal für eure Ideen?  
    VG
    
    07\. Jan 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/14ab9484acc2d559e0fcd55e6676cdce?s=75&d=mm&r=g)
        
        Norman
        
        Hallo,  
          
        1\. Hast du das Fokuslicht in der Kamera aktiviert und auf automatische Messfelder eingestellt?  
        2\. Sobald der Drucker als Standarddrucker in den Systemeinstellungen eingestellt ist und eine Testseite ausdruckt funktioniert der Druckbefehl Out of the box.  
        3\. Hast du auf dem Tablet den Browserverlauf gelöscht und die Seite komplett neu geladen?
        
        07\. Jan 2019 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/59a22d59f4a014a78e31ee0c0468b412?s=75&d=mm&r=g)
            
            Florian
            
            Hi Norman,  
            danke. Denke 1. bekomme ich so irgendwie hin. Automatische Messfelder und Focuslicht hatte ich auch eingeschaltet und so habe ich kaum Aussetzter. Vor Ort habe ich auch gute Ausleuchtung.  
            2\. Ich habe nun einen anderen Drucker, aber lasse den Drucker vermutlich wegen Druckgeschwindigkeit und Qualität weg. Mal sehen... .  
            Habe im Moment noch das Problem wie du. Aus dem Home Bereich (nicht aus der Galerie) werden immer 2 Aufträge gesendet.  
            3\. Das mit dem Browserverlauf hatte ich inzwischen auch herausgefunden.
            
            08\. Jan 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/14ab9484acc2d559e0fcd55e6676cdce?s=75&d=mm&r=g)
                
                Norman
                
                Hallo,  
                  
                das mit dem doppelten Druck habe ich inzwischen gelöst:  
                In der Datei photobooth/resources/js/core.js  
                muss in den Zeilen 126 und 127  
                'click touchstart' durch 'click touch'  
                ersetzt werden.  
                  
                Das hat wohl mit der Toucheingabe auf dem Tablet zu tun...  
                  
                Viel Erfolg
                
                10\. Jan 2019 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                    
                    Andre Rinas
                    
                    Hallo Norman,  
                    kannst du mir sagen, welchen Browser und welches Gerät du verwendest?  
                    Deine Angabe mit click touch ist nämlich kein valides Javascript. Es gibt die beiden "Events" dort damit es bei Klick und bei Beginn des Berührens auf einem Touch display ausgeführt wird. Ein Browser nimmt eigentlich dann immer nur das Event, dass zu ihm passt. Ist nur ein click drin, dann kommen Touch-Browser damit auch klar und sagen ok dann ist das jetzt ein Klick. Deswegen wird durch deine Änderung nur click und nicht touchstart ausgeführt, also einmal. Bei dir hört es sich aber mit der normalen Implementierung an, als würde dein Browser das Touchstart und Click Event gleichzeitig ausführen.  
                    Grüße André
                    
                    11\. Jan 2019 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/14ab9484acc2d559e0fcd55e6676cdce?s=75&d=mm&r=g)
                        
                        Norman
                        
                        Hallo Andre,  
                          
                        bei mir ist das ein Medion Lifetab S10346 mit Android 5.0.2. Ich habe vorwiegend den ChromeBrowser verwendet. Es passierte aber auch wenn ich andere Browser auf dem Tablet genommen habe. Wenn ich von einem Notebook mit Ubuntu und Vivaldi Browser den Druck gestartet habe, wurde das Bild nur einmal gedruckt. VG
                        
                        13\. Jan 2019 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/14ab9484acc2d559e0fcd55e6676cdce?s=75&d=mm&r=g)
    
    Norman
    
    Hallo,  
      
    ich habe das Problem, dass der Druckauftrag zweimal abgeschickt wird. Aber nur von der "Home" Seite aus. Wenn man aus der Gallerie druckt wird nur ein Druckauftrag angelegt.  
      
    Vielleicht hat jemand eine Lösung?
    
    04\. Jan 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5964a77029abe2e23a7993823c9e2b90?s=75&d=mm&r=g)
    
    Nik
    
    Hallo, habe bisher soweit alles zum Laufen gekriegt - obwohl ich 0 Ahnung von Linux habe..sogar das "Drucken" funktioniert nun. Einziger Wehrmutstropfen ist das fehlende Live-View. Ich habe gesehen, dass auf Github einiges dazu steht? Gibt es hier bereits etwas was implementiert ist? Kann ich zum "ausprobieren" einfach die Files entsprechend umschreiben oder hat jemand schon einen "passenden" Code der funktioniert? Danke vielmals!
    
    04\. Jan 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c9b20714f57c54775d9bc7e2a5751777?s=75&d=mm&r=g)
    
    Chris
    
    Hallo und vielen Dank für diese tolle Anleitung. Nachdem es schon mehrmals erfolgreich geklappt hat, habe ich nun folgendes Problem:  
    Nachdem auf einer Partynacht viele Bilder gemacht wurden, und diese auch korrekt in der Galerie angezeigt wurden, stellte ich am nächsten Tag verblüfft fest, dass der var/html/images Ordner komplett leer ist. Auch über Recuva und Photorec sind die geschossenen Bilder nicht mehr auffindbar, als seien sie nie gemacht worden... Hat jemand noch eine Idee? Vielen Dank!
    
    03\. Jan 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/f1134fef2f74204f1c2233a236089b42?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Chris, das klingt ja richtig blöd! In der Galerie werden ja erst nur verkleinerte Bilder angezeigt. Hast du in der Galerie mal probiert die Bilder anzuklicken? Ansonsten sind vlt. auf deiner Kamera die Bilder liegen geblieben, also dass das Downloaden von der Kamera nicht geklappt hat? Und bist du im richtigen Ordner?  
          
        Grüße Andre
        
        03\. Jan 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3359a2c513f358f32d01e1d144bf3fee?s=75&d=mm&r=g)
    
    Canon 750D
    
    Hallo,  
    kann mir jemand weiterhelfen wie ich eine Live Vorschau der Kamera (Canon EOS 750D) auf der Startseite (localhost) einbinden kann.  
      
    Vielen Dank
    
    29\. Dec 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/dc7f5303ff0d43bcf18a8abd5c834773?s=75&d=mm&r=g)
        
        Christian Reyer
        
        Hey das ist eine coole Idee werde mal meinen Touch Laptop mit ubuntu bestücken und diesem Project Aktuell Win 10 und dslrbooth .  
          
        Weil ich es nicht einsehe diese Lizenz gebühren  
          
        Live view wäre super geil :)  
        Kann Mann statt cheeze auch ein Bild einbinden ?
        
        31\. Dec 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo,  
              
            eine Live Vorschau habe ich selbst noch nicht probiert. Anstelle von Cheese ein Bild anzuzeigen ist möglich, dadür müssteste in der core.js mal nach dem Cheese String suchen und diesen evtl durch ein Html Img ersetzen. Falls du weitere Infos brauchst, sag Bescheid.  
              
            Grüße Andre
            
            03\. Jan 2019 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/6a9b3efed2848f7a80d68760764451c0?s=75&d=mm&r=g)
                
                [Enno](tricktresor.de)
                
                Hi Andre! Tolle Anwendung, die du geschrieben hast! Das mit dem Liveview würde ich auch gerne probieren. Ich verstehe auch, wie man vor dem Countdown von der Kamera ein Livebild bekommen könnte, dass man im IMG Tag einbinden könnte, aber ein Stream?  
                Gruß enno
                
                13\. Jan 2019 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/d327bd1bbdd671eac6b0f1849a61590b?s=75&d=mm&r=g)
                
                AndréL
                
                Hi,  
                Ja LiveView wäre der absolute kracher... wenn's nicht über die DSLR geht dann evtl mit der Pi-Camera?  
                  
                Grüße aus Hannover
                
                16\. Jan 2019 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/9ef9d6ea2b2ef87a3fca418d35d8a37b?s=75&d=mm&r=g)
    
    SelphyUser
    
    Hallo zusammmen, habe eine Frage an die Selphy User - wie habt ihr genau den Selphy eingebunden? Ich habe verstanden, dass CUPS installiert werden muss - jedoch dann verstehe ich nicht die weiteren Schritte, zudem die Config dahingehend anzupassen, dass auf Port 631 geschaut wird. Die ganzen Anleitungen im Netz sind(meinem Gefühl nach) mit Fehlern im Text..hat vielleicht jemand eine Step-by-Step Anleitung für einen Anfänger? Fotos werden gemacht, bei meinem ersten versuch mit Cups wurde der Befehl wohl registriert..aber es wurde nichts gedruckt...
    
    28\. Dec 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/1516cded048adb56c38834c491ca9d38?s=75&d=mm&r=g)
    
    Niklas
    
    Hallo,  
    habe leider auch das Problem, dass die Bilder gemacht werden, im Image Ordner abgelegt, jedoch dann der Fehler kommt "Es ist ein Fehler aufgetreten versuchen Sie es erneut". Durch googlen konnte ich erfahren dass unter Stretch es wohl kein php5-gd mehr gibt? Bin noch neu auf dem Gebiet daher bin ich hier schon mit meinem Latein am Ende, da ich folgende Fehler bekomme: sudo apt-get install php7-gd  
    Paketlisten werden gelesen... Fertig  
    Abhängigkeitsbaum wird aufgebaut.  
    Statusinformationen werden eingelesen.... Fertig  
    E: Paket php7-gd kann nicht gefunden werden.  
    pi@raspberrypi:~ $ sudo apt-get install php5-gd  
    Paketlisten werden gelesen... Fertig  
    Abhängigkeitsbaum wird aufgebaut.  
    Statusinformationen werden eingelesen.... Fertig  
    Paket php5-gd ist nicht verfügbar, wird aber von einem anderen Paket  
    referenziert. Das kann heißen, dass das Paket fehlt, dass es abgelöst  
    wurde oder nur aus einer anderen Quelle verfügbar ist.  
    Kann mir jemand hier auf die Sprünge helfen?
    
    28\. Dec 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/9d8aac7e419c1648faa4b22cd6fbe7d4?s=75&d=mm&r=g)
        
        Kuriosus
        
        Hi,  
        das Paket heißt nun einfach php-gd.
        
        31\. Dec 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/bce56f9ebc80ee680f2942829a3b498b?s=75&d=mm&r=g)
    
    gerrit
    
    Hallo Zusammen,  
      
    Welchen Drucker nutzt ihr für die Box? Irgendwie ist mir der Canon shelpy zu teuer. Zumal man alles 30 Bilder die Patronen tauschen muss.
    
    17\. Dec 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/3690f01d1e1f71022d96e46f4b8e99e1?s=75&d=mm&r=g)
    
    Michael
    
    Hallo,  
      
    wie ist es mit einem Drucker ansteuern? Geht das auch?
    
    12\. Dec 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a58310f7297fcf28803ee4bbe6d9021e?s=75&d=mm&r=g)
    
    Michael
    
    Guten Tag, erst einmal vielen Dnak für dieses Hammer Projekt finde ich klasse. Nun zu meiner Frage welche Datei muss ich abändern um das Design auf dem Tablet anzupassen?
    
    04\. Dec 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/77ae8e682944e9886d7011c768efdb39?s=75&d=mm&r=g)
    
    Kevin
    
    Hallo echt Klasse Projekt Hut ab, nur eine Frage die mir offen bleibt beim Ausdruck von den Bildern.... ist es möglich ein Fotostempel direkt mit zudrucken oder einen Namen?  
      
    Wie kann man das irgendwie integrieren, hat jemand ne gute Lösung für mich?  
      
    LG Kevin
    
    11\. Nov 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
        
        [Reinhard](reinhard-rebernig.at)
        
        Hallo,  
          
        in kürze werde ich eine online Demo basierend auf dieses Projekt veröffentlichen, da gibts genug Möglichkeiten :)  
          
        LG
        
        18\. Mar 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/af534e8d47c0e21e8d83e276d5eaf454?s=75&d=mm&r=g)
    
    Marc
    
    Hallo Andre,  
    erstmal vielen Dank für deine super Arbeit und Beschreibung von deinem Tutorial.  
      
    Da Projekt läuft bei uns einbahnfrei.  
    Allerdings haben wir nur eine Frage und zwar bei unserer Photobooth Box habe wir ein Tablet eingebaut in der Horizontalen nun ist unsere Frage an dich wie kann man den TAKE PIC Button etwas nach Oben platzieren damit er nicht mehr so am unteren Rand vom Tablet sich befindet.  
      
    Vielen Dank im vorraus  
    Lg aus Luxemburg
    
    10\. Nov 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        André Rinas
        
        Hallo Marc,  
          
        dafür müsstest du nur in der style.css in Zeile 315 den Wert bottom erhöhren. Dieser liegt gerade bei 50px.  
          
        Grüße
        
        19\. Nov 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7f38382783d97662a8018d87afda0cac?s=75&d=mm&r=g)
    
    Gabriela
    
    Hallo,  
    ich habe die Photobooth nun schon auf einigen Feiern im Einsatz gehabt und sie hat immer für Stimmung gesorgt.  
    Nun haben sich meine Kinder gedacht, sie schenken mir zum Geburtstag einen programmierbaren USB Buzzer. :-)  
    Und da beginnen meine Probleme, wie bekomme ich ihn zum auslösen?  
    Wenn ich die Weboberfläche unter Windows aufrufe und den Buzzer drücker funktioniert es schon mal. Ich wollte aber nicht auch noch einen Windows PC in meine Box bauen. Sicher gibt es eine Möglichkeit den Buzzer an den Raspi zu hängen und auslösen zu lassen. Ich wäre euch echt sehr dankbar, wenn ihr mir da Tipps geben könnt. Danke schon mal.  
    Liebe Grüße  
    Gabriela
    
    07\. Nov 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
        
        Reinhard Rebernig
        
        Hi, habe meine Fotobox auch basierend auf das tolle Projekt nun schon ein dreiviertel Jahr im Einsatz und betreibe das ganze aus Performance Gründen auf einem Ubuntu Netbook da ich einige Erweiterungen eingebaut habe. Zum Buzzer kann ich nur sagen, es gibt auf Amazon Gamepad Platinen welche du mit USB anschließen kannst. Den Buzzer habe ich auf einen Knopf der Platine gelötet und mit gamepad.js (eine JavaScript Library) angebunden (ist somit Betriebssystem unabhängig)
        
        08\. Nov 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/6a9b3efed2848f7a80d68760764451c0?s=75&d=mm&r=g)
        
        [Enno](tricktresor.de)
        
        Das würde ich auch gerne machen!  
        Hast du inzwischen eine Lösung gefunden, Gabriela?  
        Ich würde sogar gerne mehrere Buttons verwenden, quasi als Ersatz für die Buttons in der Weboberfläche.  
        Ich würde das Projekt von Andre Gerne mit Monitor anstelle eines Tablets verwenden. Aber da ist dann genau das Problem, dass man beim Tastendruck mit dem aktuellen browsertab kommunizieren muss.  
        Ich denke, dass man dafür websockets verwenden muss (Sockets.io).  
        Da hören meine Programmierkenntnisse dann aber auch auf...  
        Wäre für Tips dahingehend dankbar.  
        Gruss enno
        
        13\. Jan 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d5b149fd651fb8d31a4bbd0326a96616?s=75&d=mm&r=g)
    
    Mario Guidone
    
    würde die photobox auch mit der picam v2 funktionieren? danke im vorraus
    
    28\. Oct 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        André Rinas
        
        Hallo Mario,  
          
        ich denke schon. Dafür müsstest du den Befehl den du brauchst um mit der PiCam ein Bild zu machen einfach in der config Datei ergänzen. Dann könnte es schon fast gehen.  
          
        Grüße André
        
        19\. Nov 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a3bbbd65a462665285e7682cb87a802a?s=75&d=mm&r=g)
    
    Steffen
    
    Hallo,  
    vielen Dank an Andre Rinas für das klasse Projekt. Es läuft sehr gut und stabil bei mir. Ich habe einen Canon Selphy CP 1300 eingebunden, der auch prima druckt. Problem ist nur, dass nach Auslösen des Druckbefehls auf dem Bildschirm keine Meldung "Foto wird gedruckt" oder ähnliches erscheint. Das hat den Nachteil, dass ungeduldige Benutzer mehrmals drücken und dann reihenweise das selbe Bild gedruckt wird.  
    Kann mir jemand einen Tipp geben, wie ich eine Funktion für eine Meldung "Foto wird gedruckt", die kurz erscheint einbinden kann?  
    Vielen Dank und beste Grüße  
    Steffen
    
    25\. Oct 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
        
        steffen
        
        Hallo Steffen,  
          
        ich habe das übber cups gelöst. Das Problem hatte ich auch. Nach einer Feier waren 400 Druckaufträge in der Warteschlange. Habe im Cups die Warteschlange auf 1 gestellt.  
        Dann ist immer nur ein Auftrag drin.  
          
        gruß  
        Steffen
        
        29\. Oct 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/36e99274bb8777349207433786ef3f19?s=75&d=mm&r=g)
            
            Jürgen
            
            Hallo Steffen,  
            ich habe das gleiche Problem mit den Druckauftägen, weil der Drucker erst nach einer kurzen Wartezeit zu drucken beginnt.  
            Kannst Du kurz erläutern, wie und wo die Warteschlange der anstehenden Druckaufträge begrenzt werden kann?  
            Danke!  
            Lg Jürgen
            
            18\. Nov 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/5710ad9fe9fb45cadce3ad17f2f574fc?s=75&d=mm&r=g)
                
                Luke
                
                Meine Erkenntnis zu dem Thema: Du kannst das in der Config von Cups (cupsd.conf) einstellen. Dazu schreibst du 'MaxJobs 1' oder 'MaxJobsPerPrinter 1' in eine neue Zeile der Config. Mehr dazu findest du im Manual unter 'man cupsd.conf'.  
                  
                Gruß Luke
                
                11\. Aug 2019 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/ca8deae6f2b2de70eff9378fded1d105?s=75&d=mm&r=g)
    
    Mario
    
    Hi Andre  
    Erstmal ein riesiges Dankeschön. Meine Box ist gerade am entstehen und ich würde gerne noch einen Funkbuzzer einbauen. Dazu möchte ich einen Arduino Micro verwenden, welcher einen "Enter" Befehl via emulierter USB-Tastatur sendet.  
    Könntest Du mir sagen, wie ich den Fokus auf den Butten lege und dieser auf die Enter Taste reagiert? Geht das überhaupt?  
      
    Beste Grüsse aus der Schweiz  
    Mario
    
    16\. Oct 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Mario,  
        das mit dem Enter-Button müsste recht einfach gehen.  
        https://github.com/andreknieriem/photobooth/blob/master/resources/js/core.js#L201 Wenn du hier guckst, wird definiert, was ein Klick auf den Button für das Fotomachen macht. Hier könntest du den Inhalt kopieren und das Ganze auf den Enter Btn reagieren lassen.  
        $(document).keyup(function(e) {  
        if(e.keyCode == 13) { // Enter code see http://tools.andrerinas.de/get\_js\_keycode  
        // hier der andere Code  
        }  
        });  
          
        Das wars auch schon!  
        Grüße André
        
        17\. Oct 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
        
        Frank G.
        
        Alternativ sollte es auch mit folgendem Code gehen, den Du in Zeile 215 ff. einfügst:  
        // .takePic when pressing Enter=13  
        $(document).ready(function()  
        {  
        $(document).bind('keypress', function(e) {  
        if(e.keyCode==13){  
        $('.takePic').trigger('click');  
        }  
        });  
        });  
        Ich habe mir einen Li-Ion-betriebenen Funktbutton mit einem Teensy-LC und einem nRF24L01-Funkmodul als Sender gebaut. An meinem Windows 10 Tablet - über das ich das Webinterface aufrufe - ist ein Teensy 2.0 mit einem weiteren nRF24L01-Funkmodul als Empfänger angeschlossen, der das Enter-HID-Keyboard-Signal empfängt.  
        In meinem Sketch nutze ich die Bibliothek RF24 von TMRh20, die ich über die Arduino Software auf die beiden Teensys hochgeladen habe,
        
        18\. Oct 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/574dc039b8d9dbc19bd38623e2860162?s=75&d=mm&r=g)
        
        Mario
        
        Besten Dank für eure Hilfe. Ich habe den Code von Andre eingebaut und gerade vorher meinen Funkempfänger getestet. Läuft perfekt.  
          
        Muss nur noch einbauen, dass er jeweils auf die Startseite zurückspringt, wenn der Buzzer gedrückt wird.  
          
        Danke nochmals und schönes Wochenende  
          
        Mario
        
        20\. Oct 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e5c81de86a84d6c6c0f3526347f0f6b8?s=75&d=mm&r=g)
    
    Jutsus
    
    Hallo, ich bin Leider relativ unerfahren und es kann gut sein, dass ich einiges Falsch gemacht habe...  
    Zuerst einmal habe ich gphoto7.gd und nicht die 5er geht das auch?  
    Ein weiteres Problem ist, dass meine Kamera nicht verbunden ist. (ist Kompatibel)  
    Können sie mir helfen?
    
    12\. Oct 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/6cb7e0aefb35b72b8a68bda991c3360a?s=75&d=mm&r=g)
    
    Tobias Häcker
    
    Hallo zusammen.  
    Ich habe das Problem, dass keine Thumbnails angezeigt werden. Es sind nur leere Rahmen. Kennt jemand das Problem?  
    Habe PHP 7 inkl. GD installiert.  
    Danke für eure Antwort.  
    Viele Grüße
    
    11\. Oct 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tobias, das passiert tatsächlich eig. nur, wenn gd nicht richtig funktioniert oder php keine Rechte hat in den Thumbs Ordner Bilder zu speichern. Kommt denn eine Fehlermeldung, wenn du auslöst? Ansonsten check mal, ob der Ordner thumbs die rechte deines Webusers hat, meistens beim raspberyy www-data. Wenn er dort root oder pi hat, dann kannst du mit chown www-data:www-data thumbs den Ordner reparieren.  
        Grüße André
        
        12\. Oct 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/fbcde113b6256be7f2a327ae74924469?s=75&d=mm&r=g)
        
        Daniel
        
        Hallo Tobias. Bei mir hat der thumbs Ordner schlichtweg gefehlt. Nachdem ich ihn händisch unter /var/www/html angelegt und ihm die benötigten Rechte gegeben hatte, funktionierten die Thumbnails.
        
        05\. Nov 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c1d8be7f0f44a422b1538353809b5552?s=75&d=mm&r=g)
    
    Patrick
    
    Hallo erstmal vielen Dank für die tolle Arbeit. Kann mir jemand erklären wie ich selphy-go einrichte so dass der Canon Selphy 1200 läuft. Schon mal vielen Dank.
    
    03\. Oct 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c2af30070b75c4f3f4737360202e462d?s=75&d=mm&r=g)
        
        Bernd Brueckner
        
        Hallo Patrick,  
        zuerst einmal benötigst du CUPS. Du findest genug Anleitungen dazu im Internet. Danach richtest du via CUPS deinen Drucker ein.  
        In der config.inc.php muss du dann den Druckbefehl angeben. bei mir läuft derzeit ein Selphy CP1300.  
        Dieser sieht wie folgt aus:  
        $config\['print'\]\['cmd'\] = 'sudo lp -d <dein CUPS-Drucker> -o landscape -o fit-to-page %s';  
        Ich hoffe, ich konnte die weiter helfen.
        
        03\. Oct 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/db941ef707f10352448fc75b623b9fa9?s=75&d=mm&r=g)
            
            Marcus
            
            Hallo Patrick.  
              
            Ich benutze den gleichen Drucker wie Du und kann damit auch gut drucken. Einziges Problem: der Ausdruck erfolgt nicht auf das gesamte Blatt des Canon Fotopapier, da ist ein ca. 2mm breiter Rand an allen Seiten (auch bis zu der Knickkante).  
            Hast Du dafür eine Lösung gefunden?  
              
            Danke im Voraus für eine Antwort!
            
            18\. Apr 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/b64fedef833a5088d2b7eff06209fdff?s=75&d=mm&r=g)
    
    Chris
    
    Hallo, erstmal vielen Dank für dieses tolle Projekt. Jedoch bin ich auf einProblem gestoßen und zwar kann ich die Bilder leider nicht ausdrucken. Wenn ich aber im Terminal. "sudo lp -d mein Drucker -o landscape -o fit-to-page Bildname" eingebe. Dann wird das Bild gedruckt. Ich weiß so langsam echt nicht mehr weiter. Ich hoffe ihr könnt mir helfen. MFG
    
    24\. Sep 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Chris,  
        hast du mal in der config.inc.php geschaut, ob der Druckbefehl da deinem entspricht? Soweit ich das sehe fehlt der Druckername in der default config.  
        Grüße André
        
        25\. Sep 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/b64fedef833a5088d2b7eff06209fdff?s=75&d=mm&r=g)
            
            Chris
            
            Hi Andre, danke für die schnelle Rückmeldung. den o.g. Befehl habe ich auch so in der config drin stehen. lediglich %s habe ich eben zum testen mit dem Namen des Bildes geändert.
            
            25\. Sep 2018 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/b64fedef833a5088d2b7eff06209fdff?s=75&d=mm&r=g)
            
            Chris
            
            Hi, danke für die schnelle Rückmeldung. Habe die o.g. zeile direkt aus der config kopiert. Lediglich %2 durch den Bildnamen ersetzt.  
            Grüße
            
            25\. Sep 2018 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
        
        Frank G.
        
        So versucht?  
        $config\['print'\]\['cmd'\] = 'sudo lp -d DRUCKERNAME -o landscape -o fit-to-page %s';
        
        25\. Sep 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/0761d2093d61a45f0287ed3a91e6378a?s=75&d=mm&r=g)
        
        Phil
        
        Hi, hatte das selbe Problem. Bei mir waren es die fehlenden Rechte. Probier mal:  
        sudo chown -R linaro: /var/www/  
        sudo chmod -R 777 /var/www  
        Bei mir hats geholfen.  
        Gruss Phil
        
        29\. Dec 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/6e9ac4f98d937e8edd65e854769ff5cb?s=75&d=mm&r=g)
    
    Markus
    
    Hallo ,  
    meine Nikon D löst aus und die Bilder werden auch im Image Ordner gespeichert aber dann kommt die Fehlermeldung " Es ist ein Fehler aufgetreten versuchen Sie es erneut" Was habe ich falsch gemacht ?
    
    15\. Sep 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        André Rinas
        
        Hi Markus, das hört sich nach nem Problem mit PHP-GD an, also der Bildbearbeitung von php. Haste mal apt-get install php-gd oder php7-gd gemacht, je nachdem welche PHP Version du hast?  
        Grüße André
        
        25\. Sep 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
            
            [Tobias](https://tobiashaas.info)
            
            Ich hatte eben mit dem selben Problem zu kämpfen!  
            Bei mir war es das Dateiformat. Wahrscheinlich werden deine Fotos als RAW Datei auf der Kamera gespeichert. Nach umstellen auf JPG hat es bei mir plötzlich funktioniert ;-)  
              
            Liebe Grüße
            
            13\. Dec 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/6e9ac4f98d937e8edd65e854769ff5cb?s=75&d=mm&r=g)
    
    Markus
    
    Dankeschön für die tolle Anleitung. Hab aber irgendwas falsch gemacht und weiss nicht was. Wenn ich auf der Photobooth Startseite auf Foto erstellen klicke löst meine Nikon D aus und das Foto wird auch im Image ordner abgelegt allerdings kommt dann die Meldung Es ist ein Fehler aufgetreten versuche es erneut. Was habe ich übersehen oder Falsch gemacht ? Schon mal Danke für eure Antworten
    
    15\. Sep 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Markus, hast du php-gd installiert und hat dein thumbs, bzw. dein image Ordner die richtigen Rechte?  
        Grüße André
        
        12\. Oct 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1399a9606873e0eb1510e0a0651b8339?s=75&d=mm&r=g)
    
    Nikolas
    
    Kann man das ganze noch eine Druckfunktion erweitern? Mit relativ wenig Aufwand? Hat jemand sowas vielleicht schon gemacht?
    
    07\. Sep 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
        
        Frank G.
        
        Hierfür muss CUPS installiert und dein Drucker in CUPS eingrichtet werden.  
        Google mal "Print-Server mit CUPS und AirPrint auf dem Raspberry Pi einrichten" und mach es genauso wie beschrieben. In der Anleitung wird auf HP-Linux-Treiber verwiesen. Wenn Du keinen HP-Drucker hast, musst Du ggf. erst nach einem passenden Linux-Treiber suchen.  
        Mit lpstat -a wird Dir dann der Name von Deinem Drucker angezeigt. Diesen trägst Du dann in die config.inc.php ein. Gehe in den Abschnitt "Commands and Messages" (case 'linux':) und ändere die Zeile, die mit "$config\['print'\]\['cmd'\] =" beginnt wie folgt:  
        $config\['print'\]\['cmd'\] = 'sudo lp -d DRUCKERNAME -o landscape -o fit-to-page %s';
        
        11\. Sep 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c473fce199fb6a28b7d08de15cb0de16?s=75&d=mm&r=g)
    
    Jan Hendrik
    
    Hallo Andre!  
    Erstmal vielen Dank für die tolle Anleitung!!  
    Ich habe es soweit umsetzen können; es werden Fotos gemacht und im Image-Ordner hinterlegt, jedoch bekomme ich auf dem Tablet keine Vorschau und auch in der Gallerie ist nichts zu sehen..  
      
    Wo mache ich hier den Fehler?  
      
    Vielen Dank und liebe Grüße
    
    01\. Sep 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jan Hendrik, das hört sich an, als hättest du php-gd nicht installiert, oder in der falschen Version, oder dein Thumb-Ordner ist nicht schreibbar. Probiers mal aus. Du kannst in der phpinfo() gucken, ob du gd installiert hast.  
        Grüße André
        
        01\. Sep 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c473fce199fb6a28b7d08de15cb0de16?s=75&d=mm&r=g)
            
            Jan Hendrik
            
            Hallo Andre,  
            nachdem ich die Auflösung der Kamera reduziert habe, klappt es. Anscheinend waren die Fotos zu groß vorher. Für meine Zwecke sollten die jetzt eingestellten 4-6 MP aber reichen.  
            Jetzt habe ich allerdings noch eine andere Frage: Wie kann ich ohne Internet vom Tablet auf die Photobooth Seite zugreifen? Habe schon viel gegoogelt, allerdings bisher keine Lösung gefunden.  
            Vielen Dank für deine und eure Hilfe :)
            
            09\. Sep 2018 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/7df179da65eeb4bff89f9b520f674aab?s=75&d=mm&r=g)
        
        Sepp
        
        Servus,  
        probier mal, dass du das gd Paket mit sudo apt-get install php7.0-gd installierst.  
        Hat bei mir geholfen, da ich gerade das gleiche Problem hatte.  
        Viele Grüße  
        Sepp
        
        01\. Sep 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f998d30c80332a74d31cfc9c61c09d3d?s=75&d=mm&r=g)
    
    Thomas Sundermann
    
    Hallo Andre,  
    vermutlich hast Du die Frage schon mal beantwortet, aber daich frisch auf deine Seite gestoßen bin und aktuell einen Hinweis finden: Gibt es die Möglichkeit auf dem Tablet den Kamera Live-View-Modus einzustellen, oder "nur" klassisch auslösen und dann sehen wie's geworden ist? Und wie wird ausgelöst? Fernauslöser oder Tablet mit Touch?  
    Danke für eine Rückmeldung, Thomas
    
    29\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Thomas,  
        ich selber habe bisher keine Möglichkeit dafür eingebaut. An paar Benutzer haben das allerdings mit einer zusätzlichen PI Camera gemacht. Wie kann ich dir leider nicht sagen.  
        Grüße André
        
        01\. Sep 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/6d38240cfc3deed929ad6e41f7b16072?s=75&d=mm&r=g)
    
    Giuseppe
    
    Hallo Andre,  
    ich habe mal eine kleine Frage. Ich habe deine Photo Booth getestet und bin begeistert. Nun habe ich auf dem Pi die Bilder gelöscht. Image sowohl Thumbs Ordner.  
      
    Allerdings bekomme ich über dem Browser in der Galerie noch die Frames der Bilder angezeigt.  
      
    Gibt es einen Trick wie ich das zurücksetzten kann?  
      
    Vielen Dank.  
      
    Giuseppe
    
    24\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi, du musst noch die data Datei leeren oder gleich ganz löschen. Die dient als Datenbank Ersatz. Grüße
        
        24\. Aug 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8dbafbda4177dfa7ab031122c03f5a86?s=75&d=mm&r=g)
    
    Michael
    
    Hallo an alle,  
    Ich habe alles nach Anleitung eingerichtet und es funktioniert ohne Probleme. Echt tolles Projekt, danke dafür.  
    Da der pi nicht so viel Speicher hat, habe ich in /var/www/html/storage einen USB-Stick gemountet und die Ordner images, thumbs und qrcodes in das Unterverzeichnis kopiert. In der config.inc.php habe ich $config\['folders'\]\['images'\] = 'storage/images'; usw. geändert.  
    Nach dem Auslösen bleibt die Anwednung im Verarbeitungsbildschirm stecken, allerdings werden Bild und Thumb korrekt abgelegt und in data.txt erscheint das Bild bebenfalls. Nach dem Neuladen wird nur ein Rahmen für das Bild in der Gallerie angezeigt, der Link verweist jedoch auf den ursprünglichen image Ordner.  
    Habe ich irgendwas vergessen umzustellen? Bin eher der hardwarenahe Programmierer und ne Niete in PHP :P  
      
    Ich hoff jmd kann mir helfen deshalb schonmal vielen Dank,  
    Viele Grüße,  
    Michael
    
    24\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michael, es kann sein, dass der Bilder-Ordner noch in irgendwelchen Dateien hart reingeschrieben ist. Dafür könntest du in die index.php und die core.js mal durchsuchen.  
        Viele Grüße  
        André
        
        01\. Sep 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/8f175f88502573c87c4b1521b43eb8e5?s=75&d=mm&r=g)
        
        Thomas
        
        Hallo Michael, hallo Andre,  
        ich stehe vor dem gleichen Problem. Würde gerne die Bilder auf einen gemounteten Stick schreiben. Hat einer von Euch schon gefunden in welchen Dateien die Pfade noch angepasst werden müssen. Würde mich über Antwort freuen.  
        @Andre: Danke für das tolle Projekt, soweit funktioniert alles einwandfrei.  
        VG  
        Thomas
        
        23\. Oct 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/5b1d545bcab2a9d4defd7d985f2aa61c?s=75&d=mm&r=g)
    
    Lukas
    
    Hallo Andre,  
    zunächst einmal vielen Dank für deine Anleitung für einen Photobooth. ich habe die von dir beschriebenen Schritte ganz genau befolgt, leider macht der Booth bei mir aber einen Screenshot, anstatt die Kamera auszulösen. Wenn ich im Terminal den gphoto2 Befehl zum Auslösen gebe, funktioniert es, mit deinem Script erstellt der Booth lediglich einen Screenshot :(  
    Kannst du mir hier vielleicht weiterhelfen? DSLR Typ: Canon EOS 500D  
      
    Vielen Dank.  
    Liebe Grüße,  
    Lukas
    
    24\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/2d27a06ac80004c7dabc4559ae63412b?s=75&d=mm&r=g)
        
        Michael
        
        Hallo Lukas, hast du in der config.inc.php die Variable $config\['dev'\] = true; auf false gesetzt? Ansonsten ist der Entwicklermodus noch an und dort wird nicht auf die Kamera zugegriffen, sonden das Hinergrundbild kopiert, was eine Art screenshot als Ergebnis hat.  
          
        Vielleicht löst das dein Problem,  
        Viele Grüße,  
        Michael
        
        24\. Aug 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ad199e5b998be5598dd3cbc5381a7777?s=75&d=mm&r=g)
    
    Tom
    
    Ich habe mir dank ihnen ein Photobooth gebastelt, und möchte mich für die Arbeit die sie in dieses  
    tolle Projekt investiert haben Herrzlich bedanken.  
    Alles funktioniert Einwandfrei, bis auf ein kleines Problem.  
    Wenn ich ein Foto über das Webinterface ausdrucken möchte wird der QR Code mit ausgedruckt.  
    Kann mir jemand einen Tipp geben wie ich diese Problem beheben kann?  
    MfG  
    Tom
    
    13\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tom,  
        da kann ich dir leider auch nicht helfen. Du könntest mal probieren, das CSS anzupassen und dann zu sagen @media print .qr display none.  
        Grüße André
        
        01\. Sep 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=75&d=mm&r=g)
            
            Rudi
            
            Die Funktion die für das einfügen des QR-Code zuständig ist, versteckt sich in der Datei print.php. Hier ist es die PHP-Funktion imagecopyresized die den QR einfügt.  
            Wenn der QR Code nicht erscheinen soll und das Bild maximiert sein soll, empfehle ich 2 Zeilen zu ändern:  
              
            1.)  
            $newwidth = $width + ($height / 2);  
            ändern in ->  
            $newwidth = $width; // + ($height / 2);  
            2.)  
            imagecopyresized($print, $source, $width, 0, 0, 0, ($height / 2), ($height / 2), imagesx($code), imagesy($code));  
            auskommentieren / ändern in ->  
            //imagecopyresized($print, $source, $width, 0, 0, 0, ($height / 2), ($height / 2), imagesx($code), imagesy($code));  
              
              
            
            08\. Sep 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/3b91cfa6f23129b31c7f78c1c108b616?s=75&d=mm&r=g)
    
    [Dennis Henß](https://www.dennis-henss.de)
    
    Hi André,  
    ich würde dir gerne eine Anfrage bezüglich einer Aktualisierung deines Artikels schicken, erreiche dich aber über deine Mailadresse nicht.  
    Es wäre super, wenn du dich mal bei mir melden könntest.  
      
    Danke und Gruß,  
    Dennis
    
    12\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Dennis,  
        habe dir eine Mail geschickt.  
          
        Grüße André
        
        13\. Aug 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a7bc9c11a650b90612861a254120390e?s=75&d=mm&r=g)
    
    [Dirk](ld-fotografie.net)
    
    Hallo Andre,  
    Die Fotobox läuft immer noch super. Ich habe mittlerweile einen "richtigen" Drucker, Studioblitz etc. integriert.  
      
    Jetzt zu meiner Frage: Ich lade momentan gemachte Fotos per cronjob und shellscript alle 5 Minuten in die Dropbox hoch. Eleganter wäre es, wenn jedes neue Foto sofort einzeln in die Dropbox geladen würde. Ich habe versucht einen Befehl in die takePic.php zu schreiben, kriege es aber einfach nicht hin. Kannst Du mir mit Code nachhelfen?  
      
    Gruß  
      
    Dirk
    
    07\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/76723018cf67a824401046828090234f?s=75&d=mm&r=g)
        
        soko1988
        
        Hallo Dirk,  
        wieso postest du nicht dein Code in Gitlab, damit dir evtl. auch andere helfen?  
          
        Viele Grüße  
        soko1988
        
        10\. Aug 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Dirk,  
        was kriegst du denn nicht hin? Ein Befehl, der im Cronjob läuft würde ich dann via shell\_exec ausführen. Da ist dann die Frage, ob dein User genügend Rechte hat.  
        Viele Grüße  
        André
        
        13\. Aug 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4cdb0dd80a29b73bac0b2b282a7aef03?s=75&d=mm&r=g)
    
    Tobias Bruer
    
    Hallo Andre,  
      
    die Kamera wird über den Auslösebutton ausgelöst und das Bild wird auch in den "images"-Ordner geschoben, aber es wird nicht angezeigt. Außerdem erescheint die Fehlermeldung "Es ist ein Fehler aufgetreten, bitte versuchen sie es erneut." Ich greife direkt auf dem Raspi über die localhost-adresse auf den Webserver zu. Ich hoffe es hat jemand eine Idee...  
      
    Gruß Tobias
    
    03\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/4cdb0dd80a29b73bac0b2b282a7aef03?s=75&d=mm&r=g)
        
        Tobias
        
        Funzt !!! Weiß aber nicht warum, habe nichts verändert...  
        Trotzdem Danke für das tolle Projekt !
        
        06\. Aug 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
    
    Steffen
    
    hallo Andre,  
      
    kann es sein, das komentare auf der seite fehlen?  
      
    gruß  
    Steffen
    
    25\. Jul 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo, nein, habe die Sortierung angepasst und werde noch eine Paginierung einbauen. Die Seite hat zu viele Kommentare und die Ladezeit ist zu schlecht.  
          
        Grüße  
        André
        
        25\. Jul 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e5c81de86a84d6c6c0f3526347f0f6b8?s=75&d=mm&r=g)
    
    Justus Jacoby
    
    Ich kann auf das Webinterface zugreifen und habe denke ich alles installiert. Aber die Kamera löst nicht aus ich finde nirgends etwas dazu ob bzw wie man die verbinden muss.
    
    13\. Jul 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/033363b06d0adfbfd8fbd270064293d9?s=75&d=mm&r=g)
        
        Kevin Bayer
        
        Erstmal vielen Dank für die Software. Habe heute meinen Drucker eingerichtet, funktioniert super!  
        Eine Frage:  
        Ist es möglich auch einen kurz "Progress Screen" einzublenden wenn man auf drucken drückt? Denn der User bekommt kein Feedback ob gedruckt wird. Ich habe die Befürchtung dass sonst alles 10 mal gedruckt wird.  
          
        Hat da jemand eine lösung?
        
        20\. Jul 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/ad1e87e91c94b92878e033260093e946?s=75&d=mm&r=g)
            
            Rudi
            
            Ich habe das mit einem Progress Screen in 3 Schritten gelöst:  
              
            I. Schritt================  
            In die datei resources\\css\\style.css müssen zwei Einträge hinzugefügt werden:  
            #print\_mesg{  
            position: fixed;  
            display: none;  
            width: 100%;  
            height: 100%;  
            top: 0;  
            left: 0;  
            right: 0;  
            bottom: 0;  
            background-color: rgba(0,0,0,0.5);  
            z-index: 10000000000;  
            cursor: pointer;  
            }  
              
            #print\_mesg\_text{  
            position: absolute;  
            top: 50%;  
            left: 50%;  
            font-size: 40px;  
            color: white;  
            transform: translate(-50%,-50%);  
            \-ms-transform: translate(-50%,-50%);  
            text-align: center;  
            }  
              
            II. Schritt ================  
            Ausserdem müssen in der Datei resources\\js\\core.js zwei Stellen ergänzungen vorgenommen werden:  
              
            1.)  
            // Add Print Link  
            $(document).off('click touchstart', '.printbtn');  
            $(document).on('click touchstart', '.printbtn', function (e) {  
            e.preventDefault();  
              
            document.getElementById("print\_mesg").style.display = "block";  
            setTimeout(function () {  
            $.ajax({  
            url: 'print.php?filename=' + encodeURI(result.img),  
            }).done(function (data) {  
            console.log(data)  
            setTimeout(function () {  
            document.getElementById("print\_mesg").style.display = "none";  
            window.location = window.location.origin;  
            },5000);  
            })  
            },1000);  
            });  
              
            2.)  
            // print in gallery  
            $(document).on('click touchstart', '.gal-print', function (e) {  
            e.preventDefault();  
            var img = pswp.currItem.src;  
            img = img.replace('images/', '');  
              
            document.getElementById("print\_mesg").style.display = "block";  
            setTimeout(function () {  
            $.ajax({  
            url: 'print.php?filename=' + encodeURI(img),  
            }).done(function (data) {  
            console.log(data)  
            setTimeout(function () {  
            document.getElementById("print\_mesg").style.display = "none";  
            window.location = window.location.origin;  
            },5000);  
            });  
            },1000);  
            });  
              
            III. Schritt ================  
            Und zu guter letzt muss noch ein Eintrag in die index.php (irgendwo im body) eingefügt werden:  
              
              
              
              
              
            Bitte warten. Das Bild wird an den Drucker gesendet.  
              
            
            09\. Sep 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/f84d37ce99493155ee296c2b746191d0?s=75&d=mm&r=g)
                
                Rudi
                
                Der letzte Abschnitt ist hier in der Darstellung des Codes leider etwas unzureichend.  
                Der III. Schritt muss Vollständig so aussehen (ohne die Vorangestellten //:  
                  
                III. Schritt ================  
                Und zu guter letzt muss noch ein Eintrag in die index.php (irgendwo im body) eingefügt werden:  
                  
                //  
                //  
                  
                //  
                Bitte warten. Das Bild wird an den Drucker gesendet.  
                //
                
                13\. Sep 2018 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/f84d37ce99493155ee296c2b746191d0?s=75&d=mm&r=g)
                    
                    Rudi
                    
                    letzter Versuch den fehlenden Code hier darzustellen:  
                      
                      
                      
                      
                      
                    Bitte   warten. Das   Bild   wird   an   den   Drucker   gesendet.  
                      
                    
                    14\. Sep 2018 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/f84d37ce99493155ee296c2b746191d0?s=75&d=mm&r=g)
                    
                    Rudi
                    
                    Oder so - runde Klammern durch pfeile ersetzen  
                    "(" ersetzen mit "<" und ")" wird zu ">"  
                      
                    fehlender Code:  
                    (!-- print\_mesg --)  
                    (div id="print\_mesg")  
                    (div id="print\_mesg\_text")Bitte warten.(br)Das Bild wird an den Drucker gesendet.(/div)  
                    (/div)
                    
                    14\. Sep 2018 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
    
    Ediz Schon
    
    Hallo zusammen,  
    hat es hier jemand umgesetzt einen Taster an einem gpio port als auslösebutton für take Picture zu verwenden. Ich versuche das seit geraumer Zeit, komme aber zu keinem vernünftigen Ergebnis. Es wäre auch ein Ansatz einen ESP8266 zu verwenden und damit einen Wlan Auslösebutton zu realisieren, nur wie?
    
    06\. Jul 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
        
        Reinhard Rebernig
        
        Hi,  
        ich habe bereits privat unzählige Features implementiert und musste leider vom raspberry auf ein notebook wechseln. Der Grund ist meine LivePreview welche viele Schreib und Lesevorgänge auf der SSD Platte vornimmt. Einen Arcadebutton hatte ich ursprünglich via PHP und den GPIOs angesteuert mittlerweile verwende ich einen Arduino (da keine GPIOs am Notebook ;) ). Die Lösung zum ganzen du kannst einen AJAX Call zum Server machen, dort den Buttonstatus lesen und im anschluss den Status zurück senden. Via jQuery kannst du dann ein Click Event ausführen und so den Touch auf den Auslösebutton simulieren
        
        20\. Jul 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d0451806c821723861c08b4ca4e7d02e?s=75&d=mm&r=g)
            
            Jan
            
            Hi Reinhard,  
              
            auch hier nochmal meine Frage, da ich nicht weiß ob du sie oben schon gelesen hast: Würdest du den Code öffentlich zur Verfügung stellen? Ich wäre sehr daran interessiert.  
              
            Viele Grüße
            
            22\. Jul 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
                
                Reinhard Rebernig
                
                Hi sorry die späte Meldung, hatte im Oktober meine Hochzeit für die ich die Fotobox gebastelt habe und habe auch neue Erkenntnisse gemacht. ich habe einen Gamepad Controller von Amazon bestellt und den per USB angesteckt. den Button kannst du auf die Platine löten und das ganze mit gamepad.js als "Knopfdruck" einbinden ;)
                
                08\. Nov 2018 [Antworten](#)
                
        
        *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
            
            Ediz Schon
            
            Danke für die Reinhard,  
            hab es jetzt aber anders gelöst.  
            Ich verwende jetzt ein numerisches Bluetooth Keypad das ich in einen Buzzer eingebaut habe, beides aus Amazonien.  
            Ich simuliere eine Tastendruck auf "Enter", somit alles Probleme mit Fernauslösung erledigt.  
            Als Preview habe ich eine kleine Wlan-Spionwebcam eingebunden, als Router kommt ein mobiler Alcatel Router zum Einsatz, über den ich die Bilder in die Dropbox hochlade. Auch Drucken auf einen Canon Selphy 1300 funzt tadellos, auch mit eingeblendetem Text und Banner.  
            Was ich noch nicht geschafft habe, einen USB Stick als Speicherort so einzubinden, das man den Stick wechseln kann. Sobald ich den gemounteten Stick abziehe und einen anderen Stick einstecke funzt der Pfad ja nicht mehr. (Syslink).  
            Wenn jemand hierzu eine Lösung hat, wäre ich begeistert.  
            Grüsse an alle hier, insbesondere Andre für das tolle Projekt  
            Ediz
            
            27\. Jul 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/10ec533445f7ab4e3e6a16e578ee0412?s=75&d=mm&r=g)
                
                Dominik
                
                Hallo Ediz,  
                den gleichen Gedanken mit der Webcam hatte ich auch, da ich ein Vorschau Bild möchte, aber nicht die Kamera mit Dauer-LiveView quälen möchte.  
                Darf ich dich fragen wie du die Sache angegangen bist?  
                Liebe Grüße,  
                Dominik
                
                26\. Aug 2018 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
                    
                    Ediz Schon
                    
                    Hi Dominik,  
                    ich benütze eine Webcam und hab auf der Hauptseite den Stream eingebunden.  
                    Ich hoffe das hilft Dir weiter.  
                    Grüsse
                    
                    30\. Aug 2018 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/77fd200cb68fc479d92743c7446af532?s=75&d=mm&r=g)
                        
                        Manuel
                        
                        Hallo Ediz,  
                        würdest du uns die Fertige Datei zur Verfügung stellen?  
                        Gruß Manuel
                        
                        12\. Sep 2018 [Antworten](#)
                        
    
    *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
        
        Ediz Schon
        
        Schade, scheinbar ist dieses tolle Projekt tot, jedenfalls passiert hier nichts mehr, obwohl so viele gute Ansätze für Erweiterungen vorhanden sind.  
        :-(
        
        21\. Jul 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo Ediz,  
            das Projekt ist noch sehr aktiv, allerdings habe ich kaum Zeit fürs Projekt und andere kümmern sich mit um die Sachen. Ich hoffe, dass ich dafür in nächste Zeit mal wieder was programmieren kann.  
            Grüße  
            André
            
            13\. Aug 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
                
                Ediz Schon
                
                Hi Andre, das wäre wirklich super,  
                Grüsse  
                Ediz
                
                30\. Aug 2018 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/83a6af07cd3003c162ab0fa46a9e55a3?s=75&d=mm&r=g)
    
    Michael
    
    Hallo,  
    ich habe leider immer noch das Problem, dass der QR Code in der Gallerie auf meinem iPad nicht funktioniert. Wäre prima wenn mit jemand helfen könnte.  
      
    Vielen Dank
    
    15\. Jun 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
    
    steffen
    
    Hallo Boris,  
    Das mit der Vorschau habe ich mit einer Webcam gelöst. Hab die Software motion installiert und das live Bild dann in die Startseite eingebunden.  
    Eine link zur Anleitung für den Drucker findet man weiter oben.  
      
    Gruß Steffen
    
    04\. Jun 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
        
        Reinhard Rebernig
        
        Hi,  
        ich mache eine Live Preview mit der DSLR (ca alle 10ms ein Vorschaubild welches ich in einem canvas wiedergebe). Funktioniert soweit ausreichend und liefert 1:1 das Bild das im Anschluss gemacht wird. Außerdem kann ich Filter über das Bild legen...  
        Wie stelltst du das Bild der Webcam dar und liefert es das selbe Bild wie die DSLR?
        
        20\. Jul 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
            
            steffen
            
            Hallo Reinhard,  
            leider ist das nicht das 1:1 Bild der Cam. Sonder nur die Webcam die ich über die Software motion laufen lasse. Dann binde ich das Bild der "IPcam" in die Startseite ein.  
              
            Gruß  
            Steffen
            
            13\. Aug 2018 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/ffaedb589b50562e0600ab36b7317945?s=75&d=mm&r=g)
        
        Paule
        
        Hallo Steffen,  
        wie kann ich die Webcam auf die Startseite einfügen?  
        Ich verstehe es so, dass die Seite statt "Photobooth Webinterface" das Bild der Webcam anzeigt. Welche Datei muss ich hierfür anpassen?  
        Gruß Paule
        
        16\. Dec 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/52c5368ea1926b4665723b2fc601969f?s=75&d=mm&r=g)
    
    Boris
    
    hallo zusammen,  
    ich habe folgendes problem.  
    die software läuft soweit, ausser das der pi kein auslösesignal an die eos sendet. es wird ein foto vom hintergrund des webinterfaces gemacht.  
    hat jemand eine idee?  
    canon eos 350d ist kompatibel und sie wird unter lsusb angezeigt  
    danke im voraus  
    boris
    
    30\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Boris, da haste oben in der Anleitung was überlesen. Du musst in der config.inc.php dev = false setzen. Derzeit ist der Demomodus an. Grüße André
        
        30\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/52c5368ea1926b4665723b2fc601969f?s=75&d=mm&r=g)
            
            Boris
            
            Guten Morgen Andre.  
            Du weißt damit handlich wer lesen kann ist im Vorteil genau daran lag es aber noch eine Frage kann ich irgendwie auf Vorschaubild also bevor das Foto gemacht das ich sehe was ich mache umstellen und wie bringe ich den Drucker zum laufen das hab ich noch nicht ganz verstanden ich benutze ein Canon selphy cp1200.  
            Ich muss aber noch mal was loswerden Sau starkes Projekt also wie gesagt was mir jetzt noch fehlt ist das Vorschaubild kann ich das auch irgendwie über True oder false Antiviren? Und der Drucker reicht der Wende im WLAN Netzwerk eingebunden ist oder Muster am Russ parie angeschlossen sein? Und wie aktiviere ich den beziehungsweise wie Steuer ich den an
            
            31\. May 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/482479b33a18895a5e2ceb0567e235ec?s=75&d=mm&r=g)
    
    Steffen
    
    Hallo Andre,  
    Danke für die Super Arbeit. Habe nun auch eine Photobooth, dank dir.  
      
    Ich habe einen Live-View nachgerüstet.  
    Dies habe ich per motion und einer alten Webcam umgesetzt.  
    Der Livestream wird dann auf der Startseite angezeigt.  
    Funktioniert eigentlich ganz gut und ist einfach.  
      
    Gruß  
    Steffen
    
    29\. May 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ef042b9b5003c2c57817585758423213?s=75&d=mm&r=g)
    
    [Philipp](https://wdng-fotograf.de)
    
    Hi André,  
    vielen Dank fürs Teilen - das spart wirklich mega Arbeit und es sieht echt nice aus, im Vergleich zu den Software-Lösungen da draußen.  
      
    Ich habe noch ein Problem mit der Geschwindigkeit unter Windows. Es dauert schon so 20 Sekunden nach "Cheeeese" bis das Bild da ist. Ich habe es manuell in der Command Line ausprobiert, dort sieht man, dass jedes mal die Nikon D5300 als neue Kamera erkannt wird. Kann ich dem Tool irgendwie sage, dass er sich die Kamera merken soll und so ggf. Zeit sparen?  
      
    Hat jemand Erfahrung?  
      
    Grüße,  
    Philipp
    
    27\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Philipp, leider nicht wirklich. Ich habe es letzens auch mal unter Windows probiert. Das Programm, dass Bilder aufnimmt ist leider nicht so gut, wie gphoto auf dem Raspberry. Wenn du ne Lösung findest, dann lass uns gerne teilnehmen. Grüße André
        
        27\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/2b358a161c8a3063ab788ceb77003e02?s=75&d=mm&r=g)
            
            Klaus
            
            Hallo,  
            zuerst herzlichen Dank für die Anleitung und die vielen Ideen die hier eingeflossen. Damit bin ich dann auch schon an der Stelle wo meine Frage ansetzt. Ist es möglich die hier aufgeführten Ding auch als Komplettanleitung zu Posten. Ich weiß das es viel Arbeit macht, aber für mich als Pi-Laie ist es sehr schwierig das nachzuvollziehen. Mir persönlich würde schon reichen die Anleitung für einen Drucker am System zusätzlich sehen zu können. Da blicke ich ehrlich gesagt nicht mehr durch. Bitte nicht auf mich schimpfen, es ist nur ein Frage und nicht einmal ein Bitte. :) Wer noch Anregungen für die Fotobox braucht oder gar eine Zeichnung, da kann ich gerne behilflich sein. Selbst das Fräsen einer Box kann ich anbieten, die Pläne für eine Box 400 X 500 X 400 9mm dick in Siebdruckplatte habe ich fertig. :)  
            Gruß Klaus
            
            29\. May 2018 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/2b358a161c8a3063ab788ceb77003e02?s=75&d=mm&r=g)
            
            klaus
            
            Also, entschuldigung für meine Vorpost. Wer lesen kann ist klar im Vorteil. Auf Github steht doch Alles.  
              
            Gruß Klaus
            
            29\. May 2018 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/1e3bbb8a69a98bb6bac2daa58f2a340e?s=75&d=mm&r=g)
            
            Frank G.
            
            Meine Lösung war Raspberry Pi Desktop for PC als Virtual Maschine in Virtualbox zu installieren.  
            Über den Anschluss eines Pi Zero müsste dann auch ein Taster an dessen GPIOs angeschlossen werden können. Vermutlich einfacher und komfortabel über WLAN mittels Esp8266.  
            Wird beim Drucken eigentlich immer noch der QR-Code mit ausgedruckt oder wird inzwischen im Vollformat gedruckt? Ich selbst hatte mir einen USB Buzzer mit dem Teensy 2.0 USB gebaut. Beim Drücken wird Enterbefehl weitergegeben. Damit dieser vom Webinterface verarbeitet werden kann, musste noch etwas Code ergänzt werden. Steht in den Kommentaren unten. Alternativ kann auch über Fernbedienung ausgelöst werden mit Zuhilfenahme von FLIRC.  
            Kann jemand Mal den Code für Live Preview mittels USB Webcam und Webinterface-Anbindung veröffentlichen? Funktioniert dann wahrscheinlich ja auch über die interne Webcam des Laptops (unter Windows mit VM)...!?
            
            01\. Aug 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/a488ec230899951c09f784879498f498?s=75&d=mm&r=g)
    
    Vincenzo
    
    Hallo Andre,  
    Danke für die tolle Anleitung. Bei mir funktioniert fast alles einwandfrei.  
      
    Ich hab nur ein Problem mit der Bildergalerie. Wenn ich auf die Bildergalerie gehe, dann sehe ich die Übersicht mit den geschossenen Bildern. Wenn ich jetzt auf eines klicke dann hängt es sich auf. Ich sehe also das Bild nicht in der vergrößerten Ansicht und kann auch nichts mehr machen/ klicken. Muss die Seite dann neu laden. Passiert sowohl auf nem Android Tablet (7") als auch auf meinem Android Handy.  
    Habe es auch schon mit der SimpleLightBox probiert, ohne Erfolg.  
    Auf meinem Windows-Rechner funktioniert alles einwandfrei.  
    Ich hoffe du kannst mir helfen  
      
    VG  
    Vincenzo
    
    27\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Vincenzo, du könntest mal den Pull-Request hier probieren:  
        github.com/andreknieriem/photobooth/pull/24  
        Wenn das besser wird, dann binde ich den Code in meinen ein. Grüße André
        
        27\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c7c67aac803812ab75b0c391b7d93ea0?s=75&d=mm&r=g)
            
            Vincenzo
            
            Hallo Andre,  
              
            damit funktioniert es! Vielen Dank!  
            Hab nur das Problem, dass sich nun von lauter rumprobieren der "Auslösebutton" nach rechts verschoben hat und nicht mehr mittig ist. Hab es versucht in ser style.css unter "takepic" zu korrigieren, allerdings ohne Erfolg.  
            Wird das irgendwo anders noch bestimmt?  
              
            Vg  
            Vincenzo
            
            04\. Jun 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/893f194bc2ea34c537c71437a2c2a2a2?s=75&d=mm&r=g)
    
    Daniel
    
    Hallo,  
    super Sache deine photobooth.  
    Habe es auf meinen Raspberry Pi 3 laufen, habe momentan ein normales Display dran und ne maus. Bestellt ist ein Waveshare 13,3Zoll Touchdisplay.  
    Soweit läuft im Zusammenspiel mit meiner Nikon D3000 alles wie gewünscht.  
    Nur das Thema Liveview lässt mich nicht los, das fände ich noch spitze. Dafür habe ich eine Raspberry pi camera, die auch sweit läuft. Wenn ich das jetzt über motion machen und als Hintergrund einbinde habe ich aber eine sehr große Verzögerung ~ 8-9sec. So bringt das leider nichts. Hat einer eine Idee wie ich das Livebild schneller eingebunden kriege? Mit raspivid läuft es auf dem Monitor super, aber wie bekomme ich den stream in die Webseite als Hintergrund eingebunden, jemand ne Idee??  
      
    Gruß Daniel
    
    24\. May 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/893f194bc2ea34c537c71437a2c2a2a2?s=75&d=mm&r=g)
    
    Daniel
    
    Hi,  
    ich komme nochmal zurück auf das Thema Liveview. Meine Nikon D3000 hat kein Liveview, also möchte ich das ganze mit der Raspberry Pi camera machen. Die läuft auch soweit, wenn ich das mit motion gemäß dem pull request mache habe ich einen riesigen Lag, knapp 10sec Zeitversatz. So macht der Liveview keinen Sinn. Jetzt wollte ich direkt mit raspivid das ganze als Hintergrund einblenden, aber da scheitere ich total. Jemand ne Idee?  
    Gruß Daniel
    
    24\. May 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4a1a1eebf2aa2002e18374009d231da0?s=75&d=mm&r=g)
    
    Michael
    
    Hallo,  
    ich habe mit Photoswipe das Problem, dass dieses sich aufhängt, jedoch nur in Kombination mit meinem iPad und nach dem Absprung eines geschossenen Fotos direkt in die Galerie.  
    Es wurde ja schon mehrfach über Problem in der Galerie bei Nutzung von Tablets berichtet. Leider finde ich keine Lösung.  
    Weiterhin ist bei der Ansicht eines einzelnen Galeriebildes, das Bild auf dem iPad nicht im Vollbildmodus.  
    Würde mich sehr über Antworten freuen, da die Box ansonsten super funktioniert.  
    Danke für Rückmeldungen und DANKE an Andre für dieses geile Programm!!  
    Viele Grüße Michael
    
    13\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/4a1a1eebf2aa2002e18374009d231da0?s=75&d=mm&r=g)
        
        Michael
        
        Hallo, konnte das Problem mit der einfrierenden Galerie auf dem iPad mittlerweile mit der Anleitung "Optimization for smaller devices and add to homescreen" beheben. Jedoch funktioniert der QR Code noch nicht in der Galerie. Anscheinend greift der QR Code innerhalb der Galerie beim iPad nur den "Tumbs" Ordner auf. Normalerweise müsste der QR Code auf den "Images" Ordner zugreifen.  
        Kann mir dabei jemand einen Hinweis oder Hilfestellung geben.  
          
        Vielen Dank im Voraus
        
        15\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/63da20215dfe8bccd9d96252cdbdc1e2?s=75&d=mm&r=g)
            
            René
            
            Hallo Michael,  
              
            Wo findet man diese Anleitung 'Optimization for smaller devices and add to homescreen'? Ich habe nämlich das selbe Problem auf meinem Galaxy Tab A.  
            Vielen Dank.
            
            21\. May 2018 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/605873b37f64d49da58c415e05a3d3ac?s=75&d=mm&r=g)
            
            Fabian
            
            @Michael  
            Wenn du den QR Code scannst bekommst du also nur ein kleines Bild, oder wie meinst du das genau?  
              
            @Rene  
            github.com/andreknieriem/photobooth/pull/24
            
            24\. Jul 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/5d64b48c38788531a677736bc544e30d?s=75&d=mm&r=g)
    
    Hendrik
    
    Hi Andre,  
    ich habe jetzt schon einige Einsätze mit deiner Fotobox hinter mir und muss sagen sie kommt immer sehr gut an.  
    Was mir jedoch auffällt ist, dass sie nach ein paar Fotos anfängt zu "laggen". Touch befehle werden dann teilweise nicht angenommen und man muss häufiger "clicken". Und der Count down ist auch nicht mehr flüssig sondern ruckelt.  
      
    Woran kann das liegen?  
    Nutze einen Pi 3+ gebootet und betrieben mit einer SSD über USB und ein Galaxy Tab A. (Trat auch normal über SD Karte auf, war der Grund zur Umstellung auf SSD, hat die Störung aber nicht behoben).  
      
    Hat das schonmal jemand bemerkt?  
      
    Auf jeden Fall vielen Dank für die Schöne Anleitung (nutze übrigens mitlerweile den aktuellen Code vom git).
    
    12\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
        
        Christian
        
        Hallo Hendrik,  
          
        mir ist aufgefallen, dass die Seite deutlich weniger flüssig ist, wenn man Sie direkt auf dem PI laufen lässt. Ich hab andere Browser versucht, die weniger aufgebläht sind als der Chromium, das macht aber keine Unterschied. Ich hab überlegt, ob ein schlankeres OS ggf. dem entgegen wirkt, konnte aber nicht so recht eines mit GUI ausmachen. evtl. DietOS, aber da hatte ich noch keine Zeit für mich, einzuarbeiten.  
          
        Lass ich die Seite auf einem PC oder Mac laufen, verschwindet die Perfomanceproblematik gänzlich. Vllt. muss man nochmal in Richtung Javascript Performance auf dem PI recherchieren.
        
        14\. May 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo, ich hatte meinen Photobooth nun schon 3 mal im Einsatz und hatte noch nie ein Problem. Es ist auch nur ein Raspberry 2 mit SD Karte. Wenn die Oberfläche laggt, liegt das auch nicht an der Festplatte, sondern tatsächlich, wie der Christian sagt an der Javascript/Browser-Geschwindigkeit. Man könnte versuchen die CSS und Javascript Animationen auszubauen/zu minimieren, damit das laggen aufhört. Oder du schaust mal mit einem anderen Tablet.  
        Grüße André
        
        14\. May 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
    
    Christian
    
    Hallo Andre,  
      
    vielen Dank für die Anleitung und die Umsetzung. Das hat das Projekt sehr vereinfacht.  
      
    Ich möchte anregen, den dev-Schalter im Text aufzunehmen oder per Default auf false zu setzen. Das erkennt man nur aus den Kommentaren und mittlerweile sind das echt viele.  
      
    Weiterhin, war der Hinweis hilfreich, dass man php7.0-gd installieren muss. (Also die Schwierigkeit bestand darin, dass ich keine Ahnung hatte wie das neue Paket heißt).  
      
    Ein Frage zur Funktion, ist bereits implementiert, dass die Anzeige des Bildes von allein wieder verschwindet (nach 2-10 Sek.)?  
      
    Falls nicht, lässt sich die Anzeige ggf. abschalten?  
      
    Gruß,  
    Christian
    
    09\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Christian,  
        danke für dein Feedback. Die Anleitung ist komplett nicht mehr aktuell. Ich habe das Projekt vor 3 Jahren gebaut und seitdem gibt es viele Dinge, die neu sind. Das Raspberry Betriebssystem, PHP ist neu usw. Ich werde mal sehen, ob ich es bei Zeiten anpasse. Der Bildschirm wechselt wieder zum Aufnahmescreen nach 90 Sekunden, (in der core.js gibs oben die Option timeToLive)  
        Grüße André
        
        11\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/6bf1d98affe79cd64674b7aca309a191?s=75&d=mm&r=g)
            
            Christian
            
            Hallo Andre,  
              
            danke für deine Antwort. Ich war zufällig darüber gestolpert und habe den Eintrag gefunden und angepasst. Funktioniert :)  
              
            Außerdem habe ich die Galeriebutton in die Config übernommen und ausgeblendet. Ich bin noch nicht sicher, ob ich will, dass die Leute in der Galerie stöbern können. Ich denke, ich werde eine Slideshow machen.  
              
            Die QR Code Sache funktioniert gut, aber der QR Code gibt auch die Adresse der Seite preis und dann kann jeder darüber die Fotofunktion per Smartphone aufrufen. Das gefällt mir nicht so gut, da das Auslösen auch dann funktioniert. Und da ich auf so einer Veranstaltung vermutlich nicht der einzige bin, der technikaffin ist, lass ich das mal lieber aus.  
              
            Ansonsten arbeite ich mit einem Pi 3B+, Raspian Stretch vom April 2018, Apache 2, PHP7 und der per Paket installierbaren Version von gphoto2 (das ist nicht die aktuellste). Als Kamera nehme ich eine Canon 350D. Konnte ich günstige bei ebay erstehen. Funktioniert problemlos und auf Anhieb.  
              
            Die Anleitung auf Git ist gut soweit, nur DEV=TRUE steht halt leider nirgends.
            
            13\. May 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/e09cab6a354b966c1d65aa630128c95f?s=75&d=mm&r=g)
    
    René
    
    Hallo Andre,  
    zuerst Vielen Dank für diese Anleitung. Ich habe folgendes Problem: Ich habe alles nach deiner Anleitung gemacht. Wenn ich auf "Foto Erstellen" drücke kommte der Countdown dann Cheeeeessee und dann nix. Es kommt keine Fehlermeldung. Es sieht so aus als wenn er das Bild präsentieren möchte aber es wurde keins Ausgelöst. Wenn ich den Befehlt gphoto2 --trigger-cappture ausführe funktioniert es. Rechte habe ich auch vergeben. Woran könnte es liegen?  
      
    Gruß  
    René
    
    08\. May 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo René, Lädt er denn immer dasselbe eine Bild? Sonst würde es sich für mich so anhören, als hättest du den Demo-Modus noch. Diesen kannst du in der config.php bei dev = false setzen, statt true. Grüße André
        
        09\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e09cab6a354b966c1d65aa630128c95f?s=75&d=mm&r=g)
            
            René
            
            Hallo André,  
            danke für deine Antwort. Das war der Fehler ;-) Jetzt funktioniert es super. Vielen Dank.  
            LG  
              
            René
            
            09\. May 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/69a508485fe3046c6fd78422a87a1087?s=75&d=mm&r=g)
    
    Tim
    
    Moin Andre ich habe es jetzt zum laufen bekomme das ich zumindestens mit dem Kill befehl. Kann ich die Kamera auslösen lassen. Wenn ich es über das Webinterface mache kommt immer die meldung " Es ist ein Fehler aufgetreten, bitte versuche es erneut. Seite neu laden"  
    Es werden bilder im "images" abgelegt aber nur die Hintergrundbilder nicht welche von der Kamera.  
    Grüße Tim
    
    29\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tim, dann hast du in der config.php noch dev = true an. Das musst du ausschalten. Da trotzdem die Fehlermeldung kommt, hast du bestimmt auch kein php-gd installiert, da dann ein Thumbnail nicht installiert wurde. Probier das beides mal. Grüße
        
        01\. May 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/69a508485fe3046c6fd78422a87a1087?s=75&d=mm&r=g)
            
            Tim
            
            Moin Andre es Funktioniert danke viel mal dafür jetzt muss ich nur noch hinbekomm das wenn ich die Kamer anstecke automatisch den gphoto behel löscht damit die Kamera nicht mehr vom System blockiert wird. und das der Pi nicht mehr in den standby fährt aber trozdem danke Ich freu mich gerade richtig doll.
            
            01\. May 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/cf7b6de02cdd2c35ca1961f141015db4?s=75&d=mm&r=g)
    
    [Marc](www.die-reiselust.de)
    
    Hallo Andre,  
    vielen Dank für das geniale Tutorial. Funktioniert das ganze auch mit PHP 7.0?  
    Ich bekomme folgende Fehlermeldung, wenn der Countdown herunterzählt "Es ist ein Fehler aufgetreten, bitte versuche es erneut "Seite laden"".  
    Ich komme einfach nicht weiter, an was das liegen könnte :(  
    Vielen Dank für deine Bemühungen.  
    Marc
    
    29\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/fa3dcbac254c4bebb118d48c06a905f8?s=75&d=mm&r=g)
        
        Paul
        
        Hallo Marc, ich habe nach Andre seiner Anleitung alles gemacht, jedoch musste ich, alles was mit PHP zu tun hatte, immer auf "php7.0" oder "php7.0-gd" sonst hat er immer eine Fehlermeldung gebracht.
        
        05\. May 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c88185d80b11dbdecf02400c2f39e2bb?s=75&d=mm&r=g)
    
    [Martin](https://www.digitales-handwerk.at/)
    
    Mit diesem Tutorial kann man den RaspberryPi in einen WLAN Hotspot umwandeln. https://howtoraspberrypi.com/create-a-wi-fi-hotspot-in-less-than-10-minutes-with-pi-raspberry/  
    Somit spart man sich den WLAN Router und man hat eine Lösung, die sich selbst verbindet.
    
    27\. Apr 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/fa3dcbac254c4bebb118d48c06a905f8?s=75&d=mm&r=g)
    
    Paul
    
    Hallo Andre, super Arbeit hast du gemacht und eine richtig gute Idee ;)  
      
    Jetzt mal zu meiner Frage und zwar, möchte ich mit meiner "Photobox" ein Foto machen und nebenan eine "kleine Säule" aufstellen wo die Fotos dann angezeigt werden, sozusagen, eine zweite RPi wo die Galerie gezeigt wird.  
      
    Weißt du zufällig wie ich das machen kann?  
      
    
    25\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Paul,  
        das könntest du machen, in dem du ein neues Template dir anlegst, dass die Bilder auf dem Photobox Raspberry darstellt. Und auf dem anderen Raspberry rufst du dann die IP/Url des Photobooth Raspberries. Das geht nur, wenn beide im gleichen Netzwerk sind. Also nochmal zusammengefasst:  
        Raspberry 1 (Fotobox) => Macht Bilder, hat dann noch ne gallery.php oder so.  
        Raspberry 2 Mit Browser und Bildschirm. Geht auf Ip-des-raspberries/gallery.php.  
        So könnte ich mir das vorstellen.  
        Grüße
        
        26\. Apr 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/4cdb0dd80a29b73bac0b2b282a7aef03?s=75&d=mm&r=g)
        
        Tobias
        
        Hallo Paul,  
        hast du das Problem bezüglich der Slideshow auf einem zweiten Screen schon gelöst ? Andre's Ansatz erscheint mir recht plausibel, ist mir allerdings in der Umsetzung z.Zt. nicht möglich. Da fehlen zu viele Grundlagen...  
          
        Gruß Tobias
        
        06\. Aug 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/69a508485fe3046c6fd78422a87a1087?s=75&d=mm&r=g)
    
    Tim
    
    Moin Andre kurze frage welches Betriebssystem benutz du denn?
    
    18\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Moin Tim, das normale Raspian der Raspberry Webseite.
        
        20\. Apr 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/69a508485fe3046c6fd78422a87a1087?s=75&d=mm&r=g)
    
    Tim
    
    Hallo Andre  
    ich hbae ein problem das web interface läuft einwand frei aber es werden keine Bilder gemacht. wenn ich im Terminal über gphoto die Kamera ansteuern will kommt immer der Fehler F53. Die Kamera wird angeblich schon verwendet hast du eine idee ich finde keine lösung im Netz.  
    Gruß Tim
    
    15\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tim, ich habe im Internet auch nur diese Lösung hier gefunden:  
        https://www.raspberrypi.org/forums/viewtopic.php?t=70049#p665262  
          
        Dort steht, man soll nen paar Dateien umbennenen, oder die Software von Hand nachinstallieren. Kannste ja mal ausprobieren.  
          
        Grüße  
        André
        
        16\. Apr 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/4c26adbe2a553100a863dd4cc6de3e45?s=75&d=mm&r=g)
        
        hegge
        
        Die Kamera wird automatisch durch das System blockiert. Siehe folgendes Video  
        https://www.youtube.com/watch?v=1eAYxnSU2aw
        
        22\. Apr 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    Andre Rinas
    
    Hallo Jochen, wenn du den Gpio Befehl irgendwie ins Javascript bekommst (core.js) sollte es kein Problem sein. Die Takepic Funktion müssteste einfach mit dem Gpio Befehl koppeln. Vlt mal in die Richtung googlen. Grüße André
    
    01\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/e0236e06df94f825d6cb6111058ff42d?s=75&d=mm&r=g)
        
        Thomas
        
        Ich habe es leider immer noch nicht geschafft, das die Bilder auch auf der Cam erhalten bleiben.
        
        13\. Apr 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo Thomas,  
              
            hier in der Doku steht wie es gehen müsste:  
            http://www.gphoto.org/doc/manual/ref-gphoto2-cli.html  
              
            In der config.inc.php steht der gphoto Befehl mit --capture-image-and-download. Das heißt, dass er das Bild machen soll und herunterlädt auf den PI. mit der Option --keep müsste er die Bilder auf der Kamera lassen.  
            Grüße André
            
            16\. Apr 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/109adc7b8e1fdc8951eae4d001efa7f7?s=75&d=mm&r=g)
    
    Jochen
    
    Hallo André,  
      
    dein Photobooth Projekt gefällt mir wirklich sehr gut und funktioniert nach etwas konfigurieren auch einwandfrei.  
    Gibt es es eine einfache Möglichkeit auf einen externen Trigger an einem der GPIO Pins das Event "Foto erstellen" auszulösen.  
    Einfacher gefragt kann ich irgendwie über die Konsole das Event "Foto erstellen" auslösen? Dann könnte ich dies in einem anderen Skript bei auftreten des externen Triggers ausführen.  
    Viele Grüße und schöne Ostern  
    Jochen
    
    31\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
        
        Ediz Schon
        
        Hi Jochen,  
        hast Du schon eine Lösung gefunden, ich verzweifle auch daran einen Hardware-Auslösebutton einzubauen. Wenn ja, wäre es toll wenn Du Deine Idee vorstellst.  
        Grüsse  
        Ediz
        
        09\. Jul 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ccc0953dec461d99ee1ab0750ee82a98?s=75&d=mm&r=g)
    
    Marko
    
    Hallo Andre,  
    vielen Dank für die tolle Anleitung.  
    Ich habe noch ein kleines Problem. Sobald ich ein Bild gemacht habe erscheint dieses ja als "Hintergrund" bis wann wieder zurück geht. Hier wird das Bild aber leider nicht komplett dargestellt und abgeschnitten.  
    In der Galerie und der "Slideshow" wird es komplett angezeigt.  
    Wo liegt hier mein Problem und was kann ich tun :-)  
      
    Vielen Dank und viele Grüße  
    Marko
    
    30\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Das hört sich komisch an. Welchen Browser und welches Gerät benutzt du?  
          
        Viele Grüße Andre
        
        01\. Apr 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/ccc0953dec461d99ee1ab0750ee82a98?s=75&d=mm&r=g)
            
            Marko
            
            Hallo Andre,  
              
            danke schon mal für deine Rückmeldung.  
            Ich habe ein Android Tablet mit Chrome und Firefox probiert ebenso auch ein Laptop mit Chrome und Internet Explorer. Es scheint so, als würde die Vollbildskalierung des Bildes nach der Aufnahme nicht richtig gemacht werden.  
            Sobald man die Thumbnails sieht oder es in der Galerie vergrößert passt es.  
              
            Viele Grüße  
            Marko
            
            01\. Apr 2018 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/ccc0953dec461d99ee1ab0750ee82a98?s=75&d=mm&r=g)
            
            Marko
            
            Hallo Andre,  
            ich habe das Problem gelöst. In der style.css steht:  
            #result {  
            width: 100%;  
            background: center center no-repeat;  
            background-size: cover;  
            z-index: 2; }  
              
            Das background-size:cover macht das Bild auf den kompletten Bildschirm egal ob er was abschneiden muss. Habe es nun auf contain umgestellt. Damit macht er es auf den kompletten Bildschirm beschneidet es aber nicht. Somit habe ich zwar links und rechts einen Rand aber das Bild wird nicht beschnitten was ja unvorteilhaft wäre.  
            Danke dir für deine Mühe
            
            02\. Apr 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/46c17ecbc8617bb5da1b99f632979d9d?s=75&d=mm&r=g)
    
    Obi
    
    Hallo Andre, sehr schönes Projekt. Ist es einfach möglich anstelle der Spiegelreflexcamera und Gphoto die Raspicam zu verwenden?  
      
    Gruß Obi
    
    28\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Obi, klar das müsste gehen. In der config.inc.php kann man den Befehl ändern, der benutzt wird zum Bilder machen. Wenn du da dann einfach den Befehl für die Raspberry Kamera eingibst, könnte es schon gehen.  
        Grüße Andre
        
        01\. Apr 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4e5d31350d680c53949b39edca282a60?s=75&d=mm&r=g)
    
    DigiOrti
    
    Set up for Raspbian <>:  
    sudo apt-get update  
    sudo apt-get dist-upgrade  
    sudo apt-get install apache2 -y  
    sudo apt-get install php -y  
    sudo apt-get install php-gd -y  
    sudo apt-get install gphoto2 -y  
    sudo apt-get install libav-tools -y  
    cd /var/www/  
    sudo rm -r html/  
    sudo git clone https://github.com/andreknieriem/photobooth  
    sudo mv photobooth html  
      
    Configure config.inc.php:  
    sudo nano /var/www/html/config.inc.php  
    change to  
    $config\['dev'\] = false;  
      
    Rights:  
    sudo chown -R pi: /var/www/  
    sudo chmod -R 777 /var/www  
    sudo nano /etc/sudoers  
    \--> Add the following:  
    www-data ALL=(ALL) NOPASSWD: ALL  
    sudo reboot  
      
    Ensure that the camera trigger works:  
    sudo rm /usr/share/dbus-1/services/org.gtk.vsf.GPhoto2VolumeMonitor.service  
    sudo rm /usr/share/gvfs/mounts/gphoto2.mount  
    sudo rm /usr/share/gvfs/remote-volume-monitors/gphoto2.monitor  
    sudo rm /usr/lib/gvfs/gvfs-gphoto2-volume-monitor  
      
    Enable the printer:  
    Install CUPS: https://www.elektronik-kompendium.de/sites/raspberry-pi/2007081.htm  
    (Configure config.inc.php)  
    sudo nano /var/www/html/config.inc.php  
      
    Example for Canon Selphy CP1300  
      
    $config\['print'\]\['cmd'\] = 'sudo lp -d PRINTERnameINcups -o landscape -o media=Custom.100x148mm -o fit-to-page %s';  
      
    CP1300 as for now only works as a USB-printer with a wired connection. Elsewise you get an data-error on the printer screen.  
    So please search for a USB connection and use the CP910 printer driver in CUPS.
    
    27\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/cb0eaf74d830aad27eb4da4ee9362c9d?s=75&d=mm&r=g)
        
        Alex
        
        Hi Andre, du hattest im Oktober mal angedeutet, dass du an einem Admin-Bereich arbeitest. Gibt es da schon etwas Neues? Es wäre echt cool, wenn man in dem Admin-Bereich die Möglichkeit hätte, die Galerie zu leeren oder alle Bilder als Archiv über den Browser herunterzuladen. Wäre das wohl machbar? Vielen Dank im Voraus und schönen Gruß aus Bielefeld. Alex
        
        27\. Mar 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo Alex, leider noch nicht, hab ziemlich viel zutun und das Photobooth ist eig nur nen eigenenes Projekt, was in letzter Zeit viel Anfragen bekommt :D Wenn ich Zeit habe mache ich das mal weiter. Grüße André
            
            28\. Mar 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/8992fbcd16c2b79191a5eb9b5b148a54?s=75&d=mm&r=g)
    
    [Sascha Meinel](www.deecon.de)
    
    Hallo,  
      
    ich finde die Lösung absolut Klasse. Könnte man während des Countdowns auch das Livebild der Camera (wenn von gphoto2 unterstützt) einblenden?
    
    26\. Mar 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a488ec230899951c09f784879498f498?s=75&d=mm&r=g)
    
    Enzo
    
    Hallo Andre,  
    Danke für die tolle Anleitung. Bei mir funktioniert fast alles einwandfrei.  
    Ich hab nur ein Problem mit der Bildergalerie. Wenn ich auf die Bildergalerie gehe, dann sehe ich die Übersicht mit den geschossenen Bildern. Wenn ich jetzt auf eines klicke dann hängt es sich auf. Ich sehe also das Bild nicht in der vergrößerten Ansicht und kann auch nichts mehr machen/ klicken. Muss die Seite dann neu laden. Passiert sowohl auf nem Tablet (7") als auch auf meinem Handy.  
      
    VG  
    Enzo
    
    23\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/e0236e06df94f825d6cb6111058ff42d?s=75&d=mm&r=g)
        
        Thomas
        
        bei mir funktioniert es jetzt auch prima.  
        Ich würde gerne die Raw Dateien auf der Cam lassen.  
        Hat da jemand einen Tip
        
        25\. Mar 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/4a1a1eebf2aa2002e18374009d231da0?s=75&d=mm&r=g)
        
        Michael
        
        Hallo Enzo,  
          
        hast du das Problem gelöst? Ich habe leider das gleiche!  
        VG Michael
        
        12\. Apr 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a488ec230899951c09f784879498f498?s=75&d=mm&r=g)
            
            Enzo
            
            Hallo Michael,  
              
            nein habe es nicht hinbekommen! Habe gehofft Andre meldet sich zu Wort.  
            Wollte es über die in den Kommentaren beschrieben SimpleLightBox versuchen. Allerdings bekomme ich die über die Befehle nicht installiert. cÍch habe das Problem auch nur auf einem 7" Android Tablet und meinem Android (Samsung S7) Handy. Auf dem Windows rechner läuft alles einwandfrei :-/
            
            22\. May 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/e922ce0f42e324f423c8d3985c2ab125?s=75&d=mm&r=g)
    
    Sascha
    
    Hallo Andre,  
    habe jetzt den canon cp750 installiert. wenn ich allerdings auf das Druckensymbol gehe druckt er nicht. Erst wenn ich mit der rechten Maustaste auf drucken gehen öffnet er das Druckmenü.  
    Würde aber gerne das er druckt sobald ich auf dein Symbol drücke. Muss ich da noch etwas einstellen?
    
    21\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sascha. Eigentlich müsste der Button genau diesen Befehl ausführen. Ich probiere es später mal aus. Grüße
        
        22\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/9164f16ae5d6ec67233317cabc6ff5c1?s=75&d=mm&r=g)
    
    Tim
    
    Könntest du mir das etwas genauer erklären mit dem stcik das mit dem Banner hat supert funktioniert. danke
    
    20\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tim,  
        das Photobooth braucht den Ordner images. Du kannst nun aber eine Verknüpfung setzen (symbolischer Link), sodass das Programm denkt, er würde in images speichern, es aber nicht tut sondern in der Verknüpfung. Dafür musst du herausfinden, wie der Pfad zu deinem Stick ist. Das weiß ich nicht genau wie das geht. Sobald du das hast, musst du nur den Link setzen. mit ln -s /stickordner/images images im Terminal im Photobooth Ordner. Grüße André
        
        22\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7b57be5ffdedeebaa0823e0d72f567a0?s=75&d=mm&r=g)
    
    Tobias Liebner
    
    Hallo Andre,  
    danke erst einmal für diese tolle verständliche Anleitung.  
    Die Photobox läuft auch bei mir bisher ganz gut nur habe ich folgendes Problem:  
    Wenn ich ein Foto mache dann zählt der Countdown runter und die Kamera löst aus. Leider bekomme ich danach die Meldung das ein Fehler aufgetreten ist. Das Bild wird im Images Ordner auf dem Pi allerdings abgespeichert aber leider zeigt mir die Galerie auf der Weboberfläche keine Inhalte an . Rechte habe ich alle vergeben. Was kann ich hier noch versuchen?  
      
    Ich danke dir schon einmal für deine Hilfe.  
      
    Grüße  
    Tobias
    
    19\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tobias,  
        das hört sich für mich danach an, dass keine Thumbs erzeugt werden können. Hast du php-gd installiert? Das ist dafür zuständig. Kannst ja auch mal hier durch die Kommentare danach suchen.  
        Grüße André
        
        19\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/69a508485fe3046c6fd78422a87a1087?s=75&d=mm&r=g)
    
    Tim
    
    Hallo Andre  
    vielen Dank für deine arbeit.  
    Ich wollte mal fragen ob es möglich ist die Fotos nivht auf dem pi sondern auf einem USB stick zu speichen da ich für den pi nur eine 16GB sd karte genommen habe oder muss ich mir einfach ne größere sd karte holen?  
    Und ist es möglich oben rechts den Banner rauszunehmen ich will verhindern das da jemand drau drückt  
    Gruß Tim
    
    16\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tim,  
        den Banner kannst du rausnehmen, indem du in der config.inc.php das show\_fork auf false setzt. Speichern kannst du das Ganze auch auf einem Stick. Dafür musst du nur einen symbolischen link (symlink) setzen. Lösche dafür den images ordner und linke deinen Stick rein. ln -s /stick/images images.  
        Grüße André
        
        19\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e922ce0f42e324f423c8d3985c2ab125?s=75&d=mm&r=g)
    
    Sascha
    
    Hallo Andre,  
    vielen Dank für deine tolle Anleitung und die ansprechende Oberfläche. Ich habe soweit alles installiert auf debian stretch. wenn ich in der Konsole  
      
    gphoto2 --trigger-capture  
      
    macht er auch ein Photo und speicert es auf der SD karte. wenn ich in deiner Weboberfläche eine Aufnahme auslöse fotografiert nicht und speichert lediglich deinen Hintergrund in der Galerie.  
      
    Kannst du mir hier weiterhelfen?
    
    15\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sascha, Das ist, weil in der config.php noch Dev angeschaltet ist. Ändere das einfach mal auf dev = false;  
        Grüße
        
        15\. Mar 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e922ce0f42e324f423c8d3985c2ab125?s=75&d=mm&r=g)
            
            Sascha
            
            Vielen vielen Dank:))))  
            Kannst du mir auch einen Drucker empfehlen? Wenn das alles klappt, Wird sich meine Verlobte freuen. Bei uns liegen die mieten so bei 300 euro und aufwärts. Da ist etwas Geld bei dir bestimmt besser aufgehoben:) und ich kann meine Box selbst designen.
            
            15\. Mar 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Sascha, ich habe es bisher nur mit nem Canon Selphy mal testweise ausprobiert, aber noch nicht im richtigen Einsatz. Kannste ja mal gucken, ob da nicht jeder Drucker/Fotodrucker geht mit den CUPS Treibern.  
                Grüße
                
                15\. Mar 2018 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/e922ce0f42e324f423c8d3985c2ab125?s=75&d=mm&r=g)
                    
                    Sascha
                    
                    Danke, werde mal schauen und probieren. Fragen kommen bestimmt noch;) Eine kleine Spende ist grad losgeschickt worden.  
                    Gruß Sascha
                    
                    15\. Mar 2018 [Antworten](#)
                    
        
        *   ![](https://www.gravatar.com/avatar/e0236e06df94f825d6cb6111058ff42d?s=75&d=mm&r=g)
            
            thomas
            
            wenn ich false eingebe, erscheint nach dem countdown es ist ein Fehler aufgetreten.  
            bei true erscheint in der Galerie nur das Hintergrundbild  
            in beiden fällen löst die cam nicht aus
            
            17\. Mar 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Dann ist etwas anderes bei dir nicht in Ordnung. Wird denn ein Bild gemacht? Nein, dann stimmen diene Rechte nicht. Ja? Dann hast du bestimmt kein php-gd installiert um Thumbnails zu erzeugen.
                
                19\. Mar 2018 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/9a2a4719819f905ca5177ef225d81f9a?s=75&d=mm&r=g)
    
    Marc Hinze
    
    Hallo Andre,  
    tolle Idee und auch bestimmt tolle Umsetzung, wenn es bei mir laufen würde. Bin derzeit am verzweifeln. Habe soweit ich es verstanden und umsetzen konnte, alles gemacht. Bei der Eingabe der IP kommt dann lediglich der PHP Code. Wahrscheinlich was mit der Rechtevergabe? - nur wo stell ich das ein? Für einen PI Neuling schon manchmal schwer.... Kann man mir noch helfen?
    
    13\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Marc, wenn du im Browser PHP Code siehst, dann ist entweder der Apache Webserver nicht richtig installiert, oder du hast kein PHP. Das müssteste nochmal prüfen. apt-get install php beispielsweise.  
        Grüße
        
        14\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e0236e06df94f825d6cb6111058ff42d?s=75&d=mm&r=g)
    
    Thomas
    
    Habe das Programm als absoluter Neuling installiert, php5 gibt es wohl nicht mehr habe daher php7 installiert.  
    Das Startbild erscheint, der Countdown zählt runter und dann erscheint, Es ist ein Fehler aufgetreten, bitte versuche es erneut.  
      
    gPhoto2 funktioniert, darüber lässt sich meine Cam auslösen  
    Würde mich über Hilfe seh freuen.
    
    07\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/a7efb3faeb347e854b73689085954580?s=75&d=mm&r=g)
        
        Domi
        
        Hi Thomas,  
        Hi Andre,  
        habe das gleiche Problem wie Thomas. Gibts hierfür schon einen Tipp !?!?!?  
          
          
        
        13\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo Andre,  
      
    ich kriege es nicht hin mit der Rückmeldung bezüglich des Drucken Buttons. Welche Datei muss ich verändern? Ich möchte lediglich ein "wird gedruckt" auf dem Bildschirm für ca. 3 Sekunden.  
      
    Hast du einen Tipp für mich?  
    Gruss  
      
    Dirk
    
    06\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Dirk, dann bau dir in der core.js eine Funktion, die ein HTML Element einblendet für 3 Sekunden, wenn der Drucken-Button gedrückt wird.  
        $('druck').on('click' function(){  
        $('htmlelement').fadeIn(200);  
        setTimeout(function(){  
        $('htmlelement').fadeOut(200);  
        },3000);  
        });  
          
        So in der Art.  
        Grüße André
        
        07\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/2abb4e5cfdc4173ed6deef46e126cab2?s=75&d=mm&r=g)
    
    Björn
    
    Hallo Andre,  
      
    ich würde gerne nicht nur 1 Foto, sondern 3 Fotos hintereinander schießen. Leider bekomme ich es nicht mit dem Countdown hin, sodass er Countdown runter zählt (durch resources/js/core.js), dann das Foto schießt, anschließend wieder runterfällt, Foto schießt und dann nochmal das ganze.  
      
    Hast du vielleicht einen Tip für mich?
    
    12\. Feb 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Björn, dafür müsstest du in der public.takePic Funktion im success Bereich nochmal den Countdown aufrufen und hochzählen. So in der Art  
        public.takePic = function (counter) {  
        counter ++;  
        ...  
        success: function(){  
        if(counter == 3)  
        counter = 0;  
        public.renderPic(result);  
        } else {  
        if (!processing) {  
        public.reset();  
        loader.slideDown('slow', 'easeOutBounce', function () {  
        public.countdown(countDown, $('#counter'));  
        });  
        }  
        }  
          
        So in der Art könnte es gehen.  
        Grüße André
        
        07\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/aa89d0d4c3d7b3705527e1f63c6b4364?s=75&d=mm&r=g)
    
    Hartmut
    
    Hallo Andre!  
    Als relativer Neuling mit dem Raspberry und Linux habe ich folgendes Problem: DSLR Nikon D3100 wird scheinbar nur als Speichermedium erkannt, in der Fensterleiste steht gphoto2/xyz.  
    Die Kamera läßt sich über den Befehl gphoto2 --xyz nicht ansprechen, da die Fehlermeldung Befehl nichtbekannt/vorhanden kommt.  
    Die Dateirechte ließen sich am Raspi für den Ordner html nicht erweitern, das ließ sich über meinen Rechner per UBUNTU problemlos ändern. Hizuzufügen ist, das mein Raspi aufgrund der erwarteten Datenmenge an Bildern von einem 64 GB USB-Stick bootet. Das sollte allerdings kein Problem sein.  
    Vielen Dank für die Anleitung, der Webserver funktioniert übrigens einwandfrei, Da die Kamera sich nicht auslösen läßt kommt natürlich immer die Meldung es ist ein Fehler aufgetreten.  
    Gruß aus Münster  
    Hartmut
    
    08\. Feb 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Hartmut, ist deine Kamera denn kompatibel, hattest du das probiert? Als root müsstest du über die Konsole nämlich ohne Probleme auslösen können. Oder kann es sein, dass du gphoto2 nicht richtig installiert hast? Der Befehl müsste nämlich auf jeden Fall bekannt sein.  
        Grüße André
        
        09\. Feb 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
    
    Reinhard
    
    Hi Andre,  
    habe dein Projekt gefunden da ich selber eine Fotobox für unsere Hochzeit und Geburtstagsfeiern basteln wollte. Hätte sie auch um einige Features bereits erweitert: MySQL Anbindung, Farb und Convolution Filter, Fotorahmen, HTML Canvas für Filter und Kamera Vorschau und einem Arcade Button welcher über die GPIOs angebunden ist, Aktuell hänge ich gerade an der Live-Vorschau da gphoto einen Stream in ein mjpg File liefert und ich es einfach nicht schaffe den Stream in die Weboberfläche zu bekommen. Hättest du eine Idee? Gerne kannst du auch meine Version für Erweiterungen haben ;)
    
    03\. Feb 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/1fa21ccdea629ac16f3375f68ff49ccc?s=75&d=mm&r=g)
        
        Reinhard
        
        Schade dass ich leider einer der Wenigen bin der gar keine Antwort bekommt. Mittlerweile habe ich mittels --capture-preview eine etwas ruckelige Vorschau hinbekommen. Wie auch immer solltest du einige meiner Erweiterungen interessant finden vielleicht können wir das ganze ja irgendwann mal mergen? Bin leider auf Git überhaupt nicht fit und arbeite in meinem lokalen SVN Repository
        
        09\. Mar 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Reinhard, danke für dein Angebot und leider kann ich dir bei dem Live Preview nicht helfen, da ich es selbst nicht hinbekommen habe. Bei Github gibs aber nen Pull Request, mit ner Live Preview Funktion. Vlt kannste da mal gucken. Ja du könntest deinen Code ja mal per Mail schicken oder du forkst bei Github und änderst deine Dateien direkt dort.  
        Grüße Andre
        
        10\. Mar 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/d0451806c821723861c08b4ca4e7d02e?s=75&d=mm&r=g)
        
        Jan
        
        Hallo Reinhard,  
          
        ich bin im Moment am überlegen, die Software um genau die Elemente zu erweitern, die du bereits programmiert hast. Wäre es möglich, dass du mir/allen den Code zur Verfügung stellen könntest, da ich nicht ganz so fit in HTML/PHP/JS bin?  
        Ich würde mich sehr freuen.  
          
        Viele Grüße
        
        13\. May 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
        
        Ediz Schon
        
        Hi Reinhard,  
        würdest Du Deine Erweiterungen mit uns teilen,  
        mich interessiert am meissten der Auslösebutton und der Fotorahmen.  
        Wäre echt super, wenn Du Deine Erfahrungen postest.  
        Viele Grüsse  
        Ediz
        
        09\. Jul 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
    
    Christoph
    
    Hey ;)  
    ich habe auf GitHub gesehen, dass du dir demnächst die livepreview implementation ansehen willst?  
    bist du da schon weiter gekommen, wäre echt toll wenn es möglich wäre den motion stream während dem Countdown angezeigt zu bekommen (habe motion installiert und das geänderte style.css ausprobiert, funktioniert aber leider genau so wie vorher - also keine livepreview)  
    lg aus Wien :)
    
    01\. Feb 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e625f4fa08ab2ea3109afc2c52462683?s=75&d=mm&r=g)
    
    Marvin
    
    Hallo Andre,  
    ich hab vor einen download Button einzufügen.  
    Kurz die Idee dahinter ist, dass wenn man eine url hat die nur die Galerie beinhaltet könnten Nutzer auf dieser die Bilder direkt downloaden.  
    Jetzt meine Frage:  
    Ich hab es geschafft den QR-Button umzufunktionieren und der download tut. Ich finde nur nicht die stelle, an der die Icons bestimmt werden um das QR-Code Icon mit einem Download Icon zu tauschen. Vielleicht kannst du da ja helfen.  
    Wenn du zufällig auch noch weißt, warum man auf dem smartphone in der Galerie kein bild anklicken kann wäre das auch cool! :)  
      
    Viele Grüße,  
    Marvin
    
    28\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de)
        
        Hallo Marvin, die Icons funktionieren hier mit fontawesome (http://fontawesome.io/icons/) Hier kannst du dann die Klasse fa-qr durch fa-download o.Ä ersetzen. Welche Smartphone benutzt du denn? Eigentlich müsste es in de Galerie klappen. Grüße André
        
        28\. Jan 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e625f4fa08ab2ea3109afc2c52462683?s=75&d=mm&r=g)
            
            Marvin
            
            Hallo Andre,  
            Danke für deine schnelle Antwort. Das mit dem Icon hat super geklappt.  
            Ich selbst nutze ein One Plus 3T. Ich habe mal etwas herumgespielt und festgellt, dass der Background in der Mitte den Galerie Button verdeckt wie hier zu sehen ist, was nicht so das Problem ist:  
            https://imgur.com/a/Nsszs  
            Dort habe ich mal ein Iphone 8 plus verwendet. Das schwierigere für mich kommt jetzt. Wenn ich im Hochformat bin kann ich zwar die Galerie öffnen aber nicht ein Bild. Wenn man auf ein Bild klickt kommt der Fehler wie auf dem bild zu sehen ist. Im Querformat geht beides. Eventuell wird irgendwo eine Displaybreite abgefragt?  
            Ich habe zum testen die Website von dir benutzt. Vielleicht weißt du ja ob das an photoswipe liegt oder an etwas anderem.  
            Gruß Marvin :)
            
            29\. Jan 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo Andre,  
    das mit dem Drucken hab ich hinbekommen.  
    Wäre es möglich nach dem Tippen auf "Drucken" einen Hinweis auf der Weboberfläche "wird gedruckt, bitte warten" und zusätzlich einen kleinen Timeout hinzuzufügen, damit der Nutzer nicht mehrmals nacheinander auf "Drucken" tippt?
    
    28\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Dirk, klar es ist alles möglich :P Du könntest beim Klick auf den Druckbutton einfach ein  
        einblenden in dem beispielsweise dein text steht. Dann könntest du mit window.setInterval einfach einen kleinen Countdown bauen, der jede Sekunde die Zahl runterzählt. Oder du nutzt die Countdown Funktion in der core.js Alles eine Frage des Könnens. Genaue Codebeispiele kann ich dir leider nicht geben. Grüße A
        
        28\. Jan 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
            
            Dirk
            
            Danke für deine Antwort. Schade. Mein Können ist nämlich sehr begrenzt was das angeht. Ich bräuchte da schon den Code zum Abtippen. ;-)  
            Das Problem ist nämlich auch, dass die Schaltfläche nicht sichtbar reagiert und man denkt er hätte den Klick auf "Drucken" nicht angenommen... :-( Und dann daddelt jeder da drauf rum und es kommt immer wieder dasselbe Bild aus dem Drucker.
            
            22\. Feb 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/50fa3694de4b7dd1b4bede18c1c3afcf?s=75&d=mm&r=g)
    
    Malte
    
    Vielen Dank für das wunderbare script, läuft bei mir nach einigem hin und her mit Canon Eos 20D.  
    Zwei Fragen bleiben, er will nicht aus dem Photobooth drucken (nur über command-Zeile gehts)  
      
    In der Version von Nihilor soll im Sourcecode die Druckertype angegeben werden,  
    ich vermute mal so in der config.inc.php bei print/cmd: sudo lp -d PRINTER (siehe CUPS) %s  
      
    Damit neben das Foto NICHT der QR Code gedruckt wird sollen welche Zeilen verändert werden in der print.php?  
    Hier steht vom Autor ein "//fixme: move the ..." was bedeutet das? soll hier die Änderung rein mit $filename\_source ?
    
    11\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/6e5546984e8702bd3c1e8f9fff2e6221?s=75&d=mm&r=g)
        
        Jan
        
        Hallo,  
        mir ist klar, dass ich auf einen 2 Jahre alten Kommentar antworte, stehe aber aktuell vor dem Problem, dass meine gute alte Canon eos 20D leider nur ein mal auslöst und danach nicht mehr. Starte ich pi und Kamera neu, klappt es wieder für ein mal.  
          
        Kannst du mir sagen, wie du deine 20D überzeugen konntest?
        
        09\. Jun 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/2abb4e5cfdc4173ed6deef46e126cab2?s=75&d=mm&r=g)
    
    Björn
    
    Hallo Andre,  
      
    vielen Dank für deine Anleitung. Leider funktioniert GPHOTO bei meiner Kamera nicht. Ich habe deshalb ein Python-Script geschrieben, dass selbst auslösen kann. Dies funktioniert auch. Habe in deiner Config dies angepasst:  
    $config\['take\_picture'\]\['cmd'\] = 'sudo python /usr/local/bin/shoot.py';  
    $config\['take\_picture'\]\['msg'\] = 'done';  
    Es läuft ebenfalls ein Job, der alle Sekunde schaut, ob ein neues Foto erstellt wurde und kopiert es nach  
    /var/www/html/images $ ls -ls  
    total 17360  
    1344 -rw-r--r-- 1 pi pi 1376060 Jan 8 07:30 DSCF3506.JPG  
    1284 -rw-r--r-- 1 pi pi 1312052 Jan 8 07:34 DSCF3507.JPG  
    1396 -rw-r--r-- 1 pi pi 1427729 Jan 8 07:36 DSCF3508.JPG  
      
      
    Allerdings hänge ich nun beim Vorschaubild. Per GUI klicke ich "Foto erstellen" -> Foto wird Geschossen und wird in den Ordner kopiert. Bei der GUI steht dann "Bild wird verarbeitet".  
    Es wird dann auch die Datei data.txt erstellt:  
      
    4 -rw-r--r-- 1 www-data www-data 79 Jan 8 07:44 data.txt  
      
    Der Ordner thumbs ist leider leer. Per GUI in der Galarie existiert auch ein "Bild", das er allerdings nicht findet.  
      
    Hast du einen Tipp für mich?  
      
    Grüße  
    Björn
    
    08\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo, hast du gdlib installiert für deine PHP Version? Es hört sich an, als könnte PHP dein Bild nicht kleinrechnen, da fehlt meistens die Bibliothek.  
          
        Grüße André
        
        15\. Jan 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
    
    Dirk
    
    Hallo Andre!  
    Zunächst einemal vielen Dank für die tolle Software und Anleitung.  
    Ich arbeite momentan an der Drucklösung und habe diese auch ans Laufen bekommen mit einem Selphy.  
    Ich würde die Fotos aber gerne ohne QR Code in voller Grösse drucken.  
    Da ich mich mit PHP nicht wirklich auskenne würde es zahlreiche Versuche für mich bedeuten den entsprechenden Code aus der print.php zu löschen.  
    Kannst Du mir bitte sagen, welche Zeilen ich entfernen muss, um Fotos ohne Code zu drucken?  
      
    Gruss  
      
    Dirk
    
    07\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
        
        Dirk
        
        Ich habe das mit dem Drucken ohne QR Code hinbekommen.  
        Jetzt habe ich nur das Problem, dass der Selphy sich aufhängt wenn man während des Drucks einen weiteren Druckbefehl sendet (bekanntes Problem).  
        Gibt es die Möglichkeit einen Timeout von ca. einer Minute zwischen zwei Druckbefehlen einzubauen?  
          
        Gruss  
          
        Dirk
        
        08\. Jan 2018 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/07f53967f07f52d23b1a96b934e0800f?s=75&d=mm&r=g)
        
        Christian
        
        Hallo Dirk,  
          
        wie hast du das mit dem Selphy hingebracht? Bei mir funktioniert gar nichts, ich kann nicht drucken und der Druckbutton funktioniert auch nicht. Kannst du mir bitte helfen?  
        Was hast du für einen Selphy? CP1300?
        
        09\. Jan 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/8b6a64e82760165d33d544e0c01acac4?s=75&d=mm&r=g)
            
            Dirk
            
            Hallo Christian,  
            ich habe ein Ubuntu mit LXDE auf einem Netbook laufen.  
            Der Drucker wurde nach dem Einstecken sofort erkannt.  
            Ich musste den Code in der config.inc.php minimal anpassen und er druckte.  
            Eine kleine Änderung in der print.php war nötig um ohne QR Code zu drucken.  
            Ich habe bloss dieses lästige Warteschlangenproblem.  
            Der 1300 wird noch nicht von Gutenprint unterstützt.  
            Versuche mal den 1200 auszuwählen. Meistens läuft er auch mit einem anderen Treiber.  
            In der config.inc.php habe ich hinter print "fit-to-page" gelöscht. Erst danach fing er an zu drucken. Habe vorher verschiedene Befehle auf der Kommandozeile versucht.  
            In der print.php habe ich filename\_print in filename\_source geändert. So druckt er aus dem images Verzeichnis.
            
            11\. Jan 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/18ab79e44b9a77d320d3ea372527fe5d?s=75&d=mm&r=g)
    
    Christian S.
    
    Hallo Andre,  
      
    vielen Dank für diese tolle Anleitung. Funktioniert wirklich super deine Fotobox! :-)  
      
    möchte aber gerne noch eine weitere Funktion hinzufügen, wo ich momentan ein wenig hänge und hoffe hier etwas Hilfe finden zu können.  
      
    Möchte gerne folgendes realisieren:  
      
    Anstatt nur auf dem Touchscreen den Button "Foto machen" für ein Bild zu drücken, möchte ich es gerne umsetzen, dass man diese Aktion (Foto machen) auch mit dem Druck auf einen Buchstaben/beliebige Taste der Tastatur auslösen kann.  
      
    Wo genau (in welchem File) wird denn die Aktion "Foto machen" definiert?  
      
    bzw. um welchen Befehl müsste ich diese Datei ergänzen, damit der Countdown per Tastatur startet?  
      
    Hoffe ihr könnt mir helfen! Vielen Dank für eure Bemühungen!  
      
    MFG Christian
    
    05\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Christian, das geht in core.js Dort gibt es $('.takePic, .newpic').click(function (e) { das macht, dass ein Klick auf den Button registriert wird. Darin siehst du was getan werden muss, um ein Foto auszulösen. Du kannst jetzt noch $(document).on('keyup', function(e){  
        if(e.keyCode == deinenummer) ....  
        })  
        Hier kannste herausfinden welche Nummer welche Taste hat: http://keycode.info/  
          
        Grüße André
        
        05\. Jan 2018 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/18ab79e44b9a77d320d3ea372527fe5d?s=75&d=mm&r=g)
            
            Christian S.
            
            Hallo Andre,  
              
            danke für die Hilfe! leider hänge ich noch etwas... besagte Datei und Befehl habe ich gefunden und verzweifelt versucht einen neuen Befehl für den Tastendruck zu erstellen...  
              
            wenn ich es richtig interpretiere ist der Befehl $('.takePic, .newpic') die Aktion, welche den Countdown auslöst.... daher habe ich deine Zeile nun wie folgt angepasst...  
              
            $('.takePic, .newpic').on('keyup', function(e){  
            if(e.keyCode == 66)  
            })  
              
            müsste doch so korrekt oder? mehr muss der Code doch auch nicht definieren, oder?leider funktioniert es aber nicht :-( hättest du denn vielleicht einen konkreten Vorschlag wie ich den Code in core.js schreiben/abändern muss das es funktioniert?  
              
            VG Christian
            
            05\. Jan 2018 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/18ab79e44b9a77d320d3ea372527fe5d?s=75&d=mm&r=g)
            
            Christian S.
            
            Hallo Andre,  
              
            bin mittlerweile echt am verzweifeln...dachte eigentlich es wäre simpel, aber irgendwie scheine ich zu hängen....  
              
            wo muss ich denn genau welchen Code einfügen, damit ich von der Startseite aus ein Foto mit der taste b (also mit dem keycode == 66) den Countdown starten, bzw. das Bild auslösen kann?  
              
            sorry das ich dich nochmals störe!  
              
            Wünsche noch ein schönes Wochenende!  
              
            VG Christian
            
            06\. Jan 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/ce01d465f8c137dc15d817bedce101c7?s=75&d=mm&r=g)
                
                Peter
                
                Hallo Christian,  
                ich hänge auch an dem Problem. Würde das gerne allerdings über den Mausbutton auslösen. Hast du es hinbekommen?  
                LG
                
                02\. Mar 2018 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/07f53967f07f52d23b1a96b934e0800f?s=75&d=mm&r=g)
    
    Christian
    
    Hi Andre, mittlerweile funktioniert alles bei mir bis auf den Drucker. Ich habe mir einen Canon Selphy CP1300 zugelegt. Ich habe mir Cups installiert, kann auch drucken aber nur nicht die Bilder von der Kamera/Website. Ich bekomme immer eine Fehlermeldung das Format sei falsch oder Beschädigt? Der Druckbutton funktioniert auch noch nicht, muss ich da noch etwas einstellen im Script? Oder habe ich etwas vergessen? Danke
    
    04\. Jan 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/7d82a358e16bbb2dcd56d9d7dcb86546?s=75&d=mm&r=g)
    
    [Dominik Stauffer](d2a.ch)
    
    Hallo  
      
    Danke für das geniale Scipt.  
      
    Mir ist noch aufgefallen, dass bei der config.inc.php in der Aktuellen Download Version die Zeile: $config\['dev'\] auf TRUE steht.  
      
    Hab nun nach paar Stunden Kommentare lesen und suchen die Zeile auf FALSE gestellt und es läuft einwandfrei :)  
      
    LG Dominik
    
    01\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/07f53967f07f52d23b1a96b934e0800f?s=75&d=mm&r=g)
        
        Christian
        
        Danke Dominik, jetzt funktioniert es bei mir auch !! Muss jetzt nur noch den Drucker zum funktionieren bekommen! Lg,Chris
        
        02\. Jan 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/71c9899b58e80a1e9ffa7dc72e0505d5?s=75&d=mm&r=g)
    
    Sven O.
    
    Hallo Andre,  
    habe heute die neuen Dateien von GitHub gezogen und aufgespiel. Es läuft alles wunderbar und es gibt nicht auszusetzen. Großen Lob für deine tolle Arbeit, dein Engagement und deine Bereitschaft es allen Recht zu machen.  
    Danke und Gruß Sven
    
    23\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sven, danke für das nette Feedback. Freut mich, dass es bei dir funktioniert :) Grüße André
        
        02\. Jan 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/97cea66b68d20ffc8c1d9196ed1ac666?s=75&d=mm&r=g)
    
    Lars
    
    Hallo nochmal, wird die Kamera automatisch erkannt? Leider erhalte ich nämlich kein Bild und die Kamera wird auch nicht ausgelöst. Muss ich noch etwas einstellen?
    
    23\. Dec 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/97cea66b68d20ffc8c1d9196ed1ac666?s=75&d=mm&r=g)
    
    Lars
    
    Hallo zusammen,  
      
    mir kommen jetzt ein paar Fragen auf...  
    1\. Wie ändere die Einstellungen der Startseite, Grafiken etc..?  
    2\. Wie richte ich photobooth mit dem Drucker ein?  
      
    Danke im Voraus!"
    
    20\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Lars, zu 1: dafür brauchst du HTML und CSS Kenntnisse, denn wie gesagt, ist das Ganze nur eine Kopie meines Projektes und ich habe dafür kein Interface geschrieben. Zu 2. Das kann ich dir nicht genau sagen, dass die Drucker-Optionen auch nur von anderen Usern hinzugefügt wurden.  
        Grüße André
        
        20\. Dec 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a3887278df2101df3f31c06023ce1560?s=75&d=mm&r=g)
            
            Alex
            
            Hallo Andre, vorab danke für deinen Code, ein sehr schönes Projekt. Habe aktuell das Problem, dass der QR Code auf der Hauptseite nach unten verschoben wird und somit nicht komplett angezeigt wird, habe es mit verschiedensten Browsern versucht aber überall das gleiche Problem. Der QR aus der Galerie funktioniert einwandfrei nur eben auf der Hauptseite wird er nach unten geschoben. woran kann das liegen?  
            Danke im Voraus & Grüße aus Herford  
            Alex
            
            20\. Dec 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Alex, das Problem war bekannt und ich habe heute eine neue Version mit der Behebung des Fehlers herausgebracht.
                
                22\. Dec 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/14693ee136f5ca487e07f1c3625cd608?s=75&d=mm&r=g)
    
    Viktor
    
    Hallo, ich hatte versucht für Gäste eine Galerie-seite zu erstellen. Leider bin ich daran gescheitert. Hat es vielleicht jemand geschafft? Würde mich über die Lösung freuen.  
    P.S. Optimal wäre es, wenn sich die Fotos aktualisieren würden sobald ein neues Foto geschossen wurde.  
    Grüße
    
    16\. Dec 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f5d8dd64cb07ef180d487c341f0fa09a?s=75&d=mm&r=g)
    
    Mike
    
    Hallo Andre.  
    Vielen Dank für deine super tolle PhotoBooth-Umsetzung! Ich habe dein Setup erfolgreich auf meinem RaspberryPi2 zum Laufen gebracht. Auf dem Desktop-PC läuft alles reibungslos. Lediglich auf dem IPad, welches ich zur Steuerung nehmen möchte funktioniert die Gallery-Funktion nicht. Die Bilder werden nicht vergrößert dargestellt, bzw die SlideShow startet nicht. Hast du einen kleinen Arbeitshinweis für mich.  
    Danke  
    Mike
    
    16\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Mike, der Fehler ist mir neu. Da kann ich dir auch leider nicht weiterhelfen, da ich kein Ipad habe um das nachzuvollziehen. Evtl könntest du das Photoswipe Plugin erneuern. Da gibt es neuerere Versionen. Kannste ja mal ausprobieren. Grüße André
        
        20\. Dec 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/07f53967f07f52d23b1a96b934e0800f?s=75&d=mm&r=g)
    
    Christian
    
    Hallo, ich bin ein absoluter Pi Neuling, habe soweit alles geschafft dank deiner Anleitung. Aber ein Problem mit der Installation von Digicamcontrol und der Speicherung im Archiv D:\\xampp\\htdocs\\photobooth\\digicamcontrol. Wie funktioniert das installieren, muss ich das auf meinem Laptop oder Pi installieren?Welche Befehle und wo ist der Dateipfad? Löst wegen diesen Programm auch meine Kamera nicht aus? Wie ändere ich den Hintergrund von der Homepage? Danke Chris
    
    15\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Christian, es hört sich an, als würdest du die Systeme mischen. Auf dem Pi läuft alles, das Tablet ist eigentlich nur ein Monitor. Bilder werden mit gphoto gemacht. Wenn du Xampp und Digicamcontrol benutzt, bist du auf einem Windows Rechner unterwegs und benötigst überhaupt gar keinen Raspberry und ja Digicamcontrol muss dann dem Windows Rechner installiert sein.  
        Grüße André
        
        20\. Dec 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/07f53967f07f52d23b1a96b934e0800f?s=75&d=mm&r=g)
        
        Christian
        
        Hi, danke für die Info! Jetzt ist mir das alles klar! Trotzdem habe ich noch ein Problem mit meiner Eos 70D, habe sie mit USB Kabel angeschlossen am Pi , diese löst aber nicht aus. Habe Gphoto2 nochmal neu installiert, muss ich bei der Cam etwas einstellen oder kannst du mir sagen was ich falsch gemacht habe oder ob ich etwas vergessen habe! Denn die Homepage funktioniert soweit, sie macht halt immer Screenshots/Bilder wie der Hintergrund von der Homepage.
        
        29\. Dec 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/18ab79e44b9a77d320d3ea372527fe5d?s=75&d=mm&r=g)
    
    [Chriss](keine)
    
    Hi, habe ein Problem mit dem Auslösen meiner Kamera über deine Seite. Wenn ich die Kamera über Gphoto direkt per Befehlseingabe auslösen lasse funktioniert alles super...nur wenn ich den Button auf deiner php Seite drücke kommt der Countdown aber keine Auslösung...woran kann das liegen? muss ich noch irgendwas anpassen? bzw. muss sich gphoto direkt in deinem Ordner befinden? Vielen Dank für deine Hilfe! Chriss
    
    13\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hey Chriss,  
        wenn du gphoto in dem Ordner in dem die index.php liegt, ausführen kannst, dann müsste es auch so gehen. Ansonsten installier es in dem Ordner. Falls es dann immernoch nicht klappt, dann wird es den Rechten liegen. Das steht hier bestimmt schon 200 mal in den Kommentaren und auch miterweiler oben und in der Anleitung.  
        Ich hoffe damit klappt es.  
        Grüße André
        
        14\. Dec 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/18ab79e44b9a77d320d3ea372527fe5d?s=75&d=mm&r=g)
            
            Chriss
            
            Hi Andre,  
              
            nach der Anleitung von Tobias H hat es wirklich super geklappt! :-) der nächste Schritt wäre jetzt noch ( da ich ein RP3 habe) zu versuchen den hier verwendeten Wlan Router einzusparen, da das RP3 ja ein eigenes WLAN hat... ist das möglich? bzw. gibt es hierfür auch bereits ein Tutorial? sorry für meine blöden Fragen...bin noch ganz neu im Raspberry Pi Fieber ;-)  
              
            schöne Feiertage! Chriss
            
            15\. Dec 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
                
                [Tobias H](tobiashaas.info)
                
                Hi Chriss, freut mich dass dir meine Anleitung weitergeholfen hat ;-)  
                Wie man einen WLAN Hotspot am RPi3 einrichtet wird hier beschrieben  
                https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/  
                  
                Hab es selbst aber nicht getestet, also keine Gewähr ;-)  
                  
                LG Tobias
                
                15\. Dec 2017 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
                
                [Tobias H](tobiashaas.info)
                
                Ich bin jetzt zwar auch kein mega RPi3 Freak, aber ich denke dass das verzichten des WLAN Routers keine gute Idee ist... Der RPi hat dafür einfach zu wenig Leistung und würde sicher sehr sehr träge laufen.  
                Stell dir mal vor du hast dein PhotoBooth auf einer Hochzeit am laufen und jeder loggt sich per WLAN ein, die meisten denken ja WLAN heißt = INTERNET... Ich glaube nicht dass der Photobooth dann noch zufriedenstellend funktioniert  
                  
                LG Tobi
                
                15\. Dec 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/18ab79e44b9a77d320d3ea372527fe5d?s=75&d=mm&r=g)
                    
                    Chriss
                    
                    Hi Tobias,  
                      
                    habe als Hobby Fotograf bereits schon ein paar Versionen von Fotoboxen gebaut, welche sich dann in der Praxis durch die benötigte Stromversorgung immer als Stolperfallen oder aber als schlecht bzw. nur an ungünstigen Stellen aufstellbar entpuppt haben. Aus diesem Grund möchte ich möglichst mobil bleiben.  
                      
                    Die Features für die Gäste: Bilder direkt zu Downloaden und ausdrucken zu können sind zwar nett, benötige ich jedoch nicht, da es hier sowieso regelmäßig zur Verletzung des Datenschutzes kommt. Mir wäre es wirklich nur wichtig so wenige technische Mittel und Kabel wie möglich zu benutzen, um Steckdosenunabhängig zu bleiben. D.h. auch den Raspberry Pi im Idealfall über eine Powerbank,Lipo-Akku oder andere Energiequelle mit Strom zu versorgen.  
                      
                    So soll wirklich nur ein einziges Device (sprich das Tablet als Fotoboxbildschirm) mit dem Pi über Wlan verbunden sein. Funktioniert dieses Prinzip mit deinem oben genannten Tutorial?  
                      
                    Vielen Dank für deine Antwort! Chriss
                    
                    16\. Dec 2017 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
    
    [Tobias H](tobiashaas.info)
    
    Hey Andre,  
    erstmal vielen lieben Dank dass du deinen PhotoBooth Code hier mit uns teilst! ;-)  
    Jetzt brauche ich aber leider deine hilfe... Ich hab schon alles abgesucht im Internet und alles probiert was hier alle so geschrieben haben...  
      
    Ich habe einen RPi 3 der mit Raspbian Stretch läuft. - Release date:2017-11-29  
    Webserver ist installiert, die Seite ist erreichbar.  
      
    Klicke ich auf "Foto erstellen" erhalte ich die Fehlermeldung  
    \- "Es ist ein Fehler aufgetreten ...".  
    \- Kamera löst nicht aus!!  
    \- Es wird kein Bild gespeichert, auch nicht in der Galerie  
      
    Benutzt wird eine Canon EOS 600D welche über gphoto2 im Terminal angesprochen werden kann, allerdings habe ich mit großer Sicherheit ein Rechte Problem, welches ich nicht in den Griff bekomme...  
      
    sudo visudo -> www-data ALL=(ALL) NOPASSWD: ALL - eingetragen  
    sudo chown -R pi: /var/www/ - gesetzt  
    sudo chmod -R 777 /var/www/ - gesetzt.  
      
    Ich denke dass sich wahrscheinlich irgendwas geändert haben muss bei dem aktuellen Raspbian "Stretch". Ich hatte deine PhotoBooth schon mal kurz getestet gehabt. und da lief sie einwandfrei ...  
      
    Oder liegt es am PHP7 ? PHP5 gibts wohl nicht mehr ...  
      
    Ich hoffe dass du mir helfen kannst :-)  
      
    Mit freundlichen Grüßen  
    Tobias H  
      
    
    08\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
        
        [Tobias H](tobiashaas.info)
        
        kleines Update!  
        Hab mir nun Raspbian "Jessie" geladen und auf meine RapsberryPi installiert und nun läuft es auf anhieb.  
        Sollte also am neuen "Stretch" liegen der Fehler. Dort hat sich wohl irgendetwas geändert ;-)  
          
        Liebe Grüße  
        Tobias H
        
        11\. Dec 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
        
        [Tobias H](tobiashaas.info)
        
        Hab mal die README.md angepasst  
        hier für alle meine Änderung, ich hoffe ich kann einigen damit helfen ;-)  
          
        Interessant wäre natürlich noch zu wissen wie es dann bei "Stretch" funktioniert  
          
        Installation  
        On Raspbian "Jessie":  
          
        sudo apt-get update  
        sudo apt-get install git apache2 php5 php5-gd gphoto2 libav-tools  
        cd /var/www/  
        sudo rm -r html/  
        sudo git clone https://github.com/andreknieriem/photobooth  
        sudo mv photobooth html  
        sudo chown -R pi: /var/www/  
        sudo chmod -R 777 /var/www/  
        Give sudo rights to the webserver user (www-data)  
          
        sudo visudo  
        and add the following line to the file  
          
        www-data ALL=(ALL) NOPASSWD: ALL  
          
        Configure config.inc.php:  
        sudo nano /var/www/html/config.inc.php  
        set following line to from  
          
        $config\['dev'\] = true;  
        to  
        $config\['dev'\] = false;
        
        11\. Dec 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo Tobias,  
            danke für deine Anleitung :)
            
            12\. Dec 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/adbd01529968d732a0e14e93bca91b77?s=75&d=mm&r=g)
                
                [Tobias](https://tobiashaas.info/)
                
                Wäre cool wenn du diese noch auf Github freigeben würdest ;-)  
                Hab dort einen Pull erstellt oder wie das heißt.  
                  
                schönes Wochenende
                
                15\. Dec 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/84a17c4b4ca1b973f2e8bc0a43bb5f7d?s=75&d=mm&r=g)
    
    [Gabriela Wejat-Zaretzke](www.weh-zet.de)
    
    So Box gebaut, Technik läuft bis auf ein paar Probleme.  
    1\. ich bekomme die Galerie gesamte Session nicht angezeigt (Aufnahmen werden gemacht, die kurz hinter einander auch zusammen angezeigt, aber wenn ein moment Pause ist .. ist die Galerieanzeige leer)  
    2\. meine data.text ist immer total leer (Bilder sind aber im Verzeichnis var/www/html/images bzw thumbs)  
    3\. Dateinamenänderung in takePic.php $file=md5(time()).'.jpg'; ändern in $file='Hochzeit-'.count((int)$images) + 1.'jpg' -Angaben v. 25.6.2017-bringt keinen Erfolg. Habe div. Variationen versucht der . hinter + 1 müßte wahrscheinlich direkt vor das jpg gesetzt werden, sonst erscheint es nicht als Dateiformat. Bei meinen Versuchen wurde das erste Bild korrekt bezeichnet, weitere Bilder wurden aufgenommen aber es erschien in meinen Bilderverzeichnissen kein Bild Nr 2.  
    Hat jemand da ein paar Tipps für mich wie ich dies lösen könnte?  
    Vorab schon mal Danke  
    Gabi
    
    06\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/ba35c420e5ff3cde73dc6f41cbe969aa?s=75&d=mm&r=g)
        
        [Gabriela Wejat-Zaretzke](www.weh-zet.de)
        
        So hier mal meine ersten "Einsätze" mit der Box .. zwar läuft noch nicht alles so wie ich es mir vorstelle - hab da noch ein paar Problemchen aber wer schauen will ... https://wehzet.wordpress.com/2017/12/22/ich-bau-mir-eine-fotobox/  
          
        Gruß Gabi
        
        01\. Jan 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8d5ef6b42bf67868fccaaeab231982db?s=75&d=mm&r=g)
    
    Aaron
    
    Hallo,  
      
    bin wirklich eher Laie, als alles andere und nutze z.Zt. eine Canon 550D in meinem Setup.  
      
    Ich habe folgendes Problem:  
    sobald ich in der Photobooth auf "Foto erstellen" klicke, zählt der Countdown runter und danach kommt eine Fehlermeldung "Es ist ein Fehler aufgetreten \[...\]"  
    Es ist mir noch nicht gelungen, ein Foto aufzunehmen. Woran kann es liegen?  
      
    Vielen Dank im Voraus
    
    04\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/8d5ef6b42bf67868fccaaeab231982db?s=75&d=mm&r=g)
        
        Aaron
        
        SO, ich nochmal.  
          
        Ich denke jetzt aus den restlichen Kommentaren und aus Infos aus dem Web rauslesen zu können, dass mein Problem, dass die Kamera nicht auslöst, wohl oder übel ein "rechteproblem" ist. Leider weis ich nicht, wie ich Rechte genau vergebe und vor allem, welchem Ordner ich die Rechte zuteilen muss. Anscheinend haben das hier schon eine ganze Menge von euch hinbekommen. Wäre super, wenn mir einer das Step-for-Step erklären könnte.  
          
        Vielen Dank schonmal  
        Aaron
        
        09\. Dec 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
    
    joker\_75
    
    ich habe deine weiter oben erwähnte variante mit den symlink versucht um die bilder von der speicherkarte auf die per usb angebundene ssd zu bekommen.  
      
    wenn ich nun auslöse klappt das auch wunderbar, nur bleibt die web oberfläche bei "bild wird verarbeitet" hängen.  
      
    also dachte ich das evtl. die anderen ordner (thumbs, print und qrcodes) auch symlinks brauchen und habe diese erstellt.  
      
    leider ohne erfolg.  
      
    wenn ich die web oberfläche mit f5 aktualisiere gelange ich wieder zum startbildschirm und kann ein neues bild auslösen.  
      
    die bilder landen alle im richtigen ordner.  
      
    die gallerie findet leider kein einziges.  
    alle bilder werden in der gallerie als leere rahmen dargestellt und beim anklicken nicht geladen.  
      
    muss ich die pfade noch an anderer stelle anpassen?  
      
    ich habe das gefühl das schreiben der daten geht mit symlinks und beim lesen/wiederfinden hängt es dann
    
    30\. Nov 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
    
    joker\_75
    
    ich habe heute mit einem bekannten eine sehr ausgiebige testsession gemacht, dabei sind uns ein paar dinge aufgefallen.  
      
    wenn ich ein bild aus dem hauptbildschirm auslöse und dann im angezeigten bild den qr anfordere wird dieser unten links ausserhalb des bildschirmes angezeigt. lediglich die obere rechte kante ist sichtbar.  
      
    gehe ich von hier in die galerie, lasse dort das selbe bild anzeigen und fordere dann den qr wird er korrekt dargestellt.  
      
    wen ich ihn nun scanne bekomme ich eine adresse die so aussieht: http://123.456.7.8/download.php?image=20171128\_212137.jpg?new=1  
      
    starte ich jetzt den download ist dieser extrem schnell beendet, die datei hat 0kb und wird schwarz angezeigt.  
      
    getestet haben wir mit einem android und einem iphone und insgesamt 5 qr-scannern.  
      
    wenn man egal von wo die galerie öffnet, einmal f5 drückt um zu aktualisieren, dann den qr fordert und scannt bekommt man diese url: http://123.456.7.8/download.php?image=20171128\_212137.jpg  
      
    hier funktioniert der download dann auch.  
      
    kann man hier die aktualisierung der url daten vor das generieren des qr programmieren?  
      
      
      
    und dann noch was anderes, vermutlich einfaches.  
      
    ich versuche mich in die ganze programmstruktur so gut wie möglich rein zu finden aber manchmal bin ich wohl hinten dran.  
      
    ich würde gern in der startseite die zugangsdaten für das w-lan schreiben.  
    das der text erscheint habe ich hinbekommen in dem ich variablen in der de.js zugefügt habe, die ich dann in der index.html wieder aufrufe.  
      
    leider wird hier groß und klein schreibung missachtet und ausschließlich groß geschrieben.  
      
    wo bzw. wie kann ich die parameter für die schrift setzen ?
    
    28\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo. Da gibt es wohl ein paar kleine Fehler, die ich behebe, wenn ich das nächste Mal Zeit finde. Das Projekt ist ja auch schon fast 3 Jahre alt und die neusten Dinge habe andere meistens gebaut.  
          
        Die Großschreibung kommt vom CSS. Dem Stylesheet. Dort gibt es .inner mit text-transform: uppercase. Das kannste entfernen. Dann wird so geschrieben, wie du es eintippst.
        
        01\. Dec 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
            
            joker\_75
            
            wenn du die style.css in /var/www/html/resources/css meinst,  
            dort habe ich einen block .inner gefunden und die zeile text-transform: uppercase gelöscht.  
              
            leider ist nach f5, apache restart und reboot immer noch alles groß
            
            02\. Dec 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
                
                joker\_75
                
                ich war ein paar stunden ausser haus und was soll ich sagen?  
                  
                auf einmal geht es!  
                  
                der raspi hat die ganze zeit durchgelaufen und nach dem gerade gemachten foto schreibt er groß und klein
                
                02\. Dec 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
    
    Christoph
    
    Bilder werden zwar aufgenommen und in dem Ordner abgespeichert, die Thumbs werden aber nicht generiert und dann kommt die Fehlermeldung auf der Weboberfläche, dass was schiefgelaufen ist.  
    Wie gesagt, die Bilder werden aber aufgenommen und richtig abgespeichert. Iwas dürfte also mit der Thumbs Erzeugung nicht funktionieren.  
    Hat jemand eine Idee??
    
    26\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hast du php-gd installiert? Das ist der Grafiktreiber für PHP damit man Bilder bearbeiten kann.  
        sudo apt-get install php5-gd  
          
        Grüße André
        
        26\. Nov 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
            
            Christoph
            
            Naja wenn ich das eingebe, kommt immer diese Meldung:  
            pi@raspberrypi:~ $ sudo apt-get install php5-gd  
            Reading package lists... Done  
            Building dependency tree  
            Reading state information... Done  
            Package php5-gd is not available, but is referred to by another package.  
            This may mean that the package is missing, has been obsoleted, or  
            is only available from another source  
              
            E: Package 'php5-gd' has no installation candidate
            
            27\. Nov 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo, das bedeutet, dass du evtl schon PHP7 hast.  
                Probiere mal:  
                sudo apt-get install php7-gd oder sudo apt-get install php-gd
                
                27\. Nov 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
                    
                    Christoph
                    
                    Wow, "sudo apt-get install php-gd" hat alles gelöst  
                    Echt peinlich, dass ich da nicht selbst drauf gekommen bin ;-P  
                    Vielen, vielen Dank :-)  
                      
                    
                    27\. Nov 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                        
                        Andre Rinas
                        
                        Hallo Christoph, wie in der Anleitung oben steht brauchst du php-gd. Das ist der GraphicDriver. Je nachdem welche PHP Version du hast musst du diese installieren. apt-get install php-gd, oder php7-gd oder php5-gd.
                        
                        01\. Dec 2017 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/99c2a6c33c40a0eb02dd310731241c5b?s=75&d=mm&r=g)
    
    Benjamin
    
    Hallo Andre,  
    hallo zusammen,  
      
    das ist echt ein super Projekt und Respekt! Vielen Dank, dass du dein Projekt der Community bereitgestellt hast!  
      
    Ich habe dein Projekt verwendet und habe nun ein "kleines Problem":  
    Ich habe den www-data Benutzer als sudo berechtigt, jedoch kommt es beim Auslösen eines Bildes via Website zu einem Fehler. Wenn ich die Auslösung via Terminal veranlasse funktioniert es aber einwandfrei!  
    Könnt ihr mir vielleicht weiterhelfen? Hab ich vielleicht vergessen, standard-Parameter oder ähnliches zum Start des Projektes zu setzen?  
      
    Besten Dank für eure Hilfe und Grüße,  
    Benjamin
    
    24\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Benjamin,  
        Zeile 5 in config.inc.php, da muss der dev parameter auf "false" gesetzt sein.  
        $config\['use\_print'\] = false;  
        Evtl das?
        
        26\. Nov 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/99c2a6c33c40a0eb02dd310731241c5b?s=75&d=mm&r=g)
            
            Benjamin
            
            Hallo Andre,  
            das war genau das - sorry für die dumme Frage.  
            Jetzt bin ich auf ein weiteres Problem gestoßen:  
            Apache-Log:  
            Uncaught Error: Call to undefined function imagecreatefromjpeg() in /var/www/html/takePic.php:42  
            Kann es sein, dass ich in dem takePic.php noch eine Lib oder ähnliches einbinden muss oder das ich vergessen habe iwas downzuloaden?  
              
            Vielen Dank für deine Hilfe!  
              
            VG Benjamin
            
            29\. Nov 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
    
    joker\_75
    
    da bin ich mal wieder....  
      
    ..... mit neuen problemen  
      
    leider habe ich mir vor ein paar tagen meinen photobooth durch die installation von pi-control zerschossen (hat mir die startseite überschrieben)  
      
    also dachte ich mach ich halt alles neu um die neuen features einzubinden und zu testen.  
      
    also frisches raspian und alles aus der anleitung installiert und die rechte vergeben.  
      
    bis hier her alles gut aber wenn ich ein bild machen will kommt der countdown dann cheese und er macht ein bild vom bildschirmhintergrund (bunter farbverlauf) statt die kamera auszulösen.  
      
    gebe ich den gphoto befehl auf der konsole ein wird die kamera ausgelöst und die bilder werden ordnungsgemäss gemacht  
      
    was läuft hier falsch?
    
    24\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/df62e7b24785ab59ae651f290fee3adc?s=75&d=mm&r=g)
        
        Schoker
        
        Zeile 5 in config.inc.php, da muss der dev parameter auf "false" gesetzt sein.  
        $config\['use\_print'\] = false;
        
        26\. Nov 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
            
            joker\_75
            
            macht bei mir leider keinen unterschied  
              
            ich bekomme immer nur den hintergrund der startseite ohne texte und schaltflächen  
              
            apache habe ich nach der änderung zur vorsicht neu gestartet  
              
            muss ich sonst noch was ändern/neustarten?  
              
            gehe ich recht in der annahme das der befehl use print den sofortigen ausdruck bewirken soll?  
              
            leider sind meine programmierskills nahe null
            
            26\. Nov 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
            
            joker\_75
            
            zeile 5 ist $config\['dev'\]  
            den auf false und es geht  
            $config\['use\_print'\] = false ist zeile 6 die zu ändern bringt nix
            
            27\. Nov 2017 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
        
        joker\_75
        
        alles zurück  
          
        hatte mich in der zeile vertan  
        jetzt dev=false und sie löst wieder aus  
          
        was ist den eigentlich dieser dev  
        was tut der?  
          
        vielen dank bis hier
        
        26\. Nov 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            dev ist die Abkürzung für Development und bedeutet im Test/Demo-Modus. Grüße André
            
            26\. Nov 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/1c103bce76cfd217c65c0a43b4d994db?s=75&d=mm&r=g)
    
    Andi
    
    Habe folgendes Problem:  
      
    Countdown läuft runter aber Kamera löst nicht aus.  
    Mit gphoto2 --capture-image kann ich Fotos machen.  
      
    www-data ALL=(ALL) NOPASSWD: ALL  
    steht bereits in etc/sudoers  
      
    Woran kann es noch liegen?
    
    17\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/99c2a6c33c40a0eb02dd310731241c5b?s=75&d=mm&r=g)
        
        Benjamin
        
        Hallo zusammen,  
        das gleiche Problem habe ich leider auch. Kann mir jemand dabei helfen?  
        Besten Dank und Grüße,  
        Benjamin
        
        24\. Nov 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/df62e7b24785ab59ae651f290fee3adc?s=75&d=mm&r=g)
        
        Schoker
        
        Hast du in der config.inc.php in Zeile 5 den "dev" parameter auf "false" gesetzt?  
        Sonst werden immer nur bilder vom hintergrundbild erstellt.
        
        26\. Nov 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
    
    Frank G.
    
    Hallo Andre,  
    lange nicht hier gewesen... Ich habe gesehen, dass Du nun auch einen Druck-Button eingebaut hast. Frage: Befindet sich dahinter auch schon Code? Drucker muss wohl mit USB am Pi verbunden werden? Und wie sieht es aus mit sonstigen Druckeinstellungen?  
    Gruß Frank
    
    13\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Frank, das Druck-Feature hat ein anderer User auf Github bereitgestellt. Ja man muss den Drucker wohl mit USB verbinden und es ist schon Code dahinter. Das Ganze geht auf Windows oder Linux. Kannst du ja gerne einmal ausprobieren und Erfahrungen hier schreiben. Ich habe leider keinen Drucker für den Pi. Grüße André
        
        13\. Nov 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/00b9e68db24f3dce8c8214ddd89dae5a?s=75&d=mm&r=g)
            
            Frank G.
            
            Hallo André,  
            ich kann bestätigen, dass es mit dem Drucker unter Raspbian grundsätzlich fuktioniert. Mann muss CUPS installieren (google: Print-Server mit CUPS und AirPrint auf dem Raspberry Pi einrichten), den Drucker, den man hat, über die Weboberfläche einrichten und als Standarddrucker festlegen (Voraussetzung: passender Linux-Treiber). In der config.inc.php im lp-Befehl wie folgt ändern: 'sudo lp -d HP\_ENVY -o landscape -o fit-to-page %s'; PRINTER ist der Name des Printers wie in CUPS angezeigt. Da ich die Webseit unter Windows mit XAMPP nicht zum Laufen bekommen habe, habe ich Raspbian OS in VMware las virtuelles Betriebssystem unter Windows installiert. Klappt super. Wie Nils schreibt, müüsen aber ein paar Automount-Funktionen entfernt werden.  
            Theoretisch kann über diese Lösung auch Live-Preview über die interne Tablet-Camera (z.B. auf einem separten Bildschirm über VLC) genutzt werden.  
            Schöne Grüße  
            Frank
            
            17\. Nov 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/84a17c4b4ca1b973f2e8bc0a43bb5f7d?s=75&d=mm&r=g)
    
    Gabriela Wejat-Zaretzke
    
    Hallo Andre,  
    habe mich teilweise mit etwas Hilfe durch deine Anleitung gewurschtelt und bin jetzt dabei die Box drumrum zu bauen. Was ich aber noch nicht ganz fertig habe ist a) die Dateiumbenennung da hadere ich noch ein bissel mit der Anleitung und b) der Livestream. Hab schon Motion und Motioneye installiert und bin da son bissel am testen um es einzurichten. Hat da jemand eine konkrete Anleitung/oder eine Youtube empfehlung?  
    Gruß und danke im Voraus  
    Gabi
    
    13\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Gabi, die Dateiumbenennung ist schon in der Pipeline und fast fertig. Wenn du noch nen paar Tage wartest, kannste dir die neue Version herunterladen. Das mit Live-Stream hat glaube ich bisher noch niemand so richtig eingebaut.  
        Grüße André
        
        13\. Nov 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/3376be84d93effdd2bf839a39be844e4?s=75&d=mm&r=g)
            
            Gabriela Wejat-Zaretzke
            
            Hallo Andre  
            mit dem Live-Stream schau mal bitte am 21.9.2017 da hatte Marvin nach dem LiveStream gefragt und horuke am 16.10.2017 seine Lösung genannt . Vielleicht könnte mir/uns da horuke weiterhelfen?!
            
            19\. Nov 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/1f7414897ed863464ea9da8a59e6b565?s=75&d=mm&r=g)
    
    Maxi
    
    Hallo,  
    bisher habe ich eine Fotobox mit einer App auf dem iPad, jedoch finde ich deine Lösung mit eigenem WLan komfortabler. Leider bekomme ich es jedoch mit meinem Ubuntu nicht zum laufen. Wenn ich localhost aufrufe bekomme ich nur einen weißen Bildschirm. Woran liegt das? Ich bin ein Neuling mit Ubuntu. Die Berechtigungen habe ich eigentlich alle angepasst. Vielen Dank für Hilfe
    
    08\. Nov 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Maxi, hast du einen Webserver(Apache) auf deinem Ubuntu installiert? Der Fehler hört sich genau danach an.  
        Grüße André
        
        13\. Nov 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8083f34b06a68476f18c68a21cfd607b?s=75&d=mm&r=g)
    
    Vassili
    
    Hallo Andre,  
    ich bin weiter... Wen ich das Button Foto erstellen drücke kommt "es ist ein Fehler aufgetreten, bitte versuche es erneut. Hat es was mit den www-Data rechte zu tun? Grüße
    
    31\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Vassili, das kann sein, wird ein Foto gemacht? Also geht die Kamera an? Wenn nicht, dass ist das Problem auf jeden Fall ein Rechteproblem.
        
        13\. Nov 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8083f34b06a68476f18c68a21cfd607b?s=75&d=mm&r=g)
    
    Vassili
    
    Hallo Andre und alle,  
      
    ich mal wieder. Ich kriege das nicht zu Laufen. wie gesagt habe ich ein Raspberry3, Samsung Tab3 und eine Nikon D3400. Ich habe alles auf mein Raspberry installiert (denke ich zumindest). Eine Wlan Verbindung zum Tablet habe ich, Raspberry erkennt meine Nikon. Wie bearbeite ich die Ordner was Du im Github hinterlegt hast? Wie starte ich das Programm?Wie kann ich aus meinem Tablett ein Foto auslösen bzw. geht es auch mit einem Fernauslöser IR? Ist mein erstes Projekt. Wohnst Du zufällig im Raum Stuttgart?  
    Im Voraus vielen Dank
    
    30\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ba9f17c2f11612a9164394ba053d4a00?s=75&d=mm&r=g)
    
    Dennis G.
    
    Hi Andre!  
      
    Vielen Dank für das Projekt! Ich verwende es gerade um meine Raspi Anfänger-Kenntnisse zu erweitern.  
      
    Vorab: Ich hab alle Kommentare gelesen und bereits diverse Lösungswege versucht. Leider ohne Erfolg.  
      
    Folgendes Problem:  
      
    Ich möchte den Speicherort der Bilder verändern und habe das ganze über einen Symbolic Link realisiert. Dieser Link "imagesLINK" referenziert auf /media/usbstick/images. Dort habe ich www-data:www-data als Owner mit vollen Rechten hinterlegt. Wenn ich ein Bild schieße, dann wird im Hintergrund das Bild korrekt gespeichert und auch ein Eintrag in der data.txt angelegt. Die Website bleibt jedoch bei "Bild wird verarbeitet" hängen. Nach einen Neuladen der Website kann ich das Bild in der Galerie sehen.  
      
    Ich schätze, dass die Übergabe der BildURL von takePic.php in zur index.html nicht funktioniert und somit die Result Page nicht geladen werden kann. Leider reichen dafür meine PHP-Skills nicht aus um den Fehler zu finden. Hast du einen Tipp? QR Codes lassen sich leider seit Änderung des Speicherorts auch nicht vornehmen.  
      
    Viele Grüße & vielen Dank,  
    Dennis
    
    30\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/ba9f17c2f11612a9164394ba053d4a00?s=75&d=mm&r=g)
        
        Dennis
        
        Hi, hat tatsächlich noch niemand versucht den Speicherort zu ändern? Wäre klasse wenn jemand kurz seine Erfahrungen schildern könnte! Vg, Dennis
        
        16\. Nov 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ba9dd9742762297625511b4df4ad407b?s=75&d=mm&r=g)
    
    Sven O.
    
    Hallo Andre,  
      
    Ich habe keine Änderungen vorgenommen und bei dem Link den du in deiner Antwort angehängt hast dehe ich den Scalierungsbutton auch hinter dem „x“.  
      
    Gruß Sven
    
    27\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5cb63280ce76284f83f8e0e44f3ba90a?s=75&d=mm&r=g)
    
    Jens Matthies
    
    Hallo @ll,  
      
    ich hab jetzt noch eine Frage und ich hoffe ihr erschlagt mich nicht gleich.  
    Kann ich eigentlich das ganze Projekt auch ohne Raspberry zum laufen bringen?  
    Also ich installiere Xampp auf dem Windows Tablet und kopiere den kompletten Inhalt in \\xampp\\php\\ rein.  
    Hab das mal probiert, aber leider wird dann die Web-Seite nicht korrekt angezeigt. Ist das eine Einstellungssache?  
      
    LG Jens
    
    25\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jens, das geht auf jeden Fall. Du musst dann nur digiCamControl anstelle von gphoto verwenden. Das müssteste runterladen.  
          
        Grüße Andre
        
        26\. Oct 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8083f34b06a68476f18c68a21cfd607b?s=75&d=mm&r=g)
    
    Vassili
    
    Hallo Andre,  
    vergiss meine vorherige Mail, Hab runter gescrollt und gemerkt da geht es weiter und ich muss alles noch lesen. Vielen Dank. hoffe es klappt beim 2 mal.  
      
    
    24\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Super, sonst melde dich gerne noch einmal.
        
        27\. Oct 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8083f34b06a68476f18c68a21cfd607b?s=75&d=mm&r=g)
    
    Vassili
    
    Hallo Andre,  
    kann ich mit Deiner Anleitung noch eine Fotobox nachbauen? Ich habe ein Raspberry Pi 3, Nikon D3400 ohne Wlan und ein Samsung Tablett. Ich würde gerne eine einfache Fotobox bauen. Camera mit USB an Raspberry angeschlossen und das Bild soll über Wlan aufs Tablett. Bild wird durch fernauslöser geschossen. Benötige ich für das Tablett eine App? Bei der installation von Apache2 hatte ich eine ip-Adresse seit dem Versuch diese zu konfigurieren, findet "hostname -I" kein ip Adresse  
    Falls Du etwas Zeit für mich hast würde ich mir sehr freuen. Viele Grüße Vassili
    
    24\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/71c9899b58e80a1e9ffa7dc72e0505d5?s=75&d=mm&r=g)
    
    Sven O.
    
    @ Jens:  
      
    Das selbe Problem hatte ich auch nachdem ich in der Raspi Config angegeben hatte das der RPI sich nicht automatisch als user pi einloggen soll. Nachdem ich den Autologin wieder aktiviert hatte bekam ich auch die Bilder nach dem Schuss wieder angezeigt.  
    Gruß Sven
    
    23\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/1dad3a411249385e5a0806b5d926b53a?s=75&d=mm&r=g)
    
    Denis
    
    Hallo Andre, erstmal vielen Dank für die tolle Anleitung diese funktioniert soweit. Das wurde dir ja schon recht häufig bestätigt. Da auch ich vom boothfieber erfasst bin und meine 350d bisher kamerabedingt nur über "GPIO" auslösen konnte, würde mich interessieren, ob ich irgendwo in deinen Scripten die Ansteuerung per "GPIO" realisieren kann. Bei gphoto2 gibt es da einen eigenen Befehl. Ich müsste wissen, wo ich diesen einbauen müsste. Es müsste also bei der Abfrage des "Bild machen" Buttons Capture Image and Download initialisiert werden. Der Rest des Programms könnte ja theoretisch so weiterlaufen. Ich hoffe, du kannst mein Problem verstehen und kannst mir eine Lösung anbieten. Ich würde mich echt freuen und hätte eine weitere Option für den Bau eine PB.  
    Danke im voraus für die Mühe  
    Denis Schröder
    
    22\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Denis,  
        in der config.inc.php gibt es $config\['take\_picture'\]\['cmd'\]. Dort steht der Befehl, der derzeit ausgeführt wird um gphoto2 zu starten. Diesen kannst du anpassen, wie du möchtest und erweitern. Dort kannst du dann evtl. auch deine Einstellung unterbringen :)
        
        24\. Oct 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/71c9899b58e80a1e9ffa7dc72e0505d5?s=75&d=mm&r=g)
    
    Sven O.
    
    Hallo Andre,  
    hattest du meine 1. Frage vom 14. Oct gesehen oder ist die durch meine Nachrichtenflut untergegangen. Es ging um den Scalierungsbutton der hinter dem X angezeigt wird wenn man ein Bild aus der Galerie öffnet.  
      
    Und noch was, gibt es eine Möglichkeit das Bilder im 4:3 Format beim anzeigen in der Galerie nicht in der Höhe gestaucht werden ?  
      
    Danke und LG Sven O.
    
    22\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sven,  
        der Scalierungsbutton ist disabled und somit eigentlich nicht sichtbar. Siehe Demo (http://photobooth.andrerinas.de/#&gid=1&pid=2). Evtl. hast du da was am Markup oder CSS geändert?  
          
        Die Bilder im 4:3 Format müssten eigentlich so gehen. Evtl mal #gallery .images img ein height: auto hinzufügen.  
          
        Grüße André
        
        24\. Oct 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/af1262bf9abf9bb3c771cba426287789?s=75&d=mm&r=g)
    
    Julian
    
    So ich bin es noch mal.;)  
      
    Schon mal vielen Dank für die Hilfe Andre.  
      
    Da ich kein kompletter Anfänger bin, stehe ich grade am Ende :(.  
    Die Anleitung ist super gut und funktioniert soweit auch.  
      
    Bilder werden gemacht, und werden angezeigt.  
    QR Code wird generiert, aber beim scannen leider nicht angezeigt.  
    Bilder können per FileZilla runter geladen werden.  
    Aber wie und wo lösche ich sie ?  
      
    Ein Access Point mit dem Pi3 einrichten bekomme ich nicht hin. Habe bestimmt 4 verschiedene Wege versucht aber es klappt nicht.  
    Gibt es hier ein Unterschied zu Jessie und Stretch ?  
      
    Ich hoffe mir kann einer helfen :)  
      
    Beste Grüße  
    Julian  
      
    
    20\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5cb63280ce76284f83f8e0e44f3ba90a?s=75&d=mm&r=g)
    
    Jens Matthies
    
    Hallo @ll,  
    ich hänge immer noch an der gleichen Stelle fest.  
    Bei mir macht die Canon EOS 1000D nach 5 Sekunden ein Bild, dann kommt die Meldung Bild wird verarbeitet, aber nach 3 Sekunden heißt es "Es ist ein Fehler aufgetreten, bitte versuchen sie es erneut.  
    Ist das auch wieder ein Problem der Rechte??  
    Hab gesehen das die Bilder im Ordner abgelegt werden.  
    Was kann ich tun??  
    Lieben Gruß  
    Jens
    
    19\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jens, das hört sich nach einem Problem mit dem Erstellen der Bild-Vorschauen (Thumbnails) an. Hast du gdlib installiert? Wenn das Bild gemacht wird und auch im Ordner landet, Dann ist dies das Einzige was sonst noch gemacht wird, bevor das Bild zurückgegeben wird. Kannst du das mal überprüfen? sudo apt-get install php7.0-gd oder sudo apt-get install php-gd oder so falls du nicht PHP7.0 hast.  
          
        Grüße
        
        20\. Oct 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/af1262bf9abf9bb3c771cba426287789?s=75&d=mm&r=g)
    
    Julian
    
    Habe da noch eine kleine Frage :) konnte leider noch nichts dazu finden  
      
    Wenn ich die Bilder auf eine externe Festplatte speichern will, was und wo muss ich dann einstellen und ändern ?  
      
    Schon mal vielen Dank  
    Und dicken Respekt für diese geniale Anleitung  
      
    
    17\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Julian, je nachdem wie der Pfad zu deiner Festplatte ist, musst du in der config.php Datei den Befehl anpassen.  
        $config\['folders'\]\['images'\] = 'images';  
        $config\['folders'\]\['thumbs'\] = 'thumbs';  
          
        Wenn du hier nun /mnt/images machst könnte es schon funktionieren. Am besten wäre es allerdings einen Symlink zu setzen, da der Webserver sonst evtl wieder nicht außerhalb seines Verzeihnisses speichern darf. https://www.cyberciti.biz/faq/unix-creating-symbolic-link-ln-command/  
          
        Geht dann so: ln -s /externeplatte/images images. Dann ist der images Ordner nur ein Link und die Datei landet auf der Platte.  
          
        Grüße Andre
        
        18\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/af8de3f976bb080c75e72bfe32d2477e?s=75&d=mm&r=g)
            
            matthias
            
            Hallo Andre,  
            vielen Dank für deine gute Beschreibung! Ich hab das alles einigermaßen hin bekommen nur das speichern auf einer externen Festplatte funktioniert nicht. Bei der 1. von die beschriebenen Möglichkeit speichert er zwar das Bild richtig aber hängt sich dann auf. Bei der 2. Möglichkeit verstehe ich nicht was ich machen muss. Wie heißt die Zeile  
            $config\['folders'\]\['images'\] = 'images';  
            in der config.php dann? So schätzungsweise nicht oder?  
            $config\['folders'\]\['images'\] = 'ln -s /externeplatte/images';  
            Vielen Dank!!!  
            Gruß Matthias
            
            27\. Feb 2018 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Matthias,  
                ein Symlink ist eine Verknüpfung. Das bedeutet, dass $config\['folders'\]\['images'\] = 'images'; einfach genauso bleibt. Der Ordner allerdings muss dann gelöscht werden und durch die Verknüpfung ersetzt werden. Also lösche den images ordner und mache dann auf deiner shell den ln -s /externeplatte/images images. Grüße
                
                28\. Feb 2018 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/bc042115f718b20fda97884c0d265162?s=75&d=mm&r=g)
                    
                    Matthias
                    
                    Hi Andre,  
                    vielen Dank für die schnelle gute Antwort da bin ich mal sauber auf dem Schlauch gestanden! Jetzt funktioniert alles :-)  
                    Gruß matthias
                    
                    28\. Feb 2018 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/5e9183a9d635bba9f1e8d66d56f6548f?s=75&d=mm&r=g)
    
    Kevin
    
    Hallo Andre,  
      
    erstmal vielen dank für dieses tolle Programm. Damit, macht man jede Party zu einem besonderen Moment :)  
    Nur leider haben wir ein Problem mit dem QR-Code, nachdem das Foto erstellt wurde. Es wird viel zu groß angezeigt und ist nicht mehr voll im Bild zu sehen (unten links in der Ecke). Ich habe schon im Code nachgeschaut aber irgendwie keine Möglichkeit gefunden den QR-Code zu verkleinern. Da ich diese Funktion richtig super finde und diese gerne für die nächste Party nutzen möchte, wäre ich wirklich froh darüber, wenn du mir bei diesem Problem weiterhelfen könntest.  
    Hier der Link zu dem Screenshot: http://share-your-photo.com/5989bcce5e  
    Liebe Grüße und nochmal vielen Dank!  
    Kevin
    
    17\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Kevin, da hat sich ein Fehler im Code/der Animation eingeschlichen, den ich erst noch beheben muss. Dieser ist wohl passiert, als ich die Buttons auf der Result-Seite etwas anders angeordnet habe und den Druck-Button dazu genommen habe. Ich werde den Fehler schnellstmöglich beheben.
        
        18\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d0451806c821723861c08b4ca4e7d02e?s=75&d=mm&r=g)
            
            Jan
            
            Hallo Andre,  
              
            erstmal vielen Dank für deine Arbeit.  
            Ich bin aktuell auch dabei ein paar kleinere Änderungen an der Software vorzunehmen und das klappt soweit auch alles. Das einzige Problem was ich bisher nicht lösen konnte war die Anzeige des QR-Codes nach dem Aufnehmen eines neuen Bildes. Also genau der gleiche Bug wie bei Kevin. Gibt es dazu schon was neues?
            
            19\. Dec 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/af1262bf9abf9bb3c771cba426287789?s=75&d=mm&r=g)
    
    Julian
    
    Hallo,  
      
    Gibts es auch eine detaillierte Anleitung, wenn man ein Pi3 hat, und trotzdem ein Tablet anschließen will ?  
    Wegen einrichten ohne Router  
      
    Vielen Dank
    
    17\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Julian, auf der raspberry Seite gibt es ne Anleitung hierzu:  
        https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md  
          
        Hoffe dass es dir weiterhilft ;)  
        Grüße André
        
        17\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/af1262bf9abf9bb3c771cba426287789?s=75&d=mm&r=g)
            
            Julian
            
            Ahh vielen Dank,  
              
            das habe ich klatt übersehen :)
            
            17\. Oct 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/71c9899b58e80a1e9ffa7dc72e0505d5?s=75&d=mm&r=g)
    
    Sven O.
    
    ... bitte streich die letzte Frage, ich habs überlesen ( data.txt ) leeren ;-).  
    Gruß Sven
    
    15\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Kein Problem, ich baue eh gerade an nem Admin-Bereich in dem man die Einstellungen und sowas wie das leeren der data.txt vornehmen kann.  
        Viel Spaß mit dem Photobooth!
        
        16\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
            
            Ediz Schon
            
            Hi Andre,  
            hast Du jetzt schon was mit dem Admin Bereich erreicht?  
            Wäre toll wenn dieses tolle Projekt noch weiter gebaut würde.  
            Liebe Grüsse  
            Ediz
            
            21\. Jul 2018 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/71c9899b58e80a1e9ffa7dc72e0505d5?s=75&d=mm&r=g)
    
    Sven O.
    
    Hallo Andre,  
    ich muss direkt noch eine Frage nachschieben. Ich hoffe ich habe es nicht überlesen, wie setze ich nach einem Event nach dem Löschen der Prints, Fotos,QR.Codes und Thumbs in der Galerie das Raster der Broken Thumbs zurück?  
    Danke.  
    Gruß Sven
    
    14\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/71c9899b58e80a1e9ffa7dc72e0505d5?s=75&d=mm&r=g)
    
    Sven O.
    
    Hallo Andre,  
    Hut ab. Das ist ein super tolles Projekt und dank deiner umfangreichen Anleitung und den vorhergegangen Kommentaren hat alles prima geklappt. Ich habe allerdings auch eine Frage. Befinde ich mich in der Galerie und wähle ein Bild aus so wird dieses im Vollbild dargestellt. In diesem Zustand werden oben rechts Aktionsbuttons ( QR-Code/Druck/Schliessen ) angezeigt. Hinder dem' X' zum Schließen befindet sich allerdings noch ein Symbol welches ausschaut als wäre es zur Umschaltung der Skalierung ( Viereck mit offenen Seiten). Ist das ein Bug oder sollte das mit einer Funktion hinterlegt sein?  
    Wenn ja wie schiebe ich die Buttons auf damit es nicht hinter den 'X' verschwindet.  
    Vielen Dank für deine tolle Arbeit.  
    Gruß Sven O.
    
    14\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/7a6f9e47b2b9e52c521418d54a79c343?s=75&d=mm&r=g)
    
    Daniel
    
    Hallo Andre,  
    ich hoffe du kannst mir helfen. Ich hatte schon Google befragt, aber noch keine Lösung gefunden.  
    Ich hatte die Photo Booth bereits fertig und es lief alles. Dann hatte ich apt-get update und ein paar Anpassungen an deiner Implementierung gemacht. Dabei hatte ich dann die Rechte ein wenig versaut. Das Problem sollte aber wieder behoben sein.  
    Nun habe ich aber noch ein Problem mit gphoto. Nehme ich ein Bild per Kommandozeile auf, bekomme ich folgende Fehlermeldung:  
    New file is in location /capt0000.jpg on the camera  
    File test exists. Overwrite? \[y|n\] y  
    Saving file as test  
    Deleting file /capt0000.jpg on the camera  
      
    \*\*\* Error \*\*\*  
    You need to specify a folder starting with /store\_xxxxxxxxx/  
    \*\*\* Error (-1: 'Unspecified error') \*\*\*  
      
    Hast du noch eine Idee, woran das liegen könnte? Oder hatte jemand anderes die gleichen Erfahrungen?
    
    10\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/7a6f9e47b2b9e52c521418d54a79c343?s=75&d=mm&r=g)
        
        Daniel
        
        Update:  
        Die Funktion der Photobooth habe ich mittlerweile hinbekommen. Das gefrickel mit den Rechten ist schon manchmal recht nervig. Die Seite wird ordentlich dargestellt, die Bilder werden aufgenommen, auf dem Pi gespeichert und in der Galerie angezeigt. Soweit also alles gut.  
          
        Den Fehler mit gphoto habe ich trotzdem noch - führe ich den sudo gphoto2 --capture-image-and-download --filename=test images über das Terminal aus, bekomme ich auch noch den Fehler. Meine Vermutung ist, dass gphoto nicht auf der SD der Kamera speichern kann. Ich hatte bereits geguckt, ob genug Platz ist. Die Kamera selbst kann auch auf der Karte speichern. Sollte ich Fortschritte machen, gebe ich ein weiteres Update.
        
        10\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/7a6f9e47b2b9e52c521418d54a79c343?s=75&d=mm&r=g)
            
            Daniel
            
            Update:  
            Jetzt funktioniert alles wie gewollt.  
            Hier mein Hardware-Setup, falls andere das gleiche Problem haben.:  
            \* Pi 1  
            \* Canon EOS 450D  
            \* Darstellung auf einem iPad  
              
            Ich vermute, dass es an dem Update von gphoto lag. Oder mir ist der Fehler vorher einfach nicht aufgefallen. Ich habe den debug-Mode bei gphoto aktiviert. Herauskam folgende Meldung.  
            29.364231 main (2): Uploading file...  
            29.365925 gp\_camera\_folder\_put\_file (2): Uploading file into '/'...  
            29.367158 lookup\_folder (2): Lookup folder '/'...  
            29.367336 lookup\_folder (2): Found! / is 0x2036318  
            29.367483 put\_file\_func (2): folder=/, filename=test  
            29.367687 gp\_context\_error (0): You need to specify a folder starting with /store\_xxxxxxxxx/  
              
            \*\*\* Error \*\*\*  
            You need to specify a folder starting with /store\_xxxxxxxxx/  
            29.369239 gp\_camera\_folder\_put\_file \[gphoto2-camera.c:1560\](0): 'gp\_filesystem\_put\_file (camera->fs, folder, filename, type, file, context)' failed: -1  
            \*\*\* Error (-1: 'Unspecified error') \*\*\*  
            Nichts neues also. Mit gphoto2 --list-files habe ich mir die Folder auf meiner Kamera anzeigen lassen. Resultat war:  
            There is no file in folder '/'.  
            There is no file in folder '/store\_00020001'.  
            There is no file in folder '/store\_00020001/DCIM'.  
            There are 43 files in folder '/store\_00020001/DCIM/100CANON'.  
            ...  
            Dann noch eben in der Doku von gphoto nachgelesen und gesehen, dass der Parameter --folder gesetzt werden kann. Gesagt, getan. Ich probierte erst --folder=/store\_00020001. Allerdings darf es kein spezieller Ordner sein. Die Angabe --folder=/store genügt dabei. Mit dem folgenden Befehl funktioniert alles:  
            sudo gphoto2 --capture-image-and-download --filename=test --folder=/store  
              
            Ende Geschichte ist: Wer lesen kann ist klar im Vorteil. Nichts anderes hatte mir die Fehlermeldung vorher versucht zu sagen. ;-)  
            @Andre: Könntest du den Parameter mit in die config.inc.php einfügen? Das wäre sicher nicht verkehrt.
            
            10\. Oct 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Daniel, tut mir leid, dass ich dir nicht geantwortet habe. Ich war im Urlaub und habe meine Webseite nicht überprüft. Also ich habe nicht ganz verstanden, was das Problem war? Du wolltest,dass er das Bild auch auf der Kamera lässt und dann muss man diesen Folder Parameter mit angeben?  
                  
                Grüße André
                
                11\. Oct 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/7a6f9e47b2b9e52c521418d54a79c343?s=75&d=mm&r=g)
                    
                    Daniel
                    
                    Hallo Andre,  
                    nicht schlimm. Die Updates habe ich zur Dokumentation für andere Nutzer geschrieben. Ich konnte das Problem dann ja am Ende auch lösen.  
                    Das Problem war anfangs, dass die Photobooth kein Bild machen konnte. Also hatte ich den Befehl für gphoto selbst in der Shell aufgerufen. Dabei ist der besagte Fehler aufgetreten. Die Steuerung der Kamera hatte sich dann durch die Rechtevergabe im Ordner erledigt. Das Bild wurde gemacht und gespeichert.  
                    Dennoch hatte mich gewurmt, dass der Befehl über die Shell nicht ohne Fehlermeldung ausgeführt wurde. Mein Ziel war es nicht unbedingt, dass das Bild auf der Kamera gespeichert wird, eher den Fehler zu beheben. Da die Photobooth den gleichen Befehl aufruft, wird sicherlich auch dort der Fehler auftreten.
                    
                    11\. Oct 2017 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/973eb466aa53e18af7befb538affbbf2?s=75&d=mm&r=g)
    
    Sebastian L
    
    Hallo zusammen,  
      
    nachdem hier so viele Leute diese Photobox erfolgreich auf verschiedener Hardware umgesetzt haben. Würde mich ein Kleiner Benchmark Vergleich der Systeme interessieren.  
      
    Wie lange benötigt euer System vom Drücken des Auslöse Buttons bis zur Anzeige des Bildes ???  
      
    Meine Konfiguration.:  
      
    Gigabite Brix (Intel Celeron 4GB Ram)  
    OS.: Raspian PIXEL Desktop  
    DSLR.: Sony A58  
    Bildgröße.: 5MP (2560 × 1920)  
    Timer.: 3 Sekunden  
      
    Benötigte Zeit von Starten bis Anzeigen.: 7-8 Sekunden (Bei einer eingestellten Count Down Zeit von 3 Sek).  
      
    Grüße an alle
    
    02\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5cb63280ce76284f83f8e0e44f3ba90a?s=75&d=mm&r=g)
    
    Jens Matthies
    
    Hallo Andre,  
    ich bin jetzt ein Stück weiter als der Adi.  
    Bei mir macht die Canon EOS 1000D nach 5 Sekunden ein Bild, dann kommt die Meldung Bild wird verarbeitet, aber nach 3 Sekunden heißt es "Es ist ein Fehler aufgetreten, bitte versuchen sie es erneut.  
    Ist das auch wieder ein Problem der Rechte??  
    Sorry für die ganzen Fragen, aber ich bin auf dem Gebit Linux noch kompletter Neuling.  
    Lieben Gruß  
    Jens
    
    02\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hi Jens, wird ein Bild im Thumbs Ordner abgelegt und hast du gdlib installiert? Ist ein Eintrag in der data.txt?  
        Grüße André
        
        02\. Oct 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/27050702fcc50e29bebeb5c8d4df3402?s=75&d=mm&r=g)
    
    Adi
    
    Lieber André und andere Cracks  
      
    Ich habe zwar schon ein paar einfach Raspberry Projekte nach Anleitungen umgesetzt, bin aber dennoch ein absoluter Nullchecker. Ich weiss nicht mal, wie ich die files, von denen ihr immer schreibt wie data.txt oder config.php finden oder editieren kann...?  
      
    Jetzt habe ich mir eine Photobooth vorgenommen und wollte eigentlich ursprünglich «The All-Seeing Pi» basteln, bin dann aber über dein Projekt gestolpert und habe mich wegen der DSLR-Unterstützung und vor allem wegen deinem äusserst hübschen Webinterface umentschieden.  
      
    Soweit habe ich auch alles hinbekommen, Webserver läuft, Webinterface wir angezeigt, beim Auslösen erhalte ich aber die Fehlermeldung "Es ist ein Fehler aufgetreten, bitte versuche es erneut"  
      
    Ich habe eine Nikon D90 angeschlossen und habe das Ausgabeformate auf JPG (OHNE Raw) umgestellt auf niedrigster Auflösung.  
    "gphoto2 --auto-detect" klappt und gibt mir folgendes aus:  
    Nikon DSC D90 (PTP mode) usb:001,007  
      
    "gphoto2 --capture-image" liefert mir folgende Fehlermeldung:  
    \-------------------------------------------------------------  
    \*\*\* Fehler \*\*\*  
    An error occurred in the io-library ('Konnte das USB-Gerät nicht beanspruchen'): Konnte Schnittstelle 0 nicht reservieren (Das Gerät oder die Ressource ist belegt). Stellen Sie sicher, dass kein  
    anderes Programm (gvfs-gphoto2-volume-monitor) oder Kernelmodul (z.B. sdc2xx, stv680, spca50x) das Gerät verwendet und Sie  
    Lese- und Schreibrechte für das Gerät haben.  
    FEHLER: Konnte Bild nicht aufnehmen.  
    FEHLER: Konnte nicht aufnehmen.  
    \*\*\* Fehler (-53: »Konnte das USB-Gerät nicht beanspruchen«) \*\*\*  
      
    Für Debug-Meldungen verwenden Sie bitte die Option »--debug«.  
    Diese Meldungen können Ihnen helfen, eine Lösung für Ihr Problem zu  
    finden. Wenn Sie jedoch Fehler- oder Debug-Meldungen an die  
    Mailingliste <gphoto-devel@lists.sourceforge.net> schicken wollen,  
    so starten sie gphoto2 bitte wie folgt:  
      
    env LANG=C gphoto2 --debug --debug-logfile=my-logfile.txt --capture-image  
      
    Bitte stellen Sie sicher das die uebergebenen Argument ausreichend gequoted sind.  
    \-------------------------------------------------------------  
      
    Ich habe alle 260 Kommentare durchgelesen, vieles ausprobiert da ich mir aufgrund der Kommentare ziemlich sicher bin, dass es sich um ein Rechteproblem handelt. Half alles nix.  
      
    Habe mit "sudo nano /etc/sudoers" folgendes unter "# User privilege specification root ALL=(ALL:ALL) ALL"ergänzt:  
    www-data ALL=(ALL) NOPASSWD: ALL  
      
    Angemeldet bin ich mit dem User "pi"  
      
    Hat mir jemand einen Tipp? Leicht verständlich für Nullchecker wie mich :-)?
    
    01\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Adi, für mich hört es sich als ein Problem mit der Kamera an. Hast du schon einmal nur mit gphoto ein Bild machen können? Der Webserver selbst ist www-data als User, aber mit dem von dir genannten Befehl müssten die Rechte passen. Grüße
        
        01\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/27050702fcc50e29bebeb5c8d4df3402?s=75&d=mm&r=g)
            
            Adi
            
            Vielen Dank für die überraschend schnelle Antwort!  
            Hatte kurz auch eine Canon G1X dran, mit demselben Ergebnis.  
            Wie mach ich denn "nur mit gphoto ein Bild"?  
              
            Also müsste ich mich mit www-data als User auf fem Raspy anmelden?  
              
            Sorry für die Anfängerfragen...
            
            01\. Oct 2017 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Adi, nein ich meinte damit nur, dass der www-data Benutzer vom Webserver benutzt wird und es egal ist, mit welchem Benutzer du selbst angemeldet bist. Wenn du es mit www-data testen willst, musste dich mit diesem anmelden.  
        gphot Befehl lautet:  
        sudo gphoto2 --capture-image-and-download --filename=test.jpg images  
          
        Der Befehl macht ein Bild und lädt es runter, speichert es unter dem Namen test.jpg im Ordner images von wo aus du den Befehl aufrufst.  
        Grüße André
        
        02\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/27050702fcc50e29bebeb5c8d4df3402?s=75&d=mm&r=g)
            
            Adi
            
            Vielen Dank für die Antwort. Werde ich heute Abend testen! Liebe Grüsse, Adi
            
            02\. Oct 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/27050702fcc50e29bebeb5c8d4df3402?s=75&d=mm&r=g)
                
                Adi
                
                Hallo André. Konnt eine Nikon D700 ausleihen, mit der lief alles auf Anhieb - mit der Nikon D90 geht bei mir nichts. Hattest also recht damit, dass der Fehler bei der Kamera lag :-). Vielen Dank für deine Hilfe. Jetzt gehts weiter mit WLAN Hotspot und Feinschliff ...
                
                02\. Oct 2017 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/27050702fcc50e29bebeb5c8d4df3402?s=75&d=mm&r=g)
                
                Adi
                
                Habe meine Nikon D90 zum laufen gebracht, musste dazu gphoto2 updaten. Bin nach folgender Anleitung vorgegangen: http://i386.com/2014/10/upgrading-gphoto2-for-raspberry-pi-to-solve-canon-5d-mkiii-issues/
                
                02\. Oct 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/5cb63280ce76284f83f8e0e44f3ba90a?s=75&d=mm&r=g)
    
    Jens Matthies
    
    Hallo Andre,  
    so ich habe jetzt alles in Betrieb genommen.  
    Raspi läuft und ich hab die Dateien in den HTML-Ordner kopiert.  
    GPhoto2 habe ich auch installiert und über Auto-Detect wurde die Kamera erkannt.  
    Die Rechte für den WWW-Ordner habe ich auch vergeben.  
    Jetzt tritt das Problem auf wenn ich ein Foto machen will kommt eine Fehlermeldung. Es ist eine Fehler aufgetreten bitte versuchen sie es erneut und der Button Seite neu laden.  
    Kann mir jemand bitte sagen was ich falsch mache??  
    Lieben Gruß
    
    30\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jens, das hört sich nach den Rechten an. Damit ist gemeint, dass der www-data Benutzer Root Rechte hat, sonst kann gphoto2 nicht ausgeführt werden.  
          
        Grüße
        
        30\. Sep 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/adf516ecef61ea9514f91e22372e1957?s=75&d=mm&r=g)
        
        Michele
        
        Hallo Jens,  
          
        Welche Kamera nutzt du denn? Bei einigen Canons gibt es das Problem mit Automount. Beim Raspberry hilft dann wenn Du die grafische Benutzeroberfläche deaktivierst insofern Dir das möglich ist. Hatte anfangs auch das Problem, denn der Raspberry versucht sonst die Kamera als Massenspeicher einzubinden.  
          
        Gruß  
        Michele
        
        30\. Sep 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
    
    Gregor Kaczmarek
    
    Hi, nachdem ich irgendwann gesehen habe, das es ein Update mit Print funktion gibt, habe ich mich direkt drauf gestürzt und auf meinen PI gespielt.  
      
    Gibt es einen Einfacheren Weg die Druckfunktion zu deaktivieren als alles im Quellcode auszuklammern?  
      
    in meiner Galerie kann ich nicht mehr "scrollen". Mit dem Mausrad am PC funktioniert es, aber weder am Ipad 9.7 noch am 10 Zoll Touch Panel welcher direkt am PI angeschlossen ist, lässt sich runter scrollen.  
      
    Kann mir da jemand helfen?  
      
    Danke und schönen Gruß  
      
    Gregor
    
    29\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Gregor, leider geht das mit dem Drucken gerade nur per Auskommentieren. Ich werde noch diese Option aber auf jeden Fall noch umbauen.  
          
        Das mit dem Scrollen ist ja ein komischer Fehler. Hast du mal andere Browser versucht?  
          
        Viele Grüße Andre
        
        29\. Sep 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
            
            Gregor
            
            Hi Andre,  
            hab bisher keine Möglichkeit gehabt, mich damit weiter auseinander zu setzten.  
            Ein anderer Browser macht das selbe. Über das integrierte Touch Display an meiner Kiste (ein Original Raspi 7" Touch) lässt sich ohne das ich was geändert habe auf einmal scrollen. Am 10 Zoll Touch wieso auch immer nicht. Werde sobald meine neue Kiste beim Schreiner fertig ist, nochmal berichten.  
              
            Was mich immernoch beschäftigt (hab ich vor einigen Monaten schon mal oben gepostet): mit meiner Eos 70D wird das Foto direkt nach dem Countdown geschossen.  
            mit der EOS 1300D dauert es bis der schriftzug "Bild wird verarbeitet" erscheint. Also rund 1 Sekunde verzögert.  
              
            Bediene ich die Kamera über die Console und gphoto per Befehl, wird das Bild allerdings genau wie bei der 70D direkt geschossen.  
            Hab es mit einer Nikon D3100 ebenfalls Probiert, welche leider nicht meine ist. Da hätte ich auch keine Probleme, wollte aber keine neue Kamera kaufen ;)  
              
            LG Gregor
            
            19\. Oct 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
            
            Gregor
            
            Hi Andre,  
            kannst du mir einen Tipp geben, wie ich "Buttons" zum Scrollen in der Galerie am einfachsten einbinden könnte? Meine php Kenntnisse scheitern daran leider.  
              
            Ich würd einfach nur einen Pfeil hoch und einen Pfeil runter an der Seite einbinden wollen, worüber man die Galerie entsprechend scrollen kann, da ich das mit dem Problem / meinem Display nicht in den Griff bekomme  
              
            Danke und schönen Gruß  
            Gregor
            
            08\. Nov 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/adf516ecef61ea9514f91e22372e1957?s=75&d=mm&r=g)
    
    Michele
    
    Hallo Andre, Kompliment für die Programmierarbeit! Ist alles in allem echt sehr schön geworden! Habe das Ganze auf einem Pi3 zum laufen gebracht, allerdings musste ich mit der Auflösung der Kamera soweit herunter das es nicht wirklich akzeptable Bilder werden, denn sonst lies sich keine vernünftige Ladezeit realsieren. Hatte nun versucht alles unter Ubuntu einem i5 und ordentlich RAM zum Laufen zu bekommen, bis zum Auslösen der Kamera funktioniert alles danach hängt es bei "Bild wird verarbeitet" es erscheint auch nichts in der Galerie. Hast Du oder auch der Rest der Community einen Rat?  
      
    Danke und viele Grüße  
    Michele
    
    27\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michele, das kann viele Gründe haben. Hast du mal in der Error-Log deines Systems geguckt? Ansonsten hast du die Bildverarbeitungs-Software installiert, die zum Kleinrechnen der Bilder benutzt wird? Wird ein Bild in "images" gespeichert und gibt es einen Eintrag in der data.json?  
          
        Grüße André
        
        28\. Sep 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/adf516ecef61ea9514f91e22372e1957?s=75&d=mm&r=g)
            
            Michele
            
            Hallo Andre, danke für deinen Hinweis. Habe mir die Error Log angesehen und tatsächlich gab es ein Problem mit der Berechtigung des Users www-data. Hab dann entsprechend die Gruppen mit chgrp und den Folder mit Chown angepasst und es hat funktioniert. 18 MB Bilder werden schnell bearbeitet und angezeigt. Die einzige Hürde die ich noch hatte waren die Automount Settings. Diese mittels Gsettings auf false gesetzt und alles funktioniert tadellos! Wenn Interesse besteht kann ich auch gerne eine Anleitung weiter geben.  
              
            Besten Dank & Gruß  
            Michele
            
            29\. Sep 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Das ist schön zu hören! Eine Anleitung ist gerne gesehen. Könnte ich auch oben verlinken.  
                  
                Grüße Andre
                
                01\. Oct 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/5cb63280ce76284f83f8e0e44f3ba90a?s=75&d=mm&r=g)
    
    Jens Matthies
    
    Hallo Andre,  
      
    alle Daumen hoch für deine Anleitung :)  
    Ich wollte das ganze jetzt nachbauen.  
    Wenn ich jetzt ein Raspberry 3 nehmen mit Touch Display, dann kann ich doch auf Router und Tablet verzichten, oder?  
      
    Lieben Gruß  
    Jens
    
    27\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jens, ja dann kannst du auf den Router und das Tablet verzichten. Mit einem PI3 brauchst du den Router eh nicht mehr, da diese ja direkt WLAN könnte ;)  
          
        Grüße  
        André
        
        27\. Sep 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e625f4fa08ab2ea3109afc2c52462683?s=75&d=mm&r=g)
    
    Marvin Berstecher
    
    Hallo Andre,  
    ich finde was du da gemacht hast mega genial. Und hab schon viel damit rum gespielt.  
    Ich wollte fragen ob es eine Möglichkeit gibt, dass die Bilder zusätzlich auf der Kamera SD-Karte gespeichert werden, und sie nicht nur zurück an den Pi geschickt werden.  
    Ebenfalls wollte ich fragen ob es ein live-view Einbindung möglich ist und wenn ja wie man diese realisieren würde.  
    Danke schon Mals in voraus.  
    Gruß,  
    Marvin
    
    21\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Marvin, man kann bei gphoto einstellen, ob die Bilder auf der Kamera bleiben sollen. Der Befehl der benutzt wird ist in der config.php. Eine Live View ist bisher nicht möglich,da es bisher keine richtige Möglichkeit gibt den Stream der Kamera Webfähig abzuspielen.  
          
        Viele Grüße Andre
        
        21\. Sep 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1f12c9b8d3008274488bacbe5ca0c48c?s=75&d=mm&r=g)
            
            horuke
            
            Das ist so nicht ganz korrekt, Andre.  
            Ich habs zwar anders gelöst, weil meine alte DSLR keine Liveview / Videostreams kann, aber bei aktuelleren Modellen sollte das genauso funktionieren.  
            Ich hab das so gelöst:  
            Ich benutze eine Webcam, die ich genau über dem Objektiv der DSLR positioniert habe. Diesen Stream der Webcam greife ich mit Motion / Motioneye ab und erzeuge damit einen http-Stream, der auf einem anderen Port läuft. Diesen kann man ganz einfach in einer HTML Seite einbinden.
            
            16\. Oct 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/3376be84d93effdd2bf839a39be844e4?s=75&d=mm&r=g)
                
                Gabriela Wejat-Zaretzke
                
                Horuke könntest du deine Lösung detaillierter vorstellen.- bin PiAnfänger
                
                24\. Nov 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/513ad84dec942712ef7644ca75d86681?s=75&d=mm&r=g)
    
    Sebastian
    
    Hallo Andre,  
    erstmal vielen Dank für dieses Projekt! Super Arbeit. Nur würde ich gerne die Anzeigedauer des "Cheeeese" editieren können, da die Kamera teilweise lange fokussiert. Habe leider nur die var für den Countdown in der core.js gefunden, aus der js-Syntax in der countdown-function bzw. der cheese-function werde ich nicht schlau :(  
    Vorab vielen Dank für die Hilfe  
    Grüße!
    
    19\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sebastian,  
        eig müsste die Einstellung ausreichen. Hat das nicht geklappt?  
        Grüße Andre
        
        20\. Sep 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/458ed4989c98c6e47500beb3b0ecc0de?s=75&d=mm&r=g)
    
    Dennis
    
    Hallo Andre.  
    Tolles tool hast du da gebaut. Bei mir klappt auch alles soweit. Ich würde nur gerne was am aussehen verändern. Leider sind meine html bzw php kenntnisse nicht vorhaben. Was es im Github hiermit aufsich?  
    Change the styling to your needs On Windows  
      
    Download digiCamControl and extract the archive into digicamcontrol in the photobooth root, e.g. D:\\xampp\\htdocs\\photobooth\\digicamcontrol
    
    17\. Sep 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/8118c1ff719394ef96cff6b1de8a4ae4?s=75&d=mm&r=g)
    
    Nils
    
    Hallo  
    Eigentlich funktioniert alles bloß ich kann die Bilder im Ordner Images nicht löschen, da ich keine Berechtigung habe (Im Terminal gehts) .  
    Wie kann ich die Berechtigung ändern ?
    
    07\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/8118c1ff719394ef96cff6b1de8a4ae4?s=75&d=mm&r=g)
        
        Nils
        
        Das erste Problem konnte ich lösen.  
        Jetzt habe jedoch das Problem, dass mir der Qr code zwar angezeigt wird ich aber die Bilder nicht Downloaden kann , weder mit dem iPad oder Handy weil beide keine Verbindung zum Server herstellen können.
        
        08\. Sep 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
            
            joker\_75
            
            Achte darauf von wo die Weboberfläche angezeigt wird.  
            Ich hatte das Problem auch, wenn die Oberfläche und und der Server ein gerät sind.  
              
            Soll heißen, ich habe die Oberfläche direkt auf dem Raspi geöffnet mit "localhost" statt ip.  
            Wenn jetzt der QR generiert wird sucht das Smartphone die Unterordner mit den Bildern bei sich selbst (localhost) und nicht auf dem Raspi.  
              
            Öffne die Oberfläche immer mit Eingabe der IP-Adresse dann wird diese in den QR gebettet und ist von jedem Gerät im gleichen Lan/W-Lan erreichbar.
            
            12\. Sep 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/1f12c9b8d3008274488bacbe5ca0c48c?s=75&d=mm&r=g)
    
    Horuke
    
    @Christoph:  
    was mir gerade noch eingefallen ist: versuch mal die Kamera über die Console zu finden und da Bilder zu machen:  
      
    gphoto2 --auto-detect  
    gphoto2 --capture-image  
      
    Wenn das klappt, stell die Ausgabeformate auf JPG (OHNE Raw) um und versuch es erneut.  
    Sollte nur --auto-detect klappen, versuch in der Console und mit gphoto2 ein wenig zu spielen.
    
    30\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
        
        Christoph
        
        Danke für die Infos  
        Ich bin leider drauf gekommen, dass ich zwar alle Kameras mit gphoto2 --auto-detect erkenne, aber anscheinend werden diese nicht von gPhoto unterstützt, um Fotos zu schießen.  
        Ich bekomme immer einen Error, wenn ich gphoto2 --capture-image schreibe.
        
        01\. Sep 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/973eb466aa53e18af7befb538affbbf2?s=75&d=mm&r=g)
            
            Sebastian L.
            
            Was für Kameras benutzt du ?  
            Sind die Kameras im PTP Mode bzw. (Sony PC-Fernbedienung) ?  
            Was für eine Fehlermeldung gibt dir gphoto2 aus wenn Du es in der Konsole ausführst?  
            gphoto2 bietet auch einen debug modus um solchen Fehler genauer einzugrenzen
            
            04\. Sep 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
                
                Christoph
                
                Danke, hat sich erledigt. Mit meiner Nikon D3200, für die ich ein USB Kabel nachgekauft habe, funktioniert alles!
                
                05\. Sep 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
    
    Christoph
    
    Ich bekomme auf der Web Oberfläche leider jedes mal den Fehler "Es ist ein Fehler aufgetreten, bitte versuche es erneut"  
      
    Ich habe es mit 2 unterstützten Kamera probiert und auch ein 2. Mal die Installation probiert - aber wieder ohne Erfolg.  
      
    Was könnte denn der Fehler sein :-(
    
    28\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Es könnte an den Rechten für den User liegen, dass er das Gphoto Kommando nicht ausführen kann. Werden denn Bilder gemacht, oder gibt es direkt den Fehler?  
        Grüße
        
        28\. Aug 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/432e574e14b990905e0fbed9ec5b6cfd?s=75&d=mm&r=g)
        
        Sebastian
        
        @ Christoph: Überprüf mal, ob die Kamera fokussiert und schalt ggf. das Ausgabeformat der Kamera um. Bei mir ging es nachdem ich die raw ausgeschaltet hatte.  
          
        Übrigens, wie löscht man die gemachten Fotos? Ich hab die Ordner geleert, aber dann sind noch leere Platzhalter in der Galerieansicht übrig.
        
        28\. Aug 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1f12c9b8d3008274488bacbe5ca0c48c?s=75&d=mm&r=g)
            
            Horuke
            
            @Sebastian: einfach die data.txt leeren, sodass nur noch  
              
            "\[ \]" drinsteht (ohne die Anführungszeichen)  
              
            @Andre: vielen, vielen Dank für diese grandiose und doch einfache Lösung!  
            Ich werde sie für die nächsten Geburtstagsfeiern einsetzen und berichten.  
            Ich hab noch eine USB Webcam drangehängt, um eine LivePreview zu schaffen, weil meine alte EOS das nicht kann. Dafür einfach motion und motioneye (Google für Tutorials) installiert und gebe den Stream als Backgroundimage wieder. Den Auslöse Button habe ich an den unteren Rand geschoben, dein Name prangt links unten :)
            
            30\. Aug 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/fece282c4f2c23e04fb73d5ca9eb7ede?s=75&d=mm&r=g)
    
    Sebastian
    
    Hi Andre,  
    erstmal nen fettes Dankeschön für dieses Schmuckstück an Arbeit!  
    Ich habe schon alles gebaut und an sich funktioniert es auch.  
    Eine Sache will aber noch nicht so richtig: Ich hab ein altes 7 Zoll tablet genommen und es schneidet den Button zum Auslösen in der Darstellung ab, wenn es im Querformat montiert ist.  
    Hab es mit chrome und Firefox getestet. Mein s4 macht das übrigens auch.  
      
    Weißt du Rat?  
      
    Thx
    
    27\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sebastian, das liegt am CSS. Ich habe das Photobooth damals für mein 10" Tablet gestaltet. Wenn du es passend haben willst, müsstest am Styling den Button etwas positionieren. .takePic evtl bei bottom: 100px setzen oder mehr. Je nachdem wie es passt.
        
        28\. Aug 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/432e574e14b990905e0fbed9ec5b6cfd?s=75&d=mm&r=g)
            
            Sebastian
            
            Thx. Kannst du mir auch sagen, wie man am besten resettet (Bilder löschen)?
            
            28\. Aug 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Die Datei mit den Daten musst du noch löschen/leeren. Also die data.txt.
                
                28\. Aug 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/c88185d80b11dbdecf02400c2f39e2bb?s=75&d=mm&r=g)
    
    Martin
    
    Hallo André  
      
    Wäre es theoretisch auch möglich die Bilder direkt an einen Instagram Account zu schicken? Vorausgesetzt die Instagram API lässt das zu.  
      
    Danke und Lg
    
    26\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Martin,  
        na klar wäre das möglich. Dafür müsstest du in der takePic.php dafür sorgen, dass nachdem das Bild gemacht wurde, der Api-Call ausgeführt wird. Es kann auch sein, dass du in der Core.js nachdem das Bild auf dem Bildschirm erscheint das Bild via Javascript wegschicken kannst. Am besten wäre es, das einfach mal auszuprobieren.  
          
        Grüße  
        André
        
        26\. Aug 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
    
    joker\_75
    
    Erstmal aller größten Respekt!  
    Ein super Projekt das schon so vielen so viel Freude gemacht hat.  
    Und das ganze ohne die für solche ideen übliche Profitgier.  
      
    DANKE  
      
    Auch ich bin dabei mir nach dieser Anleitung eine Photobooth zu bauen.  
      
    Für alle Canon eos besitzer hier der hinweis das mit der eos 700D der Live view Modus über HDMI zeitgleich mit der Steuerung via USB funktioniert.  
      
    Soll heißen ich werde den live-view mit einem einfachen 10" Monitor realisieren.  
    Das ist zwar seitenverkehrt aber wird schon gehen denke ich.  
      
      
    Welchen QR-Scanner nutz ihr?  
    Wird nach dem scannen die Verbindung ins W-Lan selbstständig aufgebaut?  
      
    Ausserdem habe ich noch ein Problem mit dem Drucken.  
    Der Drucker ist am Raspberry mit Cups als Standart Drucker eingerichtet.  
    Wenn ich den Druck-Button drücke passiert leider nichts.  
    Der Drucker wacht nichtmal aus dem Standby auf.  
    Wenn ich den "lp dateiname.jpg" Befehl in der Konsole eingebe wird sofort ggedruckt.  
    Ich habe den Benutzer www-data der Gruppe lpadmin hinzu gefügt ohne Erfolg.  
      
    Kann mir mal einer den Tritt in die richtige Richtung geben???
    
    25\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo, ich habe QR-Droid auf dem Handy benutzt und nein die Verbindung musste man selbstständig herstellen. Am besten schon vorher mit dem WLAN Photobooth verbinden. Beim Druck-Feature kann ich dir leider nicht helfen, da ich das selbst nicht nachvollziehen kann.  
          
        Grüße André
        
        26\. Aug 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
            
            joker\_75
            
            Die Frage mit dem W-Lan war auch mehr zur info.  
            Ich wollte eh eine laminierte Anleitung auf den Tischen auslegen, da kann ich dann auch die Anmeldedaten für die Gäste bereitstellen.  
              
            Ich errinnere mich nur dunkel dran das mal ein Freund bei mir war, der einen QR gescannt hat, den ich vorher durch meine Fritzbox generiert hatte.  
            Daraufhin hat sich sein Handy selbstständig in das Wlan eingehäntgt.  
              
            Was die Geschichte mit dem Drucken angeht ist das natürlich sehr schade, denn das ist für die Party für die ich baue die wichtigste Funktion, da das Puplikum auch ältere Semester zu bieten hat die sich mit Smartphones nicht so auskennen.  
              
            Gibt es so etwas wie eine Debug-Konsole wo ich sehen kann ob der Druckbefehl an den Drucker geht?  
              
            Welcher Benutzer steht hinter dem Druckbefehl?  
            Habe ich hier ein Rechte problem?
            
            26\. Aug 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Du kannst in der print.php schauen, und mal nen var\_dump machen am ende nach dem shell exec. Ausgeführt wird als www-data User. Der Befehl selbst steht in der config. Php  
                Grüße
                
                26\. Aug 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
                    
                    joker\_75
                    
                    So, ich bin ein kleines bisschen weiter.  
                      
                    ich habe mir den Befehl aus der config.inc.php abgeschrieben in der Konsole und s% durch einen Dateinamen ersetzt.  
                    Das hat nicht funktioniert, also habe ich die Befehlsoptionen nach und nach einzeln getestet und siehe da, wenn ich fit-to-page weg lasse druckt er.  
                      
                    Also habe ich fit-to-page aus der config-inc.php gelöscht und jetzt druckt er auch aus der Web-Oberfläche.  
                      
                    Sicher der Ausdruck ist nun viel zu groß aber ich habe versucht das Format in den Druckereinstellungen als Standard zu definieren, das führt allerdings zu einem völlig unbrauchbaren Ausdruck.  
                      
                    Naja mal sehen jetzt hab ich erst mal was anderes zu tun evtl. geht es heute Abend weiter.  
                      
                    Der Drucker ist übrigens ein Canon Pixma MG 6250
                    
                    27\. Aug 2017 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/fcf2a9959f8ebcfcdbd980a2e1edaee0?s=75&d=mm&r=g)
                    
                    joker\_75
                    
                    Ok hier ein kleines Update.  
                      
                    In der config.inc.php steht folgender Befehl:  
                    $config\['print'\]\['cmd'\] = 'sudo lp -o landscape fit-to-page %s';  
                      
                    Das führt bei mir dazu das der Drucker nicht mal aus dem Standby startet.  
                      
                    Wenn der Befehl so heist:  
                    $config\['print'\]\['cmd'\] = 'sudo lp -o landscape -o fit-to-page %s';  
                    dann druckt er.  
                      
                    Die Schreibweise habe ich mir von hier angeschaut:  
                    https://www.cups.org/doc/options.html  
                      
                    Hier steht "-o" vor jeder einzelnen Option.  
                      
                    nun sieht der Druck aus als wenn sich die einzelnen Zeilen gegen ein ander verschieben, so das ein Streifenmuster entsteht das zwar den Farben nach dem gewünschten Bild entspricht, aber leider völlig unbrauchbar ist.  
                      
                    Hat da jemand eine Idee für mich?
                    
                    29\. Aug 2017 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/1e168b093fc57e91d56eb62fb3b52647?s=75&d=mm&r=g)
    
    [Hotfirenet](https://hotfirenet.com)
    
    I have fork your photobooth script, how can i had modal when my guest clik on the print button ?
    
    25\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hello, why do you need a modal? What is your plan.
        
        26\. Aug 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a5c0bdda3289c65851963d882df1dffd?s=75&d=mm&r=g)
    
    Frank
    
    Hi,  
      
    super das Tutorial. Könnte man auch statt einem aktiven Tablet auch einfach einen Monitor nehmen auf dem der PI die Bilder dann anzeigt?  
      
    Ausgelöst wird der Fotoprozess dann durch einen externen Taster.  
      
    So müsste die Bildanzeige doch auch wesentlich schneller gehen oder?
    
    16\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Frank,  
        klar dir sind da keine Grenzen gesetzt. Ob sich das an der Geschwindigkeit groß bemerkbar macht, da die meiste Zeit das Bild machen, speichern und nochmal klein rechnen braucht. Das mit dem externen Taster müsste man allerdings noch dazu programmieren. Hier haben das schon einige getan. Evtl. bekommst du ja hier einen kleinen Tipp, wie das am besten geht.  
          
        Grüße André
        
        16\. Aug 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/7412ca2815030621f69d335ab47f78f6?s=75&d=mm&r=g)
            
            Samuel
            
            Hi Andre,  
            auch von mir vielen Dank für dein tolles tutorial. Gibt es die Möglichkeit leicht zeitversetzt mehrere Bilder nacheinander aufzunehmen (ich habe eine Nikon D40) und diese dann evtl. nacheinander als Vorschau anzeigen zu lassen ?
            
            16\. Aug 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Samuel, da jedes Bild ca 5-10 Sekunden dauert würden mehrere Bilder bestimmt einiges an Zeit beanspruchen. Derzeit ist das Skript nicht für mehrere Bilder hintereinander ausgelegt. Das müsste man einbauen.  
                Grüße André
                
                26\. Aug 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/6d8e4395b8becc36ab749e38396e9cc4?s=75&d=mm&r=g)
    
    Martin
    
    Hallo Andre,  
      
    erstmal Danke für das Tutorial.  
    Folgendes Problem habe ich:  
    Ist es möglich das ich den Foto-Auslöse-Button nur von einem Gerät aktivieren kann?  
    Habe das System auf einem Pi3 + 7" Touchscreen laufen. Wenn ich mit dem Handy den QR Code vom 7" Touchscreen auslese, bekomme ich das Bild angezeigt und kann mit meinem Handy auch auf die Index Seite mich aufschalten.  
    Es wäre doch sicherlich besser das nur ein Benutzer (mein 7" Touchscreen oder halt das Hauptbedientablett) auf den Auslöse-Button darf und die restlichen Benutzer (z.B,. Gästehandys) nur auf die Galerie zugriff hätten?  
      
    Vielleicht bin ich auch einfach nur zu doof weil es evtl. eine kleine Einstellung ist :/
    
    15\. Aug 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/41d4e944d8a750707bac77ba4ebfeb36?s=75&d=mm&r=g)
    
    [Nils](nils.land)
    
    Moin,  
      
    danke für die ganzen Infos hier. Ich setzte einen Raspberry Pi 3 mit dem 7" Touchscreen ein. Habe Chromium im Autostart als Kiosk Version, das Problem bei einer std. Raspian Installation ist das die Automount Funktionen von Gnome die USB Schnittstelle zur Kamera blockieren und so kein Bild zustande kommt.  
      
    Wenn man auf die Automount Funktionen verzichten kann, kann man diese Services einfach löschen:  
      
    sudo rm /usr/share/dbus-1/services/org.gtk.Private.GPhoto2VolumeMonitor.service  
    sudo rm /usr/share/gvfs/mounts/gphoto2.mount  
    sudo rm /usr/share/gvfs/remote-volume-monitors/gphoto2.monitor  
    sudo rm /usr/lib/gvfs/gvfs-gphoto2-volume-monitor  
      
    So, nun muss ich aber alles noch an die kleinen 800 x 480 pixel anpassen. Oder hat das schon jemand gemacht?
    
    12\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/6d8e4395b8becc36ab749e38396e9cc4?s=75&d=mm&r=g)
        
        Martin
        
        Hi Nils,  
          
        ich bin auch gerade meinen Pi3 mit dem 7" Touchscreen am einrichten. Ich habe Chromium im Kiok-Modus laufen und habe das Fenster auf 67% skaliert. Läuft meiner Meinung nach perfekt. Die Buttons kann man noch gut erkennen und klicken.
        
        15\. Aug 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/6d38240cfc3deed929ad6e41f7b16072?s=75&d=mm&r=g)
            
            Giuseppe Bevilacqua
            
            Hallo,  
            Habe mal eine Frage. Klappt das im Chromium dann mit Doppel Klick auf das Button oder Single Klick.  
              
            Habe ein Waveshare 10" Touch und habe es nicht zum laufen bekommen.  
              
            Grüße Giuseppe
            
            10\. Nov 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/8b76938edf3b9afac82b38d508be9259?s=75&d=mm&r=g)
    
    daeywid
    
    Hey Andre,  
    vorab erstmal ein dickes Highfive \*highfive\* an dich ... danke für die Anleitung und alle notwendigen Komponenten. :)  
      
    Alles funktioniert ganz gut (nachdem ich ein Scrift eingefügt habe dass einen bestimmten Prozess beim Start beendet) ... jedoch stürzt die Internetseite immer ab wenn ich ein Bild in der Galerie anklicke. Wenn ich die Seite dann neu lade kann ich ohne Probleme weiter fotografieren.  
      
    Hast du eine Lösung für das Problem?  
      
    Beste Grüße  
    daeywid
    
    07\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Moin, welches Tablet benutzt du denn? Vlt liegt es daran.  
        Grüße Andre
        
        12\. Aug 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/cb24c53082c8e7fce6231fa79930a78c?s=75&d=mm&r=g)
            
            daeywid
            
            oh das kann sein,  
            es handelt sich um ein ganz billiges teil, wundert mich nur weil es anfangs eigentlich ging und ohne nochmal an den code zu gehen ging es nach zwei drei tagen ruhezeit nichtmehr.
            
            15\. Aug 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/73fd27ca8cd5b72a19a3f9ae8aaa00be?s=75&d=mm&r=g)
    
    Mathias
    
    Hallo erstmal tausend Dank für die Arbeit. Es läuft super mit dem Raspberry Pi 2 und der Eos 1300D sowie meinem iPad Air 2.  
      
    Hat schon jemand einen Grobhandtaster via GPIO zusätzlich eingebunden bekommen? Ich habe leider Softwaremäßig wenig Entwicklerskills.  
      
    Vielen Dank.  
      
    Liebe Grüße  
      
    Mathias
    
    03\. Aug 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/96f26a1c9d130032bcdc3786fc99bf41?s=75&d=mm&r=g)
    
    Stefan
    
    Hallo zusammen,  
    besteht vielleicht die Möglichkeit zwischen dem Countdown (5,4,...1) und dem Cheeeeese! ein "jetzt ins Objektiv schauen" o.ä. einzufügen? Da bei mir ein 19" Monitor unter der Kamera hängt, befürchte ich, dass jeder gebannt den Countdown darauf verfolgt und nicht in die Kamera schaut. Ein Tablet würde knapp unter dem Objektiv hängen, wodurch der leicht tiefere Blick wohl kaum auffällt.  
    Ich denke den Eingriff muss man in der core.js vornehmen, wie aber geht das genau?  
      
    Vielen Dank schon mal!  
      
    Gruß  
    Stefan
    
    01\. Aug 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/95d3219aff2a0f885f48959c022971e5?s=75&d=mm&r=g)
    
    Richard
    
    Hallo alle miteinander,  
    ist diese Umsetzung auch auf einem Mint-Rechner möglich? Ich habe leider nicht viel Ahnung von Linux, möchte aber gern deine Variante einer Photobooth umsetzen.  
    Wenn ich "sudo apt-get install php5-gd" versuche, kommt der erste Fehler, dass das Paket nicht verfügbar ist.  
    Macht es überhaupt Sinn sowas mit Mint zu realiseiren? Ich hab leider keinen RaspB und wollte es gern mit meinem Laptop (Mint) realisieren.
    
    27\. Jul 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
    
    Michael
    
    Hallo Andre  
    Am 1.7.2017 habe ich Dein Projekt erfolgreich an den Start und in den Echteinsatz gebracht! Auf der Hochzeit meines Patenkindes war das System viele Stunden lang problemlos im Einsatz. Eine kleine Unterbrechung hatte ich dennoch - die Batterie im Funkauslöser auf der DSLR war leer ... Konnte zum Glück vor Ort noch Ersatz auftreiben. Über 300 supergute Aufnahmen sind die Ausbeute gewesen. Hoffe der Kaffee schmeckt!
    
    12\. Jul 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michael, das freut mich sehr und vielen Dank für den Kaffee ;) Hast du noch was geändert, oder angepasst? Grüße
        
        13\. Jul 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/96f26a1c9d130032bcdc3786fc99bf41?s=75&d=mm&r=g)
    
    Stefan
    
    Hallo zusammen,  
    noch einmal ein riesen Kompliment für das Photobooth Projekt, Andre und an alle die sich hier mit hilfreichen Informationen beteiligen. Auch als Software Legastheniker ist es mir gelungen die Photobooth ans laufen zu bekommen.  
      
    Wollte hier mal mein Setup vorstellen, ist eine Kombination aus einigen Beiträgen die man hier in den Kommentaren findet.  
      
    Anstelle eines RasPi verwende ich ein Dragonboard 410C von 96Boards mit einem Snapdragon 410, welcher vermutlich vergleichbar mit dem RasPi3 ist. Daran hängt eine Nikon D90, ein USB Fußtaster von Amazon für 10€ zum Auslösen der Fotos, ein 17" Monitor, der evtl. durch Trackball oder klassisch mit Maus ergänzt wird. Dank der "geMergten" Sourcen von Nihilor habe ich mich auch an die Verwendung eines Drucker gewagt und meinen Canon Selphy CP800 entstaubt. Mit Hilfe eines Tutorials auf Instructables (http://www.instructables.com/id/Raspberry-Pi-photo-booth-controller/) ist es mir relativ einfach gelungen den Drucker einzubinden. Dazu benötigt man im Wesentlichen CUPS und die Gutenberg Treiber. Im Sourcecode von Nihilor muss man dann noch die Druckertype angeben und schon druckt er. Was mich etwas störte ist, dass standardmäßig neben das Foto der QR Code gedruckt wurde. Mein Ziel war es, dass das Foto Vollflächig auf das 100x148mm gedruckt wird - gerne mit einem umlaufenden weißen Rand von ca. 3-4mm. Ich habe dann einiges im Code auskommentiert und damit per Try & Error das Foto so ausgedruckt bekommen, wie ich es wollte (print.php ab Zeile 27 geänder). Im Nihilor Sourcecode wird ein Ordner angelegt in dem die zu druckenden Fotos gespeichert werden. Dort wird also auch Bild als Kombination aus Foto und QR Code abgelegt. Dazu hätte ich noch eine Frage an diejenigen, die diese Sourcen schon getestet haben. Seitdem ich die durch Nihilor ergänzten Sourcen nutze ist die Verarbeitungszeit der Fotos (vom Auslösen der Kamera bis zum Anzeigen des Bildes) von ca. 7 Sekunden auf ca. 17 Sekunden angestiegen. Ich führe das auf den erhöhten Rechenaufwand zurück, weil jedes zu druckende Foto anscheinend noch einmal verarbeitet wird. Kann man diese Zeit irgendwie verkürzen wenn man nur das eigentliche Foto drucken möchte? Vielleicht hat da jemand eine Idee?!  
    Wenn ich diese Verarbeitungszeit wieder auf 7 Sekunden herunter bekomme, dann wäre ich 100% Zufrieden mit der Lösung von Andre und den Ergänzungen von Nihilor.  
    Vielen Dank für diese tolle Interessengemeinschaft :-)  
    Gruß  
    Stefan
    
    02\. Jul 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/4a7f4c8d9553577873c13afa2778e26d?s=75&d=mm&r=g)
        
        Viktor
        
        Hallo!  
        Ich hätte eine Frage: Wie hast du den Fußschalter eingebunden?
        
        25\. Jul 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/96f26a1c9d130032bcdc3786fc99bf41?s=75&d=mm&r=g)
            
            Stefan
            
            Hallo Victor, schau mal in den Kommentaren von Frank G. vom 21.03. und 13.04.  
            Genau so wie dort beschrieben habe ich es gemacht. Der Fußtaster muss zuvor am PC auf die Enter Funktion konfiguriert werden.d  
            Gruß Stefan
            
            25\. Jul 2017 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/96f26a1c9d130032bcdc3786fc99bf41?s=75&d=mm&r=g)
        
        Stefan
        
        Habe übrigens die Print.PHP noch so umgestellt bekommen, dass das aufgenommene Bild ohne weitere Bearbeitung gedruckt werden kann. Vom Auslösen bis Anzeige des Bildes vergehen so 5-6 Sekunden (3 Mpix).
        
        25\. Jul 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/50fa3694de4b7dd1b4bede18c1c3afcf?s=75&d=mm&r=g)
        
        Malte
        
        Kannst Du mir Deine Änderungen bitte schicken, ich verstehe nicht, was genau im Sourcecode von Nihilor als Druckertype angegeben werden muss und wie ohne QR Code gedruckt wird (ich habe den Selphy CP910, schon eingebunden)  
          
        Danke und lG aus München!
        
        11\. Jan 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
    
    Gregor
    
    Hallo Andre,  
      
    ich muss mich nochmal an dich wenden. Ich habe die Fotobox inzwischen mehrfach verwendet und sie kommt super gut an bei den Gästen.  
      
    Leider ist es oftmals so, dass der Countdown (eingestellt auf 5 Sekunden) runterzählt und das Bild erst etwa 1-2 Sekunden später geschossen wird.  
      
    Gibt es eine Möglichkeit, den Countdown im Hintergrund zu verkürzen, aber die visuelle Anzeige so zu lassen und z.B. 5 Sekunden runter zählen lassen?  
      
    Ich nutze den Raspi 3 Model B.  
      
    Grüße Gregor
    
    26\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Gregor,  
        das ist schwierig, da es so auch zu anderen blöden Phänomen kommen, dass das Bild gemacht wird, während er noch bei 1 oder 2 steht, weils diesmal schneller geklappt hat. Das nach dem Cheese es 2 Sekunden dauert ist aber echt seltsam, ist die Wlan Verbindung zwischen Tablet und Raspberry evtl. langsam, dass der Ajax Request so lange in der Luft in der Luft hängt?
        
        28\. Jun 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
            
            Gregor
            
            Hi Andre,  
            Bei meiner Box habe ich ein 7" Touch Display direkt am PI angeschlossen worüber bedient wird.  
            Wenn ich die 5D nehme, dann löst er direkt nach dem der Countdown abgelaufen ist aus. Die 1300D welche ich extra für die Box abgeschaffen hatte, macht diese "Probleme". Hab schon mehrere USB Kabel probiert aber keinerlei Aussicht auf Besserung  
              
            
            30\. Jun 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                
                Gregor
                
                Nachtrag:  
                  
                Wenn es möglich ist, dann würde ich es dennoch so einrichten wollen, da die Leute sich meistens nach dem "Cheese" schon wieder bewegen und das Foto dann "nichts wird".  
                  
                werde den PI nochmal neu aufsetzten auf einer anderen SD Karte, vielleicht habe ich ja auch irgendwas "falsch" gemacht, aber bei anderen Kameras geht es ja scheinbar instand
                
                05\. Jul 2017 [Antworten](#)
                
        
        *   ![](https://www.gravatar.com/avatar/6d9d62b8392cd10e17e34c0825395b53?s=75&d=mm&r=g)
            
            Malte
            
            Moin Andre,  
              
            ich habe das gleiche Problem. Ich habe den Eindruck, die Kamera (in meinem Fall Eos 600D) bekommt rechtzeitig den Befehl braucht aber einen Moment (1-2 Sekunden) bis sie fokussiert hat und dann auslöst.  
            Hast du eine Idee wie man das Auslösen nach ZEIT-1 starten könnte, damit die Leute auch im richtigen Moment posieren?  
              
            beste Grüße  
            Malte
            
            29\. Mar 2019 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/e0d4e50e6fb354e28da36d9cac939189?s=75&d=mm&r=g)
    
    Michael
    
    Hallo zusammen,  
      
    oben gab es schon einige Fragen bezüglich der Dateinamen. Leider habe ich es auch noch nicht hinbekommen. Ich will einfach nur Hochzeit-1, Hochzeit-2, usw. haben.  
      
    Bin leider neu und habe nicht viel Ahnung.. aber sollten ja nur ein paar Zeilen Code sein. Kann mir da jemand weiterhelfen?  
      
    Viele Grüße und Danke  
    Michael
    
    25\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michael, das ist recht einfach. In der takePic.php gibt es die Zeile:  
        $file = md5(time()).'.jpg';  
          
        Das erzeugt einen kryptischen Namen. Wenn du jetzt Hochzeit-X haben willst, einfach folgendes schreiben:  
          
        $file = 'Hochzeit-'.count((int)$images) + 1.'jpg';  
        count($images +1) zählt die aktuell gemachten Bilder und setzt die Zahl um 1 hoch. Also das erste Bild kriegt 0 + 1 = 1. Das zweite 1 + 1 und so weiter.  
        Viele Grüße  
        André
        
        25\. Jun 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/12c349cbf9bd6775bb61c0ed0ff73dc6?s=75&d=mm&r=g)
            
            Michael
            
            Hallo Andre, danke für die schnelle Antwort.  
            Leider klappt es immer noch nicht...  
            Ich brauche doch eine neue Variable, also: $images = 0;  
              
            Wenn ich dann den Code von dir nehme, klappt zwar die Dateierstellung, aber das mit dem hochzählen funktioniert nicht. Kannst du deinen Code nochmal überprüfen? Ich glaube es könnte sich auch ein Zeichendreher engeschlichen haben. Von selbst komm ich aber nicht drauf..  
              
            Danke und Viele Grüße  
              
            Tobias
            
            26\. Jun 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/8b3e061c813637fc22b74f3d9043285d?s=75&d=mm&r=g)
                
                Christian
                
                Also ich habe einfach Datum und Uhrzeit genommen:  
                  
                date\_default\_timezone\_set("Europe/Berlin");  
                $timestamp = time();  
                $datum = date("Ymd",$timestamp);  
                $zeit = date("His",$timestamp);  
                $file = 'Hochzeit\_'.$datum.$zeit.'.jpg';  
                  
                Das ergibt dann z.B. Hochzeit\_201706261441.jpg. Das lässt sich auch gut sortieren.
                
                26\. Jun 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                    
                    Gregor
                    
                    klappt wunderbar.  
                    Besten dank :-)
                    
                    27\. Jun 2017 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/88e819fe776de732a30f49b88a67aa4d?s=75&d=mm&r=g)
                    
                    Michael
                    
                    Das funktioniert zwar super doch löst mein Problem nicht...  
                    Ich habe eine ander Gallerie als Andre verwendet und diese lässt sich entweder per Zeit oder per Dateiname sortieren.  
                      
                    Da mein Raspberry aber auf den Veranstaltungen keine Internetverbindung hat, funktioniert die Zeitanzeige nicht. So passiert es, dass nach jedem mal ausstecken und neu einstecken während der Veranstaltung, alle meine Bilder durcheinander angezeigt werden, da sich die Zeiten wieder verändert haben...
                    
                    27\. Jun 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                        
                        Andre Rinas
                        
                        Hallo Michael, ja wieso geht denn mein Vorschlag nicht? Hast du es ausprobiert? Durch das require('db.php') hast du die Variable $images in der takePic.php die ein Array mit den Bildern beinhaltet aus der data.txt. Also gibt ein count($images) die Anzahl der derzeitigen Bilder zurück. Und da du gerade eins machst musst du diese Anzahl plus 1 setzen und dann an den String anhängen.  
                          
                        Grüße  
                        André
                        
                        28\. Jun 2017 [Antworten](#)
                        
        
        *   ![](https://www.gravatar.com/avatar/fcc29d258f5c3aa212b1f346d3c1ebfc?s=75&d=mm&r=g)
            
            Elias
            
            Hallo Andre,  
            sobald ich die Zeile $file = md5(time()).'.jpg'; in $file = 'Hochzeit-'.count((int)$images) + 1.'jpg'; ändere, erhalte ich nach dem Countdown einen Fehler und es wird kein Foto erstellt. Hast du eine Idee, woran das liegen könnte?  
            PS: Ich finde dein Konzept für die Fotobox sehr ansprechend, habe aber leider keinerlei Erfahrung mit PHP...  
              
            Grüße, Elias
            
            01\. Jul 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/84c2fccbf895f36646a992a3eb36f322?s=75&d=mm&r=g)
    
    Michi
    
    Hallo,  
    danke erstmal. Ist echt ein Super Projekt von dir. Ist es möglich die Bilder mit einem Wasserzeichen zu versehen?
    
    23\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michi, das geht auch, wenn du in der takePic.php ein bisschen herumprobierst. Zum Beispiel so etwas hier:  
        http://php.net/manual/de/image.examples.merged-watermark.php  
          
        Grüße
        
        23\. Jun 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/84c2fccbf895f36646a992a3eb36f322?s=75&d=mm&r=g)
            
            Michi
            
            Okay dann werde ich mal etwas versuchen. Danke für die schnelle Antwort.
            
            24\. Jun 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/b7327fa043b09c936e0f714c0b51fa09?s=75&d=mm&r=g)
    
    John
    
    Nachtrag zu meinem Problem mit dem Ipad. Wenn ich direkt auf Photoswipe.com gehe kann ich dort alle Bilder öffnen. Wenn ich auf meine Photobooth SEite gehe leider keins.  
    Gebe ich in der URL direkt "#&gid=1&pid=2" ein erscheint nur ein leeres weißes Fenster mit den Controller Funktionionen wie "QR Code" und "schließen". Ich habe jetzt auch mal sämtliche dateien von Photoswipe geupdatet und überprüft. Ich bin wirklich ein wenig Ratlos warum das nicht geht.
    
    18\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo John, das finde ich auch ziemlich merkwürdig. Hast du denn sehr große Bilder? Also von den Pixeln? Wenn ja dann könnte das wirklich der Grund sein. Haben ein iPad 3 und das friert auch schon öfter mal auf Webseiten mit großen Header-Bildern ein, da kann ich es mir gut bei einem 1er iPad vorstellen.
        
        23\. Jun 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b7327fa043b09c936e0f714c0b51fa09?s=75&d=mm&r=g)
    
    John
    
    Hallo, Deine Anleitung funktioniert einwandfrei! Alles läuft geschmeidig wie es soll. Ich habe leider nur ein großes Problem. Ich nutze als Tablet mein altes IPad (1. Gen) und kann dort nicht auf die Thumbnails klicken. Wenn ich eins auswähle kommt kein Bild bzw. der Browser ist wie "eingefroren". Ernst nach dem Neuladen der Seite reagiert Sie wieder. Könnte das mit der größe der Bilder zusammenhängen? Und als nächstes habe ich immer ein leeres Thumbnail in der Gallery. Selbst wenn ich die Data.txt komplett leere erscheint dort ein leeres Thumb. Woran könnte das liegen?  
    P.S. Ich habe auf dem Ipad mehrere Browser durchprobiert. Keiner könnte die Bilder öffnen. Am Smartphone oder PC läuft alles reibungslos.  
    Danke schonmal für die Mühe!  
    MfG
    
    18\. Jun 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/6c9771942886894e0dc0aa0e230cfd8d?s=75&d=mm&r=g)
    
    Steffen
    
    Hallo zusammen,  
      
    vielen Dank Andreas für die tolle Photobooth. Leider bekomme ich diese irgendwie nicht zum laufen.  
    Ich gehe nach der Anleitung von dir vor, installiere alles, gebe dem User Pi die Ordner frei, füge den Nachtrag von dir hinzu aber die Kamera reagiert nicht.  
    Nach dem betätigen des Buttons zählt die Zeit herunter und dann erscheint die Meldung "Das etwas schief gelaufen ist". Es scheint mir so als ob meine Kamera nicht erkannt wird. Ich verwende eine alte Canon EOS 20D wobei es auch mit meiner 5D III nicht funktioniert. Also am alter der Kamera kann es nicht liegen. Sehe ich irgendwie / irgendwo ob die Kamera auch vom Raspi erkannt wird?  
      
    Wäre super wenn mir jemand helfen kann
    
    15\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Steffen, du kannst in der Konsole/Terminal einfach mal gphoto ausführen. In der takePic.php kannst du sehen, wie son Aufruf funktioniert.  
          
        Grüße Andre
        
        15\. Jun 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/ac0f526389b4c414553d08db4f01578e?s=75&d=mm&r=g)
            
            Steffen
            
            So funktioniert alles und die Kamera löst aus. Woran kann es denn dann liegen
            
            15\. Jun 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Dann muss es an den Rechten liegen, dass dein Benutzer gphoto nicht ausführen darf. In den Kommentaren und oben sollte stehen wie du das einstellst.
                
                17\. Jun 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/8b3e061c813637fc22b74f3d9043285d?s=75&d=mm&r=g)
    
    Christian
    
    Hallo Andre,  
    super Anleitung und super Idee. Ich werde die Fotobox defintiv für meinen Polterabend und meine Hochzeit nachbauen.  
    Eine Frage habe ich noch. Was für eine Spiegelreflexkamera nutzt du? Du scheinst die Kamera nur über den Akku zu nutzen, reicht das für einen Abend oder tauscht du zwischendurch mal den Akku?  
    Gruß Christian  
    P.S.: Wenn ich die Box fertig habe melde ich mich nochmal.
    
    06\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre](https://www.andrerinas.de)
        
        Hallo Christian,  
        ich habe eine EOS 550D von Canon. Ich hatte aber ein Netzadapter an der Kamera, den ich mir dafür extra gekauft hatte. Hatte so 15€ gekostet. Würde ich auch empfehlen. Ansonsten ist Akku wechseln auch nicht so das Problem.  
        Grüße André
        
        06\. Jun 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/13fc415ba0b7a4b4c1bc94aad6019197?s=75&d=mm&r=g)
            
            Jannis
            
            Hallo Andre,  
              
            vielleicht wärest du nach deiner ganzen tollen Hilfe so nett und könntest mir auch noch mit einem Rat zur Seite stehen.  
            Meine PhotoBooth funktioniert wie sie soll. Allerdings möchte ich gerne einen Button haben, mit welchem die Gäste das Foto direkt auf einem Sublimationsdrucker ausdrucken können. Habe den Drucker bereits unter Linux (Raspi) eingerichtet und kann manuell damit Fotos drucken.  
            Ich hätte "einfach" einen Button anstelle "Galerie" oder "QR-Code" für das Drucken. Leider habe ich nur grundlegende Kenntnisse im bereich HTML und CSS und bin vollkommen hilflos.  
            Grüße  
            Jannis
            
            08\. Jun 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/13fc415ba0b7a4b4c1bc94aad6019197?s=75&d=mm&r=g)
    
    Jannis
    
    Hat jemand einen Ansatz, wie ich über einen Button das Foto auf meinem Drucker (USB) ausdrucken kann?
    
    04\. Jun 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e683ac09fccd340b7c7840d7caed986b?s=75&d=mm&r=g)
    
    Jonas
    
    Hallo Andre,  
    leider bekomme ich es nicht hin, die Dateinamen in ein schönes Format zu bringen... also z.b. HochzeitXY-1.jpg usw.  
      
    Kannst du mir da helfen?
    
    24\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jonas, in der takePic.php werden die Bilder gespeichert. Der Dateiname wird oben erzeugt. Dort könntest du den Namen anpassen. Um keine doppelten Namen zu bekommen, könntest du die Anzahl der Bilder + 1 hinten anhängen. Probiere es mal aus, sonst frag nochmal ;)  
          
        Grüße Andre
        
        24\. May 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/7f38382783d97662a8018d87afda0cac?s=75&d=mm&r=g)
            
            Ela
            
            Hallo Andre,  
            vielen Dank für diese tolle Anleitung.  
            Leider bekomme ich es auch nicht hin, den Dateinamen zu ändern.  
            Vielleicht kannst du mir das nochmal kurz erklären.  
            Danke.  
            LG Ela
            
            08\. Jun 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/7f38382783d97662a8018d87afda0cac?s=75&d=mm&r=g)
                
                Ela
                
                Ich bin es noch mal. Ich habe es soweit hinbekommen, den Namen zu ändern. Allerdings verstehe ich deinen Satz „Um keine doppelten Namen zu bekommen, könntest du die Anzahl der Bilder + 1 hinten anhängen.“ nicht.  
                Ich bin leider nicht so versiert im Programmieren. Also wenn mir das nochmal jemand erklären könnte, wäre ich euch sehr dankbar. Ich will die Box gerne nächste Woche zum Polterabend meiner Tochter in Betrieb nehmen. Und die Bilder sollten dann den Namen: Polterabend001.jpg, Polterabend002.jpg u.s.w. haben. Vielen lieben Dank schon mal.  
                LG Ela
                
                16\. Jun 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/9588e7c9c06c734225b758b72e6aec91?s=75&d=mm&r=g)
    
    Tobias
    
    Hallo,  
      
    ist es möglich die Gallerie auf eine komplett seperate Seite zu legen. Also quasi?  
    IPdesRaspberrys/gallery.php  
      
    Ich will damit bezwecken, dass sich die Benutzer mit ihren eigenen Handys mit dem Wlan verbinden können und die Bilder runterladen können.  
      
    Danke!
    
    18\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tobias, klar ist das möglich, dir sind da keine Grenzen gesetzt. Allerdings musst du dafür etwas Code können, da du Code aus der index.php zusammensetzen musst, um nur die Galerie rauszulösen. Kannst du ja mal ausprobieren. Leg dir ne gallery.php an, kopier dort die ersten Zeilen aus der Index, sowie irgendwo mittig den Galerie Teil. Dann noch bestimmt Javascript und Css anpassen. Ist also etwas Arbeit und Know How muss da sein. Grüße Andre
        
        18\. May 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b24c431f5b6041aa4a208b9bc5ac4d4f?s=75&d=mm&r=g)
    
    Christian
    
    Hey ich bin hier immer noch am hin und herprobieren und bekomme es einfach nicht hin.  
    Ich habe Raspian GNU/Linux (8.0) jessie installiert. Bin nach der obigen Anleitung vorgegangen. Rechte habe ich auch vergeben. Allerdings sieht es so aus, dass das Bild zwar gemacht wird und auch abgespeichert wird allerdings wird das thumbnail nicht generiert und auch nicht in die data.txt eingetragen.  
    Wo könnte mein Problem denn liegen?  
    Alternativ wäre ich auch dankbar, wenn mir jemand ein abbild geben könnte welches ich nur noch einlegen brauche.  
      
    Danke im voraus  
    Grüße  
    Christian
    
    16\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/46fc731770352a9638ad0dfdaaa372a9?s=75&d=mm&r=g)
        
        Christian
        
        Hat sich geklärt lag am string vergleich
        
        17\. May 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo Christian, magst du ausführen, was genau der Fehler war? Das hilft vielleicht auch anderen. Grüße
            
            17\. May 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
    
    Tobias
    
    Hallo zusammen!  
      
    Meine Box hatte nun auch den ersten Einsatz :)  
    Hierbei sind mir noch zwei kleine dinge aufgefallen:  
      
    1) Manchmal scheint der "Home-Button" nach dem Foto-Machen bei mir nicht direkt zu funktionieren.... Wenn man drauf klickt verschwinden die unteren Schaltflächen (Galerie, QR-Code und Neues Bild machen) Aber zum Start-Bildschirm kommt man erst bei merfachen betätigen. Hat das zufällig noch jemand beobachtet?..  
      
    2) Punkt zwei ist die Link zur Galerie, unmittelbar nach einem Foto machen. Hier habe ich irgendwie eine andere Sortierung als wenn ich über den Link vom "Home-Screen" zur Galerie wechsle.... Das neuste Bild taucht ganz unten auf. Alle anderen Bilder sind aber von oben nach unten - neu nach alt sortiert. Ich habe um die Sortierung von neu nach alt zu erhalten die Zeile 12 in der index.php von: $images = $data;  
    auf $images = array\_reverse($data); (Dank der Unterstützung von Andre :) ) Nur scheint das nicht komplett zu greifen...  
      
    Zu guter letzt noch ein Tipp von mir für diejenigen, die auf der Feier immer genau wissen wollen, wie es dem Raspberry so geht, wieviel Speicher noch vorhanden ist, bzw. wie Warm die CPU aktuell ist:  
      
    https://pi-control.de/install/  
      
    pi-control ist eine einfach einzurichtende Webseite, welche all diese Informationen schön (z.B. auf dem Handy) darstellt!  
      
    Grüße, Tobias
    
    15\. May 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/69ac6d44d4af22a13f1f5d25a8526ed4?s=75&d=mm&r=g)
    
    [Martin](www.trickytrails.com)
    
    Hallo alle,  
    Ich habe meinen Wedding Booth um einen Hardware Button erweitert. Das ist viel einfacher als viele denken.  
      
    Voraussetzungen:  
    ich verwende KEIN Tablet, sondern einen Touchscreen direkt am Raspberry. Wenn du ein Tablet zur Anzeige verwendest (ist mir einfach eine Fehlerquelle zuviel), kannst du eine meiner anderen Antworten in den Kommentaren suchen. Da habe ich schon etwas dazu gepostet. Diese Variante funktioniert dann NICHT.  
      
    Was wird benötigt?  
    0\. (essentiell!) Bildschirm direkt am Raspberry, der für den wedding booth verwendet wird.  
    1\. Irgendein Taster (zb Adafruit arcade button....einfach suchen)  
    2\. Kabel vom Taster zu GPIO und GND  
      
    Ich verwende für die Realisierung Python und dazu uinput. uinput kann Tastaturbefehle schicken und so in Chrome einen Link aufrufen, wenn du in der takepic.php eine tastenkombination dafür definierst.  
      
    1\. Shortcut für takepic.php erstellen.  
    ändere einfach diese Zeile in der index.php und füge das accesskey attribut hinzu.  
      
      
      
    Nun ist es möglich takepic.php über alt+p aufzurufen. Einfach mit einem Keyboard testen....  
      
    2\. Den Taster an einen GPIO Pin hängen (ich verwende Pin 17).  
      
    folgendes Script in /home/pi kopieren und button.py benennen.  
      
    #sends alt+p to take a new picture  
    import RPi.GPIO as GPIO  
    import time  
    import os  
    import uinput  
    GPIO.setmode(GPIO.BCM)  
    GPIO.setup(17, GPIO.IN, pull\_up\_down=GPIO.PUD\_UP)  
      
    while True:  
    input\_state = GPIO.input(17)  
    if input\_state == False:  
    #print('Button Pressed') <- for debugging only  
    with uinput.Device(\[uinput.KEY\_LEFTALT, uinput.KEY\_P\]) as device:  
    time.sleep(0.1)  
    device.emit\_combo(\[uinput.KEY\_LEFTALT, uinput.KEY\_P\])  
    time.sleep(20)  
      
    Mit diesem Script wird beim Betätigen des Tasters auf GPIO17 die tastenkombination alt+p von python generiert, als ob du sie auf der Tastatur tippen würdest. Da dein Browser im Vordergrund läuft (am Touchscreen des Pi), wird der link takepic.php aufgerufen. time.sleep(20) garantiert, dass der Button nun 20 Sekunden lang nicht gedrückt werden kann (bzw dabe nichts passiert).  
      
    Um das Script beim Systemstart zu laden und im Hintergrund laufen zu lassen, einfach folgenden Cronjob hinzufügen:  
    sudo crontab -e  
    @reboot python /home/pi/button.py &  
      
    Ich hoffe ich habe jetzt nichts vergessen. Das funktioniert wie gesagt nur, wenn ihr alles direkt am Raspi laufen lässt und auch die Anzeige selbst vom Raspi gemacht wird. Die 20 Sekunden Wartezeit habe ich gewählt weil:  
    +5 sek countdown  
    +7sek Ladezeit des Fotos (oft mehr...)  
    +5 sek  
    das sollte mit eurer timetolive Variable halbwegs zusammen passen....  
      
      
      
    
    13\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/13fc415ba0b7a4b4c1bc94aad6019197?s=75&d=mm&r=g)
        
        Jannis
        
        Hey Martin, ich habe mir einfache eine 6 Euro Bluetooth Maus gekauft und die Platine ausgebaut und an den Taster für die mittlere Maustaste einen Kabel angelötet die zum Grobhandtaster führen. Die Platine in die Box vom Grobhandtaster und den Bluetooth-Dongel in den RPi. Und schon ging es :)  
        Natürlich musste ich in der Takepic noch als "Belegung" zum Auslösen die Taste definieren.  
          
        Allerdings finde ich deine "Zwangswartezeit" super!
        
        16\. May 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/61073b20902534cd820bcf967b9a54e0?s=75&d=mm&r=g)
            
            Elias
            
            Hallo Jannis,  
            Kannst du mir erklären, wie ich die Maus passend in das Skript einbinde? Ich habe leider keine Ahnung von PHP...
            
            08\. Jul 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/9df03bef28388834dd437f3d3a8f29fb?s=75&d=mm&r=g)
            
            Heinz
            
            Guten Tag Jannis,  
            mich würde auch interessieren wie das mit der Maus funktioniert. Möchten Sie nicht den Quellcode mitteilen?
            
            22\. Aug 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/32e5ca2b32aeb154a23d79b0e8d59949?s=75&d=mm&r=g)
            
            Ediz Schon
            
            Hi Jannis,  
            könntest Du Deine Lösung näher beschreiben?  
            zb. die Zeilen in der takepic wie Du die Maustaste abfängst.  
            Wäre toll wenn Du das mit uns teilen würdest.  
            Danke und Grüsse  
            Ediz
            
            09\. Jul 2018 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/f042d2b7ae0fd61ba23fc9d937c6a3f4?s=75&d=mm&r=g)
        
        Christian
        
        Hallo Martin  
          
        entschuldige evtl. die blöde Frage, aber ich als blutiger Anfänger möchte auch gerne die Fotobox mit einem Taster auslösen. Leider scheitere ich bereits im ersten Schritt deiner Anleitung:  
          
        1\. Shortcut für takepic.php erstellen.  
        ändere einfach diese Zeile in der index.php und füge das accesskey attribut hinzu  
          
        wie meinst du das genau, welche Zeile muss ich wie genau ändern?  
          
        Danke für dein feedback
        
        07\. Feb 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b24c431f5b6041aa4a208b9bc5ac4d4f?s=75&d=mm&r=g)
    
    Christian
    
    moin moin,  
    ich habe das ganze mit großer freude nachgebaut allerdings hängt es bei mir an der stelle wo die thumbnails erstellt werden sollen ... da tut sich leider rein gar nichts ...  
    rechte habe ich bereits vergeben das brachte leider auch nicht die lösung meines Problems. avconv ist auch installiert. hat jemand vilt noch eine idee wäre für jeden vorschlag dankbar.  
      
    von mir auch noch ein dickes Dankeschön fürs zur verfügung stellen.
    
    09\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Christian, ist der Ordner thumbd vorhanden und hat auch die nötigen Schreibrechte?  
          
        Viele Grüße Andre
        
        10\. May 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/b24c431f5b6041aa4a208b9bc5ac4d4f?s=75&d=mm&r=g)
            
            Christian
            
            Ja ordner ist da rechte hat er auch . und die data.txt bleibt auch nach wie vor leer ... woran könnte es denn liegen ... ??
            
            13\. May 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/7a6f9e47b2b9e52c521418d54a79c343?s=75&d=mm&r=g)
                
                Daniel
                
                Hallo,  
                ich habe auch noch das Problem mit den Thumbnails. Ich hatte die ganzen Kommentare durchgelesen und die Vergabe der Rechte durchprobiert. Anfangs fehlten mir auch der Ordner und data.txt. Nach Vergabe der Rechte wurden aber beide automatisch erstellt. In data.txt werden die Bildeinträge auch gesichert. Jedoch werden keine Bilder in thumbs gespeichert. avconv ist installiert und wird in den errorlogs aufgeführt. Habt ihr noch eine Idee?
                
                23\. May 2017 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/7a6f9e47b2b9e52c521418d54a79c343?s=75&d=mm&r=g)
                
                Daniel
                
                Ich konnte mein Problem gerade lösen.  
                Ich konnte trotz vorheriger Vergabe von Rechten keine Bilder in der Galerie sehen. Ein genauer Blick ins errorlog hat dann die Lösung gebracht. Dort stand "\[mjpeg @ 0x87bd40\] huffman table decode error". Der Fehler war, dass in meiner EOS noch das RAW-Format eingestellt war. Mit der Umstellung auf jpg geht nun alles.  
                Danke Andre für deine Umsetzung der coolen Photobox. :)
                
                23\. May 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/13fc415ba0b7a4b4c1bc94aad6019197?s=75&d=mm&r=g)
    
    Jannis
    
    Habe vollkommen vergessen auch noch DANKE zu sagen. Also DANKE!  
      
    Welche Möglichkeit habe ich, über ein Button ein gemachtes Foto auf meinem Selphy auszudrucken?
    
    19\. Apr 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a1d12d284ae7a594c589b3212e5fcbb7?s=75&d=mm&r=g)
    
    Flo Schneider
    
    Hallo André,  
      
    Vielen Dank für diese großartige Lösung. Ich bin seit einigen Tagen am Testen, aber ein Problem mit Photoswipe bekomme ich nicht gelöst:  
    Bei Ausahl eines Bildes aus der Galerie werden zwar die thumbs immer korrekt auf Browsergröße gezoomt, aber das eigentliche Bild wird ca 150% zu groß geladen (auf allen Devices und Browsern). Ich kenne mich nicht gut genug mit Javascript aus und finde nicht, wie der Zoom gesetzt wird. Hat sonst niemand dieses Problem? Für einen Tipp wäre ich dankbar.  
      
    Ein kleines Addon habe ich noch hinzugefügt: An meinem Raspberri Pi hängt ein Bildschirm, der eine zufällige Slideshow der bisher geschossenen Bilder anzeigt. Das soll die Gäste zusätzlich ermutigen ein paar Fotos zu schießen. Dafür habe ich einfach eine slideshow.php geschrieben, die man im Browser öffnen kann. Ein Bildbetrachtungsprogramm mit Zufallswiedergabe würde es aber auch tun.  
      
    Viele Grüße  
    Flo
    
    17\. Apr 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/13fc415ba0b7a4b4c1bc94aad6019197?s=75&d=mm&r=g)
        
        Jannis
        
        Hey. Die Diashow hört sich super an. Könntest du sie auch zur Verfügung stellen? Wäre super!
        
        17\. Apr 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Flo,  
        das hört sich nach dem Bug an, den schon viele hatten, wenn die Bilder, die die Kamera schließt nicht der Größe entspricht, die Photoswipe gerne hätte. Du könntest einmal in der index.php in Zeile 75  
        <a href="https://www.andrerinas.de//images/'.$image.'" data-size="1920x1280" rtekeep="1">  
        auf die Größe einstellen, die deine Kamera ausliefert. Vielleicht ist dir damit geholfen.  
        Die Idee mit der Slideshow finde ich auch schön. Teile gerne deinen Code, oder mach einen Pull Request bei github, dann kann ich das direkt ins Projekt mit einfließen lassen.
        
        18\. Apr 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/9588e7c9c06c734225b758b72e6aec91?s=75&d=mm&r=g)
    
    Tobias
    
    Hallo Andre,  
      
    Danke für die top Anleitung klappt alles super!  
      
    Nur bekomme ich es einfach nicht hin das interne Wlan meines Raspberry Pi 3 einzurichten. Bin ein Raspberry Pi Neuling und habe schon 5 verschiedene Tutorials durchgemacht, aber ohne Erfolg. Kannst du mir da ein gutes Tutorial empfehlen?  
      
    Grüße  
    Tobias
    
    07\. Apr 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
        
        Frank G.
        
        Hallo Tobias,  
        ich finde die Anleitung, die ich benutzt habe, leider gerade nicht mehr, schaue die Tage aber noch einmal danach. Aber Tipp: Du kannst auch Andres Photobooth auf einem Pi mit OSMC in der aktuellen Version installieren und anschließend über KODI/OSMC auf Access Point über das Menü umstellen. Standard-User ist aber nicht pi, sonder osmc (und das Passwort auch)...  
        Gruß Frank
        
        13\. Apr 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4a5b487d47bb3242b1534ffcbeb5045c?s=75&d=mm&r=g)
    
    Rene
    
    Hallo Andre,  
    super Anleitung. Habe mir für dieses Jahr auch den bau einer geschlossenen Box vorgenommen mit dem Rasberry Pi :)  
    Da werde ich deine Erfahrung direkt mal einfließen lassen.  
      
    Warum hast du denn ein Tablet genommen? Wäre es nicht geschickter direkt ein Touch Display an den Rasberry zu hängen?  
      
    LG Rene
    
    30\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Rene,  
        ich habe die Teile genommen, die ich Zuhause hatte und dachte mir, dass der Raspberry mit der Bildmanipulation etc schon genug zu tun hat und nicht noch ein komplettes Betriebssystem mit Ausgabe booten sollte. Dachte mir, dass es so etwas schneller gehen könnte. Aber der eigentlich Grund war, dass ich keinen Bildschirm kaufen wollte.  
        Grüße
        
        31\. Mar 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/58d2715189fabc436312421b9670b151?s=75&d=mm&r=g)
    
    Sebastian
    
    Hallo,  
    ich stell mich total blöd an.  
      
    Wie hast du das eigene WLAN für den rPi angelegt?
    
    29\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/1a5586269535ec77b47cd1815f14cfe7?s=75&d=mm&r=g)
        
        Timo
        
        Andre hat es über einen separaten Router gelöst.  
          
        Ich habe das interne WiFi vom rPi als AccessPoint eingerichtet.  
        Bin in dem Punkt auch nur Laie.  
        Suche mal im Netz nach "raspberry pi als accesspoint".  
        So bin ich dann auch auf meine Lösung gestoßen.  
          
        Link bitte entfernen, falls nicht erlaubt ist:  
        https://www.elektronik-kompendium.de/sites/raspberry-pi/2002171.htm  
          
        Voraussetzung ist halt, dass dein rPi WiFi besitzt (z.B. der Pi Zero W, wie in meinem Fall)  
          
        Gruß  
        Timo
        
        12\. Apr 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/173414b111096eb5cac0e6d884a5e41c?s=75&d=mm&r=g)
    
    Tobias
    
    Hallo zusammen!  
      
    Ich stecke gerade in den letzten Zügen, die ganze Technik in einer Kiste unter zu bringen :).  
    Was ich mich noch gefragt habe:  
      
    Gibt es die Möglichkeit die Bilder in der Galerie andersherum zu sortieren? Aktuell ist das älteste Bild bei mir das erste.  
    Ich könnte mir vorstellen, dass viele nach ihrer Fotosession nochmal die Bilder anschauen wollen.  
    Wenn bis dahin schon ein paar gemacht wurden, müsste man immer erst bis an das Ende scrollen..  
      
    Danke für eure Antworten!  
      
    Lg Tobias
    
    26\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tobias, das geht relativ einfach. in der index.php köntnest du einfach in Zeile 12:  
          
        $images = $data;  
        zu $images = array\_reverse($data);  
          
        machen.  
          
        Grüße André
        
        27\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
            
            Tobias
            
            Hallo Andre,  
              
            Danke! das hat schonmal geklappt!  
            Nun ist mir noch aufgefallen, dass wenn ich direkt nach dem Foto machen in die Galerie wechlse, dass dort die Reihenfolge der "alten" Bilder korrekt, nur das neue Bild ganz an das Ende gepackt wird. Könnte man hier das neue Bild auch ganz nach oben setzten?  
              
            Danke für deine Unterstützung!  
              
            Lg Tobias
            
            10\. May 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Tobias,  
                dafür musst du ans Javascript und zwar an die core.js im Ordner resources/js. Dort dann die Funktion public.addImage suchen. In der Funktion wird das Bild der Galerie hinzugefügt. Am Ende steht ein appendTo(... das bedeutet häng es unten an. Da du es jetzt oben haben willst ändere appendTo to prependTo. Das wars auch schon.  
                Grüße André
                
                11\. May 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
                    
                    Tobias
                    
                    Super! Danke! Frage zwei von meinem Post vorhin wäre somit beantwortet!..... Ich weis auch nicht wo mir der Kopf vor der Hochzeit stand...... :)  
                      
                    Gruß,  
                    Tobias
                    
                    15\. May 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                        
                        Andre Rinas
                        
                        Du hast geheiratet? Dann herzlichen Glückwunsch :) 
                        
                        16\. May 2017 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/1a5586269535ec77b47cd1815f14cfe7?s=75&d=mm&r=g)
    
    Timo
    
    Hallo alle zusammen!  
      
    Erst mal ein dickes Dankeschön an Andre für die tolle Arbeit.  
    Ich habe jetzt noch nicht danach gesucht, aber gibt es einen Spenden-Button?  
    Kann doch nicht angehen, dass ein solches Projekt nicht honoriert wird.  
      
    Hier noch fix mein Setup:  
    Raspberry Pi Zero W  
    Sony SLT-A58  
    Huawei MediaPad (7 oder 8 Zoll)  
      
    Funktioniert super, bis auf die Anzeige am Tablet.  
    Bei der Gallery hakt es immer wieder.  
    Thumbs werden korrekt dargestellt, aber sobald ich ein Bild öffne passiert nicht wirklich was. Am PC klappts aber bestens, also liegt es vermutlich am Tablet.  
    Aber da ist eh mal ein System-Update fällig.  
      
    Vielen Dank für das großartige Projekt  
    Gruß  
    Timo
    
    21\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](http://www.andrerinas.de)
        
        Hallo Timo, danke für die nette Worte und freut mich, dass dir das Projekt gefällt. Wenn genug Interesse da ist und ich mal wieder Zeit habe, werde ich noch ein paar Kleinigkeiten und Features hinzufügen. Einen Spenden-Button habe ich mal oben eingebaut. Vielen Dank für die Idee ;)  
          
        Viele Grüße André
        
        22\. Mar 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/ae29bb59f014b22114d61a40cc5d6de2?s=75&d=mm&r=g)
        
        Jörn
        
        Ich habe das gleiche Problem mit dem öffnen der Bilder in der Galerie. Thumbs gehen aber öffnen nicht. Irgendeiner eine Idee?  
          
        Raspberry Pi 3 B  
        Nikon D7000  
        IPad 2  
          
        Vielen Dank!  
          
        Grüße  
        Jörn
        
        05\. Apr 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/1f12c9b8d3008274488bacbe5ca0c48c?s=75&d=mm&r=g)
            
            horuke
            
            scheinbar ist das ein Problem der PhotoSwipe Galerie.  
            Leider habe ich dafür auch noch keine Lösung gefunden.  
            Auf dem Android Tablet läuft es ohne Probleme :(  
            Das ist sehr Schade, da ich das Android nicht für die Box benutzen möchte.  
              
            Gibts da vielleicht ne andere Lösung?
            
            31\. Aug 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Ja man könnte einfach eine andere Lightbox entwickeln. Ich habe tatsächlich letztes Jahr eine geschrieben. Die könntest du einbauen. http://simplelightbox.com/  
                  
                Dafür müsstest du die simplelightbox.css und js in der index.php hinzufügen und in der core.js dann $('.images a').simpleLightbox() in die public.init funciton oben. Dort kannst du dann public.initPhotoSwipeFromDOM('#galimages'); löschen. Das könnte dann schon gehen.
                
                01\. Sep 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/1f12c9b8d3008274488bacbe5ca0c48c?s=75&d=mm&r=g)
                    
                    horuke
                    
                    Perfekte Lösung.  
                    Danke!  
                    Ich hab einfach eine eigene, sehr einfache Lightbox benutzt. Ohne große Effekte :)
                    
                    16\. Oct 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                        
                        Andre Rinas
                        
                        Super!
                        
                        17\. Oct 2017 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
    
    Frank G.
    
    Nochmal ich zum Thema Live-(Pre-)View - nur so eine Idee, auf die man vielleicht hier im Forum weiter aufbauen kann...:  
    Ich überlege zusätzlich zur DSLR in meine Photobooth eine PiCamera einzubauen, die mir dann (auf einen anderem Bildschirm als der mit der Photobooth-Weboberfläche) das Live-Bild vom Pi via HDMI ausgibt. Das funktioniert auch schon ganz gut (wenig Latenz). Ggf. ließe sich das Live-Bild ja auch im HTML-Code integrieren und via TCP/IP (netcast) an den im WLAN-verbundenen "Clienten" schicken. Dann dürfte es aber Probleme mit der Latenz geben...  
    Danke an Andre für das tolle Projekt und viele Grüße  
    Frank
    
    19\. Mar 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
    
    Frank G.
    
    Hallo Andre und Mitstreiter,  
    ich würde gerne den "Take Pic!" -Button zusätzlich zu Maus und Touch auch gerne mit einer Taste auf der Tastatur (Enter) auslösen können. Hintergrund ist, dass ich meinen alten PS3-Wireless-Buzzer (BUZZ! Wireless) gerne umfunktionieren möchte und ihn via "Flirc" als Auslöser verwenden möchte (stattdessen ginge auch jede beliebige IR-Fernbedienung). Ggf. ließen sich mit den anderen freien Tasten zum Beispiel auch die Gallerie öffnen oder schließen.  
    Habt ihr eine Idee? Ich vermute, dass bzgl. des "Take Pic"-Buttons der Code in der core.js (Zeile 176ff.) geändert werden muss.  
    Schöne Grüße  
    Frank
    
    19\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/69ac6d44d4af22a13f1f5d25a8526ed4?s=75&d=mm&r=g)
        
        [Martin](www.trickytrails.com)
        
        Hi,  
        schau dir das einmal an:  
        http://jsfiddle.net/yeyene/hd7zqafg/  
        LG,  
        Martin
        
        20\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
            
            Frank G.
            
            Vielen, lieben Dank, Martin - es funktioniert!!! Ich kann jetzt über mein Windows-Tablet mit FLIRC USB Dongle via Fernbedienung / Buzzer die Photobooth-Weboberfläche steuern.  
            Nachfogend als Beispiel der Code für den // Take Picture Button. Ich habe den Code direkt darunter ergänzt:  
            // .takePic when pressing Enter=13  
            $(document).ready(function()  
            {  
            $(document).bind('keypress', function(e) {  
            if(e.keyCode==13){  
            $('.takePic').trigger('click');  
            }  
            });  
            });  
            Theoretisch sollte das auch direkt über den RPi laufen, sofern ihr euren Pi mit einem externen Monitor in eure Fotobox einbaut. Wahrscheinlich dann auch nicht nur mit FLIRC USB Dongle, sondern auch mit den kleinen IR-Empfängern, die ihr an die GPIOs anschließt....  
              
            Schöne Grüße  
            Frank
            
            21\. Mar 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/69ac6d44d4af22a13f1f5d25a8526ed4?s=75&d=mm&r=g)
                
                [Martin Kaiser-Kaplaner](www.trickytrails.com)
                
                Hi Frank!  
                  
                Sehr cool! as genau hast du denn da verwendet als Buzzer? Ich denke ich mach mir das auch.... :)  
                  
                Ein Problem habe ich noch: Wenn das Bild gemacht wird, dauert es manchmal bis zu 20 Sekunden, bis das Bild am Monitor erscheint (direkter Bildschirm am Raspi). Das ist irgendwie etwas mühsam. Ich habe keine wirkliche Idee mehr, was ich optimieren könnte. ch habe die ganze Gallery, die QR Codes und und und schon raus geschmissen.
                
                27\. Mar 2017 [Antworten](#)
                
            
            *   ![](https://www.gravatar.com/avatar/3eb881f6744d3269b9f55ca1b69491e8?s=75&d=mm&r=g)
                
                Marius
                
                Hallo Frank,  
                wo genau hast du den Code ergänzt?  
                Bei mir sieht der Aufbau etwas anders aus:  
                Ich habe den Brwoser direkt auf dem RPi laufen und einen Touchscreen angeschlossen.  
                Ich würde nun gerne die Kamera sowohl über den Button, als auch über einen GPIO (für einen Fußtaster) auslösen.  
                Grüße Marius
                
                07\. Apr 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
                    
                    Frank G.
                    
                    Hallo Marius,  
                    ich habe den obigen Code direkt unterhalb dem Code für den "//Take Picture Button" in der core.js ergänzt.  
                    Ich glaube, die Position ist aber ziemlich egal. Du kannst ihn wahrscheinlich auch ganz ans Ende setzen...  
                    Dein Button bzw. Fußtaster muss Keyboard-Befehle ausgeben können. Bei Amazon gibt es ein paar Fußtaster, die das können. Du kannst dann die Enter-Taste über Windows mit dem mitgelieferten Programm einprogrammieren, damit der Fußtaster bei Betätigung eben "Enter" drückt. Wie man das über die GPIOs löst, weiß ich nicht.... Kannst ja mal berichten, würde mich auch interessieren... Wird dann über den Pi ebenfalls ein Keyboard emuliert?  
                    Wer Lust hat einen USB-Buzzer selbst zu bauen, sollte mal bei google "The Awesome Button" eingeben. Dann findet ihr ein tolles Tutorial von Matt Richardson. Hierfür benötigt ihr ein Adruino kompatibles Board namens "Teensy USB Development Board, Version 2.0" (ca. 20 €) und irgendeinen Button/Buzzer. Der Teensy wird dann vom Pi/Rechner als USB-Keyboard erkannt...  
                    Viele Grüße  
                    Frank
                    
                    13\. Apr 2017 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
    
    Tobi
    
    Hallo Matthias,  
      
    super Projekt! Die Hardware funktioniert bei mir auch schon, es fehlt nur noch die Kiste :).... Noch eine Frage zur Kamera/zum fokussieren.  
    Ich verwende eine Canon eos 500d.  
    Hat deine Kamera Probleme beim fokussieren? Da du ja quasi nur das Objektiv rausschauen lässt und die Infrarot-leuchte mit der Kiste verdeckst...  
      
    Oder hast du den Fokus fest eingestellt?..  
      
    Danke für deine Antwort!  
    Nochmals, Super Projekt!!  
      
    Gruß, Tobias
    
    16\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Tobi,  
        ich heiße zwar Andre, aber egal :D Meine Kamera hatte beim fokussieren nie Probleme, trotz der Verdeckung. Selbst eingestellt habe ich den Fokus nicht. Meine Kamera hat allerdings mit einem Blitz sich fokussiert. Vielleicht musst du den Fokus bei deiner Kamera per Hand einstellen. Probiere es einfach mal aus :)  
        Grüße André
        
        16\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/23d3e07361ca4ef3764bb34b1c51daa9?s=75&d=mm&r=g)
            
            Tobias
            
            Hi Andre,  
              
            Sorry... Jau.. Mir ist es direkt nach dem Absenden schon aufgefallen.... :-/...  
            Ich probiere aus, :)  
            Danke für die Antwort!.  
              
            Gruß, Tobias
            
            16\. Mar 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/69ac6d44d4af22a13f1f5d25a8526ed4?s=75&d=mm&r=g)
    
    [Martin](www.trickytrails.com)
    
    Hallo :)  
      
    Danke noch einmal! Super Projekt!  
    Ich habe ein paar kleine Änderungen gemacht, die über die Optik der GUI hinausgehen und teile sie mit euch:  
    1\. ich habe die db.php deaktiviert.  
    Es hat sich herausgestellt, dass mein Raspi 3 Model B mit sehr schneller Speicherkarte dadurch überfordert war. Nachdem einige Bilder gemacht wurden, wurde die Kamera oft erst rund 5 Sekunden nach dem Countdown ausgelöst. Das hat mein Problem gelöst! Zusätzlich habe ich die Features, Galerie und QR Code alle im Code deaktiviert (das hat aber nichts mit der Performance zu tun gehabt!)  
      
    2\. Ich habe --keep an den gphoto2 Befehl dran gehängt. Man muss aber daran denken, dass man vorher einmal das Ziel vom RAM der Kamera zur Speicherkarte ändert (--set-config-value="Memory card" ) bzw vorher mit gphoto2 --get-config=capturetarget nachschauen welche optionen es gibt und dann das Ziel (mit dem Namen des targets, nicht mit der nummer) festlegen.
    
    14\. Mar 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/76ecdc50e5e8e725043faadf7657a834?s=75&d=mm&r=g)
    
    Bruno
    
    Moin Andre,  
    vielen Dank für deine Anleitung für die Photobox. Leider, gibt es beim Nachbau ein kleine Problem, wenn ich avconv installieren will bekomme ich immer die Meldung: E: Paket avconv kann nicht gefunden werden. Kannst du mir bitte weiterhelfen?  
      
    Gruß  
    Bruno
    
    13\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Bruno,  
        Hast du mit "sudo apt-get install libav-tools" probiert? Es ist ein Teil der libav-tools:  
        http://packages.ubuntu.com/search?suite=raring&arch=any&searchon=contents&keywords=avconv  
          
        Grüße
        
        14\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/76ecdc50e5e8e725043faadf7657a834?s=75&d=mm&r=g)
            
            Bruno
            
            Moin Andre,  
            die libav-tools sind mittlerweile installiert. Auch die Rechte sind auf www-data 777 gesetzt. Dennoch kann ich leider kein Foto über das Webinteface aufnehmen. Hier bekomme ich immer wieder die Meldung: "Something went wrong. Please try it again." Wenn ich jedoch den Befehl "gphoto2 --capture-image" manuell ausführe nimmt die CAM ein Photo auf. Ich tippe mal, dass ich irgendetwas an den Rechten falsch eingstellt habe. Kannst du mir weiterhelfen?  
            Gruß  
            Bruno
            
            28\. Mar 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/3eb881f6744d3269b9f55ca1b69491e8?s=75&d=mm&r=g)
    
    Marius
    
    Hallo Andre,  
      
    super Anleitung & Umsetzung die du dir da überlegt hast. Danke dafür!  
      
    Ich habe meinen Pi3 mal wieder herausgekramt und wollte die Photobooth bei mir testen.  
      
    Ich habe alle Programme installiert und die PHP-Dateien in den /var/www/html ordner gepackt.  
    Leider wird die Seite vom Browser (sowohl direkt auf dem Pi, als auch über Firefox am PC) nicht angezeigt.  
      
    Hast du evtl. eine Idee?  
      
    Die phpinfo.php wird einwandfrei dargestellt.  
      
    Vielen Dank!  
      
    Grüße  
    Marius
    
    08\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/3eb881f6744d3269b9f55ca1b69491e8?s=75&d=mm&r=g)
        
        Marius
        
        Kommando zurück.... die Sache läuft (fast) einwandfrei!  
        Die fehlende Anzeige kam durch falsche Rechtevergabe zustande.  
          
        Das Auslösen und die Verlinkung mit dem QR-Code funktionieren soweit super.  
        Nur die Anzeige in der Gallerie ist noch nicht einwandfrei.  
        In dem linken oberen Bild, das nur eine Verlinkung auf den Ordner /images besitzt, wird nichts angezeigt.  
        Und wenn ich auf ein Foto zum vergrößern klicke, wird nur ein Bildausschnitt gezeigt.  
        Da bin ich noch dran.  
          
        Danke nochmal für die super Lösung!  
        Grüße Marius
        
        09\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
            
            Bernd. T.
            
            Hallo Marius und Thomas, sucht mal auf dieser Seite nach "frank g.", er hatte eine Lösung für mich parat. Die Lösung von Moritz müsste auch funktionieren, ich hab sie aber nicht getestet.  
              
            Der leere Platzhalter am Beginn der Galerie müsste durch eine Leerzeile in der data.txt verursacht werden. Ich hatte damit auch Probleme, am Ende hab ich es so gemacht:  
            \- Leere data.txt erzeugen mit entsprechenden Rechten.  
            \- In der db.php das Auslesen so verändern:  
            $data = explode(PHP\_EOL, file\_get\_contents('data.txt'),-1);  
            \- In /var/www/html/takePic.php:  
            Zeile file\_put\_contents auskommentieren und folgende Zeile ergänzen:  
            shell\_exec('echo '.$file.' >> data.txt');
            
            12\. Mar 2017 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/45a27656db41081430c79791d8d0f26e?s=75&d=mm&r=g)
        
        [Thomas](www.coloristi.ch)
        
        Vermutlich stehe ich genau an der gleichen Stelle vor dem Berg.  
        \[img\]http://www.coloristi.ch/piwi/i.php?/galleries/share/php-la.jpg\[/img\]
        
        10\. Mar 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
    
    Andre Rinas
    
    Hi Leute, habe das QR Code Problem selbst gerade gefixed und die neue Version 1.1.1 bei Github hochgeladen. War nur eine Zeile in der core.js Datei.  
    Grüße
    
    07\. Mar 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/69ac6d44d4af22a13f1f5d25a8526ed4?s=75&d=mm&r=g)
    
    [Martin](www.trickytrails.com)
    
    Hi,  
    VIELEN DANK für das Tutorial. Ich bin ecth schwer begeistern! Im Prinzip hat alles nach rund einer Stunde funktioniert. :)  
    Das einzige "Problem" das ich noch habe ist, dass in der Gallerie auch nach dem leeren der data.txt immer ein Foto angezeigt wird (das erste), welches er aber nciht findet. Also ein Kästchen mit einem fehlerhaften Link zu einer Datei, die es nicht gibt. Habe noch nicht gefunden, wo das gespeichert sein könnte...  
      
    danke noch einmal! Ech super Arbeit! :)  
      
    LG,  
    Martin
    
    03\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/4d48d181d5da8c9b6df7b3181fe90a0b?s=75&d=mm&r=g)
        
        Felix
        
        Hallo Martin,  
        das liegt daran, dass in der data.txt ein "unsichtbares" newline steht. Am besten die data.txt nochmal komplett löschen und vom script neu anlegen lassen, bzw in einem Editor mit Anzeige von Steuerbefehlen öffnen, dort siehst du einen eventuell vorhandes newline.
        
        06\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/69ac6d44d4af22a13f1f5d25a8526ed4?s=75&d=mm&r=g)
            
            Martin Kaiser-Kaplaner
            
            perfekt, danke! :)
            
            12\. Mar 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/84a17c4b4ca1b973f2e8bc0a43bb5f7d?s=75&d=mm&r=g)
    
    Gabriela Wejat-Zaretzke
    
    Hallo Andre, deine Bauanleitung gefällt mir super, ich muss aber gestehen ich hab mich bisher noch nicht mit dem Raspberry beschäftigt - aber schon einiges am PC rumgebastelt und auch son bissel mit Programmierung experimentiert. Ich könnte mir vorstellen, das ich dies packen könnte, stehe aber nun vor der Frage welchen Raspberry. Ich hab mal online bei einigen gestöbert und u. a. bei Pollin http://www.pollin.de/shop/cp/raspberry\_pi\_3.html?gclid=Cj0KEQiA88TFBRDYrOPKuvfY2pIBEiQA97Z8MTK2fjwOBOihjAlAepFDpOSD2RVsa2mDziJzIYOIFDAaArTu8P8HAQ  
    gefunden. Wenn ich alles richtig verstanden habe benötige ich dann keinen extra Router um mit einem vorhandenen Windows Tablet Kontakt auf zu nehmen. Welches Zubehör wäre noch sinnvoll? oder würdest Du ein anderes Raspberry empfehlen. Sorry für solche "Einsteiger" Fragen.
    
    25\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
        
        Bernd T.
        
        Hallo Gabriela, nach dem Kommentar von Raju (s.o.) zu urteilen ist es genau so wie du vermutest: Mit dem Pi 3 kannst du auf den Router verzichten, und das von dir gewählte Modell ist genau richtig.
        
        26\. Feb 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
    
    Bernd T.
    
    Hallo, ich hab noch eine Frage: In mehreren Browsern auf dem Notebook funktioniert die spätere Anzeige der QR-Codes problemlos. Unter iOS (iPhone und iPad) kann ich zwar den Close-Button verwenden, den QR-Code-Button allerdings nicht, der reagiert dort einfach nicht.  
      
    Kann ich etwas an ".gal-qr-code" in der style.css ändern, um das zu reparieren?  
      
    Besten Gruß! :)  
    Bernd T.
    
    25\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
        
        Gregor
        
        Hi Bernd, ich hab den QR Button einfach an den linken rand geschoben, damit er funktioniert. hatte das gleiche / ähnliche Problem.  
        Dann ging es wieder.  
          
        .pswp\_\_qr {  
        width: 500px;  
        height: 500px;  
        position: absolute;  
        left: 50%;  
        margin-left: -150px;  
        top: 50%;  
        margin-top: -250px;  
        z-index: 10000; }  
        .pswp\_\_qr img {  
        width: 80%;  
        opacity: 0.9}  
          
        .gal-qr-code {  
        color: #fff;  
        background: transparent;  
        font-size: 100px;  
        text-align: center;  
        width: 100px;  
        height: 100px;  
        cursor: pointer;  
        overflow: visible;  
        \-webkit-appearance: none;  
        display: block;  
        border: 0;  
        padding: 0;  
        margin-top: 30;  
        float: left;  
        opacity: 0.9}  
          
        Ich hab ein anderes Problem. Hab einen 7" Raspi Touch Display. Welches ich gerne nehmen würde für meine FotoBox und bei mir lässt sich auf dem PI direkt leider die Galerie nicht scrollen (sowohl Chromium als auch Iceweasle).  
        Am Win 10 PC mit egal welchem Browser geht das Scrollen mittel Mausrad problemlos, mit den Pfeiltasten auf der Tastatur leider gar nicht.  
          
        LG Gregor
        
        28\. Feb 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
            
            Bernd T.
            
            Hey Gregor, vielen Dank für den Tipp! Leider hat das mein Problem nicht gelöst: Der QR-Button wird (nachdem ich deinen Code so übernommen hatte) wie erwartet groß in der oberen linken Ecke, antippen kann ich ihn nicht. Das Problem scheint auch unter Android zu existieren, nicht nur unter iOS (denn auf GitHub hat das jemand gemeldet). Gregor, hattest du ein ähnliches Problem oder genau das gleiche?
            
            04\. Mar 2017 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/a01e1bcfa296428d8f0b77bcf2660b0e?s=75&d=mm&r=g)
        
        Moritz
        
        Hallo,  
        ich hatte das selbe Problem, das der QR Code auf "touch" Geräten nicht ging. Die Lösung:  
          
        In der ".gal-qr-code" den on('click') Handler um 'touchstart' erweitern.  
        $(document).on('click touchstart', '.gal-qr-code', function(e){
        
        05\. Mar 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
            
            Bernd T.
            
            Hi Moritz, spitze, danke für deinen Tipp! Ich hab das ausprobiert, jetzt geht es im Browser auch nicht mehr ;) Ich nehme an, dass ich dich falsch verstanden habe. Ich habe in der style.css jetzt den unten eingefügten Block. Das ist vermutlich kompletter Käse, dass ich deinen Code an dieser Stelle so eingebaut habe?  
              
            $(document).on('click touchstart', '.gal-qr-code', function(e){  
            color: #fff;  
            background: transparent;  
            font-size: 100px;  
            text-align: center;  
            width: 100px;  
            height: 100px;  
            cursor: pointer;  
            overflow: visible;  
            \-webkit-appearance: none;  
            display: block;  
            border: 0;  
            padding: 0;  
            margin-top: 30;  
            float: left;  
            opacity: 0.9; }
            
            05\. Mar 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
            
            Frank G.
            
            Top! Danke, Moritz!
            
            07\. Mar 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
            
            Bernd T.
            
            Ich hab die Änderung in der core.js gemacht, und jetzt läuft es. Alles alles. Moritz, danke für den Tipp, und André: Nochmals vielen Dank fürs Teilen deines schönen Projekts!
            
            12\. Mar 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/0afb03be3715fea116607735273cb7b6?s=75&d=mm&r=g)
    
    Jan
    
    Tolles Tutorial. Ich bin gerade dabei es nachzubauen.  
    Wenn ich allerdings meine Kamera an den Raspberry anschließe, wechselt die Kamera in den USB-Modus und läuft wie ein USB Stick.  
    Dein Webinterface läuft, nach Klick auf "take a picture" kommt allerdings die Fehlermeldung "something went wrong".  
      
    Mir scheint als könne gphoto2 nicht auf die Kamera zugreifen wenn diese im USB-Modus läuft.  
      
    Wie kann man das lösen? Ich habe eine Sony SLT-A58.  
      
    Danke.
    
    22\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
        
        Bernd T.
        
        Hallo Jan, hilft dir das weiter?  
        "An der Kamera drückt ihr den „Menü“ Knopf. Im Reiter „Einstellungen“ (der mit dem Schraubenschlüssel) geht ihr auf Seite 2 und stellt „USB connection“ auf „PC remote“. Sobald die Kamera angesteckt und eingeschaltet ist, könnt ihr über die RCCDroid App die Kamera einstellen und auslösen. Die Bilder werden direkt auf dem Smartphone angezeigt und auch dort gespeichert."  
          
        ...wobei ich annehme, dass du vielleicht etwas anderes als "PC Remote" wählen musst, aber die Option müsste es sein. Quelle: http://www.ingaklas.de/2014/06/24/sony-slt-a58-eine-echt-spezielle-nutzererfahrung/  
          
        Cheers,  
        Bernd.
        
        22\. Feb 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/0afb03be3715fea116607735273cb7b6?s=75&d=mm&r=g)
            
            Jan
            
            Super, danke! Das war es. Habe auf PC Fernsteuerung umgestellt und schon funktioniert meine Fotokiste! Vielen Dank für die schnelle Hilfe.
            
            22\. Feb 2017 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/618e91e369c6400dac674b4c3bdc55f7?s=75&d=mm&r=g)
        
        Samuel
        
        Das gleiche Problem habe ich auch...bzw. wundere mich warum noch nicht jemand anders dieses Problem hat.  
          
        Um die Weboberfläche testen zu können, kannst händisch diesen Vorgan raussuchen und über den kill Befehl wieder "löschen"  
          
        https://youtu.be/1eAYxnSU2aw ... ist hier gut beschrieben... weiß aber aufgrund von fehlenden Linux Kenntnissen (noch) nicht wie man das in die Weboberfläche einbindet.  
          
        Ich würde es in die takepicuter.php ganz oben reinschreiben.?!?
        
        22\. Feb 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
    
    Bernd T.
    
    ...oh, jetzt sehe ich gerade, dass du (Andre) schon das avconv oben eingetragen hattest, ich habs dummerweise nicht gefunden (blöderweise hatte ich auf dieser Seite dann immer nur nach "aconv" gesucht, anstatt in Ruhe nochmal von oben durchzugehen). Kannst diesen und meinen letzten Kommentar gerne löschen, dann schreibe ich morgen nochmal... Besten Gruß und danke nochmals! Bernd T.
    
    14\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Bernd,  
        freut mich, dass du mein Skript gebrauchen kannst :) Vielen Dank für die nützlichen Kommentare, die werden anderen Benutzern sicher helfen.  
        Ich habe gerade eine neue Version bei Github abgelegt, die nun auch QR-Codes in der Galerie anzeigen kann.
        
        14\. Feb 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
            
            Bernd T.
            
            Hi André, die Erweiterung funktioniert prima: In der Gallerie kann man jetzt auf den neuen Button klicken, was dann zum QR-Code führt. Danke für die Verbesserung!  
              
            Ich habe mich heute mit einem Schönheitsfehlers beschäftigt, den ich aber nicht beseitigen konnte: Wenn ich auf den Thumbnail in der Galerie klicke, wird das Bild aufgezogen (wie in der index.php in dem Anchor-Element durch data-size="1920x1280" festgelegt). Dann wird aber das Original so groß angezeigt, dass ich nur die obere linke Ecke sehe. In der großen Variante kann ich nie die rechte Bildhälfte sehen. Begrenzt rein- und rauszoomen geht, aber nur eine Stufe, das reicht nicht fürs ganze Bild. Ich vermute ein Problem mit PhotoSwipe, aber ich finde nicht heraus, wo es hakt. Wenn da jemand einen Tipp hätte, wär ich sehr dankbar.  
              
            Besten Gruß! Bernd T.
            
            14\. Feb 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
                
                Bernd T.
                
                Ich komme dem o.g. Problem leider nicht auf die Schliche, habe heute PhotoSwipe-Optionen angesehen und in Foren gesucht, aber das Problem scheint exklusiv zu sein. Ich habe das mal hier im Video eingefangen: Nach dem Klick auf den Thumbnail wird das richtige Foto (5 Megapixel) viel zu groß angezeigt, ich kann nur den oberen linken Quadranten sehen. Verstehe ich vielleicht etwas ganz falsch? Vielleicht sollte PhotoSwipe das Foto gar nicht auf 100% Bildschirmbreite skalieren?  
                  
                Hier der Link zum Video: https://youtu.be/Xa8AfRbqAps
                
                15\. Feb 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/02bcd034b683e89564378322c6efdac3?s=75&d=mm&r=g)
                    
                    Frank G.
                    
                    ... geh mal ins Verzeichnis html/resources/css und ändere Zeile 20 ("max-width:") in der photoswipe.css von none auf z.B. 2000...  
                    Gruß Frank
                    
                    19\. Feb 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
                        
                        Bernd T.
                        
                        Hi Frank, das hat mein Problem behoben, vielen Dank! Mit der Änderung in der photoswipe.css "max-width: 1920" (gleicher Wert wie in der index.php) wird das Foto schick herangezoomt und bleibt dann brav dort, wo man es erwarten würde. Besten Dank für den Tipp :) Bernd.
                        
                        22\. Feb 2017 [Antworten](#)
                        
                
                *   ![](https://www.gravatar.com/avatar/a01e1bcfa296428d8f0b77bcf2660b0e?s=75&d=mm&r=g)
                    
                    Moritz
                    
                    Hallo Bernd,  
                    das Problem ist, das die Images alle die Dimension 1920x1280 statisch mitbekommen in der index.php.  
                      
                    Ersetze in der index.php folgendes:  
                      
                    foreach($images as $image) {  
                    echo '  
                      
                    durch:  
                    foreach($images as $image) {  
                    $img\_size = getimagesize("images/".$image);  
                    echo '
                    
                    19\. Feb 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
                        
                        Bernd T.
                        
                        Hallo Moritz, vielen Dank für deinen Tipp! Das hab ich ausprobiert, hat aber an dem Verhalten komischerweise nix verändert. Mit der von Frank G. vorgeschlagenen Lösung läuft es nun. Nochmals danke und besten Gruß!
                        
                        22\. Feb 2017 [Antworten](#)
                        
                        *   ![](https://www.gravatar.com/avatar/a01e1bcfa296428d8f0b77bcf2660b0e?s=75&d=mm&r=g)
                            
                            Moritz
                            
                            Hallo Bernd, meine Antwort ist unvollständig, da der Code unvollständig ist. Er wurde wohl escaped durch das Formular.  
                              
                            In der nächsten Zeile muss natürlich die ermittelte Bildgröße an das Bildobjekt übergeben werden.... an sonsten wird, egal wie groß das Bild tatsächlich ist immer die Größe 1920x1280 verwendet. Aber du hast ja bereits eine andere Lösung gefunden.  
                              
                            """
                            
                            26\. Feb 2017 [Antworten](#)
                            

*   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
    
    Bernd T.
    
    Großartiges Projekt, danke fürs Teilen! Ich habe jetzt Wochen nach einer Lösung für unsere Hochzeit im Juni gesucht, und das hier ist einfach perfekt! :)  
      
    Lief alles mit der Anleitung sofort, bei meiner frischen Raspbian-Installation war allerdings avconv nicht installiert (Andre, du hast in einem Kommentar aconv geschrieben, aber Google hat das bei der Suche schon automatisch in avconc korrigiert ;) ).  
      
    So musste ich noch folgende Befehle einflippern:  
    sudo apt-get install libav-tools  
    sudo mkdir /var/www/html/thumbs  
    sudo chmod 777 /var/www/html/thumbs  
      
    Jetzt läuft alles perfekt.  
      
    Dankedankedanke :)
    
    13\. Feb 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/3eb67bbea2ff33cc1b6179fa0e76fe00?s=75&d=mm&r=g)
    
    Philipp
    
    Hallo Andre!  
      
    Besten Dank für die Erklärung und das zur Verfügung stellen der Dateien. Die Geschichte mit dem Apache Server hat alles funktioniert. Ich kann die Page öffnen. Soweit so gut.  
      
    Nun wollte ich dich fragen ob es möglich ist dass man das Foto mit der Raspberry Camera V2.0 macht anstelle einer USB Kamera?
    
    13\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Das ist bestimmt auch möglich, dafür müsste man in der takePic.php anstatt den gphoto2 Aufruf, den Aufruf für die Kamera machen. Den kenne ich leider nicht, aber das sollte die Stelle sein.  
        Grüße André
        
        16\. Feb 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ced2f1cfebf5004c1809b4c931c94d15?s=75&d=mm&r=g)
    
    Sebastian
    
    Hallo Andre,  
    erstmal vielen Dank, dass du deine Lösung hier zur Verfügung stellst. Sie läuft auch bis auf eine Sache super.  
    Sobald ich die Seite neu lade bzw. auf die Startseite gehe und von dort die Galerie aufrufe, werden keine Bilder mehr angezeigt. Rufe ich die Galerie direkt nachdem ich ein Foto aufgenommen habe gehts. Thumbnail generierung funktioniert. Die Fotos liegen auch in den Ordner images/ und thumbs/. Hast du vllt. eine Idee woran das liegt?  
      
    Schöne Grüße, Sebastian
    
    12\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sebastian,  
        das habe ich noch nie gehabt. Also geht die komplette Galerie auch nach dem du ein Foto gemacht hast? Also werden dann auch alle alten Bilder wieder angezeigt? Die Software hat ja an sich keinen wirklichen reload, deswegen würde mich das wundern.  
        Grüße André
        
        13\. Feb 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e2e137afc2417495d61731665f95070c?s=75&d=mm&r=g)
            
            Bernd T.
            
            Das gleiche Problem hatte ich vorhin auch: Thumbnails da, wo sie sein sollen, aber keine sessionübergreifende Anzeige derselben. Nachdem ich einen anderen Eintrag von Andre weiter oben gelesen hatte, hab ich nach der data.txt gesucht, die es bei mir nicht gab. Ein stumpfes  
            cd /var/www/html  
            sudo touch data.txt  
            sudo chmod 777 data.txt  
            war dann die Lösung.
            
            14\. Feb 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/96f26a1c9d130032bcdc3786fc99bf41?s=75&d=mm&r=g)
    
    Stefan
    
    Hallo Andre und vielen Dank für das tolle Tutorial!  
      
    Leider bekomme ich es nicht hin, dass die Kamera ein Foto macht ?  
    Ich benutze einen alten Raspberry Pi 1 B mit dem neuesten Raspbian Jessie Lite (Kernel 4.4) auf das ich LXDE installiert habe. Der Raspberry hängt per W-LAN (150Mbit) an einer FritzBox, das Tablet und mein Desktop PC ebenfalls.  
    An den Raspi habe ich eine Nikon D90 angeschlossen die ich auf Basic Bildqualität bei 3 Megapixeln eingestellt habe (also ca. 400kb pro Bild).  
    Über die Konsole kann ich die Nikon über gphoto2 bedienen und auch auslösen.  
    Der Apache Server scheint auch zu funktionieren. Ich habe per IP-Adresse Zugriff darauf, es erscheint die Photobooth Seite und auch der Countdown wird heruntergezählt – jedoch wird bei „Cheeeeese“ kein Foto an der D90 ausgelöst und anschließen wird die Fehlermeldung angezeigt („….versuchen Sie es erneut…“). Das aufrufen der Seite am Raspi funktioniert übrigens am Tablet (Android 4.1.2) und am PC per Microsoft Edge Browser, beim Google Chrome bekomme ich nur den PHP Text angezeigt. Vermutlich fehlt für Chrome ein Plugin bei mir?!?  
    Die im Tutorial angegebenen Schritte habe ich ausgeführt, ich muss jedoch dazu sagen, dass ich von Raspi, Linux und Programmierung nicht wirklich Ahnung habe.  
    Bei mir waren bei den vom GitHub heruntergeladenen ZIP keine Ordner html/thumbs/ oder html/images vorhanden. Hätten die von „Raspbian-Hause“ aus schon im Ordner var/www/html sein müssen? Auch fehlt mir in /html die Datei data.txt  
    Was hier in den Kommentaren über die Rechte von Ordnern geschrieben wird, ist mir noch nicht ganz klar. Habe zwar versucht alles möglichst genau nach zu machen, es ändert bei mir jedoch nichts an der „Keine Fotoauslösung“ Problematik.  
    Vielleicht könnte jemand noch mal als gesammelte Werke auflisten, wie wo welche Rechte vergeben werden müssen. Habe mich schon durch einige Debian und auch Ubuntu Seiten gelesen, aber so ganz Sattelfest bin ich da nicht. Wenn jemand Zeit dafür hat gerne im Stil von „sudo chmod………“, wie es von Bernd schon einmal angedeutet wurde.  
    Kann es sein, dass die Reihenfolge meiner Installation eine Rolle Spielt? Ist es möglich, dass ich keine thumbs oder images Ordner unter var/www/html finde, weil ich ein Raspbian Jessie Lite installiert habe? Sollte ich besser das Raspbian Jessie Pixel (also die Vollversion) installieren? Könnte es daran liegen?  
    Ich hoffe der viele Text schreckt nicht ab, würde mich aber sehr freuen, wenn jemand mit Ahnung mal einen Tipp geben kann!  
    Vielen Dank!  
    Gruß  
    Stefan
    
    02\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Stefan, danke für deinen langen Text :D  
        Raspian Lite kenne ich nicht und es kann tatsächlich daran. Die Ordner kannst du auch per Hand anlegen. Einen /html gibt es glaube ich nur bei Ubuntu, nicht aber auf dem Raspberry. Die Rechte müssen nicht nur auf dem Ordner und allen Dateien sein, sondern der User www-data muss Rechte haben, Gphoto auszuführen.  
        Rechte für den Ordner geht so:  
        sudo chown www-data:www-data /var/www/  
        sudo chmod 755 /var/www/  
        Grüße Andre
        
        08\. Feb 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
    
    Gregor
    
    Hallo Andre,  
      
    nachdem ich dein Script auf der ersten Veranstaltung probiert habe und es gut ankam, habe ich die Bilder wieder vom PI auf meinen Desktop kopiert und musste feststellen, dass der Dateiname leider nicht so schön aussieht. In etwa sieht der dann so aus: 2a3545354efg5d5f40af.jpg. Gibt es eine Möglichkeit, das der Origianldateiname von der Kamera genommen wird? oder eine Kopie auf der Kamera verbleibt?  
      
    Danke und LG Gregor
    
    30\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Gregor, beides ist möglich. In der takePic.php kannst du beides anpassen. Einmal könntest du den Befehl von gphoto ändern, dass dieser das Bild auf der Kamera lässt. Da müsste man mal in die Dokumentation schauen. Den Dateinamen zu übernehmen müsste da auch gehen, da diesee gerade einfach via md5 hash erzeugt wird. Wenn du das nicht überschreibst müsste es schon laufen. Probiere einfach mal nen bisschen rum und melde dich gerne wieder.  
        Grüße Andre
        
        30\. Jan 2017 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/3d4dbed9bb3f9745b473cb3e92593d69?s=75&d=mm&r=g)
        
        [markus](www.kleimaier.com)
        
        das mit der kopie auf der kamera belassen ist ganz leicht:  
        $shootimage = shell\_exec('sudo gphoto2 --set-config capturetarget=1 --capture-image-and-download --keep --filename='.$filename.' images');  
        lg markus
        
        02\. Feb 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
            
            Gregor
            
            Hi Markus, wo muss dieser Codeschnipsel genau hin? in die takePic.php oder grundeinstellung von Gphoto?  
              
            LG Gregor
            
            03\. Feb 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Gregor. Der Befehl steht in der takePic.php. Diesen dann durch den von Markus ersetzen.  
                Grüße Andre
                
                03\. Feb 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                    
                    [Gregor](www.greka.de)
                    
                    Hätte ich selber drauf kommen können :-\[  
                    Danke dir  
                      
                    LG Gregor
                    
                    15\. Feb 2017 [Antworten](#)
                    
        
        *   ![](https://www.gravatar.com/avatar/9df03bef28388834dd437f3d3a8f29fb?s=75&d=mm&r=g)
            
            Heinz
            
            Leider funktioniert das bei mir nicht mit der Kopie auf der Kamera erstellen. Wenn ich die Zeile von Markus in die %shootimage eingebe, reagiert die Kamera nicht. Kann evtl. jemand das komplette Script der takePic.php hochladen?
            
            11\. Aug 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/14693ee136f5ca487e07f1c3625cd608?s=75&d=mm&r=g)
    
    Viktor
    
    Hallo Andre, ich finde es sehr gut von dir, dass du uns deinen Code gibst. Hab es bei mir endlich geschafft uum laufen zu bringen. Allerdings kann ich avconv nicht runterladen kann mir da jemand helfen?
    
    29\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Viktor, was für eine Fehlermeldung bekommst du denn?  
        Grüße André
        
        29\. Jan 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/14693ee136f5ca487e07f1c3625cd608?s=75&d=mm&r=g)
            
            Viktor
            
            Ich hatte gestern mit Live Ubuntu Version 14 ausprobiert und es hatte soweit funktioniert bis auf avconv da hatte ich diesen Befehl genommen: "sudo apt-get install avconv" statt "sudo apt-get install libav-tools"  
            Heute wollte ich Ubuntu Verion 16.04 auf den Rechner machen und da hab ich ein paar Schwierigkeiten mit der Photobooth. Sobald der Countdown abgelaufen ist kommt die Fehlermeldung ohne Vorher ein Foto zu machen. Wer hatte das selbe Problem, gab es schon Lösungen dafür?
            
            30\. Jan 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/3181d89daff6f5f852c03e31696c9a38?s=75&d=mm&r=g)
    
    Sebastian
    
    Vielen Dank für eure Hilfe.  
      
    Es lag eindeutig an der Kamera und am User. Vorhin noch schnell eine eos100d gekauft. Funktioniert jetzt alles prima.  
    Frage an die Profis. Gibt es eine Möglichkeit den qr auch in der Galerie darzustellen? Wie sieht es mit LiveView aus?  
      
    Ach ja, am Pi kann es nicht liegen. Der 3er Pi ist gerade 4 Tage alt.  
      
    Gruß  
    Sebastian  
      
    
    26\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
        
        Michael
        
        Ja - Liveview - vor oder während des Countdowns! Das wäre cool - so hätte man die Möglichkeit tatsächlich zu "sehen" was und welcher Ausschnitt fotografiert wird und hätte weniger Ausschuss ...
        
        29\. Jan 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo,  
            ja Liveview wäre schon schön, hatte es damals nur nicht hinbekommen. Glaube, dass man mit Gphoto und dem Web keinen Stream hinbekommt. Eine Möglichkeit wäre es vielleicht noch, die Kamera des Tablets zur Liveview zu benutzen und diese dann über irgendein fertiges Skript abzurufen. QR in der Galerie geht derzeit noch nicht. Vielleicht finde ich demnächst mal Zeit die Funktion nachzurüsten. Ansonsten ist es jedem natürlich gerne überlassen das einzubauen und mit uns zu teilen.  
            Grüße André
            
            29\. Jan 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/3181d89daff6f5f852c03e31696c9a38?s=75&d=mm&r=g)
    
    Sebastian
    
    Hallo zusammen,  
    als erstes. Super gelöst, leider funktioniert es bei mir nicht so wie es soll. Der Counter startet und läuft auch ab. Danach gibt es die Meldung "Es ist ...." hätte jemand einen Lösungsansatz für mich?  
    Habe alles als root ausgeführt und die Ordner haben alle vollen Zugriff.  
      
    Kamera ist eine Uralte Canon ixus 400. Mit dem Befehl gphoto2 usw. kann ich im Terminal die Kamera ansteuern und die Bilder werden geladen.  
    thumbs Ordner habe ich auch angelegt.  
    Gruß  
    Sebastian
    
    25\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Sebastian, werden denn im images Ordner Bilder abgelegt? Und der Webuser auf dem Raspberry, also www-data ist nicht root und darf vielleicht doch nicht schreiben. Müssteste mal gucken, ob du vielleicht chown -R www-data:www-data ./\* in /var/www/ machen musst.  
        Grüße André
        
        25\. Jan 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/3181d89daff6f5f852c03e31696c9a38?s=75&d=mm&r=g)
            
            Sebastian
            
            Hallo Andre,  
            der images Ordner existierte bei mir nicht habe unter www/html/ den Ordner images angelegt. Ist das vielleicht der Fehler?  
              
            Unter sudoers steht bei mir folgendes:  
            \# User privilege specification  
            root ALL=(ALL:ALL) ALL  
            www-data ALL=(ALL) NOPASSWD: ALL  
              
            Gruß  
            Sebastian
            
            25\. Jan 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/3181d89daff6f5f852c03e31696c9a38?s=75&d=mm&r=g)
            
            Sebastian
            
            Nochmal ich:-)  
              
            kann es sein, das ich durch mein wildes schreib und lese-Rechte vergeben sudoers zerschossen habe? Mein sudo befehl funktioniert nämlich nicht mehr;-(  
            (und im script steht ja sudo gphoto usw...) das kann doch dann nicht ausgeführt werden oder liege ich da falsch?  
              
            Könnte jemand einem absoluten Raspi anfänger das einstellen der Rechte erklären?  
              
            Folgende frage noch, thumbs Ordner muss ich ja alleine im www usw. Ordner erstellen, wie ist dass mit dem images Ordner??  
              
            Besten Dank im Voraus
            
            25\. Jan 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/3181d89daff6f5f852c03e31696c9a38?s=75&d=mm&r=g)
            
            Sebastian
            
            Und wieder Ich:-)  
            Ein Bild kann ich machen, danach hängt sich die Kamera auf. Es dauert ewig bis das Bild in der Galerie auftaucht. Kennt jemand dieses Problem?  
              
            Das Anfangsproblem lag am User nicht am Script. Rechteverwaltung usw.
            
            25\. Jan 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Sebastian,  
                Hat dein Tablet/Raspberry oder sonst eine Komponente vielleicht sehr langsames Internet, oder hast du einen alten Raspberry, oder hast du deine Kamera auf sehr viele Megapixel eingestellt? Alle diese Gründe verlangsamen das Übertragen des Bildes vom Raspberry zum Tablet.  
                Grüße André
                
                26\. Jan 2017 [Antworten](#)
                
    
    *   ![](https://www.gravatar.com/avatar/973eb466aa53e18af7befb538affbbf2?s=75&d=mm&r=g)
        
        Sebastian ;-)
        
        Hallo Sebastian,  
        überprüfe mal die Meldungen die Dir gphoto2 im Terminal zurückgibt wenn du den Befehl zum auslösen der Kamera sendest. Ist dieser Rückgabe text auf Deutsch ? Wenn ja dann müsst du im takePic.php script in Zeile 9 den Text auf Deutsch einfügen.  
        Bsp.:  
        Antwort von gphoto2 : "Neue Datei ist in.... "  
        Vergleichsstring in takePic.php: "New file is in..."  
        Resultat: "error" da string vergleich falsch.  
          
        Gruß  
          
        Sebastian ;-)
        
        25\. Jan 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3d4dbed9bb3f9745b473cb3e92593d69?s=75&d=mm&r=g)
    
    [markus](www.talentlos.com)
    
    hi andre!  
    großes kompliment zu deinem photobooth! habs gerade aufgesetzt und funktioniert prima. hatte auch das problem mit den schreibrechten – aber nachdem ich diese angepasst habe und den ordner thumbs manuell angelegt habe lief alles prima. einzig den download über die im qr-code hinterlegte url hab ich noch nicht hinbekommen...da bin ich noch auf ursachenforschung. als kleine anregung: es wäre doch eigentlich ganz praktisch, wenn man die gallery direkt vom smartphone aus aufrufen könnte....dann könnten sich die gäste im wlan die bilder bequem an ihren smartphones anschauen....  
    lg  
    markus
    
    18\. Jan 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
    
    Michael Dahms
    
    Hall Andre  
      
    Ich möchte Deine Lösung für die Hochzeit meines Patenkinds nachbauen. Kannst Du mal ein paar Fotos welche der Photobooth erstellt hat zeigen? Ich habe einen Photobooth mal auf einer Messe gesehen/ausprobiert und da konnte man witzige Hintergründe auswählen und die Ergebnisse waren wirklich total super plastisch und sehr brilliant. Danke!
    
    11\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michael,  
        da es sich um eine ganz normale Spiegelreflex-Kamera handelt, und ich keine sonstigen Effekte eingebaut habe, sind die Bilder halt genauso, wie man sie macht. Hier mal ein Test-Bild aus dem Photobooth. http://anniandre.de/wp-content/themes/anniandre/images/daeaab4385145c800eb1c714c507a252.jpg.  
        Grüße André
        
        12\. Jan 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
            
            Michael
            
            Hallo - Vielen Dank für das Bild! Einwandfrei! Hattest Du einen externen, entfesselten Blitz oder sind alle Aufnahmen ohne Blitz entstanden? Falls Blitz - wie hast du den angesteuert?
            
            12\. Jan 2017 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
            
            Michael
            
            Hallo Andre  
            habe nun alles installiert und zusammengesteckt. Funktioniert! Soweit erstmal SUPER! DANKE!. Es werden Bilder aufgenommen und im Verzeichnis "images" abgelegt. Leider bekomme ich weder QR-Codes noch Thumbnails im Browser angezeigt. Hab schon div. Browser probiert aber das Ergebnis ist immer gleich. Und gleich noch eine Frage - da ich mit sehr vielen Bildern rechne müsste ich die "ausserhalb" des PI bpsw. auf einen grossen USB-Stick oder eine 2,5" HD speichern. Wie würdest Du das lösen? Platte/Stick fest einbinden über fstab und dann einen symbolischen Link von "images" darauf oder sprengt das dann dein Konzept? Danke.
            
            13\. Jan 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Michael, das Problem mit dem QR-Code haben mehrere. hier suchen wir noch nach einer Lösung.  
                Das mit dem symbolischen Link sollte funktionieren, sofern der Webserver speichern darf, also müssen nur die Rechte stimmen.  
                Die Thumbs gehen bestimmt nicht, weil es ein Rechnteploblem gibt oder du avconv nicht installiert hast.
                
                13\. Jan 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                    
                    Michael
                    
                    Hallo Andre - Danke für Deine Rückmeldung! Das Thumbnail Problem konnte ich lösen indem ich das Verzeichnis "thumbs" händisch angelegt habe. Klasse wenn das QR-Code Problem noch lösbar wäre - die Hochzeit an der ich alles zum Einsatz bringen will findet am 1.7.17 statt ....
                    
                    13\. Jan 2017 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                    
                    Michael
                    
                    Hallo. Eine Lösung des QR-Code Problems in Sicht? Möchte den Photobooth schon am 21.01.2016 mal an den Start bringen ... Wäre Klasse! Danke!
                    
                    14\. Jan 2017 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/973eb466aa53e18af7befb538affbbf2?s=75&d=mm&r=g)
                    
                    Sebastian
                    
                    Fehler beim Erzeugen des QR Bildes.  
                      
                    Hatte anfangs das gleiche Problem.  
                    Beim Klick auf das QR bild erschien nur ein Weißes Fenster.  
                    Nach Tagelanger Fehlersuche stellte sich heraus das folgende php Option nicht installiert wurde.  
                      
                    php -gd  
                      
                    Diese Option ist notwendig um in einer php Funktion Grafiken bearbeiten zu können.  
                      
                    Lösung  
                      
                    Installation der php -gd Funktion.  
                      
                    sudo apt-get install php5-gd
                    
                    15\. Jan 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                        
                        Michael
                        
                        Wahnsinn! Probier ich sofort aus! Danke einstweilen!
                        
                        15\. Jan 2017 [Antworten](#)
                        
                    
                    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                        
                        Andre Rinas
                        
                        Hallo Sebastian,  
                        danke für die hilfreiche Antwort! Ich werde das direkt oben im Tutorial ergänzen.  
                        Grüße  
                        André
                        
                        16\. Jan 2017 [Antworten](#)
                        
                        *   ![](https://www.gravatar.com/avatar/fafd6232a03eb91d93a10dfad1e163db?s=75&d=mm&r=g)
                            
                            Michael
                            
                            Hallo Andre  
                            Hallo Sebastian  
                              
                            Die QR-Codes werden nun einwandfrei erstellt. Danke! Wäre es möglich einzubauen dass man auch in der Galerieansicht einen QR-Code abrufen könnte um das Bild herunterzuladen? Bislang geht das m.E. ja nur direkt nachdem ein Photo aufgenommen wurde. Wer das versäumt hat Pech gehabt. Und in der Galerieansicht allenfalls auch an einem Drucker das Bild gleich ausgeben? Das wäre superfein.
                            
                            16\. Jan 2017 [Antworten](#)
                            
                            *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                                
                                Michael
                                
                                Ich ergänze noch mal ein paar Fragen, Wer hat ein Android-Tablet im Einsatz und kann mir das Geheimnis verraten wie ich den Browser dauerhaft in den Vollbildmodus schalte. Mit Navigationsleisten ist der Schirm nämlich trotz 10 Zoll und Full-HD mit 1920x1200 Bildpunkten zu klein um den QR-Code vollständig anzuzeigen. Und welche Android Handy App verwendet Ihr zum Download der Bilder. Meine Tests erlaubten es mir bislang nämlich nicht die Bilder herunterzuladen. BTW: Das WLAN für den Photobooth hat natürlich keinen Internetzugang ... dieser ist doch hoffentlich auch nicht nötig um Bilder vom pi zu laden.
                                
                                16\. Jan 2017 [Antworten](#)
                                
                            
                            *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                                
                                Michael
                                
                                Hallo Andre. Konnte auf einen Schlag mehrere Probleme lösen auf die vielleicht auch andere Anwender Deiner tollen Lösung stossen könnten. Mit dem Chrome-Browser konnte ich kein Vollbild erreichen und so waren nie der vollständige QR-Code zu sehen oder gar die Auslösefunktion. Genervt haben ebenso das dauernde Eingreifen des Bildschirmschoners bzw. der Bildschirmabschaltung. Lösen konnte ich all das durch einen neuen/anderen Browser. "Fully Kiosk Browser" heisst das Teil und passt hervorragend zur Darstellung des Photobooths.
                                
                                16\. Jan 2017 [Antworten](#)
                                
                        
                        *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                            
                            Michael
                            
                            Hallo Andre  
                            Korrigiere doch die Überschrift auf dieser Webseite. Da steht:  
                              
                            Raspberry Pi: Einen DSLR Wedding/Photoboost erstellen  
                              
                            Einen Photoboost ....
                            
                            16\. Jan 2017 [Antworten](#)
                            
                            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                                
                                Andre Rinas
                                
                                Danke, hab ich gemacht!
                                
                                17\. Jan 2017 [Antworten](#)
                                
                                *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                                    
                                    Michael
                                    
                                    Hallo Andre  
                                    Das Drucken habe ich nun "organisatorisch" gelöst. So bleibt Deine Lösung schlank und schnell ... Bild mittels QR-Code aufs Smartphone runterladen und dann einfach mit der entsprechenden Printer App auf einen im gleichen WLAN befindlichen Fotodrucker ausgeben. Funktioniert einfach und zuverlässig. Die Sache mit dem Speichern der Bilder auf einen USB-Stick habe ich umgangen. Einfach eine 64GB Speicherkarte für das raspbian verwendet ... das sollte reichen. Bleibt eigentlich nur noch diese QR-Code Sache für die Galerie damit man dort die Chance hat an ein bereitsaufgenommenes Foto zu kommen.
                                    
                                    17\. Jan 2017 [Antworten](#)
                                    
                                    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                                        
                                        Andre Rinas
                                        
                                        Hallo Michael, der QR Code wird nun auch in der Galerie angezeigt.  
                                        Grüße
                                        
                                        14\. Feb 2017 [Antworten](#)
                                        
                                        *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                                            
                                            Gregor
                                            
                                            Hi Andre, super Idee mit dem QR Code in der Galerie, habs direkt geupdatet.  
                                            Es funktioniert bei mir unter Windows am 24 Zoll Monitor ohne Probleme, auf dem Ipad 9.7" und einem 7" RaspBerry Touchdisplay sowie am 7 Zoll Samsung Tablet geht diese Funktion leider nicht.  
                                              
                                            Ich kann "drauf rum klicken" so wild ich möchte, es kommt leider nicht das schöne Popup wie am Desktop.  
                                              
                                            Hast du eine Idee woran es liegt?  
                                              
                                            LG Gregor
                                            
                                            24\. Feb 2017 [Antworten](#)
                                            
                                
                                *   ![](https://www.gravatar.com/avatar/c2af30070b75c4f3f4737360202e462d?s=75&d=mm&r=g)
                                    
                                    Bernd
                                    
                                    Hallo Andre,  
                                    vielen Dank für die vielen Infos und nochmals vielen Dank für diese tolle Lösung. Nach dem Installieren von PHP5-GD hat es dann auch bei mir mit dem QR-Code geklappt.  
                                      
                                    Zu dem Thema Drucken kann ich folgende Infos für alle bereitstellen:  
                                      
                                    Es gibt kleine schöne Fotodrucker zwischen 100-150€ von Canon. Über CUPS kann dieser Drucker angesprochen werden.  
                                      
                                    Mit einem Button und PHP-Script kann ein Shell-Befehl mit dem Dateinamen abgeschickt werden und schon wird das Bild gedruckt.  
                                      
                                    Liebe Grüße  
                                    Bernd
                                    
                                    17\. Jan 2017 [Antworten](#)
                                    
                                    *   ![](https://www.gravatar.com/avatar/568740cbab310b235a8e34b46ff224b9?s=75&d=mm&r=g)
                                        
                                        Michael
                                        
                                        So einen Selphy habe ich. Für ein paar Fotos super. Für ein grösseres Aufkommen eher nicht. Papier/Kartuschen kosten richtig Geld und müssen nach wenigen Bildern schon gewechselt werden. Hast Du "Button" und "PHP-Script" schon erstellt und kannst es allenfalls zur Verfügung stellen?
                                        
                                        17\. Jan 2017 [Antworten](#)
                                        
                                    
                                    *   ![](https://www.gravatar.com/avatar/63fa6ac1c92711c9608228e8349fde4a?s=75&d=mm&r=g)
                                        
                                        Peter
                                        
                                        Hallo Bernd,  
                                        mich würde wie Michael ebenfalls interessieren, ob du das PHP-Script und den Shell-Befehl zur Verfügung stellen kannst.  
                                          
                                        Vielen Dank,  
                                        Peter
                                        
                                        17\. Mar 2017 [Antworten](#)
                                        
                    
                    *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                        
                        Gregor
                        
                        VIELEN DANK  
                          
                        Es hat funktioniert und es funktioniert immernoch, wichtig war bei mir, dass ich den Apache neustarte.  
                        sudo /etc/init.d/apache2 restart  
                          
                        Danke Andre für das sehr geniale Script und die Lösung von Sebastian.  
                          
                        Gruß Gregor
                        
                        22\. Jan 2017 [Antworten](#)
                        
                        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                            
                            Andre Rinas
                            
                            Hallo Gregor, das freut mich! Viel Spaß mit dem Photobooth.
                            
                            22\. Jan 2017 [Antworten](#)
                            

*   ![](https://www.gravatar.com/avatar/f9850f45d2192e6b85c2363815bd2c60?s=75&d=mm&r=g)
    
    Nico
    
    Hallo nochmal,  
    Läuft alles soweit jetzt. Habe es hinbekommen. Was allerdings nicht klappt ist die Funktion mit dem QR Code. Das Feld bleibt weiß. Es wir auch nicht der Dateiname generiert wie weiter oben schon beschrieben. Hättest du dafür vielleicht einen Rat bzw kannst du mir sagen wie ich die Funktion deaktivieren kann??  
      
    Danke und nochmal Kompliment.
    
    04\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Nico, danke für die netten Worte und es freut mich, dass du den Photobooth ans Laufen gekriegt hast. Das Problem mit dem Qr Code kann ich aus der Ferne schlecht debuggen. Ich denke, dass ich einen Fehler irgendwo im Code habe, der passiert ist, als ich den Quellcode aus meinem eigenen Raspberry rausgepickt habe. Kannst du die qrcode.php mal direkt aufrufen und schauen, was da passiert?
        
        04\. Jan 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/514664d580bb37f4d2fd19a1ed05c5f8?s=75&d=mm&r=g)
            
            Nico
            
            Moin Andre. Ich bin mal so frei und kopier hier direkt den Code der qrcode.php. Wäre geil wenn dir da was dran auffällt.  
              
            $filename = $\_GET\['filename'\];  
            include('resources/lib/phpqrcode/qrlib.php');  
            $url = 'http://'.$\_SERVER\['HTTP\_HOST'\].'/download.php?image=';  
            QRcode::png($url.$filename, false, QR\_ECLEVEL\_H, 10);  
              
            Gruß, Nico
            
            05\. Jan 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Nico, nein leider nicht. Der Code macht nur Folgendes:  
                  
                Er setzt den Dateinamen auf den das was in filename an der Url steht ( Also im Code steht dann sowas wie qrcode.php?filename=file123.jpg) Dann wird die QR Library reingeladen und eine URL erstellt. Dann wird mit der QR Code Library die URL in ein QR Code umgewandelt und direkt ausgegeben. Der Code geht so, den habe ich auch nicht verändert. Es kann sein, dass die Library nicht geht. Deswegen fragte ich ja, ob du mal qrcode.php?filename=file123.jpg aufrufen kannst und guckst, was passiert.
                
                05\. Jan 2017 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                    
                    Gregor
                    
                    Hi Andre, wenn ich die qrcode.php?filename=... öffne, passiert nichts - hab auch genau den Dateinamen genommen, wie er unter den Bildern zu finden ist. Die Seite bleibt leer.  
                    am raspberry pi 3 kann es nicht liegen, oder?  
                      
                    LG Gregor
                    
                    05\. Jan 2017 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/c2af30070b75c4f3f4737360202e462d?s=75&d=mm&r=g)
                    
                    Bernd
                    
                    Hallo Andre,  
                    ich habe mir das Thema noch einmal angesehen. Leider wird beim Aufruf der oben genannten Seite eine leere Seite angezeigt. Welche Lib muss denn hierfür installiert sein ?  
                      
                    Danke und Liebe Grüße  
                    Bernd
                    
                    06\. Jan 2017 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                    
                    Andre Rinas
                    
                    Hey Leute, ich glaube gerade dass es ein Fehler mit der PHP QR Code Library ist. Diese ist einfach im Ordner /resources/lib/phpqrcode/. Vielleicht ist die neue PHP-Version, die sich mitlerweile installiert, wenn man einen Apache auf dem Raspberry aufsetzt nicht mehr kompatibel zu der QR-Code Library. Am sichersten wäre ich, wenn jemand im Apache Error Log gucken könnte, welche Fehlermeldung dort auftaucht.  
                    André
                    
                    10\. Jan 2017 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/2100a77e246ad438b687b058e9e71eea?s=75&d=mm&r=g)
                        
                        Isabel
                        
                        Folgendes steht im Apache Error Log:  
                        PHP Fatal Error: Call to undefined function ImageCreate() in /var/WWW/html/resources/lib/phpqrcode/qrimage.php on line 74  
                          
                        Wie Sebastian unten beschrieben hat hilft folgendes:  
                        Installation der php -gd Funktion.  
                        sudo apt-get install php5-gd  
                          
                        Danach Apache neu starten:  
                        sudo /etc/init.d/apache2 restart  
                          
                        et voila, QR Code funktioniert!
                        
                        15\. Jan 2017 [Antworten](#)
                        
                        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                            
                            Andre Rinas
                            
                            Hallo Isabe, danke für die Fehlermeldung! Damit hätte ich es dir auch sagen können ;) Viel Spaß mit dem Photobooth!
                            
                            16\. Jan 2017 [Antworten](#)
                            
        
        *   ![](https://www.gravatar.com/avatar/c2af30070b75c4f3f4737360202e462d?s=75&d=mm&r=g)
            
            Bernd
            
            Hallo Andre,  
            ich denke, dass das QR-Code Bild aufgrund eines Rechteproblems nicht erzeugt werden kann.... Dieses Problem hatte ich ja auch, wie oben beschrieben. Hier habe den den Ordner "tumbs" manuell erstellt und die Rechte vergeben.  
              
            Kannst du mir bitte sagen, wohin die erzeugten \*.png Dateien für den QR-Code geschrieben werden? Vielleicht fehlen hier ja auch Rechte bzw. der Ordner existiert bei uns nicht.
            
            05\. Jan 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Bernd,  
                  
                die Bilder werden immer on the fly erstellt und nirgends gespeichert. Deswegen wirst du keine finden können. Kannst du mir sagen, welche PHP Version, welchen Raspberry und so weiter du hast?
                
                10\. Jan 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/514664d580bb37f4d2fd19a1ed05c5f8?s=75&d=mm&r=g)
    
    Nico
    
    Moin Andre,  
    Hut ab für die Idee des Aufbaus. Suche schon bestimmt nen Jahr nach so einer Geschichte. Umso mehr verzweilfel ich gerade. Habe eigentlich alles soweit gemacht wie beschrieben. Wenn ich allerdings jetzt auf dem Tablet auf Foto machen klicke läuft der Countdown, dann kommt eine Fehlermeldung und es wird auch kein Foto geschossen. Könntest du mir bitte nen Tipp geben woran es liegen kann?
    
    04\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/ae70f1428fd200c498815663ce3f0bff?s=75&d=mm&r=g)
        
        Christoph
        
        Habe leider den selben Fehler, weiß jemand, was man dagegen tun kann?
        
        28\. Aug 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
    
    Gregor
    
    Hallo, als absoluter Rasp Anfänger hatte ich anfangs meine schwierigkeit deiner Anleitung zu folgen, aber ich hab es irgendwie geschafft.  
      
    Hab dem Ordner images noch volle zugriffsrechte gewähren müssen, damit die Kamer auslöst (EOS 1300D).  
    Nun zu meinem Problem: ich kann genau 1 Foto machen, danach lässt sich meine Kamera nicht weiter bedienen bzw, löst nicht mehr aus.  
    Auf dem Webinterface wird das Bild angezeigt, klicke ich auf Galeria, kommt nichts, genau so wie bei den anderen Menüpunkten (QR Code). Klicke ich auf neues Bild, zählt der Countdown, jedoch passiert nichts. "Es ist ein Fehler passiert..."  
      
    Hat jemand eine Idee, wie ich das Problem gelöst bekomme? also Galerie und neues Foto erstellen. Ich weiß nicht, wo ich genau nach suchen muss...  
      
    Danke Gregor
    
    03\. Jan 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
        
        Gregor
        
        Nachdem mich das ganze gestern Abend noch beschäftigt hat (die eos 70D lief einwandfrei, die 1300D leider nicht) , hab ich meinen PI 3 einfach neu aufgesetzt und alles nach und nach neu installiert.  
        Habe jetzt gphoto2 V 2.5.10 drauf und apache mit php5.  
        kann jetzt Fotos machen, auch mehrere nacheinander, leider sehe ich wie bei einem anderem User dieses Webinterface keinen QR code. die datei data.txt wird erstellt und im Quellcode steht folgendens: http://greka.de/pb/fotobox\_qr.jpg  
          
        bin für jede Hilfe dankbar und auch ein Lob an Andre, für dieses tolle Plugin und die Anleitung!
        
        04\. Jan 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Hallo Gregor, gleiches Thema, wie bei Nico unten. Kannst du ebenfalls mal die qr.php Datei direkt aufrufen?
            
            04\. Jan 2017 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/81fce0e9e7181f3979f9daa82b0e41df?s=75&d=mm&r=g)
                
                Gregor
                
                Hi Andre, habe diese Datei nicht, nur qrcode.php. Wenn ich diese öffne, dann erscheint nur eine weiße Seite.  
                Dem Quelltext kann auch nichts abgewinnen.  
                  
                Im IE10 bekomme ich die Rückmeldung, dass diese Seite gar nicht erst existiert.  
                Firefox spuckt die weiße Seite aus  
                Chrome sagt, dass die Seite 192.168.10.44/qrcode.php nicht funktioniert.  
                auf allen Browsern läuft die index.php ohne erkenntliche Probleme.  
                  
                folgender Quelltext ist auf dem Pi in der qrcode.php  
                  
                  
                $filename = $\_GET\['filename'\];  
                include('resources/lib/phpqrcode/qrlib.php');  
                $url = 'http://'.$\_SERVER\['HTTP\_HOST'\].'/download.php?image=';  
                QRcode::png($url.$filename, false, QR\_ECLEVEL\_H, 10);  
                  
                Gruß Gregor
                
                04\. Jan 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/a18fa43d92a0e63c5f6ca6e69ca20194?s=75&d=mm&r=g)
    
    Manuel
    
    Hallo  
    ich hab es zum teil geschaft, es lag wohl doch an den Rechten der Ordner.  
    Das Bild wird gemacht, auch angezeigt und das Kleine in der Galerie wird auch generiert.  
      
    Jetzt nur noch was kleines, der QR Code wird nicht angezeigt. Bekomme auch nur ein weißes Feld.  
    Wo kann ich die Größe des Bildes einstellen. in der Galerie.  
    Das Bild in der Galerie ist zu groß für mein Tablet.  
      
    Vielen Dank für die Hilfe  
      
    Gruß  
    Manuel
    
    19\. Dec 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de/)
        
        Hallo Manuel, schön dass es jetzt schonmal soweit klappt. Das mit dem QR-Code ist seltsam. Kannst du mal in den Quellcode gucken, nachdem das Bild gemacht wurde und mir sagen, ob "qrcode.php?filename=derdateiname.jpg" drin steht? Also derdateiname ist natürlich dann dein gerade gemachtes Bild.  
        Grüße André
        
        20\. Dec 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a18fa43d92a0e63c5f6ca6e69ca20194?s=75&d=mm&r=g)
            
            Manuel
            
            Guten Morgen,  
            wenn das Bild gemacht wurde und ich geh dann auf Untersuchen dann macht es ja dem Quellcode auf, den meintest du oder ?  
              
            Dort steht nichts von qrcode.php.....drin.  
            Ist das das was du meintest oder muss ich wo anders schauen ?  
              
            Gruß Manuel
            
            20\. Dec 2016 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                Andre Rinas
                
                Hallo Manuel, ich meinte das hier:  
                http://www2.pic-upload.de/img/32328555/qr.png  
                  
                Grüße André
                
                20\. Dec 2016 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/a18fa43d92a0e63c5f6ca6e69ca20194?s=75&d=mm&r=g)
                    
                    Manuel
                    
                    nein die Zeile gibt es bei mir gar nicht.
                    
                    20\. Dec 2016 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/c2af30070b75c4f3f4737360202e462d?s=75&d=mm&r=g)
    
    Bernd
    
    Hallo Zusammen,  
    habe die Fotobox für unsere Hochzeit nachgebaut und muss muss sagen,  
    ich bin echt beeindruckt.  
      
    Das Auslösen der Kamera, Anzeigen und Speichern des Bildes funktioniert einwandfrei. Hier musste ich aber vorher noch die Rechte des Ordners /var/www/ ändern.  
      
    Leider wird aber der QR-Code für den Download des Bildes angezeigt. Wenn ich auf die Galerie klicke, dann wird kein Vorschaubild angezeigt. Es kommt ein weißer Rahmen und wenn man drauf klickt, dann wird das bild angezeigt.  
      
    Kann mir da bitte jemand auf die schnelle helfen?  
      
    Vielen Dank für eure Unterstützung.  
      
    Liebe Grüße
    
    13\. Dec 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de)
        
        Hallo Bernd, das hört sich nach einem Fehler in der Thumbnail-Generierung an. Hast du aconv installiert? Falls nicht, dann könnte das das Problem sein. Ansonsten habe ich ja schon gesagt, dass man die Generierung auch mit PHP oder ImageMagick machen könnte, dafür müsste man allerdings in einer Datei die Generierung des Thumbnails umschreiben.  
        Grüße André
        
        14\. Dec 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a18fa43d92a0e63c5f6ca6e69ca20194?s=75&d=mm&r=g)
    
    Manuel Dippel
    
    Hallo  
    die Idee zu der Foto box ist einfach super, hab auch alles soweit hinbekommen das es läuft.  
    die Dateien in den .../html Ordner kopiert, und die rechte bei dem Ordner vergeben.  
    Ich komme vom Pi im Browser über die IP Adresse zum Weboberfläche die auch soweit läuft.  
    Ich kann dann auf den Button Bild machen klicken, der Countdown läuft ab, dann kommt die Meldung Bild wird verarbeitet, und dabei bleibt es.  
    Bild wird nicht angezeigt und die Galerie ist auch leer.  
    Im Dateimanager mit Root rechten seh ich das Bild im Image Ordner, aber sonst nirgends.  
    Woran könnte das liegen ?  
    Vielen Dank im Voraus  
      
    Manuel
    
    06\. Dec 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de/)
        
        Hallo Manuel,  
        das hört sich an, als dürfte dein Raspberry nicht in den Ordner /thumbs speichern und auch nicht generell in den Ordner ./ . Da das Ganze ohne DB bisher auskommt wird eine Text-Datei angelegt, die im Verzeichnis des Skript liegt (../html/data.txt. Ist diese Datei vorhanden? Die Datei db.php legt diese an und die takePic.php gibt dieser jedes mal eine neue Zeile. Vielleicht kannst du /html und /html/thumbs/ Schreibrechte geben. Ansonsten melde dich gerne noch einmal ;)
        
        06\. Dec 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/a18fa43d92a0e63c5f6ca6e69ca20194?s=75&d=mm&r=g)
            
            Manuel
            
            Hallo Andre  
            vielen Dank für die schnelle Antwort, den Ordner /thumbs gibt es im Verzeichnis ../html nicht den hab ich aber mal angelegt.  
            ich habe mal für den ganzen Ordner /var/WWW Jeder Rechte vergeben.  
            Die Datei data.txt gibt es.  
            Geht aber immer noch nicht.  
            Gruß  
              
            Manuel
            
            06\. Dec 2016 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/c2af30070b75c4f3f4737360202e462d?s=75&d=mm&r=g)
            
            Bernd
            
            Hi,  
            ich weiß nicht, ob es noch aktuell ist, aber ich hatte das gleiche Problem und habe folgende Befehle in der Shell ausgeführt:  
              
            sudo chown -R pi: /var/www/  
            sudo chmod -R 777 /var/www/  
              
            vielleicht kommst du damit weiter.
            
            13\. Dec 2016 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/bce56f9ebc80ee680f2942829a3b498b?s=75&d=mm&r=g)
                
                Gerrit
                
                Hallo Zusammen, wir stolpern leider immer noch über das gleiche Problem. Irgendwie kommt es uns so vor, als würde er den TakePic.PHP nicht öffnen... wir haben alle Rechte freigegeben.
                
                05\. Feb 2017 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/5f1749153a43110487fda031ee063800?s=75&d=mm&r=g)
    
    Julius
    
    Vergiss was ich geschrieben habe. Dein Script funktioniert super und ich bin zu doof Unterordner mit zu kopieren!  
      
    Danke für das Tutorial
    
    26\. Nov 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5f1749153a43110487fda031ee063800?s=75&d=mm&r=g)
    
    Julius
    
    Hi,  
      
    Versuche nun seit längerem Dein Tutorial umzusetzen. Obwohl eigentlich alles installiert ist zeigt mir die Webseite leider nur 4 Linien und 6 graue Kästchen an. Ich habe keinen Button zum Auslösen der Kamera. Leider hab ich von PHP keine Ahnung aber würde die Kiste so gern ans Laufen bekommen. Hast du zufällig eine Idee woran es liegen könnte?
    
    26\. Nov 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4ca7cb4797a2b910d1a8348a8486fd07?s=75&d=mm&r=g)
    
    Flo
    
    Guten Abend zusammen, vielen Dank erst mal für diese super Idee bzw. Umsetzung! Ich bin schon seit längerem auf der Suche nach einer Umsetzung für eine Fotobox. Leider befasse ich mich erst seit kurzem mit dem Raspberry (inkl. Programmieren) aber ich möchte dennoch deine Anleitung /dein Projekt umsetzen.  
    Jetzt meine Fragen:  
      
    \- Wie und wo muss ich deinen Code von GitHub hinkopieren?  
      
    \- Muss ich das Modul für PHP herunterladen?  
      
    Wäre echt super wenn mir jemand helfen könnte! Habe meinen Schwiegervater in Spe versprochen, dass ich eine Fotobox für seinen 50zigsten Geb. mache und ich würde gerne diese total Idee umsetzen ansonsten muss ich es wieder (wie schond es öfteren) mit Laptop und dem Canon- Programm machen und 1000x die Frage beantworten wie die Leute an die Bilder kommen.  
      
    Vielen Dank schon mal für eure Hilfe.  
    Schönen Abend noch  
    Flo
    
    23\. Nov 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de/)
        
        Hallo Flo,  
          
        oben habe ich eine Anleitung geschrieben, die eigentlich alle Fragen beantworten sollten. Also folgendes. Du musst einen Webserver auf den Raspberry installieren https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md. Mit Php, da die Anwendung auf PHP läuft.  
          
        Danach ist auf deinem Raspberry der Ordner /var/www oder ggf /var/www/html. Dort kopierst du den Code von Github rein. Nun ist der Photobooth schon vorbereitet. Nun kannst du mit einem Browser die Seite des Raspberrys aufrufen. Dafür musst die IP des Gerätes herausfinden (https://www.raspberrypi.org/documentation/remote-access/ip-address.md). Ich hoffe das reicht dir schonmal um weiter zu kommen.
        
        24\. Nov 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=75&d=mm&r=g)
    
    Fred
    
    Hallo André, danke für die schöne Idee und die Verständliche Anleitung. Ich habe mir so einen Photobooth zusammengebaut. Vielen Dank dafür!
    
    22\. Nov 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/b003ef5183806f46a44271c1b28891b5?s=75&d=mm&r=g)
    
    Raju
    
    Hallo Sven,  
    welche Rechte für www-data hast genau vergeben?
    
    18\. Nov 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/421db9857b667219bc5dff027a10d755?s=75&d=mm&r=g)
        
        Caro
        
        Hallo Raju,  
          
        ich habe dem www-data einfach alle Rechte gegeben, da der Raspberry ein geschlossenes System bei mir ist.  
        in /etc/sudoers habe ich www-data ALL=(ALL) NOPASSWD: ALL hinzugefügt. Dann darf www-data auch ausführen.
        
        18\. Nov 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/b003ef5183806f46a44271c1b28891b5?s=75&d=mm&r=g)
            
            Raju
            
            Danke,  
            ich musste noch dem www-data in die Gruppe plugdev hinzufügen sowie die rules für meine Canon 600d unter /etc/udev/rules.d/45-libgphoto2.rules erweitern.  
              
            Jetzt funkioniert es Prima. Tolle Sache. Gestern habe ich einen Probelauf bei einem privaten Oktoberfest gemacht, Kam wirklich gut an. :)
            
            20\. Nov 2016 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Rinas](https://www.andrerinas.de/)
                
                Hallo Raju, das freut mich! Viel Spaß mit dem Photobooth. Wenn du ihn noch erweiterst, dann mache gerne Pull-Requests bei Github :)  
                  
                Grüße  
                André
                
                20\. Nov 2016 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/b003ef5183806f46a44271c1b28891b5?s=75&d=mm&r=g)
                    
                    Raju
                    
                    Hallo,  
                    die einzige Änderung was ich noch gemacht habe, ist, einen RPi3 zu verwenden und den lokalen Wlan Adapter als Access Point zu verwenden, ,so dass ich keinen extra Router brauche.
                    
                    22\. Nov 2016 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/72b27baa91d5220546fcdcaa406bd7ae?s=75&d=mm&r=g)
    
    Sven
    
    Danke für die schöne und schlanke Umsetzung. Mit den Rechten und www-data wollte es anfangs noch nicht klappen, ich musste www-data mehr Rechte geben. Das könntest du auch noch irgendwo erwähnen. Ansonsten vielen Dank!
    
    31\. Oct 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de/)
        
        Hallo Sven, danke für die Anmerkung. Ich werde es ergänzen.
        
        08\. Nov 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/efe6dbeabdcb4113433e3916b53ea400?s=75&d=mm&r=g)
    
    [Matthias](http://mkleine.de)
    
    Sehr schön! Finde ich spannend :) Auch gar nicht so kompliziert gemacht!  
      
    Fänd' es natürlich noch cool wenn man die Fotos über die Weboberfläche auch an einen Drucker senden könnte :)
    
    23\. Sep 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](http://www.andrerinas.de)
        
        Hallo Matthias,  
          
        das ist natürlich eine gute Idee und auch gar nicht so schwer machbar denke ich. Entweder man hat einen Drucker via Usb am Raspberry, oder der Drucker kann Wlan. Dann könnte man einfach das Bild an den Drucker senden. Wenn du es ausprobierst und Hilfe brauchst, melde dich gerne!  
          
        Grüße  
        André
        
        23\. Sep 2016 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/70d1b0a5c63eaf64edf5e717987264f4?s=75&d=mm&r=g)
        
        Christian K
        
        Hallo Andre hallo Mattias,  
          
        super Umsetzung und super Anleitung. Jetzt bin ich auch dran die Bilde an den Drucker zu schicken. Drucker ist über USB an Raspi angeschlossen, druck die Bilder über die Konsole auch aus, aus der Anwendung der Photobox allerdings nicht. Bin mit dem Latein am Ende.  
        Könnt ihr helfen?  
        Gruß  
        Christian
        
        15\. Sep 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            Andre Rinas
            
            Das hört sich nach einem Rechte-Problem an. Hast du mal geguckt ob www-data auch drucken darf?  
              
            Grüße
            
            17\. Sep 2017 [Antworten](#)
            

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.