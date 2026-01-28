---
title: 'TYPO3: Alle Wraps für Menüs und stdWrap hierarchisch aufgelistet'
date: '2018-02-11T10:25:00.000Z'
slug: typo3-alle-wraps-fuer-menues-und-stdwrap-hierarchisch-aufgelistet
tags:
  - typo3
  - wrap
  - stdwrap
  - menu
description: "Ich habe hier einmal eine Auflistung von allen Wraps und deren Positionen hierarchis aufgelistet. Gefunden hatte ich das Ganze auf einer anderen Seite im Netz, leider weiß ich nicht mehr genau wo.\r\nHier dann einmal die gut übersichtlichen Auflistungen\r\nMenüwraps wrapItemAndSub\r\n  allStdWrap\r\n     allWrap\r\n       beforeWrap\r\n         before\r\n      beforeWrap\r\n           stdWrap2\r\n             linkWrap\r\n               stdWrap\r\n                 Menüpunkt erste Ebene, activ, nicht verlinkt\r\n               stdWrap\r\n             linkWrap\r\n           stdWrap2\r\n         afterWrap\r\n       after\r\n         afterWrap\r\n     allWrap\r\n  allStdWrap\r\nwrapItemAndSub Hier einmal die Auflistung aller wraps von stdWrap outerWrap\r\n   wrap3\r\n      prepend\r\n         dataWrap\r\n            wrap2\r\n               noTrimWrap\r\n                  wrap\r\n                     preCObject\r\n                        innerWrap2\r\n                           innerWrap\r\n                              Textlicher Inhalt\r\n                           innerWrap\r\n                        innerWrap2\r\n                     postCObject\r\n                  wrap\r\n               noTrimWrap\r\n            wrap2\r\n         dataWrap\r\n      append\r\n   wrap3\r\nouterWrap"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Ich habe hier einmal eine Auflistung von allen Wraps und deren Positionen hierarchis aufgelistet. Gefunden hatte ich das Ganze auf einer anderen Seite im Netz, leider weiß ich nicht mehr genau wo.

Hier dann einmal die gut übersichtlichen Auflistungen

**Menüwraps**

```typoscript
wrapItemAndSub
  allStdWrap
     allWrap
       beforeWrap
         before
      beforeWrap
           stdWrap2
             linkWrap
               stdWrap
                 Menüpunkt erste Ebene, activ, nicht verlinkt
               stdWrap
             linkWrap
           stdWrap2
         afterWrap
       after
         afterWrap
     allWrap
  allStdWrap
wrapItemAndSub
```

**Hier einmal die Auflistung aller wraps von stdWrap**

```typoscript
outerWrap
   wrap3
      prepend
         dataWrap
            wrap2
               noTrimWrap
                  wrap
                     preCObject
                        innerWrap2
                           innerWrap
                              Textlicher Inhalt
                           innerWrap
                        innerWrap2
                     postCObject
                  wrap
               noTrimWrap
            wrap2
         dataWrap
      append
   wrap3
outerWrap
```