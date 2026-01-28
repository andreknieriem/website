---
title: 'Bootstrap: Youtube Video im Modal beim Schließen stoppen'
date: '2018-06-08T06:56:00.000Z'
slug: bootstrap-youtube-video-im-modal-beim-schliessen-stoppen
tags:
  - bootstrap
  - modal
  - html5
  - video
  - youtube
  - vimeo
  - stop
description: "Hat man ein Youtube/Vimeo oder ein sonst wie&nbsp;via Iframe eingebundendes Video in einem Bootstrap Modal, so kann man dieses mit folgendem Trick sehr leicht stoppen/resetten, wenn man das Modal schließt. $(\"#myModal\").on('hidden.bs.modal', function (e) {\r\n    // reset iframe source\r\n    $(\"#myModal iframe\").attr(\"src\", $(\"#myModal iframe\").attr(\"src\"));\r\n\r\n    // Stop HTML Video\r\n    $(this).find('video')[0].pause();\r\n}); Das Ganze funktioniert recht einfach. Man setzt auf das Iframe die Source nochmal neu, auf die Source, die vorher drin stand. So wird das Fenter reloaded und das Video stoppt."
image: /fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png
demo_url: null
download_url: null
---

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