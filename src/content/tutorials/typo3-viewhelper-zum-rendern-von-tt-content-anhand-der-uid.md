---
title: 'TYPO3: ViewHelper zum rendern von tt_content anhand der Uid'
date: '2017-05-27T22:00:00.000Z'
slug: typo3-viewhelper-zum-rendern-von-tt-content-anhand-der-uid
tags:
  - '198'
  - '991'
  - '992'
  - '990'
  - '442'
  - '797'
description: "Um in Fluid tt_content Elemente anhand ihrer UID fertig gerendert auszugeben, benötigt man einen kleinen ViewHelper. Dieser ruft das RecordsContentObject auf und rendert dieses anhand einer Konfiguration heraus. In diesem Beispiel funktioniert das Ganze mit tt_content und der Uid eines tt_content Datensatzes.\r\nDer ViewHelper Code: &lt;?php\r\nnamespace Vendor\\Artest\\ViewHelpers;\r\n/**\r\n * ViewHelper zur Rückgabe eines geparsten tt_content Elementes\r\n */\r\n\r\nclass ContentViewHelper extends \\TYPO3\\CMS\\Fluid\\Core\\ViewHelper\\AbstractViewHelper {\r\n  // output html since TYPO3 8LTS\r\n  protected $escapeOutput = false;\r\n\r\n  /**\r\n   * Parse content element\r\n   *\r\n   * @param  int     UID des Content Element\r\n   * @return   string  Geparstes Content Element\r\n   */\r\n  public function render($uid) {\r\n    $conf = array( // config\r\n      'tables' =&gt; 'tt_content',\r\n      'source' =&gt; $uid,\r\n      'dontCheckPid' =&gt; 1\r\n    );\r\n    return $this-&gt;objectManager-&gt;get('TYPO3\\CMS\\Frontend\\ContentObject\\RecordsContentObject')-&gt;render($conf);\r\n  }\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 7 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#viewhelper](/tag.html?tag=442&cHash=9f609bca0d7e725c8a8a78a157ddf269)[#render](/tag.html?tag=797&cHash=bf8e822ef53a885b56982efc77ff63f9)[#output](/tag.html?tag=990&cHash=accd45f75369e39db09627522add4c4f)[\# 8lts](/tag.html?tag=991&cHash=519cc05962e9c7480bf80a7532e565d9)[\# tt\_content](/tag.html?tag=992&cHash=f7580fd03f17116f479704a8e5266e53)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. May 2017

Um in Fluid tt\_content Elemente anhand ihrer UID fertig gerendert auszugeben, benötigt man einen kleinen ViewHelper. Dieser ruft das RecordsContentObject auf und rendert dieses anhand einer Konfiguration heraus. In diesem Beispiel funktioniert das Ganze mit tt\_content und der Uid eines tt\_content Datensatzes.

**Der ViewHelper Code:**

```
<?php
namespace Vendor\Artest\ViewHelpers;
/**
 * ViewHelper zur Rückgabe eines geparsten tt_content Elementes
 */

class ContentViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
  // output html since TYPO3 8LTS
  protected $escapeOutput = false;

  /**
   * Parse content element
   *
   * @param  int     UID des Content Element
   * @return   string  Geparstes Content Element
   */
  public function render($uid) {
    $conf = array( // config
      'tables' => 'tt_content',
      'source' => $uid,
      'dontCheckPid' => 1
    );
    return $this->objectManager->get('TYPO3\CMS\Frontend\ContentObject\RecordsContentObject')->render($conf);
  }
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/38df478eba049469447341217e456a6e?s=75&d=mm&r=g)
    
    [frank](hasenbalg.org)
    
    Danke! deine Seite hat mir schon oft geholfen. Auch der praktische ContentViewHelper hier ist mir grade sehr nuetzlich!
    
    14\. Nov 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich sehr!
        
        14\. Nov 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1d1382344586ecff844dacff698c2efb?s=75&d=mm&r=g)
    
    Marc
    
    Schade, tut in TYPO3 9.5 nicht mehr, führt jetzt zu einem  
    "Maximum function nesting level of '400' reached, aborting!"
    
    22\. Feb 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/1196248517f64de92b86444b832510fd?s=75&d=mm&r=g)
    
    macpat
    
    Wie sieht es mit Sprachen aus. Wenn ich das verwende bekomme ich wohl die Standardsprache ausgegeben aber die tt\_content in der Übersetzung nicht. Hier wird die l10\_parent anstatt der Uid im Fluid ausgegeben  
      
    <f:for each="{contents}" as="content">  
    <f:if condition="{content.casestudy}=={caseStudy.uid} || {content.casestudy}=={l10parent}">  
    <f:format.raw><m:Content uid="{content.uid}" /></f:format.raw>  
    </f:if>  
    </f:for>
    
    15\. Mar 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e05c8a94b0d36346c8dc39c6b1d55726?s=75&d=mm&r=g)
    
    Hans
    
    Soweit, so gut ... aber wie kann ich einzelne CE eigene Templates zuweisen?  
    Irgendwas wie das hier ...  
    'templateName' => 'Contents/Boxenteaser',
    
    24\. Jun 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Hans, ich verstehe nicht genau was du meinst, erreichen willst?  
          
        Grüße André
        
        25\. Jun 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/e05c8a94b0d36346c8dc39c6b1d55726?s=75&d=mm&r=g)
            
            Hans
            
            render() rendert je nach CE die Typo3 Fluid Templates. Jetzt möchte ich eine Box erstellen und dafür ein eigenes Template verwenden, da z.B. nicht alle Inhalte von textmedia Template übernommen werden sollen.  
            Also etwa so wie in Typoscript:  
            xmLib.xmBoxenteaser = COA  
            xmLib.xmBoxenteaser.10 = CONTENT  
            xmLib.xmBoxenteaser.10.renderObj.textmedia.templateName = xmBoxenteaser  
            Viele Grüße, Hans
            
            26\. Jun 2017 [Antworten](#)
            

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.