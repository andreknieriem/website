---
title: 'TYPO3:  Pipe Symbol | in Wraps verwenden'
date: '2015-04-17T16:14:51.000Z'
slug: typo3-pipe-symbol-in-wraps-verwenden
tags:
  - '198'
  - '662'
  - '663'
description: "Hier mal eine Kleinigkeit, wie man ein Pipe-Symbol in einem Wrap als Zeichen verwendet. In meinem Beispiel für den Seitentitel.\nDafür muss man einfach nur den HTML Code für das |-Zeichen verwenden \r\nheaderData.5{\r\n    10 = TEXT\r\n    10.field = subtitle // title\r\n    10.noTrimWrap = |&lt;title&gt;| &amp;#124; Andreknieriem.de &lt;/title&gt;|\r\n}\r\n Ergebnis: Dies ist ein Titel | Andreknieriem.de "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Pipe Symbol | in Wraps verwenden

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#pipe](/tag.html?tag=662&cHash=547840f4b91ba59aaf12104878dfffa2)[#wraps](/tag.html?tag=663&cHash=c77ac4a77316f07adc7fdafc2bfde254)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Apr 2015

Hier mal eine Kleinigkeit, wie man ein Pipe-Symbol in einem Wrap als Zeichen verwendet. In meinem Beispiel für den Seitentitel.

Dafür muss man einfach nur den HTML Code für das |-Zeichen verwenden

```

headerData.5{
    10 = TEXT
    10.field = subtitle // title
    10.noTrimWrap = |<title>| &#124; Andreknieriem.de </title>|
}
```

**Ergebnis:**

Dies ist ein Titel | Andreknieriem.de

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.