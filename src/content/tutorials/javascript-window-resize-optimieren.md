---
title: 'Javascript: Window Resize optimieren'
date: '2021-08-23T07:24:00.000Z'
slug: javascript-window-resize-optimieren
tags:
  - '69'
  - '70'
  - '1263'
  - '1264'
  - '1265'
  - '1266'
  - '1267'
description: "Möchte man auf einer Webseite etwas mit Javascript je nach Bildschirmgröße verändern, so hat man einen Eventlistener auf resize. Macht man nun etwas mehr Veränderungen oder hat ein langsameres Gerät, so kommt das Javascript und der Browser schnell an seine Grenze. Ändert man die Größe, so werden sehr sehr viele Events geworfen. Hier mal ein Beispiel ohne Optimierung.\r\nOhne Optimierung // window.resize callback function\r\nfunction resizeFunction() {\r\n  // calls many many times\r\n  // do anything\r\n}\r\n\r\n// listen for window.resize\r\nwindow.addEventListener('resize', resizeFunction);\r\n\r\n// call once to initialize page\r\nresizeFunction(); Nun gibt es 2 Möglichkeiten das Ganze besser zu gestalten. Einmal Throttling und einmal Debouncing.\r\nThrottling\r\nBeim Throttling legt man fest, wie oft das Event hintereinander geworfen werden soll. Man legt eine Zeitspanne fest, nach wie viel Milisekunden das Event nochmal gefeuert werden darf. Hier der vorherige Code um das Feature erweitert. let throttled = false; // are we currently throttled?\r\nlet delay = 250; // ms between calls\r\n\r\n// window.resize callback function\r\nfunction resizeFunction() {\r\n  // do anything\r\n}\r\n\r\n// window.resize event listener\r\nwindow.addEventListener('resize', () => {\r\n  // only run if we're not throttled\r\n  if (!throttled) {\r\n    // actual callback action\r\n    resizeFunction();\r\n    // we're throttled!\r\n    throttled = true;\r\n    // set a timeout to un-throttle\r\n    setTimeout(function() {\r\n      throttled = false;\r\n    }, delay);\r\n  }  \r\n});\r\n\r\nresizeFunction(); Debouncing\r\nIm Gegensatz zum Throttling verlagert das Debouncing das Event nach Hinten und meistens wird es dann nur einmal geworfen. Also erst wenn der User eine Zeit lang das Fenster nicht mehr verändert wird das Event gefeuert. So kann man abwarten bis das Fenster die Größe erreicht in der der Benutzer die Webseite weiter benutzen wird. let timeout = false; // holder for timeout id\r\nlet delay = 250; // delay after event is \"complete\" to run callback\r\n\r\n// window.resize callback function\r\nfunction resizeFunction() {\r\n  // do anything\r\n}\r\n\r\n// window.resize event listener\r\nwindow.addEventListener('resize', () => {\r\n  // clear the timeout\r\n  clearTimeout(timeout);\r\n  // start timing for event \"completion\"\r\n  timeout = setTimeout(resizeFunction, delay);\r\n});\r\n\r\nresizeFunction(); Für welche Variante man sich auch entscheided, beide Varianten sind wohl besser als die ohne Optimierung."
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Möchte man auf einer Webseite etwas mit Javascript je nach Bildschirmgröße verändern, so hat man einen Eventlistener auf resize. Macht man nun etwas mehr Veränderungen oder hat ein langsameres Gerät, so kommt das Javascript und der Browser schnell an seine Grenze. Ändert man die Größe, so werden sehr sehr viele Events geworfen. Hier mal ein Beispiel ohne Optimierung.

### Ohne Optimierung

```
// window.resize callback function
function resizeFunction() {
  // calls many many times
  // do anything
}

// listen for window.resize
window.addEventListener('resize', resizeFunction);

// call once to initialize page
resizeFunction();
```

Nun gibt es 2 Möglichkeiten das Ganze besser zu gestalten. Einmal Throttling und einmal Debouncing.

### Throttling

Beim Throttling legt man fest, wie oft das Event hintereinander geworfen werden soll. Man legt eine Zeitspanne fest, nach wie viel Milisekunden das Event nochmal gefeuert werden darf. Hier der vorherige Code um das Feature erweitert.

```
let throttled = false; // are we currently throttled?
let delay = 250; // ms between calls

// window.resize callback function
function resizeFunction() {
  // do anything
}

// window.resize event listener
window.addEventListener('resize', () => {
  // only run if we're not throttled
  if (!throttled) {
    // actual callback action
    resizeFunction();
    // we're throttled!
    throttled = true;
    // set a timeout to un-throttle
    setTimeout(function() {
      throttled = false;
    }, delay);
  }  
});

resizeFunction();
```

### Debouncing

Im Gegensatz zum Throttling verlagert das Debouncing das Event nach Hinten und meistens wird es dann nur einmal geworfen. Also erst wenn der User eine Zeit lang das Fenster nicht mehr verändert wird das Event gefeuert. So kann man abwarten bis das Fenster die Größe erreicht in der der Benutzer die Webseite weiter benutzen wird.

```
let timeout = false; // holder for timeout id
let delay = 250; // delay after event is "complete" to run callback

// window.resize callback function
function resizeFunction() {
  // do anything
}

// window.resize event listener
window.addEventListener('resize', () => {
  // clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(resizeFunction, delay);
});

resizeFunction();
```

Für welche Variante man sich auch entscheided, beide Varianten sind wohl besser als die ohne Optimierung.