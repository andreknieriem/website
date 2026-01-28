---
title: Typo3 tt_news - Absolute Pfade für Bilder im Rss/XML Feed
date: '2013-10-07T10:55:15.000Z'
slug: typo3-tt-news-absolute-pfade-fuer-bilder-im-rssxml-feed
tags:
  - typo3
  - absRefPrefix
  - pfad. absolute
  - relative
  - tt_news
  - xmlnews
description: >-
  Da ich nach langem Suchen endlich auf die Lösung gestoßen bin, möchte ich
  diese den anderen nicht vorenthalten.

  Bei tt_news gibt es ein Objekt das xmlnews heißt. Dieses kann man in seinem
  eigenen TS leicht anpassen.

  Hier der Code, damit die Bildpfage von /fileadmin/uploads zu
  http://deinedomain.de/fileadmin/uploads werden: 

  xmlnews.config.absRefPrefix = http://deinedomain.de/
   Viel Spaß damit!
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Da ich nach langem Suchen endlich auf die Lösung gestoßen bin, möchte ich diese den anderen nicht vorenthalten.

Bei tt\_news gibt es ein Objekt das **xmlnews** heißt. Dieses kann man in seinem eigenen TS leicht anpassen.

Hier der Code, damit die Bildpfage von /fileadmin/uploads zu [deinedomain.de/fileadmin/uploads](http://deinedomain.de/fileadmin/uploads) werden:

```

xmlnews.config.absRefPrefix = http://deinedomain.de/
```

Viel Spaß damit!