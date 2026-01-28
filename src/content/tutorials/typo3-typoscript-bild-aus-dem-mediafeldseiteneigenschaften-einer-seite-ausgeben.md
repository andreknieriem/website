---
title: >-
  TYPO3: Typoscript - Bild aus dem Mediafeld/Seiteneigenschaften einer Seite
  ausgeben
date: '2018-09-19T11:27:00.000Z'
slug: >-
  typo3-typoscript-bild-aus-dem-mediafeldseiteneigenschaften-einer-seite-ausgeben
tags:
  - typo3
  - page
  - media
  - slide
  - levelmedia
  - fal
  - typoscript
  - url
description: "Immer wieder benötigt man für verschiedene Webseiten und Unterseiten verschiedene Bilder. bzw. Keyvisuals im Header. Das ist ansprechend und wertet eine Seite auf. TYPO3 bietet hier per Default die Möglichkeit in Seiteneigenschaften im Ressourcen-Tab ein oder mehrere Bilder hochzuladen.\r\nUm diese Bilder im Template verwenden zu können benötigt man nur ein paar Zeilen TYPOSCRIPT.\r\nHier mal ein paar Beispiele: lib.headerpic = IMAGE\r\nlib.headerpic {\r\n  file {\r\n    import.data = levelmedia:-1, slide\r\n    treatIdAsReference = 1\r\n    import.listNum = 0\r\n  }\r\n}\r\n\r\nBenutzung in Fluid\r\n&lt;header&gt;\r\n    &lt;f:cObject typoscriptObjectPath=\"lib.headerpic\" /&gt;\r\n&lt;/header&gt; Erklärung zum Beispiel\r\nAls erstes wird das Element als ein Bild deklariert. Danach wird gesagt, dass das Bild aus dem Feld media genommen wird. Die Option slide bedeutet, dass das Feld vererbar ist und so lange nach oben im Seitenbaum&nbsp; gesucht wird, bis es ein Bild gibt. Die nächste Zeile bedeutet, dass es sich hierbei um einen Referenz-Datensatz handelt, die ID des Bildes also nicht das Bild selbst ist, sondern die Verknüpfung. Die letzte Zeile bedeutet, dass nur das erste Bild, also mit dem Index 0 genommen wird.\r\nBild als Hintergrund benutzen\r\nNatürlich kommt es oft vor, dass man das Bild als Hintergrund einsetzen möchte. Das ist auch möglich und bedarf nur ein paar Änderungen am Code: lib.headerpic = IMG_RESOURCE\r\nlib.headerpic {\r\n  file {\r\n    import.data = levelmedia:-1, slide\r\n    treatIdAsReference = 1\r\n    import.listNum = 0\r\n    width = 1400 #natürlich anpassbar!\r\n    height = 400 #natürlich anpassbar!\r\n  }\r\n}\r\n\r\nBenutzung in Fluid\r\n&lt;header style=\"background-image: url( {f:cObject(typoscriptObjectPath:'lib.headerpic')} )\"&gt;&lt;/header&gt; "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Immer wieder benötigt man für verschiedene Webseiten und Unterseiten verschiedene Bilder. bzw. Keyvisuals im Header. Das ist ansprechend und wertet eine Seite auf. TYPO3 bietet hier per Default die Möglichkeit in Seiteneigenschaften im Ressourcen-Tab ein oder mehrere Bilder hochzuladen.

Um diese Bilder im Template verwenden zu können benötigt man nur ein paar Zeilen TYPOSCRIPT.

### Hier mal ein paar Beispiele:

```typoscript
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

```markup
<header>
    <f:cObject typoscriptObjectPath="lib.headerpic" />
</header>
```

**Erklärung zum Beispiel**

Als erstes wird das Element als ein Bild deklariert. Danach wird gesagt, dass das Bild aus dem Feld media genommen wird. Die Option slide bedeutet, dass das Feld vererbar ist und so lange nach oben im Seitenbaum  gesucht wird, bis es ein Bild gibt. Die nächste Zeile bedeutet, dass es sich hierbei um einen Referenz-Datensatz handelt, die ID des Bildes also nicht das Bild selbst ist, sondern die Verknüpfung. Die letzte Zeile bedeutet, dass nur das erste Bild, also mit dem Index 0 genommen wird.

### Bild als Hintergrund benutzen

Natürlich kommt es oft vor, dass man das Bild als Hintergrund einsetzen möchte. Das ist auch möglich und bedarf nur ein paar Änderungen am Code:

```typoscript
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

```markup
<header style="background-image: url( {f:cObject(typoscriptObjectPath:'lib.headerpic')} )"></header>
```