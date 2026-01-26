---
title: 'Linux: Bash History mit Bild Hoch/Runter Page Up/Down'
date: '2016-09-05T22:00:00.000Z'
slug: linux-bash-history-mit-bild-hochrunter-page-updown
tags:
  - '899'
  - '203'
  - '900'
  - '182'
  - '901'
  - '902'
  - '210'
description: "Auf meinem Server benutze ich sehr häufig Page Up und Page Down um durch meine History zu navigieren. Allerdings ist dieses Feature standardmäßig auf jedem Server ausgeschaltet.&nbsp;\r\nUm das nützliche Feature einzuschalten muss man nur in der Datei&nbsp;/etc/inputrc die folgenden Zeilen auskommentieren: # alternate mappings for \"page up\" and \"page down\" to search the history\r\n\"\\e[5~\": history-search-backward\r\n\"\\e[6~\": history-search-forward"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Linux: Bash History mit Bild Hoch/Runter Page Up/Down

#Tutorials#Linux

* * *

![](/fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#pageup](/tag.html?tag=182&cHash=5c18ac425095d70a5930ad8e8e6de7e7)[#linux](/tag.html?tag=203&cHash=a988c07c8fcb1b9d8276b2e73ba3a6f3)[#add](/tag.html?tag=210&cHash=3ba43bb3febe1e8d4e2be7db000fc0e6)[#unix](/tag.html?tag=899&cHash=2c756a0d97bfd07f38f4a82b3badf541)[#bash](/tag.html?tag=900&cHash=546f8f9c88c56f608a8868910dd8325c)[#pagedown](/tag.html?tag=901&cHash=a26f9f42a16c8dc8674667569a5dc254)[#history](/tag.html?tag=902&cHash=126384805f563c5e97a383c84087ce57)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Sep 2016

Auf meinem Server benutze ich sehr häufig Page Up und Page Down um durch meine History zu navigieren. Allerdings ist dieses Feature standardmäßig auf jedem Server ausgeschaltet. 

Um das nützliche Feature einzuschalten muss man nur in der Datei `/etc/inputrc` die folgenden Zeilen auskommentieren:

```
# alternate mappings for "page up" and "page down" to search the history
"\e[5~": history-search-backward
"\e[6~": history-search-forward
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.