---
title: Ordner rekursiv mit Php zu einer Zip-Datei packen
date: '2013-09-04T06:54:56.000Z'
slug: ordner-rekursiv-mit-php-zu-einer-zip-datei-packen
tags:
  - php
  - folder
  - ordner
  - rekursiv
  - unzip
  - zip
description: "Hat man auf einem Webspace keinen SSH-Zugriff, kommt man schnell an die Grenzen des Machbaren. So lassen sich leider nicht so leicht Backups erstellen.\nAber Php bietet auch eine Möglichkeit ganze Ordner zu einer Zip-Datei zu packen. Das Ganze geht wie folgt: \r\n&lt;?\r\n// die maximale Ausführzeit erhöhen\r\nini_set(\"max_execution_time\", 300);\r\n\r\n// Objekt erstellen und schauen, ob der Server zippen kann\r\n$zip = new ZipArchive();\r\nif ($zip-&gt;open(\"backup.zip\", ZIPARCHIVE::CREATE) !== TRUE) {\r\n\tdie (\"Could not open archive\");\r\n}\r\n\r\n// Gehe durch die Ordner und füge alles dem Archiv hinzu\r\n$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(\"folder/\"));\r\nforeach ($iterator as $key=&gt;$value) {\r\n\t$zip-&gt;addFile(realpath($key), $key) or die (\"ERROR: Could not add file: $key\");\r\n}\r\n// speicher die Zip-Datei\r\n\r\n$zip-&gt;close();\r\necho \"Archive erfolgreich erstellt.\";\r\n?&gt;\r\n Ich hoffe ich konnte euch damit weiterhelfen ;)\nJon aus den Kommentaren hier, hat die Funktion genommen und verbessert. Hier ist sein Code zu finden:\nhttp://pastebin.com/1qmUyWYc"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Hat man auf einem Webspace keinen SSH-Zugriff, kommt man schnell an die Grenzen des Machbaren. So lassen sich leider nicht so leicht Backups erstellen.

Aber Php bietet auch eine Möglichkeit ganze Ordner zu einer Zip-Datei zu packen. Das Ganze geht wie folgt:

```php

<?
// die maximale Ausführzeit erhöhen
ini_set("max_execution_time", 300);

// Objekt erstellen und schauen, ob der Server zippen kann
$zip = new ZipArchive();
if ($zip->open("backup.zip", ZIPARCHIVE::CREATE) !== TRUE) {
	die ("Could not open archive");
}

// Gehe durch die Ordner und füge alles dem Archiv hinzu
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("folder/"));
foreach ($iterator as $key=>$value) {
	$zip->addFile(realpath($key), $key) or die ("ERROR: Could not add file: $key");
}
// speicher die Zip-Datei

$zip->close();
echo "Archive erfolgreich erstellt.";
?>

```

Ich hoffe ich konnte euch damit weiterhelfen ;)

Jon aus den Kommentaren hier, hat die Funktion genommen und verbessert. Hier ist sein Code zu finden:

[http://pastebin.com/1qmUyWYc](http://pastebin.com/1qmUyWYc)