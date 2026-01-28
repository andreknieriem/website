---
title: 'TYPO3: Str_Replace Viewhelper für Fluid und Extbase'
date: '2014-04-22T15:52:37.000Z'
slug: typo3-str-replace-viewhelper-fuer-fluid-und-extbase
tags:
  - '198'
  - '432'
  - '442'
  - '461'
  - '462'
description: "Da ich gerade letztens einen Viewhelper brauchte, der mir Zeichen ersetzt, bzw. ersetzt, habe ich mir schnell einen gebaut und will ihn euch nicht vorenthalten.\nViewhelper-Code \r\n&lt;?php\r\n\r\nclass Tx_ExtensionName_ViewHelpers_StringReplaceViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {\r\n\t/**\r\n\t * Replace the $searchFor string with $replaceString in $string\r\n\t *\r\n\t * @param $string string\r\n\t * @param $searchFor string\r\n\t * @param $replaceWith string\r\n\t * @return string\r\n\t */\r\n\tpublic function render($string, $searchFor, $replaceWith) {\r\n\t\treturn str_replace($searchFor, $replaceWith, $string);\r\n\t}\r\n}\r\n?&gt;\r\n Anwendung\nUnd so kann man dann im Fluid-Template das Ganze anwenden: \r\n{namespace t=Tx_ExtensionName_ViewHelpers}\r\n&lt;t:StringReplace string=\"Foo Bar\" searchFor=\"Bar\" replaceWith=\"Foo\" /&gt;\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#viewhelper](/tag.html?tag=442&cHash=9f609bca0d7e725c8a8a78a157ddf269)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#str\_replace](/tag.html?tag=462&cHash=6d953770be5737ed4953b2d82b954e52)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

22\. Apr 2014

Da ich gerade letztens einen Viewhelper brauchte, der mir Zeichen ersetzt, bzw. ersetzt, habe ich mir schnell einen gebaut und will ihn euch nicht vorenthalten.

**Viewhelper-Code**

```

<?php

class Tx_ExtensionName_ViewHelpers_StringReplaceViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {
	/**
	 * Replace the $searchFor string with $replaceString in $string
	 *
	 * @param $string string
	 * @param $searchFor string
	 * @param $replaceWith string
	 * @return string
	 */
	public function render($string, $searchFor, $replaceWith) {
		return str_replace($searchFor, $replaceWith, $string);
	}
}
?>
```

**Anwendung**

Und so kann man dann im Fluid-Template das Ganze anwenden:

```

{namespace t=Tx_ExtensionName_ViewHelpers}
<t:StringReplace string="Foo Bar" searchFor="Bar" replaceWith="Foo" />
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.