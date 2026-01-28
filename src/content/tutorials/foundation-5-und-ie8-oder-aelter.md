---
title: Foundation 5 und IE8 (oder älter)
date: '2014-03-05T20:21:09.000Z'
slug: foundation-5-und-ie8-oder-aelter
tags:
  - '86'
  - '87'
  - '422'
  - '428'
  - '429'
  - '430'
  - '431'
description: "Für ein neues Projekt wollte ich das erste mal Foundation verwenden anstelle von Bootstrap. Ein Haken an der Sache ist, dass auch der IE8 zumindest halbwegs funktionieren sollte und dies mit Foundation 5 leider nicht geht. Mit ein paar Tricks kriegt man aber auch den in die Jahre gekommenden Browser zu einer Ansicht, die wieder ordentlich aussieht. Die 2 größten Schwächen des IE8 sind der fehlende Support für Mediaqueries und der fehlende Support für die Einheit \"rem\" (Root EM). Ein paar pfiffige Entwickler haben diese Unterstützung allerdings mit Javascript nachgepatcht. \nUnd so geht's:\n1. Die HTML5, Mediaquery Fehler lassen sich mit diesen Dateien beheben ;) \r\n&lt;!--[if lt IE 9]&gt;\r\n  &lt;script src=\"//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js\"&gt;&lt;/script&gt;\r\n  &lt;script src=\"//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js\"&gt;&lt;/script&gt;\r\n  &lt;script src=\"//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js\"&gt;&lt;/script&gt;\r\n  &lt;script src=\"//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js\"&gt;&lt;/script&gt;\r\n&lt;![endif]--&gt;\r\n  2. Die REM-Einheit bekommt ihr mit diesem Script hier:\nhttps://github.com/chuckcarpenter/REM-unit-polyfill\nEinmal alle 5 Scripte reingeladen ist Foundation, zumindest vom Grid her nutzbar. Die Javascripte werden wohl nicht laufen, da Foundation auf jQuery 2 läuft und somit nur IE 9+ geht."
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Für ein neues Projekt wollte ich das erste mal Foundation verwenden anstelle von Bootstrap. Ein Haken an der Sache ist, dass auch der IE8 zumindest halbwegs funktionieren sollte und dies mit Foundation 5 leider nicht geht. Mit ein paar Tricks kriegt man aber auch den in die Jahre gekommenden Browser zu einer Ansicht, die wieder ordentlich aussieht. Die 2 größten Schwächen des IE8 sind der fehlende Support für Mediaqueries und der fehlende Support für die Einheit "rem" (Root EM). Ein paar pfiffige Entwickler haben diese Unterstützung allerdings mit Javascript nachgepatcht.

Und so geht's:

1\. Die HTML5, Mediaquery Fehler lassen sich mit diesen Dateien beheben ;)

```

<!--[if lt IE 9]>
  <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
  <script src="//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
  <script src="//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js"></script>
<![endif]-->
 
```

2\. Die REM-Einheit bekommt ihr mit diesem Script hier:

[https://github.com/chuckcarpenter/REM-unit-polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)

Einmal alle 5 Scripte reingeladen ist Foundation, zumindest vom Grid her nutzbar. Die Javascripte werden wohl nicht laufen, da Foundation auf jQuery 2 läuft und somit nur IE 9+ geht.