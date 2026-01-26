---
title: 'Bootstrap: Youtube Video im Modal beim Schließen stoppen'
date: '2018-06-08T06:56:00.000Z'
slug: bootstrap-youtube-video-im-modal-beim-schliessen-stoppen
tags:
  - '215'
  - '1038'
  - '199'
  - '888'
  - '77'
  - '1052'
  - '1053'
description: "Hat man ein Youtube/Vimeo oder ein sonst wie&nbsp;via Iframe eingebundendes Video in einem Bootstrap Modal, so kann man dieses mit folgendem Trick sehr leicht stoppen/resetten, wenn man das Modal schließt. $(\"#myModal\").on('hidden.bs.modal', function (e) {\r\n    // reset iframe source\r\n    $(\"#myModal iframe\").attr(\"src\", $(\"#myModal iframe\").attr(\"src\"));\r\n\r\n    // Stop HTML Video\r\n    $(this).find('video')[0].pause();\r\n}); Das Ganze funktioniert recht einfach. Man setzt auf das Iframe die Source nochmal neu, auf die Source, die vorher drin stand. So wird das Fenter reloaded und das Video stoppt."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap: Youtube Video im Modal beim Schließen stoppen

#Tutorials#Bootstrap#Javascript

* * *

![](/fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#youtube](/tag.html?tag=77&cHash=70824b8f201faf8c1daec7908e6b9132)[#html5](/tag.html?tag=199&cHash=b040374a36d6adcce76102ac739e8651)[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#video](/tag.html?tag=888&cHash=87a423f807715a7dc0d140278806e7c0)[#modal](/tag.html?tag=1038&cHash=bf31784408829e0a38d0d88ac5faae37)[#vimeo](/tag.html?tag=1052&cHash=63c7e66446b04a91c513ed7110a1482e)[#stop](/tag.html?tag=1053&cHash=f62484167f4096b7206782b48d1a9bc2)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Jun 2018

Hat man ein Youtube/Vimeo oder ein sonst wie via Iframe eingebundendes Video in einem Bootstrap Modal, so kann man dieses mit folgendem Trick sehr leicht stoppen/resetten, wenn man das Modal schließt.

```
$("#myModal").on('hidden.bs.modal', function (e) {
    // reset iframe source
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));

    // Stop HTML Video
    $(this).find('video')[0].pause();
});
```

Das Ganze funktioniert recht einfach. Man setzt auf das Iframe die Source nochmal neu, auf die Source, die vorher drin stand. So wird das Fenter reloaded und das Video stoppt.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.