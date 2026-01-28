---
title: 'TYPO3: Code-Block Content-Element mit Syntax Highlighting'
date: '2018-12-04T08:31:00.000Z'
slug: typo3-code-block-content-element-mit-syntax-highlighting
tags:
  - typo3
  - code
  - pre
  - syntax
  - highlighting
  - prism
  - content
  - element
  - add
  - extension
  - plugin
description: "Für diese Webseite hier habe ich ein Content-Element erstellt, dass es mir erlaubt Code-Blöcke zu schreiben und die Sprache für das Syntax-Highlighting zu definieren. Das Ganze habe ich nun in eine eigene Extension überführt, damit auch andere was davon haben.\r\nWas kann die Extension?\r\nDie Extension fügt ein Content-Element names \"Code-Block\" hinzu. Wählt man diesen aus, so bekommt man in etwa die Ansicht, wie das HTML-Content-Element von TYPO3 mit dem Zusatz eines Select-Feldes für die Auswahl der Programmier/Hightlight-Sprache.  Die Extension funktioniert sowohl mit css_styled_content, sowie mit fluid_styled_content&nbsp;und ist von mir in Version 7.6+ und 8.7+ getestet. Eine lauffähige 9.5 habe ich bisher nicht getestet, sehe da aber kein Problem.\r\nInstallation\r\nInstallieren lässt sich die Extension auf dem alten Weg aus dem Git-Repository: git clone https://github.com/andreknieriem/codeelement.git oder mit composer composer require andrerinas/codeelement Es gibt eine Option, die man im Konstanten-Editor setzen kann. Hier kann man entscheiden, ob man die Prismjs Dateien einbinden möchte, oder nicht.&nbsp;\r\nFolgende Sprachen habe ich bei meinem Plugin eingebunden:\r\n \tHTML \tCSS \tSASS \tSQL \tPHP \tTYPOSCRIPT \tBASH \r\nPrismjs selbst unterstützt noch mehr Sprachen. Wer das möchte, kann sich einfach eine eigene prismjs generieren lassen und die Optionen im Select für die Programmier-Sprache erweitern."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Für diese Webseite hier habe ich ein Content-Element erstellt, dass es mir erlaubt Code-Blöcke zu schreiben und die Sprache für das Syntax-Highlighting zu definieren. Das Ganze habe ich nun in eine eigene Extension überführt, damit auch andere was davon haben.

### Was kann die Extension?

Die Extension fügt ein Content-Element names "Code-Block" hinzu. Wählt man diesen aus, so bekommt man in etwa die Ansicht, wie das HTML-Content-Element von TYPO3 mit dem Zusatz eines Select-Feldes für die Auswahl der Programmier/Hightlight-Sprache.

[![](/fileadmin/_processed_/6/7/csm_codeelement_165b04186d.png)](/fileadmin/Daten/Tutorials/codeelement.png)

### Kompabilität

Die Extension funktioniert sowohl mit **css\_styled\_content**, sowie mit **fluid\_styled\_content** und ist von mir in Version 7.6+ und 8.7+ getestet. Eine lauffähige 9.5 habe ich bisher nicht getestet, sehe da aber kein Problem.

### Installation

Installieren lässt sich die Extension auf dem alten Weg aus dem Git-Repository:

```
git clone https://github.com/andreknieriem/codeelement.git
```

oder mit composer

```
composer require andrerinas/codeelement
```

### Optionen

Es gibt eine Option, die man im Konstanten-Editor setzen kann. Hier kann man entscheiden, ob man die Prismjs Dateien einbinden möchte, oder nicht. 

Folgende Sprachen habe ich bei meinem Plugin eingebunden:

*   HTML
*   CSS
*   SASS
*   SQL
*   PHP
*   TYPOSCRIPT
*   BASH

Prismjs selbst unterstützt noch mehr Sprachen. Wer das möchte, kann sich einfach eine eigene prismjs generieren lassen und die Optionen im Select für die Programmier-Sprache erweitern.