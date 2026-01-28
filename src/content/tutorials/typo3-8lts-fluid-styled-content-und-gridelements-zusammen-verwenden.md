---
title: 'TYPO3 8LTS+: fluid_styled_content und gridelements zusammen verwenden'
date: '2018-01-26T15:51:00.000Z'
slug: typo3-8lts-fluid-styled-content-und-gridelements-zusammen-verwenden
tags:
  - '432'
  - '198'
  - '1028'
  - '482'
  - '531'
description: "Da ich meine eigene Seite gerade auf TYPO3 8LTS mit fluid_styled_content geupdatet habe, habe ich bemerkt, dass die Standard Klassen und Auszeichnungen nicht mehr an meine Grid-Elemente geschrieben wurden. Ich habe eine Lösung gefunden, die ich euch natürlich nicht vorenthalten möchte.\r\nAls erstes muss man das Default-Setup von Gridelements wie folgt abändern: lib.gridelements.defaultGridSetup {\r\n  columns {\r\n    default {\r\n      renderObj = COA\r\n      renderObj {\r\n        20 =&lt; tt_content\r\n      }\r\n    }\r\n  }\r\n  cObject =&lt; lib.contentElement\r\n  # fluid_styled_content hat hier leider nur Default, benutzt man aber Generic, dann funktioniert es wie es sollte\r\n  cObject.templateName = Generic\r\n} Anschließend das default rendering mit dem neuen defaultGridSetup herstellen plugin.tx_gridelements_pi1 &gt;\r\ntt_content.gridelements_pi1 &gt;\r\ntt_content.gridelements_pi1 =&lt; lib.contentElement\r\ntt_content.gridelements_pi1 {\r\n    # Hier Generic, wie oben angegeben\r\n    templateName = Generic\r\n    variables {\r\n        content = COA\r\n        content {\r\n            10 = USER\r\n            10 {\r\n                userFunc = GridElementsTeam\\Gridelements\\Plugin\\Gridelements-&gt;main\r\n                setup {\r\n                    default &lt; lib.gridelements.defaultGridSetup\r\n                }\r\n            }\r\n        }\r\n    }\r\n} Nun hat man das Grundsetup hergestellt und kann seine Gridelements definieren und alle haben wieder die Standard-Klassen # 2 Columns\r\n# unser neues default setup setzen\r\ntt_content.gridelements_pi1.variables.content.10.setup.2column &lt; lib.gridelements.defaultGridSetup\r\ntt_content.gridelements_pi1.variables.content.10.setup.2column {\r\n  cObject {\r\n    templateName = TwoCol\r\n    templateRootPaths {\r\n      20 = EXT:ar_test/Resources/Private/Templates/GridElements/\r\n    }\r\n  }\r\n}\r\n Das wars auch schon. Nun einfach alle Grid Elemente mit dem oberen Code definieren (hier kann man auch die ID's der Gridelemente nehmen, anstelle der Aliasse)&nbsp;\r\nViel Spaß mit euren vollfunktionsfähigen Grid-Elementen unter TYPO3 8LTS mit fluid_styled_content."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#gridelements](/tag.html?tag=482&cHash=92b372979bdd3e2d1a3b33ad9815e3b7)[#classes](/tag.html?tag=531&cHash=f83e4b85b0df8beb9407c83b3dad031b)[#fluid\_styled\_content](/tag.html?tag=1028&cHash=fc4182e9041218bc9473a0feede757d9)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Jan 2018

Da ich meine eigene Seite gerade auf TYPO3 8LTS mit fluid\_styled\_content geupdatet habe, habe ich bemerkt, dass die Standard Klassen und Auszeichnungen nicht mehr an meine Grid-Elemente geschrieben wurden. Ich habe eine Lösung gefunden, die ich euch natürlich nicht vorenthalten möchte.

Als erstes muss man das Default-Setup von Gridelements wie folgt abändern:

```
lib.gridelements.defaultGridSetup {
  columns {
    default {
      renderObj = COA
      renderObj {
        20 =< tt_content
      }
    }
  }
  cObject =< lib.contentElement
  # fluid_styled_content hat hier leider nur Default, benutzt man aber Generic, dann funktioniert es wie es sollte
  cObject.templateName = Generic
}
```

Anschließend das default rendering mit dem neuen defaultGridSetup herstellen

```
plugin.tx_gridelements_pi1 >
tt_content.gridelements_pi1 >
tt_content.gridelements_pi1 =< lib.contentElement
tt_content.gridelements_pi1 {
    # Hier Generic, wie oben angegeben
    templateName = Generic
    variables {
        content = COA
        content {
            10 = USER
            10 {
                userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
                setup {
                    default < lib.gridelements.defaultGridSetup
                }
            }
        }
    }
}
```

Nun hat man das Grundsetup hergestellt und kann seine Gridelements definieren und alle haben wieder die Standard-Klassen

```
tt_content.gridelements_pi1.variables.content.10.setup.2column < lib.gridelements.defaultGridSetup
tt_content.gridelements_pi1.variables.content.10.setup.2column {
  cObject {
    templateName = TwoCol
    templateRootPaths {
      20 = EXT:ar_test/Resources/Private/Templates/GridElements/
    }
  }
}
```

Das wars auch schon. Nun einfach alle Grid Elemente mit dem oberen Code definieren (hier kann man auch die ID's der Gridelemente nehmen, anstelle der Aliasse) 

Viel Spaß mit euren vollfunktionsfähigen Grid-Elementen unter TYPO3 8LTS mit fluid\_styled\_content.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/9850cdcdefd5a9e35d3d2d1c50ba7e7c?s=75&d=mm&r=g)
    
    [Stefan M](https://tan3.de)
    
    Auch danke für den Tip.  
    Wie sieht denn das TwoCol.html Template dazu aus?
    
    30\. Oct 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e4bd7a55cdf788e93ec93bbf111f639d?s=75&d=mm&r=g)
    
    [Andreas Keck](www.ktech-veranstaltunsgtechnik.de)
    
    Danke für den Tip, genau das habe ich gesucht. Wie muss ich denn das Element in das Fluid Template einbinden?
    
    28\. Oct 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/38de69e54d0d481a0d054397d3628032?s=75&d=mm&r=g)
    
    A Heigh it ler
    
    Nice
    
    23\. Jul 2018 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.