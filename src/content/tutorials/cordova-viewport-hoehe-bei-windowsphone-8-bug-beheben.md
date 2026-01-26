---
title: 'Cordova: Viewport-Höhe bei Windowsphone 8 Bug beheben'
date: '2015-12-02T17:19:30.000Z'
slug: cordova-viewport-hoehe-bei-windowsphone-8-bug-beheben
tags:
  - '61'
  - '239'
  - '350'
  - '390'
  - '431'
  - '697'
  - '739'
description: "Bei Windows-Phone in Cordova kommt es häufiger zu Problemen mit der Viewport-Höhe. Um das Ganze zu beheben, einfach folgendes in die config.xml schreiben. \r\n&lt;preference name=\"fullscreen\" value=\"true\"/&gt;\r\n Möchte man allerdings, dass dies nur für Windows-Phones gilt, so kann man folgendes in die config.xml schreiben. \r\n&lt;platform name=\"wp8\"&gt;\r\n    &lt;preference name=\"fullscreen\" value=\"true\"/&gt;\r\n&lt;/platform&gt;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Cordova: Viewport-Höhe bei Windowsphone 8 Bug beheben

#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#scroll](/tag.html?tag=61&cHash=5a73bee04896e919a772699d1f0b0bcd)[#fix](/tag.html?tag=239&cHash=26354d6386315dd8daaccabb7f435be9)[#windows phone](/tag.html?tag=350&cHash=8f230cf594f9b001541dd82ac1789f63)[#bug](/tag.html?tag=390&cHash=f58c151f1f6eb670db6c474f611634bb)[#workaround](/tag.html?tag=431&cHash=f66c6296e3ae35864b1ed46c53fdcbe1)[#cordova](/tag.html?tag=697&cHash=6827daac92c6c9a700bc9044746e0e7c)[#viewport](/tag.html?tag=739&cHash=c1339fc00773e861e62c6ad26d5d9285)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. Dec 2015

Bei Windows-Phone in Cordova kommt es häufiger zu Problemen mit der Viewport-Höhe. Um das Ganze zu beheben, einfach folgendes in die config.xml schreiben.

```

<preference name="fullscreen" value="true"/>
```

Möchte man allerdings, dass dies nur für Windows-Phones gilt, so kann man folgendes in die config.xml schreiben.

```

<platform name="wp8">
    <preference name="fullscreen" value="true"/>
</platform>
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.