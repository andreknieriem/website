---
title: 'TYPO3: Shortcut Menüpunkt als active setzen'
date: '2017-02-16T23:00:00.000Z'
slug: typo3-shortcut-menuepunkt-als-active-setzen
tags:
  - typo3
  - ' shortcut'
  - tmenu
  - hmenu
  - act
  - selected
description: "In vielen TYPO3 Installationen kommt es vor, dass man einen Home/Startseite Link ins Menü einbaut, welche als Shortcut wieder auf die oberste Seite zeigt. Dieser wird allerdings niemals den Aktiv-Zustand bekommen. Um das Ganze zu lösen kann man mit ein paar kleinen Conditions im TypoScript den Aktiv-Zustand doch erreichen.&nbsp;\r\nHier der TS-Code: lib.menu = HMENU\r\nlib.menu {\r\n\r\n    1 = TMENU\r\n    1 {\r\n        wrap = &lt;ul&gt;|&lt;/ul&gt;\r\n        expAll = 1\r\n        noBlur = 1\r\n\r\n        NO.wrapItemAndSub = &lt;li&gt;|&lt;/li&gt;\r\n\r\n        # Add class active to li if shortcut is pointing to current page\r\n        NO.wrapItemAndSub.override.cObject = COA\r\n        NO.wrapItemAndSub.override.cObject {\r\n            if {\r\n                value = 4\r\n                equals.field = doktype\r\n                isTrue = 1\r\n                isTrue.if {\r\n                    value.data = TSFE:page|uid\r\n                    equals.field = shortcut\r\n                }\r\n            }\r\n            10 = TEXT\r\n            10.value = &lt;li class=\"active\" &gt;|&lt;/li&gt;\r\n        }\r\n\r\n        ACT = 1\r\n        ACT.wrapItemAndSub = &lt;li class=\"active\" &gt;|&lt;/li&gt;    \r\n    }\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

In vielen TYPO3 Installationen kommt es vor, dass man einen Home/Startseite Link ins Menü einbaut, welche als Shortcut wieder auf die oberste Seite zeigt. Dieser wird allerdings niemals den Aktiv-Zustand bekommen. Um das Ganze zu lösen kann man mit ein paar kleinen Conditions im TypoScript den Aktiv-Zustand doch erreichen. 

**Hier der TS-Code:**

```bash
lib.menu = HMENU
lib.menu {

    1 = TMENU
    1 {
        wrap = <ul>|</ul>
        expAll = 1
        noBlur = 1

        NO.wrapItemAndSub = <li>|</li>

        # Add class active to li if shortcut is pointing to current page
        NO.wrapItemAndSub.override.cObject = COA
        NO.wrapItemAndSub.override.cObject {
            if {
                value = 4
                equals.field = doktype
                isTrue = 1
                isTrue.if {
                    value.data = TSFE:page|uid
                    equals.field = shortcut
                }
            }
            10 = TEXT
            10.value = <li class="active" >|</li>
        }

        ACT = 1
        ACT.wrapItemAndSub = <li class="active" >|</li>    
    }
}
```
