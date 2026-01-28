---
title: 'TYPO3: Userfunc als Displaycond im TCA benutzen'
date: '2018-02-09T14:57:00.000Z'
slug: typo3-userfunc-als-displaycond-im-tca-benutzen
tags:
  - typo3
  - tca
  - displayCond
  - condition
  - userfunc
  - function
description: "Gerade habe ich für eine Extension eine tolles neues Feature von TYPO3 ab der Version 7LTS gefunden. Man kann in den display conditions nun auch User-Funktionen angeben, die true oder false zurückliefern, um komplexere Anzeigen für Felder im Backend zu machen. So kann man beispielsweise SQL Queries machen und anhand dessen kann das Feld entweder ein- oder ausgeblendet werden.\r\nBeispiel TCA 'tx_myext_field' =&gt; [\r\n    ...\r\n    'displayCond' =&gt; 'USER:AR\\\\MyExt\\\\DisplayCond\\\\Cond-&gt;useField',\r\n    ... DisplayCond Klasse my_ext/Classes/DisplayCond/Cond.php &lt;?php\r\nnamespace AR\\MyExt\\DisplayCond;\r\n\r\nclass Cond{\r\n\r\n  public function useField(){\r\n    if(true){\r\n        return true;\r\n    }\r\n     return false;\r\n  }\r\n\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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