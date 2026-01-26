---
title: 'PHP: Mit str_replace nur ersten Treffer/Match ersetzen'
date: '2016-09-01T22:00:00.000Z'
slug: php-mit-str-replace-nur-ersten-treffermatch-ersetzen
tags:
  - '895'
  - '896'
  - '897'
  - '898'
  - '41'
description: "Im Gegensatz zu Javascript ersetzt str_replace nicht nur den ersten Treffer, sondern direkt alle Vorkommnisse in einem String. Um nur den ersten Treffer zu ersetzen hilft die folgende Funktion. Die Funktion ist deutlich schneller als eine Regexp, allerdings dadurch auch weniger schön zu lesen. // How to use:\r\nstr_replace_first('Foo','Bar','Foo Foo Foo'); // Ergibt Bar Foo Foo\r\n\r\nfunction str_replace_first($search,$replace,$subject){\r\n    $pos = strpos($subject, $search);\r\n    if ($pos !== false) {\r\n        $return substr_replace($subject, $replace, $pos, strlen($search));\r\n    } else {\r\n        return $subject;\r\n    }\r\n}"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Mit str\_replace nur ersten Treffer/Match ersetzen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#str\_replace.first](/tag.html?tag=895&cHash=f1180c10f11eb3580b0b016f2d711dc7)[#erster](/tag.html?tag=896&cHash=5220404a7f6e1b193e6312290e47d5eb)[#match](/tag.html?tag=897&cHash=82e22b9f10a31f0c5f3eb36eb834eaea)[#treffer](/tag.html?tag=898&cHash=2f5e3a9baa6d225712156f219047dbfc)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. Sep 2016

Im Gegensatz zu Javascript ersetzt str\_replace nicht nur den ersten Treffer, sondern direkt alle Vorkommnisse in einem String. Um nur den ersten Treffer zu ersetzen hilft die folgende Funktion. Die Funktion ist deutlich schneller als eine Regexp, allerdings dadurch auch weniger schön zu lesen.

```
// How to use:
str_replace_first('Foo','Bar','Foo Foo Foo'); // Ergibt Bar Foo Foo

function str_replace_first($search,$replace,$subject){
    $pos = strpos($subject, $search);
    if ($pos !== false) {
        $return substr_replace($subject, $replace, $pos, strlen($search));
    } else {
        return $subject;
    }
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/8e73ca92dbb8b18a7814d073b8e7f277?s=75&d=mm&r=g)
    
    [Softwareentwicklung in Suhl](https://kies-media.de)
    
    es hat sich ein kleiner Fehler eingeschlichen:  
    ersetze die Zeile:  
    $return substr\_replace($subject, $replace, $pos, strlen($search));  
    durch  
    return substr\_replace($subject, $replace, $pos, strlen($search));  
    (also ohne das Dollarzeichen)  
    LG Kies-Media GmbH
    
    18\. Jan 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c63e3ce7d770c058c63b03ca0e0e93b9?s=75&d=mm&r=g)
    
    [Webmeteor24](http://webmeteor24.de)
    
    Genau das brauchte ich gerade für das URL-Rewriting
    
    22\. Dec 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/65001a43f0b7d7c84a7507cb341d5949?s=75&d=mm&r=g)
    
    M67T
    
    Hallo Andre, danke für die nützliche Funktion! Aber wie die Entwickler es auch tun, ist es falsch. Bei Javascript nur das erste, aber was ist wenn man alle will und bei php andersrum.  
      
    Gz
    
    07\. Sep 2016 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.