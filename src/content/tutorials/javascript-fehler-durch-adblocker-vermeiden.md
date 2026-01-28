---
title: 'Javascript: Fehler durch Adblocker vermeiden'
date: '2016-08-29T22:00:00.000Z'
slug: javascript-fehler-durch-adblocker-vermeiden
tags:
  - '69'
  - '259'
  - '889'
  - '528'
  - '890'
  - '891'
description: "Da immer mehr Leute Adblocker benutzen und viele Adblocker sogar Tracking Services wie Google Analytics entfernen, kann es leider vorkommen, dass das globale Javascript abstürzt, weil die Funktion ga nicht verfügbar ist. Mit dem folgenden kleinen Snippet kann man die Analytics Events weiterhin benutzen, ohne dass es Fehler gibt. Dafür muss man einfach ga() durch safeGa() ersetzen. function safeGA(){\r\n  if(/undef/.test(typeof ga)){\r\n    return;\r\n  }\r\n\r\n  ga.apply(window,arguments);\r\n}\r\n\r\n// vorher\r\nga('send', 'event', 'Kontakt', 'Kontaktformular abgesendet')\r\n\r\n// So benutzt man GA jetzt,\r\nsafeGA('send', 'event', 'Kontakt', 'Kontaktformular abgesendet');"
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

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#Google](/tag.html?tag=259&cHash=b1ab39e7e8f860481faa9bb151ed2ce4)[#error](/tag.html?tag=528&cHash=0431293d38641e545ed0dd31e3471d2b)[#analytics](/tag.html?tag=889&cHash=cedffb15a26027818bb8106393afc843)[#catch](/tag.html?tag=890&cHash=0209fa09aaaed2996766756436a0b3a3)[#adblock](/tag.html?tag=891&cHash=ba4c0709f989002228208ce25a978a30)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. Aug 2016

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.