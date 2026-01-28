---
title: 'Javascript: Scrollbarbreite herausfinden'
date: '2015-11-06T17:24:13.000Z'
slug: javascript-scrollbarbreite-herausfinden
tags:
  - jquery
  - get
  - breite
  - width
  - bekommen
  - scrollbar
  - javascr
  - ermitteln
  - errechnen
description: "Möchte man für etwas die Scrollbar ausblenden, so kann man einfach ein overflow:hidden an das Body-Element mit Javascript setzen. Allerdings verschiebt sich dabei der Content immer um die Breite der Scrollbar. Möchte man diesen Effekt verhindern, so kann man mit folgendem Snippet die Breite der Scrollbar herausfinden. \r\nmeasureScrollbar = function () {\r\n    var scrollDiv = document.createElement('div')\r\n    scrollDiv.className = 'modal-scrollbar-measure'\r\n    $('body').append(scrollDiv)\r\n    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth\r\n    $('body')[0].removeChild(scrollDiv)\r\n    return scrollbarWidth\r\n}\r\n Um das Ganze jetzt sinnvoll einzusetzen muss man die Funktion aufrufen und das Ergebnis dann mit dem overflow:hidden an den Body setzen. Könnte mit jQuery so gehen: \r\nvar scrollbarWidth = measureScrollbar();\r\n$('body').css({\r\n    'overflow' : 'hidden',\r\n    'padding-right': scrollbarWidth\r\n});\r\n Natürlich braucht man für das Zurücksetzen, bzw. überhaupt erst setzen des Padding eine Option, die sagt ob es gerade überhaupt eine Scrollbar gibt und wie das Padding möglicherweise vorher am Body war."
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

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