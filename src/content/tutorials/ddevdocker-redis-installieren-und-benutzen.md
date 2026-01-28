---
title: DDEV/Docker - Redis installieren und benutzen
date: '2019-09-26T12:53:00.000Z'
slug: ddevdocker-redis-installieren-und-benutzen
tags:
  - '1165'
  - '1166'
  - '1167'
  - '1168'
  - '1124'
description: "Möchte man Redis in seiner lokalen ddev-Entwicklungsumgebung nutzen, so kann man dies sehr leicht erreichen. Als erstes navigiert ihr in euer Hauptverzeichnis in dem der .ddev Ordner eures Projekt liegt. Dort legt er eine Yaml-Datei an. Diese könnt ihr benennen wie ihr wollt. In meinem Beispiel habe ich sie&nbsp;docker-compose.redis.yaml genannt. Fügt dann einfach folgenden Inhalt in die Datei ein:\r\n.ddev/docker-compose.redis.yaml # ddev redis recipe file\r\n#\r\nversion: '3.6'\r\n\r\nservices:\r\n  redis:\r\n    container_name: ddev-${DDEV_SITENAME}-redis\r\n    image: redis:4\r\n    restart: always\r\n    ports:\r\n      - 6379\r\n    labels:         \r\n      com.ddev.site-name: ${DDEV_SITENAME}\r\n      com.ddev.approot: $DDEV_APPROOT\r\n      com.ddev.app-url: $DDEV_URL\r\n    environment:\r\n      - VIRTUAL_HOST=$DDEV_HOSTNAME\r\n      - HTTP_EXPOSE=6379\r\n    volumes: []\r\n  web:\r\n    links:\r\n      - redis:$DDEV_HOSTNAME Nun muss ddev nur noch neugestartet werden und ihr habt einen funktionierenden Redis-Server. ddev restart"
image: /fileadmin/_processed_/5/3/csm_docker_877bfcc9d5.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Docker

* * *

![](/fileadmin/_processed_/5/3/csm_docker_877bfcc9d5.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#symfony](/tag.html?tag=1124&cHash=0d3bc75836ddba7decce7aa24257d2a7)[#docker](/tag.html?tag=1165&cHash=8e01514f59f82afea427a7e250f18e28)[\# ddev](/tag.html?tag=1166&cHash=54bd6c1dc5f21fbf8b6654bdc010bc85)[\# redis](/tag.html?tag=1167&cHash=9a734258355fb3a5a96edacf605c7a65)[\# typo3](/tag.html?tag=1168&cHash=57571b20366bfd283f33d8d590e7453a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Sep 2019

Möchte man Redis in seiner lokalen ddev-Entwicklungsumgebung nutzen, so kann man dies sehr leicht erreichen. Als erstes navigiert ihr in euer Hauptverzeichnis in dem der .ddev Ordner eures Projekt liegt. Dort legt er eine Yaml-Datei an. Diese könnt ihr benennen wie ihr wollt. In meinem Beispiel habe ich sie **docker-compose.redis**.yaml genannt. Fügt dann einfach folgenden Inhalt in die Datei ein:

### .ddev/docker-compose.redis.yaml

```
#
version: '3.6'

services:
  redis:
    container_name: ddev-${DDEV_SITENAME}-redis
    image: redis:4
    restart: always
    ports:
      - 6379
    labels:         
      com.ddev.site-name: ${DDEV_SITENAME}
      com.ddev.approot: $DDEV_APPROOT
      com.ddev.app-url: $DDEV_URL
    environment:
      - VIRTUAL_HOST=$DDEV_HOSTNAME
      - HTTP_EXPOSE=6379
    volumes: []
  web:
    links:
      - redis:$DDEV_HOSTNAME
```

Nun muss ddev nur noch neugestartet werden und ihr habt einen funktionierenden Redis-Server.

```
ddev restart
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.