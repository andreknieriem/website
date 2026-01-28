---
title: 'Wordpress: jQuery im Footer laden'
date: '2015-05-02T16:49:35.000Z'
slug: wordpress-jquery-im-footer-laden
tags:
  - '11'
  - '20'
  - '43'
  - '259'
  - '664'
  - '665'
description: "Möchte man jQuery im Footer laden, um die Ladezeiten und die Wertung von Google zu verbessern, so lässt sich das so machen:\nNormales Einbinden von jQuery in der functions.php \r\nwp_enqueue_script('jquery');    \r\n Neue Funktion für eure functions.php im Theme Ordner \r\nfunction my_init()   \r\n{  \r\n    if (!in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php')) &amp;&amp; !is_admin())      \r\n    {  \r\n        wp_deregister_script('jquery');  \r\n  \r\n        // Nun jQuery aus wp-includes laden\r\n        wp_register_script('jquery', '/wp-includes/js/jquery/jquery.js', FALSE, '1.11.0', TRUE);  \r\n  \r\n        wp_enqueue_script('jquery');  \r\n    }  \r\n}  \r\nadd_action('init', 'my_init');  \r\n "
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Wordpress#jQuery

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#page](/tag.html?tag=43&cHash=4e5734e50e9c8710133350eec6636569)[#Google](/tag.html?tag=259&cHash=b1ab39e7e8f860481faa9bb151ed2ce4)[#footer](/tag.html?tag=664&cHash=fa4473eaf78f8ae4f5915e45ed8f7ca7)[#insights](/tag.html?tag=665&cHash=3d2ce563de67c3fbed1a6f19db2abbce)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. May 2015

Möchte man jQuery im Footer laden, um die Ladezeiten und die Wertung von Google zu verbessern, so lässt sich das so machen:

**Normales Einbinden von jQuery in der functions.php**

```

wp_enqueue_script('jquery');    
```

**Neue Funktion für eure functions.php im Theme Ordner**

```

function my_init()   
{  
    if (!in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php')) && !is_admin())      
    {  
        wp_deregister_script('jquery');  
  
        // Nun jQuery aus wp-includes laden
        wp_register_script('jquery', '/wp-includes/js/jquery/jquery.js', FALSE, '1.11.0', TRUE);  
  
        wp_enqueue_script('jquery');  
    }  
}  
add_action('init', 'my_init');  
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.