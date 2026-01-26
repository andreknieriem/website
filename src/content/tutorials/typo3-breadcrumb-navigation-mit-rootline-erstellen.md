---
title: 'TYPO3: Breadcrumb-Navigation mit Rootline erstellen'
date: '2014-03-21T16:31:02.000Z'
slug: typo3-breadcrumb-navigation-mit-rootline-erstellen
tags:
  - '198'
  - '415'
  - '436'
  - '437'
  - '438'
  - '443'
  - '444'
  - '445'
description: "Um in TYPO3 eine Breadcrumb Navigation zu erstellen ist nicht sehr viel Aufwand nötig.\nDie Navigation erleichtert dem Benutzer oftmals die Navigation und kann Pluspunkte im Google Ranking hervorrufen.\nUm die Navigation zu erstellen kann man folgenden TS-Code verwenden: \r\n\r\ntemp.breadcrumb = HMENU\r\ntemp.breadcrumb {\r\n   special = rootline\r\n   special.range = 0|5\r\n   entryLevel = 0\r\n   wrap =  &lt;div id=\"breadcrumb\"&gt;|&lt;/div&gt; #das kann natürlich angepasst, wie man es möchte\r\n   1 = TMENU\r\n   1 {\r\n   noBlur = 1\r\n      NO {\r\n           allWrap =   |   &gt;    |*|  |   &gt;   |*| |   \r\n            stdWrap.htmlSpecialChars = 1\r\n         }\r\n      }\r\n}\r\n Was macht der Code genau?\nEs wird ein neues Men+ erstellt, dass die Rootline (also den Seitenbaum) anzeigt.\nIm Bereich \"special.range = 0|5\" kann man festlegen von welcher Ebene und bis in welche Tiefe die Breadcrumb angezeigt werden soll. Möchte man die komplette Rootline ohne Einschränkungen, dann geht das so: \r\nspecial.range = 0|-1\r\n Mit \"allWrap =   |   >    |*|  |   >   |*| | \" werden die einzelnen Menüpunkte mit einem \">\" gewrappt, sodass man folgenden Output bekommt:\nStartseite > Hauptseite > Unterseite 1\nViel Spaß damit!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Breadcrumb-Navigation mit Rootline erstellen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#tmenu](/tag.html?tag=436&cHash=adb711bbb0a4542bdfe9d90abf225bbb)[#hmenu](/tag.html?tag=437&cHash=00bd92582d0de0e613907a4385f53318)[#ts](/tag.html?tag=438&cHash=55f0f3654f8647bf7fad81e21f5c4e05)[#breadcrumb](/tag.html?tag=443&cHash=4cb6bfeab646e4b0adb878c1003555ef)[#wrap](/tag.html?tag=444&cHash=0fee7a90671be71430087d4b29ecc78e)[#rootline](/tag.html?tag=445&cHash=4c67f7ccdf3331cfaacaf88e996df8a6)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Mar 2014

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/ad85b34fe7125a897f7fadf21fa48ae0?s=75&d=mm&r=g)
    
    Autan
    
    Danke Andre, entryLevel hab ich gesucht ! :D
    
    07\. Dec 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.