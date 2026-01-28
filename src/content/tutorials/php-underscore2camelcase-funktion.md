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
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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