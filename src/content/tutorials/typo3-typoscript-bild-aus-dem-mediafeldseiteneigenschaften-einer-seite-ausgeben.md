---
title: >-
  TYPO3: Typoscript - Bild aus dem Mediafeld/Seiteneigenschaften einer Seite
  ausgeben
date: '2018-09-19T11:27:00.000Z'
slug: >-
  typo3-typoscript-bild-aus-dem-mediafeldseiteneigenschaften-einer-seite-ausgeben
tags:
  - '198'
  - '43'
  - '1062'
  - '540'
  - '1063'
  - '526'
  - '415'
  - '426'
description: "Immer wieder benötigt man für verschiedene Webseiten und Unterseiten verschiedene Bilder. bzw. Keyvisuals im Header. Das ist ansprechend und wertet eine Seite auf. TYPO3 bietet hier per Default die Möglichkeit in Seiteneigenschaften im Ressourcen-Tab ein oder mehrere Bilder hochzuladen.\r\nUm diese Bilder im Template verwenden zu können benötigt man nur ein paar Zeilen TYPOSCRIPT.\r\nHier mal ein paar Beispiele: lib.headerpic = IMAGE\r\nlib.headerpic {\r\n  file {\r\n    import.data = levelmedia:-1, slide\r\n    treatIdAsReference = 1\r\n    import.listNum = 0\r\n  }\r\n}\r\n\r\nBenutzung in Fluid\r\n&lt;header&gt;\r\n    &lt;f:cObject typoscriptObjectPath=\"lib.headerpic\" /&gt;\r\n&lt;/header&gt; Erklärung zum Beispiel\r\nAls erstes wird das Element als ein Bild deklariert. Danach wird gesagt, dass das Bild aus dem Feld media genommen wird. Die Option slide bedeutet, dass das Feld vererbar ist und so lange nach oben im Seitenbaum&nbsp; gesucht wird, bis es ein Bild gibt. Die nächste Zeile bedeutet, dass es sich hierbei um einen Referenz-Datensatz handelt, die ID des Bildes also nicht das Bild selbst ist, sondern die Verknüpfung. Die letzte Zeile bedeutet, dass nur das erste Bild, also mit dem Index 0 genommen wird.\r\nBild als Hintergrund benutzen\r\nNatürlich kommt es oft vor, dass man das Bild als Hintergrund einsetzen möchte. Das ist auch möglich und bedarf nur ein paar Änderungen am Code: lib.headerpic = IMG_RESOURCE\r\nlib.headerpic {\r\n  file {\r\n    import.data = levelmedia:-1, slide\r\n    treatIdAsReference = 1\r\n    import.listNum = 0\r\n    width = 1400 #natürlich anpassbar!\r\n    height = 400 #natürlich anpassbar!\r\n  }\r\n}\r\n\r\nBenutzung in Fluid\r\n&lt;header style=\"background-image: url( {f:cObject(typoscriptObjectPath:'lib.headerpic')} )\"&gt;&lt;/header&gt; "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Typoscript - Bild aus dem Mediafeld/Seiteneigenschaften einer Seite ausgeben

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#page](/tag.html?tag=43&cHash=4e5734e50e9c8710133350eec6636569)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#url](/tag.html?tag=426&cHash=733c51e56123b09516ab685e6d499fe9)[#fal](/tag.html?tag=526&cHash=310e917c9f4afbac3d0144f45ac9f137)[#slide](/tag.html?tag=540&cHash=3585ae01f5acc5c34d7227cfdd77b545)[#media](/tag.html?tag=1062&cHash=2023ad249cce8675653ae3f26c2d81c9)[#levelmedia](/tag.html?tag=1063&cHash=50b7e741c12fd9aaf62b80556f9e7011)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Sep 2018

Immer wieder benötigt man für verschiedene Webseiten und Unterseiten verschiedene Bilder. bzw. Keyvisuals im Header. Das ist ansprechend und wertet eine Seite auf. TYPO3 bietet hier per Default die Möglichkeit in Seiteneigenschaften im Ressourcen-Tab ein oder mehrere Bilder hochzuladen.

Um diese Bilder im Template verwenden zu können benötigt man nur ein paar Zeilen TYPOSCRIPT.

### Hier mal ein paar Beispiele:

```
lib.headerpic = IMAGE
lib.headerpic {
  file {
    import.data = levelmedia:-1, slide
    treatIdAsReference = 1
    import.listNum = 0
  }
}
```

**Benutzung in Fluid**  

```
<header>
    <f:cObject typoscriptObjectPath="lib.headerpic" />
</header>
```

**Erklärung zum Beispiel**

Als erstes wird das Element als ein Bild deklariert. Danach wird gesagt, dass das Bild aus dem Feld media genommen wird. Die Option slide bedeutet, dass das Feld vererbar ist und so lange nach oben im Seitenbaum  gesucht wird, bis es ein Bild gibt. Die nächste Zeile bedeutet, dass es sich hierbei um einen Referenz-Datensatz handelt, die ID des Bildes also nicht das Bild selbst ist, sondern die Verknüpfung. Die letzte Zeile bedeutet, dass nur das erste Bild, also mit dem Index 0 genommen wird.

### Bild als Hintergrund benutzen

Natürlich kommt es oft vor, dass man das Bild als Hintergrund einsetzen möchte. Das ist auch möglich und bedarf nur ein paar Änderungen am Code:

```
lib.headerpic = IMG_RESOURCE
lib.headerpic {
  file {
    import.data = levelmedia:-1, slide
    treatIdAsReference = 1
    import.listNum = 0
    width = 1400 #natürlich anpassbar!
    height = 400 #natürlich anpassbar!
  }
}
```

**Benutzung in Fluid**  

```
<header style="background-image: url( {f:cObject(typoscriptObjectPath:'lib.headerpic')} )"></header>
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.