---
title: 'PHP: Einfacher Datei-Download'
date: '2018-12-21T11:07:00.000Z'
slug: php-einfacher-datei-download
tags:
  - '41'
  - '187'
  - '1105'
  - '1106'
  - '1107'
  - '668'
description: "Möchte man eine Datei zum Download anbieten und die Datei nicht direkt verlinken, so kann man mit PHP die Datei an den Benutzer senden. Das hat mehrere Vorteile. So werden beispielsweise PDF Dateien auch heruntergeladen und nicht direkt im Browser geöffnet.\r\nDie folgende kleine Funktion nimmt einen Pfad zu einer Datei entgegen und schickt diese dann via readfile an den Benutzer.&nbsp; function sendFileAndExit($filename) {\r\n  if(file_exists($filename)){\r\n\r\n    //Get file type and set it as Content Type\r\n    $finfo = finfo_open(FILEINFO_MIME_TYPE);\r\n    header('Content-Type: ' . finfo_file($finfo, $filename));\r\n    finfo_close($finfo);\r\n\r\n    //Use Content-Disposition: attachment to specify the filename\r\n    header('Content-Disposition: attachment; filename='.basename($filename));\r\n\r\n    //No cache\r\n    header('Expires: 0');\r\n    header('Cache-Control: must-revalidate');\r\n    header('Pragma: public');\r\n\r\n    //Define file size\r\n    header('Content-Length: ' . filesize($filename));\r\n\r\n    ob_clean();\r\n    flush();\r\n    readfile($filename);\r\n    exit;\r\n  }\r\n}\r\n\r\n// Benutzung\r\nsendFileAndExit('/home/meine-datei.pdf');"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#download](/tag.html?tag=187&cHash=e6185968cab100b597e6f00748fd08a7)[#force](/tag.html?tag=668&cHash=04fdc82cf7b01fd3dd215d5227514edf)[#send](/tag.html?tag=1105&cHash=4832b5f013730d5cb92f65a3f12493ea)[#readfile](/tag.html?tag=1106&cHash=06934928caed1b3f0c76e2ef4d045f30)[#sendfile](/tag.html?tag=1107&cHash=d737312dec9ae69f386c2b489bc70dba)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Dec 2018

Möchte man eine Datei zum Download anbieten und die Datei nicht direkt verlinken, so kann man mit PHP die Datei an den Benutzer senden. Das hat mehrere Vorteile. So werden beispielsweise PDF Dateien auch heruntergeladen und nicht direkt im Browser geöffnet.

Die folgende kleine Funktion nimmt einen Pfad zu einer Datei entgegen und schickt diese dann via readfile an den Benutzer. 

```
function sendFileAndExit($filename) {
  if(file_exists($filename)){

    //Get file type and set it as Content Type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    header('Content-Type: ' . finfo_file($finfo, $filename));
    finfo_close($finfo);

    //Use Content-Disposition: attachment to specify the filename
    header('Content-Disposition: attachment; filename='.basename($filename));

    //No cache
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');

    //Define file size
    header('Content-Length: ' . filesize($filename));

    ob_clean();
    flush();
    readfile($filename);
    exit;
  }
}

// Benutzung
sendFileAndExit('/home/meine-datei.pdf');
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.