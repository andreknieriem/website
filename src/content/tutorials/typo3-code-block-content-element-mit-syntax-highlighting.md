---
title: 'TYPO3: Code-Block Content-Element mit Syntax Highlighting'
date: '2018-12-04T08:31:00.000Z'
slug: typo3-code-block-content-element-mit-syntax-highlighting
tags:
  - '198'
  - '1093'
  - '1094'
  - '1095'
  - '1096'
  - '518'
  - '764'
  - '680'
  - '210'
  - '479'
  - '10'
description: "Für diese Webseite hier habe ich ein Content-Element erstellt, dass es mir erlaubt Code-Blöcke zu schreiben und die Sprache für das Syntax-Highlighting zu definieren. Das Ganze habe ich nun in eine eigene Extension überführt, damit auch andere was davon haben.\r\nWas kann die Extension?\r\nDie Extension fügt ein Content-Element names \"Code-Block\" hinzu. Wählt man diesen aus, so bekommt man in etwa die Ansicht, wie das HTML-Content-Element von TYPO3 mit dem Zusatz eines Select-Feldes für die Auswahl der Programmier/Hightlight-Sprache.  Die Extension funktioniert sowohl mit css_styled_content, sowie mit fluid_styled_content&nbsp;und ist von mir in Version 7.6+ und 8.7+ getestet. Eine lauffähige 9.5 habe ich bisher nicht getestet, sehe da aber kein Problem.\r\nInstallation\r\nInstallieren lässt sich die Extension auf dem alten Weg aus dem Git-Repository: git clone https://github.com/andreknieriem/codeelement.git oder mit composer composer require andrerinas/codeelement Es gibt eine Option, die man im Konstanten-Editor setzen kann. Hier kann man entscheiden, ob man die Prismjs Dateien einbinden möchte, oder nicht.&nbsp;\r\nFolgende Sprachen habe ich bei meinem Plugin eingebunden:\r\n \tHTML \tCSS \tSASS \tSQL \tPHP \tTYPOSCRIPT \tBASH \r\nPrismjs selbst unterstützt noch mehr Sprachen. Wer das möchte, kann sich einfach eine eigene prismjs generieren lassen und die Optionen im Select für die Programmier-Sprache erweitern."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#add](/tag.html?tag=210&cHash=3ba43bb3febe1e8d4e2be7db000fc0e6)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#prism](/tag.html?tag=518&cHash=caf2d0e72cc8492e2900e4513aed3ec2)[#element](/tag.html?tag=680&cHash=b28d99e39f2c30c9e9d42958b32a6af7)[#content](/tag.html?tag=764&cHash=b8a45bb55a875b84b1ffa2afeae517a5)[#code](/tag.html?tag=1093&cHash=7922a53198d260f001affd9e2a7a3d67)[#pre](/tag.html?tag=1094&cHash=3b76af1795b72a5ef20ed5c4386d8c8f)[#syntax](/tag.html?tag=1095&cHash=4e166b23d6e7c0a0bf88cf14acbb356c)[#highlighting](/tag.html?tag=1096&cHash=49649bc2bd5a04161a79df387b22c1f1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Dec 2018

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/b1bcdb5a2f21c3370e268f70e1967f26?s=75&d=mm&r=g)
    
    Altan
    
    Das ist cool, Andre! :) Muss ich mal bei Gelegenheit testen
    
    23\. Dec 2018 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.