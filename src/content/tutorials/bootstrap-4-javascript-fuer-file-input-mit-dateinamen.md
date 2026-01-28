---
title: 'Bootstrap 4: Javascript für File-Input mit Dateinamen'
date: '2019-11-06T12:36:00.000Z'
slug: bootstrap-4-javascript-fuer-file-input-mit-dateinamen
tags:
  - bootstrap
  - '4'
  - fileinput
  - file
  - input
  - names
  - javascript
  - multiple
  - show
  - anzeige
description: "Die Custom-Bootstrap File-Input sehen ja schon deutlich besser aus, als die vom Browser. Leider haben sie einen Nachteil. Man kann die Dateinamen nicht sehen, die man ausgewählt hat. In der Dokumentation wird darauf hingewiesen, dass man hierfür etwas Javascript braucht. Warum das dann nicht standardmäßig mit drin ist, ist mir ein Rätsel.\r\nHier ist das Snipped, dass man benötigt, damit alles gut aussieht: $('.custom-file input').change(function (e) {\r\n    var files = [];\r\n    for (var i = 0; i < $(this)[0].files.length; i++) {\r\n        files.push($(this)[0].files[i].name);\r\n    }\r\n    $(this).next('.custom-file-label').html(files.join(', '));\r\n});"
image: /fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png
demo_url: null
download_url: null
---

Die Custom-Bootstrap File-Input sehen ja schon deutlich besser aus, als die vom Browser. Leider haben sie einen Nachteil. Man kann die Dateinamen nicht sehen, die man ausgewählt hat. In der Dokumentation wird darauf hingewiesen, dass man hierfür etwas Javascript braucht. Warum das dann nicht standardmäßig mit drin ist, ist mir ein Rätsel.

Hier ist das Snipped, dass man benötigt, damit alles gut aussieht:

```js
$('.custom-file input').change(function (e) {
    var files = [];
    for (var i = 0; i < $(this)[0].files.length; i++) {
        files.push($(this)[0].files[i].name);
    }
    $(this).next('.custom-file-label').html(files.join(', '));
});
```