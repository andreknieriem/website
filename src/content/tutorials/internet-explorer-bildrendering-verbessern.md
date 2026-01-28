---
title: 'Internet Explorer: Bildrendering verbessern'
date: '2016-03-08T17:18:19.000Z'
slug: internet-explorer-bildrendering-verbessern
tags:
  - ie
  - internet explorer
  - better
  - image
  - bild
  - rendering
  - scaling
description: "Der Internet Explorer hat des öfteren ein Problem mit dem Bildrendering, wenn die Bilder, die ausgegeben werden im Original größer oder kleiner sind, als das Bild angezeigt wird. Mit folgendem kleinen CSS-Snippet kann man die Ausgabe im IE deutlich verschönern. \r\nimg {\r\n       -ms-interpolation-mode: bicubic;\r\n}\r\n "
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Der Internet Explorer hat des öfteren ein Problem mit dem Bildrendering, wenn die Bilder, die ausgegeben werden im Original größer oder kleiner sind, als das Bild angezeigt wird. Mit folgendem kleinen CSS-Snippet kann man die Ausgabe im IE deutlich verschönern.

```

img {
       -ms-interpolation-mode: bicubic;
}
```