---
title: CSS-Dateien zusammenführen mit PHP
date: '2011-08-12T09:15:16.000Z'
slug: css-dateien-zusammenfuehren-mit-php
tags:
  - '25'
  - '41'
  - '63'
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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#css zusammenführen](/tag.html?tag=63&cHash=ffc001208e09172684d82c8382075f29)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Aug 2011

Bei größeren Projekten möchte man oft mehrere CSS-Dateien benutzen, um den Überblick zu behalten. So benutze ich zum Beispiel meistens eine CSS am Anfang, die die Styles des Browser ersetzt, danach eine für das Grid der Webseite und so weiter. Leider bedeutet jeder HTTP-Request Zeit und so wird die Seite deutlich gebremst, wenn man jede CSS einzelnd einbindet. Um meine CSS-Dateien trotzdem in einzelnde Dateien auszulagern, aber nur eine auszuliefern habe ich einen Workaround zusammengestellt.

Also schaue ich erst einmal welche CSS-Dateien ich habe. Bei dem Beispiel hier sind es einmal die reset.css, grid.css und style.css. Also erstelle ich mir eine PHP-Datei mit dem Namen "get\_css.php". Die Datei sieht dann wie folgt aus:

**get\_css.php**

```

<?php
header('Content-type: text/css');
?>
</php>
```

Damit wird der Datei gesagt, dass sie später als CSS-Datei erkannt wird. Danach kann mit der PHP-Funktion [file\_get\_contents()](http://php.net/manual/de/function.file-get-contents.php) einfach die CSS-Dateien in die get\_css.php reinladen. Danach sieht die Datei in meinem Beispiel so aus:

```

<?php
header('Content-type: text/css');
echo file_get_contents('reset.css').
     file_get_contents('grid.css').
     file_get_contents('style.css');
?>
```

Zum einbinden der jetzigen neu generierten CSS-Datei einfach folgende aufrufen:

```

<link rel="stylesheet" type="text/css" href="get_css.php" />
```

Das wars auch schon! Nun könnt ihr mit mehreren CSS-Dateien arbeiten aber nur eine ausgeben lassen.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/b35938d1737592bc4bc7d0eb97f33246?s=75&d=mm&r=g)
    
    Waller
    
    besser :L  
    $var1 = readfile('reset.css');  
    $var1 .= readfile('grid.css');  
    $var1 .= readfile('style.css');  
    echo $var1;
    
    30\. Aug 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/459038f34d3758bc9a03d6947144c39e?s=75&d=mm&r=g)
    
    [Merlin S.](https://mcwallpaper.de)
    
    Hm.. Bei mir geht das net, danach is die Website ein reines HTML Gerippe..
    
    17\. Aug 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Merlin, hast du nen Link für mich, damit ich mir das mal angucken kann?
        
        17\. Aug 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.