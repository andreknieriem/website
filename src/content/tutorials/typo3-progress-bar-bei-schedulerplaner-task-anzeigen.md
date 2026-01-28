---
title: 'TYPO3: Progress-Bar bei Scheduler/Planer Task anzeigen'
date: '2016-10-17T22:00:00.000Z'
slug: typo3-progress-bar-bei-schedulerplaner-task-anzeigen
tags: []
description: "Die nützlichen Scheduler/Planer Tasks in TYPO3 bieten zu der normalen execute Methode noch eine weitere Methode, mit der man, wie man es vielleicht von der Solr-Extension kennt, eine Progress-Bar anzeigen lassen kann. Dafür muss man nicht viel mehr machen, als eine Funktion getProgress() hinzuzufügen und diese dann den derzeitigen Prozent-Wert als Float/Int zurückzugeben. Zudem muss das&nbsp;ProgressProviderInterface implementiert werden.\r\nHier ein Beispiel: &lt;?php\r\nclass MyTask extends TYPO3\\CMS\\Scheduler\\Task\\AbstractTask \r\nimplements TYPO3\\CMS\\Scheduler\\ProgressProviderInterface {\r\n\r\n  public function execute(){\r\n    // do something\r\n    return true;\r\n  }\r\n  \r\n  // hier kann man jetzt den Stand berechnen\r\n  public function getProgress(){\r\n    return rand(0,100);\r\n  }\r\n\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

18\. Oct 2016

Die nützlichen Scheduler/Planer Tasks in TYPO3 bieten zu der normalen `execute` Methode noch eine weitere Methode, mit der man, wie man es vielleicht von der Solr-Extension kennt, eine Progress-Bar anzeigen lassen kann. Dafür muss man nicht viel mehr machen, als eine Funktion `getProgress()` hinzuzufügen und diese dann den derzeitigen Prozent-Wert als Float/Int zurückzugeben. Zudem muss das `ProgressProviderInterface` implementiert werden.

**Hier ein Beispiel:**

```
<?php
class MyTask extends TYPO3\CMS\Scheduler\Task\AbstractTask 
implements TYPO3\CMS\Scheduler\ProgressProviderInterface {

  public function execute(){
    // do something
    return true;
  }
  
  // hier kann man jetzt den Stand berechnen
  public function getProgress(){
    return rand(0,100);
  }

}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/850a9b13b27ed08c880991245c4f3b22?s=75&d=mm&r=g)
    
    [Jan](www.greth.me)
    
    Hey, ab welcher TYPO3 CMS Version klappt das denn?
    
    01\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jan, ich glaube das geht schon mind. ab Version 6.2, wenn nicht früher. Der Code oben benutzt allerdings Namespaces, sodass es sein kann, das er in 6.2 noch ein paar Änderungen in den Klassenbezeichnungen haben könntest.
        
        01\. Feb 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4a6499dbc5ef3f9a88b3cb003f7a7634?s=75&d=mm&r=g)
    
    Thomas
    
    Blöde Frage, wo schreib ich das in TYPO3 rein?  
      
    Gruß Thomas
    
    01\. Dec 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de/)
        
        Hallo Thomas, was meinst du genau? Wie man einen Schedular Task erstellt? Wenn du das meinst, dann sag bescheid, dann beschreibe ich dir das kurz.  
          
        Grüße  
        André
        
        09\. Dec 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.