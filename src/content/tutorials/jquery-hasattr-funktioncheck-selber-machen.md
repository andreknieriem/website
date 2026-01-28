---
title: 'jQuery: hasAttr Funktion/Check selber machen'
date: '2016-10-13T22:00:00.000Z'
slug: jquery-hasattr-funktioncheck-selber-machen
tags:
  - '20'
  - '923'
  - '696'
  - '69'
  - '924'
  - '632'
  - '925'
description: "Möchte man in jQuery auf das Vorhandensein eines Attributs checken, so könnte man denken, dass es mit&nbsp;hasAttr() geht. Diese Funktion gibt es bei jQuery aber nicht. Deshalb habe ich bei Stackoverflow einen passenden Code gefunden.&nbsp; var attr = $(this).attr('name');\r\n\r\n// Manche Browser sagen `attr` ist undefined; andere sagen `attr` ist false. Also auf beides überprüfen.\r\nif (typeof attr !== typeof undefined &amp;&amp; attr !== false) {\r\n  // Element has this attribute\r\n}\r\n\r\nNatives Javascript kann die Funktion. Hier kann man es mit jQuery und Vanilla JS so machen:\r\n$(this)[0].hasAttribute(\"name\");\r\n// bzw. so\r\njQObject[0].hasAttribute(\"name\");\r\n\r\nMöchte man einfach nach Attributen filtern/selektieren so geht das so:\r\n$(this).is('[name]');\r\n\r\n$(this).filter(\"[name='choice']\");"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#check](/tag.html?tag=632&cHash=cc35eecde32242bfafc69d7393781d75)[#polyfill](/tag.html?tag=696&cHash=27e17901bdcb36b559334f61e5d274ce)[\# function](/tag.html?tag=923&cHash=d3e76f4e9dd21fe02532bc33631d849c)[#attribut](/tag.html?tag=924&cHash=5cd35bfed64fed4f2f5baa88f583f27d)[#hasattr](/tag.html?tag=925&cHash=ec548e01cc946448242225a2a017405f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Oct 2016

Möchte man in jQuery auf das Vorhandensein eines Attributs checken, so könnte man denken, dass es mit `hasAttr()` geht. Diese Funktion gibt es bei jQuery aber nicht. Deshalb habe ich bei [Stackoverflow](http://stackoverflow.com/questions/1318076/jquery-hasattr-checking-to-see-if-there-is-an-attribute-on-an-element "Opens internal link in current window") einen passenden Code gefunden. 

```
var attr = $(this).attr('name');

// Manche Browser sagen `attr` ist undefined; andere sagen `attr` ist false. Also auf beides überprüfen.
if (typeof attr !== typeof undefined && attr !== false) {
  // Element has this attribute
}
```

Natives Javascript kann die Funktion. Hier kann man es mit jQuery und Vanilla JS so machen:

```
$(this)[0].hasAttribute("name");
// bzw. so
jQObject[0].hasAttribute("name");
```

Möchte man einfach nach Attributen filtern/selektieren so geht das so:

```
$(this).is('[name]');

$(this).filter("[name='choice']");
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.