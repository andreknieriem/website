---
title: CSS Hacks IE 8, IE7 und IE6 direkt ansprechen
date: '2013-01-08T11:38:45.000Z'
slug: css-hacks-ie-8-ie7-und-ie6-direkt-ansprechen
tags:
  - css
  - internet explorer
  - css hacks
description: "Jeder der schon einmal eine Webseite erstellt hat wird merken, dass eigentlich alle Version unter dem 9er Probleme machen bei der Darstellung. Leider sind viele Leute noch mit alten Windows Rechner und noch ältereren Browsern unterwegs. Der IE6 ist zwar mitlerweile fast ausgestorben, doch haben noch eine große Anzahl von Usern den IE 7 und 8. Hier habe ich einige Schnipsen, bzw. CSS-Hacks um die IE's direkt zusammen oder einzelnd anzusprechen.\nInternet Explorer 8 und darunter\nDer Trick um alle Internet Explorer Versionen kleiner als 9 anzusprechen ist folgender: \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background: red\\9; /* IE8 und darunter */\r\n}\r\n Das \"9\" ist hier der Trick. Dies funktioniert aber wirklich nur für IE's mit der Version < 9. (IE 8 und darunter)\nNur den Internet Explorer 8 geht folgendermaßen \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background: red\\9; /* IE8 und darunter */\r\n    background/***/: blue\\9 /* Nur IE8 */\r\n}\r\n Internet Explorer 7 und darunter\nUm Versionen kleiner 7 anzusprechen, muss ein Stern * vor das entsprechende Attribut gesetzt werden. \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background: red\\9; /* IE8 und darunter */\r\n    *background: yellow; /* IE7 und darunter */\r\n}\r\n CSS Anweisungen für den IE7 gehen also mit einem \"*\" vor der Anweisung.\nInternet Explorer 6\nZusätzlich zu den oberen beiden Hacks, gibt es auch noch die Möglichkeit ausschließlich den Internet Explorer 6 anzusprechen. Dies funktioniert nach dem gleichen Prinzip wie die Sternmethode, nur das ein Unterstrich verwendet wird. \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background/***/: blue\\9 /* Nur IE8 */\r\n    background: red\\9; /* IE8 und darunter */\r\n    *background: yellow; /* IE7 und darunter */\r\n    _background: gray; /* Nur IE6 */\r\n}\r\n "
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Jeder der schon einmal eine Webseite erstellt hat wird merken, dass eigentlich alle Version unter dem 9er Probleme machen bei der Darstellung. Leider sind viele Leute noch mit alten Windows Rechner und noch ältereren Browsern unterwegs. Der IE6 ist zwar mitlerweile fast ausgestorben, doch haben noch eine große Anzahl von Usern den IE 7 und 8. Hier habe ich einige Schnipsen, bzw. CSS-Hacks um die IE's direkt zusammen oder einzelnd anzusprechen.

Internet Explorer 8 und darunter

Der Trick um alle Internet Explorer Versionen kleiner als 9 anzusprechen ist folgender:

```

.class {
    background: blue; /* Jeder Browser */
    background: red\9; /* IE8 und darunter */
}
```

Das "9" ist hier der Trick. Dies funktioniert aber wirklich nur für IE's mit der Version < 9. (IE 8 und darunter)

Nur den Internet Explorer 8 geht folgendermaßen

```

.class {
    background: blue; /* Jeder Browser */
    background: red\9; /* IE8 und darunter */
    background/***/: blue\9 /* Nur IE8 */
}
```

Internet Explorer 7 und darunter

Um Versionen kleiner 7 anzusprechen, muss ein Stern \* vor das entsprechende Attribut gesetzt werden.

```

.class {
    background: blue; /* Jeder Browser */
    background: red\9; /* IE8 und darunter */
    *background: yellow; /* IE7 und darunter */
}
```

CSS Anweisungen für den IE7 gehen also mit einem "\*" vor der Anweisung.

Internet Explorer 6

Zusätzlich zu den oberen beiden Hacks, gibt es auch noch die Möglichkeit ausschließlich den Internet Explorer 6 anzusprechen. Dies funktioniert nach dem gleichen Prinzip wie die Sternmethode, nur das ein Unterstrich verwendet wird.

```

.class {
    background: blue; /* Jeder Browser */
    background/***/: blue\9 /* Nur IE8 */
    background: red\9; /* IE8 und darunter */
    *background: yellow; /* IE7 und darunter */
    _background: gray; /* Nur IE6 */
}
```