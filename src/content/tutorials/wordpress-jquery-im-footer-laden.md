---
title: 'Wordpress: jQuery im Footer laden'
date: '2015-05-02T16:49:35.000Z'
slug: wordpress-jquery-im-footer-laden
tags:
  - wordpress
  - jquery
  - page
  - Google
  - footer
  - insights
description: "Möchte man jQuery im Footer laden, um die Ladezeiten und die Wertung von Google zu verbessern, so lässt sich das so machen:\nNormales Einbinden von jQuery in der functions.php \r\nwp_enqueue_script('jquery');    \r\n Neue Funktion für eure functions.php im Theme Ordner \r\nfunction my_init()   \r\n{  \r\n    if (!in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php')) &amp;&amp; !is_admin())      \r\n    {  \r\n        wp_deregister_script('jquery');  \r\n  \r\n        // Nun jQuery aus wp-includes laden\r\n        wp_register_script('jquery', '/wp-includes/js/jquery/jquery.js', FALSE, '1.11.0', TRUE);  \r\n  \r\n        wp_enqueue_script('jquery');  \r\n    }  \r\n}  \r\nadd_action('init', 'my_init');  \r\n "
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Möchte man jQuery im Footer laden, um die Ladezeiten und die Wertung von Google zu verbessern, so lässt sich das so machen:

**Normales Einbinden von jQuery in der functions.php**

```php

wp_enqueue_script('jquery');    

```

**Neue Funktion für eure functions.php im Theme Ordner**

```php

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