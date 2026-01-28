---
title: 'Steam Deck: EA Origin Spiele installieren und lauffähig machen'
date: '2023-01-27T09:34:00.000Z'
slug: steam-deck-ea-origin-spiele-installieren-und-lauffaehig-machen
tags:
  - '1288'
  - '1295'
  - '1296'
  - '1297'
  - '1218'
  - '1298'
  - '1299'
  - '1300'
description: "In diesem Tutorial geht es darum EA Origin Spiele auf dem Steam Deck zum Laufen zu bringen. Dies ist mitlerweile recht einfach möglich und funktioniert wunderbar. Es gibt ja immernoch viele Spiele die Origin exklusiv.\r\nOrigin auf dem Steam Deck installieren (Tutorial)\r\n \tGeht in den Desktop-Modus. Dort kommt ihr einfach über den&nbsp;Steam Button -&gt; Ausschalt/Neustart Button hin. \tNun auf die offiziellle EA Webseite gehen und Origin herunterladen. (Hier kllicken&nbsp;zum Download).&nbsp; \tAls nächstes müssen wir die Origin.exe zu Steam hinzufügen. Dafür Steam öffnen und unten links ein Non-Steam Spiel hinzufügen. \tMit&nbsp;\"Durchsuchen\", den Origin Installer OriginThinSetup.exe hinzufügen. Eventuell müsst ihr auf \"Alle Dateien\" umstellen, da die Datei sonst nicht angezeigt wird. \tNun auf die Einstellungen des \"Spiels\" via Rechtsklick öffnen und dort unter Kompabilität Proton (Experimental) auswählen. \tJetzt Origin ganz normal installieren lassen. Jetzt kann man den Installer aus den Steam Apps löschen und muss die installierte Origin.exe finden und zuweisen. \tDa Origin mit Proton installiert wurde muss man jetzt das sogenannte \"wine prefix\" herausfinden. Navigiert in diesen Ordner&nbsp;/home/deck/.local/share/Steam/steamapps/compatdata \tHier sind jetzt einige Ordner mit Nummern versehen. Geht am besten in die Listen-Ansicht und sortiert nach Änderungsdatum. Der neueste Ordner sollte dann euer Origin Ordner sein. Diese Nummer unbedingt merken und vielleicht sogar aufschreiben in eine Text-Datei. \tFügt jetzt in Steam wieder ein neues \"Spiel\" hinzu und navigiert in den eben herausgefundenen Ordner und geht tiefer bis:&nbsp;pfx/drive_c/Program Files (x86)/Origin \tIn dem Ordnler liegt dann die Origin.exe. Wählt diese aus. Nun habt ihr Origin im Steam installiert. Hier natürlich unter Kompabilität wieder proton auswählen. \tNun könnt ihr Origin ausführen und Spiele installieren. \r\nOrigin Spiele zu Steam hinzufügen\r\nMöchte man jetzt nicht jedes Mal Origin öffnen um die Spiele zu starten, sondern die einzelnen Spiele direkt in eurer Bibliothek sehen, so müsst ihr folgende Schritte ausführen.\r\n \tÖffnet Steam und sagt wieder Spiel hinzufügen. \tNavigiert via Durchsuchen zum&nbsp;Origin Ordner&nbsp;/home/deck/.local/share/Steam/steamapps/compatdata/Origin_Installation_Nummer&nbsp;und dorrt dann weiter zu \tpfx/drive_c/Program Files (x86)/Origin Games. Hier sind alle Spiele zu finden, die über Origin auf dem Deck installiert sind. Dort dann die jeweilige exe-Datei des Spiels finden und hinzufügen \tDanach ist das Spiel schon im Steam aber noch nicht spielbar. \t(OPTIONAL) In dem Fenster kann man oben den Namen ändern. Fügt dort den Namen exakt so ein, wie er auf&nbsp;SteamDB&nbsp;steht. Falls es das Spiel auch auf Steam gibt findet Steam das Spiel nun und fügt direkt die richtigen&nbsp;Controller Layouts hinzu. \tDarunter gibt es den Punkt “Start Optionen”. Hier müsst ihr dann Folgendes eingeben: \tSTEAM_COMPAT_DATA_PATH=\"/home/deck/.local/share/Steam/steamapps/compatdata//Origin_Installation_Nummer\" %command% \tUnd als letzter Schritt noch “Proton” unter&nbsp;Kompabilität auswählen und ihr seid fertig! \r\nIch hoffe, dass ihr anhand des Tutorials Origin Spiele spielen könnt."
image: /fileadmin/_processed_/7/a/csm_steamdeck_d9f987fd91.png
demo_url: null
download_url: null
---

In diesem Tutorial geht es darum EA Origin Spiele auf dem Steam Deck zum Laufen zu bringen. Dies ist mitlerweile recht einfach möglich und funktioniert wunderbar. Es gibt ja immernoch viele Spiele die Origin exklusiv sind.

## Origin auf dem Steam Deck installieren (Tutorial)

1.  Geht in den Desktop-Modus. Dort kommt ihr einfach über den Steam Button -> Ausschalt/Neustart Button hin.
2.  Nun auf die offiziellle EA Webseite gehen und Origin herunterladen. ([Hier kllicken](https://origin-a.akamaihd.net/Origin-Client-Download/origin/live/OriginThinSetup.exe) zum Download). 
3.  Als nächstes müssen wir die Origin.exe zu Steam hinzufügen. Dafür Steam öffnen und unten links ein Non-Steam Spiel hinzufügen.
4.  Mit "Durchsuchen", den Origin Installer OriginThinSetup.exe hinzufügen. Eventuell müsst ihr auf "Alle Dateien" umstellen, da die Datei sonst nicht angezeigt wird.
5.  Nun auf die Einstellungen des "Spiels" via Rechtsklick öffnen und dort unter Kompabilität Proton (Experimental) auswählen.
6.  Jetzt Origin ganz normal installieren lassen. Jetzt kann man den Installer aus den Steam Apps löschen und muss die installierte Origin.exe finden und zuweisen.
7.  Da Origin mit Proton installiert wurde muss man jetzt das sogenannte "wine prefix" herausfinden. Navigiert in diesen Ordner **/home/deck/.local/share/Steam/steamapps/compatdata**  
    Hier sind jetzt einige Ordner mit Nummern versehen. Geht am besten in die Listen-Ansicht und sortiert nach Änderungsdatum. Der neueste Ordner sollte dann euer Origin Ordner sein. Diese Nummer unbedingt merken und vielleicht sogar aufschreiben in eine Text-Datei.
8.  Fügt jetzt in Steam wieder ein neues "Spiel" hinzu und navigiert in den eben herausgefundenen Ordner und geht tiefer bis: **pfx/drive\_c/Program Files (x86)/Origin**
9.  In dem Ordnler liegt dann die Origin.exe. Wählt diese aus. Nun habt ihr Origin im Steam installiert. Hier natürlich unter Kompabilität wieder proton auswählen.
10.  Nun könnt ihr Origin ausführen und Spiele installieren.

## Origin Spiele zu Steam hinzufügen

Möchte man jetzt nicht jedes Mal Origin öffnen um die Spiele zu starten, sondern die einzelnen Spiele direkt in eurer Bibliothek sehen, so müsst ihr folgende Schritte ausführen.

1.  Öffnet Steam und sagt wieder Spiel hinzufügen.
2.  Navigiert via Durchsuchen zum Origin Ordner **/home/deck/.local/share/Steam/steamapps/compatdata/Origin\_Installation\_Nummer** und dorrt dann weiter zu  
    **pfx/drive\_c/Program Files (x86)/Origin Games**. Hier sind alle Spiele zu finden, die über Origin auf dem Deck installiert sind. Dort dann die jeweilige exe-Datei des Spiels finden und hinzufügen
3.  Danach ist das Spiel schon im Steam aber noch nicht spielbar.
4.  (OPTIONAL) In dem Fenster kann man oben den Namen ändern. Fügt dort den Namen exakt so ein, wie er auf [SteamDB](https://steamdb.info/) steht. Falls es das Spiel auch auf Steam gibt findet Steam das Spiel nun und fügt direkt die richtigen Controller Layouts hinzu.
5.  Darunter gibt es den Punkt “Start Optionen”. Hier müsst ihr dann Folgendes eingeben:  
    **STEAM\_COMPAT\_DATA\_PATH="/home/deck/.local/share/Steam/steamapps/compatdata//Origin\_Installation\_Nummer" %command%**
6.  Und als letzter Schritt noch “Proton” unter Kompabilität auswählen und ihr seid fertig!

Ich hoffe, dass ihr anhand des Tutorials Origin Spiele spielen könnt.