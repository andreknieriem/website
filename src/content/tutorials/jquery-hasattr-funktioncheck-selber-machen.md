---
title: 'jQuery: hasAttr Funktion/Check selber machen'
date: '2016-10-13T22:00:00.000Z'
slug: jquery-hasattr-funktioncheck-selber-machen
tags:
  - jquery
  - ' function'
  - polyfill
  - javascript
  - attribut
  - check
  - hasattr
description: "Möchte man in jQuery auf das Vorhandensein eines Attributs checken, so könnte man denken, dass es mit&nbsp;hasAttr() geht. Diese Funktion gibt es bei jQuery aber nicht. Deshalb habe ich bei Stackoverflow einen passenden Code gefunden.&nbsp; var attr = $(this).attr('name');\r\n\r\n// Manche Browser sagen `attr` ist undefined; andere sagen `attr` ist false. Also auf beides überprüfen.\r\nif (typeof attr !== typeof undefined &amp;&amp; attr !== false) {\r\n  // Element has this attribute\r\n}\r\n\r\nNatives Javascript kann die Funktion. Hier kann man es mit jQuery und Vanilla JS so machen:\r\n$(this)[0].hasAttribute(\"name\");\r\n// bzw. so\r\njQObject[0].hasAttribute(\"name\");\r\n\r\nMöchte man einfach nach Attributen filtern/selektieren so geht das so:\r\n$(this).is('[name]');\r\n\r\n$(this).filter(\"[name='choice']\");"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Möchte man in jQuery auf das Vorhandensein eines Attributs checken, so könnte man denken, dass es mit `hasAttr()` geht. Diese Funktion gibt es bei jQuery aber nicht. Deshalb habe ich bei [Stackoverflow](http://stackoverflow.com/questions/1318076/jquery-hasattr-checking-to-see-if-there-is-an-attribute-on-an-element "Opens internal link in current window") einen passenden Code gefunden. 

```javascript
var attr = $(this).attr('name');

// Manche Browser sagen `attr` ist undefined; andere sagen `attr` ist false. Also auf beides überprüfen.
if (typeof attr !== typeof undefined && attr !== false) {
  // Element has this attribute
}
```

Natives Javascript kann die Funktion. Hier kann man es mit jQuery und Vanilla JS so machen:

```javascript
$(this)[0].hasAttribute("name");
// bzw. so
jQObject[0].hasAttribute("name");
```

Möchte man einfach nach Attributen filtern/selektieren so geht das so:

```javascript
$(this).is('[name]');

$(this).filter("[name='choice']");
```