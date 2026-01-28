---
title: 'PHP: Alle Ordner und Unterordner eines Ordners auslesen'
date: '2016-06-08T16:47:48.000Z'
slug: php-alle-ordner-und-unterordner-eines-ordners-auslesen
tags:
  - php
  - folder
  - get
  - array
  - snippet
  - subfolder
description: "Hier habe ich ein kleines PHP-Snippet um alle Ordner samt Unterordner aus einem gegegeben Ordner auszulesen und in ein Array zu packen.\nFunktion \r\nfunction getAllSubDirectories( $directory, $directory_seperator = '/'){\r\n\t$dirs = array_map( function($item)use($directory_seperator){ return $item . $directory_seperator;}, array_filter( glob( $directory . '*' ), 'is_dir') );\r\n\r\n\tforeach( $dirs AS $dir ){\r\n\t\t$dirs = array_merge( $dirs, getAllSubDirectories( $dir, $directory_seperator ) );\r\n\t}\r\n\treturn $dirs;\r\n}\r\n Anwendung \r\n$folders = getAllSubDirectories('/folder','/');\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

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