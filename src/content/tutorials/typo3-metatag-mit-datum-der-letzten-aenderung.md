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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#metatag](/tag.html?tag=515&cHash=e4cd3cdc6cd5bd6603306450ed76eb7d)[#lastchanged](/tag.html?tag=516&cHash=2f51f6107bf452d87d8df0487878c0d4)[#last-modified](/tag.html?tag=517&cHash=503f9eec7c455d297269220b86328079)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

27\. Aug 2014

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.