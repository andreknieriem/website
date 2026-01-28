---
title: 'PHP: Dateidownload erzwingen mit ModxSendfile oder Readfile'
date: '2015-03-03T17:25:04.000Z'
slug: php-dateidownload-erzwingen-mit-modxsendfile-oder-readfile
tags:
  - '41'
  - '187'
  - '628'
  - '629'
  - '630'
description: "Ich habe hier einen kleinen Codeschnipsel, der dazu dient, Dateiem vom Webserver direkt als Downloadstream auszugeben. Es wird entweder ModxSendfile oder Php Readfile benutzt. \r\n$local_file = 'bildvomserver.jpg';\r\n$mods = apache_get_modules();\r\nheader('Content-Type: application/octet-stream');\r\nheader('Content-Disposition: attachment; filename=\"dateiname.jpg\"');\r\n\t\t\r\nif (in_array('mod_xsendfile',$mods)){\r\n\theader('X-Sendfile: '. $local_file);\r\n\texit();\r\n} else {\r\n\tob_end_clean();\r\n\treadfile( $local_file );\r\n\texit();\r\n}\r\n "
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#download](/tag.html?tag=187&cHash=e6185968cab100b597e6f00748fd08a7)[#mod-xsenfile](/tag.html?tag=628&cHash=60584347135b8fbbabd49cb184661036)[#file](/tag.html?tag=629&cHash=b5a44de7cd19099908d93aabdf28fd9a)[#datei](/tag.html?tag=630&cHash=f751d68507b646f4728a7e1a36bea309)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. Mar 2015

Ich habe hier einen kleinen Codeschnipsel, der dazu dient, Dateiem vom Webserver direkt als Downloadstream auszugeben. Es wird entweder ModxSendfile oder Php Readfile benutzt.

```

$local_file = 'bildvomserver.jpg';
$mods = apache_get_modules();
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="dateiname.jpg"');
		
if (in_array('mod_xsendfile',$mods)){
	header('X-Sendfile: '. $local_file);
	exit();
} else {
	ob_end_clean();
	readfile( $local_file );
	exit();
}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.