---
title: DNS-Cache leeren unter Mac OSX und Windows
date: '2011-07-25T05:36:39.000Z'
slug: dns-cache-leeren-unter-mac-osx-und-windows
tags:
  - cache leeren
  - dns
  - dns-cache
  - mac
  - mac osx
description: "Als Webentwickler habe ich schon öfter Probleme mit dem DNS-Cache bekommen. Man richtet eine Subdomain ein und es kommt einfach im Browser nichts heraus. In den meisten Fällen hilft es, wenn man den DNS-Cache löscht.\nWie lösche ich den DNS-Cache unter Mac OSX?\nÖffnet das Programm \"Terminal\" (unter Programme/Dienstprogramme) und fügt folgende Codezeile ein und drückt \"Enter\". \r\ndscacheutil -flushcache\r\n Wie lösche ich den DNS-Cache unter Windows?\nÖffnet die Konsole (in der Suche einfach cmd.exe eingeben) und fügt folgende Codezeile ein. \r\nipconfig /flushdns\r\n Als Antwort sollte dann folgendes kommen:\nWindows IP Configuration. Successfully flushed the DNS Resolver Cache.\nNachdem ihr das gemacht habt sollten eure DNS Änderungen in den meisten Fällen auch bei euch im Browser ankommen."
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Als Webentwickler habe ich schon öfter Probleme mit dem DNS-Cache bekommen. Man richtet eine Subdomain ein und es kommt einfach im Browser nichts heraus. In den meisten Fällen hilft es, wenn man den DNS-Cache löscht.

**Wie lösche ich den DNS-Cache unter Mac OSX?**

Öffnet das Programm "Terminal" (unter Programme/Dienstprogramme) und fügt folgende Codezeile ein und drückt "Enter".

```bash

dscacheutil -flushcache

```

**Wie lösche ich den DNS-Cache unter Windows?**

Öffnet die Konsole (in der Suche einfach cmd.exe eingeben) und fügt folgende Codezeile ein.

```bash

ipconfig /flushdns

```

Als Antwort sollte dann folgendes kommen:

Windows IP Configuration. Successfully flushed the DNS Resolver Cache.

Nachdem ihr das gemacht habt sollten eure DNS Änderungen in den meisten Fällen auch bei euch im Browser ankommen.