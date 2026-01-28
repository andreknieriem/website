---
title: 'Javascript: Scrollbarbreite herausfinden'
date: '2015-11-06T17:24:13.000Z'
slug: javascript-scrollbarbreite-herausfinden
tags:
  - '20'
  - '97'
  - '111'
  - '116'
  - '512'
  - '762'
  - '787'
  - '788'
  - '789'
description: "Möchte man für etwas die Scrollbar ausblenden, so kann man einfach ein overflow:hidden an das Body-Element mit Javascript setzen. Allerdings verschiebt sich dabei der Content immer um die Breite der Scrollbar. Möchte man diesen Effekt verhindern, so kann man mit folgendem Snippet die Breite der Scrollbar herausfinden. \r\nmeasureScrollbar = function () {\r\n    var scrollDiv = document.createElement('div')\r\n    scrollDiv.className = 'modal-scrollbar-measure'\r\n    $('body').append(scrollDiv)\r\n    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth\r\n    $('body')[0].removeChild(scrollDiv)\r\n    return scrollbarWidth\r\n}\r\n Um das Ganze jetzt sinnvoll einzusetzen muss man die Funktion aufrufen und das Ergebnis dann mit dem overflow:hidden an den Body setzen. Könnte mit jQuery so gehen: \r\nvar scrollbarWidth = measureScrollbar();\r\n$('body').css({\r\n    'overflow' : 'hidden',\r\n    'padding-right': scrollbarWidth\r\n});\r\n Natürlich braucht man für das Zurücksetzen, bzw. überhaupt erst setzen des Padding eine Option, die sagt ob es gerade überhaupt eine Scrollbar gibt und wie das Padding möglicherweise vorher am Body war."
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

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#breite](/tag.html?tag=111&cHash=47034398393a2471607b6bfec6127f6a)[#width](/tag.html?tag=116&cHash=faba91b00593bfa0d7bf525b823ade5d)[#bekommen](/tag.html?tag=512&cHash=03330f1d0965d374dabcf8dd59405ca7)[#scrollbar](/tag.html?tag=762&cHash=f37a475d300e8dc28f89811afb7e092c)[#javascr](/tag.html?tag=787&cHash=1edaf3775fca77d7a1e4eaa258fa98d7)[#ermitteln](/tag.html?tag=788&cHash=ba2d9dfd1c3fa38808e7d7211648b7d8)[#errechnen](/tag.html?tag=789&cHash=b4cc130af8131884f32ea2e76ce2bf3b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Nov 2015

Möchte man für etwas die Scrollbar ausblenden, so kann man einfach ein overflow:hidden an das Body-Element mit Javascript setzen. Allerdings verschiebt sich dabei der Content immer um die Breite der Scrollbar. Möchte man diesen Effekt verhindern, so kann man mit folgendem Snippet die Breite der Scrollbar herausfinden.

```

measureScrollbar = function () {
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    $('body').append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    $('body')[0].removeChild(scrollDiv)
    return scrollbarWidth
}
```

Um das Ganze jetzt sinnvoll einzusetzen muss man die Funktion aufrufen und das Ergebnis dann mit dem overflow:hidden an den Body setzen. Könnte mit jQuery so gehen:

```

var scrollbarWidth = measureScrollbar();
$('body').css({
    'overflow' : 'hidden',
    'padding-right': scrollbarWidth
});
```

Natürlich braucht man für das Zurücksetzen, bzw. überhaupt erst setzen des Padding eine Option, die sagt ob es gerade überhaupt eine Scrollbar gibt und wie das Padding möglicherweise vorher am Body war.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.