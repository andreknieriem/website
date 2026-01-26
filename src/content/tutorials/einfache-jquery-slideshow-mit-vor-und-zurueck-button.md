---
title: Einfache jQuery Slideshow mit Vor- und Zurück-Button
date: '2011-04-07T16:56:25.000Z'
slug: einfache-jquery-slideshow-mit-vor-und-zurueck-button
tags:
  - '16'
  - '17'
  - '18'
  - '19'
  - '20'
  - '21'
  - '22'
  - '23'
  - '24'
description: "\n\n\n\n\nIn diesem Tutorial zeige ich, wie man eine simple, aber funktionstüchtige und schöne Slideshow mit jQuery erstellt. Die Funktion kann den eigenen Wünschen angepasst werden und ist auch für Text, oder sonstige Elemente geeignet.\nWas wird benötigt?jQuery\nGrundkenntnisse von Html und jQuery\nHtml Grundgerüst \r\n&lt;script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js\"&gt;&lt;/script&gt;\r\n&lt;script type=\"text/javascript\" src=\"slide.js\"&gt;&lt;/script&gt;\r\n&lt;div id=\"slideShow\"&gt;\r\n\t&lt;img src=\"slide1.jpg\"&gt;\r\n\t&lt;img src=\"slide2.jpg\"&gt;\r\n\t&lt;img src=\"slide3.jpg\"&gt;\r\n    &lt;div class=\"next\"&gt;&lt;/div&gt;\r\n    &lt;div class=\"prev\"&gt;&lt;/div&gt;\r\n&lt;/div&gt;\r\n CSS \r\n\r\n#slideShow {\r\n  position: relative;\r\n  width: 700px; /*kann natürlich angepasst werden auf eure Größen */\r\n  height: 360px; /*kann natürlich angepasst werden auf eure Größen */\r\n}\r\n\r\n#slideShow img {\r\n  position: absolute;\r\n  display: none;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n/* Die Vor und Zurückbuttons könnt ihr so stylen und hinpacken wo ihr wollt beispielsweise so*/\r\n\r\n#slideShow .next {\r\n  width: 20px;\r\n  height: 360px;\r\n  position: absolute;\r\n  background-color: #ccc;\r\n  cursor: pointer;\r\n  right: 0;\r\n}\r\n\r\n#slideShow .prev{\r\n  width: 20px;\r\n  height: 360px;\r\n  position: absolute;\r\n  background-color: #ccc;\r\n  cursor: pointer;\r\n  left: 0;\r\n}\r\n Man benötigt einen Container, in dem wie bei meinem Beispiel die Objekte sind, die in die Slideshow sollen. Die Vor. und Zurück-Knöpfe müssen nicht unbedingt in den Container, ich bilde es aber so ab, wie es oben zu sehen ist.\nAls nächstes bauen wir die jQuery Funktion:\nslide.js \r\nfunction slideSwitch(switchSpeed) {\r\n    var $active = jQuery('#slideShow img.active');\r\n\r\n    if ( $active.length == 0 ) $active = jQuery('#slideShow img:last');\r\n\r\n    var $next =  $active.next('img').length ? $active.next('img')\r\n       : jQuery('#slideShow img:first');\r\n\r\n    $active.addClass('last-active').fadeOut(switchSpeed);\r\n\r\n\t$next.addClass('active').fadeIn(switchSpeed);\r\n\t$active.removeClass('active last-active');\r\n}\r\n\r\njQuery(function() {\r\n    interval = \"\";\r\n    jQuery('#slideShow img:first').css(\"display\", \"block\").addClass('active');\r\n    interval = setInterval ( \"slideSwitch(1000)\", 4000 );\r\n});\r\n Diese Funktion startet die Slideshow und wechselt alle 4 Skunden das Bild.\nNun wollen wir aber noch nen Vor- und Zurückknopf haben.\nAlso fügen wir unter der Funktion noch 2 Funktionen hinzu.\nAlso so: \r\njQuery('#slideShow img:first').css(\"display\", \"block\").addClass('active');\r\n\r\n// Die Next Function haben wir in der eigentlichen Funktion ja schon drin, also rufen wir die\r\n// Funktion auf und stoppen das Intervall, damit die Slideshow nicht weiterlaeuft\r\n\r\njQuery(\".next\").click(function() {\r\n\tclearInterval(interval);\r\n\tslideSwitch(1000);\r\n});\r\n\r\n// Nun die Zurueck-Funktion\r\njQuery(\".prev\").click(function() {\r\n\tclearInterval(interval);\r\n\tvar $active = jQuery('#slideShow img.active');\r\n\r\n\tif ( $active.length == 0 ) $active = jQuery('#slideShow img:first');\r\n\r\n\tvar $next =  $active.prev('img').length ? $active.prev('img')\r\n       : jQuery('#slideShow img:last');\r\n\r\n\t$active.addClass('last-active').fadeOut(1000);\r\n\r\n\t$next.addClass('active').fadeIn(1000);\r\n\t$active.removeClass('active last-active');\r\n});\r\n Das war auch schon alles. Ich hoffe ich konnte euch damit weiterhelfen. Für Anregungen und Verbesserungen der Funktion bin ich offen.\nHier noch einmal die slide.js"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Einfache jQuery Slideshow mit Vor- und Zurück-Button

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 67 Kommentare](#comments)

* * *

### Tags

[#back](/tag.html?tag=16&cHash=87e79bc78f986929f222a9c5b5b4047e)[#button](/tag.html?tag=17&cHash=4c503eb2abce17a4ad22c8cd1417e0e9)[#easy](/tag.html?tag=18&cHash=5d4f1f7a1652a31afec5cf92977a4ae6)[#einfach](/tag.html?tag=19&cHash=0ed9c6f5c14f3bf783c906710c546de0)[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#previous](/tag.html?tag=21&cHash=21d93120f2432a7541ac89d96c1429a1)[#slideshow](/tag.html?tag=22&cHash=169c2f58c063b19e515618cf22aec325)[#vor](/tag.html?tag=23&cHash=d9dd8c397444f48a4f8cd7b2d1cbc77e)[#zurück](/tag.html?tag=24&cHash=13bae35d80022b77ac03f7a901168849)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Apr 2011

<script type="text/javascript" src="/wp-content/themes/andreknieriemv3/resources/js/slide.js"></script>

![](http://andreknieriem.de/wp-content/uploads/2011/04/slide1.jpg "slide1")![](http://andreknieriem.de/wp-content/uploads/2011/04/slide2.jpg "slide2")![](http://andreknieriem.de/wp-content/uploads/2011/04/slide3.jpg "slide3")

In diesem Tutorial zeige ich, wie man eine simple, aber funktionstüchtige und schöne Slideshow mit jQuery erstellt. Die Funktion kann den eigenen Wünschen angepasst werden und ist auch für Text, oder sonstige Elemente geeignet.

**Was wird benötigt?**

*   [jQuery](http://jquery.com)
*   Grundkenntnisse von Html und jQuery

**Html Grundgerüst**

```

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
<script type="text/javascript" src="slide.js"></script>
<div id="slideShow">
	<img src="slide1.jpg">
	<img src="slide2.jpg">
	<img src="slide3.jpg">
    <div class="next"></div>
    <div class="prev"></div>
</div>
```

**CSS**

```


#slideShow {
  position: relative;
  width: 700px; /*kann natürlich angepasst werden auf eure Größen */
  height: 360px; /*kann natürlich angepasst werden auf eure Größen */
}

#slideShow img {
  position: absolute;
  display: none;
  left: 0;
  top: 0;
}

/* Die Vor und Zurückbuttons könnt ihr so stylen und hinpacken wo ihr wollt beispielsweise so*/

#slideShow .next {
  width: 20px;
  height: 360px;
  position: absolute;
  background-color: #ccc;
  cursor: pointer;
  right: 0;
}

#slideShow .prev{
  width: 20px;
  height: 360px;
  position: absolute;
  background-color: #ccc;
  cursor: pointer;
  left: 0;
}
```

Man benötigt einen Container, in dem wie bei meinem Beispiel die Objekte sind, die in die Slideshow sollen. Die Vor. und Zurück-Knöpfe müssen nicht unbedingt in den Container, ich bilde es aber so ab, wie es oben zu sehen ist.

Als nächstes bauen wir die jQuery Funktion:

**slide.js**

```

function slideSwitch(switchSpeed) {
    var $active = jQuery('#slideShow img.active');

    if ( $active.length == 0 ) $active = jQuery('#slideShow img:last');

    var $next =  $active.next('img').length ? $active.next('img')
       : jQuery('#slideShow img:first');

    $active.addClass('last-active').fadeOut(switchSpeed);

	$next.addClass('active').fadeIn(switchSpeed);
	$active.removeClass('active last-active');
}

jQuery(function() {
    interval = "";
    jQuery('#slideShow img:first').css("display", "block").addClass('active');
    interval = setInterval ( "slideSwitch(1000)", 4000 );
});
```

Diese Funktion startet die Slideshow und wechselt alle 4 Skunden das Bild.

Nun wollen wir aber noch nen Vor- und Zurückknopf haben.

Also fügen wir unter der Funktion noch 2 Funktionen hinzu.

Also so:

```

jQuery('#slideShow img:first').css("display", "block").addClass('active');

// Die Next Function haben wir in der eigentlichen Funktion ja schon drin, also rufen wir die
// Funktion auf und stoppen das Intervall, damit die Slideshow nicht weiterlaeuft

jQuery(".next").click(function() {
	clearInterval(interval);
	slideSwitch(1000);
});

// Nun die Zurueck-Funktion
jQuery(".prev").click(function() {
	clearInterval(interval);
	var $active = jQuery('#slideShow img.active');

	if ( $active.length == 0 ) $active = jQuery('#slideShow img:first');

	var $next =  $active.prev('img').length ? $active.prev('img')
       : jQuery('#slideShow img:last');

	$active.addClass('last-active').fadeOut(1000);

	$next.addClass('active').fadeIn(1000);
	$active.removeClass('active last-active');
});
```

Das war auch schon alles. Ich hoffe ich konnte euch damit weiterhelfen. Für Anregungen und Verbesserungen der Funktion bin ich offen.

[Hier noch einmal die slide.js](/wp-content/themes/thematicpowerblog/slide.js)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/b537466aa75054913f24f53417b74ff6?s=75&d=mm&r=g)
    
    Nikita
    
    Moin! Schöne Slideshow!  
    Folgendes Problem, ich habe auf meiner Seite eine SlideShow eingebunden, nun möchte ich aber auf der selben seite / rechten Seiten ebenfalls einen SlideShow einbinden. Quasi Bildergalerie vorher/nachher.  
      
    Wie mache ich es am besten? In der Js einfach die andere SlideShow ID mit Komma ersetzen? Alle?  
    Sprich so?  
      
    function slideSwitch(switchSpeed) {  
    var $active = jQuery('#slideShow, #slideShow2, img.active');  
      
    if ( $active.length == 0 ) $active = jQuery('#slideShow, #slideShow2 img:last');
    
    07\. Jun 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/72a4df3c4ac6d560eecd40f63c9929d2?s=75&d=mm&r=g)
    
    Daniela
    
    Hallo,  
    ich wollte mal fragen wo ich denn die slide.js Datei hintun soll ?  
    Ich kann bisher nur die zwei Pfeile sehen aber nicht das Bild/die Bilder. :/
    
    04\. Jun 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/cba4966ad4fa5b2f8fadbd42d3d1eb35?s=75&d=mm&r=g)
    
    Jascha
    
    Hi Andre,  
    Ich hoffe du kannst mir helfen...  
    Würde die Bilder in der Slideshow jeweils gerne mit einem Link versehen. Sobald ich den Link eingefügt habe widerholt sich allerdings immer nur das erste Bild.
    
    09\. Mar 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Jascha, da sich das Markup dadurch ändert, musst du auch den Code entsprechend anpassen. Ich glaube es reicht, wenn du überall im Code von jQuery und im CSS das img durch a ersetzt.  
          
        Viele Grüße  
        André
        
        14\. Mar 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/cba4966ad4fa5b2f8fadbd42d3d1eb35?s=75&d=mm&r=g)
            
            Jascha
            
            Danke für deine Antwort :) Ist es auch möglich, dass ich für jedes Bild quasi einen DIV Container habe ... wo ich dann z.B. noch Texte oder Grafiken drüber legen kann ?  
            Außerdem habe ich noch Probleme mit der richtigen Darstellung... Ich würde gerne das sich die Slideshow so verhällt wie die restlichen DIVs... also das sie die volle Breite behällt und wenn ich das Fenster verkleinere oder die Ansicht auf einem Smartphone habe das das bild oder der DIV zentriert dargestellt wird und die ränder abgeschitten sind ....
            
            14\. Mar 2016 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Jascha, das Script ist so erweiterbar, wie du möchtest, solange du im Javascript und CSS deine Anpassungen machst. Das Script sucht nach dem nächstem gleichen Element. Im Code oben sind dies Bilder. Du kannst auch Divs nehmen. Dann muss halt nur im CSS das Div absolute positioniert werden und im JS das Div angesprochen werden, anstelle des img.
        
        21\. Mar 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/035973fdf4ca5fcd030125e9135adfec?s=75&d=mm&r=g)
    
    can
    
    Hi Andre,  
    vielen Dank für dein Tutorial.  
    Kann ich auch 2 Bilder gleichzeitig (nebeneinander) anzeigen?
    
    20\. Jan 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/8348a08d12fb85106ea9a4cdc85a3b12?s=75&d=mm&r=g)
    
    [TOM](http://www.cycle-point.com)
    
    Hallo,  
      
    habe jetzt ausschließlich CSS und js vom Tutorial verwendet und neue Seite erstellt mit nur dem Sliderdrauf und funktioniert alles soweit gut. Nur Vor und Zurück Knöpfe gehen nicht. Vielleicht kannst du mir ja mal eine slide.js und css datei zum abgleich schicken info@cycle-point.com.  
    Mit dem vor zurück krieg ich irgendwie nicht hin. lg ts
    
    26\. Nov 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Tom,  
          
        habe dir eine HTML Datei geschickt, bei der es funktioniert.  
          
        Grüße  
        André
        
        30\. Nov 2015 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/8348a08d12fb85106ea9a4cdc85a3b12?s=75&d=mm&r=g)
            
            [TOM](http://www.cycle-point.com)
            
            Hallo Andrè,  
              
            danke für die tolle Hilfe. Ich konnte jetzt den Slider ohne Probleme in meine HP integrieren, trotz meiner geringen Erfahrung. Auch die weiteren Tipps mit Verlinkungen und so weiter, die man hier so nachlesen kann, waren sehr hilfreich. Nochmals vielen Dank !
            
            05\. Dec 2015 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/8348a08d12fb85106ea9a4cdc85a3b12?s=75&d=mm&r=g)
    
    [TOM](http://www.cycle-point.com)
    
    Hallo,  
      
    habe am Wochenende Dein Toutorial durchgearbeitet. Obwohl ich nicht viel Ahnung habe habe ich zumindest die Bilder zum Sliden gebracht.  
      
    Leider geht die vor und zurück Funktion nicht und ich weiss nicht woran es noch liegen könnte ?  
    LG TS
    
    22\. Nov 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Tom,  
          
        vielleicht passt eine Klasse oder eine ID in deinem HTML nicht richtig? Wenn der Vor und Zurück Knopf auch an einer anderen Stelle im HTML ist, kann es auch zu Fehlern kommen.  
          
        Grüße  
        André
        
        23\. Nov 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/65870b8f07da22157f40c9a72b9a4465?s=75&d=mm&r=g)
    
    Philipp
    
    Kann man bei dieser Methode auch 2 Slideshow auf einer Seite einbauen?  
      
    Ohne Probleme mit den Weiterklicken?!
    
    22\. Oct 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Philipp,  
          
        mit dem jetzigen Code ist das nicht möglich, ist aber nicht viel notwendig, um dies zum Laufen zu kriegen. Wenn du Hilfe dabei brauchst, sag bescheid ;)
        
        23\. Oct 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/8158ba9aaefcb647d80efae52045f96a?s=75&d=mm&r=g)
    
    Wolfgang
    
    Hallo Andre, Die Slideshow ist wirklich Klasse!  
    Programmierung ist nicht meine Baustelle. Somit stellt sich für mich die Frage wie ich unkomplziert mehrere Slideshows auf einer Seite zum laufen bekomme... geht das überhaupt?  
    Es klappt soweit, jedoch werden nach Klick auf einen Vor oder Zurück Button alle Slides aktiviert... Wolfgang
    
    24\. Jul 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Wolfgang,  
          
        dafür müsstest du die Selektoren anpassen. Bei dem Klick auf next oder prev nur die Slideshow auswählen, die auch gewollt ist. Also sowas wie  
          
        var $active = jQuery(this).parents('#slideShow img.active');  
          
        Wobei eine ID immer nur einmal pro HTML Seite auftauchen darf. Also solltest du das auf eine Klasse ändern (Also . statt #)  
          
        Grüße André
        
        28\. Jul 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/495fd372ea53ded71822672acee3f200?s=75&d=mm&r=g)
    
    [Akin](http://akin-3d.com/flohmarkt/)
    
    Hi, Danke für den Slider der ist echt einfach alles kopieren und es läuft, bis auf die Vor und Zurück Leiste, die sind zwar da aber leider ohne Funktion die schalten leider nicht um.  
      
    Kannst du mir bitte helfen  
      
    Ich habe deine Codes so wie es ist übernommen und nur die Pfade angepasst ich komme nicht drauf woran es liegen kann warum die Vor und Zurück Leiste ohne Funktion ist.  
      
    Hier der Link zu meinem versuch ( http://akin-3d.com/flohmarkt/ )  
      
      
    Und  
      
    Noch eine Frage wie kann ich die Bilder von Links nach Rechts Sliden lassen. Hast du da auch einen Code.  
      
      
    Mit freundlichen Grüßen  
    Akim aus Berlin
    
    28\. Jan 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Akin,  
          
        das Problem liegt glaube ich dadran, dass der untere Code hier rein muss:  
          
        jQuery(function() {  
          
        also direkt unter:  
        interval = setInterval ( "slideSwitch(1000)", 4000 );  
          
        da wo der Code jetzt steht wird er ausgeführt, ohne dass das das "Dom ready" ist, also bevor die HTML Struktur komplett da ist guckt das Javascript schon. Da sind die Buttons dann noch nicht da und deswegen gehen diese nicht.  
          
        Grüße  
        André
        
        28\. Jan 2015 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/495fd372ea53ded71822672acee3f200?s=75&d=mm&r=g)
            
            [Akin](http://akin-3d.com/flohmarkt/)
            
            Hi, Danke für deine schnelle Hilfe dass war ein voll Treffer jetzt funktioniert es. Vielen Dank super einfacher Slider Danke dafür.  
              
            Mit freundlichen Grüßen  
            Akim aus Berlin
            
            28\. Jan 2015 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Hi Akin, freut mich, dass ich dir helfen konnte!  
                  
                Grüße André
                
                29\. Jan 2015 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/2c8f859b6330b2356d9b3f08e907ca7d?s=75&d=mm&r=g)
    
    Cabal
    
    Danke für das Tutorial! Gibt nur leider ein Problem. Falls man dem Ganzen ein Rahmen verpassen will, muss man unbedingt Höhe und Breite im CSS des #slideShow angeben. Gibts eine Möglichkeit das zu umgehen wenn man nur die Breite angibt?  
    Wenn ich dem #slideShow img einen Rahmen zuweise, wird der ja jedesmal mit ein- und ausgeblendet.  
      
    MfG.
    
    23\. May 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hallo Cabal, sry für die späte Antwort. Warum willst du denn nur die Breite angeben? Soll die Höhe variabel sein? Dann müsstest du die Höhe im JS ausrechnen, bekommen und immer schnell an das #slideShow übergeben.  
          
        var imgHeight = $('#slideShow img').height();  
        $('#slideShow').height(imgHeight);  
          
        Mal als kleiner Ansatz.  
          
        Grüße
        
        27\. May 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b1bac7ecc32f034f0c63762731f3012c?s=75&d=mm&r=g)
    
    Flo
    
    Hallo André,  
      
    der Slider sieht bei nem Kollegen von mir ganz gut aus. Nur bei mir funktioniert er nicht wirklich.  
      
    Ich sehe nur das erste Bild und in "Developer Tools" von Chrome wird mir alle vier Sekunden (das switchen funktioniert also anscheinend schonmal) der Fehler angezeigt:  
      
    Uncaught ReferenceError: $active is not defined  
      
    und zwar an der Stelle:  
      
    var $next = $acitve.next('img').length ? $active.next('img')  
      
    Definiert wird er ja so:  
      
    var $active = jQuery/('#slideShow img.active');  
      
    Wo könnte da der Fehler liegen? Ich find ihn einfach nicht :(  
      
    Vielen Dank schonmal im Voraus und Grüße,  
      
    Flo
    
    23\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/b1bac7ecc32f034f0c63762731f3012c?s=75&d=mm&r=g)
        
        Flo
        
        Habe den Fehler (Tippfehler -.-) schon gefunden, kann entfernt werden. Danke für den netten Slider :)
        
        23\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            admin
            
            Ah super ;) hatte ich das doch richtig gesehen!
            
            23\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Flo, hast du auch ein / vor dem ('#slideShow img.active'); oder war das ein Versehen? Ansonsten kann es vielleicht sein, dass du jQuery.noConflict() nicht benutzt hast vorher und somit alle jQuery durch $ ersetzen musst.  
          
        Wenn das auch nicht hilft, dann zeig mir mal deine Testseite ;)  
          
        Gruß André
        
        23\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/b1bac7ecc32f034f0c63762731f3012c?s=75&d=mm&r=g)
            
            Flo
            
            Hallo nochmal,  
              
            der Slider funktioniert jetzt ja, aber die Vor- und Zurück-Buttons sehe ich noch nicht.  
              
            function slideSwitch(switchSpeed) {  
            var $active = jQuery('#slideShow img.active');  
              
            if ( $active.length == 0 ) $active = jQuery('#slideShow img:last');  
              
            var $next = $active.next('img').length ? $active.next('img')  
            : jQuery('#slideShow img:first');  
              
            $active.addClass('last-active').fadeOut(switchSpeed);  
              
            $next.addClass('active').fadeIn(switchSpeed);  
            $active.removeClass('active last-active');  
            }  
              
            jQuery(function() {  
            interval = "";  
            jQuery('#slideShow img:first').css("display", "block").addClass('active');  
            interval = setInterval ( "slideSwitch(1000)", 4000 );  
            });  
              
            jQuery('#slideShow img:first').css("display", "block").addClass('active');  
              
            jQuery(".next").click(function() {  
            clearInterval(interval);  
            slideSwitch(1000);  
            });  
              
            jQuery(".prev").click(function() {  
            clearInterval(interval);  
            var $active = jQuery('#slideShow img.active');  
              
            if ( $active.length == 0 ) $active = jQuery('#slideShow img:first');  
              
            var $next = $active.prev('img').length ? $active.prev('img')  
            : jQuery('#slideShow img:last');  
              
            $active.addClass('last-active').fadeOut(1000);  
              
            $next.addClass('active').fadeIn(1000);  
            $active.removeClass('active last-active');  
            });  
              
            Was könnte da los sein?
            
            23\. Jan 2014 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                admin
                
                Am Javascript liegt das nicht. Ich denke, dass in deinem CSS etwas fehlt/faul ist. Hast du schonmal mit dem "Seite untersuchen" Tool, also dem Inspector gearbeitet? Also im Chrome oder Firebug im Firefox. Da kannste dann mit durch dein HTML gehen und gucken wo die Dinge sind. Vielleicht ist irgendetwas falsch. Ansonsten schick mir nen Link zur Seite und ich kann sicherlich helfen!
                
                24\. Jan 2014 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
    
    Bernd
    
    Hi,  
    ist schon eine feine Sache.  
    Gibt es eine Möglichkeit, Untertitel mit einzublenden für jedes Foto?  
      
    Grüße  
    Bernd
    
    19\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hallo Bernd,  
          
        möglich ist alles ;) Dafür muss man nur ein paar Änderungen vornehmen. Kannst du ein wenig Javascript/jQuery? Also ich würde es so machen, dass ich das HTML so umbaue, dass es immer div-Container im 'slideshow' div sind. In dem Container sind dann das Bild und in einem span-Tag der Title. Dann musste noch das JS anpassen, dass er div anstelle von img nimmt und dann wars das schon fast. Das span noch via CSS an die Stelle schieben, die du möchtest und voila.  
          
        Grüße
        
        20\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
            
            Bernd
            
            hallo Andre,  
              
            mit den div's im slideshow Container hatte ich schon versucht, dann wird immer nur das erste Bild angezeigt.  
            Kann es daran liegen, dass im slideshow container eine for Schleife für die Bilder arbeitet, damit ich die Bilder zufallsmäßig anzeigen lassen kann?  
              
            Gruß  
            Bernd
            
            20\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Bernd, ich weiß leider nicht genau was du meinst mit der forschleife. Zur Zeit holt sich das Skript immer das nächste Bild und wenn es kein nächstes gibt das erste. Du könntest dir alle Bilder holen und in ein Array packen und diese dann einmal mit shuffle zufällig sortieren lassen und dann immer das erste ausgeben (array.shift()).  
          
        Grüße
        
        20\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
            
            Bernd
            
            hallo Andre,  
              
            in Deinem Beispiel hast Du die img ausgabe aufgeführt  
              
            als  
            < img......  
            < img  
            < img...  
              
            Ich habe eine  
            < img ...  
            Ausgabe und ersetze halt den Dateinamen durch den Arraywert.  
              
            das funktioniert ja auch alles einwandfrei.  
            Habe halt nur Probleme damit, die Untertitel mit einzufügen.  
              
            Deinen Rat habe ich befolgt und die img ausgabe in einen div container gepackt und in der slide 'img' durch 'div' ersetzt.  
              
            aber dann streikt die kpl. Bildausgabe, bzw. zeigt immer nur das erste Bild.  
              
            Gruß  
            Bernd  
              
            Gruß  
            Bernd
            
            20\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Bernd, sry hatte deinen Kommentar gar nicht gesehen. Hast du auch das CSS angepasst? Hast du vielleicht eine Seite wo ich mal gucken kann? Dann könnte ich dir sicherlich helfen ;)  
          
        Grüße
        
        23\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
            
            Bernd
            
            Hallo Andre,  
              
            habe da noch mal rumprobiert.  
            Deinem Rat entsprechend funktionierte es auch so, dass der div Container, in dem das img Tag ist, angesprochen wurde und auch wechselt, aber es wird dann kein Bild mehr angezeigt.  
            Ich habe es auch mit .. div,img in der slide.js.  
            Alles ohne Erfolg. Entweder wechselt der Container oder das Bild. Es wird nur das erste Bild angezeigt oder der der erste Untertitel.  
            Werde mich bei Gelegenheit noch mal damit beschäftigen.  
              
            Erst einmal vielen Dank für Deine Bemühungen.  
            Gruß  
            Bernd
            
            24\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Bernd, wenn du mir nen Link zur deiner Seite schickst, kann ich bestimmt helfen. Ohne Code und allem ist das immer etwas schwierig.  
          
        Grüße
        
        24\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
            
            Bernd
            
            Hallo Andre,  
              
            http://bistro-casablanca.de  
              
            (noch in Arbeit)  
              
            Gruß  
            Bernd
            
            24\. Jan 2014 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                admin
                
                Hi Bernd, bekomme immer error: Allowed memory size of 16777216 bytes exha.... Hast du nen Fehler auf der Seite, oder ist dein Server zu klein für deine Webseite?
                
                27\. Jan 2014 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
                    
                    Bernd
                    
                    Hallo Andre,  
                      
                    eigentlich nicht. Ich habe jetzt nochmal mit verschiedenen Browsern probiert - die Seite öffnet ganz normal.  
                    Ggf. kann ich Dir die php Datei auch mal schicken, da im Moment auf der Seite ja die funktionierende Version ist.  
                    in der php sind die Schritte natürlich besser ersichtlich.  
                      
                    Gruß  
                    Bernd
                    
                    27\. Jan 2014 [Antworten](#)
                    
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Bernd, die Slideshow auf deiner Seite geht ja. Kann ich deinen Versuch irgendwo sehen? Also mit den Div-Containern etc?
        
        29\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/59afa5832b3c9ea46cf1b3661b7c4d4a?s=75&d=mm&r=g)
            
            Bernd
            
            Hallo Andre,  
              
            nein, muss ich dann gesondert auf meine Adresse mal hochladen.  
            Wird aber dann nächste Woche werden.  
            Oder wie bereits angeboten, kann ich Dir die PHP schicken, da sind mehrere Möglichkeiten als Versuchsaufbau  
              
            Gruß Bernd
            
            31\. Jan 2014 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/bc7aab79d6a38d7b87a6be4b461b174b?s=75&d=mm&r=g)
    
    Mark
    
    Hallo André,  
      
    auch von mir ein DANKE! Lange gesucht und endlich was schönes gefunden!  
      
    Kannst du mir evtl. sagen ob es hier serverseitig Mindestanforderungen gibt? z.b. PHP Version oder ähnliches.  
      
    Denn auf deiner Seite läuft es bei mir und auf der anderen die exakt selbe Seite nicht. Der einzige Unterschied sind die PHP Version und ein paar Einstellungen dort.  
      
    Danke und Gruß,  
    Mark
    
    02\. Oct 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo Mark, das komplette Script ist Clientseitig und hat nix mit der php version zu tun. Man braucht nur html, css und js.  
          
        Grüße Andre
        
        03\. Oct 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/1281a3a67357288b558145cbec0cb76f?s=75&d=mm&r=g)
    
    [Fabian](http://p201055.mittwaldserver.info/testumgebung/in)
    
    Hallo erstmal ;)  
      
    ich bin mir nicht sicher ob meine Nachricht noch gelesen wird aber ich dachte ich kanns ja mal versuchen.  
      
    Zunächst einmal -> DANKE!  
    Hab bestimmt 2 Stunden gesucht bis ich endlich eine einfache und sinnvolle Slideshow gefunden hab, die genau das macht, was ich möchte udn nicht mehr!  
      
    es ist schon fast ungewöhnlich mal vernünftige Hilfe zu bekommen, ohne dafür zahlen zu müssen! an dieser Stelle nochmals Vielen Dank  
    (;  
      
    Nun zu meinem Problem :  
    hab nun hier und da ein wenig rumprobiert aber leider den Fehler nicht gefunden. Das macht mich noch irre (wie man an der aktuellen Uhrzeit sicher erkent)  
      
    Habe alles so eingebaut wie oben beschrieben aber leider funktionieren Die next & prev Button nicht. Der Bildwechlser läuft und sonst passt auch alles.  
      
    nur warum die Button nicht wollen is mir n Rätsel. Vll. kann mir da jmd weiterhelfen?  
      
      
    Vielen Dank und liebe grüße aus Ostfriesland  
      
    Fabian
    
    12\. Sep 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Fabian, natürlich wird deine Frage hier beachtet ;)  
          
        Super, dass dir meine Slideshow gefällt.  
          
        Ich kann dir sicherlich helfen. Hast du mal einen Link da, dass ich vielleicht schauen kann, was Sache ist? Hast du dir mein Beispiel oben angeschaut? Da funktioniert ja alles wie es sollte.  
          
        Grüße  
        André
        
        13\. Sep 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f42e870b64c8e83775f9f82e3f7b3ce7?s=75&d=mm&r=g)
    
    Ulf
    
    Hi,  
      
    bin gerade über dein Tut gestolpert.  
    Leider funktionieren deine Vor- und Zurückbuttons nicht bzw. sind nicht sichtbar.  
      
    Und wie ich aus den Kommentaren lesen kann, würden dem Tut CSS-Angaben und ein wenig mehr Erklärung zum Code, gerade für einen Anfänger, ganz gut stehen. So tippen alle es einfach ab bzw. nutzen C&P und das war's.  
      
    Beste Grüße,  
    Ulf
    
    25\. Jul 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Ulf, da hast du Recht, das Tutorial hatte ich auf die schnelle geschrieben, als ich sie gebaut hatte und wollte sie euch nicht vorenthalten.  
          
        CSS wird sofort oben ergänzt!
        
        25\. Jul 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/ac684a35f6d0e60c706c96f967c99576?s=75&d=mm&r=g)
    
    Alexander Wodjanko
    
    Vielen Dank! Es funktioniert super!  
      
    Wieder was Neues gelernt.
    
    27\. Jun 2013 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2cd9085b96aab39e37d12d9884218d52?s=75&d=mm&r=g)
    
    [Phil](http://www.philamande.de/NextGenWeb/index.html)
    
    Hallo André,  
    du hattest recht, die Slideshow läuft jetzt, allerdings hätte ich noch zwei Fragen.  
    1\. Die Slideshow fängt jetzt wesentlich später an zu laufen, d.H. es dauert ca. 10 Sek. bis die erste Animation beginnt, danach läuft sie flüssig weiter, ist das normal?  
    2\. Ich würde die Bilder gerne verlinken, ich könnte das ja z.B. mit onclick lösen ohne die slide.js bearbeiten zu müssen. Allerdings würde ich das lieber mit einem Anker lösen - kenne mich aber gerade mit jQuery überhaupt nicht aus. Könntest du mir da evtl. zumindest einen Lösungsansatz geben?  
      
    Vielen Dank bis hierhin ;)
    
    15\. Jan 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Jo klar ist das Absicht. Nach 4 Skunden sollte sich das Bild. Ich würde den Link in das HTML schreiben. Dann in der Js anstelle von img a schreiben. Ansonsten geht das mit jQuery so $('a'). click( function() { // do anything}) ;  
          
        Aber davon kann ich nur abraten.
        
        15\. Jan 2013 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/137914391dd932319c6b3e9e6743284f?s=75&d=mm&r=g)
            
            Joachim
            
            Hallo André, erstmal danke für den tollen slider.  
            Leider bin ich nicht ganz so firm in Javascript. ich habe die Slides nun mit einem a-Tag ummantelt, da ich sie verlinken will, Was muss ich denn im slide.js ändern, damit des funktioniert? Über eine Antwort würde ich mich sehr freuen.  
            Viele Grüße  
            Joachim
            
            05\. Jun 2014 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Hallo Joachim, eigentlich sollte es reichen jedes vorkommen von "img" durch "a" zu ersetzen. Ggf. musst du dann auch noch das CSS anpassen.  
                  
                Grüße  
                André
                
                05\. Jun 2014 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/137914391dd932319c6b3e9e6743284f?s=75&d=mm&r=g)
                    
                    Joachim
                    
                    Hallo André,  
                      
                    na klar, das CSS war es ;-) Danke Dir sehr und an alle: Im CSS muss das img auch noch durch das a ausgetauscht werden.  
                      
                    Vielen Dank und nochmals Danke!  
                    Joachim
                    
                    05\. Jun 2014 [Antworten](#)
                    
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Super freut mich, dass es geklappt hat! Danke für den Tipp :)  
                  
                Grüße  
                André
                
                06\. Jun 2014 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/2cd9085b96aab39e37d12d9884218d52?s=75&d=mm&r=g)
    
    [Phil](http://None)
    
    Hey,  
    danke für das Tutorial, nur leider arbeitet das Skript auf meiner Seite irgendwie anders. Das Bild wird zwar ausgeblendet, aber das nächste Bild wird nicht zeitgleich eingeblendet sondern erscheint unmittelbar nach dem ausblenden direkt (also Zack - Bild ist da). Woran könnte das liegen?  
      
    Vielen Dank
    
    14\. Jan 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo, hast du einen Link zu deiner Seite? Hast du vielleicht im Css die Klasse. active mit einem dislay block? Ich denke sonst, dass irgendwo ein Css Fehler ist. Hatte ich beim entwickeln auch.
        
        14\. Jan 2013 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/2cd9085b96aab39e37d12d9884218d52?s=75&d=mm&r=g)
            
            [Phil](http://None)
            
            Hey,  
            habe die seite mal eben hochgeladen:  
            http://www.philamande.de/NextGenWeb/index.html  
              
            Habe das active attribut im Stylesheet nicht verwendet.
            
            14\. Jan 2013 [Antworten](#)
            
        
        *   ![](https://www.gravatar.com/avatar/2cd9085b96aab39e37d12d9884218d52?s=75&d=mm&r=g)
            
            [Phil](http://www.philamande.de/NextGenWeb/index.html)
            
            Hey,  
            habe die Seite mal hochgeladen. Habe die :active Pseudoklasse im stylesheet nicht verwendet. Habe gestern abend noch etwas rumprobiert, aber kam zu keinem Ergebnis.
            
            15\. Jan 2013 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
                
                [André Knieriem](http://www.andreknieriem.de)
                
                Hi Phil, habe es herausgefunden :) Du musst den Bildern in der Slideshow ein position:absolute; top:0;left:0; geben und #slideshow position: relative;  
                  
                Dann klappt es auch :)
                
                15\. Jan 2013 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/7bb96d82c03c4aea17ec197e7b3d91ca?s=75&d=mm&r=g)
    
    [David Selig](http://www.videl-solutions.de)
    
    Falls du den Fehler suchst, warum im Firefox das Bild nach dem Effekt immer ein Pixel breiter wird (so scheint es), habe ich folgende Lösung für dich: Füge für das Bild im Stylesheet ein: box-shadow: 0 0 0 #000000;  
      
    Es ist ein Bug von Firefox.  
      
    Ich hoffe ich konnte dir helfen :-)
    
    04\. Dec 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey David,  
          
        danke für den Tipp! Hatte mich schon gewundert was das ist ;)
        
        05\. Dec 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    dann mit jquery(“außencontainer img“).click...
    
    29\. Jun 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a2e7ffd21fb0de83750ba5dd7264d716?s=75&d=mm&r=g)
    
    Guido Pfeiffer
    
    Hallo  
      
    habe eine css Klasse mit meinbutton erstellt. Danach im jQuery jQuery(“.meinbutton”).click(function() { clearInterval(interval); slideSwitch(1000); }); die klasse geändert.Nun kommt dass Problem.  
    Wenn ich nun mein Bild in die Div Box ( <img src (hier mein Bild einbaue)passiert gar nicht. Ich möchte über das Bild einen Event Händler (onclick) starten und die zurück und vorwärts Funktion starten.  
    Leider bringe ich dass nicht hin.Vielleich kannst du mir helfen .  
    Danke  
    G.Pfeiffer
    
    29\. Jun 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a2e7ffd21fb0de83750ba5dd7264d716?s=75&d=mm&r=g)
    
    Guido Pfeiffer
    
    Hallo.  
      
    Ich möchte einen weiter Button als Bild in die Div Box einbauen.  
    Verstehe leider nicht wie ich dann die next funktion über onclick starten kann.  
    Vielen Dank für Ihre Hilfe.  
      
    Pfeiffer
    
    28\. Jun 2012 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        es ist ganz einfach  
          
        jQuery(".next").click(function() { clearInterval(interval); slideSwitch(1000); });  
          
        .next heißt die Klasse next wird geklickt. also machst du den Button mit der klasse .meinbutton und änderst oben das .next in .meinbutton. Ist es eine id dann #meinbutton.  
          
        Hoffe konnte ich konnte dir weiterhelfen
        
        28\. Jun 2012 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hehe aber klar ;)  
    Du musst einfach an deinen Bildcontainer, folgendes Css hängen.  
      
    left: 0;  
    margin: 0;  
    position: absolute;  
    top: 0;
    
    12\. Dec 2011 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/8aad00a47394cc7fe537e23a036d44da?s=75&d=mm&r=g)
    
    [Lennart](http://www.lennartlanganki.de)
    
    Hallo,  
      
    ich bin gerade auf deine Seite gestoßen und versuche nun die slideshow in meine Seite zu integrieren,  
    da sie schön schlicht ist. Vielen Dank erstmal für das Tutorial. Leider habe ich Probleme mit der Einbindung.  
      
    auf meiner Seite kannst Du schauen wie sich das Problem äußert. Die Bilder werden untereinander angezeigt  
    und sind am Anfang nicht unsichtbar. Liegt es an der Formatierung des div-tags oder an der slide.js?  
      
    Meine Bilder sollen nicht gleich groß sein. Außerdem würde ich gern auf die automatische (zeitbasierte) Variante der Slideshow verzichten, und nur bei Mausaktion einen Bildaustausch erzeugen.  
      
    Leider bin ich nicht besonders fit was html, CSS und Co. angeht. Wär schön, wenn Du einen Tipp hast.  
      
    Falls nicht erstmal vielen Dank für deine Arbeit.  
      
    Beste Grüße  
      
    Lennart
    
    11\. Dec 2011 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.