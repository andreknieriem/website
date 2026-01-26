---
title: 'Wordpress: Menu als Select/Dropdown für Mobile Seiten'
date: '2014-04-30T19:09:26.000Z'
slug: wordpress-menu-als-selectdropdown-fuer-mobile-seiten
tags:
  - '9'
  - '11'
  - '151'
  - '237'
  - '474'
  - '475'
  - '476'
  - '477'
description: "Für mobile, bzw. responsive Webseiten bieten sich Menüs in einem Standard Select-Feld an, da jeder mobile Browser diese Menüs darstellen kann und die Umsetzung deutlich beschleunigt wird.\nUm das Ganze in Wordpress zu benutzen benötigt ihr einen sogenannten Walker. Im Folgenden ist einmal der Code, den ihr in euer Template einfügen müsst und einmal der Walker, der in die functions.php eures Templates gehört.\nMenücode \r\n&lt;?php\r\nwp_nav_menu( array(\r\n\t'theme_location' =&gt; 'primary',\r\n\t'walker'         =&gt; new Walker_Nav_Menu_Dropdown(),\r\n\t'items_wrap'     =&gt; '&lt;div class=\"mobile-menu\"&gt;&lt;form&gt;&lt;select onchange=\"if (this.value) window.location.href=this.value\"&gt;%3$s&lt;/select&gt;&lt;/form&gt;&lt;/div&gt;',\r\n) ); \r\n?&gt;\r\n functions.php \r\nclass Walker_Nav_Menu_Dropdown extends Walker_Nav_Menu {\r\n\tfunction start_lvl(&amp;$output, $depth){\r\n\t\t$indent = str_repeat(\"\\t\", $depth); // remove children opening tag (`&lt;ul&gt;`)\r\n\t}\r\n \r\n\tfunction end_lvl(&amp;$output, $depth){\r\n\t\t$indent = str_repeat(\"\\t\", $depth); // remove children closing tag\r\n\t}\r\n \r\n\t/**\r\n\t* Start the element output.\r\n\t*\r\n\t* @param  string $output Passed by reference. Used to append additional content.\r\n\t* @param  object $item   Menu item data object.\r\n\t* @param  int $depth     Depth of menu item. May be used for padding.\r\n\t* @param  array $args    Additional strings.\r\n\t* @return void\r\n\t*/\r\n\tfunction start_el(&amp;$output, $item, $depth, $args) {\r\n \t\t$url = '#' !== $item-&gt;url ? $item-&gt;url : '';\r\n\t\t$deptsign = '-';\r\n\t\t$level = str_repeat($deptsign,$depth);\r\n \t\t$output .= '&lt;option value=\"' . $url . '\"&gt;' . $level.$item-&gt;title; \r\n\t}\t\r\n \r\n\tfunction end_el(&amp;$output, $item, $depth){\r\n\t\t$output .= \"&lt;/option&gt;\\n\"; // replace closing &lt;/li&gt; with the option tag\r\n\t}\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Wordpress: Menu als Select/Dropdown für Mobile Seiten

#Tutorials#Wordpress

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#mobile](/tag.html?tag=9&cHash=b5bd1bd63dee0e1cdebd12b261ae5e41)[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#responsive](/tag.html?tag=237&cHash=569f7227e8743f4f4351acefa1cf974a)[#menu](/tag.html?tag=474&cHash=afa1a85544c323a01d349889dfb80551)[#walker](/tag.html?tag=475&cHash=fd8395136de6125e1f8dd594eb0eeb7b)[#option](/tag.html?tag=476&cHash=7d4b15733db1a4b4a7a6a237e216052a)[#dropdown](/tag.html?tag=477&cHash=39762b1691dacc66846b043cfb9cc842)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. Apr 2014

Für mobile, bzw. responsive Webseiten bieten sich Menüs in einem Standard Select-Feld an, da jeder mobile Browser diese Menüs darstellen kann und die Umsetzung deutlich beschleunigt wird.

Um das Ganze in Wordpress zu benutzen benötigt ihr einen sogenannten Walker. Im Folgenden ist einmal der Code, den ihr in euer Template einfügen müsst und einmal der Walker, der in die functions.php eures Templates gehört.

**Menücode**

```

<?php
wp_nav_menu( array(
	'theme_location' => 'primary',
	'walker'         => new Walker_Nav_Menu_Dropdown(),
	'items_wrap'     => '<div class="mobile-menu"><form><select onchange="if (this.value) window.location.href=this.value">%3$s</select></form></div>',
) ); 
?>
```

**functions.php**

```

class Walker_Nav_Menu_Dropdown extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth){
		$indent = str_repeat("\t", $depth); // remove children opening tag (`<ul>`)
	}
 
	function end_lvl(&$output, $depth){
		$indent = str_repeat("\t", $depth); // remove children closing tag
	}
 
	/**
	* Start the element output.
	*
	* @param  string $output Passed by reference. Used to append additional content.
	* @param  object $item   Menu item data object.
	* @param  int $depth     Depth of menu item. May be used for padding.
	* @param  array $args    Additional strings.
	* @return void
	*/
	function start_el(&$output, $item, $depth, $args) {
 		$url = '#' !== $item->url ? $item->url : '';
		$deptsign = '-';
		$level = str_repeat($deptsign,$depth);
 		$output .= '<option value="' . $url . '">' . $level.$item->title; 
	}	
 
	function end_el(&$output, $item, $depth){
		$output .= "</option>\n"; // replace closing </li> with the option tag
	}
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/aef52368f5ab07bc942f2548a832b5f1?s=75&d=mm&r=g)
    
    Jo
    
    Hi,  
      
    ich bin gerade über die Lösung das WP-Menü als Auswahlbox darzustellen gestpoßen! Läuft sogar :)  
    Vielen herzlichen Dank.  
      
    Eine wichtige Frage: ist es möglich, dass nach der Auswahl wenn die Seite gewechselt wurde die aktuelle Seite in der Box steht? Außerdem kommt man wenn man einmal gewechselt hat nicht zurück zur ersten Seite... woran kann das liegen?  
      
    Wäre für Hilfe echt dankbar!  
      
    Liebe Grüße  
    der Jo
    
    28\. Jan 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.