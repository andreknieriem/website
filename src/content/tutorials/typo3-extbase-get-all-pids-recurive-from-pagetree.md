---
title: 'TYPO3 Extbase: Get all Pids recurive from PageTree'
date: '2016-06-14T16:29:17.000Z'
slug: typo3-extbase-get-all-pids-recurive-from-pagetree
tags:
  - '97'
  - '176'
  - '198'
  - '461'
  - '845'
  - '846'
  - '847'
description: "Möchte man in Extbase alle Pids der Unterseiten einer gegebenen Seite bekommen, beispielsweise alle Unterordner eines Ablage-Ordners mit durchsuchen, so kann man dies mit folgender Funktion tun. \nFunktion \r\nfunction getTreePids($parent = 0, $as_array = true){\r\n    $depth = 999999;\r\n    $queryGenerator = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance( 'TYPO3\\\\CMS\\\\Core\\\\Database\\\\QueryGenerator' );\r\n    $childPids = $queryGenerator-&gt;getTreeList($parent, $depth, 0, 1); //Will be a string like 1,2,3\r\n    if($as_array) {\r\n        $childPids = explode(',',$childPids );\r\n    }\r\n    return $childPids;\r\n}\r\n Benutzung \r\n$childs = getTreePids(5);\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3 Extbase: Get all Pids recurive from PageTree

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#child](/tag.html?tag=176&cHash=cee08fec4054bdace1cb309675352954)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#pids](/tag.html?tag=845&cHash=6e2e6db21c7d6d0ca400716dced4da3f)[#pagetree](/tag.html?tag=846&cHash=8b164de6d0f60a219e9edddcd94a43a6)[#pages](/tag.html?tag=847&cHash=cc5ae7cfa2e2e617a71ad35d258e52c1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Jun 2016

Möchte man in Extbase alle Pids der Unterseiten einer gegebenen Seite bekommen, beispielsweise alle Unterordner eines Ablage-Ordners mit durchsuchen, so kann man dies mit folgender Funktion tun.

**Funktion**

```

function getTreePids($parent = 0, $as_array = true){
    $depth = 999999;
    $queryGenerator = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance( 'TYPO3\\CMS\\Core\\Database\\QueryGenerator' );
    $childPids = $queryGenerator->getTreeList($parent, $depth, 0, 1); //Will be a string like 1,2,3
    if($as_array) {
        $childPids = explode(',',$childPids );
    }
    return $childPids;
}
```

**Benutzung**

```

$childs = getTreePids(5);
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a692b74546235e19e9528c5d2e6a486e?s=75&d=mm&r=g)
    
    Michael
    
    Kann man auch mit dem Page-Repository lösen ;)
    
    12\. Oct 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Michael, danke für Antwort. Habe ich mitlerweile auch schon herausgefunden :)
        
        12\. Oct 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/15ea510d7d09613dec1ea19d1cb83e65?s=75&d=mm&r=g)
            
            Björn
            
            Habt ihr zufällig auch herausgefunden, wie das im Backend-Kontext funktioniert, wo man das Page Model nicht auf die pages-Tabelle mappen kann?
            
            17\. Feb 2018 [Antworten](#)
            

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.