---
title: Einfache jQuery Slideshow mit Vor- und Zurück-Button
date: '2011-04-07T16:56:25.000Z'
slug: einfache-jquery-slideshow-mit-vor-und-zurueck-button
tags:
  - back
  - button
  - easy
  - einfach
  - jquery
  - previous
  - slideshow
  - vor
  - zurück
description: "\n\n\n\n\nIn diesem Tutorial zeige ich, wie man eine simple, aber funktionstüchtige und schöne Slideshow mit jQuery erstellt. Die Funktion kann den eigenen Wünschen angepasst werden und ist auch für Text, oder sonstige Elemente geeignet.\nWas wird benötigt?jQuery\nGrundkenntnisse von Html und jQuery\nHtml Grundgerüst \r\n&lt;script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js\"&gt;&lt;/script&gt;\r\n&lt;script type=\"text/javascript\" src=\"slide.js\"&gt;&lt;/script&gt;\r\n&lt;div id=\"slideShow\"&gt;\r\n\t&lt;img src=\"slide1.jpg\"&gt;\r\n\t&lt;img src=\"slide2.jpg\"&gt;\r\n\t&lt;img src=\"slide3.jpg\"&gt;\r\n    &lt;div class=\"next\"&gt;&lt;/div&gt;\r\n    &lt;div class=\"prev\"&gt;&lt;/div&gt;\r\n&lt;/div&gt;\r\n CSS \r\n\r\n#slideShow {\r\n  position: relative;\r\n  width: 700px; /*kann natürlich angepasst werden auf eure Größen */\r\n  height: 360px; /*kann natürlich angepasst werden auf eure Größen */\r\n}\r\n\r\n#slideShow img {\r\n  position: absolute;\r\n  display: none;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n/* Die Vor und Zurückbuttons könnt ihr so stylen und hinpacken wo ihr wollt beispielsweise so*/\r\n\r\n#slideShow .next {\r\n  width: 20px;\r\n  height: 360px;\r\n  position: absolute;\r\n  background-color: #ccc;\r\n  cursor: pointer;\r\n  right: 0;\r\n}\r\n\r\n#slideShow .prev{\r\n  width: 20px;\r\n  height: 360px;\r\n  position: absolute;\r\n  background-color: #ccc;\r\n  cursor: pointer;\r\n  left: 0;\r\n}\r\n Man benötigt einen Container, in dem wie bei meinem Beispiel die Objekte sind, die in die Slideshow sollen. Die Vor. und Zurück-Knöpfe müssen nicht unbedingt in den Container, ich bilde es aber so ab, wie es oben zu sehen ist.\nAls nächstes bauen wir die jQuery Funktion:\nslide.js \r\nfunction slideSwitch(switchSpeed) {\r\n    var $active = jQuery('#slideShow img.active');\r\n\r\n    if ( $active.length == 0 ) $active = jQuery('#slideShow img:last');\r\n\r\n    var $next =  $active.next('img').length ? $active.next('img')\r\n       : jQuery('#slideShow img:first');\r\n\r\n    $active.addClass('last-active').fadeOut(switchSpeed);\r\n\r\n\t$next.addClass('active').fadeIn(switchSpeed);\r\n\t$active.removeClass('active last-active');\r\n}\r\n\r\njQuery(function() {\r\n    interval = \"\";\r\n    jQuery('#slideShow img:first').css(\"display\", \"block\").addClass('active');\r\n    interval = setInterval ( \"slideSwitch(1000)\", 4000 );\r\n});\r\n Diese Funktion startet die Slideshow und wechselt alle 4 Skunden das Bild.\nNun wollen wir aber noch nen Vor- und Zurückknopf haben.\nAlso fügen wir unter der Funktion noch 2 Funktionen hinzu.\nAlso so: \r\njQuery('#slideShow img:first').css(\"display\", \"block\").addClass('active');\r\n\r\n// Die Next Function haben wir in der eigentlichen Funktion ja schon drin, also rufen wir die\r\n// Funktion auf und stoppen das Intervall, damit die Slideshow nicht weiterlaeuft\r\n\r\njQuery(\".next\").click(function() {\r\n\tclearInterval(interval);\r\n\tslideSwitch(1000);\r\n});\r\n\r\n// Nun die Zurueck-Funktion\r\njQuery(\".prev\").click(function() {\r\n\tclearInterval(interval);\r\n\tvar $active = jQuery('#slideShow img.active');\r\n\r\n\tif ( $active.length == 0 ) $active = jQuery('#slideShow img:first');\r\n\r\n\tvar $next =  $active.prev('img').length ? $active.prev('img')\r\n       : jQuery('#slideShow img:last');\r\n\r\n\t$active.addClass('last-active').fadeOut(1000);\r\n\r\n\t$next.addClass('active').fadeIn(1000);\r\n\t$active.removeClass('active last-active');\r\n});\r\n Das war auch schon alles. Ich hoffe ich konnte euch damit weiterhelfen. Für Anregungen und Verbesserungen der Funktion bin ich offen.\nHier noch einmal die slide.js"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

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