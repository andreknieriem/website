---
title: 'TYPO3: Userfunc als Displaycond im TCA benutzen'
date: '2018-02-09T14:57:00.000Z'
slug: typo3-userfunc-als-displaycond-im-tca-benutzen
tags:
  - '198'
  - '488'
  - '524'
  - '1004'
  - '839'
  - '12'
description: "Gerade habe ich für eine Extension eine tolles neues Feature von TYPO3 ab der Version 7LTS gefunden. Man kann in den display conditions nun auch User-Funktionen angeben, die true oder false zurückliefern, um komplexere Anzeigen für Felder im Backend zu machen. So kann man beispielsweise SQL Queries machen und anhand dessen kann das Feld entweder ein- oder ausgeblendet werden.\r\nBeispiel TCA 'tx_myext_field' =&gt; [\r\n    ...\r\n    'displayCond' =&gt; 'USER:AR\\\\MyExt\\\\DisplayCond\\\\Cond-&gt;useField',\r\n    ... DisplayCond Klasse my_ext/Classes/DisplayCond/Cond.php &lt;?php\r\nnamespace AR\\MyExt\\DisplayCond;\r\n\r\nclass Cond{\r\n\r\n  public function useField(){\r\n    if(true){\r\n        return true;\r\n    }\r\n     return false;\r\n  }\r\n\r\n}\r\n"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Userfunc als Displaycond im TCA benutzen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#function](/tag.html?tag=12&cHash=c2e2c35e28fadd29f90cdd9ba3ac9efa)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#tca](/tag.html?tag=488&cHash=1d45fe35b0f126afdcd6305faee96aac)[#displayCond](/tag.html?tag=524&cHash=88ea80384e3c9bf5424af4bc5081110a)[#userfunc](/tag.html?tag=839&cHash=e3d8be20fffd08b857f2ee2c01d9a76a)[#condition](/tag.html?tag=1004&cHash=069922a0831c20081c04d0584404e607)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Feb 2018

Gerade habe ich für eine Extension eine tolles neues Feature von TYPO3 ab der Version 7LTS gefunden. Man kann in den display conditions nun auch User-Funktionen angeben, die true oder false zurückliefern, um komplexere Anzeigen für Felder im Backend zu machen. So kann man beispielsweise SQL Queries machen und anhand dessen kann das Feld entweder ein- oder ausgeblendet werden.

**Beispiel TCA**

```
'tx_myext_field' => [
    ...
    'displayCond' => 'USER:AR\\MyExt\\DisplayCond\\Cond->useField',
    ...
```

**DisplayCond Klasse my\_ext/Classes/DisplayCond/Cond.php**

```
<?php
namespace AR\MyExt\DisplayCond;

class Cond{

  public function useField(){
    if(true){
        return true;
    }
     return false;
  }

}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.