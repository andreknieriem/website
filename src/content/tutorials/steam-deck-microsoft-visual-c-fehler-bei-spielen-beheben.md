---
title: Steam Deck - Microsoft Visual C++ Fehler bei Spielen beheben
date: '2023-01-23T07:04:00.000Z'
slug: steam-deck-microsoft-visual-c-fehler-bei-spielen-beheben
tags:
  - steam deck
  - ' steamdeck'
  - ' microsoft'
  - ' c++'
  - ' runtime'
  - ' cracked'
  - ' game'
  - error
  - fehler
  - fix
  - howto
description: "Hat man ein Spiel außerhalb von Steam erworben, so kann es vorkommen, dass das Spiel nicht startet und die Fehlermeldung ausgibt, dass das Programm Microsoft Visual C++ erforderlich ist. Das Ganze lässt sich relativ einfach beheben. Zuerst müsst ihr das Programm in der x86 und x64 Version herunterladen. Meistens wird nur die x64 benötigt, aber bei älteren Spielen kann es schonmal vorkommen, dass die x86 Version gebraucht wird.\r\nDownload-Link hier zu finden, oder Visual C++ bei Google eingeben: https://learn.microsoft.com/de-DE/cpp/windows/latest-supported-vc-redist?view=msvc-170\r\nDort dann die beiden .exe-Dateien herunternladen auf das Steamdeck.\r\nAls nächstes müsst ihr die beiden .exe Dateien im Desktop-Modus zu Steam hinzufügen. Dafür Steam öffnen und unten links auf Spiel hinzufügen klicken und \"Nicht-Steam Spiel\" auswählen. Danach in den Download-Ordner navigieren jeweils die .exe Datei auswählen. Um die Datei jetzt zu installieren müsst ihr dann auf das hinzugefügte \"Spiel\" klicken und dort dann auf Einstellungen. Dort dann unter Kompabilität Proton auswählen. Danach kann man die das \"Spiel\" starten und installieren lassen. Hat man beides installiert muss man jetzt die Installations-Ordner finden.\r\nNavigiert mit eurem File-Browser dann zu diesem Pfad:&nbsp;/home/deck/.local/share/Steam/steamapps/compatdata/\r\nHier liegen dann einige Ordner, die nur aus Nummern bestehen. Hier muss man jetzt die beiden Installationen finden. Am einfachsten geht man in die Listen-Ansicht und sortiert diese nach Änderungsdatum. Dann müsste man 2 Ordner haben, die vor kurzem installiert wurden. Kopiert euch die beiden Nummern.\r\nAls nächstes empfehle ich eine Text-Datei auf dem Steamdeck anzulegen und dort dann den folgenden Text einzufügen, da man bei. jedem Spiel, dass den Fehler hat das gleich Folgende wiederholen muss.\r\n\r\n #x86\r\nSTEAM_COMPAT_DATA_PATH=/home/deck/.local/share/Steam/steamapps/compatdata/(Ordner-Nummer hier einfügen) %command%\r\n\r\n#x64\r\nSTEAM_COMPAT_DATA_PATH=/home/deck/.local/share/Steam/steamapps/compatdata/(Ordner-Nummer hier einfügen) %command% Habt ihr beide Kommandos mit den richtigen Ordner-Nummern versehen, so empfehle ich euch das Kommando des x64 zu kopieren. Dann navigiert ihr in Steam zu dem Spiel, dass die Fehlermeldung wirft. Geht wieder in die Einstellungen des Spiels und dieses mal unter \"Startoptionen\" den eben kopierten Befehl einfügen. Das wars auch schon für die meisten Spiele. Danach sollte das Spiel ohne Fehlermeldung starten. Kommt der Fehler weiterhin, so kann man jetzt noch probieren, den Befehl des x86 einzufügen. Das sollte aber nur bei älteren Spielen nötig sein."
image: /fileadmin/_processed_/7/a/csm_steamdeck_d9f987fd91.png
demo_url: null
download_url: null
---

![](/fileadmin/Daten/Tutorials/visualcpp-error.png)

Hat man ein Spiel außerhalb von Steam erworben, so kann es vorkommen, dass das Spiel nicht startet und die Fehlermeldung ausgibt, dass das Programm Microsoft Visual C++ erforderlich ist. Das Ganze lässt sich relativ einfach beheben. Zuerst müsst ihr das Programm in der x86 und x64 Version herunterladen. Meistens wird nur die x64 benötigt, aber bei älteren Spielen kann es schonmal vorkommen, dass die x86 Version gebraucht wird.

Download-Link hier zu finden, oder Visual C++ bei Google eingeben:  
[https://learn.microsoft.com/de-DE/cpp/windows/latest-supported-vc-redist?view=msvc-170](https://learn.microsoft.com/de-DE/cpp/windows/latest-supported-vc-redist?view=msvc-170)

Dort dann die beiden .exe-Dateien herunternladen auf das Steamdeck.

Als nächstes müsst ihr die beiden .exe Dateien im Desktop-Modus zu Steam hinzufügen. Dafür Steam öffnen und unten links auf Spiel hinzufügen klicken und "Nicht-Steam Spiel" auswählen. Danach in den Download-Ordner navigieren jeweils die .exe Datei auswählen. Um die Datei jetzt zu installieren müsst ihr dann auf das hinzugefügte "Spiel" klicken und dort dann auf Einstellungen. Dort dann unter Kompabilität Proton auswählen. Danach kann man die das "Spiel" starten und installieren lassen. Hat man beides installiert muss man jetzt die Installations-Ordner finden.

Navigiert mit eurem File-Browser dann zu diesem Pfad: /home/deck/.local/share/Steam/steamapps/compatdata/

Hier liegen dann einige Ordner, die nur aus Nummern bestehen. Hier muss man jetzt die beiden Installationen finden. Am einfachsten geht man in die Listen-Ansicht und sortiert diese nach Änderungsdatum. Dann müsste man 2 Ordner haben, die vor kurzem installiert wurden. Kopiert euch die beiden Nummern.

Als nächstes empfehle ich eine Text-Datei auf dem Steamdeck anzulegen und dort dann den folgenden Text einzufügen, da man bei. jedem Spiel, dass den Fehler hat das gleich Folgende wiederholen muss.

```bash
#x86
STEAM_COMPAT_DATA_PATH=/home/deck/.local/share/Steam/steamapps/compatdata/(Ordner-Nummer hier einfügen) %command%

#x64
STEAM_COMPAT_DATA_PATH=/home/deck/.local/share/Steam/steamapps/compatdata/(Ordner-Nummer hier einfügen) %command%
```

Habt ihr beide Kommandos mit den richtigen Ordner-Nummern versehen, so empfehle ich euch das Kommando des x64 zu kopieren. Dann navigiert ihr in Steam zu dem Spiel, dass die Fehlermeldung wirft. Geht wieder in die Einstellungen des Spiels und dieses mal unter "Startoptionen" den eben kopierten Befehl einfügen. Das wars auch schon für die meisten Spiele. Danach sollte das Spiel ohne Fehlermeldung starten. Kommt der Fehler weiterhin, so kann man jetzt noch probieren, den Befehl des x86 einzufügen. Das sollte aber nur bei älteren Spielen nötig sein.