---
title: Facebook Fanbox/Likebox stylen und anpassen
date: '2011-04-11T11:19:45.000Z'
slug: facebook-fanboxlikebox-stylen-und-anpassen
tags:
  - css
  - facebook fanbox
  - faces
  - gesichter
  - likebox
  - stylen
description: >-

  Eine Facebook Fanbox/Likebox in seine eigene Seite einzubauen ist meist
  relativ einfach. Erst geht man auf die Developer Seite von Facebook zur
  FanboxDann gibt man seine URL ein, setzt ne Breite und nen paar andere Haken,
  klickt auf Get-Code und fertig.

  Das hat den Vorteil, dass sich jeder schnell eine Fanbox erstellen kann, ohne
  irgendwelche Html und Css Kenntnisse.

  Doch was ist wenn man Html und Css beherrscht und eine individuelle Fanbox
  haben möchte, mit einer bestimmten Anzahl an Gesichtern, eigene Farben und
  anderen Einstellungen? Mit der neuen Funktion bei Facebook ist da leider nicht
  viel zu machen.

  CSS-fähige Fanbox

  Die alte Fanbox von Facebook ist das Stichwort. Diese Box war
  Nutzerunfreundlicher, dafür konnte man sie aber anpassen.

  Um die Fanbox einzubauen braucht ihr folgenden Code: 

  &lt;script
  src="http://connect.facebook.net/de_DE/all.js#xfbml=1"&gt;&lt;/script&gt;

  &lt;fb:fan profile_id="135350353204841"
      css="http://deineseite.de/deincss.css"
      connections="8"
      stream="false"
      logobar="false"
      width="292"
      height="300px;"&gt;
  &lt;/fb:fan&gt;
   Die Erläuterung der verwendeten Attribute:
  profile_id – die ID der jeweiligen Facebook Fanseite. Diese ist am einfachsten
  zu finden, indem man sich in Facebook die URL im Punkt “Seite bearbeiten”
  genauer ansieht

  css – die Url zu eurer Css-Datei. Achtung: Facebook cached diese Datei –
  daher, nach jeder Bearbeitung der Datei eine andere Nummer (Beispiel: ?10) an
  den Aufruf anhängen! Anonsten werden Änderungen nicht angezeigt.

  connections – die Anzahl der darzustellenden Gesichter/Faces bzw. Fans

  stream – true oder false, bindet die Neuigkeiten eurer Seite ein

  logobar – true oder false, blendet den blauen facebook-Schriftzug über der Box
  ein oder aus

  width – die Breite der Box in Pixeln

  height - die Höhe der Box in Pixeln

  Wenn ihr nun alles richtig gemacht habt, dann solltet ihr eine schöne Facebook
  Likebox haben.
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

[![Facebook Fanbox](http://andreknieriem.de/wp-content/uploads/2011/04/fanbox-392x300.jpg "Facebook Fanbox")](http://andreknieriem.de/wp-content/uploads/2011/04/fanbox.jpg)

Eine Facebook Fanbox/Likebox in seine eigene Seite einzubauen ist meist relativ einfach. Erst geht man auf die Developer Seite von Facebook zur [Fanbox](http://developers.facebook.com/docs/reference/plugins/like-box/)Dann gibt man seine URL ein, setzt ne Breite und nen paar andere Haken, klickt auf Get-Code und fertig.

Das hat den Vorteil, dass sich jeder schnell eine Fanbox erstellen kann, ohne irgendwelche Html und Css Kenntnisse.

Doch was ist wenn man Html und Css beherrscht und eine individuelle Fanbox haben möchte, mit einer bestimmten Anzahl an Gesichtern, eigene Farben und anderen Einstellungen? Mit der neuen Funktion bei Facebook ist da leider nicht viel zu machen.

**CSS-fähige Fanbox**

Die alte Fanbox von Facebook ist das Stichwort. Diese Box war Nutzerunfreundlicher, dafür konnte man sie aber anpassen.

Um die Fanbox einzubauen braucht ihr folgenden Code:

```javascript

<script src="http://connect.facebook.net/de_DE/all.js#xfbml=1"></script>
<fb:fan profile_id="135350353204841"
    css="http://deineseite.de/deincss.css"
    connections="8"
    stream="false"
    logobar="false"
    width="292"
    height="300px;">
</fb:fan>

```

**Die Erläuterung der verwendeten Attribute:**

*   profile\_id – die ID der jeweiligen Facebook Fanseite. Diese ist am einfachsten zu finden, indem man sich in Facebook die URL im Punkt “Seite bearbeiten” genauer ansieht
*   css – die Url zu eurer Css-Datei. Achtung: Facebook cached diese Datei – daher, nach jeder Bearbeitung der Datei eine andere Nummer (Beispiel: ?10) an den Aufruf anhängen! Anonsten werden Änderungen nicht angezeigt.
*   connections – die Anzahl der darzustellenden Gesichter/Faces bzw. Fans
*   stream – true oder false, bindet die Neuigkeiten eurer Seite ein
*   logobar – true oder false, blendet den blauen facebook-Schriftzug über der Box ein oder aus
*   width – die Breite der Box in Pixeln
*   height - die Höhe der Box in Pixeln

Wenn ihr nun alles richtig gemacht habt, dann solltet ihr eine schöne Facebook Likebox haben.