---
title: 'TYPO3: Standardüberschrift H2 anstatt H1'
date: '2014-04-16T16:48:59.000Z'
slug: typo3-standardueberschrift-h2-anstatt-h1
tags:
  - typo3
  - defaultheader
  - standard
  - überschrift
  - h1
  - h2
  - h3
  - h4
  - h5
description: "TYPO3 rendert Überschriften standardmäßig als H1. Möchte man allerdings nur eine große H1 am Anfang der Seite haben und alle anderen Überschriften per default auf H2 haben, dann kann man dieses mit dem folgenden Code, den man in die Constants der Seiten schreiben muss. \r\n# Standard-Überschriften als H2\r\ncontent.defaultHeaderType = 2\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

TYPO3 rendert Überschriften standardmäßig als H1. Möchte man allerdings nur eine große H1 am Anfang der Seite haben und alle anderen Überschriften per default auf H2 haben, dann kann man dieses mit dem folgenden Code, den man in die Constants der Seiten schreiben muss.

```typoscript

content.defaultHeaderType = 2

```

Viel Spaß damit!