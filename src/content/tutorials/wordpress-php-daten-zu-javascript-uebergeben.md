---
title: 'Wordpress: PHP Daten zu Javascript übergeben'
date: '2015-11-24T17:00:09.000Z'
slug: wordpress-php-daten-zu-javascript-uebergeben
tags:
  - '11'
  - '41'
  - '69'
  - '211'
  - '777'
  - '792'
description: "Möchte man in Wordpress Daten von PHP ans Javascript übergeben, so kann man dies mit der wp_localize_script tun. Diese war einst dafür gedacht, Übersetzungen in Javascript zu Verfügung zu stellen. Allerdings kann man dort jede beliebige Variable hinschicken. Um das Ganze nun zu benutzen müsst ihr folgendes tun:\nIn der Functions.php \r\nwp_enqueue_script( 'test', get_template_directory_uri() . '/js/test.js' ); // eure test.js Datei, die Daten bekommen soll\r\n \r\n$dataToBePassed = array(\r\n    'foo' =&gt; 'Test Variable',\r\n    'bar' =&gt; __( 'Please wait...', 'default' )\r\n);\r\nwp_localize_script( 'my_js_library', 'php_vars', $datatoBePassed );\r\n In der Javascript-Datei test.js \r\nconsole.log(php_vars.foo);\r\nconsole.log(php_vars.bar);\r\n\r\n// Ausgabe\r\n// Hier kommen dann \"Test Variable\" und \"Please wait...\" wie gewünscht als Daten an.\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Wordpress: PHP Daten zu Javascript übergeben

#Tutorials#Wordpress#PHP#Javascript

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#functions](/tag.html?tag=211&cHash=bff81af22a8cca726548715ee64f36ee)[#data](/tag.html?tag=777&cHash=9f40388049d8c0b8e9e3c3ec01c46464)[#between](/tag.html?tag=792&cHash=98cf65cc165501ced27f2ad0c0ad2cf5)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

24\. Nov 2015

Möchte man in Wordpress Daten von PHP ans Javascript übergeben, so kann man dies mit der wp\_localize\_script tun. Diese war einst dafür gedacht, Übersetzungen in Javascript zu Verfügung zu stellen. Allerdings kann man dort jede beliebige Variable hinschicken. Um das Ganze nun zu benutzen müsst ihr folgendes tun:

**In der Functions.php**

```

wp_enqueue_script( 'test', get_template_directory_uri() . '/js/test.js' ); // eure test.js Datei, die Daten bekommen soll
 
$dataToBePassed = array(
    'foo' => 'Test Variable',
    'bar' => __( 'Please wait...', 'default' )
);
wp_localize_script( 'my_js_library', 'php_vars', $datatoBePassed );
```

**In der Javascript-Datei test.js**

```

console.log(php_vars.foo);
console.log(php_vars.bar);

// Ausgabe
// Hier kommen dann "Test Variable" und "Please wait..." wie gewünscht als Daten an.
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.