---
title: 'Bootstrap: Blende andere Popover aus, sobald ein neuer sich öffnet'
date: '2016-08-21T22:00:00.000Z'
slug: bootstrap-blende-andere-popover-aus-sobald-ein-neuer-sich-oeffnet
tags:
  - boostrap
  - popover
  - ausblenden
  - hide
  - anderen
description: "Von sich aus kann Bootstrap es nicht, dass Popover geschlossen werden, sobald man ein neues öffnet. Das führt schnell dazu, dann man Unmengen von Popovern auf der Seite hat, die sich gegenseitig überlappen.&nbsp;\r\nMit folgendem kleinem Code, kann man die Popover ausblenden, die gerade nicht aktiv angeklickt werden. // add popver functionality\r\n$('.popoverelem').popover();\r\n\r\n// close other popover\r\n$('.popoverelem').on('click', function (e) {\r\n    $('.popoverelem').not(this).popover('hide');\r\n}); Was macht der Code?\r\nKlickt man auf ein Element, das über einen Popover verfügt, so werden alle Popover, außer das was geklickt wurde, ausgeblendet.\r\nIch hoffe damit konnte ich weiterhelfen!"
image: /fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png
demo_url: null
download_url: null
---

Von sich aus kann Bootstrap es nicht, dass Popover geschlossen werden, sobald man ein neues öffnet. Das führt schnell dazu, dann man Unmengen von Popovern auf der Seite hat, die sich gegenseitig überlappen. 

Mit folgendem kleinem Code, kann man die Popover ausblenden, die gerade nicht aktiv angeklickt werden.

```javascript
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