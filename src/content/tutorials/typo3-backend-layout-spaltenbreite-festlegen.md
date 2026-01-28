---
title: 'TYPO3: Backend-Layout Spaltenbreite festlegen'
date: '2014-12-02T17:02:09.000Z'
slug: typo3-backend-layout-spaltenbreite-festlegen
tags:
  - typo3
  - backend
  - layout
  - column
  - spaltenbreite
description: "Oft hat man im Frontend für mehrspaltige Seiten kein gleichmäßiges Verhältnis, wie es im TYPO3 Backend immer dargestellt wird (50/50, 33/33/33...).\nUm im Backend die Spaltenbreite festzulegen gibt es einen kleinen Trick. Man gibt mehr Spalten an, als es gibt und verteilt dann mit colspan die Verhältnisse. \nAm besten schaut ihr euch das nachfolgende Beispiel an. Dort werden 3 Spalten festgelegt, wobei die Linke Spalte über 2 Spalten verlaufen soll. Somit ist diese 2/3 Breit und die Rechte Spalte 1/3. Das Ganze lässt sich natürlich beliebig in alle Richtungen erweitern. \r\nbackend_layout {\r\n  colCount = 3\r\n  rowCount = 1\r\n  rows {\r\n    1 {\r\n      columns {\r\n        1 {\r\n          name = Linke Spalte (66%)\r\n          colspan = 2\r\n        }\r\n        2 {\r\n          name = Rechte Spalte (33%)\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Oft hat man im Frontend für mehrspaltige Seiten kein gleichmäßiges Verhältnis, wie es im TYPO3 Backend immer dargestellt wird (50/50, 33/33/33...).

Um im Backend die Spaltenbreite festzulegen gibt es einen kleinen Trick. Man gibt mehr Spalten an, als es gibt und verteilt dann mit colspan die Verhältnisse.

Am besten schaut ihr euch das nachfolgende Beispiel an. Dort werden 3 Spalten festgelegt, wobei die Linke Spalte über 2 Spalten verlaufen soll. Somit ist diese 2/3 Breit und die Rechte Spalte 1/3. Das Ganze lässt sich natürlich beliebig in alle Richtungen erweitern.

```typoscript

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