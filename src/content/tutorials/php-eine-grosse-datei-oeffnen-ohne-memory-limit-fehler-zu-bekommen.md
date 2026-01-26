---
title: 'PHP: Eine große Datei öffnen ohne memory_limit Fehler zu bekommen'
date: '2016-08-18T17:00:00.000Z'
slug: php-eine-grosse-datei-oeffnen-ohne-memory-limit-fehler-zu-bekommen
tags:
  - '41'
  - '863'
  - '813'
  - '864'
  - '865'
description: "Möchte man mit PHP große Dateien öffnen, so bekommt man schnell einen memory_limit Fehler, weil die Datei größer ist, als erlaubt. Mit folgender Klasse kann man diesen Fehler umgehen, da hier immer nur Zeile für Zeile gestreamt wird. class LazyFile {\r\n \r\n  private $file;\r\n \r\n  function __construct($filename, $mode) {\r\n    $this-&gt;file = fopen($filename, $mode);\r\n  }\r\n \r\n  function lines() {\r\n    while (($line = fgets($this-&gt;file)) !== false) {\r\n        yield $line;\r\n    }\r\n  }\r\n} Möchte man das Ganze jetzt benutzen geht das wie folgt: \r\n$file = new LazyFile('file.csv','r');\r\nforeach ($file-&gt;lines() as $line) {\r\n  //do something\r\n}\r\n"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Eine große Datei öffnen ohne memory\_limit Fehler zu bekommen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#memory\_limit](/tag.html?tag=813&cHash=f874c192b29f6928b3f782be9ef81109)[#lazyfile](/tag.html?tag=863&cHash=afb4bef51ec4f1b2f8368d9c663bad3a)[#open](/tag.html?tag=864&cHash=7bf7673a76d3bb3e743ea5a9265d0809)[#stream](/tag.html?tag=865&cHash=aeee4f8cfbaab3d9f3bbe18f688e865f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

18\. Aug 2016

Möchte man mit PHP große Dateien öffnen, so bekommt man schnell einen memory\_limit Fehler, weil die Datei größer ist, als erlaubt. Mit folgender Klasse kann man diesen Fehler umgehen, da hier immer nur Zeile für Zeile gestreamt wird.

```
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

```

$file = new LazyFile('file.csv','r');
foreach ($file->lines() as $line) {
  //do something
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