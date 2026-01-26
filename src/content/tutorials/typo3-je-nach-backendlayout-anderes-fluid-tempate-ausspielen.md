---
title: 'TYPO3: Je nach Backendlayout anderes Fluid-Tempate ausspielen'
date: '2017-11-25T23:00:00.000Z'
slug: typo3-je-nach-backendlayout-anderes-fluid-tempate-ausspielen
tags:
  - '198'
  - '432'
  - '861'
  - '1025'
  - '178'
description: "Seit TYPO3 7LTS gibt im TypoScript das Feld pagelayout. Dieses kümmert sich von selbst um die Vererbung des Backend-Layout-Feldes und macht es somit einfach, je nach Backend-Layout ein anderes Fluid-Template auszuspielen. Hier mal ein Beispiel-Code:\r\nPage page.10 = FLUIDTEMPLATE\r\npage.10 {\r\n  file.stdWrap.cObject = CASE\r\n  file.stdWrap.cObject {\r\n    key.data = pagelayout\r\n    default = TEXT\r\n    default.value = EXT:arsite/Resources/Private/Templates/Index.html\r\n    3 = TEXT\r\n    3.value = EXT:arsite/Resources/Private/Templates/Subpage.html\r\n    4 = TEXT\r\n    4.value = EXT:arsite/Resources/Private/Templates/Special.html\r\n  }\r\n}"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Je nach Backendlayout anderes Fluid-Tempate ausspielen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#override](/tag.html?tag=178&cHash=77078223c6977994f9dba2703aa91f13)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#recursive](/tag.html?tag=861&cHash=9bb9359c98c52ee14ba50177e056a49a)[#vererbung](/tag.html?tag=1025&cHash=9be6ac7a0292df1108bc70273f4ed92f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Nov 2017

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.