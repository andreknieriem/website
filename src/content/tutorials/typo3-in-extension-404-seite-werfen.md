---
title: 'TYPO3: In Extension 404 Seite werfen'
date: '2017-03-14T23:00:00.000Z'
slug: typo3-in-extension-404-seite-werfen
tags:
  - '198'
  - '967'
  - '479'
  - '10'
  - '461'
  - '804'
description: "Nach langer Suche habe ich eine sehr simple Möglichkeit gefunden, wie man aus Extensions einfach 404 Seiten werfen kann. Das will ich euch natürlich nicht vorenthalten. \r\npublic function detailAction(){\r\n  if(!isset($_GET['item'])) {\r\n    // 404 Fehler werfen\r\n    $GLOBALS['TSFE']-&gt;pageNotFoundAndExit('');\r\n  }\r\n} Das ist auch schon alles. Man kann direkt aus $Globals['TSFE'] die 404 Seite aufrufen."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#tsfe](/tag.html?tag=804&cHash=f9e7ef3ba87fc832f6d602e7afe49e9d)[#404](/tag.html?tag=967&cHash=bf16d865bfa3370e7087ee141ef16b7e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Mar 2017

Nach langer Suche habe ich eine sehr simple Möglichkeit gefunden, wie man aus Extensions einfach 404 Seiten werfen kann. Das will ich euch natürlich nicht vorenthalten.

```

public function detailAction(){
  if(!isset($_GET['item'])) {
    // 404 Fehler werfen
    $GLOBALS['TSFE']->pageNotFoundAndExit('');
  }
}
```

Das ist auch schon alles. Man kann direkt aus $Globals\['TSFE'\] die 404 Seite aufrufen.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/e5f2ec9be910a3773cbd23e13a538f51?s=75&d=mm&r=g)
    
    [Jan](www.greth.me)
    
    Danke für diesen Tipp!  
    Lese sehr gerne Deine Tutorials!
    
    22\. Mar 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich :)
        
        22\. Mar 2017 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.