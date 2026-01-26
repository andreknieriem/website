---
title: Mit jQuery Word Styles aus einer Webseite entfernen
date: '2012-03-21T17:46:34.000Z'
slug: mit-jquery-word-styles-aus-einer-webseite-entfernen
tags:
  - '20'
  - '82'
  - '83'
  - '84'
description: "Mich hat es immer genervt, wenn Leute mit den WYSIWYG-Editorn arbeiten und dann ihre Texte direkt aus Word einfügen. Das stört nicht nur die Schrift auf der Webseite, es stört auch die Kunden. Deswegen habe ich hier 2 kleine Codezeilen, die diese Styles entfernen. Es sei gesagt, dass ALLE style-tags von der Seite entfernt werden, aber man sollte ja eh seine Styles auslagern und damit es nicht mit anderen Scripten in Konflikt kommt, muss dieses Script als allererstes nach dem Einladen von jQuery erfolgen. \n$(document).ready(function() {\n\t$(\"body *\").removeAttr(\"style\");\n\t$(\"body style\").remove();\n});\n Ihr könnt natürlich auch Bereiche festlegen, damit das Script nicht alles aus der kompletten Seite löscht. Wie ihr wollt."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Mit jQuery Word Styles aus einer Webseite entfernen

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#font](/tag.html?tag=82&cHash=e3092ee338bb4a28c2a16b6039ae9d88)[#remove word](/tag.html?tag=83&cHash=387bc5cddbc61b8817b4fffec9f95830)[#style](/tag.html?tag=84&cHash=7df80fd6187d2fd82c8a4b24b4d84a78)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Mar 2012

Mich hat es immer genervt, wenn Leute mit den WYSIWYG-Editorn arbeiten und dann ihre Texte direkt aus Word einfügen. Das stört nicht nur die Schrift auf der Webseite, es stört auch die Kunden. Deswegen habe ich hier 2 kleine Codezeilen, die diese Styles entfernen. Es sei gesagt, dass ALLE style-tags von der Seite entfernt werden, aber man sollte ja eh seine Styles auslagern und damit es nicht mit anderen Scripten in Konflikt kommt, muss dieses Script als allererstes nach dem Einladen von jQuery erfolgen.

```

$(document).ready(function() {
	$("body *").removeAttr("style");
	$("body style").remove();
});
```

Ihr könnt natürlich auch Bereiche festlegen, damit das Script nicht alles aus der kompletten Seite löscht. Wie ihr wollt.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.