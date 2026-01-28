---
title: 'Wordpress: Problemlösung für fehlende Adminbar in Wordpress Templates'
date: '2017-02-19T23:00:00.000Z'
slug: wordpress-problemloesung-fuer-fehlende-adminbar-in-wordpress-templates
tags:
  - '11'
  - '962'
  - '963'
  - '964'
  - '738'
  - '131'
  - '965'
  - '966'
description: "Hat man das Problem, dass bei einem Template, selbst gebaut oder nicht, die Admin-Bar von Wordpress nicht angezeigt wird, dann liegt das meistens an fehlenden Wordpress Standardfunktionen im Header und im Footer. \r\nHaltet Ausschau nach diesen beiden Aufrufen:&nbsp; wp_head(); in header.php für CSS\r\n&lt;head&gt;\r\n  &lt;?php \r\n    wp_head(); \r\n  ?&gt;\r\n&lt;/head&gt;\r\n\r\nwp_footer(); in footer.php für Javascript\r\n&lt;?php \r\n  wp_footer();\r\n?&gt;\r\n"
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Hat man das Problem, dass bei einem Template, selbst gebaut oder nicht, die Admin-Bar von Wordpress nicht angezeigt wird, dann liegt das meistens an fehlenden Wordpress Standardfunktionen im Header und im Footer.

Haltet Ausschau nach diesen beiden Aufrufen: 

**wp\_head(); in header.php für CSS**

```
<head>
  <?php 
    wp_head(); 
  ?>
</head>
```

**wp\_footer(); in footer.php für Javascript**

```
<?php 
  wp_footer();
?>
```