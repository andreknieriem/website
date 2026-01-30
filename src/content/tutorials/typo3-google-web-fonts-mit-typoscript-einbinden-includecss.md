---
title: 'TYPO3: Google Web Fonts mit TypoScript einbinden (includeCSS)'
date: '2014-03-04T19:37:34.000Z'
slug: typo3-google-web-fonts-mit-typoscript-einbinden-includecss
tags:
  - css
  - typo3
  - includecss
  - google web fonts
  - external
  - url
  - link
description: "Um Google Web-Fonts auch bei TYPO3 zu benutzen, bzw. diese direkt via Typoscript einzubinden benötigt ihr nur folgende Zeilen. \r\npage.includeCSS {  \r\n  file5 = http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic\r\n  file5.external = 1\r\n  file5.media = all\r\n}\r\n Wichtig hierbei sind die external = 1 und das media = all Angaben.\nDanach kann man die Webfont wie gewohnt benutzen \r\nhtml {\r\n  font-family: 'PT Sans', sans-serif;\r\n}\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Um Google Web-Fonts auch bei TYPO3 zu benutzen, bzw. diese direkt via Typoscript einzubinden benötigt ihr nur folgende Zeilen.

```bash

page.includeCSS {  
  file5 = http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic
  file5.external = 1
  file5.media = all
}

```

Wichtig hierbei sind die external = 1 und das media = all Angaben.

Danach kann man die Webfont wie gewohnt benutzen

```css

html {
  font-family: 'PT Sans', sans-serif;
}

```

Viel Spaß damit!
