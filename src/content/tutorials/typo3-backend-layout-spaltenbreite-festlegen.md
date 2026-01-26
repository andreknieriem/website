---
title: 'TYPO3: Backend-Layout Spaltenbreite festlegen'
date: '2014-12-02T17:02:09.000Z'
slug: typo3-backend-layout-spaltenbreite-festlegen
tags:
  - '198'
  - '581'
  - '582'
  - '583'
  - '584'
description: "Oft hat man im Frontend für mehrspaltige Seiten kein gleichmäßiges Verhältnis, wie es im TYPO3 Backend immer dargestellt wird (50/50, 33/33/33...).\nUm im Backend die Spaltenbreite festzulegen gibt es einen kleinen Trick. Man gibt mehr Spalten an, als es gibt und verteilt dann mit colspan die Verhältnisse. \nAm besten schaut ihr euch das nachfolgende Beispiel an. Dort werden 3 Spalten festgelegt, wobei die Linke Spalte über 2 Spalten verlaufen soll. Somit ist diese 2/3 Breit und die Rechte Spalte 1/3. Das Ganze lässt sich natürlich beliebig in alle Richtungen erweitern. \r\nbackend_layout {\r\n  colCount = 3\r\n  rowCount = 1\r\n  rows {\r\n    1 {\r\n      columns {\r\n        1 {\r\n          name = Linke Spalte (66%)\r\n          colspan = 2\r\n        }\r\n        2 {\r\n          name = Rechte Spalte (33%)\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Backend-Layout Spaltenbreite festlegen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#backend](/tag.html?tag=581&cHash=e7aa0c2f27de1754e4312a7558987953)[#layout](/tag.html?tag=582&cHash=37e9b7e2e70bada207988fca7737a175)[#column](/tag.html?tag=583&cHash=cc1857dcc4b54456d5cf718f03deb37d)[#spaltenbreite](/tag.html?tag=584&cHash=1514aa1eee49b9abe275e0d166dfbe86)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. Dec 2014

Oft hat man im Frontend für mehrspaltige Seiten kein gleichmäßiges Verhältnis, wie es im TYPO3 Backend immer dargestellt wird (50/50, 33/33/33...).

Um im Backend die Spaltenbreite festzulegen gibt es einen kleinen Trick. Man gibt mehr Spalten an, als es gibt und verteilt dann mit colspan die Verhältnisse.

Am besten schaut ihr euch das nachfolgende Beispiel an. Dort werden 3 Spalten festgelegt, wobei die Linke Spalte über 2 Spalten verlaufen soll. Somit ist diese 2/3 Breit und die Rechte Spalte 1/3. Das Ganze lässt sich natürlich beliebig in alle Richtungen erweitern.

```

backend_layout {
  colCount = 3
  rowCount = 1
  rows {
    1 {
      columns {
        1 {
          name = Linke Spalte (66%)
          colspan = 2
        }
        2 {
          name = Rechte Spalte (33%)
        }
      }
    }
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