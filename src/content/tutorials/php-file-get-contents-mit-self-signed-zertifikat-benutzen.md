---
title: 'PHP: file_get_contents mit self-signed Zertifikat benutzen'
date: '2017-11-20T23:00:00.000Z'
slug: php-file-get-contents-mit-self-signed-zertifikat-benutzen
tags:
  - '41'
  - '1017'
  - '1018'
  - '1019'
  - '1020'
  - '1021'
  - '1022'
  - '1023'
  - '1024'
description: "Hat man auf einer DEV-Site ein self-signed SSL Zertifikat so kann es vorkommen, dass die PHP Funktion file_get_contents immer false zurückliefern und es verboten ist, sich selbst aufzurufen, was immer wieder zu Fehler führt. Im Folgenden zeige ich euch, wie ihr file_get_contents dazu bringt auch bei self-signed Zertifikaten zu funktionieren.\r\nPHP-Code //Kontext für file_get_contents setzen und somit self signed Zertifikate erlauben\r\n$context = [ \r\n  'http' =&gt; [ \r\n    'method' =&gt; 'GET' \r\n  ], \r\n  'ssl' =&gt; [ \r\n    'verify_peer' =&gt; true, \r\n    'allow_self_signed'=&gt; true \r\n  ]\r\n];\r\n$context = stream_context_create($context);\r\n$resp = file_get_contents(\"https://site/\", false, $context);\r\n"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: file\_get\_contents mit self-signed Zertifikat benutzen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#file\_get\_contents](/tag.html?tag=1017&cHash=b7ab0c08bcdaefac1187113a992c685d)[#curl](/tag.html?tag=1018&cHash=d658f280d6e711d63a381148f4599d2b)[#ssl](/tag.html?tag=1019&cHash=267f578ad6e0a33419b194714c44d14d)[#self-signed](/tag.html?tag=1020&cHash=8df31bf7ab341cd93cc824aa183d44ed)[#zertifikat](/tag.html?tag=1021&cHash=6a86b6ee7e23640be1eb7b293c93d627)[#certificate](/tag.html?tag=1022&cHash=e466a00e0af7398083db3d53063de4c5)[#false](/tag.html?tag=1023&cHash=10c0620478e0a522d46aa52220b20e3c)[#verify\_peer](/tag.html?tag=1024&cHash=312ddda4bdbfdb77cc60edadf8c85845)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Nov 2017

Hat man auf einer DEV-Site ein self-signed SSL Zertifikat so kann es vorkommen, dass die PHP Funktion file\_get\_contents immer false zurückliefern und es verboten ist, sich selbst aufzurufen, was immer wieder zu Fehler führt. Im Folgenden zeige ich euch, wie ihr file\_get\_contents dazu bringt auch bei self-signed Zertifikaten zu funktionieren.

**PHP-Code**

```
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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.