---
title: >-
  PHP: Kommaseparierte Aufzählung mit "und" vor dem letzen Eintrag aus einem
  Array erzeugen
date: '2014-12-19T16:51:14.000Z'
slug: >-
  php-kommaseparierte-aufzaehlung-mit-und-vor-dem-letzen-eintrag-aus-einem-array-erzeugen
tags:
  - '41'
  - '159'
  - '589'
  - '590'
  - '591'
  - '592'
  - '593'
  - '594'
  - '595'
description: "\r\npublic function nice_count( $input = array() ){\r\n\tif( count( $input ) == 0 ) return '';\r\n\tif( count( $input ) == 1 )return $input[0];\r\n\t$last = array_pop( $input );\r\n\t$tmp = implode(', ', $input);\r\n\treturn $tmp . ' und ' . $last;\r\n}\r\n\r\n// So benutzt man es\r\n$array = array('Bananen', 'Äpfel', 'Birnen');\r\nnice_count($array);\r\n\r\n// Ergibt\r\n// Bananen, Äpfel und Birnen\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

```

public function nice_count( $input = array() ){
	if( count( $input ) == 0 ) return '';
	if( count( $input ) == 1 )return $input[0];
	$last = array_pop( $input );
	$tmp = implode(', ', $input);
	return $tmp . ' und ' . $last;
}

// So benutzt man es
$array = array('Bananen', 'Äpfel', 'Birnen');
nice_count($array);

// Ergibt
// Bananen, Äpfel und Birnen
```