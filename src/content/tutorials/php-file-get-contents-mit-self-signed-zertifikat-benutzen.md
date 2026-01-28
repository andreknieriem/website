---
title: 'PHP: file_get_contents mit self-signed Zertifikat benutzen'
date: '2017-11-20T23:00:00.000Z'
slug: php-file-get-contents-mit-self-signed-zertifikat-benutzen
tags:
  - php
  - file_get_contents
  - curl
  - ssl
  - self-signed
  - zertifikat
  - certificate
  - 'false'
  - verify_peer
description: "Hat man auf einer DEV-Site ein self-signed SSL Zertifikat so kann es vorkommen, dass die PHP Funktion file_get_contents immer false zurückliefern und es verboten ist, sich selbst aufzurufen, was immer wieder zu Fehler führt. Im Folgenden zeige ich euch, wie ihr file_get_contents dazu bringt auch bei self-signed Zertifikaten zu funktionieren.\r\nPHP-Code //Kontext für file_get_contents setzen und somit self signed Zertifikate erlauben\r\n$context = [ \r\n  'http' =&gt; [ \r\n    'method' =&gt; 'GET' \r\n  ], \r\n  'ssl' =&gt; [ \r\n    'verify_peer' =&gt; true, \r\n    'allow_self_signed'=&gt; true \r\n  ]\r\n];\r\n$context = stream_context_create($context);\r\n$resp = file_get_contents(\"https://site/\", false, $context);\r\n"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Hat man auf einer DEV-Site ein self-signed SSL Zertifikat so kann es vorkommen, dass die PHP Funktion file\_get\_contents immer false zurückliefern und es verboten ist, sich selbst aufzurufen, was immer wieder zu Fehler führt. Im Folgenden zeige ich euch, wie ihr file\_get\_contents dazu bringt auch bei self-signed Zertifikaten zu funktionieren.

**PHP-Code**

```php
//Kontext für file_get_contents setzen und somit self signed Zertifikate erlauben
$context = [ 
  'http' => [ 
    'method' => 'GET' 
  ], 
  'ssl' => [ 
    'verify_peer' => true, 
    'allow_self_signed'=> true 
  ]
];
$context = stream_context_create($context);
$resp = file_get_contents("https://site/", false, $context);
```