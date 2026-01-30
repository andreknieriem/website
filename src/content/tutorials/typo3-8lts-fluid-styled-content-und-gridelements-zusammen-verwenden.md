---
title: 'TYPO3 8LTS+: fluid_styled_content und gridelements zusammen verwenden'
date: '2018-01-26T15:51:00.000Z'
slug: typo3-8lts-fluid-styled-content-und-gridelements-zusammen-verwenden
tags:
  - fluid
  - typo3
  - fluid_styled_content
  - gridelements
  - classes
description: "Da ich meine eigene Seite gerade auf TYPO3 8LTS mit fluid_styled_content geupdatet habe, habe ich bemerkt, dass die Standard Klassen und Auszeichnungen nicht mehr an meine Grid-Elemente geschrieben wurden. Ich habe eine Lösung gefunden, die ich euch natürlich nicht vorenthalten möchte.\r\nAls erstes muss man das Default-Setup von Gridelements wie folgt abändern: lib.gridelements.defaultGridSetup {\r\n  columns {\r\n    default {\r\n      renderObj = COA\r\n      renderObj {\r\n        20 =&lt; tt_content\r\n      }\r\n    }\r\n  }\r\n  cObject =&lt; lib.contentElement\r\n  # fluid_styled_content hat hier leider nur Default, benutzt man aber Generic, dann funktioniert es wie es sollte\r\n  cObject.templateName = Generic\r\n} Anschließend das default rendering mit dem neuen defaultGridSetup herstellen plugin.tx_gridelements_pi1 &gt;\r\ntt_content.gridelements_pi1 &gt;\r\ntt_content.gridelements_pi1 =&lt; lib.contentElement\r\ntt_content.gridelements_pi1 {\r\n    # Hier Generic, wie oben angegeben\r\n    templateName = Generic\r\n    variables {\r\n        content = COA\r\n        content {\r\n            10 = USER\r\n            10 {\r\n                userFunc = GridElementsTeam\\Gridelements\\Plugin\\Gridelements-&gt;main\r\n                setup {\r\n                    default &lt; lib.gridelements.defaultGridSetup\r\n                }\r\n            }\r\n        }\r\n    }\r\n} Nun hat man das Grundsetup hergestellt und kann seine Gridelements definieren und alle haben wieder die Standard-Klassen # 2 Columns\r\n# unser neues default setup setzen\r\ntt_content.gridelements_pi1.variables.content.10.setup.2column &lt; lib.gridelements.defaultGridSetup\r\ntt_content.gridelements_pi1.variables.content.10.setup.2column {\r\n  cObject {\r\n    templateName = TwoCol\r\n    templateRootPaths {\r\n      20 = EXT:ar_test/Resources/Private/Templates/GridElements/\r\n    }\r\n  }\r\n}\r\n Das wars auch schon. Nun einfach alle Grid Elemente mit dem oberen Code definieren (hier kann man auch die ID's der Gridelemente nehmen, anstelle der Aliasse)&nbsp;\r\nViel Spaß mit euren vollfunktionsfähigen Grid-Elementen unter TYPO3 8LTS mit fluid_styled_content."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Da ich meine eigene Seite gerade auf TYPO3 8LTS mit fluid\_styled\_content geupdatet habe, habe ich bemerkt, dass die Standard Klassen und Auszeichnungen nicht mehr an meine Grid-Elemente geschrieben wurden. Ich habe eine Lösung gefunden, die ich euch natürlich nicht vorenthalten möchte.

Als erstes muss man das Default-Setup von Gridelements wie folgt abändern:

```bash
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

```bash
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

```bash
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
