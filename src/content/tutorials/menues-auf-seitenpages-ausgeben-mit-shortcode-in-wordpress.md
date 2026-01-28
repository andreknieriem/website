---
title: Menüs auf Seiten/Pages ausgeben mit Shortcode in Wordpress
date: '2011-07-23T14:33:16.000Z'
slug: menues-auf-seitenpages-ausgeben-mit-shortcode-in-wordpress
tags:
  - wordpress
  - menu in page
  - page
  - seite
  - shortcode
  - sitemap
description: "\nIch wollte eine Sitemap meiner Webseite haben, die einfach alle Punkte auf einmal aus meinem selbst erstellten Hauptmenü ausgibt. Das musste natürlich auf einer Seite/Page sein und so habe ich mich umgeguckt und eine Funktion gefunden, die genau das bewerkstelligt. Die Funktion findet ihr unten. Fügt einfach den Code in eure function.php ein und schon habt ihr alles installiert was ihr braucht. Danach einfach [menu name=\"Name eures Menüs\"] in eure Seite/page einfügen und schon kommt das gewünschte Menü an der Stelle heraus. \r\n&lt;?php\r\nfunction print_menu_shortcode($atts, $content = null) {\r\n    extract(shortcode_atts(array( 'name' =&gt; null, ), $atts));\r\n    return wp_nav_menu( array( 'menu' =&gt; $name, 'echo' =&gt; false ) );\r\n}\r\nadd_shortcode('menu', 'print_menu_shortcode');\r\n\r\n?&gt;\r\n "
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

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