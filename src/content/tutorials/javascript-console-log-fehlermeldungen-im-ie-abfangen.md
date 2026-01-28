---
title: 'Javascript: Console-Log Fehlermeldungen im IE abfangen'
date: '2014-09-15T15:11:54.000Z'
slug: javascript-console-log-fehlermeldungen-im-ie-abfangen
tags:
  - '69'
  - '87'
  - '527'
  - '528'
description: "Falls man mal ein Console.log im Code vergessen hat, so ist das eigentlich ja nichts schlimmes. Allerdings hat man im Internet Explorer dann oft einen fatalen JS-Fehler und das komplette Javascript der Seite ist lahmgelegt. Das Ganze lässt sich mit folgendem Code-Schnipsel aber abfangen. \r\nif(/^undef/i.test(typeof console)){ window.console = { log : function(){} }; }\r\n Einfach diesen Code immer am Anfang deiner Webseite reinladen und du kannst auch mal ausversehen ein Console.log vergessen."
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#console log](/tag.html?tag=527&cHash=1583a000e77b5f61bb2c646aca4ff52b)[#error](/tag.html?tag=528&cHash=0431293d38641e545ed0dd31e3471d2b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Sep 2014

Falls man mal ein Console.log im Code vergessen hat, so ist das eigentlich ja nichts schlimmes. Allerdings hat man im Internet Explorer dann oft einen fatalen JS-Fehler und das komplette Javascript der Seite ist lahmgelegt. Das Ganze lässt sich mit folgendem Code-Schnipsel aber abfangen.

```

if(/^undef/i.test(typeof console)){ window.console = { log : function(){} }; }
```

Einfach diesen Code immer am Anfang deiner Webseite reinladen und du kannst auch mal ausversehen ein Console.log vergessen.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.