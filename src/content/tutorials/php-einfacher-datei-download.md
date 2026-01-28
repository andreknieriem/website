---
title: 'PHP: Einfacher Datei-Download'
date: '2018-12-21T11:07:00.000Z'
slug: php-einfacher-datei-download
tags:
  - php
  - download
  - send
  - readfile
  - sendfile
  - force
description: "Möchte man eine Datei zum Download anbieten und die Datei nicht direkt verlinken, so kann man mit PHP die Datei an den Benutzer senden. Das hat mehrere Vorteile. So werden beispielsweise PDF Dateien auch heruntergeladen und nicht direkt im Browser geöffnet.\r\nDie folgende kleine Funktion nimmt einen Pfad zu einer Datei entgegen und schickt diese dann via readfile an den Benutzer.&nbsp; function sendFileAndExit($filename) {\r\n  if(file_exists($filename)){\r\n\r\n    //Get file type and set it as Content Type\r\n    $finfo = finfo_open(FILEINFO_MIME_TYPE);\r\n    header('Content-Type: ' . finfo_file($finfo, $filename));\r\n    finfo_close($finfo);\r\n\r\n    //Use Content-Disposition: attachment to specify the filename\r\n    header('Content-Disposition: attachment; filename='.basename($filename));\r\n\r\n    //No cache\r\n    header('Expires: 0');\r\n    header('Cache-Control: must-revalidate');\r\n    header('Pragma: public');\r\n\r\n    //Define file size\r\n    header('Content-Length: ' . filesize($filename));\r\n\r\n    ob_clean();\r\n    flush();\r\n    readfile($filename);\r\n    exit;\r\n  }\r\n}\r\n\r\n// Benutzung\r\nsendFileAndExit('/home/meine-datei.pdf');"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

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