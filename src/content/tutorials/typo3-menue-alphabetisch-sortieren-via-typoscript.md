---
title: 'TYPO3: Menü alphabetisch sortieren via Typoscript'
date: '2014-03-12T17:05:29.000Z'
slug: typo3-menue-alphabetisch-sortieren-via-typoscript
tags:
  - typo3
  - sortieren
  - typoscript
  - tmenu
  - hmenu
  - ts
  - alphabetisch
description: "Manchmal möchte man ein Typoscript-Menu alphabetisch oder generell nach irgendetwas sortiert ausgeben. TYPO3 bietet hierfür eine Zeile Typoscript, um das Ganze zu bewerkstelligen. Der Code dafür lautet: alternativeSortingField = euerFeld.\nHier mal das Ganze als komplettes Typoscript, bei dem nach Titel sortiert wird. \r\nlib.sortmenu = HMENU\r\nlib.sortmenu {\r\n    1 = TMENU\r\n    1 {\r\n        # hier das Feld nachdem sortiert werden soll\r\n        alternativeSortingField = title\r\n        wrap = &lt;ul&gt;|&lt;/ul&gt;\r\n        NO.wrapItemAndSub = &lt;li&gt;|&lt;/li&gt;\r\n    }\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Manchmal möchte man ein Typoscript-Menu alphabetisch oder generell nach irgendetwas sortiert ausgeben. TYPO3 bietet hierfür eine Zeile Typoscript, um das Ganze zu bewerkstelligen. Der Code dafür lautet: **alternativeSortingField = euerFeld.**

Hier mal das Ganze als komplettes Typoscript, bei dem nach Titel sortiert wird.

```bash

lib.sortmenu = HMENU
lib.sortmenu {
    1 = TMENU
    1 {
        # hier das Feld nachdem sortiert werden soll
        alternativeSortingField = title
        wrap = <ul>|</ul>
        NO.wrapItemAndSub = <li>|</li>
    }
}

```
