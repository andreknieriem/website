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
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
demo_url: null
download_url: null
---

Auf meinem Server benutze ich sehr häufig Page Up und Page Down um durch meine History zu navigieren. Allerdings ist dieses Feature standardmäßig auf jedem Server ausgeschaltet. 

Um das nützliche Feature einzuschalten muss man nur in der Datei `/etc/inputrc` die folgenden Zeilen auskommentieren:

```
"\e[5~": history-search-backward
"\e[6~": history-search-forward
```