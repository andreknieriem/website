---
title: IE8 Responsive Webdesign - Bilder verzerrt/zu hoch
date: '2013-11-28T14:49:35.000Z'
slug: ie8-responsive-webdesign-bilder-verzerrtzu-hoch
tags:
  - ie
  - internet explorer
  - responsive
description: "Bei vielen Entwicklern und Kunden tritt häufig das Problem auf, dass Bilder auf responsive Webseiten völlig verzerrt im IE8 aussehen. Das Problem kommt nur vom CSS und lässt sich sehr leicht lösen. Die meisten Entwickler benutzen folgenden Code um ihre Bilder responsive zu machen: \nimg {\n\theight: auto;\n\tmax-width: 100%;\n}\n Das Ganze funktioniert auch wunderbar in allen modernen Browser und im IE aber Verion 9.\nUm den Fehler im IE8 zu beseitigen muss man nur eine Breite ins CSS angeben. Also einfach: \nimg {\n\theight: auto;\n\tmax-width: 100%;\n\twidth: auto; // wichtig für IE8\n}\n Ich hoffe das die Lösung auch bei euch funktioniert ;)"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

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