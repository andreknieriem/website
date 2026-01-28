---
title: DNS-Cache leeren unter Mac OSX und Windows
date: '2011-07-25T05:36:39.000Z'
slug: dns-cache-leeren-unter-mac-osx-und-windows
tags:
  - '47'
  - '48'
  - '49'
  - '50'
  - '51'
description: "Als Webentwickler habe ich schon öfter Probleme mit dem DNS-Cache bekommen. Man richtet eine Subdomain ein und es kommt einfach im Browser nichts heraus. In den meisten Fällen hilft es, wenn man den DNS-Cache löscht.\nWie lösche ich den DNS-Cache unter Mac OSX?\nÖffnet das Programm \"Terminal\" (unter Programme/Dienstprogramme) und fügt folgende Codezeile ein und drückt \"Enter\". \r\ndscacheutil -flushcache\r\n Wie lösche ich den DNS-Cache unter Windows?\nÖffnet die Konsole (in der Suche einfach cmd.exe eingeben) und fügt folgende Codezeile ein. \r\nipconfig /flushdns\r\n Als Antwort sollte dann folgendes kommen:\nWindows IP Configuration. Successfully flushed the DNS Resolver Cache.\nNachdem ihr das gemacht habt sollten eure DNS Änderungen in den meisten Fällen auch bei euch im Browser ankommen."
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#cache leeren](/tag.html?tag=47&cHash=5f47cc87893a463e93c565be0f33dfd7)[#dns](/tag.html?tag=48&cHash=72c9b28e9af168eda77763a47157937d)[#dns-cache](/tag.html?tag=49&cHash=99917d36a483cb8f50024593897f1eae)[#mac](/tag.html?tag=50&cHash=36425e62b17f3af7d542222d4b9d6ae1)[#mac osx](/tag.html?tag=51&cHash=580ca5bf8cb937ddea82cc5f132e151c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

25\. Jul 2011

Als Webentwickler habe ich schon öfter Probleme mit dem DNS-Cache bekommen. Man richtet eine Subdomain ein und es kommt einfach im Browser nichts heraus. In den meisten Fällen hilft es, wenn man den DNS-Cache löscht.

**Wie lösche ich den DNS-Cache unter Mac OSX?**

Öffnet das Programm "Terminal" (unter Programme/Dienstprogramme) und fügt folgende Codezeile ein und drückt "Enter".

```

dscacheutil -flushcache
```

**Wie lösche ich den DNS-Cache unter Windows?**

Öffnet die Konsole (in der Suche einfach cmd.exe eingeben) und fügt folgende Codezeile ein.

```

ipconfig /flushdns
```

Als Antwort sollte dann folgendes kommen:

Windows IP Configuration. Successfully flushed the DNS Resolver Cache.

Nachdem ihr das gemacht habt sollten eure DNS Änderungen in den meisten Fällen auch bei euch im Browser ankommen.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.