---
title: 'Linux: Ändern der php-cli Version'
date: '2018-11-16T07:49:00.000Z'
slug: linux-aendern-der-php-cli-version
tags: []
description: >-
  Hat man ein auf seinem System mehrere PHP-Versionen installiert, so kann es
  vorkommen, dass PHP-CLI eine falsche Version standardmäßig ausgewählt hat. Um
  dies einzustellen, muss man nur folgenden Befehl mit der gewünschten
  PHP-Zielversion eingeben. In meinem Fall hier ist es auf die Version 7.2. sudo
  update-alternatives --set php /usr/bin/php7.2
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Linux

* * *

![](/fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. Nov 2018

Hat man ein auf seinem System mehrere PHP-Versionen installiert, so kann es vorkommen, dass PHP-CLI eine falsche Version standardmäßig ausgewählt hat. Um dies einzustellen, muss man nur folgenden Befehl mit der gewünschten PHP-Zielversion eingeben. In meinem Fall hier ist es auf die Version 7.2.

```
sudo update-alternatives --set php /usr/bin/php7.2
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.