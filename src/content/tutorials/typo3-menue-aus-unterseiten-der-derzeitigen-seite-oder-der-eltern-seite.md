---
title: 'TYPO3: Menü aus Unterseiten der derzeitigen Seite, oder der Eltern-Seite'
date: '2017-07-24T22:00:00.000Z'
slug: typo3-menue-aus-unterseiten-der-derzeitigen-seite-oder-der-eltern-seite
tags:
  - '198'
  - '474'
  - '1001'
  - '1002'
  - '415'
  - '645'
  - '1003'
  - '1004'
description: "Dieses kleine TypoScript Snipped erstellt ein Menü, dass normalerweise die Unterseiten der aktuellen Seite anzeigt. Hat die aktuelle Seite keine Unterseiten, so werden die Unterseiten der Eltern/Parent-Seite angezeigt. Das Ganze ist über ein if gelöst.\r\nHier der funktionierende Code: lib.subMenu = HMENU\r\nlib.subMenu {\r\n\r\n    1 = TMENU\r\n    1 {\r\n        wrap = &lt;ul id=\"submenu\"&gt;|&lt;/ul&gt;\r\n        NO = 1\r\n        NO {\r\n            wrapItemAndSub = &lt;li&gt;|&lt;/li&gt;\r\n        }\r\n        ACT = 1\r\n        ACT {\r\n            wrapItemAndSub = &lt;li class=\"active\"&gt;|&lt;/li&gt;\r\n        }\r\n    }\r\n\r\n    # -1 = derzeitige Seite\r\n    entryLevel = -1\r\n\r\n    # Setzt man den entryLevel auf -2 wird die Eltern-Seite benutzt.\r\n    # Dies passiert, wenn es keine pages gibt, die die pid der derzeitigen Seite haben,\r\n    # also hat die derzeitige Seite keine Unterseiten\r\n    entryLevel.override = -2\r\n    entryLevel.override.if {\r\n        negate = 1\r\n        isTrue.numRows {\r\n            table = pages\r\n            where = pid=this\r\n        }\r\n    }\r\n}"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Menü aus Unterseiten der derzeitigen Seite, oder der Eltern-Seite

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#menu](/tag.html?tag=474&cHash=afa1a85544c323a01d349889dfb80551)[#if](/tag.html?tag=645&cHash=76e33d323241afb000412cd679839204)[#subpage](/tag.html?tag=1001&cHash=9906322141800417c5092d0832e8888c)[#current page](/tag.html?tag=1002&cHash=ca690ff74ae3ff23faf68fa3039bb2fb)[#else](/tag.html?tag=1003&cHash=088a963e396d3e64e6626a153f2be16e)[#condition](/tag.html?tag=1004&cHash=069922a0831c20081c04d0584404e607)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

25\. Jul 2017

Dieses kleine TypoScript Snipped erstellt ein Menü, dass normalerweise die Unterseiten der aktuellen Seite anzeigt. Hat die aktuelle Seite keine Unterseiten, so werden die Unterseiten der Eltern/Parent-Seite angezeigt. Das Ganze ist über ein if gelöst.

**Hier der funktionierende Code:**

```
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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.