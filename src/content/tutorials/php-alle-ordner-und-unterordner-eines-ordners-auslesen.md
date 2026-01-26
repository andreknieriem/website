---
title: 'PHP: Alle Ordner und Unterordner eines Ordners auslesen'
date: '2016-06-08T16:47:48.000Z'
slug: php-alle-ordner-und-unterordner-eines-ordners-auslesen
tags:
  - '41'
  - '89'
  - '97'
  - '159'
  - '800'
  - '844'
description: "Hier habe ich ein kleines PHP-Snippet um alle Ordner samt Unterordner aus einem gegegeben Ordner auszulesen und in ein Array zu packen.\nFunktion \r\nfunction getAllSubDirectories( $directory, $directory_seperator = '/'){\r\n\t$dirs = array_map( function($item)use($directory_seperator){ return $item . $directory_seperator;}, array_filter( glob( $directory . '*' ), 'is_dir') );\r\n\r\n\tforeach( $dirs AS $dir ){\r\n\t\t$dirs = array_merge( $dirs, getAllSubDirectories( $dir, $directory_seperator ) );\r\n\t}\r\n\treturn $dirs;\r\n}\r\n Anwendung \r\n$folders = getAllSubDirectories('/folder','/');\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Alle Ordner und Unterordner eines Ordners auslesen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#folder](/tag.html?tag=89&cHash=6c51e6c39657be6431df379a17593cf5)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#snippet](/tag.html?tag=800&cHash=3e4cd918329a96d6e9d653d7b0e7f1f5)[#subfolder](/tag.html?tag=844&cHash=e9ecb14b698967ffe5ea58aa0dd27934)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Jun 2016

Hier habe ich ein kleines PHP-Snippet um alle Ordner samt Unterordner aus einem gegegeben Ordner auszulesen und in ein Array zu packen.

**Funktion**

```

function getAllSubDirectories( $directory, $directory_seperator = '/'){
	$dirs = array_map( function($item)use($directory_seperator){ return $item . $directory_seperator;}, array_filter( glob( $directory . '*' ), 'is_dir') );

	foreach( $dirs AS $dir ){
		$dirs = array_merge( $dirs, getAllSubDirectories( $dir, $directory_seperator ) );
	}
	return $dirs;
}
```

**Anwendung**

```

$folders = getAllSubDirectories('/folder','/');
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.