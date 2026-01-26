---
title: Alternative zu PHP strip_tags
date: '2012-12-03T11:35:29.000Z'
slug: alternative-zu-php-strip-tags
tags:
  - '41'
  - '138'
  - '139'
  - '140'
  - '141'
  - '142'
description: "Für alle, die mit der Funktion strip_tags ein paar Probleme haben, habe ich hier eine kleine Funktion, die bei mir deutlich besser funktioniert hat.\nViel Spaß damit! \r\n&lt;?php\r\n// --------------------------------------------------------------\r\n\r\nfunction rip_tags($string) {\r\n\r\n    // ----- remove HTML TAGs -----\r\n    $string = preg_replace ('/&lt;[^&gt;]*&gt;/', ' ', $string);\r\n\r\n    // ----- remove control characters -----\r\n    $string = str_replace(\"\\r\", '', $string);    // --- replace with empty space\r\n    $string = str_replace(\"\\n\", ' ', $string);   // --- replace with space\r\n    $string = str_replace(\"\\t\", ' ', $string);   // --- replace with space\r\n\r\n    // ----- remove multiple spaces -----\r\n    $string = trim(preg_replace('/ {2,}/', ' ', $string));\r\n\r\n    return $string;\r\n\r\n}\r\n\r\n// --------------------------------------------------------------\r\n?&gt;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Alternative zu PHP strip\_tags

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 5 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#alternative](/tag.html?tag=138&cHash=7cda355cd6c2e2be8ed6e15b36fa4c98)[#besser](/tag.html?tag=139&cHash=6966eb59dcb245f46d44f3d75e84b7e1)[#better](/tag.html?tag=140&cHash=add1a4f50d9c23bf203985ed5e1a743c)[#cleaner](/tag.html?tag=141&cHash=9d6c02ac3a4dbf0e9bef980570033571)[#strip\_tags](/tag.html?tag=142&cHash=6d2f31dcc8d839536ea384f5ed7691b5)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. Dec 2012

Für alle, die mit der Funktion strip\_tags ein paar Probleme haben, habe ich hier eine kleine Funktion, die bei mir deutlich besser funktioniert hat.

Viel Spaß damit!

```

<?php
// --------------------------------------------------------------

function rip_tags($string) {

    // ----- remove HTML TAGs -----
    $string = preg_replace ('/<[^>]*>/', ' ', $string);

    // ----- remove control characters -----
    $string = str_replace("\r", '', $string);    // --- replace with empty space
    $string = str_replace("\n", ' ', $string);   // --- replace with space
    $string = str_replace("\t", ' ', $string);   // --- replace with space

    // ----- remove multiple spaces -----
    $string = trim(preg_replace('/ {2,}/', ' ', $string));

    return $string;

}

// --------------------------------------------------------------
?>
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/8f4ff444ba49f9935959906579b7c8c5?s=75&d=mm&r=g)
    
    [Mr. Mac](http://www.mac.ro)
    
    Hallo,  
      
    täusche ich mich oder macht die Funktion eine Lückentext indem sie alle r, n, t durch Leerzeichen ersetzt? ! ;)  
      
    Escaped, also mit \\r, \\n, \\t klappst's dann aber prima.  
      
    lg,  
    Mr. M.
    
    18\. Dec 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Mr. Mac,  
          
        danke für den Hinweis, das ist wohl passiert, als ich den Syntax Highlighter umgestellt habe. Da hat er alle \\ gelöscht. Habs nun wieder drin.  
          
        Grüße  
        André
        
        18\. Dec 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/cd3ece8a4603df9e3fada1c7b3683ab4?s=75&d=mm&r=g)
    
    Stefan
    
    Jetzt kann man es kopieren, super
    
    05\. Nov 2013 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/cd3ece8a4603df9e3fada1c7b3683ab4?s=75&d=mm&r=g)
    
    Stefan
    
    Funktioniert gut, aber Dein Copy-Paste Script welches es unmöglich macht den Schnippsel mal eben zu kopieren geht mal gar nicht.
    
    05\. Nov 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Stefan, danke dass du mir das sagst,ist wohl seit nem Plugin-Update neu. Muss ich mal suchen und entfernen. Viel Spaß noch mit dem Script.
        
        05\. Nov 2013 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.