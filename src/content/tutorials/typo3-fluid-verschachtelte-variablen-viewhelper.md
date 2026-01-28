---
title: 'TYPO3 Fluid: Verschachtelte Variablen Viewhelper'
date: '2015-02-04T16:32:33.000Z'
slug: typo3-fluid-verschachtelte-variablen-viewhelper
tags:
  - typo3
  - viewhelper
  - key
  - value
  - zusammengesetzt
description: "Möchte man in Fluid eine Variable aus 2 zusammenbauen, also mit Hilfe des Keys aus einem Array den Wert bekommen, so ist dies nicht möglich.\nWas man denken könnte wäre so ein Ansatz {image.{key}} oder ähnliches. Für dieses Szenario habe ich hier einen Viewhelper geschrieben, der sogar noch etwas mehr kann. Er kann als Property ein Array bekommen und somit den Key aus mehreren Variablen zusammensetzen lassen, inklusive der Angabe eines Seperatoren.\nHier der Code, der in eure Extension unter Classes/ViewHelpers zu finden sein muss. Den Namen der Klasse solltet ihr natürlich euren Bedürfnissen anpassen. \r\n&lt;?php\r\n\r\nclass Tx_AkTools_ViewHelpers_KeyValueViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper {\r\n\t/**\r\n\t * @param $obj  object Object\r\n\t * @param $prop\tstring Property\r\n\t */\r\n\t \r\n\tpublic function initializeArguments(){\r\n\t\t$this-&gt;registerArgument( 'obj', 'mixed', '');\r\n\t\t$this-&gt;registerArgument( 'prop', 'mixed', '');\r\n\t\t$this-&gt;registerArgument( 'sep', 'mixed', '');\r\n    } \r\n\t \t \t\r\n\tpublic function render() {\r\n\t\t\r\n\t\t$obj = $this-&gt;arguments['obj'];\r\n\t\t$prop = $this-&gt;arguments['prop'];\r\n\t\t$sep = $this-&gt;arguments['sep'];\r\n\t\t\r\n\t\tif(is_array($prop)) $prop = implode($sep,$prop);\r\n\t\t\r\n\t\tif(is_object($obj)) {\r\n\t\t\treturn $obj-&gt;$prop;\r\n\t\t} elseif(is_array($obj)) {\r\n\t\t\tif(array_key_exists($prop, $obj)) {\r\n\t\t\t\treturn $obj[$prop];\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn NULL;\r\n\t}\r\n}\r\n Und so wird der Viewhelper benutzt \r\n{namespace ak=Tx_AkTools_ViewHelpers}\r\n\r\n&lt;!-- Inline-Schreibweise --&gt;\r\n{ak:keyValue(obj: object, prop: key)}\r\n\r\n&lt;!-- Inline-Schreibweise mit zusammengesetzem Key --&gt;\r\n{ak:keyValue(obj: object, prop: {0:key1, 1:key2}}, sep:'-' )}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Möchte man in Fluid eine Variable aus 2 zusammenbauen, also mit Hilfe des Keys aus einem Array den Wert bekommen, so ist dies nicht möglich.

Was man denken könnte wäre so ein Ansatz {image.{key}} oder ähnliches. Für dieses Szenario habe ich hier einen Viewhelper geschrieben, der sogar noch etwas mehr kann. Er kann als Property ein Array bekommen und somit den Key aus mehreren Variablen zusammensetzen lassen, inklusive der Angabe eines Seperatoren.

Hier der Code, der in eure Extension unter Classes/ViewHelpers zu finden sein muss. Den Namen der Klasse solltet ihr natürlich euren Bedürfnissen anpassen.

```php

<?php

class Tx_AkTools_ViewHelpers_KeyValueViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	/**
	 * @param $obj  object Object
	 * @param $prop	string Property
	 */
	 
	public function initializeArguments(){
		$this->registerArgument( 'obj', 'mixed', '');
		$this->registerArgument( 'prop', 'mixed', '');
		$this->registerArgument( 'sep', 'mixed', '');
    } 
	 	 	
	public function render() {
		
		$obj = $this->arguments['obj'];
		$prop = $this->arguments['prop'];
		$sep = $this->arguments['sep'];
		
		if(is_array($prop)) $prop = implode($sep,$prop);
		
		if(is_object($obj)) {
			return $obj->$prop;
		} elseif(is_array($obj)) {
			if(array_key_exists($prop, $obj)) {
				return $obj[$prop];
			}
		}
		return NULL;
	}
}

```

Und so wird der Viewhelper benutzt

```html

{namespace ak=Tx_AkTools_ViewHelpers}

<!-- Inline-Schreibweise -->
{ak:keyValue(obj: object, prop: key)}

<!-- Inline-Schreibweise mit zusammengesetzem Key -->
{ak:keyValue(obj: object, prop: {0:key1, 1:key2}}, sep:'-' )}

```