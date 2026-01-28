---
title: 'DIY: Wordclock/Wortuhr selber bauen mit Arduino,Wlan,NeoPixel'
date: '2022-12-02T05:24:00.000Z'
slug: diy-wordclockwortuhr-selber-bauen-mit-arduino-wlan-neopixel
tags:
  - '1217'
  - '62'
  - '1278'
  - '1279'
  - '1280'
  - '547'
  - '1281'
  - '1282'
  - '1283'
  - '1284'
description: "\r\nAls ich letztens die originale QlockTwo&nbsp;gesehen habe war ich sofort verliebt. Nach kurzer Recherche habe ich dann ernüchternd festgestellt, dass ich soviel Geld nicht für eine Uhr ausgeben werde und mich sofort dran gemacht nach Alternativen zu suchen. Es gibt allerlei fertige Bausätze, bei denen man sich nur noch drum kümmern muss eine Frontplatte zu bekommen. Diese bewegen sich aber auch schon im 250€-Rahmen. In meinen Augen immernoch sehr teuer. Dann bin ich auf die Seite von Edgar alias techniccontroller gestoßen und wusste: \"So baue ich meine Wortuhr auch!\"\r\nInhaltsangabe:\r\n \tMaterialliste \tFrontplatte erstellen/ Folie anbringen \tSoftware auf dem Arduino NodeMCU installieren \tLED Matrix bauen/löten \tWeitere Komponenten verbinden/verlöten \tFertigstellung \tEinstellungen der Web-Oberfläche  Materialliste\r\n \tESP8266 NodeMCU V3 (ein Arduino) \tNetzteil mit Micro-Usb Kabel (5V, 3A) \tNeo-Pixel LED's (5m, 30 LED's/m) da wir 125 LED's brauchen \tBilderrahmen 50x50 (z.B Ribba von Ikea) \tEinen Widerstand (1000 ohm, 1k ohm) \tEinen Kondenstator (1000 uf) \tEinige Kabel \tPappkarton 50x50 \tCutter-Messer oder Schere \tLötkolben \tHeißkleber  Frontplatte erstellen/ Folie anbringen\r\nDie Frontplatte zu erstellen war dank Edgars Vorlage kein Problem. Ich habe die Schriftart, die Farben und ein paar Buchstaben geändert. Die bearbeitbare SVG und die fertig plotbare PDF liegen in meinem Git-Repository. (frontplatte_weiss.svg, frontplatte_weiss_pfad.pdf). Um die SVG zu bearbeiten benutzt man am einfachsten einfach Inkskape. Das Programm ist kostenlos und funktioniert wunderbar.\r\nBestellt habe ich meine Folie bei printingpoint.de. Dort dann einfach 50x50cm angeben und bei fast allen anderen Farben außer Schwarz die 2. Farbe auf Schwarz setzen, da man sonst Gefahr läuft, dass die Folie nicht blickdicht ist und man das Raster durchsieht.\r\nAls die Folie da war bin ich so vorgegangen:\r\n \tArbeitsfläche gründlich reinigen \tDie Glasplatte mit Glasreiniger gründlich reinigen \tWasser-Seifen-Mischung (Eine Sprühflsche voll mit einem guten Schuss Spülmittel) herstellen und in eine Sprühflasche füllen \tGlasplatte mit ordentlich Wasser-Seifen-Mischung besprühen \tKlebefolie von der Folie abziehen und vorsichtig aufs Glas anbringen \tMit einem Raken oder sonstigem harten aber stumpfen Gegenstand Luftbläschen und Wasser herausdrücken. Hierbei sollte man sich Zeit lassen. \tIst die Folie dann platziert kann man nach etwas&nbsp;Trocknungszeit dann auch die 2. Folie abziehen. Hierbei aber sehr vorsichtig vorgehen! Nicht dass einzelne Buchstaben dabei zerreißen. \r\nBei mir sah das Ganze dann so aus (Die oberste Folie war noch nicht entfernt) &nbsp;\r\nSoftware auf dem Arduino NodeMCU installieren\r\nAls erstes braucht ihr Arduino IDE. Nachdem ihr das Programm installiert habt clont euch mein Git-Repository in den \"Sketch\" Ordner von Arduino IDE (oder downloaded das Repository als Zip und entpackt es dort). Hier gehts zum Repository:&nbsp;https://github.com/andreknieriem/wordclock.\r\nUm den ESP8266 mit Arduino IDE nutzen zu können braucht die IDE erst noch die Board-Informationen. Dafür macht ihr einfach Folgendes:&nbsp;\r\n \tArduino IDE starten und das File -&gt; Preferences Fenster öffnen. \tDie folgende URL&nbsp;http://arduino.esp8266.com/stable/package_esp8266com_index.json&nbsp;muss in das \"Additional Board Manager URLs\" Feld. (Mehrere Url's lassen sich einfach mit Komma trennen.) \t\"Boards Manager\" unter \"Tools &gt; Board\" öffnen und nach \"esp8266\" suchen. Das Gefundene dann installieren mit dem \"install\" Knopf. \tJetzt noch das ESP8266 Board unter \"Tools &gt; Board\" auswählen&nbsp;(NodeMCU 1.0)&nbsp; \r\nNun kann man das Wortuhr OS installieren.\r\n \tÖffnet wordclock_esp8266.ino in Arduino IDE \tSchließt das&nbsp;ESP8266 Board an euren Computer an \tUnter Tools -&gt; Port den ESP8266 auswählen \tNun den \"Upload\"-Button&nbsp;in&nbsp;Arduino IDE anklicken um das Programm zu kompilieren und zum&nbsp;ESP8266 hochzuladen. \r\nNun startet das Board neu und ihr könnt mit dem Wifi-Setup fortsetzen um die Weboberfläche zu installieren und nutzen zu können.\r\n \tDer WiFiManager wird benutzt um eine Wlan Verbindung herzustellen. Hierfür erstellt dieser beim ersten Start einen Access-Point mit dem Namen&nbsp;\"WordclockAP\". Verbindet euer Handy oder euren PC mit dem WLAN und folgt den Anweisungen.&nbsp; \tNach erfolgreichem Setup verbindet sich euer&nbsp;ESP8266 mit dem WLAN und ihr könnt diesen über eine IP-Adresse erreichen. Zum herausfinden der IP-Adresse benutze ich die App \"Fing\" aus dem Playstore. \tÖffnet nun die IP in eurem Browser.&nbsp; \tHier könnt ihr jetzt den Filemanager (/data/fs.hml) hochladen. Anschließend einfach den restlichen&nbsp;\"data\" Ordner über den Filemanager hinzufügen. Achtet darauf, dass ihr einen icons Ordner habt und die icons auch dort landen. \r\nGeschafft! Die Software ist installiert und der&nbsp;ESP8266 ist einsatzbereit! Widmen wir uns jetzt dem Aufbau des LED's Gitters. LED Matrix bauen und verlöten\r\nAls erstes schneidet ihr vom LED-Band für die Buchstaben 11 Streifen á 11 LED's und einen Streifen mit 4 LED's für die Minuten ab. Zeichnet euch dann auf der Rückwand des Bilderrahmens ein Gitter, damit man die LED Streifen besser platzieren kann. Haltet euch unbedingt dafür eure Glasplatte an und macht die Linien exakt in der Mitte der Buchstaben, denn je nachdem wie man die Frontplatte gestaltet, müssen die Streifen weiter oben oder unten angesetzt werden. Um die Streifen sonst mittig zu platzieren müsst ihr einfach links und rechts 6,75cm Platz lassen. 11 LED's sind nämlich 36,5cm breit. Da der Bilderrahmen 50cm breit ist bleibt ein Rest von 13,5cm. Und diese dann halbiert sind 6,75cm.\r\nGANZ WICHTIG Auf dem LED Streifen sind Pfeile für die Richtung des Datenstroms. Da wir das Ganze im Zick-Zack-Muster verlöten werden müssen die Pfeile immer abwechselnd rechts und links zeigen.&nbsp;  Um das Gitter für die LED's zu bauen habe ich mich für dickeren Pappkarton von einem Versandpaket entschieden. Dieser ist fest genug, sodass er ohne Hilfsmittel selbst hält. Das Zuschneiden ist dabei allerdings etwas mühseliger.&nbsp;\r\nJetzt brauchen 25 Pappstreifen um das Gitter zu bauen. Die Maße dafür habe ich hier oben im Bild angezeichnet. Das war bei mir der längste Teil der Arbeit an der Uhr. Hat man das alles fertig, so kann man 24 Streifen ineinander stecken und hat ein schönes 11x11 Gitter. Die beiden seitlichen Streifen werden dabei allerdings genau auf den Lötstellen aufliegen. Hierfür müsst ihr also noch Löcher von unten hineinschneiden, damit die Kabel genug Platz und das Gitter euch nicht die Lötstellen kaputt macht.\r\nDen 25. Streifen kann man sich nun so zurechtschneiden, dass man die 4 LED's für die Minuten baut.&nbsp; Nun geht es ans Verlöten der LED-Streifen. Wie oben bereits erwähnt machen wir das Ganze im Zick-Zack. Anders als Edgar habe ich auch die 5V und GND nur im Zick-Zack verlötet, da es bei der Länge der Strecke bei mir keinen Verlust der Energie gab. Im nachfolgenden Bild kann man erkennen, was ich gemacht habe. Am Ende habe ich dann alle Stellen mit ordentlich Heißkleber befestigt und so auch isoliert.&nbsp; Weitere Komponenten verbinden/verlöten\r\nNun, da die LED-Matrix fertig ist fehlt uns noch die Verbindung zum Strom und zum&nbsp;ESP8266. Hier mal ein Schaubild wie das Ganze zusammengesetzt ist. Also im Groben haben wir ein Micro-USB Datenkabel. Ein Stromkabel würde für den Betrieb ausreichen, aber eventuell möchte man ja noch mal etwas an der Software ändern und kann dann die komplette Uhr einfach an den Computer anschließen. Dieses Kabel muss man vorsichtig auftrennen und dann das rote und schwarze Kabel freilegen. Das sind dann Rot 5V und Schwarz GND. Hier muss nun ein Kondensator eingelötet werden, da sonst die LED's Schaden nehmen können und jeweils ein Kabel dann weiter an die obere LED-Leiste.\r\nEin Kabel mit einem Widerstand, welches vom D1 Pin des&nbsp;ESP8266 zum oberen Anfang des LED-Gitters auf den D-IN Steckplatz geht. Der Widerstand ist nötig, da man sonst in Gefahr läuft, dass die erste LED kaputt geht.&nbsp;\r\nAuf dieser Seite stehen zum Widerstand und zum Kondensator und der generellen Stromversorgung der LED's noch auführlichere Details. Fertigstellung\r\nHat man die Komponenten nun alle verklebt und verlötet kann man das Ganze ja schonmal an den Strom anschließen. Wenn alles richtig läuft, dann wird die Uhr erst die 4 Minuten Anzeiger einblenden, dann einen Durchlauf aller LED's und dann zeigt es die letzten beiden Zahlen der IP an. Anschließend geht es in den Wortuhr-Modus. Hier ein Bild meiner Uhr nachdem alles soweit fertig war. Mit Gewebe-Klebeband habe ich die Kabel und komponenten so fixiert, sodass auch nichts wackelt oder rutscht, wenn man die Uhr aufhängt.\r\nJetzt kommt noch etwas sehr wichtiges. Man braucht eine \"Diffusionsfolie\". Man möchte ja, dass der komplette Buchstabe gleichmäßig leuchtet und nicht nur der Mittelpunkt weil dort die LED ist. Hier kann man sich ganz einfach mit Butterbrot-Papier, Architekten-Papier oder weißen Backpapier behelfen. Letzteres soll es bei Lidl geben - bei meinem leider nicht. Ich habe noch dickeres Butterbrot-Papier in der Bastelkiste gefunden. Das habe ich auf die Rückseite des Glases geklebt, sodass alle Buchstaben und die Minutenanzeige komplett bedeckt sind. Hiervon habe ich leider kein Bild, ich habe aber eins gefunden, dass man es verstehen sollte.\r\nAls letztes muss jetzt noch ein kleines Loch für das USB Kabel unten in die Mitte des Bilderrahmen gebohrt werden. Jetzt kann man alles seine Rückplatte mit der kompletten Hardware in den Bilderrahmen einlegen, die Klammern des Bilderrahmens wieder umknicken und man ist fertig. Zur Sicherheit habe ich die Rückplatte aber noch mit kleinen Schrauben fester eingestellt, damit man nicht Gefahr läuft, dass die Rückplatte vom Rahmen abfällt. Einstellungen über die Web-Oberfläche\r\nIn der Web-Oberfläche kann man diverse Einstellungen an der Uhr vornehmen oder in einen anderen Modus wechseln. So hat man die Wahl zwischen Wortuhr, Digitaluhr, Spirale, Snake, Tetris und Pong. Bei den beiden Uhren kann man die Farbe der LED's bestimmen. Bei meiner Uhr habe ich es auch auf weiß gestellt. Bei den 3 Spielen hat man dann die Pfeiltasten zum Spielen der Spiele. In den Einstellungen kann man noch die Zeit einstellen in der die Uhr in den Nachtmodus geht, also die LED's ausschaltet, einen Demo-Modus der alle Modi nacheinander durchwechselt, die Helligkeit der LED's, sowie den Puristen-Modus ein- oder ausschalten. Im eingeschalteten Modus wird die Einleitung \"Es ist\" nur bei vollen und halben Stunden angezeigt. Also: Es ist Drei Uhr. Es ist halb Vier, aber ansonsten nur beispielsweise Fünf nach Zehn. Ist der Modus ausgeschaltet wird \"Es ist\" immer angezeigt. Also das Beispiel von gerade zeigt dann Es ist Fünf nach Zehn.\r\nUnter dieser URL kann man sich eine Demo der Web-Oberfläche auch mal ansehen.\r\nhttps://www.andrerinas.de/wortuhr/\r\nDas wars! Ich hoffe der ein oder andere hat nun auch Lust eine Wortuhr selbst zu bauen. An dieser Stelle nochmal 1000 Dank an Edgar alias techniccontroller für seine tolle Arbeit und das Teilen dieser!"
image: /fileadmin/_processed_/f/0/csm_diy_1cbabee05e.png
demo_url: null
download_url: null
---

![](/fileadmin/_processed_/9/c/csm_wortuhr_modi_016668ae77.png)

Als ich letztens die originale [QlockTwo](https://qlocktwo.com/de/qlocktwo-classic-white-pepper) gesehen habe war ich sofort verliebt. Nach kurzer Recherche habe ich dann ernüchternd festgestellt, dass ich soviel Geld nicht für eine Uhr ausgeben werde und mich sofort dran gemacht nach Alternativen zu suchen. Es gibt allerlei fertige Bausätze, bei denen man sich nur noch drum kümmern muss eine Frontplatte zu bekommen. Diese bewegen sich aber auch schon im 250€-Rahmen. In meinen Augen immernoch sehr teuer. Dann bin ich auf die Seite von [Edgar alias techniccontroller](https://techniccontroller.de/word-clock-with-wifi-and-neopixel/) gestoßen und wusste: "So baue ich meine Wortuhr auch!"

### Inhaltsangabe:

*   Materialliste
*   Frontplatte erstellen/ Folie anbringen
*   Software auf dem Arduino NodeMCU installieren
*   LED Matrix bauen/löten
*   Weitere Komponenten verbinden/verlöten
*   Fertigstellung
*   Einstellungen der Web-Oberfläche

### Materialliste

*   ESP8266 NodeMCU V3 (ein Arduino)
*   Netzteil mit Micro-Usb Kabel (5V, 3A)
*   Neo-Pixel LED's (5m, 30 LED's/m) da wir 125 LED's brauchen
*   Bilderrahmen 50x50 (z.B Ribba von Ikea)
*   Einen Widerstand (1000 ohm, 1k ohm)
*   Einen Kondenstator (1000 uf)
*   Einige Kabel
*   Pappkarton 50x50
*   Cutter-Messer oder Schere
*   Lötkolben
*   Heißkleber

### Frontplatte erstellen/ Folie anbringen

Die Frontplatte zu erstellen war dank Edgars Vorlage kein Problem. Ich habe die Schriftart, die Farben und ein paar Buchstaben geändert. Die bearbeitbare SVG und die fertig plotbare PDF liegen in meinem Git-Repository. ([frontplatte\_weiss.svg](https://github.com/andreknieriem/wordclock/blob/main/frontplatte_weiss.svg), [frontplatte\_weiss\_pfad.pdf](https://github.com/andreknieriem/wordclock/blob/main/frontplatte_weiss_pfad.pdf)). Um die SVG zu bearbeiten benutzt man am einfachsten einfach [Inkskape](https://inkscape.org/de/). Das Programm ist kostenlos und funktioniert wunderbar.

Bestellt habe ich meine Folie bei [printingpoint.de](https://www.printingpoint.de/component/jshopping/folien-aufkleber/folienplots?Itemid=0). Dort dann einfach 50x50cm angeben und bei fast allen anderen Farben außer Schwarz die 2. Farbe auf Schwarz setzen, da man sonst Gefahr läuft, dass die Folie nicht blickdicht ist und man das Raster durchsieht.

Als die Folie da war bin ich so vorgegangen:

1.  Arbeitsfläche gründlich reinigen
2.  Die Glasplatte mit Glasreiniger gründlich reinigen
3.  Wasser-Seifen-Mischung (Eine Sprühflsche voll mit einem guten Schuss Spülmittel) herstellen und in eine Sprühflasche füllen
4.  Glasplatte mit ordentlich Wasser-Seifen-Mischung besprühen
5.  Klebefolie von der Folie abziehen und vorsichtig aufs Glas anbringen
6.  Mit einem Raken oder sonstigem harten aber stumpfen Gegenstand Luftbläschen und Wasser herausdrücken. Hierbei sollte man sich Zeit lassen.
7.  Ist die Folie dann platziert kann man nach etwas Trocknungszeit dann auch die 2. Folie abziehen. Hierbei aber sehr vorsichtig vorgehen! Nicht dass einzelne Buchstaben dabei zerreißen.

Bei mir sah das Ganze dann so aus (Die oberste Folie war noch nicht entfernt)

[![](/fileadmin/_processed_/0/b/csm_folie_glasplatte_b8a1e169a6.png)](/fileadmin/Daten/Tutorials/wortuhr/folie_glasplatte.png)

### Software auf dem Arduino NodeMCU installieren

Als erstes braucht ihr [Arduino IDE](https://www.arduino.cc/en/software). Nachdem ihr das Programm installiert habt clont euch mein Git-Repository in den "Sketch" Ordner von Arduino IDE (oder downloaded das Repository als Zip und entpackt es dort). Hier gehts zum Repository: [https://github.com/andreknieriem/wordclock](https://github.com/andreknieriem/wordclock).

Um den ESP8266 mit Arduino IDE nutzen zu können braucht die IDE erst noch die Board-Informationen. Dafür macht ihr einfach Folgendes: 

1.  Arduino IDE starten und das File -> Preferences Fenster öffnen.
2.  Die folgende URL [http://arduino.esp8266.com/stable/package\_esp8266com\_index.json](http://arduino.esp8266.com/stable/package_esp8266com_index.json) muss in das "Additional Board Manager URLs" Feld. (Mehrere Url's lassen sich einfach mit Komma trennen.)
3.  "Boards Manager" unter "Tools > Board" öffnen und nach "esp8266" suchen. Das Gefundene dann installieren mit dem "install" Knopf.
4.  Jetzt noch das ESP8266 Board unter "Tools > Board" auswählen (NodeMCU 1.0) 

#### Nun kann man das Wortuhr OS installieren.

1.  Öffnet wordclock\_esp8266.ino in Arduino IDE
2.  Schließt das ESP8266 Board an euren Computer an
3.  Unter Tools -> Port den ESP8266 auswählen
4.  Nun den "Upload"-Button in Arduino IDE anklicken um das Programm zu kompilieren und zum ESP8266 hochzuladen.

Nun startet das Board neu und ihr könnt mit dem Wifi-Setup fortsetzen um die Weboberfläche zu installieren und nutzen zu können.

1.  Der WiFiManager wird benutzt um eine Wlan Verbindung herzustellen. Hierfür erstellt dieser beim ersten Start einen Access-Point mit dem Namen "WordclockAP". Verbindet euer Handy oder euren PC mit dem WLAN und folgt den Anweisungen. 
2.  Nach erfolgreichem Setup verbindet sich euer ESP8266 mit dem WLAN und ihr könnt diesen über eine IP-Adresse erreichen. Zum herausfinden der IP-Adresse benutze ich die App ["Fing" aus dem Playstore.](https://play.google.com/store/apps/details?id=com.overlook.android.fing&hl=de&gl=US)
3.  Öffnet nun die IP in eurem Browser. 
4.  Hier könnt ihr jetzt den Filemanager (/data/fs.hml) hochladen. Anschließend einfach den restlichen "data" Ordner über den Filemanager hinzufügen. Achtet darauf, dass ihr einen icons Ordner habt und die icons auch dort landen.

Geschafft! Die Software ist installiert und der ESP8266 ist einsatzbereit! Widmen wir uns jetzt dem Aufbau des LED's Gitters.

### LED Matrix bauen und verlöten

Als erstes schneidet ihr vom LED-Band für die Buchstaben 11 Streifen á 11 LED's und einen Streifen mit 4 LED's für die Minuten ab. Zeichnet euch dann auf der Rückwand des Bilderrahmens ein Gitter, damit man die LED Streifen besser platzieren kann. Haltet euch unbedingt dafür eure Glasplatte an und macht die Linien exakt in der Mitte der Buchstaben, denn je nachdem wie man die Frontplatte gestaltet, müssen die Streifen weiter oben oder unten angesetzt werden. Um die Streifen sonst mittig zu platzieren müsst ihr einfach links und rechts 6,75cm Platz lassen. 11 LED's sind nämlich 36,5cm breit. Da der Bilderrahmen 50cm breit ist bleibt ein Rest von 13,5cm. Und diese dann halbiert sind 6,75cm.

GANZ WICHTIG  
Auf dem LED Streifen sind Pfeile für die Richtung des Datenstroms. Da wir das Ganze im Zick-Zack-Muster verlöten werden müssen die Pfeile immer abwechselnd rechts und links zeigen. 

[![](/fileadmin/_processed_/1/2/csm_ledstreifen_1459f07a73.png)](/fileadmin/Daten/Tutorials/wortuhr/ledstreifen.png)

[![](/fileadmin/_processed_/7/9/csm_gitter_streifen_fda09f2e3b.png)](/fileadmin/Daten/Tutorials/wortuhr/gitter_streifen.png)

[![](/fileadmin/_processed_/d/8/csm_erstellung_rahmen_3952b7640e.png)](/fileadmin/Daten/Tutorials/wortuhr/erstellung_rahmen.png)

[![](/fileadmin/_processed_/5/4/csm_fertiges_gitter_33189acb68.png)](/fileadmin/Daten/Tutorials/wortuhr/fertiges_gitter.png)

Um das Gitter für die LED's zu bauen habe ich mich für dickeren Pappkarton von einem Versandpaket entschieden. Dieser ist fest genug, sodass er ohne Hilfsmittel selbst hält. Das Zuschneiden ist dabei allerdings etwas mühseliger. 

Jetzt brauchen 25 Pappstreifen um das Gitter zu bauen. Die Maße dafür habe ich hier oben im Bild angezeichnet. Das war bei mir der längste Teil der Arbeit an der Uhr. Hat man das alles fertig, so kann man 24 Streifen ineinander stecken und hat ein schönes 11x11 Gitter. Die beiden seitlichen Streifen werden dabei allerdings genau auf den Lötstellen aufliegen. Hierfür müsst ihr also noch Löcher von unten hineinschneiden, damit die Kabel genug Platz und das Gitter euch nicht die Lötstellen kaputt macht.

Den 25. Streifen kann man sich nun so zurechtschneiden, dass man die 4 LED's für die Minuten baut. 

Nun geht es ans Verlöten der LED-Streifen. Wie oben bereits erwähnt machen wir das Ganze im Zick-Zack. Anders als Edgar habe ich auch die 5V und GND nur im Zick-Zack verlötet, da es bei der Länge der Strecke bei mir keinen Verlust der Energie gab. Im nachfolgenden Bild kann man erkennen, was ich gemacht habe. Am Ende habe ich dann alle Stellen mit ordentlich Heißkleber befestigt und so auch isoliert. 

![](/fileadmin/_processed_/3/f/csm_ledstreifen_verkabeln_a9ddda56e1.png)

[![](/fileadmin/_processed_/3/0/csm_technische_komponenten_9f20a79aa1.png)](/fileadmin/Daten/Tutorials/wortuhr/technische_komponenten.png)

### Weitere Komponenten verbinden/verlöten

Nun, da die LED-Matrix fertig ist fehlt uns noch die Verbindung zum Strom und zum ESP8266. Hier mal ein Schaubild wie das Ganze zusammengesetzt ist. Also im Groben haben wir ein Micro-USB Datenkabel. Ein Stromkabel würde für den Betrieb ausreichen, aber eventuell möchte man ja noch mal etwas an der Software ändern und kann dann die komplette Uhr einfach an den Computer anschließen. Dieses Kabel muss man vorsichtig auftrennen und dann das rote und schwarze Kabel freilegen. Das sind dann Rot 5V und Schwarz GND. Hier muss nun ein Kondensator eingelötet werden, da sonst die LED's Schaden nehmen können und jeweils ein Kabel dann weiter an die obere LED-Leiste.

Ein Kabel mit einem Widerstand, welches vom D1 Pin des ESP8266 zum oberen Anfang des LED-Gitters auf den D-IN Steckplatz geht. Der Widerstand ist nötig, da man sonst in Gefahr läuft, dass die erste LED kaputt geht. 

Auf [dieser Seite](https://learn.adafruit.com/adafruit-neopixel-uberguide/powering-neopixels#distributing-power-2894492) stehen zum Widerstand und zum Kondensator und der generellen Stromversorgung der LED's noch auführlichere Details.

### Fertigstellung

Hat man die Komponenten nun alle verklebt und verlötet kann man das Ganze ja schonmal an den Strom anschließen. Wenn alles richtig läuft, dann wird die Uhr erst die 4 Minuten Anzeiger einblenden, dann einen Durchlauf aller LED's und dann zeigt es die letzten beiden Zahlen der IP an. Anschließend geht es in den Wortuhr-Modus. Hier ein Bild meiner Uhr nachdem alles soweit fertig war. Mit Gewebe-Klebeband habe ich die Kabel und komponenten so fixiert, sodass auch nichts wackelt oder rutscht, wenn man die Uhr aufhängt.

Jetzt kommt noch etwas sehr wichtiges. Man braucht eine "Diffusionsfolie". Man möchte ja, dass der komplette Buchstabe gleichmäßig leuchtet und nicht nur der Mittelpunkt weil dort die LED ist. Hier kann man sich ganz einfach mit Butterbrot-Papier, Architekten-Papier oder weißen Backpapier behelfen. Letzteres soll es bei Lidl geben - bei meinem leider nicht. Ich habe noch dickeres Butterbrot-Papier in der Bastelkiste gefunden. Das habe ich auf die Rückseite des Glases geklebt, sodass alle Buchstaben und die Minutenanzeige komplett bedeckt sind. Hiervon habe ich leider kein Bild, ich habe aber eins gefunden, dass man es verstehen sollte.

Als letztes muss jetzt noch ein kleines Loch für das USB Kabel unten in die Mitte des Bilderrahmen gebohrt werden. Jetzt kann man alles seine Rückplatte mit der kompletten Hardware in den Bilderrahmen einlegen, die Klammern des Bilderrahmens wieder umknicken und man ist fertig. Zur Sicherheit habe ich die Rückplatte aber noch mit kleinen Schrauben fester eingestellt, damit man nicht Gefahr läuft, dass die Rückplatte vom Rahmen abfällt.

[![](/fileadmin/_processed_/4/c/csm_alle_komponenten_34729fa231.png)](/fileadmin/Daten/Tutorials/wortuhr/alle_komponenten.png)

[![](/fileadmin/_processed_/0/7/csm_diffusion_glasrueckseite_9bcdb23ac3.png)](/fileadmin/Daten/Tutorials/wortuhr/diffusion_glasrueckseite.png)

### Einstellungen über die Web-Oberfläche

In der Web-Oberfläche kann man diverse Einstellungen an der Uhr vornehmen oder in einen anderen Modus wechseln. So hat man die Wahl zwischen Wortuhr, Digitaluhr, Spirale, Snake, Tetris und Pong. Bei den beiden Uhren kann man die Farbe der LED's bestimmen. Bei meiner Uhr habe ich es auch auf weiß gestellt. Bei den 3 Spielen hat man dann die Pfeiltasten zum Spielen der Spiele. In den Einstellungen kann man noch die Zeit einstellen in der die Uhr in den Nachtmodus geht, also die LED's ausschaltet, einen Demo-Modus der alle Modi nacheinander durchwechselt, die Helligkeit der LED's, sowie den Puristen-Modus ein- oder ausschalten. Im eingeschalteten Modus wird die Einleitung "Es ist" nur bei vollen und halben Stunden angezeigt. Also: Es ist Drei Uhr. Es ist halb Vier, aber ansonsten nur beispielsweise Fünf nach Zehn. Ist der Modus ausgeschaltet wird "Es ist" immer angezeigt. Also das Beispiel von gerade zeigt dann Es ist Fünf nach Zehn.

Unter dieser URL kann man sich eine Demo der Web-Oberfläche auch mal ansehen.

[https://www.andrerinas.de/wortuhr/](https://www.andrerinas.de/wortuhr/)

Das wars! Ich hoffe der ein oder andere hat nun auch Lust eine Wortuhr selbst zu bauen. An dieser Stelle nochmal 1000 Dank an Edgar alias techniccontroller für seine tolle Arbeit und das Teilen dieser!

[![](/fileadmin/_processed_/4/a/csm_webscreen1_a833d6fb8f.png)](/fileadmin/Daten/Tutorials/wortuhr/webscreen1.png)

[![](/fileadmin/_processed_/e/b/csm_webscreen2_f3b0cc36c0.png)](/fileadmin/Daten/Tutorials/wortuhr/webscreen2.png)

[![](/fileadmin/_processed_/d/b/csm_webscreen3_45b18f6871.png)](/fileadmin/Daten/Tutorials/wortuhr/webscreen3.png)

[![](/fileadmin/_processed_/6/1/csm_webscreen5_4b65f910c2.png)](/fileadmin/Daten/Tutorials/wortuhr/webscreen5.png)

[![](/fileadmin/_processed_/a/e/csm_webscreen4_21ddd4bff6.png)](/fileadmin/Daten/Tutorials/wortuhr/webscreen4.png)