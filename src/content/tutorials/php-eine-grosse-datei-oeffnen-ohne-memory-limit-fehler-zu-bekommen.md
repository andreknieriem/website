---
title: 'PHP: Eine große Datei öffnen ohne memory_limit Fehler zu bekommen'
date: '2016-08-18T17:00:00.000Z'
slug: php-eine-grosse-datei-oeffnen-ohne-memory-limit-fehler-zu-bekommen
tags:
  - php
  - lazyfile
  - memory_limit
  - open
  - stream
description: "Möchte man mit PHP große Dateien öffnen, so bekommt man schnell einen memory_limit Fehler, weil die Datei größer ist, als erlaubt. Mit folgender Klasse kann man diesen Fehler umgehen, da hier immer nur Zeile für Zeile gestreamt wird. class LazyFile {\r\n \r\n  private $file;\r\n \r\n  function __construct($filename, $mode) {\r\n    $this-&gt;file = fopen($filename, $mode);\r\n  }\r\n \r\n  function lines() {\r\n    while (($line = fgets($this-&gt;file)) !== false) {\r\n        yield $line;\r\n    }\r\n  }\r\n} Möchte man das Ganze jetzt benutzen geht das wie folgt: \r\n$file = new LazyFile('file.csv','r');\r\nforeach ($file-&gt;lines() as $line) {\r\n  //do something\r\n}\r\n"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Möchte man mit PHP große Dateien öffnen, so bekommt man schnell einen memory\_limit Fehler, weil die Datei größer ist, als erlaubt. Mit folgender Klasse kann man diesen Fehler umgehen, da hier immer nur Zeile für Zeile gestreamt wird.

```php
class LazyFile {
 
  private $file;
 
  function __construct($filename, $mode) {
    $this->file = fopen($filename, $mode);
  }
 
  function lines() {
    while (($line = fgets($this->file)) !== false) {
        yield $line;
    }
  }
}
```

Möchte man das Ganze jetzt benutzen geht das wie folgt:

```php

$file = new LazyFile('file.csv','r');
foreach ($file->lines() as $line) {
  //do something
}

```