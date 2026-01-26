---
title: 'Bootstrap 4: Javascript für File-Input mit Dateinamen'
date: '2019-11-06T12:36:00.000Z'
slug: bootstrap-4-javascript-fuer-file-input-mit-dateinamen
tags:
  - '215'
  - '1172'
  - '1173'
  - '629'
  - '80'
  - '1174'
  - '69'
  - '496'
  - '137'
  - '186'
description: "Die Custom-Bootstrap File-Input sehen ja schon deutlich besser aus, als die vom Browser. Leider haben sie einen Nachteil. Man kann die Dateinamen nicht sehen, die man ausgewählt hat. In der Dokumentation wird darauf hingewiesen, dass man hierfür etwas Javascript braucht. Warum das dann nicht standardmäßig mit drin ist, ist mir ein Rätsel.\r\nHier ist das Snipped, dass man benötigt, damit alles gut aussieht: $('.custom-file input').change(function (e) {\r\n    var files = [];\r\n    for (var i = 0; i < $(this)[0].files.length; i++) {\r\n        files.push($(this)[0].files[i].name);\r\n    }\r\n    $(this).next('.custom-file-label').html(files.join(', '));\r\n});"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap 4: Javascript für File-Input mit Dateinamen

#Tutorials#Bootstrap#Javascript

* * *

![](/fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#input](/tag.html?tag=80&cHash=206b0773f41443825ace052868fe0598)[#show](/tag.html?tag=137&cHash=be751c589aff29578ff9bbb9d4dd6475)[#anzeige](/tag.html?tag=186&cHash=69910b69d2a9715243673198af628053)[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#multiple](/tag.html?tag=496&cHash=b5ccf1ab608165ac786e9c24537cc63b)[#file](/tag.html?tag=629&cHash=b5a44de7cd19099908d93aabdf28fd9a)[#4](/tag.html?tag=1172&cHash=a3c5a9650afa1c0d67a7a1a9f8b09a63)[#fileinput](/tag.html?tag=1173&cHash=d35fb568622a719f032bcc2e00ced26f)[#names](/tag.html?tag=1174&cHash=708e15755fa892336b2670dbb7c79ac8)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Nov 2019

Die Custom-Bootstrap File-Input sehen ja schon deutlich besser aus, als die vom Browser. Leider haben sie einen Nachteil. Man kann die Dateinamen nicht sehen, die man ausgewählt hat. In der Dokumentation wird darauf hingewiesen, dass man hierfür etwas Javascript braucht. Warum das dann nicht standardmäßig mit drin ist, ist mir ein Rätsel.

Hier ist das Snipped, dass man benötigt, damit alles gut aussieht:

```
$('.custom-file input').change(function (e) {
    var files = [];
    for (var i = 0; i < $(this)[0].files.length; i++) {
        files.push($(this)[0].files[i].name);
    }
    $(this).next('.custom-file-label').html(files.join(', '));
});
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.