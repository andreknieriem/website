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
demo_url: null
download_url: null
---

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