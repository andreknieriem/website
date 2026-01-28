---
title: 'NodeJs: Update von NodeJs? So funktionierts!'
date: '2017-01-28T23:00:00.000Z'
slug: nodejs-update-von-nodejs-so-funktionierts
tags:
  - nodejs
  - update
  - upgrade
  - howto
description: "Um NodeJs zu updaten muss man nicht viel tun, da man dies mit direkt mit NPM machen kann. Das Ganze geht dann wie folgt: sudo npm cache clean -f\r\nsudo npm install -g n\r\nsudo n stable\r\n\r\nMöchte man eine bestimmte Version installieren, so geht das so:\r\nsudo n 0.8.21\r\nSobald die Installation fertig ist, kann man sich mit dem folgenden Befehl anschauen, welche Version installiert ist.\r\nnode -v"
image: /fileadmin/_processed_/7/f/csm_nodejs_841db15a0c.png
demo_url: null
download_url: null
---

Um NodeJs zu updaten muss man nicht viel tun, da man dies mit direkt mit NPM machen kann. Das Ganze geht dann wie folgt:

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

Möchte man eine bestimmte Version installieren, so geht das so:

```bash
sudo n 0.8.21
```

Sobald die Installation fertig ist, kann man sich mit dem folgenden Befehl anschauen, welche Version installiert ist.

```bash
node -v
```