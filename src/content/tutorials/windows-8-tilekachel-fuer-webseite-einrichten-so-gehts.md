---
title: Windows 8 Tile(Kachel) für Webseite einrichten - So geht's
date: '2014-01-23T09:44:05.000Z'
slug: windows-8-tilekachel-fuer-webseite-einrichten-so-gehts
tags:
  - '10'
  - '11'
  - '166'
  - '405'
  - '406'
  - '407'
  - '408'
description: "\nMit Windows 8 hat Microsoft seinem IE 10 oder 11 etwas cooles eingebaut. Man kann Webseiten auf seine Metro Oberfläche anpinnen. Das Beste daran ist, dass man sogar ein Live-Tile aus dem Pin machen kann und somit eine coole kleine Mini-App hat, ohne großen Aufwand zu betreiben. Hier zeige ich euch, was ihr machen müsst, damit ihr auch eine coole Live-Tile bekommt.\nAls erstes benötigt ihr 4 Bilder für eure Windows Tile:\n1. 70x70px\n2. 150x150px\n3. 310x150px\n4. 310x310px\nWenn ihr nun eine Live-Tile haben möchtet, empfehle ich auch die Seite http://www.buildmypinnedsite.com/de-DE. Dort könnt ihr auch den Source-Code schnell zusammenklicken. Wordpress bietet von sich aus schon einen Feed, den man dort einfügen kann (deinedomain.de/feed).\nMöchte man das Ganze eher per Hand machen dann einfach folgendes in den Header einfügen: \r\n&lt;meta name=\"application-name\" content=\"deinedomain.de\"/&gt;\r\n&lt;meta name=\"msapplication-TileColor\" content=\"#4ab19a\"/&gt;\r\n&lt;meta name=\"msapplication-square70x70logo\" content=\"tiny.png\"/&gt;\r\n&lt;meta name=\"msapplication-square150x150logo\" content=\"square.png\"/&gt;\r\n&lt;meta name=\"msapplication-wide310x150logo\" content=\"wide.png\"/&gt;\r\n&lt;meta name=\"msapplication-square310x310logo\" content=\"large.png\"/&gt;\r\n&lt;meta name=\"msapplication-notification\" content=\"frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&amp;id=5; cycle=1\"/&gt;\t\r\n Habt ihr den Code eingebaut und die Pfade und URL angepasst, so kann man nun ganz einfach im IE die Seite an Start anheften und die Größe der Kachel auswählen.\nAuf Start kann man auch die Live-Kachel aktivieren oder nochmal die Größe ändern.\nViel Spaß damit!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Windows 8 Tile(Kachel) für Webseite einrichten - So geht's

#Tutorials#HTML

* * *

![](/fileadmin/_processed_/3/8/csm_html_ddf36eeabb.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#windows 8](/tag.html?tag=166&cHash=c84b3ddfc8bc365bbed941eca3d27cf4)[#8.1](/tag.html?tag=405&cHash=25684ead35e16916afa1176049822191)[#tile](/tag.html?tag=406&cHash=257d37cea612032f85947f5d711f0a0f)[#kachel](/tag.html?tag=407&cHash=0d47b2fd8c5d1e5bd2ee140825720c52)[#metadaten](/tag.html?tag=408&cHash=62c3e6c7b9fc9df094230821ba4d8db6)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Jan 2014

[![win8](http://andreknieriem.de/wp-content/uploads/2014/01/win8-722x500.png)](http://andreknieriem.de/wp-content/uploads/2014/01/win8.png)

Mit Windows 8 hat Microsoft seinem IE 10 oder 11 etwas cooles eingebaut. Man kann Webseiten auf seine Metro Oberfläche anpinnen. Das Beste daran ist, dass man sogar ein Live-Tile aus dem Pin machen kann und somit eine coole kleine Mini-App hat, ohne großen Aufwand zu betreiben. Hier zeige ich euch, was ihr machen müsst, damit ihr auch eine coole Live-Tile bekommt.

Als erstes benötigt ihr 4 Bilder für eure Windows Tile:

1\. 70x70px

2\. 150x150px

3\. 310x150px

4\. 310x310px

Wenn ihr nun eine Live-Tile haben möchtet, empfehle ich auch die Seite [http://www.buildmypinnedsite.com/de-DE](http://www.buildmypinnedsite.com/de-DE). Dort könnt ihr auch den Source-Code schnell zusammenklicken. Wordpress bietet von sich aus schon einen Feed, den man dort einfügen kann (deinedomain.de/feed).

Möchte man das Ganze eher per Hand machen dann einfach folgendes in den Header einfügen:

```

<meta name="application-name" content="deinedomain.de"/>
<meta name="msapplication-TileColor" content="#4ab19a"/>
<meta name="msapplication-square70x70logo" content="tiny.png"/>
<meta name="msapplication-square150x150logo" content="square.png"/>
<meta name="msapplication-wide310x150logo" content="wide.png"/>
<meta name="msapplication-square310x310logo" content="large.png"/>
<meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=http://deinedomain.de/feed&id=5; cycle=1"/>	
```

Habt ihr den Code eingebaut und die Pfade und URL angepasst, so kann man nun ganz einfach im IE die Seite an Start anheften und die Größe der Kachel auswählen.

Auf Start kann man auch die Live-Kachel aktivieren oder nochmal die Größe ändern.

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.