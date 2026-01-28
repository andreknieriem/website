---
title: 'Cordova: Viewport-Höhe bei Windowsphone 8 Bug beheben'
date: '2015-12-02T17:19:30.000Z'
slug: cordova-viewport-hoehe-bei-windowsphone-8-bug-beheben
tags:
  - scroll
  - fix
  - windows phone
  - bug
  - workaround
  - cordova
  - viewport
description: "Bei Windows-Phone in Cordova kommt es häufiger zu Problemen mit der Viewport-Höhe. Um das Ganze zu beheben, einfach folgendes in die config.xml schreiben. \r\n&lt;preference name=\"fullscreen\" value=\"true\"/&gt;\r\n Möchte man allerdings, dass dies nur für Windows-Phones gilt, so kann man folgendes in die config.xml schreiben. \r\n&lt;platform name=\"wp8\"&gt;\r\n    &lt;preference name=\"fullscreen\" value=\"true\"/&gt;\r\n&lt;/platform&gt;\r\n "
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

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