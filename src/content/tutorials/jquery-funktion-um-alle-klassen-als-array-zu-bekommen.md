---
title: 'jQuery: Funktion um alle Klassen als Array zu bekommen'
date: '2014-09-19T06:17:00.000Z'
slug: jquery-funktion-um-alle-klassen-als-array-zu-bekommen
tags:
  - '20'
  - '69'
  - '97'
  - '159'
  - '512'
  - '531'
  - '532'
description: "Letztens brauchte ich an mehreren Stellen alle Klassen von Elementen als Array. Dafür habe ich mir diese kleine Funktion geschrieben.\nFunktion \r\n(function ($) {\r\n\t$.fn.getClasses = function (prop) {\r\n\t\treturn classes = this.attr(\"class\").split(/\\s+/);\r\n    };\r\n}(jQuery));\r\n So wirds benutzt: \r\nvar classList =$('#divId').getClasses();\r\n "
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

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#bekommen](/tag.html?tag=512&cHash=03330f1d0965d374dabcf8dd59405ca7)[#classes](/tag.html?tag=531&cHash=f83e4b85b0df8beb9407c83b3dad031b)[#klassen](/tag.html?tag=532&cHash=60fef46b4afe8c15314e3b93544fffd3)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Sep 2014

Letztens brauchte ich an mehreren Stellen alle Klassen von Elementen als Array. Dafür habe ich mir diese kleine Funktion geschrieben.

**Funktion**

```

(function ($) {
	$.fn.getClasses = function (prop) {
		return classes = this.attr("class").split(/\s+/);
    };
}(jQuery));
```

**So wirds benutzt:**

```

var classList =$('#divId').getClasses();
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.