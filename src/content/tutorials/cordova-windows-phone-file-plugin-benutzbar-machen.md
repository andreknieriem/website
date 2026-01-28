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
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

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