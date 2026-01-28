---
title: 'Linux: Sass und Compass auf Ubuntu-System installieren'
date: '2014-06-13T15:30:16.000Z'
slug: linux-sass-und-compass-auf-ubuntu-system-installieren
tags:
  - linux
  - add
  - sass
  - compass
  - ubuntu
  - gem
  - apt-get
description: "Für ein neues Projekt auf einem neuen Server muss man, wenn man Sass und Compass benutzen will (was ich nur jedem raten kann) Compass installieren. Hier sind die Grundschritte die dafür getan werden müssen.\n1. Ruby installieren \r\nsudo apt-get install ruby-full rubygems1.8\r\n 2. Compass installieren\nCompass selbst bringt schon ein Sass-Gem mit, sodass man dieses nicht zwangsläufig installieren muss \r\nsudo gem install compass\r\n Alle Befehle werden hier mit sudo ausgeführt, da es sonst häufig zu Berechtigungsproblemen führen kann.\n3. Ein Projekt erstellen \r\n# Cd zu deinem Projekt\r\ncd /var/www/yourproject\r\n \r\n# Compass-Projekt erstellen\r\ncompass create\r\n \r\n# Lass Compass laufen und er wird deine Änderungen on the fly zu css compilen\r\ncompass watch\r\n Das wars auch schon! Viel Spaß beim Sass schreiben :)"
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

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