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
demo_url: null
download_url: null
---

Möchte man auf einem Linux-Betriebssystem alle Dateien innerhalb eines Ordners und dessen Unterordner (rekursiv) zählen, so geht das ganz einfach mit folgendem Befehl. Einfach "**DIR\_NAME**" durch den Ordnernamen ersetzen, in dem gezählt werden soll. 

```
find DIR_NAME -type f | wc -l
```