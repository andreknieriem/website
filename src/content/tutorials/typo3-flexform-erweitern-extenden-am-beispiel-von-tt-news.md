---
title: 'TYPO3: Flexform erweitern (extenden) am Beispiel von tt_news'
date: '2014-02-11T20:38:46.000Z'
slug: typo3-flexform-erweitern-extenden-am-beispiel-von-tt-news
tags:
  - '198'
  - '208'
  - '393'
  - '409'
  - '410'
description: "Für ein Projekt musste ich letztens das Ausgabe-Plugin von tt_news erweitern. Da dies eine Flexform ist, lässt sich dieses nicht so einfach über TCA oder ext_tables bewerkstelligen. Nach ein wenig Recherche und rumprobieren habe ich hier die perfekte Lösung gefunden. Man erstellt eine Flexform für seine neuen Felder und dann wird diese in die zu bearbeitende reingemerged. Das Ganze geht so:\next_tables.php\nErweitert die ext_tables.php um folgende Zeilen. Die Datei included eine Klasse der 2 benötigten Dateien um die Flexform mergen zu können. Die Klassen könnt ihr benennen, wie ihr wollt. meine Extension nenne ich mal ak_test. \r\nrequire_once(t3lib_extMgm::extPath($_EXTKEY).'/classes/class.tx_ak_test_ext_ttnews_flexform.php');\r\n$old_flexform = $TCA['tt_content']['columns']['pi_flexform']['config']['ds']['9,list'];\r\n$new_flexform = tx_ak_test_ext_ttnews_flexform::merge($old_flexform, 'EXT:' . $_EXTKEY . '/tt_news_flexform_ext.xml');\r\nt3lib_extMgm::addPiFlexFormValue(9, $new_flexform);\r\n tx_ak_test_ext_ttnews_flexform.php \r\n&lt;?php\r\n\r\n/*Merge 2 Flexform-Files*/\r\n\r\nrequire_once(t3lib_extMgm::extPath('ak_test').'classes/class.tx_ak_test_fexform_merge.php');\r\n\r\nclass ak_test_ext_ttnews_flexform {\r\n  \r\nstatic function merge($flexform_ttnews, $flexform_add) {\r\n  $flexform = $flexform_ttnews;\r\n  // get LastIndex\r\n  $lastIndex = 0;\r\n  if (substr($flexform, 0, 5) == 'FILE:')\r\n    $flexform = substr($flexform, 5);\r\n  if (substr($flexform, 0, 4) == 'EXT:')\r\n    $flexform = file_get_contents(t3lib_div::getFileAbsFileName($flexform));\r\n  $flexform = t3lib_div::xml2array($flexform);\r\n    \r\n  $items = $flexform['sheets']['sDEF']['ROOT']['el']['listOrderBy']['TCEforms']['config']['items'];\r\n  if (is_array($items) &amp;&amp; !empty($items)) {\r\n    foreach ($items as $index =&gt; $item) {\r\n      if ($index &gt; $lastIndex)\r\n        $lastIndex = $index; \r\n    }\r\n  }\r\n  $lastIndex++;\r\n    \r\n  // replace index in new flexform\r\n  if (substr($flexform_add, 0, 5) == 'FILE:')\r\n  $flexform_add = substr($flexform_add, 5);\r\n  if (substr($flexform_add, 0, 4) == 'EXT:')\r\n    $flexform_add = file_get_contents(t3lib_div::getFileAbsFileName($flexform_add));\r\n  \r\n  $flexform_add = str_replace('###LASTINDEX###' , $lastIndex, $flexform_add);\r\n    \r\n  // merge \r\n  $new_flexform = tx_ak_test_fexform_merge::merge($flexform_ttnews, $flexform_add);\r\n    \r\n  return $new_flexform;\r\n  }\r\n}\r\n class.tx_ak_test_fexform_merge.php \r\n&lt;?php\r\nclass tx_ak_test_flexform_merge {\r\n  \r\n  static function merge ($file1, $file2) {\r\n    $base1 = $file1;\r\n    \r\n    // remove FILE:\r\n    if (substr($file1, 0, 5) == 'FILE:')\r\n      $file1 = substr($file1, 5);\r\n    if (substr($file2, 0, 5) == 'FILE:')\r\n      $file2 = substr($file2, 5);\r\n    \r\n    // extract xml to file if EXT:\r\n    if (substr($file1, 0, 4) == 'EXT:') \r\n      $file1 = file_get_contents(t3lib_div::getFileAbsFileName($file1));\r\n      \r\n    if (substr($file2, 0, 4) == 'EXT:') \r\n      $file2 = file_get_contents(t3lib_div::getFileAbsFileName($file2));\r\n      \r\n    if (!$file1 || !$file2)\r\n      return $base1;\r\n    \r\n    // convert to array\r\n    $flex1 = t3lib_div::xml2array($file1);\r\n    $flex2 = t3lib_div::xml2array($file2);\r\n          \r\n    if (!is_array($flex1) ||!is_array($flex2))\r\n      return $base1;\r\n      \r\n    $final = tx_ak_test_flexform_merge::array_merge_recursive($flex1, $flex2);\r\n    $flex = t3lib_div::array2xml($final);\r\n    \r\n    return $flex;\r\n  }\r\n  \r\n  /**\r\n   * based of cv_merge_flexform extension\r\n  */\r\n\r\n  static function array_merge_recursive($array, $array2) {\r\n    $tab_out=$array;\r\n\r\n    if (!is_array($array2)) return $array2;\r\n    if (!is_array($array)) return $array;\r\n\r\n    foreach ($array2 as $key =&gt; $value) {\r\n\r\n      // The process repeats recursively:\r\n      if (is_array($value)) {\r\n        if (!isset($array[$key])) {\r\n          $array[$key] = array();\r\n        }\r\n        $tab_out[$key] = tx_ak_test_flexform_merge::array_merge_recursive($array[$key], $value);\r\n      // Else, it is a value\r\n      } else {\r\n        $tab_out[$key] = $value;\r\n      }\r\n    }\r\n    return $tab_out;\r\n  }\r\n}\r\n So was macht das Ganze nun?\nIn der ext_tables laden wir unsere Klasse die wiederrum eine Klasse lädt in der 2 Flexformen gemerged werden können. Das Ergebnis wird dann zurück an Typo3 geliefert und man im BE die hinzugefügten Felder sehen.\nDas wars auch schon."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Flexform erweitern (extenden) am Beispiel von tt\_news

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#tt\_news](/tag.html?tag=208&cHash=fb2980ae246308f003b872a72b3b1ebb)[#flexform](/tag.html?tag=393&cHash=9954a6b2510df77f6e2dbc2f8802366c)[#extend](/tag.html?tag=409&cHash=60d1b9bf4bab6b0c9ff5a1fd13f2fb6c)[#erweitern](/tag.html?tag=410&cHash=0b49b22f6417cb3004add4a82d793c67)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

11\. Feb 2014

Für ein Projekt musste ich letztens das Ausgabe-Plugin von tt\_news erweitern. Da dies eine Flexform ist, lässt sich dieses nicht so einfach über TCA oder ext\_tables bewerkstelligen. Nach ein wenig Recherche und rumprobieren habe ich hier die perfekte Lösung gefunden. Man erstellt eine Flexform für seine neuen Felder und dann wird diese in die zu bearbeitende reingemerged. Das Ganze geht so:

**ext\_tables.php**

Erweitert die ext\_tables.php um folgende Zeilen. Die Datei included eine Klasse der 2 benötigten Dateien um die Flexform mergen zu können. Die Klassen könnt ihr benennen, wie ihr wollt. meine Extension nenne ich mal ak\_test.

```

require_once(t3lib_extMgm::extPath($_EXTKEY).'/classes/class.tx_ak_test_ext_ttnews_flexform.php');
$old_flexform = $TCA['tt_content']['columns']['pi_flexform']['config']['ds']['9,list'];
$new_flexform = tx_ak_test_ext_ttnews_flexform::merge($old_flexform, 'EXT:' . $_EXTKEY . '/tt_news_flexform_ext.xml');
t3lib_extMgm::addPiFlexFormValue(9, $new_flexform);
```

**tx\_ak\_test\_ext\_ttnews\_flexform.php**

```

<?php

/*Merge 2 Flexform-Files*/

require_once(t3lib_extMgm::extPath('ak_test').'classes/class.tx_ak_test_fexform_merge.php');

class ak_test_ext_ttnews_flexform {
  
static function merge($flexform_ttnews, $flexform_add) {
  $flexform = $flexform_ttnews;
  // get LastIndex
  $lastIndex = 0;
  if (substr($flexform, 0, 5) == 'FILE:')
    $flexform = substr($flexform, 5);
  if (substr($flexform, 0, 4) == 'EXT:')
    $flexform = file_get_contents(t3lib_div::getFileAbsFileName($flexform));
  $flexform = t3lib_div::xml2array($flexform);
    
  $items = $flexform['sheets']['sDEF']['ROOT']['el']['listOrderBy']['TCEforms']['config']['items'];
  if (is_array($items) && !empty($items)) {
    foreach ($items as $index => $item) {
      if ($index > $lastIndex)
        $lastIndex = $index; 
    }
  }
  $lastIndex++;
    
  // replace index in new flexform
  if (substr($flexform_add, 0, 5) == 'FILE:')
  $flexform_add = substr($flexform_add, 5);
  if (substr($flexform_add, 0, 4) == 'EXT:')
    $flexform_add = file_get_contents(t3lib_div::getFileAbsFileName($flexform_add));
  
  $flexform_add = str_replace('###LASTINDEX###' , $lastIndex, $flexform_add);
    
  // merge 
  $new_flexform = tx_ak_test_fexform_merge::merge($flexform_ttnews, $flexform_add);
    
  return $new_flexform;
  }
}
```

**class.tx\_ak\_test\_fexform\_merge.php**

```

<?php
class tx_ak_test_flexform_merge {
  
  static function merge ($file1, $file2) {
    $base1 = $file1;
    
    // remove FILE:
    if (substr($file1, 0, 5) == 'FILE:')
      $file1 = substr($file1, 5);
    if (substr($file2, 0, 5) == 'FILE:')
      $file2 = substr($file2, 5);
    
    // extract xml to file if EXT:
    if (substr($file1, 0, 4) == 'EXT:') 
      $file1 = file_get_contents(t3lib_div::getFileAbsFileName($file1));
      
    if (substr($file2, 0, 4) == 'EXT:') 
      $file2 = file_get_contents(t3lib_div::getFileAbsFileName($file2));
      
    if (!$file1 || !$file2)
      return $base1;
    
    // convert to array
    $flex1 = t3lib_div::xml2array($file1);
    $flex2 = t3lib_div::xml2array($file2);
          
    if (!is_array($flex1) ||!is_array($flex2))
      return $base1;
      
    $final = tx_ak_test_flexform_merge::array_merge_recursive($flex1, $flex2);
    $flex = t3lib_div::array2xml($final);
    
    return $flex;
  }
  
  /**
   * based of cv_merge_flexform extension
  */

  static function array_merge_recursive($array, $array2) {
    $tab_out=$array;

    if (!is_array($array2)) return $array2;
    if (!is_array($array)) return $array;

    foreach ($array2 as $key => $value) {

      // The process repeats recursively:
      if (is_array($value)) {
        if (!isset($array[$key])) {
          $array[$key] = array();
        }
        $tab_out[$key] = tx_ak_test_flexform_merge::array_merge_recursive($array[$key], $value);
      // Else, it is a value
      } else {
        $tab_out[$key] = $value;
      }
    }
    return $tab_out;
  }
}
```

So was macht das Ganze nun?

In der ext\_tables laden wir unsere Klasse die wiederrum eine Klasse lädt in der 2 Flexformen gemerged werden können. Das Ergebnis wird dann zurück an Typo3 geliefert und man im BE die hinzugefügten Felder sehen.

Das wars auch schon.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/4e01b62bc411b3b07df2464c0e86ec0a?s=75&d=mm&r=g)
    
    Schumiel
    
    Wenn addPiFlexFormValue zweimal aufgerufen wird, wird das zweite Mal nicht genommen. Das heißt, das mergen kann hier gar nicht stattfinden, weil es in der anderen Extension (durch addPiFlexFormValue ) bereits angewendet wird. Das addPiFlexFormValue aus der anderen Extension raus nehmen, macht es updateunfähig.
    
    04\. Sep 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c033fca0a55e2df669a9659b0f3a3271?s=75&d=mm&r=g)
    
    Footrotflat
    
    Hallo André  
    Funktioniert dies noch mit Typo3 8.7.x ?  
    Gruss Footrotflat
    
    10\. Aug 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Footrotflat,  
        das ist eine gute Frage. Es könnte evtl. gehen, wenn man die richtigen Namespaces wieder findet.  
        Grüße André
        
        13\. Aug 2018 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.