---
title: Menüs auf Seiten/Pages ausgeben mit Shortcode in Wordpress
date: '2011-07-23T14:33:16.000Z'
slug: menues-auf-seitenpages-ausgeben-mit-shortcode-in-wordpress
tags:
  - '11'
  - '42'
  - '43'
  - '44'
  - '45'
  - '46'
description: "\nIch wollte eine Sitemap meiner Webseite haben, die einfach alle Punkte auf einmal aus meinem selbst erstellten Hauptmenü ausgibt. Das musste natürlich auf einer Seite/Page sein und so habe ich mich umgeguckt und eine Funktion gefunden, die genau das bewerkstelligt. Die Funktion findet ihr unten. Fügt einfach den Code in eure function.php ein und schon habt ihr alles installiert was ihr braucht. Danach einfach [menu name=\"Name eures Menüs\"] in eure Seite/page einfügen und schon kommt das gewünschte Menü an der Stelle heraus. \r\n&lt;?php\r\nfunction print_menu_shortcode($atts, $content = null) {\r\n    extract(shortcode_atts(array( 'name' =&gt; null, ), $atts));\r\n    return wp_nav_menu( array( 'menu' =&gt; $name, 'echo' =&gt; false ) );\r\n}\r\nadd_shortcode('menu', 'print_menu_shortcode');\r\n\r\n?&gt;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Menüs auf Seiten/Pages ausgeben mit Shortcode in Wordpress

#Tutorials#Wordpress

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 6 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#menu in page](/tag.html?tag=42&cHash=4b9e8cd07e6cbad7980b93e1c8cc77e4)[#page](/tag.html?tag=43&cHash=4e5734e50e9c8710133350eec6636569)[#seite](/tag.html?tag=44&cHash=e70f59cf751d213f2167619176f35fae)[#shortcode](/tag.html?tag=45&cHash=31c07d891a532c33ae9d08d62ed510f4)[#sitemap](/tag.html?tag=46&cHash=706e28a227226ab4832456675fcd1bec)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Jul 2011

[![](http://andreknieriem.de/wp-content/uploads/2011/07/wordpress-400x285.png "wordpress")](http://andreknieriem.de/wp-content/uploads/2011/07/wordpress.png)

Ich wollte eine Sitemap meiner Webseite haben, die einfach alle Punkte auf einmal aus meinem selbst erstellten Hauptmenü ausgibt. Das musste natürlich auf einer Seite/Page sein und so habe ich mich umgeguckt und eine Funktion gefunden, die genau das bewerkstelligt. Die Funktion findet ihr unten. Fügt einfach den Code in eure function.php ein und schon habt ihr alles installiert was ihr braucht. Danach einfach **\[menu name="Name eures Menüs"\]** in eure Seite/page einfügen und schon kommt das gewünschte Menü an der Stelle heraus.

```

<?php
function print_menu_shortcode($atts, $content = null) {
    extract(shortcode_atts(array( 'name' => null, ), $atts));
    return wp_nav_menu( array( 'menu' => $name, 'echo' => false ) );
}
add_shortcode('menu', 'print_menu_shortcode');

?>
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/30c45293c26d1bb943cfc503d94620a3?s=75&d=mm&r=g)
    
    Franz
    
    In welche Datei genau muss das rein? Eine Datei "function.php" gibt es bei mir gar nicht, dafür mehrere Dateien mit dem Namens "functions.php". Ich nehme an, dass da in der Anweisung ein "s" fehlt? Aber welche der "functions.php" ist die richtige? Ich möchte ja nichts zerballern...
    
    04\. Sep 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a53f4911b868b81c37751871dc5ef063?s=75&d=mm&r=g)
    
    Ben
    
    Hi,  
      
    vielen Dank, das Script hat auf jeden Fall auf meiner Seite funktioniert. Leider nutze ich jedoch ein gekauftes Theme (BeTheme), und jedenfalls funktionierte nach Einfügen des Snippets in der functions.php das gesamte WP Dashboard nicht mehr...Die Seite hingegen funktionierte einwandfrei, samt Menu call.  
      
    Fehlermeldung:  
    Warning: Cannot modify header information - headers already sent by (output started at  
    /xxx/wp-content/themes/betheme/functions.php:130)  
    in /xxx/wp-includes/pluggable.php on line 1179  
      
    Ich habe die Datei über den WP eigenen Editor bearbeitet, und das Gefühl, dass alleine bereits darin eine mögliche Fehlerquelle liegt. Oder habe ich eventuell nur eine falsche Syntax benutzt? Normalerweise müsste das Snippet doch einfach innerhalb des bestehenden Funktionenbereichs (?php bis ?> ) eingefügt werden, getrennt durch }, oder tatsächlich komplett, so wie oben dargestellt?  
      
    Besten Dank!!! Toll, dass es solche Seiten wie diese hier gibt!
    
    08\. Dec 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Ben,  
          
        es kann einfach an dem Theme liegen. Vielleicht musst du das Skript an eine andere Stelle in der functions.php packen?  
          
        Grüße  
        André
        
        12\. Dec 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/2cedc77af94ea0d9ea93ca78af07a9d4?s=75&d=mm&r=g)
            
            [Sushi](info-minea.de)
            
            Ich arbeite mich auch grad durch die Menüs und mir fällt hier ein Sache auf: ich habe gehört, dass man in der functions.php den php tag nicht abschließen darf... (" ?> ")
            
            17\. Feb 2017 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/b9c77cef3fac6eb12a5d9c334305485a?s=75&d=mm&r=g)
    
    [Paul](http://www.marketport.de)
    
    Super, wieder etwas leicht hinzugefügt ohne wie andere 1.000 Plugins zu nutzen. Danke für das Snippet!
    
    17\. Jun 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Paul, freut mich, dass ich dir helfen konnte!
        
        17\. Jun 2014 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.