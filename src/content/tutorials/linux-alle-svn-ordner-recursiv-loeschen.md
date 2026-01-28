---
title: 'Linux: Alle .svn Ordner recursiv löschen'
date: '2017-02-06T23:00:00.000Z'
slug: linux-alle-svn-ordner-recursiv-loeschen
tags:
  - '109'
  - '957'
  - '958'
  - '203'
  - '35'
  - '492'
  - '861'
  - '91'
description: "Wenn man aus einem Projekt die ganzen .svn Ordner löschen möchte, weil man beispielsweise auf Git umsteigt, so kann man dies mit dem folgenden kleinen Befehl erledigen. // Prüfen ob der Löschbefehl etwas finden und was er löschen wird:\r\nfind . -name .svn -exec ls '{}' \\;\r\n\r\n// wirklich alle .svn Ordner löschen\r\nfind . -name .svn -exec rm -rf '{}' \\;"
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Linux

* * *

![](/fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#delete](/tag.html?tag=35&cHash=3c6598ffd1d9780f81065a1fea257830)[#rekursiv](/tag.html?tag=91&cHash=a5f6c8eeac45f62e095e922690b3e2d1)[#svn](/tag.html?tag=109&cHash=7af12f577bd2ec40193520c97ba6d07e)[#linux](/tag.html?tag=203&cHash=a988c07c8fcb1b9d8276b2e73ba3a6f3)[#ubuntu](/tag.html?tag=492&cHash=e77b6ae065d6e25c792e5e415713b0f1)[#recursive](/tag.html?tag=861&cHash=9bb9359c98c52ee14ba50177e056a49a)[\# folder](/tag.html?tag=957&cHash=6e0fe6dfd1d3ba866d29ce8c6931937a)[\# unix](/tag.html?tag=958&cHash=94edae93d569898454be02618637de69)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Feb 2017

Wenn man aus einem Projekt die ganzen .svn Ordner löschen möchte, weil man beispielsweise auf Git umsteigt, so kann man dies mit dem folgenden kleinen Befehl erledigen.

```
// Prüfen ob der Löschbefehl etwas finden und was er löschen wird:
find . -name .svn -exec ls '{}' \;

// wirklich alle .svn Ordner löschen
find . -name .svn -exec rm -rf '{}' \;
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.