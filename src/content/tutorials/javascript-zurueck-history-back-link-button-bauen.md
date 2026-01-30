---
title: 'Javascript: Zurück - History Back Link Button bauen'
date: '2018-02-07T08:57:00.000Z'
slug: javascript-zurueck-history-back-link-button-bauen
tags:
  - javascript
  - js
  - history
  - back
  - zurück
  - link
  - button
description: "Hier mal ein sehr kleines, aber oft nützliches Snipped. Möchte man einfach einen Zurück-Button auf eine Webseite einbauen, die dieselbe Funktionalität wie der Browser Button hat, so lässt sich das sehr einfach mit dem folgenden Code bewerkstelligen. &lt;a href=\"javascript:history.back()\"&gt;Zurück&lt;/a&gt;\r\n\r\nDer Trick hierbei ist es, dass im href Attribut des Links direkt Javascript ausgeführt wird. In diesem Fall die Funktion\r\n\r\nhistory.back()"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Hier mal ein sehr kleines, aber oft nützliches Snipped. Möchte man einfach einen Zurück-Button auf eine Webseite einbauen, die dieselbe Funktionalität wie der Browser Button hat, so lässt sich das sehr einfach mit dem folgenden Code bewerkstelligen.

```html
<a href="javascript:history.back()">Zurück</a>
```

Der Trick hierbei ist es, dass im href Attribut des Links direkt Javascript ausgeführt wird. In diesem Fall die Funktion

```javascript
history.back()
```
