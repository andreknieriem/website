---
title: 'Cordova: Links zu Programmen (mailto, tel, etc.) zulassen'
date: '2015-06-19T19:05:50.000Z'
slug: cordova-links-zu-programmen-mailto-tel-etc-zulassen
tags:
  - cordova
  - mail
  - phone
  - tel
  - allow
  - whitelist
  - links
  - zulassen
description: "Seit neueren Cordova Versionen, muss man ein Plugin zu Cordova hinzufügen, um externe Links zuzulassen. Das Plugin heißt Plugin Whitelist und ist hier zu finden:\nhttps://github.com/apache/cordova-plugin-whitelist\nIch brauchte beispielsweise Links für E-Mail Adressen, Telefonnummern und SMS. Wenn man diese klickt, sollte die jeweilige App aufgehen. Via Browser geht dies ja mit mailto:, tel: und sms:, in der Cordova App aber nicht. \nFür meine Anforderung musste ich, nach der Plugin Installation, zur config.xml der Cordova-App folgende Zeilen in den  Knoten aufnehmen. \r\n&lt;allow-intent href=\"tel:*\" /&gt;\r\n&lt;allow-intent href=\"sms:*\" /&gt;\r\n&lt;allow-intent href=\"mailto:*\" /&gt;\r\n Für weitere Möglichkeiten schaut einfach auf der oben angegeben Github-Seite vorbei, dort sind noch mehr Beispiele genannt."
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Seit neueren Cordova Versionen, muss man ein Plugin zu Cordova hinzufügen, um externe Links zuzulassen. Das Plugin heißt **Plugin Whitelist** und ist hier zu finden:

[https://github.com/apache/cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)

Ich brauchte beispielsweise Links für E-Mail Adressen, Telefonnummern und SMS. Wenn man diese klickt, sollte die jeweilige App aufgehen. Via Browser geht dies ja mit [](#), tel: und sms:, in der Cordova App aber nicht.

Für meine Anforderung musste ich, nach der Plugin Installation, zur **config.xml** der Cordova-App folgende Zeilen in den <widget> Knoten aufnehmen.

```markup

<allow-intent href="tel:*" />
<allow-intent href="sms:*" />
<allow-intent href="mailto:*" />

```

Für weitere Möglichkeiten schaut einfach auf der oben angegeben Github-Seite vorbei, dort sind noch mehr Beispiele genannt.