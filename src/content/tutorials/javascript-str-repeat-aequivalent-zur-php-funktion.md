---
title: 'Javascript: str_repeat Äquivalent zur Php-Funktion'
date: '2014-05-14T05:40:01.000Z'
slug: javascript-str-repeat-aequivalent-zur-php-funktion
tags:
  - function
  - funktion
  - php
  - javascript
  - str_repeat
description: "Für eine Select-Menü brauchte ich eine Funktion, die mir einen String einfach wiederholt. Das Ganze geht in PHP ja mit str_repeat und so habe ich bei Stackoverflow die Lösung gefunden und wollte sie euch nicht vorenthalten. \r\nString.prototype.repeat = function(count) {\r\n    if (count &lt; 1) return '';\r\n    var result = '', pattern = this.valueOf();\r\n    while (count &gt; 0) {\r\n        if (count &amp; 1) result += pattern;\r\n        count &gt;&gt;= 1, pattern += pattern;\r\n    }\r\n    return result;\r\n};\r\n Benutzung \r\n'-'.repeat(3);\r\n// returns ---\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Für eine Select-Menü brauchte ich eine Funktion, die mir einen String einfach wiederholt. Das Ganze geht in PHP ja mit str\_repeat und so habe ich bei [Stackoverflow](http://stackoverflow.com/questions/202605/repeat-string-javascript) die Lösung gefunden und wollte sie euch nicht vorenthalten.

```javascript

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

```javascript

'-'.repeat(3);
// returns ---

```