---
title: 'Raspberry: SD Karte wieder normal nutzbar machen(reformatieren)'
date: '2017-11-04T23:00:00.000Z'
slug: raspberry-sd-karte-wieder-normal-nutzbar-machenreformatieren
tags:
  - '547'
  - '1008'
  - '1015'
  - '606'
  - '607'
  - '1016'
description: "Hat man eine SD-Karte im Raspberry Pi benutzt und schließt diese dann an einen Rechner an, so wird die SD-Karte als ca 50MB großes Volumen angezeigt. Wenn man dieses nun formatiert erhält man trotzdem nicht komplette Größe zurück. Hier ein paar Beispiele, wie man die Karte wieder richtig zurücksetzt für die jeweiligen Betriebssysteme.\r\nWindows\r\ncmd.exe startenDISKPART eingeben und mit Enter bestätigenLIST DISK eingeben und die SD Karte findenSELECT DISK # (die Raute muss hier die Nummer der Karte sein)CLEAN (ACHTUNG, vergewissern, dass ihr die richtige DISK ausgewählt habt, sonst macht ihr euch euer Betriebssystem kaputt)CREATE PARTITION PRIMARYFORMAT FS=FAT32 QUICK\r\nMAC/Linux\r\nTerminal startenfdisk -l um die Liste der zu bekommen und die SD-Karte zu findenfdisk /dev/sdx&nbsp; (/dev/sdx&nbsp;muss hier die Nummer der Karte sein)d um alle partitionen zu löschenmount um die SD-Karte wieder zu laden\r\nBei allen Dingen muss man vorsichtig sein, um sich sein Betriebssystem nicht zu formatieren oder die Festplattte auszuwerfen."
image: /fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Raspberry

* * *

![](/fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#raspberry](/tag.html?tag=547&cHash=8d50f95db3926da29d185e9761fae9ed)[#sd](/tag.html?tag=606&cHash=4ab164274d2c334a182c2bc0b0052308)[#card](/tag.html?tag=607&cHash=0df074d3ef20095e4cb6ee546420e031)[#reset](/tag.html?tag=1008&cHash=90b584dc7e7fe6a0e888876c4b49035c)[#reformat](/tag.html?tag=1015&cHash=9b3ecc89691c577d932fabec88f9fabe)[#partition](/tag.html?tag=1016&cHash=4b9750652507ffd9f6c313750fa02d7e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Nov 2017

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a432f158ee53df17b7682a02c4666111?s=75&d=mm&r=g)
    
    Armin
    
    Danke für die klare Anleitung.  
    Hat mir sehr geholfen eine SD Karte von Linux wieder unter Windows normal nutzbar zu machen,
    
    08\. Sep 2023 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/1713cac6a78d466b9e1af370eb45abdd?s=75&d=mm&r=g)
    
    Hannes Schleeh
    
    Hallo,  
    vielen Dank für die Tutorials. Leider ist die Anleitung für den Mac so nicht umsetzbar. Könnte etwas ausführlicher sein, oder man könnte das zur Anleitung benutzte MacOS angeben. Bei mir geht damit jedenfalls nichts.  
    Gruß Hannes
    
    09\. Jun 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/305f4612c8c7ad3cd51ae5d3fe74c70a?s=75&d=mm&r=g)
        
        Walter
        
        Hi, es hat so unter Raspberrypi OS im Terminal funktioniert, wenn man "sudo" vorangestellt hat.
        
        15\. Dec 2021 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.