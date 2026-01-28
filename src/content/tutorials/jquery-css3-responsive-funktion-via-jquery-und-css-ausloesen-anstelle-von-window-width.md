---
title: >-
  jQuery /CSS3: Responsive Funktion via jQuery und CSS auslösen, anstelle von
  window width
date: '2015-06-24T16:47:33.000Z'
slug: >-
  jquery-css3-responsive-funktion-via-jquery-und-css-ausloesen-anstelle-von-window-width
tags:
  - '20'
  - '25'
  - '211'
  - '714'
  - '715'
  - '716'
description: "Möchte man Javascript-Funktionen bei bestimmten Bildschirmgrößen auslösen, so fällt einem schnell auf, dass Window Width (Browserbreite) nicht der Breite entspricht, die Mediaqueries benutzen. Dies liegt meistens an der Scrollbar, die je nach Betriebssystem und Browser 10-20px in Anspruch nimmt. So kommt es vor, dass jQuery die Funktion zu spät, oder zu früh auslöst und die restliche Seite noch nicht im Mediaquery ist. Dadurch kann es an den Breakpoints zu unschönen Effekten kommen.\r\nDie Lösung\r\nDie Lösung ist eigentlich relativ simpel. Erstellt für jeden Mediaquery bzw. jede Funktion die eine Breite benötigt ein leeres HTML Element, beispielsweise ein \r\n und gebt diesem eine eindeutige Id oder Klasse. \r\nNun stylt in euren Mediaqueries diese Elemente mit display:none oder display:block, je nachdem wann diese angezeigt werden sollen. \r\nDanach könnt ihr mit jQuery einfach testen, ob ein bestimmtes Div sichtbar ist oder eben nicht. \r\nBeispiel &lt;div id=\"tablet-indicator\"&gt;&lt;/div&gt; CSS \r\n#tablet-indicator {\r\n    display: none;\r\n}\r\n@media (max-width: 991px) {\r\n  #tablet-indicator {\r\n    display: block;\r\n  }\r\n}\r\n Javascript \r\n$(window).resize(function(){\r\n  if($('#tablet-indicator').is(':visible')){\r\n    // Your Code for Tablet\r\n  }\r\n});\r\n So was macht das Beispiel?\r\nWir haben ein Div mit der ID &quot;tablet-indicator&quot; irgendwo auf der Seite (Am besten im Footer) Dieses Div ist ausgeblendet via CSS Es wird eingeblendet, solange man unter 992px Bildschirmbreite hat Das Javascript guckt ob das Div sichtbar ist, oder nicht. Ist es sichtbar, bedeutet das, wir sind im Tablet Viewport"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery#CSS

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#functions](/tag.html?tag=211&cHash=bff81af22a8cca726548715ee64f36ee)[#mediaquery](/tag.html?tag=714&cHash=5ff5b3a7e4adaf50fde71b49b068d80e)[#window width](/tag.html?tag=715&cHash=58225daf8496032e158cf76247c0a3c7)[#fire](/tag.html?tag=716&cHash=e9a5aa5699ea7a747ab8399aee41152f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

24\. Jun 2015

Möchte man Javascript-Funktionen bei bestimmten Bildschirmgrößen auslösen, so fällt einem schnell auf, dass Window Width (Browserbreite) nicht der Breite entspricht, die Mediaqueries benutzen. Dies liegt meistens an der Scrollbar, die je nach Betriebssystem und Browser 10-20px in Anspruch nimmt. So kommt es vor, dass jQuery die Funktion zu spät, oder zu früh auslöst und die restliche Seite noch nicht im Mediaquery ist. Dadurch kann es an den Breakpoints zu unschönen Effekten kommen.

**Die Lösung**

Die Lösung ist eigentlich relativ simpel. Erstellt für jeden Mediaquery bzw. jede Funktion die eine Breite benötigt ein leeres HTML Element, beispielsweise ein

und gebt diesem eine eindeutige Id oder Klasse.

Nun stylt in euren Mediaqueries diese Elemente mit display:none oder display:block, je nachdem wann diese angezeigt werden sollen.

Danach könnt ihr mit jQuery einfach testen, ob ein bestimmtes Div sichtbar ist oder eben nicht.

**Beispiel**

```
<div id="tablet-indicator"></div>
```

**CSS**

```

#tablet-indicator {
    display: none;
}
@media (max-width: 991px) {
  #tablet-indicator {
    display: block;
  }
}
```

**Javascript**

```

$(window).resize(function(){
  if($('#tablet-indicator').is(':visible')){
    // Your Code for Tablet
  }
});
```

**So was macht das Beispiel?**

*   Wir haben ein Div mit der ID "tablet-indicator" irgendwo auf der Seite (Am besten im Footer)
*   Dieses Div ist ausgeblendet via CSS
*   Es wird eingeblendet, solange man unter 992px Bildschirmbreite hat
*   Das Javascript guckt ob das Div sichtbar ist, oder nicht. Ist es sichtbar, bedeutet das, wir sind im Tablet Viewport

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/2c6f145fbec8cd141e164cebcf102e3f?s=75&d=mm&r=g)
    
    Matthias
    
    Hey Andre, danke für den kleinen aber sehr effektiven Trick! Hatte mich schon geärgert, weil auf dem Mac ohne Scrollbar alles passte, allerdings auf Windows-Rechnern nicht. Nun habe ich eine Lösung die überall funktioniert. Vielen Danke dafür!
    
    20\. Dec 2016 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.