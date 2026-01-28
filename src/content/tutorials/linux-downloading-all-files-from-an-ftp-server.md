---
title: 'Linux: Downloading all files from an FTP Server'
date: '2014-10-29T16:58:07.000Z'
slug: linux-downloading-all-files-from-an-ftp-server
tags:
  - server
  - download
  - wget
  - ftp
  - synch
  - all from server
description: "Hier ist ein nützlicher kleiner Code-Schnipsel, mit dem man von einem Server, auf dem man nur FTP-Zugang hat, alle Daten auf den eigenen Server downloaden kann, ohne den Umweg über die eigene Festplatte zu machen. \r\nwget -m ftp://username:password@ip.of.old.host\r\n "
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Hier ist ein nützlicher kleiner Code-Schnipsel, mit dem man von einem Server, auf dem man nur FTP-Zugang hat, alle Daten auf den eigenen Server downloaden kann, ohne den Umweg über die eigene Festplatte zu machen.

```

wget -m ftp://username:password@ip.of.old.host
```