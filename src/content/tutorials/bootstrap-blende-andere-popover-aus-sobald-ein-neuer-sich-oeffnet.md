---
title: 'Bootstrap: Blende andere Popover aus, sobald ein neuer sich öffnet'
date: '2016-08-21T22:00:00.000Z'
slug: bootstrap-blende-andere-popover-aus-sobald-ein-neuer-sich-oeffnet
tags:
  - '866'
  - '463'
  - '132'
  - '134'
  - '867'
description: "Von sich aus kann Bootstrap es nicht, dass Popover geschlossen werden, sobald man ein neues öffnet. Das führt schnell dazu, dann man Unmengen von Popovern auf der Seite hat, die sich gegenseitig überlappen.&nbsp;\r\nMit folgendem kleinem Code, kann man die Popover ausblenden, die gerade nicht aktiv angeklickt werden. // add popver functionality\r\n$('.popoverelem').popover();\r\n\r\n// close other popover\r\n$('.popoverelem').on('click', function (e) {\r\n    $('.popoverelem').not(this).popover('hide');\r\n}); Was macht der Code?\r\nKlickt man auf ein Element, das über einen Popover verfügt, so werden alle Popover, außer das was geklickt wurde, ausgeblendet.\r\nIch hoffe damit konnte ich weiterhelfen!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap: Blende andere Popover aus, sobald ein neuer sich öffnet

#Tutorials#Bootstrap#jQuery

* * *

![](/fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#ausblenden](/tag.html?tag=132&cHash=0cb09d111500889fb95e0aa2cc85bbe0)[#hide](/tag.html?tag=134&cHash=bacb6ef1bbc2501f704c5e97e0aec111)[#popover](/tag.html?tag=463&cHash=60b8d6b9897dedb0b91c4e1acf5ceffe)[#boostrap](/tag.html?tag=866&cHash=bcbab9f7af6bd20fda2c2e5a77542baf)[#anderen](/tag.html?tag=867&cHash=2a1922347a23fdc209a0e93f4c1366fb)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

22\. Aug 2016

Von sich aus kann Bootstrap es nicht, dass Popover geschlossen werden, sobald man ein neues öffnet. Das führt schnell dazu, dann man Unmengen von Popovern auf der Seite hat, die sich gegenseitig überlappen. 

Mit folgendem kleinem Code, kann man die Popover ausblenden, die gerade nicht aktiv angeklickt werden.

```
// add popver functionality
$('.popoverelem').popover();

// close other popover
$('.popoverelem').on('click', function (e) {
    $('.popoverelem').not(this).popover('hide');
});
```

**Was macht der Code?**

Klickt man auf ein Element, das über einen Popover verfügt, so werden alle Popover, außer das was geklickt wurde, ausgeblendet.

Ich hoffe damit konnte ich weiterhelfen!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.