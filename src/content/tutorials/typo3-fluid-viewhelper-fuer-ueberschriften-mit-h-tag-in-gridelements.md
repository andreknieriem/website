---
title: 'TYPO3 Fluid: Viewhelper für Überschriften mit H-Tag in Gridelements'
date: '2014-03-12T16:42:26.000Z'
slug: typo3-fluid-viewhelper-fuer-ueberschriften-mit-h-tag-in-gridelements
tags:
  - typo3
  - fluid
  - headline
  - überschriften
  - viewhelper
  - gridelements
description: "Ich beschäftige mich gerade mit Fluid und Gridelements und der neuen TYPO 6.2 Version und wollte das Überschriften-Feld benutzen, aber inklusive dem Styling. Da ich nichts finden konnte, ob das von sich aus geht, habe ich kurzerhand einen Viewhelper geschrieben. \r\n&lt;?php\r\nclass Testviewhelper_ViewHelpers_HeadlineViewHelper  extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper{\t\r\n\tpublic function initializeArguments(){\r\n\t\t$this-&gt;registerArgument( 'header', 'mixed', '');\r\n\t\t$this-&gt;registerArgument( 'layout', 'mixed', '');\r\n\t}\r\n\t\r\n\tpublic function render() {\r\n\t\t$header = $this-&gt;arguments['header'];\r\n\t\t$layout = $this-&gt;arguments['layout'];\r\n\t\tif(!$layout || $layout == 0) $layout = 1;\r\n\t\t\r\n\t\t$headline = ($layout != 100 &amp;&amp; $header != '') ? '&lt;h'.$layout.'&gt;'.$header.'&lt;/h'.$layout.'&gt;' : '';\r\n\t\t\r\n\t\treturn $headline;\r\n\t}\r\n}\r\n Um das Ganze nun in eurem Template zu verwenden einfach folgendes machen: \r\n{namespace ak=Tx_Testviewhelper_ViewHelpers}\r\n&lt;ak:Headline header=\"{data.header}\" layout=\"{data.header_layout}\" /&gt;\r\n Ich hoffe ich konnte helfen!\nNachtrag\nDank an Philipp Hanebrink, der eine elegante und einfachere Lösung für das Problem parat hatte. Man kann sich den Viewhelper sparen und stattdessen im Fluid-Template einfach Folgendes benutzen: \r\n&lt;f:cObject data=\"{data}\" typoscriptObjectPath=\"lib.stdheader\" /&gt;\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Ich beschäftige mich gerade mit Fluid und Gridelements und der neuen TYPO 6.2 Version und wollte das Überschriften-Feld benutzen, aber inklusive dem Styling. Da ich nichts finden konnte, ob das von sich aus geht, habe ich kurzerhand einen Viewhelper geschrieben.

```

<?php
class Testviewhelper_ViewHelpers_HeadlineViewHelper  extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper{	
	public function initializeArguments(){
		$this->registerArgument( 'header', 'mixed', '');
		$this->registerArgument( 'layout', 'mixed', '');
	}
	
	public function render() {
		$header = $this->arguments['header'];
		$layout = $this->arguments['layout'];
		if(!$layout || $layout == 0) $layout = 1;
		
		$headline = ($layout != 100 && $header != '') ? '<h'.$layout.'>'.$header.'</h'.$layout.'>' : '';
		
		return $headline;
	}
}
```

Um das Ganze nun in eurem Template zu verwenden einfach folgendes machen:

```

{namespace ak=Tx_Testviewhelper_ViewHelpers}
<ak:Headline header="{data.header}" layout="{data.header_layout}" />
```

Ich hoffe ich konnte helfen!

**Nachtrag**

Dank an Philipp Hanebrink, der eine elegante und einfachere Lösung für das Problem parat hatte. Man kann sich den Viewhelper sparen und stattdessen im Fluid-Template einfach Folgendes benutzen:

```

<f:cObject data="{data}" typoscriptObjectPath="lib.stdheader" />
```