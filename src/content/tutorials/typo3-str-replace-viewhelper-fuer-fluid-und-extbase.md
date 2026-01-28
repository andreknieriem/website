---
title: 'TYPO3: Str_Replace Viewhelper für Fluid und Extbase'
date: '2014-04-22T15:52:37.000Z'
slug: typo3-str-replace-viewhelper-fuer-fluid-und-extbase
tags:
  - typo3
  - fluid
  - viewhelper
  - extbase
  - str_replace
description: "Da ich gerade letztens einen Viewhelper brauchte, der mir Zeichen ersetzt, bzw. ersetzt, habe ich mir schnell einen gebaut und will ihn euch nicht vorenthalten.\nViewhelper-Code \r\n&lt;?php\r\n\r\nclass Tx_ExtensionName_ViewHelpers_StringReplaceViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {\r\n\t/**\r\n\t * Replace the $searchFor string with $replaceString in $string\r\n\t *\r\n\t * @param $string string\r\n\t * @param $searchFor string\r\n\t * @param $replaceWith string\r\n\t * @return string\r\n\t */\r\n\tpublic function render($string, $searchFor, $replaceWith) {\r\n\t\treturn str_replace($searchFor, $replaceWith, $string);\r\n\t}\r\n}\r\n?&gt;\r\n Anwendung\nUnd so kann man dann im Fluid-Template das Ganze anwenden: \r\n{namespace t=Tx_ExtensionName_ViewHelpers}\r\n&lt;t:StringReplace string=\"Foo Bar\" searchFor=\"Bar\" replaceWith=\"Foo\" /&gt;\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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