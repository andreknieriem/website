---
title: 'TYPO3: Javascript vor den Extensions einbinden (meistens für jQuery)'
date: '2015-04-21T16:04:06.000Z'
slug: typo3-javascript-vor-den-extensions-einbinden-meistens-fuer-jquery
tags:
  - '20'
  - '198'
  - '666'
  - '667'
  - '668'
  - '669'
  - '670'
description: "Manchmal kommt es vor, dass das Javascript von Extensions schon vor dem eigenen Javascript geladen wird. Dies ist im Falle von jQuery natürlich fatal, da dann keine einzige Funktion mehr geht und es den Fehler gibt, dass $ nicht definiert ist. Mit dem folgenden Code kann man Skripte zwingen oben geladen zu werden. \r\npage.includeJSFooter {\r\n    jquery = fileadmin/templates/js/jquery-1.11.2.min.js\r\n    jquery.forceOnTop = 1\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#Javascript#jQuery

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#includejs](/tag.html?tag=666&cHash=07ad3a46a938e69f058a2630744d13b6)[#includejsfooter](/tag.html?tag=667&cHash=47b008bcabc5f9d7a431c1f9352f0e76)[#force](/tag.html?tag=668&cHash=04fdc82cf7b01fd3dd215d5227514edf)[#load](/tag.html?tag=669&cHash=1297aa6e60c193c8603ac92d1ec5f9ea)[#first](/tag.html?tag=670&cHash=7f51eca2a381e8d7416a307b1c3d5118)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Apr 2015

Manchmal kommt es vor, dass das Javascript von Extensions schon vor dem eigenen Javascript geladen wird. Dies ist im Falle von jQuery natürlich fatal, da dann keine einzige Funktion mehr geht und es den Fehler gibt, dass $ nicht definiert ist. Mit dem folgenden Code kann man Skripte zwingen oben geladen zu werden.

```

page.includeJSFooter {
    jquery = fileadmin/templates/js/jquery-1.11.2.min.js
    jquery.forceOnTop = 1
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