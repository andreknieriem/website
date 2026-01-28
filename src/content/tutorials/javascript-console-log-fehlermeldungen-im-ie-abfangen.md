---
title: 'Javascript: Console-Log Fehlermeldungen im IE abfangen'
date: '2014-09-15T15:11:54.000Z'
slug: javascript-console-log-fehlermeldungen-im-ie-abfangen
tags:
  - javascript
  - internet explorer
  - console log
  - error
description: "Falls man mal ein Console.log im Code vergessen hat, so ist das eigentlich ja nichts schlimmes. Allerdings hat man im Internet Explorer dann oft einen fatalen JS-Fehler und das komplette Javascript der Seite ist lahmgelegt. Das Ganze lässt sich mit folgendem Code-Schnipsel aber abfangen. \r\nif(/^undef/i.test(typeof console)){ window.console = { log : function(){} }; }\r\n Einfach diesen Code immer am Anfang deiner Webseite reinladen und du kannst auch mal ausversehen ein Console.log vergessen."
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Falls man mal ein Console.log im Code vergessen hat, so ist das eigentlich ja nichts schlimmes. Allerdings hat man im Internet Explorer dann oft einen fatalen JS-Fehler und das komplette Javascript der Seite ist lahmgelegt. Das Ganze lässt sich mit folgendem Code-Schnipsel aber abfangen.

```javascript

if(/^undef/i.test(typeof console)){ window.console = { log : function(){} }; }

```

Einfach diesen Code immer am Anfang deiner Webseite reinladen und du kannst auch mal ausversehen ein Console.log vergessen.