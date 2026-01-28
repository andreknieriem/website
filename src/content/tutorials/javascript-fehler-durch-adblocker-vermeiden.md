---
title: 'Javascript: Fehler durch Adblocker vermeiden'
date: '2016-08-29T22:00:00.000Z'
slug: javascript-fehler-durch-adblocker-vermeiden
tags:
  - javascript
  - Google
  - analytics
  - error
  - catch
  - adblock
description: "Da immer mehr Leute Adblocker benutzen und viele Adblocker sogar Tracking Services wie Google Analytics entfernen, kann es leider vorkommen, dass das globale Javascript abstürzt, weil die Funktion ga nicht verfügbar ist. Mit dem folgenden kleinen Snippet kann man die Analytics Events weiterhin benutzen, ohne dass es Fehler gibt. Dafür muss man einfach ga() durch safeGa() ersetzen. function safeGA(){\r\n  if(/undef/.test(typeof ga)){\r\n    return;\r\n  }\r\n\r\n  ga.apply(window,arguments);\r\n}\r\n\r\n// vorher\r\nga('send', 'event', 'Kontakt', 'Kontaktformular abgesendet')\r\n\r\n// So benutzt man GA jetzt,\r\nsafeGA('send', 'event', 'Kontakt', 'Kontaktformular abgesendet');"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Da immer mehr Leute Adblocker benutzen und viele Adblocker sogar Tracking Services wie Google Analytics entfernen, kann es leider vorkommen, dass das globale Javascript abstürzt, weil die Funktion **ga** nicht verfügbar ist. Mit dem folgenden kleinen Snippet kann man die Analytics Events weiterhin benutzen, ohne dass es Fehler gibt. Dafür muss man einfach ga() durch safeGa() ersetzen.

```
function safeGA(){
  if(/undef/.test(typeof ga)){
    return;
  }

  ga.apply(window,arguments);
}

// vorher
ga('send', 'event', 'Kontakt', 'Kontaktformular abgesendet')

// So benutzt man GA jetzt,
safeGA('send', 'event', 'Kontakt', 'Kontaktformular abgesendet');
```