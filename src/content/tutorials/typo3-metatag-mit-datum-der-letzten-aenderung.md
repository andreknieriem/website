---
title: 'TYPO3: Metatag mit Datum der letzten Änderung'
date: '2014-08-27T15:25:47.000Z'
slug: typo3-metatag-mit-datum-der-letzten-aenderung
tags:
  - '198'
  - '515'
  - '516'
  - '517'
description: "Möchte man in TYPO3 das Meta-Tag \"last-modified\" haben, so kann man dies einfach mit folgendem Code bewerkstelligen: \r\npage.headerData {\r\n  10 = TEXT\r\n  10 {\r\n    # Timestamp der letzten Änderung holen\r\n    data = page : SYS_LASTCHANGED\r\n    # Datumsformat nach ISO 8601: 2001-12-15T08:49:37+02:00\r\n    date = c\r\n    # Metatag 'last-modified' erzeugen\r\n    wrap = &lt;meta name=\"last-modified\" content=\"|\" /&gt;\r\n  }\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Möchte man in TYPO3 das Meta-Tag "last-modified" haben, so kann man dies einfach mit folgendem Code bewerkstelligen:

```

page.headerData {
  10 = TEXT
  10 {
    # Timestamp der letzten Änderung holen
    data = page : SYS_LASTCHANGED
    # Datumsformat nach ISO 8601: 2001-12-15T08:49:37+02:00
    date = c
    # Metatag 'last-modified' erzeugen
    wrap = <meta name="last-modified" content="|" />
  }
}
```