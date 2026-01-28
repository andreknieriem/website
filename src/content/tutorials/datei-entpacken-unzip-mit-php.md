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
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

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