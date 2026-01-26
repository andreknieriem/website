---
title: 'TYPO3: in_array ViewHelper'
date: '2017-05-09T22:00:00.000Z'
slug: typo3-in-array-viewhelper
tags: []
description: "Da in Fluid Standard-ViewHelper leider der in_array ViewHelper fehlt, habe ich mir diesen schnell selbst geschrieben. Hier ist der ViewHelper samt Beispiel zur Benutzung. &lt;?php\r\nnamespace Vendor\\Ext\\ViewHelpers;\r\n\r\nclass InArrayViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractConditionViewHelper {\r\n\r\n  public function initializeArguments() {\r\n    parent::initializeArguments();\r\n    $this-&gt;registerArgument('haystack', 'mixed', 'View helper haystack ', TRUE);\r\n    $this-&gt;registerArgument('needle', 'string', 'View helper needle', TRUE);\r\n  }\r\n\r\n  // php in_array viewhelper\r\n  public function render() {  \r\n    \r\n    $needle = $this-&gt;arguments['needle'];\r\n    $haystack = $this-&gt;arguments['haystack'];\r\n      \r\n\r\n    if(!is_array($haystack)) { \r\n      return $this-&gt;renderElseChild();\r\n    }\r\n\r\n    if(in_array($needle, $haystack)) {\r\n      return $this-&gt;renderThenChild();\r\n    } else {\r\n      return $this-&gt;renderElseChild();\r\n    }   \r\n  }\r\n} Benutzung geht dann beispielsweise so:\r\n{namespace test=Vendor\\Ext\\ViewHelpers}\r\n&lt;test:inArray haystack=\"{week}\" needle=\"mittwoch\"&gt;\r\n  &lt;f:then&gt;\r\n    in array\r\n  &lt;/f:then&gt;\r\n  &lt;f:else&gt;\r\n    not in array\r\n  &lt;/f:else&gt;\r\n&lt;/test:inArray&gt;\r\n\r\n\r\n// inline\r\n{test:inArray(haystack:'{week}',needle:'mittwoch',then:'in array',else:'')}"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: in\_array ViewHelper

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. May 2017

Da in Fluid Standard-ViewHelper leider der in\_array ViewHelper fehlt, habe ich mir diesen schnell selbst geschrieben. Hier ist der ViewHelper samt Beispiel zur Benutzung.

```
<?php
namespace Vendor\Ext\ViewHelpers;

class InArrayViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {

  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('haystack', 'mixed', 'View helper haystack ', TRUE);
    $this->registerArgument('needle', 'string', 'View helper needle', TRUE);
  }

  // php in_array viewhelper
  public function render() {  
    
    $needle = $this->arguments['needle'];
    $haystack = $this->arguments['haystack'];
      

    if(!is_array($haystack)) { 
      return $this->renderElseChild();
    }

    if(in_array($needle, $haystack)) {
      return $this->renderThenChild();
    } else {
      return $this->renderElseChild();
    }   
  }
}
```

**Benutzung geht dann beispielsweise so:**  

```
{namespace test=Vendor\Ext\ViewHelpers}
<test:inArray haystack="{week}" needle="mittwoch">
  <f:then>
    in array
  </f:then>
  <f:else>
    not in array
  </f:else>
</test:inArray>


// inline
{test:inArray(haystack:'{week}',needle:'mittwoch',then:'in array',else:'')}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/af6ef9587929ea02f89259d35a58d92f?s=75&d=mm&r=g)
    
    Ines
    
    Danke! Die Version für 10.4 funktioniert auch mit TYPO3 11.5.
    
    10\. Oct 2022 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/51e5902662d6355effc03dafd9d14510?s=75&d=mm&r=g)
    
    Smair Testing
    
    Thanks! Here is an updated version for Typo3 10.4  
      
      
      
      
    namespace MyVendor\\MyExtension\\ViewHelpers;  
      
    use TYPO3Fluid\\Fluid\\Core\\ViewHelper\\AbstractConditionViewHelper;  
      
      
    class InArrayViewHelper extends AbstractConditionViewHelper  
    {  
    public function initializeArguments()  
    {  
    parent::initializeArguments();  
    $this->registerArgument('haystack', 'mixed', 'View helper haystack. Needs to be an array of strings', true);  
    $this->registerArgument('needle', 'string', 'View helper needle. Needs to be a string!', true);  
    }  
      
    /\*\*  
    \* @param array $arguments  
    \* @return bool  
    \*/  
    protected static function evaluateCondition($arguments = null)  
    {  
    $needle = (string)$arguments\['needle'\];  
    $haystack = $arguments\['haystack'\];  
      
    if (!is\_array($haystack)) {  
    return false;  
    }  
      
    if (in\_array($needle, $haystack)) {  
    return true;  
    } else {  
    return false;  
    }  
    }  
    }
    
    07\. Jun 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4589218dc43f94cbe2e8f4a943b37b84?s=75&d=mm&r=g)
    
    Nodens
    
    Vielen Dank funktioniert auch in 9.5.x auf Anhieb. Hat mit Zeit gespart, Danke!
    
    04\. Feb 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5def655e67678f2be24bc4a7f491f9fb?s=75&d=mm&r=g)
    
    Michael
    
    Super, vielen Dank! Inline muss es allerdings heißen:  
    {test:inArray(haystack:'{week}',needle:'mittwoch',then:'in array',else:'')}
    
    02\. Jan 2018 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.