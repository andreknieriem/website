---
title: 'Wordpress: PHP Daten zu Javascript übergeben'
date: '2015-11-24T17:00:09.000Z'
slug: wordpress-php-daten-zu-javascript-uebergeben
tags:
  - wordpress
  - php
  - javascript
  - functions
  - data
  - between
description: "Möchte man in Wordpress Daten von PHP ans Javascript übergeben, so kann man dies mit der wp_localize_script tun. Diese war einst dafür gedacht, Übersetzungen in Javascript zu Verfügung zu stellen. Allerdings kann man dort jede beliebige Variable hinschicken. Um das Ganze nun zu benutzen müsst ihr folgendes tun:\nIn der Functions.php \r\nwp_enqueue_script( 'test', get_template_directory_uri() . '/js/test.js' ); // eure test.js Datei, die Daten bekommen soll\r\n \r\n$dataToBePassed = array(\r\n    'foo' =&gt; 'Test Variable',\r\n    'bar' =&gt; __( 'Please wait...', 'default' )\r\n);\r\nwp_localize_script( 'my_js_library', 'php_vars', $datatoBePassed );\r\n In der Javascript-Datei test.js \r\nconsole.log(php_vars.foo);\r\nconsole.log(php_vars.bar);\r\n\r\n// Ausgabe\r\n// Hier kommen dann \"Test Variable\" und \"Please wait...\" wie gewünscht als Daten an.\r\n "
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Möchte man in Wordpress Daten von PHP ans Javascript übergeben, so kann man dies mit der wp\_localize\_script tun. Diese war einst dafür gedacht, Übersetzungen in Javascript zu Verfügung zu stellen. Allerdings kann man dort jede beliebige Variable hinschicken. Um das Ganze nun zu benutzen müsst ihr folgendes tun:

**In der Functions.php**

```php

wp_enqueue_script( 'test', get_template_directory_uri() . '/js/test.js' ); // eure test.js Datei, die Daten bekommen soll
 
$dataToBePassed = array(
    'foo' => 'Test Variable',
    'bar' => __( 'Please wait...', 'default' )
);
wp_localize_script( 'my_js_library', 'php_vars', $datatoBePassed );

```

**In der Javascript-Datei test.js**

```js

console.log(php_vars.foo);
console.log(php_vars.bar);

// Ausgabe
// Hier kommen dann "Test Variable" und "Please wait..." wie gewünscht als Daten an.

```