---
title: 'TYPO3: Je nach Backendlayout anderes Fluid-Tempate ausspielen'
date: '2017-11-25T23:00:00.000Z'
slug: typo3-je-nach-backendlayout-anderes-fluid-tempate-ausspielen
tags:
  - typo3
  - fluid
  - recursive
  - vererbung
  - override
description: "Seit TYPO3 7LTS gibt im TypoScript das Feld pagelayout. Dieses kümmert sich von selbst um die Vererbung des Backend-Layout-Feldes und macht es somit einfach, je nach Backend-Layout ein anderes Fluid-Template auszuspielen. Hier mal ein Beispiel-Code:\r\nPage page.10 = FLUIDTEMPLATE\r\npage.10 {\r\n  file.stdWrap.cObject = CASE\r\n  file.stdWrap.cObject {\r\n    key.data = pagelayout\r\n    default = TEXT\r\n    default.value = EXT:arsite/Resources/Private/Templates/Index.html\r\n    3 = TEXT\r\n    3.value = EXT:arsite/Resources/Private/Templates/Subpage.html\r\n    4 = TEXT\r\n    4.value = EXT:arsite/Resources/Private/Templates/Special.html\r\n  }\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Seit TYPO3 7LTS gibt im TypoScript das Feld pagelayout. Dieses kümmert sich von selbst um die Vererbung des Backend-Layout-Feldes und macht es somit einfach, je nach Backend-Layout ein anderes Fluid-Template auszuspielen. Hier mal ein Beispiel-Code:

**Page**

```
page.10 = FLUIDTEMPLATE
page.10 {
  file.stdWrap.cObject = CASE
  file.stdWrap.cObject {
    key.data = pagelayout
    default = TEXT
    default.value = EXT:arsite/Resources/Private/Templates/Index.html
    3 = TEXT
    3.value = EXT:arsite/Resources/Private/Templates/Subpage.html
    4 = TEXT
    4.value = EXT:arsite/Resources/Private/Templates/Special.html
  }
}
```