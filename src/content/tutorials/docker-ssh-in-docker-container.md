---
title: 'Docker: SSH in Docker-Container'
date: '2022-09-27T13:11:00.000Z'
slug: docker-ssh-in-docker-container
tags:
  - '1165'
  - '1276'
  - '1198'
  - '1116'
  - '1277'
description: "Um in einen Docker-Container via SSH zu gelangen muss man nur 2 Schritte ausführen.\r\n1. Docker Containernamen suchen\r\nGeht auf euren Server und führt docker ps aus. Nun seht ihr eine Übersicht aller laufenden Container. Hier sucht ihr euch euren Container aus. Bei mir heißt er test-app-1\r\n2. Docker exec um in den Container zu ssh'n. docker exec -it  /bin/bash"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Docker: SSH in Docker-Container

#Tutorials#Docker

* * *

![](/fileadmin/_processed_/5/3/csm_docker_877bfcc9d5.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#terminal](/tag.html?tag=1116&cHash=85f99e978f3eba746ee8d18c72809c8a)[#docker](/tag.html?tag=1165&cHash=8e01514f59f82afea427a7e250f18e28)[\# bash](/tag.html?tag=1198&cHash=a3b1c622b236b99cf2e7617295975cf0)[\# ssh](/tag.html?tag=1276&cHash=079f1ff28b8b346c3abad3eb01976e5a)[#root](/tag.html?tag=1277&cHash=79d5c516ade1c090349d6dca39127dbd)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

27\. Sep 2022

Um in einen Docker-Container via SSH zu gelangen muss man nur 2 Schritte ausführen.

1\. Docker Containernamen suchen

Geht auf euren Server und führt **docker ps** aus. Nun seht ihr eine Übersicht aller laufenden Container. Hier sucht ihr euch euren Container aus. Bei mir heißt er test-app-1

2\. Docker exec um in den Container zu ssh'n.

```
docker exec -it <name-des-containers> /bin/bash

#in meinem Beispiel also:
docker exec -it test-app-1 /bin/bash
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.