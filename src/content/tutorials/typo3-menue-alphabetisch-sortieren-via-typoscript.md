---
title: 'TYPO3: Menü alphabetisch sortieren via Typoscript'
date: '2014-03-12T17:05:29.000Z'
slug: typo3-menue-alphabetisch-sortieren-via-typoscript
tags:
  - '198'
  - '412'
  - '415'
  - '436'
  - '437'
  - '438'
  - '439'
description: "Manchmal möchte man ein Typoscript-Menu alphabetisch oder generell nach irgendetwas sortiert ausgeben. TYPO3 bietet hierfür eine Zeile Typoscript, um das Ganze zu bewerkstelligen. Der Code dafür lautet: alternativeSortingField = euerFeld.\nHier mal das Ganze als komplettes Typoscript, bei dem nach Titel sortiert wird. \r\nlib.sortmenu = HMENU\r\nlib.sortmenu {\r\n    1 = TMENU\r\n    1 {\r\n        # hier das Feld nachdem sortiert werden soll\r\n        alternativeSortingField = title\r\n        wrap = &lt;ul&gt;|&lt;/ul&gt;\r\n        NO.wrapItemAndSub = &lt;li&gt;|&lt;/li&gt;\r\n    }\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Menü alphabetisch sortieren via Typoscript

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#sortieren](/tag.html?tag=412&cHash=ff1b5da47634540c33b66cc75c11d61b)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#tmenu](/tag.html?tag=436&cHash=adb711bbb0a4542bdfe9d90abf225bbb)[#hmenu](/tag.html?tag=437&cHash=00bd92582d0de0e613907a4385f53318)[#ts](/tag.html?tag=438&cHash=55f0f3654f8647bf7fad81e21f5c4e05)[#alphabetisch](/tag.html?tag=439&cHash=d4872a1b2cfa8e1b8f4b233447f39220)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Mar 2014

Manchmal möchte man ein Typoscript-Menu alphabetisch oder generell nach irgendetwas sortiert ausgeben. TYPO3 bietet hierfür eine Zeile Typoscript, um das Ganze zu bewerkstelligen. Der Code dafür lautet: **alternativeSortingField = euerFeld.**

Hier mal das Ganze als komplettes Typoscript, bei dem nach Titel sortiert wird.

```

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/15580ede99fb1dcebe5583c36db3397e?s=75&d=mm&r=g)
    
    E.H.
    
    Wenn ich mir so ein Menü ausgeben lasse und es mir auch die Unterpunkte mancher Seiten mit ausgibt, ist es dann möglich das komplette Menü zu sortieren? Beispielsweise 4 Seiten mit jeweils 3 Unterseiten, die ich jetzt alle nach Erstellungsdatum sortieren möchte (Unterseite 2 von Elternseite 1 wurde zuletzt erstellt -> soll ganz oben stehen)
    
    02\. Nov 2020 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.