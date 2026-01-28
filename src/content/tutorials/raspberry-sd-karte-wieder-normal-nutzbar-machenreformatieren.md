---
title: 'Raspberry: SD Karte wieder normal nutzbar machen(reformatieren)'
date: '2017-11-04T23:00:00.000Z'
slug: raspberry-sd-karte-wieder-normal-nutzbar-machenreformatieren
tags:
  - raspberry
  - reset
  - reformat
  - sd
  - card
  - partition
description: "Hat man eine SD-Karte im Raspberry Pi benutzt und schließt diese dann an einen Rechner an, so wird die SD-Karte als ca 50MB großes Volumen angezeigt. Wenn man dieses nun formatiert erhält man trotzdem nicht komplette Größe zurück. Hier ein paar Beispiele, wie man die Karte wieder richtig zurücksetzt für die jeweiligen Betriebssysteme.\r\nWindows\r\ncmd.exe startenDISKPART eingeben und mit Enter bestätigenLIST DISK eingeben und die SD Karte findenSELECT DISK # (die Raute muss hier die Nummer der Karte sein)CLEAN (ACHTUNG, vergewissern, dass ihr die richtige DISK ausgewählt habt, sonst macht ihr euch euer Betriebssystem kaputt)CREATE PARTITION PRIMARYFORMAT FS=FAT32 QUICK\r\nMAC/Linux\r\nTerminal startenfdisk -l um die Liste der zu bekommen und die SD-Karte zu findenfdisk /dev/sdx&nbsp; (/dev/sdx&nbsp;muss hier die Nummer der Karte sein)d um alle partitionen zu löschenmount um die SD-Karte wieder zu laden\r\nBei allen Dingen muss man vorsichtig sein, um sich sein Betriebssystem nicht zu formatieren oder die Festplattte auszuwerfen."
image: /fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png
demo_url: null
download_url: null
---

Hat man eine SD-Karte im Raspberry Pi benutzt und schließt diese dann an einen Rechner an, so wird die SD-Karte als ca 50MB großes Volumen angezeigt. Wenn man dieses nun formatiert erhält man trotzdem nicht komplette Größe zurück. Hier ein paar Beispiele, wie man die Karte wieder richtig zurücksetzt für die jeweiligen Betriebssysteme.

**Windows**

1.  cmd.exe starten
2.  DISKPART eingeben und mit Enter bestätigen
3.  LIST DISK eingeben und die SD Karte finden
4.  SELECT DISK # (die Raute muss hier die Nummer der Karte sein)
5.  CLEAN **(ACHTUNG, vergewissern, dass ihr die richtige DISK ausgewählt habt, sonst macht ihr euch euer Betriebssystem kaputt)**
6.  CREATE PARTITION PRIMARY
7.  FORMAT FS=FAT32 QUICK

**MAC/Linux**

1.  Terminal starten
2.  fdisk -l um die Liste der zu bekommen und die SD-Karte zu finden
3.  fdisk /dev/sdx  (/dev/sdx muss hier die Nummer der Karte sein)
4.  d um alle partitionen zu löschen
5.  mount um die SD-Karte wieder zu laden

Bei allen Dingen muss man vorsichtig sein, um sich sein Betriebssystem nicht zu formatieren oder die Festplattte auszuwerfen.