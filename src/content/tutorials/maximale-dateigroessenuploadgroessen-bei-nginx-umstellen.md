---
title: Maximale Dateigrößen/Uploadgrößen bei nginx umstellen
date: '2013-09-25T05:14:51.000Z'
slug: maximale-dateigroessenuploadgroessen-bei-nginx-umstellen
tags:
  - '201'
  - '202'
  - '203'
  - '204'
description: >
  Dort dann einfach den Wert der bei client_max_body_size auf die Größe eurer
  Wahl ändern. Also beispielsweise: 

  client_max_body_size 3M
   Danach noch den nginx neustarten. 
  /etc/init.d/nginx restart
   Das wars auch schon! Bekommt man bei einem auf nginx basiertem Server die Fehlermeldung: 
  413 Request Entity Too Large
   hat das den Grund, dass nginx auch eine Filegrößenbeschränkung hat. Diese kann man ganz einfach ändern.
  Geht dafür in den Ordner in dem nginx liegt (meistens /etc/nginx) und öffnet
  die Datei nginx.conf. 

  // Ihr könnt meistens einen der beiden Editoren benutzen

  vi ./nginx.conf

  nano ./nginx.conf
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#client\_max\_body\_size](/tag.html?tag=201&cHash=20bd1b25f8e79447657ea286eb950a44)[#filesize](/tag.html?tag=202&cHash=bbcb387e2670d7ac2328cabc81b0d770)[#linux](/tag.html?tag=203&cHash=a988c07c8fcb1b9d8276b2e73ba3a6f3)[#nginx](/tag.html?tag=204&cHash=5805b09fbd97361a7ac4cb89c07fe689)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

25\. Sep 2013

Bekommt man bei einem auf nginx basiertem Server die Fehlermeldung:

```

413 Request Entity Too Large
```

hat das den Grund, dass nginx auch eine Filegrößenbeschränkung hat. Diese kann man ganz einfach ändern.

Geht dafür in den Ordner in dem nginx liegt (meistens /etc/nginx) und öffnet die Datei nginx.conf.

```

// Ihr könnt meistens einen der beiden Editoren benutzen
vi ./nginx.conf
nano ./nginx.conf
```

Dort dann einfach den Wert der bei client\_max\_body\_size auf die Größe eurer Wahl ändern. Also beispielsweise:

```

client_max_body_size 3M
```

Danach noch den nginx neustarten.

```

/etc/init.d/nginx restart
```

Das wars auch schon!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.