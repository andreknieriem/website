---
title: 'TYPO3:  Pipe Symbol | in Wraps verwenden'
date: '2015-04-17T16:14:51.000Z'
slug: typo3-pipe-symbol-in-wraps-verwenden
tags:
  - typo3
  - pipe
  - wraps
description: "Hier mal eine Kleinigkeit, wie man ein Pipe-Symbol in einem Wrap als Zeichen verwendet. In meinem Beispiel für den Seitentitel.\nDafür muss man einfach nur den HTML Code für das |-Zeichen verwenden \r\nheaderData.5{\r\n    10 = TEXT\r\n    10.field = subtitle // title\r\n    10.noTrimWrap = |&lt;title&gt;| &amp;#124; Andreknieriem.de &lt;/title&gt;|\r\n}\r\n Ergebnis: Dies ist ein Titel | Andreknieriem.de "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Hier mal eine Kleinigkeit, wie man ein Pipe-Symbol in einem Wrap als Zeichen verwendet. In meinem Beispiel für den Seitentitel.

Dafür muss man einfach nur den HTML Code für das |-Zeichen verwenden

```bash

headerData.5{
    10 = TEXT
    10.field = subtitle // title
    10.noTrimWrap = |<title>| &#124; Andreknieriem.de </title>|
}

```

**Ergebnis:**

Dies ist ein Titel | Andreknieriem.de
