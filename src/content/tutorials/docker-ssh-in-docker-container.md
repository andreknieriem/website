---
title: 'Docker: SSH in Docker-Container'
date: '2022-09-27T13:11:00.000Z'
slug: docker-ssh-in-docker-container
tags:
  - docker
  - ' ssh'
  - ' bash'
  - terminal
  - root
description: "Um in einen Docker-Container via SSH zu gelangen muss man nur 2 Schritte ausführen.\r\n1. Docker Containernamen suchen\r\nGeht auf euren Server und führt docker ps aus. Nun seht ihr eine Übersicht aller laufenden Container. Hier sucht ihr euch euren Container aus. Bei mir heißt er test-app-1\r\n2. Docker exec um in den Container zu ssh'n. docker exec -it  /bin/bash"
image: /fileadmin/_processed_/5/3/csm_docker_877bfcc9d5.png
demo_url: null
download_url: null
---

Um in einen Docker-Container via SSH zu gelangen muss man nur 2 Schritte ausführen.

1\. Docker Containernamen suchen

Geht auf euren Server und führt **docker ps** aus. Nun seht ihr eine Übersicht aller laufenden Container. Hier sucht ihr euch euren Container aus. Bei mir heißt er test-app-1

2\. Docker exec um in den Container zu ssh'n.

```bash
docker exec -it <name-des-containers> /bin/bash

#in meinem Beispiel also:
docker exec -it test-app-1 /bin/bash
```