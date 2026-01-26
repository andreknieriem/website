---
title: 'TYPO3 8LTS: ViewHelper Default Escaping ausschalten'
date: '2017-05-24T22:00:00.000Z'
slug: typo3-8lts-viewhelper-default-escaping-ausschalten
tags:
  - '857'
  - '988'
  - '442'
  - '989'
  - '85'
  - '748'
  - '990'
description: "Seit TYPO3 8LTS werden ViewHelper die \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper extenden standardmäßig mit&nbsp;htmlspecialchars escaped. Dadurch bekommt man keine HTML Ausgabe hin. Das Ganze lässt sich aber relativ schnell und schmerzfrei ausschalten. Dafür könnte man von \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractTagBasedViewHelper extenden oder einfach&nbsp;protected $escapeOutput = false; in den ViewHelper schreiben. \r\nSiehe folgendes Beispiel: &lt;?php\r\nnamespace Vendor\\ArTest\\ViewHelpers;\r\n\r\nclass YourViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper{\r\n\r\n  /**\r\n    * As this ViewHelper renders HTML, the output must not be escaped.\r\n    *\r\n    * @var bool\r\n    */\r\n  protected $escapeOutput = false; Das wars auch schon."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3 8LTS: ViewHelper Default Escaping ausschalten

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

### Tags

[#html](/tag.html?tag=85&cHash=91a7ea3a6587e1d4fa3e5c908a161193)[#viewhelper](/tag.html?tag=442&cHash=9f609bca0d7e725c8a8a78a157ddf269)[#specialchars](/tag.html?tag=748&cHash=70f938e763d22456d1df1dc57b487e23)[#typo3 8](/tag.html?tag=857&cHash=2d51165b97ccc035ed66f8575c91c6f2)[#8lts](/tag.html?tag=988&cHash=161e25d79ad8aeb5ea9faa8ef99ed996)[#escape](/tag.html?tag=989&cHash=1af2d2d264b857cc9cdb818a75a3925c)[#output](/tag.html?tag=990&cHash=accd45f75369e39db09627522add4c4f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

25\. May 2017

Seit TYPO3 8LTS werden ViewHelper die \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper extenden standardmäßig mit `htmlspecialchars` escaped. Dadurch bekommt man keine HTML Ausgabe hin. Das Ganze lässt sich aber relativ schnell und schmerzfrei ausschalten. Dafür könnte man von `\TYPO3\CMS\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper` extenden oder einfach `protected $escapeOutput = false;` in den ViewHelper schreiben.

Siehe folgendes Beispiel:

```
<?php
namespace Vendor\ArTest\ViewHelpers;

class YourViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper{

  /**
    * As this ViewHelper renders HTML, the output must not be escaped.
    *
    * @var bool
    */
  protected $escapeOutput = false;
```

Das wars auch schon.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/6489c8d8cf3c10805378a878d3e2898a?s=75&d=mm&r=g)
    
    [Stefan](https://maischner.de)
    
    Muss man auch erstmal drauf kommen. Dankeschön!
    
    22\. Mar 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/04fa6f2437fba84293d96374cbce69b2?s=75&d=mm&r=g)
    
    Knöterich
    
    Ich nutze die Extension \`find\` von der Uni Göttingen. Dabei wird dynamisach JS code generiert. Die Values der Parameter werden unnötigerweise escaped, was dann auf JS -Seite knallt, weil aus "String" "String" wird. Nun habe ich diese obige Zeile in die Viewhelper- Class eingefügt, was aber leider zu „Oops, an error occurred! Code: 201803101349045298f3c3“ führt (nachdem ich im Installtool den PHP-Cache geleert habe). Was kann ich noch tun?
    
    10\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/04fa6f2437fba84293d96374cbce69b2?s=75&d=mm&r=g)
        
        [Knöterich](http://sub.uni-hamburg.de)
        
        In dem Fall geht das mit dem Flag nicht, weil \`s:format.json\` genutzt wird. Ich habe mir geholfen, indem ich die Stelle mit <f:format.htmlentitiesDecode> umklammert habe.
        
        20\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/16e298df07695654a55c413f886db4b7?s=75&d=mm&r=g)
    
    franz
    
    Danke! Ne Menge Sucherei erspart 8)
    
    01\. Mar 2018 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.