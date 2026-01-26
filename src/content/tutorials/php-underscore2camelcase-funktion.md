---
title: 'PHP: underscore2Camelcase Funktion'
date: '2016-02-13T09:00:47.000Z'
slug: php-underscore2camelcase-funktion
tags:
  - '12'
  - '13'
  - '41'
  - '810'
  - '811'
description: "Manchmal, insbesondere für die TYPO3 Extension-Entwicklung benötigt man öfter mal die Umformung von Underscore Variablen/Funktionen (z.B. my_ext) zu Camelcase Variablen/Funktionen (z.B myExt).\nHier ist für diesen Zweck eine kleine Funktion. \r\nfunction underscore2Camelcase($str) {\r\n  // Split string in words.\r\n  $words = explode('_', strtolower($str));\r\n\r\n  foreach ($words as $i =&gt; $word) {\r\n    if($i === 0){\r\n        $return = $word;\r\n        continue;\r\n    }\r\n    $return .= ucfirst(trim($word));\r\n  }\r\n  return $return;\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: underscore2Camelcase Funktion

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#function](/tag.html?tag=12&cHash=c2e2c35e28fadd29f90cdd9ba3ac9efa)[#funktion](/tag.html?tag=13&cHash=395d33aa14ac557c3256d2625e0c2b41)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#underscore](/tag.html?tag=810&cHash=2b1005b58a5c7ffbca8d856f5b599680)[#camelcase](/tag.html?tag=811&cHash=05fc0eefec951a59d6b9ef69b1085e99)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

13\. Feb 2016

Manchmal, insbesondere für die TYPO3 Extension-Entwicklung benötigt man öfter mal die Umformung von Underscore Variablen/Funktionen (z.B. my\_ext) zu Camelcase Variablen/Funktionen (z.B myExt).

Hier ist für diesen Zweck eine kleine Funktion.

```

function underscore2Camelcase($str) {
  // Split string in words.
  $words = explode('_', strtolower($str));

  foreach ($words as $i => $word) {
    if($i === 0){
        $return = $word;
        continue;
    }
    $return .= ucfirst(trim($word));
  }
  return $return;
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