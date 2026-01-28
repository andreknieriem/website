---
title: 'Linux: Sass und Compass auf Ubuntu-System installieren'
date: '2014-06-13T15:30:16.000Z'
slug: linux-sass-und-compass-auf-ubuntu-system-installieren
tags:
  - '203'
  - '210'
  - '417'
  - '419'
  - '492'
  - '493'
  - '494'
description: "Für ein neues Projekt auf einem neuen Server muss man, wenn man Sass und Compass benutzen will (was ich nur jedem raten kann) Compass installieren. Hier sind die Grundschritte die dafür getan werden müssen.\n1. Ruby installieren \r\nsudo apt-get install ruby-full rubygems1.8\r\n 2. Compass installieren\nCompass selbst bringt schon ein Sass-Gem mit, sodass man dieses nicht zwangsläufig installieren muss \r\nsudo gem install compass\r\n Alle Befehle werden hier mit sudo ausgeführt, da es sonst häufig zu Berechtigungsproblemen führen kann.\n3. Ein Projekt erstellen \r\n# Cd zu deinem Projekt\r\ncd /var/www/yourproject\r\n \r\n# Compass-Projekt erstellen\r\ncompass create\r\n \r\n# Lass Compass laufen und er wird deine Änderungen on the fly zu css compilen\r\ncompass watch\r\n Das wars auch schon! Viel Spaß beim Sass schreiben :)"
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

[#linux](/tag.html?tag=203&cHash=a988c07c8fcb1b9d8276b2e73ba3a6f3)[#add](/tag.html?tag=210&cHash=3ba43bb3febe1e8d4e2be7db000fc0e6)[#sass](/tag.html?tag=417&cHash=e7d560817ec80a020348511c9c18482f)[#compass](/tag.html?tag=419&cHash=d12b6dc9e2569f32e09b71d76f1699fc)[#ubuntu](/tag.html?tag=492&cHash=e77b6ae065d6e25c792e5e415713b0f1)[#gem](/tag.html?tag=493&cHash=ea0804b71e5e8c664cf0c87fc5c94bc9)[#apt-get](/tag.html?tag=494&cHash=88ba0869ecfd8873b50f3dabf38daf18)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

13\. Jun 2014

Für ein neues Projekt auf einem neuen Server muss man, wenn man Sass und Compass benutzen will (was ich nur jedem raten kann) Compass installieren. Hier sind die Grundschritte die dafür getan werden müssen.

**1\. Ruby installieren**

```

sudo apt-get install ruby-full rubygems1.8
```

**2\. Compass installieren**

Compass selbst bringt schon ein Sass-Gem mit, sodass man dieses nicht zwangsläufig installieren muss

```

sudo gem install compass
```

Alle Befehle werden hier mit sudo ausgeführt, da es sonst häufig zu Berechtigungsproblemen führen kann.

**3\. Ein Projekt erstellen**

```

cd /var/www/yourproject
 
compass create
 
compass watch
```

Das wars auch schon! Viel Spaß beim Sass schreiben :)

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.