---
title: 'Cordova: Windows Phone - File Plugin benutzbar machen'
date: '2015-06-30T16:40:20.000Z'
slug: cordova-windows-phone-file-plugin-benutzbar-machen
tags:
  - '350'
  - '696'
  - '697'
  - '726'
  - '727'
  - '728'
description: "Möchte man das File-Plugin von Cordova benutzen und möchte einfach das Standard Verzeichnis des jeweiliges Betriebssystem nehmen, so kann man eigentlich immer cordova.file.dataDirectory benutzen. Bei Windows Phone funktioniert dies leider nicht. Hier ist ein kleiner Workaround/Polyfill um das Problem einfach selbst zu beheben. \r\nif(cordova.file === undefined){\r\n    // WP8\r\n    if(device.platform === \"Win32NT\"){\r\n        cordova.file = {\r\n            dataDirectory: '///'\r\n        }\r\n    }\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Cordova: Windows Phone - File Plugin benutzbar machen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#windows phone](/tag.html?tag=350&cHash=8f230cf594f9b001541dd82ac1789f63)[#polyfill](/tag.html?tag=696&cHash=27e17901bdcb36b559334f61e5d274ce)[#cordova](/tag.html?tag=697&cHash=6827daac92c6c9a700bc9044746e0e7c)[#datadirectory](/tag.html?tag=726&cHash=324174de3e6ca99af9baa21a5ef4a2ed)[#file plugin](/tag.html?tag=727&cHash=72614ec0c7d68fa73263eb9d89cc1699)[#undefined](/tag.html?tag=728&cHash=6f6631d43edbfa2be8b8ac252542e6df)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. Jun 2015

Möchte man das File-Plugin von Cordova benutzen und möchte einfach das Standard Verzeichnis des jeweiliges Betriebssystem nehmen, so kann man eigentlich immer **cordova.file.dataDirectory** benutzen. Bei Windows Phone funktioniert dies leider nicht. Hier ist ein kleiner Workaround/Polyfill um das Problem einfach selbst zu beheben.

```

if(cordova.file === undefined){
    // WP8
    if(device.platform === "Win32NT"){
        cordova.file = {
            dataDirectory: '///'
        }
    }
}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.