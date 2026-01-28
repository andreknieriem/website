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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Wordpress#PHP

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#anzeigen](/tag.html?tag=131&cHash=e320e0c23c97b3855a42f9242a0e4bf0)[#fehler](/tag.html?tag=738&cHash=aac2b4c247bb3870ac4fdfcded4ec6b3)[#adminbar](/tag.html?tag=962&cHash=6f22052d01e014137dcad37e5cd252da)[#missing](/tag.html?tag=963&cHash=234e8d35022141f3ddb5dd0d86dc3ded)[#fehlt](/tag.html?tag=964&cHash=c3a221993af4ff2aba7b3b5822665394)[#admin](/tag.html?tag=965&cHash=16b366b7e3d7c101ae5ab783ae606494)[#header](/tag.html?tag=966&cHash=b668384b3518a165a8d82bc17a1aa548)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. Feb 2017

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.