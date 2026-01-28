---
title: Element beim Scrollen fixieren mit jQuery
date: '2011-08-05T08:35:15.000Z'
slug: element-beim-scrollen-fixieren-mit-jquery
tags:
  - jquery
  - fixed
  - floating element
  - scroll
  - tutorial
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
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

<script type="text/javascript" src="/wp-content/themes/thematicpowerblog/scrollcontainer.js"></script>

[![](http://andreknieriem.de/wp-content/uploads/2011/08/jquery-394x300.jpg "jquery")](http://andreknieriem.de/wp-content/uploads/2011/08/jquery.jpg)

Ich habe ein schönes kleines Skript entdeckt was sicherlich dem Einen oder Anderen helfen könnte. Es handelt sich hierbei um Skript, dass ein Element mitscrollen lässt. Das ist manchmal vom Kunden gewünscht. Bei mir handelte es sich um ein Callback-Formular, dass immer rechts an derselben Stelle stehen sollte, auch beim Scrollen. Um das ganze zu realisieren braucht ihr nur folgenden Code.

Eine Demo habe ich direkt hier eingebunden. Die Facebook Likebox scrollt immer mit. ;)

<script src="http://connect.facebook.net/en\_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/andreknieriemde" width="292" show\_faces="true" border\_color="" stream="false" header="true"></fb:like-box>

Fangen wir an mit dem HTML und CSS Markup:

```html4strict

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

```javascript

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