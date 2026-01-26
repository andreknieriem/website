---
title: 'TYPO3 Fluid: Viewhelper für Überschriften mit H-Tag in Gridelements'
date: '2014-03-12T16:42:26.000Z'
slug: typo3-fluid-viewhelper-fuer-ueberschriften-mit-h-tag-in-gridelements
tags:
  - '198'
  - '432'
  - '440'
  - '441'
  - '442'
  - '482'
description: "Ich beschäftige mich gerade mit Fluid und Gridelements und der neuen TYPO 6.2 Version und wollte das Überschriften-Feld benutzen, aber inklusive dem Styling. Da ich nichts finden konnte, ob das von sich aus geht, habe ich kurzerhand einen Viewhelper geschrieben. \r\n&lt;?php\r\nclass Testviewhelper_ViewHelpers_HeadlineViewHelper  extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper{\t\r\n\tpublic function initializeArguments(){\r\n\t\t$this-&gt;registerArgument( 'header', 'mixed', '');\r\n\t\t$this-&gt;registerArgument( 'layout', 'mixed', '');\r\n\t}\r\n\t\r\n\tpublic function render() {\r\n\t\t$header = $this-&gt;arguments['header'];\r\n\t\t$layout = $this-&gt;arguments['layout'];\r\n\t\tif(!$layout || $layout == 0) $layout = 1;\r\n\t\t\r\n\t\t$headline = ($layout != 100 &amp;&amp; $header != '') ? '&lt;h'.$layout.'&gt;'.$header.'&lt;/h'.$layout.'&gt;' : '';\r\n\t\t\r\n\t\treturn $headline;\r\n\t}\r\n}\r\n Um das Ganze nun in eurem Template zu verwenden einfach folgendes machen: \r\n{namespace ak=Tx_Testviewhelper_ViewHelpers}\r\n&lt;ak:Headline header=\"{data.header}\" layout=\"{data.header_layout}\" /&gt;\r\n Ich hoffe ich konnte helfen!\nNachtrag\nDank an Philipp Hanebrink, der eine elegante und einfachere Lösung für das Problem parat hatte. Man kann sich den Viewhelper sparen und stattdessen im Fluid-Template einfach Folgendes benutzen: \r\n&lt;f:cObject data=\"{data}\" typoscriptObjectPath=\"lib.stdheader\" /&gt;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3 Fluid: Viewhelper für Überschriften mit H-Tag in Gridelements

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 5 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#headline](/tag.html?tag=440&cHash=c540ee02549564be5f17bb10c4e6cd53)[#überschriften](/tag.html?tag=441&cHash=cab2cbfa6e9674ce47b1c30d425bf1a6)[#viewhelper](/tag.html?tag=442&cHash=9f609bca0d7e725c8a8a78a157ddf269)[#gridelements](/tag.html?tag=482&cHash=92b372979bdd3e2d1a3b33ad9815e3b7)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Mar 2014

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/9e01f452bd84c0daf6ffc4c63a817e05?s=75&d=mm&r=g)
    
    Sebastian
    
    Vielen Dank euch Beiden für die coole und immer noch (TYPO3 7.6.6) funktionierende Lösung.  
      
    Kleiner Hinweis: In deinem Nachtrag im cObject fehlt ein Slash am Ende. Ohne den kriegt man sonst Fehler im Frontend.  
      
    So müsste es korrekt heißen:  
    <f:cObject data=“{data}“ typoscriptObjectPath=“lib.stdheader“/>
    
    10\. May 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Sebastian,  
          
        vielen Dank für deinen Kommentar. Habe es repariert.  
          
        Grüße  
        André
        
        11\. May 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/665040cbd4ff7b51d7831001a8e3ea26?s=75&d=mm&r=g)
    
    Philipp Hanebrink
    
    Ich stand gerade vor der selben Baustelle.  
      
    Man kann entweder den Header automatisch über jedem Gridelement anzeigen lassen:  
    tt\_content.gridelements\_pi1.10 = <lib.stdheader  
      
    oder für mehr Kontrolle über die Position im Fluid-Template:
    
    08\. May 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/665040cbd4ff7b51d7831001a8e3ea26?s=75&d=mm&r=g)
        
        Philipp Hanebrink
        
        f:cObject data="{data}" typoscriptObjectPath="lib.stdheader"
        
        08\. May 2014 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hey Philipp, danke das probiere ich gleich mal aus und ergänze es oben im Text.  
          
        Grüße
        
        08\. May 2014 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.