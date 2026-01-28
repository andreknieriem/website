---
title: 'PHP: file_get_contents() mit .htaccess Authentifizierung benutzen'
date: '2016-12-15T23:00:00.000Z'
slug: php-file-get-contents-mit-htaccess-authentifizierung-benutzen
tags:
  - '41'
  - '941'
  - '931'
  - '942'
  - '943'
  - '62'
description: "Möchte man eine Datei oder Url mit file_get_contents&nbsp;holen, welche hinter einem .htaccess Schutz ist, so kann man das mit dem folgenden kleinen Code-Beispiel tun. $context = stream_context_create(array (\r\n    'http' =&gt; array (\r\n        'header' =&gt; 'Authorization: Basic ' . base64_encode(\"$username:$password\")\r\n    )\r\n));\r\n$data = file_get_contents($url, false, $context);"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man eine Datei oder Url mit [file\_get\_contents](http://php.net/manual/de/function.file-get-contents.php "Opens internal link in current window") holen, welche hinter einem .htaccess Schutz ist, so kann man das mit dem folgenden kleinen Code-Beispiel tun.

```
$context = stream_context_create(array (
    'http' => array (
        'header' => 'Authorization: Basic ' . base64_encode("$username:$password")
    )
));
$data = file_get_contents($url, false, $context);
```