---
title: Datei entpacken (Unzip) mit PHP
date: '2012-09-28T05:05:07.000Z'
slug: datei-entpacken-unzip-mit-php
tags:
  - '41'
  - '92'
  - '93'
  - '120'
  - '121'
  - '122'
  - '123'
description: >-
  Falls ihr mehrere Dateien auf einmal hochladen wollt (z.B. Typo3 oder
  Wordpress Installationen) so solltet ihr die Dateien in ein Zip-Archiv packen.
  Das hat den Vorteil, das nicht für alle Files Extraverbindungen auf- und
  abgebaut werden müssen und der Uploadvorgang verschnellert sich ungemein. Hat
  man nun keinen SSH-Zugriff, bzw Root Zugriff auf den Server kann man die Zip
  auch mit PHP entpacken. Das Ganze geht wie folgt: 

  &lt;?php
       $zip = new ZipArchive;
       $res = $zip-&gt;open('deinzip.zip');
       if ($res === TRUE) {
           $zip-&gt;extractTo('./'); // wohin soll es entpackt werden
           $zip-&gt;close();
           echo 'ok';
       } else {
           echo 'failed';
       }
  ?&gt;
   Also einfach den Code nehmen, anpassen, auf den Server laden, ausführen und hoffen, dass dort ok kommt. Danach kann das Zip-File gelöscht werden.
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Datei entpacken (Unzip) mit PHP

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#unzip](/tag.html?tag=92&cHash=26609e3cbe64e1af4829936ec4b30b37)[#zip](/tag.html?tag=93&cHash=4000b14ba3b5ec5e0a1fa4a16a235614)[#entpacken](/tag.html?tag=120&cHash=1297a638c8d557cc2787344f9d9c8dd7)[#packen](/tag.html?tag=121&cHash=eb9c4f37f50c7d9e179c89d171a31c95)[#server](/tag.html?tag=122&cHash=5766dece603fb70b1eceaad1c22c4272)[#ssh](/tag.html?tag=123&cHash=1097f82fd9d70afbb3e6410569a85e52)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Sep 2012

Falls ihr mehrere Dateien auf einmal hochladen wollt (z.B. Typo3 oder Wordpress Installationen) so solltet ihr die Dateien in ein Zip-Archiv packen. Das hat den Vorteil, das nicht für alle Files Extraverbindungen auf- und abgebaut werden müssen und der Uploadvorgang verschnellert sich ungemein. Hat man nun keinen SSH-Zugriff, bzw Root Zugriff auf den Server kann man die Zip auch mit PHP entpacken. Das Ganze geht wie folgt:

```

<?php
     $zip = new ZipArchive;
     $res = $zip->open('deinzip.zip');
     if ($res === TRUE) {
         $zip->extractTo('./'); // wohin soll es entpackt werden
         $zip->close();
         echo 'ok';
     } else {
         echo 'failed';
     }
?>
```

Also einfach den Code nehmen, anpassen, auf den Server laden, ausführen und hoffen, dass dort ok kommt. Danach kann das Zip-File gelöscht werden.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/5b779f214d7dbc72a00c7e1bd0963d52?s=75&d=mm&r=g)
    
    mitunsRigue
    
    ich hatte Recht :) mituns
    
    10\. May 2022 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.