---
title: Wordpress Paginierung-Funktion
date: '2011-04-07T10:55:26.000Z'
slug: wordpress-paginierung-funktion
tags:
  - '12'
  - '13'
  - '14'
  - '15'
description: "\nIn diesem Tutorial habe ich eine Funktion für euch, die eine Paginierung in eurem Wordpress-Blog hinzufügt.\nEs ist relativ einfach - Fügt einfach die folgende Funktion in eure functions.php ein.\n \r\nfunction get_pagination($range = 4){\r\n  // $paged - Nummer der derzeitigen Seite\r\n  global $paged, $wp_query;\r\n  // Wieviele Seiten haben wir?\r\n  if ( !$max_page ) {\r\n    $max_page = $wp_query-&gt;max_num_pages;\r\n  }\r\n  // Wir brauchen die Paginierung nur wenn es mehr als eine Seite gibt\r\n  if($max_page &gt; 1){\r\n    if(!$paged){\r\n      $paged = 1;\r\n    }\r\n    // Auf der ersten brauchen wir nicht den Erste-Link\r\n    if($paged != 1){\r\n      echo \"&lt;a href=\" . get_pagenum_link(1) . \"&gt; Erste &lt;/a&gt;\";\r\n    }\r\n    // Zu vorherigen Seite\r\n    previous_posts_link(' « ');\r\n    // Wir brauchen den Slideeffekt nur, wenn die Seiten den Umfang ($range) uebersteigt\r\n    if($max_page &gt; $range){\r\n      // When closer to the beginning\r\n      if($paged &lt; $range){\r\n        for($i = 1; $i &lt;= ($range + 1); $i++){\r\n          echo \"&lt;a href='\" . get_pagenum_link($i) .\"'\";\r\n          if($i==$paged) echo \"class='current'\";\r\n          echo \"&gt;$i&lt;/a&gt;\";\r\n        }\r\n      }\r\n      //Wenn wir uns dem Ende naehern\r\n      elseif($paged &gt;= ($max_page - ceil(($range/2)))){\r\n        for($i = $max_page - $range; $i &lt;= $max_page; $i++){\r\n          echo \"&lt;a href='\" . get_pagenum_link($i) .\"'\";\r\n          if($i==$paged) echo \"class='current'\";\r\n          echo \"&gt;$i&lt;/a&gt;\";\r\n        }\r\n      }\r\n      // Irgendwo in der Mitte\r\n      elseif($paged &gt;= $range &amp;&amp; $paged &lt; ($max_page - ceil(($range/2)))){\r\n        for($i = ($paged - ceil($range/2)); $i &lt;= ($paged + ceil(($range/2))); $i++){\r\n          echo \"&lt;a href='\" . get_pagenum_link($i) .\"'\";\r\n          if($i==$paged) echo \"class='current'\";\r\n          echo \"&gt;$i&lt;/a&gt;\";\r\n        }\r\n      }\r\n    }\r\n    // Weniger Seiten als der Umfang - keine Slide noetig\r\n    else{\r\n      for($i = 1; $i &lt;= $max_page; $i++){\r\n        echo \"&lt;a href='\" . get_pagenum_link($i) .\"'\";\r\n        if($i==$paged) echo \"class='current'\";\r\n        echo \"&gt;$i&lt;/a&gt;\";\r\n      }\r\n    }\r\n    // Naechste Seite\r\n    next_posts_link(' » ');\r\n    // Auf der letzten Seite kein Letzte-Link\r\n    if($paged != $max_page){\r\n      echo \" &lt;a href=\" . get_pagenum_link($max_page) . \"&gt; Letzte &lt;/a&gt;\";\r\n    }\r\n  }\r\n}\r\n Ich habe sie mit deutschen Kommentaren versehen, damit man weiß, wo was passiert. Als nächstes müsst ihr die Funktion nur aufrufen. Am besten sucht ihr in eurem Template, wo die Paginierung sonst erstellt wird. Bei Twentyten beispielsweise ist sie in der loop.php ganz oben und ganz unten. Dort fügt ihr dann folgenden Code ein: \r\n&lt;div class=\"paginationBottom\"&gt;\r\n\t&lt;?php get_pagination(); ?&gt;\r\n&lt;/div&gt;\r\n Wenn ihr das erledigt habt, sollte schonmal die Paginierung herauskommen, aber ungestylt.\nDas Styling auf meiner Seite sieht wie folgt aus. Natürlich könnt ihr die das Styling individuell anpassen. \r\n/* Pagination */\r\n\r\n.paginationBottom {\r\n\tdisplay: block;\r\n\ttext-align: right;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.paginationBottom a{\r\n\ttext-align:center;\r\n\tpadding:5px 10px;\r\n\tmargin:0 2px 0 2px;\r\n\tborder:1px solid #58585A;\r\n}\r\n.paginationBottom a:hover{\r\n\tbackground:#8cc01e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.paginationBottom a.current {\r\n\tborder: 1px solid #F5F5F5;\r\n}\r\n "
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

[![](http://andreknieriem.de/wp-content/uploads/2011/04/paginierung1.jpg "Paginierung")](http://andreknieriem.de/wp-content/uploads/2011/04/paginierung1.jpg)

In diesem Tutorial habe ich eine Funktion für euch, die eine Paginierung in eurem [Wordpress-Blog](http://wordpress.org/) hinzufügt.

Es ist relativ einfach - Fügt einfach die folgende Funktion in eure functions.php ein.

```

function get_pagination($range = 4){
  // $paged - Nummer der derzeitigen Seite
  global $paged, $wp_query;
  // Wieviele Seiten haben wir?
  if ( !$max_page ) {
    $max_page = $wp_query->max_num_pages;
  }
  // Wir brauchen die Paginierung nur wenn es mehr als eine Seite gibt
  if($max_page > 1){
    if(!$paged){
      $paged = 1;
    }
    // Auf der ersten brauchen wir nicht den Erste-Link
    if($paged != 1){
      echo "<a href=" . get_pagenum_link(1) . "> Erste </a>";
    }
    // Zu vorherigen Seite
    previous_posts_link(' « ');
    // Wir brauchen den Slideeffekt nur, wenn die Seiten den Umfang ($range) uebersteigt
    if($max_page > $range){
      // When closer to the beginning
      if($paged < $range){
        for($i = 1; $i <= ($range + 1); $i++){
          echo "<a href='" . get_pagenum_link($i) ."'";
          if($i==$paged) echo "class='current'";
          echo ">$i</a>";
        }
      }
      //Wenn wir uns dem Ende naehern
      elseif($paged >= ($max_page - ceil(($range/2)))){
        for($i = $max_page - $range; $i <= $max_page; $i++){
          echo "<a href='" . get_pagenum_link($i) ."'";
          if($i==$paged) echo "class='current'";
          echo ">$i</a>";
        }
      }
      // Irgendwo in der Mitte
      elseif($paged >= $range && $paged < ($max_page - ceil(($range/2)))){
        for($i = ($paged - ceil($range/2)); $i <= ($paged + ceil(($range/2))); $i++){
          echo "<a href='" . get_pagenum_link($i) ."'";
          if($i==$paged) echo "class='current'";
          echo ">$i</a>";
        }
      }
    }
    // Weniger Seiten als der Umfang - keine Slide noetig
    else{
      for($i = 1; $i <= $max_page; $i++){
        echo "<a href='" . get_pagenum_link($i) ."'";
        if($i==$paged) echo "class='current'";
        echo ">$i</a>";
      }
    }
    // Naechste Seite
    next_posts_link(' » ');
    // Auf der letzten Seite kein Letzte-Link
    if($paged != $max_page){
      echo " <a href=" . get_pagenum_link($max_page) . "> Letzte </a>";
    }
  }
}
```

Ich habe sie mit deutschen Kommentaren versehen, damit man weiß, wo was passiert. Als nächstes müsst ihr die Funktion nur aufrufen. Am besten sucht ihr in eurem Template, wo die Paginierung sonst erstellt wird. Bei Twentyten beispielsweise ist sie in der loop.php ganz oben und ganz unten. Dort fügt ihr dann folgenden Code ein:

<div class="paginationBottom">
	<?php get\_pagination(); ?>
</div>

Wenn ihr das erledigt habt, sollte schonmal die Paginierung herauskommen, aber ungestylt.

Das Styling auf meiner Seite sieht wie folgt aus. Natürlich könnt ihr die das Styling individuell anpassen.

```

/* Pagination */

.paginationBottom {
	display: block;
	text-align: right;
	margin-top: 10px;
	margin-bottom: 30px;
}
.paginationBottom a{
	text-align:center;
	padding:5px 10px;
	margin:0 2px 0 2px;
	border:1px solid #58585A;
}
.paginationBottom a:hover{
	background:#8cc01e;
	color: #fff;
}

.paginationBottom a.current {
	border: 1px solid #F5F5F5;
}
```