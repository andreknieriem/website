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
demo_url: null
download_url: null
---

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