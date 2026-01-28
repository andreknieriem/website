---
title: Maximale Dateigrößen/Uploadgrößen bei nginx umstellen
date: '2013-09-25T05:14:51.000Z'
slug: maximale-dateigroessenuploadgroessen-bei-nginx-umstellen
tags:
  - client_max_body_size
  - filesize
  - linux
  - nginx
description: >
  Dort dann einfach den Wert der bei client_max_body_size auf die Größe eurer
  Wahl ändern. Also beispielsweise: 

  client_max_body_size 3M
   Danach noch den nginx neustarten. 
  /etc/init.d/nginx restart
   Das wars auch schon! Bekommt man bei einem auf nginx basiertem Server die Fehlermeldung: 
  413 Request Entity Too Large
   hat das den Grund, dass nginx auch eine Filegrößenbeschränkung hat. Diese kann man ganz einfach ändern.
  Geht dafür in den Ordner in dem nginx liegt (meistens /etc/nginx) und öffnet
  die Datei nginx.conf. 

  // Ihr könnt meistens einen der beiden Editoren benutzen

  vi ./nginx.conf

  nano ./nginx.conf
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Bekommt man bei einem auf nginx basiertem Server die Fehlermeldung:

```

413 Request Entity Too Large
```

hat das den Grund, dass nginx auch eine Filegrößenbeschränkung hat. Diese kann man ganz einfach ändern.

Geht dafür in den Ordner in dem nginx liegt (meistens /etc/nginx) und öffnet die Datei nginx.conf.

```

// Ihr könnt meistens einen der beiden Editoren benutzen
vi ./nginx.conf
nano ./nginx.conf
```

Dort dann einfach den Wert der bei client\_max\_body\_size auf die Größe eurer Wahl ändern. Also beispielsweise:

```

client_max_body_size 3M
```

Danach noch den nginx neustarten.

```

/etc/init.d/nginx restart
```

Das wars auch schon!