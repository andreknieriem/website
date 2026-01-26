---
title: Typo3 tt_news - Absolute Pfade für Bilder im Rss/XML Feed
date: '2013-10-07T10:55:15.000Z'
slug: typo3-tt-news-absolute-pfade-fuer-bilder-im-rssxml-feed
tags:
  - '198'
  - '205'
  - '206'
  - '207'
  - '208'
  - '209'
description: >-
  Da ich nach langem Suchen endlich auf die Lösung gestoßen bin, möchte ich
  diese den anderen nicht vorenthalten.

  Bei tt_news gibt es ein Objekt das xmlnews heißt. Dieses kann man in seinem
  eigenen TS leicht anpassen.

  Hier der Code, damit die Bildpfage von /fileadmin/uploads zu
  http://deinedomain.de/fileadmin/uploads werden: 

  xmlnews.config.absRefPrefix = http://deinedomain.de/
   Viel Spaß damit!
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Typo3 tt\_news - Absolute Pfade für Bilder im Rss/XML Feed

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#absRefPrefix](/tag.html?tag=205&cHash=020b7842444041d08c05a302d25671f6)[#pfad. absolute](/tag.html?tag=206&cHash=be633af6a591b3680075fe44e7ca51ee)[#relative](/tag.html?tag=207&cHash=755c1f9c8ca70ca22cdda0b9c07eb0ca)[#tt\_news](/tag.html?tag=208&cHash=fb2980ae246308f003b872a72b3b1ebb)[#xmlnews](/tag.html?tag=209&cHash=25f22ad72167232e6f0c6163fe5f6dcd)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Oct 2013

Da ich nach langem Suchen endlich auf die Lösung gestoßen bin, möchte ich diese den anderen nicht vorenthalten.

Bei tt\_news gibt es ein Objekt das **xmlnews** heißt. Dieses kann man in seinem eigenen TS leicht anpassen.

Hier der Code, damit die Bildpfage von /fileadmin/uploads zu [deinedomain.de/fileadmin/uploads](http://deinedomain.de/fileadmin/uploads) werden:

```

xmlnews.config.absRefPrefix = http://deinedomain.de/
```

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.