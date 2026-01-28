---
title: 'Cordova: Links zu Programmen (mailto, tel, etc.) zulassen'
date: '2015-06-19T19:05:50.000Z'
slug: cordova-links-zu-programmen-mailto-tel-etc-zulassen
tags:
  - '697'
  - '702'
  - '703'
  - '704'
  - '705'
  - '706'
  - '707'
  - '708'
description: "Seit neueren Cordova Versionen, muss man ein Plugin zu Cordova hinzufügen, um externe Links zuzulassen. Das Plugin heißt Plugin Whitelist und ist hier zu finden:\nhttps://github.com/apache/cordova-plugin-whitelist\nIch brauchte beispielsweise Links für E-Mail Adressen, Telefonnummern und SMS. Wenn man diese klickt, sollte die jeweilige App aufgehen. Via Browser geht dies ja mit mailto:, tel: und sms:, in der Cordova App aber nicht. \nFür meine Anforderung musste ich, nach der Plugin Installation, zur config.xml der Cordova-App folgende Zeilen in den  Knoten aufnehmen. \r\n&lt;allow-intent href=\"tel:*\" /&gt;\r\n&lt;allow-intent href=\"sms:*\" /&gt;\r\n&lt;allow-intent href=\"mailto:*\" /&gt;\r\n Für weitere Möglichkeiten schaut einfach auf der oben angegeben Github-Seite vorbei, dort sind noch mehr Beispiele genannt."
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

[#cordova](/tag.html?tag=697&cHash=6827daac92c6c9a700bc9044746e0e7c)[#mail](/tag.html?tag=702&cHash=cbe6a51eabe41516c412a74c694fdcf0)[#phone](/tag.html?tag=703&cHash=27f43407074a0c334c979e805bed60c5)[#tel](/tag.html?tag=704&cHash=1143d42195aa701ecd27ae4d692199c5)[#allow](/tag.html?tag=705&cHash=eee445cd57de16e6c125604d9ebd268a)[#whitelist](/tag.html?tag=706&cHash=5e20cd51ece01a4b7f03f9e16fc600ee)[#links](/tag.html?tag=707&cHash=2e1e89ca82f794155653812bcab4af6d)[#zulassen](/tag.html?tag=708&cHash=fdb7b13a59803a72b32f41927a8aa111)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Jun 2015

Seit neueren Cordova Versionen, muss man ein Plugin zu Cordova hinzufügen, um externe Links zuzulassen. Das Plugin heißt **Plugin Whitelist** und ist hier zu finden:

[https://github.com/apache/cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)

Ich brauchte beispielsweise Links für E-Mail Adressen, Telefonnummern und SMS. Wenn man diese klickt, sollte die jeweilige App aufgehen. Via Browser geht dies ja mit [](#), tel: und sms:, in der Cordova App aber nicht.

Für meine Anforderung musste ich, nach der Plugin Installation, zur **config.xml** der Cordova-App folgende Zeilen in den <widget> Knoten aufnehmen.

```

<allow-intent href="tel:*" />
<allow-intent href="sms:*" />
<allow-intent href="mailto:*" />
```

Für weitere Möglichkeiten schaut einfach auf der oben angegeben Github-Seite vorbei, dort sind noch mehr Beispiele genannt.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.