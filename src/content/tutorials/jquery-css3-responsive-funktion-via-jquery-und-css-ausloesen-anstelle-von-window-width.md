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
demo_url: null
download_url: null
---

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