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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#comma](/tag.html?tag=589&cHash=f45a9aca0288203a707a9e872957bc1f)[#komma](/tag.html?tag=590&cHash=d2f56cf493074562fdfc76293167c4bb)[#list](/tag.html?tag=591&cHash=5bdd2202e9d645949e85f61c1cc6d85c)[#and](/tag.html?tag=592&cHash=e9cb0c80f1b6aa276c6a94240117cc3c)[#und](/tag.html?tag=593&cHash=bb954bf5f69211f64b6ae72af12d331a)[#letzter](/tag.html?tag=594&cHash=3d62f8b94042f8c1424922369a9d1574)[#last](/tag.html?tag=595&cHash=6a37d17e25143e68b228c6f1ce7aff2e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Dec 2014

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.