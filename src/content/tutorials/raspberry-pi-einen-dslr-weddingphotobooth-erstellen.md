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
demo_url: null
download_url: null
---

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