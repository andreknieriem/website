---
title: 'TYPO3: Progress-Bar bei Scheduler/Planer Task anzeigen'
date: '2016-10-17T22:00:00.000Z'
slug: typo3-progress-bar-bei-schedulerplaner-task-anzeigen
tags: []
description: "Die nützlichen Scheduler/Planer Tasks in TYPO3 bieten zu der normalen execute Methode noch eine weitere Methode, mit der man, wie man es vielleicht von der Solr-Extension kennt, eine Progress-Bar anzeigen lassen kann. Dafür muss man nicht viel mehr machen, als eine Funktion getProgress() hinzuzufügen und diese dann den derzeitigen Prozent-Wert als Float/Int zurückzugeben. Zudem muss das&nbsp;ProgressProviderInterface implementiert werden.\r\nHier ein Beispiel: &lt;?php\r\nclass MyTask extends TYPO3\\CMS\\Scheduler\\Task\\AbstractTask \r\nimplements TYPO3\\CMS\\Scheduler\\ProgressProviderInterface {\r\n\r\n  public function execute(){\r\n    // do something\r\n    return true;\r\n  }\r\n  \r\n  // hier kann man jetzt den Stand berechnen\r\n  public function getProgress(){\r\n    return rand(0,100);\r\n  }\r\n\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Die nützlichen Scheduler/Planer Tasks in TYPO3 bieten zu der normalen `execute` Methode noch eine weitere Methode, mit der man, wie man es vielleicht von der Solr-Extension kennt, eine Progress-Bar anzeigen lassen kann. Dafür muss man nicht viel mehr machen, als eine Funktion `getProgress()` hinzuzufügen und diese dann den derzeitigen Prozent-Wert als Float/Int zurückzugeben. Zudem muss das `ProgressProviderInterface` implementiert werden.

**Hier ein Beispiel:**

```php
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