---
title: >-
  Javascript String-Prototype-Funktion: Ersten Buchstaben großschreiben,
  kapitalisieren
date: '2014-06-20T13:46:26.000Z'
slug: >-
  javascript-string-prototype-funktion-ersten-buchstaben-grossschreiben-kapitalisieren
tags:
  - funktion
  - javascript
  - js
  - kapitalisieren
  - capitalize
  - first letter
  - erster Buchstabe
  - großschreiben
  - prototype
description: "Für eine Ausgabe des Vor- und Nachnamen habe ich eine kleine Funktion geschrieben, die den ersten Buchstaben eines Strings großschreibt. Falls Benutzer beispielsweise seinen Vornamen klein geschrieben hat, kann man so ganz einfach den ersten Buchstaben wieder groß schreiben. Sicherlich kann man das Ganze noch weiterführen und jedes Wort eines Strings kapitalisieren, aber das brauchte ich nicht. \nHier der Codeschnipsel:\nJavascript Prototype Funktion \r\nString.prototype.capitalize = function() {\r\n    return this.charAt(0).toUpperCase() + this.slice(1);\r\n}\r\n Benutzung \r\n'hans Meier'.capitalize(); =&gt; 'Hans Meier';\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Für eine Ausgabe des Vor- und Nachnamen habe ich eine kleine Funktion geschrieben, die den ersten Buchstaben eines Strings großschreibt. Falls Benutzer beispielsweise seinen Vornamen klein geschrieben hat, kann man so ganz einfach den ersten Buchstaben wieder groß schreiben. Sicherlich kann man das Ganze noch weiterführen und jedes Wort eines Strings kapitalisieren, aber das brauchte ich nicht.

Hier der Codeschnipsel:

## Javascript Prototype Funktion

```

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
```

## Benutzung

```

'hans Meier'.capitalize(); => 'Hans Meier';
```