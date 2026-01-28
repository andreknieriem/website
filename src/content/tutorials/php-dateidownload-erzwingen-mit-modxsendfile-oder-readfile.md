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
demo_url: null
download_url: null
---

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