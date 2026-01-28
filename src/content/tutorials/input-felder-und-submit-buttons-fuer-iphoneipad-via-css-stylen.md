---
title: Input-Felder und Submit-Buttons für iPhone/iPad via CSS stylen
date: '2012-07-26T07:10:27.000Z'
slug: input-felder-und-submit-buttons-fuer-iphoneipad-via-css-stylen
tags:
  - '2'
  - '25'
  - '55'
  - '78'
  - '80'
  - '84'
  - '110'
description: "Wenn man ein Formular für das iPhone oder iPad mit CSS stylen will, merkt man schnell, dass der mobile Safari einem die Styles gnadenlos kaputt macht.\nSo sollte es aussehen:\n\nund so sieht es aus:\n\nNach einigen Recherchen habe ich dann folgende Lösung gefunden: \r\n-webkit-appearance: none;\r\n-moz-appearance: none;\r\n Fügt man diesen Schnipsel zu seiner CSS-Datei hinzu dann sagt man dem mobilen Safari, dass er wirklich diesen Button nicht nach der Apple UI stylen soll."
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Wenn man ein Formular für das iPhone oder iPad mit CSS stylen will, merkt man schnell, dass der mobile Safari einem die Styles gnadenlos kaputt macht.

**So sollte es aussehen:**

[![](http://andreknieriem.de/wp-content/uploads/2012/07/submit_3.png "submit_3")](http://andreknieriem.de/wp-content/uploads/2012/07/submit_3.png)

**und so sieht es aus:**

[![](http://andreknieriem.de/wp-content/uploads/2012/07/submit_1.png "submit_1")](http://andreknieriem.de/wp-content/uploads/2012/07/submit_1.png)

Nach einigen Recherchen habe ich dann folgende Lösung gefunden:

```

-webkit-appearance: none;
-moz-appearance: none;
```

Fügt man diesen Schnipsel zu seiner CSS-Datei hinzu dann sagt man dem mobilen Safari, dass er wirklich diesen Button nicht nach der Apple UI stylen soll.