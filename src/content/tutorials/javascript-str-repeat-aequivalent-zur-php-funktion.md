---
title: 'Javascript: str_repeat Äquivalent zur Php-Funktion'
date: '2014-05-14T05:40:01.000Z'
slug: javascript-str-repeat-aequivalent-zur-php-funktion
tags:
  - '12'
  - '13'
  - '41'
  - '69'
  - '481'
description: "Für eine Select-Menü brauchte ich eine Funktion, die mir einen String einfach wiederholt. Das Ganze geht in PHP ja mit str_repeat und so habe ich bei Stackoverflow die Lösung gefunden und wollte sie euch nicht vorenthalten. \r\nString.prototype.repeat = function(count) {\r\n    if (count &lt; 1) return '';\r\n    var result = '', pattern = this.valueOf();\r\n    while (count &gt; 0) {\r\n        if (count &amp; 1) result += pattern;\r\n        count &gt;&gt;= 1, pattern += pattern;\r\n    }\r\n    return result;\r\n};\r\n Benutzung \r\n'-'.repeat(3);\r\n// returns ---\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: str\_repeat Äquivalent zur Php-Funktion

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#function](/tag.html?tag=12&cHash=c2e2c35e28fadd29f90cdd9ba3ac9efa)[#funktion](/tag.html?tag=13&cHash=395d33aa14ac557c3256d2625e0c2b41)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#str\_repeat](/tag.html?tag=481&cHash=d37e05dc0b0f56d384933e229c717f0e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. May 2014

Für eine Select-Menü brauchte ich eine Funktion, die mir einen String einfach wiederholt. Das Ganze geht in PHP ja mit str\_repeat und so habe ich bei [Stackoverflow](http://stackoverflow.com/questions/202605/repeat-string-javascript) die Lösung gefunden und wollte sie euch nicht vorenthalten.

```

String.prototype.repeat = function(count) {
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 0) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result;
};
```

**Benutzung**

```

'-'.repeat(3);
// returns ---
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.