---
title: PHP in_array Funktion für multidimensionale Arrays
date: '2012-08-24T05:29:10.000Z'
slug: php-in-array-funktion-fuer-multidimensionale-arrays
tags:
  - '41'
  - '118'
  - '119'
description: "Für ein neues Projekt von mir, brauchte ich kürzlich eine Funktion, die guckt, ob ein bestimmter String in einem Multidimensionen Array vorkommt. Die normale PHP-Funktion in_array() konnte ich dafür nicht nutzen, da diese nur eindimensionale Arrays beherrscht. Hier habe ich also eine Funktion die alle arrays meistern kann ;) \nfunction in_array_r($needle, $haystack, $strict = true) {\n\t    foreach ($haystack as $item) {\n\t        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) &amp;&amp; in_array_r($needle, $item, $strict))) {\n\t            return true;\n\t        }\n\t    }\n\t    return false;\n}\n Beispiel: \n$fruits = array (\n    \"fruits\"  =&gt; array(\"a\" =&gt; \"Orange\", \"b\" =&gt; \"Banane\", \"c\" =&gt; \"Apfel\")\n);\n\nif(in_array_r('Orange', $fruits )){\n\t// returns true\n}\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#in\_array](/tag.html?tag=118&cHash=bc46e559715dad703aabc3e1e1f0694a)[#multidimensional array](/tag.html?tag=119&cHash=830deae1fdc6e86b3485eb002a4fc8b1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

24\. Aug 2012

Für ein neues Projekt von mir, brauchte ich kürzlich eine Funktion, die guckt, ob ein bestimmter String in einem Multidimensionen Array vorkommt. Die normale PHP-Funktion in\_array() konnte ich dafür nicht nutzen, da diese nur eindimensionale Arrays beherrscht. Hier habe ich also eine Funktion die alle arrays meistern kann ;)

```

function in_array_r($needle, $haystack, $strict = true) {
	    foreach ($haystack as $item) {
	        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) && in_array_r($needle, $item, $strict))) {
	            return true;
	        }
	    }
	    return false;
}
```

Beispiel:

```

$fruits = array (
    "fruits"  => array("a" => "Orange", "b" => "Banane", "c" => "Apfel")
);

if(in_array_r('Orange', $fruits )){
	// returns true
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/9ba7e7be979d9f12ec294156c34485eb?s=75&d=mm&r=g)
    
    Andreas
    
    Danke für die Funktion.  
    Toll wäre es wenn die Funktion noch den zugehörigen key zurückliefert.
    
    09\. Sep 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](http://www.andrerinas.de)
        
        Hey Andreas,  
          
        die in\_array Funktionen geben an sich nur boolean Werte zurück. Ich habe aber hier schonmal eine Methode beschrieben, wie mann es bei eindimensionalen Arrays macht:  
          
        http://www.andrerinas.de/tutorials/php-den-key-bei-der-in-array-funktion-bekommen-falls-etwas-gefunden-wurde.html  
          
        Vielleicht hilft dir das weiter :)  
          
        Grüße  
        André
        
        09\. Sep 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.