---
title: Element beim Scrollen fixieren mit jQuery
date: '2011-08-05T08:35:15.000Z'
slug: element-beim-scrollen-fixieren-mit-jquery
tags:
  - '20'
  - '59'
  - '60'
  - '61'
  - '62'
description: >-


  Ich habe ein schönes kleines Skript entdeckt was sicherlich dem Einen oder
  Anderen helfen könnte. Es handelt sich hierbei um Skript, dass ein Element
  mitscrollen lässt. Das ist manchmal vom Kunden gewünscht. Bei mir handelte es
  sich um ein Callback-Formular, dass immer rechts an derselben Stelle stehen
  sollte, auch beim Scrollen. Um das ganze zu realisieren braucht ihr nur
  folgenden Code.

  Eine Demo habe ich direkt hier eingebunden. Die Facebook Likebox scrollt immer
  mit. ;)






  Fangen wir an mit dem HTML und CSS Markup: 

  &lt;style&gt;

  /* required to avoid jumping */

  #commentWrapper {
    left: 450px;
    position: absolute;
    margin-left: 35px;
    width: 280px;
  }


  #comment {
    position: absolute;
    top: 0;
    /* just used to show how to include the margin in the effect */
    margin-top: 20px;
    border-top: 1px solid purple;
    padding-top: 19px;
  }


  #comment.fixed {
    position: fixed;
    top: 0;
  }

  &lt;/style&gt;

  &lt;div class="facebookbox"&gt;
    &lt;div class="facebookbox"&gt;
      &lt;form&gt;
        &lt;!-- take their response --&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
   Und nun kommen wir zum Javascript: 
  jQuery(document).ready(function () {
    var top = jQuery('.facebookbox').offset().top - parseFloat(jQuery('.facebookbox').css('marginTop').replace(/auto/, 0));
    jQuery(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = jQuery(this).scrollTop();
      // whether that's below the form
      if (y &gt;= top) {
        // if so, ad the fixed class
        jQuery('.facebookbox').addClass('fixed');
      } else {
        // otherwise remove it
        jQuery('.facebookbox').removeClass('fixed');
      }
    });
  });
   Was macht das Skript?
  1. Es ermittelt die Position des Containers der ganzen Seite

  2. Danach ermittelt es die Position des Containers

  3. Wenn man Scrollt werden die beiden Werte verglichen.

  4. Würde man den Container herausscrollen wird ihm die Klasse "fixed" gegeben,
  die dem Container die Position Fixed gibt und somit immer an der selben Stelle
  bleibt.
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Element beim Scrollen fixieren mit jQuery

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#fixed](/tag.html?tag=59&cHash=9991306b141592416f260360789cd203)[#floating element](/tag.html?tag=60&cHash=43bcb8e8e2c70689cdc9b665b8a2c26e)[#scroll](/tag.html?tag=61&cHash=5a73bee04896e919a772699d1f0b0bcd)[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Aug 2011

<script type="text/javascript" src="/wp-content/themes/thematicpowerblog/scrollcontainer.js"></script>

[![](http://andreknieriem.de/wp-content/uploads/2011/08/jquery-394x300.jpg "jquery")](http://andreknieriem.de/wp-content/uploads/2011/08/jquery.jpg)

Ich habe ein schönes kleines Skript entdeckt was sicherlich dem Einen oder Anderen helfen könnte. Es handelt sich hierbei um Skript, dass ein Element mitscrollen lässt. Das ist manchmal vom Kunden gewünscht. Bei mir handelte es sich um ein Callback-Formular, dass immer rechts an derselben Stelle stehen sollte, auch beim Scrollen. Um das ganze zu realisieren braucht ihr nur folgenden Code.

Eine Demo habe ich direkt hier eingebunden. Die Facebook Likebox scrollt immer mit. ;)

<script src="http://connect.facebook.net/en\_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/andreknieriemde" width="292" show\_faces="true" border\_color="" stream="false" header="true"></fb:like-box>

Fangen wir an mit dem HTML und CSS Markup:

```

<style>
/* required to avoid jumping */
#commentWrapper {
  left: 450px;
  position: absolute;
  margin-left: 35px;
  width: 280px;
}

#comment {
  position: absolute;
  top: 0;
  /* just used to show how to include the margin in the effect */
  margin-top: 20px;
  border-top: 1px solid purple;
  padding-top: 19px;
}

#comment.fixed {
  position: fixed;
  top: 0;
}
</style>
<div class="facebookbox">
  <div class="facebookbox">
    <form>
      <!-- take their response -->
    </form>
  </div>
</div>
```

Und nun kommen wir zum Javascript:

```

jQuery(document).ready(function () {
  var top = jQuery('.facebookbox').offset().top - parseFloat(jQuery('.facebookbox').css('marginTop').replace(/auto/, 0));
  jQuery(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = jQuery(this).scrollTop();
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      jQuery('.facebookbox').addClass('fixed');
    } else {
      // otherwise remove it
      jQuery('.facebookbox').removeClass('fixed');
    }
  });
});
```

Was macht das Skript?

1\. Es ermittelt die Position des Containers der ganzen Seite

2\. Danach ermittelt es die Position des Containers

3\. Wenn man Scrollt werden die beiden Werte verglichen.

4\. Würde man den Container herausscrollen wird ihm die Klasse "fixed" gegeben, die dem Container die Position Fixed gibt und somit immer an der selben Stelle bleibt.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hi Frank,  
      
    sry nach dem Redesign der Seite sind einige Dinger kaputt gegangen, die ich nicht sehen konnte.  
      
    Also ansich ist es relativ einfach:  
      
    1: Binde jQuery auf deine Seite ein.  
      
      
      
    2: Erstelle eine JS Datei und lade Sie hinter deinem jQuery.  
    3: Dann füge meinen oben genannten Code ein, wobei du jQuery('.facebookbox') durch dein Objekt ersetzt. also '.asda' für eine Klasse und '#asdasd' für eine ID.  
    4: Dann noch in dem CSS sagen, dass wenn das Objekt die Klasse fixed hat, es position:fixed bekommt.  
      
    Das wars.  
      
    Viele Grüße
    
    20\. Aug 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/b23fa9482925b5b89232221c9a1b63bb?s=75&d=mm&r=g)
    
    Frank Dinslaken
    
    Leider sehe ich den Effekt hier auf der Seite nicht.  
      
    Würde gerne meine linke Spalte so scrollbar machen, dass sie nur bis zu einem bestimmten Wert mitscrollt.  
    Zur Zeit habe ich nur die Optionen "fixed", was aber zu statisch ist, und nicht aussieht.  
    Ansonsten verschwindet die linke Spalte unter meinem fixierten Header.  
      
    Deine Lösung klingt nach meiner! ;)  
    Habe aber noch nie was mit Jquery gemacht.  
    Wie bindest Du die nötigen Dateien ein?  
      
    Grüße  
    Frank
    
    20\. Aug 2012 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.