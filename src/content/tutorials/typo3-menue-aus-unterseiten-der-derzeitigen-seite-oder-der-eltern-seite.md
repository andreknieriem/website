---
title: 'TYPO3: Menü aus Unterseiten der derzeitigen Seite, oder der Eltern-Seite'
date: '2017-07-24T22:00:00.000Z'
slug: typo3-menue-aus-unterseiten-der-derzeitigen-seite-oder-der-eltern-seite
tags:
  - typo3
  - menu
  - subpage
  - current page
  - typoscript
  - if
  - else
  - condition
description: "Dieses kleine TypoScript Snipped erstellt ein Menü, dass normalerweise die Unterseiten der aktuellen Seite anzeigt. Hat die aktuelle Seite keine Unterseiten, so werden die Unterseiten der Eltern/Parent-Seite angezeigt. Das Ganze ist über ein if gelöst.\r\nHier der funktionierende Code: lib.subMenu = HMENU\r\nlib.subMenu {\r\n\r\n    1 = TMENU\r\n    1 {\r\n        wrap = &lt;ul id=\"submenu\"&gt;|&lt;/ul&gt;\r\n        NO = 1\r\n        NO {\r\n            wrapItemAndSub = &lt;li&gt;|&lt;/li&gt;\r\n        }\r\n        ACT = 1\r\n        ACT {\r\n            wrapItemAndSub = &lt;li class=\"active\"&gt;|&lt;/li&gt;\r\n        }\r\n    }\r\n\r\n    # -1 = derzeitige Seite\r\n    entryLevel = -1\r\n\r\n    # Setzt man den entryLevel auf -2 wird die Eltern-Seite benutzt.\r\n    # Dies passiert, wenn es keine pages gibt, die die pid der derzeitigen Seite haben,\r\n    # also hat die derzeitige Seite keine Unterseiten\r\n    entryLevel.override = -2\r\n    entryLevel.override.if {\r\n        negate = 1\r\n        isTrue.numRows {\r\n            table = pages\r\n            where = pid=this\r\n        }\r\n    }\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Dieses kleine TypoScript Snipped erstellt ein Menü, dass normalerweise die Unterseiten der aktuellen Seite anzeigt. Hat die aktuelle Seite keine Unterseiten, so werden die Unterseiten der Eltern/Parent-Seite angezeigt. Das Ganze ist über ein if gelöst.

**Hier der funktionierende Code:**

```typoscript
lib.subMenu = HMENU
lib.subMenu {

    1 = TMENU
    1 {
        wrap = <ul id="submenu">|</ul>
        NO = 1
        NO {
            wrapItemAndSub = <li>|</li>
        }
        ACT = 1
        ACT {
            wrapItemAndSub = <li class="active">|</li>
        }
    }

    # -1 = derzeitige Seite
    entryLevel = -1

    # Setzt man den entryLevel auf -2 wird die Eltern-Seite benutzt.
    # Dies passiert, wenn es keine pages gibt, die die pid der derzeitigen Seite haben,
    # also hat die derzeitige Seite keine Unterseiten
    entryLevel.override = -2
    entryLevel.override.if {
        negate = 1
        isTrue.numRows {
            table = pages
            where = pid=this
        }
    }
}
```