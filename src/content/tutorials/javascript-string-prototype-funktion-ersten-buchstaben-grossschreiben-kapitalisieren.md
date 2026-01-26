---
title: >-
  Javascript String-Prototype-Funktion: Ersten Buchstaben großschreiben,
  kapitalisieren
date: '2014-06-20T13:46:26.000Z'
slug: >-
  javascript-string-prototype-funktion-ersten-buchstaben-grossschreiben-kapitalisieren
tags:
  - '13'
  - '69'
  - '70'
  - '498'
  - '499'
  - '500'
  - '501'
  - '502'
  - '503'
description: "Für eine Ausgabe des Vor- und Nachnamen habe ich eine kleine Funktion geschrieben, die den ersten Buchstaben eines Strings großschreibt. Falls Benutzer beispielsweise seinen Vornamen klein geschrieben hat, kann man so ganz einfach den ersten Buchstaben wieder groß schreiben. Sicherlich kann man das Ganze noch weiterführen und jedes Wort eines Strings kapitalisieren, aber das brauchte ich nicht. \nHier der Codeschnipsel:\nJavascript Prototype Funktion \r\nString.prototype.capitalize = function() {\r\n    return this.charAt(0).toUpperCase() + this.slice(1);\r\n}\r\n Benutzung \r\n'hans Meier'.capitalize(); =&gt; 'Hans Meier';\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript String-Prototype-Funktion: Ersten Buchstaben großschreiben, kapitalisieren

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#funktion](/tag.html?tag=13&cHash=395d33aa14ac557c3256d2625e0c2b41)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#js](/tag.html?tag=70&cHash=97020bd023d81a2e1d049a787e531ccd)[#kapitalisieren](/tag.html?tag=498&cHash=86ac99c5377429c2381d70761bee167d)[#capitalize](/tag.html?tag=499&cHash=32258b8abd4c33dc33f9a2aef5bf2d8e)[#first letter](/tag.html?tag=500&cHash=8894c6788ed76670e2816083b645aeb9)[#erster Buchstabe](/tag.html?tag=501&cHash=4e4dc53a845a2ed90d8a92b9e7a3ccd5)[#großschreiben](/tag.html?tag=502&cHash=d3993f2d3286aefe7a93a475372b096b)[#prototype](/tag.html?tag=503&cHash=b45e3c12d91ccd54e1284fa9f683961e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. Jun 2014

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.