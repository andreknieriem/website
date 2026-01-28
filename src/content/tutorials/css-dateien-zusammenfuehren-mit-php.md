---
title: CSS-Dateien zusammenführen mit PHP
date: '2011-08-12T09:15:16.000Z'
slug: css-dateien-zusammenfuehren-mit-php
tags:
  - css
  - php
  - css zusammenführen
description: >-
  Bei größeren Projekten möchte man oft mehrere CSS-Dateien benutzen, um den
  Überblick zu behalten. So benutze ich zum Beispiel meistens eine CSS am
  Anfang, die die Styles des Browser ersetzt, danach eine für das Grid der
  Webseite und so weiter. Leider bedeutet jeder HTTP-Request Zeit und so wird
  die Seite deutlich gebremst, wenn man jede CSS einzelnd einbindet. Um meine
  CSS-Dateien trotzdem in einzelnde Dateien auszulagern, aber nur eine
  auszuliefern habe ich einen Workaround zusammengestellt.

  Also schaue ich erst einmal welche CSS-Dateien ich habe. Bei dem Beispiel hier
  sind es einmal die reset.css, grid.css und style.css. Also erstelle ich mir
  eine PHP-Datei mit dem Namen "get_css.php". Die Datei sieht dann wie folgt
  aus:

  get_css.php 

  &lt;?php

  header('Content-type: text/css');

  ?&gt;

  &lt;/php&gt;
   Damit wird der Datei gesagt, dass sie später als CSS-Datei erkannt wird. Danach kann mit der PHP-Funktion file_get_contents() einfach die CSS-Dateien in die get_css.php reinladen. Danach sieht die Datei in meinem Beispiel so aus: 
  &lt;?php

  header('Content-type: text/css');

  echo file_get_contents('reset.css').
       file_get_contents('grid.css').
       file_get_contents('style.css');
  ?&gt;
   Zum einbinden der jetzigen neu generierten CSS-Datei einfach folgende aufrufen: 
  &lt;link rel="stylesheet" type="text/css" href="get_css.php" /&gt;
   Das wars auch schon! Nun könnt ihr mit mehreren CSS-Dateien arbeiten aber nur eine ausgeben lassen.
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Bei größeren Projekten möchte man oft mehrere CSS-Dateien benutzen, um den Überblick zu behalten. So benutze ich zum Beispiel meistens eine CSS am Anfang, die die Styles des Browser ersetzt, danach eine für das Grid der Webseite und so weiter. Leider bedeutet jeder HTTP-Request Zeit und so wird die Seite deutlich gebremst, wenn man jede CSS einzelnd einbindet. Um meine CSS-Dateien trotzdem in einzelnde Dateien auszulagern, aber nur eine auszuliefern habe ich einen Workaround zusammengestellt.

Also schaue ich erst einmal welche CSS-Dateien ich habe. Bei dem Beispiel hier sind es einmal die reset.css, grid.css und style.css. Also erstelle ich mir eine PHP-Datei mit dem Namen "get\_css.php". Die Datei sieht dann wie folgt aus:

**get\_css.php**

```php

<?php
header('Content-type: text/css');
?>
</php>

```

Damit wird der Datei gesagt, dass sie später als CSS-Datei erkannt wird. Danach kann mit der PHP-Funktion [file\_get\_contents()](http://php.net/manual/de/function.file-get-contents.php) einfach die CSS-Dateien in die get\_css.php reinladen. Danach sieht die Datei in meinem Beispiel so aus:

```php

<?php
header('Content-type: text/css');
echo file_get_contents('reset.css').
     file_get_contents('grid.css').
     file_get_contents('style.css');
?>

```

Zum einbinden der jetzigen neu generierten CSS-Datei einfach folgende aufrufen:

```html4strict

<link rel="stylesheet" type="text/css" href="get_css.php" />

```

Das wars auch schon! Nun könnt ihr mit mehreren CSS-Dateien arbeiten aber nur eine ausgeben lassen.