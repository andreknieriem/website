---
title: IE8 Responsive Webdesign - Bilder verzerrt/zu hoch
date: '2013-11-28T14:49:35.000Z'
slug: ie8-responsive-webdesign-bilder-verzerrtzu-hoch
tags:
  - '86'
  - '87'
  - '237'
description: "Bei vielen Entwicklern und Kunden tritt häufig das Problem auf, dass Bilder auf responsive Webseiten völlig verzerrt im IE8 aussehen. Das Problem kommt nur vom CSS und lässt sich sehr leicht lösen. Die meisten Entwickler benutzen folgenden Code um ihre Bilder responsive zu machen: \nimg {\n\theight: auto;\n\tmax-width: 100%;\n}\n Das Ganze funktioniert auch wunderbar in allen modernen Browser und im IE aber Verion 9.\nUm den Fehler im IE8 zu beseitigen muss man nur eine Breite ins CSS angeben. Also einfach: \nimg {\n\theight: auto;\n\tmax-width: 100%;\n\twidth: auto; // wichtig für IE8\n}\n Ich hoffe das die Lösung auch bei euch funktioniert ;)"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# IE8 Responsive Webdesign - Bilder verzerrt/zu hoch

#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#ie](/tag.html?tag=86&cHash=759b348c57928fea01a7cffef340e851)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#responsive](/tag.html?tag=237&cHash=569f7227e8743f4f4351acefa1cf974a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Nov 2013

Bei vielen Entwicklern und Kunden tritt häufig das Problem auf, dass Bilder auf responsive Webseiten völlig verzerrt im IE8 aussehen. Das Problem kommt nur vom CSS und lässt sich sehr leicht lösen. Die meisten Entwickler benutzen folgenden Code um ihre Bilder responsive zu machen:

```

img {
	height: auto;
	max-width: 100%;
}
```

Das Ganze funktioniert auch wunderbar in allen modernen Browser und im IE aber Verion 9.

Um den Fehler im IE8 zu beseitigen muss man nur eine Breite ins CSS angeben. Also einfach:

```

img {
	height: auto;
	max-width: 100%;
	width: auto; // wichtig für IE8
}
```

Ich hoffe das die Lösung auch bei euch funktioniert ;)

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.