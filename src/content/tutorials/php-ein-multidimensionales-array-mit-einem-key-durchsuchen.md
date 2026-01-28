---
title: 'PHP: Ein Multidimensionales Array mit einem Key durchsuchen'
date: '2019-05-20T06:09:00.000Z'
slug: php-ein-multidimensionales-array-mit-einem-key-durchsuchen
tags:
  - '41'
  - '159'
  - '861'
  - '617'
  - '601'
  - '1135'
  - '1136'
description: "Möchte man einen Wert aus einem multidimensionalen&nbsp;Array anhand des Keys auslesen und weiß nicht, wo dieser versteckt ist, so kann man mit folgender Funktion das Ganze recht gut bewerkstelligen. Natürlich sollte man keine super riesigen und weit verschachtelte Arrays benutzen, weil es dann doch schon recht lange dauert und aufwendig für den Server ist.\r\n\r\n function recursiveFind(array $haystack, $needle)\r\n{\r\n    $iterator  = new RecursiveArrayIterator($haystack);\r\n    $recursive = new RecursiveIteratorIterator(\r\n        $iterator,\r\n        RecursiveIteratorIterator::SELF_FIRST\r\n    );\r\n    foreach ($recursive as $key => $value) {\r\n        if ($key === $needle) {\r\n            return $value;\r\n        }\r\n    }\r\n} So kann man jetzt die Funktion&nbsp;recursiveFind benutzen um einen Wert zu erhalten."
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#key](/tag.html?tag=601&cHash=22053b15dee1ac1743743b8aae892d18)[#search](/tag.html?tag=617&cHash=d712b6c3fac81bd958088a2801154bb7)[#recursive](/tag.html?tag=861&cHash=9bb9359c98c52ee14ba50177e056a49a)[#array\_key](/tag.html?tag=1135&cHash=135917edd9caa605645ffbf27bfd0baa)[#array\_search](/tag.html?tag=1136&cHash=07c2d83ae7eb255238c828dfce56a69d)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. May 2019

Möchte man einen Wert aus einem multidimensionalen Array anhand des Keys auslesen und weiß nicht, wo dieser versteckt ist, so kann man mit folgender Funktion das Ganze recht gut bewerkstelligen. Natürlich sollte man keine super riesigen und weit verschachtelte Arrays benutzen, weil es dann doch schon recht lange dauert und aufwendig für den Server ist.

```
function recursiveFind(array $haystack, $needle)
{
    $iterator  = new RecursiveArrayIterator($haystack);
    $recursive = new RecursiveIteratorIterator(
        $iterator,
        RecursiveIteratorIterator::SELF_FIRST
    );
    foreach ($recursive as $key => $value) {
        if ($key === $needle) {
            return $value;
        }
    }
}
```

So kann man jetzt die Funktion **recursiveFind** benutzen um einen Wert zu erhalten.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a8fbf0d40ce98b3e92fa83bce1702042?s=75&d=mm&r=g)
    
    [Niko](https://iortly.com/)
    
    danke fürs Tutorial! Gerade nach so was gesucht
    
    20\. Nov 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.