---
title: 'TYPO3: Alle Aftersave Hooks im Überblick (6.2-7.6lts)'
date: '2016-03-14T17:18:55.000Z'
slug: typo3-alle-aftersave-hooks-im-ueberblick-62-76lts
tags:
  - '198'
  - '772'
  - '806'
  - '807'
  - '819'
  - '820'
description: "Hier mal eine Übersicht aller Aftersave-Hooks von TYPO3:\nZuerst müsst ihr die Hook-Klasse für processDatamapClass und processCmdmapClass in der ext_localconf.php eurer Extension hinzufügen:\next_localconf.php \r\n$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass']['extkey'] = 'Vendor\\\\Extension\\\\Hook\\\\TCEmainHook';\r\n$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processCmdmapClass']['extkey'] = 'Vendor\\\\Extension\\\\Hook\\\\TCEmainHook';\r\n /Classes/Hook/TCEmainHook.php \r\n&lt;?php\r\nnamespace Vendor\\Extension\\Hook;\r\n\r\nclass TCEmainHook {\r\n    public function processCmdmap_preProcess($command, $table, $id, $value, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processCmdmap_postProcess($command, $table, $id, $value, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_preProcessFieldArray(array &amp;$fieldArray, $table, $id, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processCmdmap_deleteAction($table, $id, $recordToDelete, $recordWasDeleted=NULL, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_afterAllOperations(\\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_postProcessFieldArray($status, $table, $id, array &amp;$fieldArray, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_afterDatabaseOperations($status, $table, $id, array $fieldArray, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n}\r\n "
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

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#6.2](/tag.html?tag=772&cHash=d68bf05758d88e708a8ca264cc7cf75f)[#hook](/tag.html?tag=806&cHash=9c325cbfa8a9006c7d75178a02374e9f)[#7.6](/tag.html?tag=807&cHash=b4278a85562c05b90477af3b415c5f30)[#aftersave](/tag.html?tag=819&cHash=1f8abfec366ddc7ad615f28feeda1abe)[#lts](/tag.html?tag=820&cHash=e03bf3617cf29c4c9c4f818b6c086b35)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Mar 2016

Hier mal eine Übersicht aller Aftersave-Hooks von TYPO3:

Zuerst müsst ihr die Hook-Klasse für **processDatamapClass** und **processCmdmapClass** in der **ext\_localconf.php** eurer Extension hinzufügen:

**ext\_localconf.php**

```

$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass']['extkey'] = 'Vendor\\Extension\\Hook\\TCEmainHook';
$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processCmdmapClass']['extkey'] = 'Vendor\\Extension\\Hook\\TCEmainHook';
```

**/Classes/Hook/TCEmainHook.php**

```

<?php
namespace Vendor\Extension\Hook;

class TCEmainHook {
    public function processCmdmap_preProcess($command, $table, $id, $value, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processCmdmap_postProcess($command, $table, $id, $value, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_preProcessFieldArray(array &$fieldArray, $table, $id, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processCmdmap_deleteAction($table, $id, $recordToDelete, $recordWasDeleted=NULL, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_afterAllOperations(\TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_postProcessFieldArray($status, $table, $id, array &$fieldArray, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_afterDatabaseOperations($status, $table, $id, array $fieldArray, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/15d866a5ad352b89972a4f5d3a8cdf90?s=75&d=mm&r=g)
    
    hauke
    
    Danke für die Übersicht. Hier noch ein Stückcode was mich auch wieder viel zu viel Zeit gekostet hat. Wenn man einen Datensatz neu anlegt, bekommt es eine temporäre ID wie z.B. "NEW58106331753043.15119885", wenn man aber die ID haben will unter der der Datensatz später ist System hat geht das mit folgender Hook:  
    function processDatamap\_afterDatabaseOperations($status, $table, $id, array $fieldArray, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &$pObj) {  
    echo $pObj->substNEWwithIDs\[$id\] . "\\n";  
    }
    
    26\. Oct 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/601cb30664dae5337ac7924773ed8d43?s=75&d=mm&r=g)
        
        Michael Bakonyi
        
        Ich glaube, da hat sich ein Fehlerteufel eingeschlichen: $fieldArray sollte eigentlich &$fieldArray heißen – also eine Referenz sein, z.B. so:  
          
          
        public function processDatamap\_postProcessFieldArray($status, $table, $id, array &$fieldArray, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &$pObj) {}  
          
          
        Sonst tut sich nicht viel. wenn man's ändern möchte ;)  
          
        Liebe Grüße,  
        Micha
        
        05\. Dec 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            [Andre Rinas](https://www.andrerinas.de/)
            
            Hallo Michael,  
            danke für den Hinweis, da hab ich mich tatsächlich vertippt ;) Ich habe es angepasst
            
            06\. Dec 2016 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/2620f88efc81cd732c7fc61f078ab00a?s=75&d=mm&r=g)
        
        Markus
        
        DANKE ...... Du hast mir grade den A.... gerettet.
        
        12\. Feb 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8dd3ab12e41bdfa1e594271187058213?s=75&d=mm&r=g)
    
    [Marco Pfeiffer](hauptsache.net)
    
    Danke für die Übersicht. Diese kleinen Beispiele helfen mehr als die gefühlten 1000 Wörter der Typo3 Dokumentation.
    
    17\. Oct 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](http://www.andrerinas.de/)
        
        Hey Marco, freut mich, dass ich dir helfen konnte. Ja ich finde es auch schade, dass die Doku mangelhaft ist. Entweder nicht aktuell, nicht lesbar oder nicht vorhanden. Deswegen sammle ich solche Dinge hier :)
        
        17\. Oct 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c04bd77ac78f4c2bb8b6363f5989d70e?s=75&d=mm&r=g)
    
    Janosch
    
    Danke für die gute Info. Schade, dass es bei der Association sowas nicht dokumentiert gibt. Aber egal, bei Version 8 wird das alles besser :^)
    
    17\. Mar 2016 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.