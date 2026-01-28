---
title: Mit jQuery Word Styles aus einer Webseite entfernen
date: '2012-03-21T17:46:34.000Z'
slug: mit-jquery-word-styles-aus-einer-webseite-entfernen
tags:
  - jquery
  - font
  - remove word
  - style
description: "Mich hat es immer genervt, wenn Leute mit den WYSIWYG-Editorn arbeiten und dann ihre Texte direkt aus Word einfügen. Das stört nicht nur die Schrift auf der Webseite, es stört auch die Kunden. Deswegen habe ich hier 2 kleine Codezeilen, die diese Styles entfernen. Es sei gesagt, dass ALLE style-tags von der Seite entfernt werden, aber man sollte ja eh seine Styles auslagern und damit es nicht mit anderen Scripten in Konflikt kommt, muss dieses Script als allererstes nach dem Einladen von jQuery erfolgen. \n$(document).ready(function() {\n\t$(\"body *\").removeAttr(\"style\");\n\t$(\"body style\").remove();\n});\n Ihr könnt natürlich auch Bereiche festlegen, damit das Script nicht alles aus der kompletten Seite löscht. Wie ihr wollt."
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Mich hat es immer genervt, wenn Leute mit den WYSIWYG-Editorn arbeiten und dann ihre Texte direkt aus Word einfügen. Das stört nicht nur die Schrift auf der Webseite, es stört auch die Kunden. Deswegen habe ich hier 2 kleine Codezeilen, die diese Styles entfernen. Es sei gesagt, dass ALLE style-tags von der Seite entfernt werden, aber man sollte ja eh seine Styles auslagern und damit es nicht mit anderen Scripten in Konflikt kommt, muss dieses Script als allererstes nach dem Einladen von jQuery erfolgen.

```javascript

$(document).ready(function() {
	$("body *").removeAttr("style");
	$("body style").remove();
});

```

Ihr könnt natürlich auch Bereiche festlegen, damit das Script nicht alles aus der kompletten Seite löscht. Wie ihr wollt.