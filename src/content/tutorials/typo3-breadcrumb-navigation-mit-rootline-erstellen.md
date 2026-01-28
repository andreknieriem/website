---
title: 'TYPO3: Breadcrumb-Navigation mit Rootline erstellen'
date: '2014-03-21T16:31:02.000Z'
slug: typo3-breadcrumb-navigation-mit-rootline-erstellen
tags:
  - typo3
  - typoscript
  - tmenu
  - hmenu
  - ts
  - breadcrumb
  - wrap
  - rootline
description: "Um in TYPO3 eine Breadcrumb Navigation zu erstellen ist nicht sehr viel Aufwand nötig.\nDie Navigation erleichtert dem Benutzer oftmals die Navigation und kann Pluspunkte im Google Ranking hervorrufen.\nUm die Navigation zu erstellen kann man folgenden TS-Code verwenden: \r\n\r\ntemp.breadcrumb = HMENU\r\ntemp.breadcrumb {\r\n   special = rootline\r\n   special.range = 0|5\r\n   entryLevel = 0\r\n   wrap =  &lt;div id=\"breadcrumb\"&gt;|&lt;/div&gt; #das kann natürlich angepasst, wie man es möchte\r\n   1 = TMENU\r\n   1 {\r\n   noBlur = 1\r\n      NO {\r\n           allWrap =   |   &gt;    |*|  |   &gt;   |*| |   \r\n            stdWrap.htmlSpecialChars = 1\r\n         }\r\n      }\r\n}\r\n Was macht der Code genau?\nEs wird ein neues Men+ erstellt, dass die Rootline (also den Seitenbaum) anzeigt.\nIm Bereich \"special.range = 0|5\" kann man festlegen von welcher Ebene und bis in welche Tiefe die Breadcrumb angezeigt werden soll. Möchte man die komplette Rootline ohne Einschränkungen, dann geht das so: \r\nspecial.range = 0|-1\r\n Mit \"allWrap =   |   >    |*|  |   >   |*| | \" werden die einzelnen Menüpunkte mit einem \">\" gewrappt, sodass man folgenden Output bekommt:\nStartseite > Hauptseite > Unterseite 1\nViel Spaß damit!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Um in TYPO3 eine Breadcrumb Navigation zu erstellen ist nicht sehr viel Aufwand nötig.

Die Navigation erleichtert dem Benutzer oftmals die Navigation und kann Pluspunkte im Google Ranking hervorrufen.

Um die Navigation zu erstellen kann man folgenden TS-Code verwenden:

```


temp.breadcrumb = HMENU
temp.breadcrumb {
   special = rootline
   special.range = 0|5
   entryLevel = 0
   wrap =  <div id="breadcrumb">|</div> #das kann natürlich angepasst, wie man es möchte
   1 = TMENU
   1 {
   noBlur = 1
      NO {
           allWrap =   |   >    |*|  |   >   |*| |   
            stdWrap.htmlSpecialChars = 1
         }
      }
}
```

**Was macht der Code genau?**

Es wird ein neues Men+ erstellt, dass die Rootline (also den Seitenbaum) anzeigt.

Im Bereich **"special.range = 0|5"** kann man festlegen von welcher Ebene und bis in welche Tiefe die Breadcrumb angezeigt werden soll. Möchte man die komplette Rootline ohne Einschränkungen, dann geht das so:

special.range = 0|-1

Mit **"allWrap = | > |\*| | > |\*| | "** werden die einzelnen Menüpunkte mit einem ">" gewrappt, sodass man folgenden Output bekommt:

Startseite > Hauptseite > Unterseite 1

Viel Spaß damit!