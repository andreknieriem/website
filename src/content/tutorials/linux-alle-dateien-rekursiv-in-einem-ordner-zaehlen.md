---
title: 'Linux: Alle Dateien rekursiv in einem Ordner zählen'
date: '2017-03-18T23:00:00.000Z'
slug: linux-alle-dateien-rekursiv-in-einem-ordner-zaehlen
tags:
  - '203'
  - '899'
  - '492'
  - '784'
  - '968'
  - '861'
  - '91'
  - '969'
  - '949'
description: >-
  Möchte man auf einem Linux-Betriebssystem alle Dateien innerhalb eines Ordners
  und dessen Unterordner (rekursiv) zählen, so geht das ganz einfach mit
  folgendem Befehl. Einfach&nbsp;&quot;DIR_NAME&quot; durch den Ordnernamen
  ersetzen, in dem gezählt werden soll.&nbsp; find DIR_NAME -type f | wc -l
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Linux

* * *

![](/fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#rekursiv](/tag.html?tag=91&cHash=a5f6c8eeac45f62e095e922690b3e2d1)[#linux](/tag.html?tag=203&cHash=a988c07c8fcb1b9d8276b2e73ba3a6f3)[#ubuntu](/tag.html?tag=492&cHash=e77b6ae065d6e25c792e5e415713b0f1)[#count](/tag.html?tag=784&cHash=a893d79ffd0c5f616b80f08ed0b5706e)[#recursive](/tag.html?tag=861&cHash=9bb9359c98c52ee14ba50177e056a49a)[#unix](/tag.html?tag=899&cHash=2c756a0d97bfd07f38f4a82b3badf541)[#files](/tag.html?tag=949&cHash=238a68ae0fe0dfa802da3092ada676f7)[#zählen](/tag.html?tag=968&cHash=5b6c7bd866469b2f752492cf0008f26e)[#dateien](/tag.html?tag=969&cHash=f3c3dda983764caaaf42fe4ae5d77645)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Mar 2017

Möchte man auf einem Linux-Betriebssystem alle Dateien innerhalb eines Ordners und dessen Unterordner (rekursiv) zählen, so geht das ganz einfach mit folgendem Befehl. Einfach "**DIR\_NAME**" durch den Ordnernamen ersetzen, in dem gezählt werden soll. 

```
find DIR_NAME -type f | wc -l
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.