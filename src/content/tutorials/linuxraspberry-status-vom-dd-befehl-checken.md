---
title: 'Linux/Raspberry: Status vom dd-Befehl checken'
date: '2015-02-25T20:26:53.000Z'
slug: linuxraspberry-status-vom-dd-befehl-checken
tags:
  - '374'
  - '604'
  - '631'
  - '632'
  - '633'
  - '634'
description: "Wenn man ein Image auf beispielsweise einen Raspberry schreibt, so denkt man manchmal, dass nichts mehr passiert. Ist man in dem Fenster des Terminals, so kann mit \n'CTRL + T' den aktuellen Status sehen. Dort steht dann sowas wie \r\n125 records in\r\n125 records out\r\n Je nach eingegebener M Zahl (sudo dd bs=1M if=image.img of=/dev/DISK) Ist dier der Wert in MB, bzw, bei 4M wäre der bereits übertragende Bereich das 4fache vom Wert dort oben, also bei dem Beispeil 500."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Linux/Raspberry: Status vom dd-Befehl checken

#Tutorials#Raspberry

* * *

![](/fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#raspberry pi](/tag.html?tag=374&cHash=a86f65a7fc34eee1dbe3623f822b0891)[#image](/tag.html?tag=604&cHash=11a3b07630e480e8049232858b7be06b)[#dd](/tag.html?tag=631&cHash=4941fd600c1a25cd83dbaa00598fd636)[#check](/tag.html?tag=632&cHash=cc35eecde32242bfafc69d7393781d75)[#status](/tag.html?tag=633&cHash=e47e4393f77778ba3cfa8d6d51bd804b)[#img](/tag.html?tag=634&cHash=7794bff3df609aa970f9c2cb6dce9a06)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

25\. Feb 2015

Wenn man ein Image auf beispielsweise einen Raspberry schreibt, so denkt man manchmal, dass nichts mehr passiert. Ist man in dem Fenster des Terminals, so kann mit

'**CTRL + T**' den aktuellen Status sehen. Dort steht dann sowas wie

125 records in
125 records out

Je nach eingegebener M Zahl (sudo dd bs=**1M** if=image.img of=/dev/DISK) Ist dier der Wert in MB, bzw, bei 4M wäre der bereits übertragende Bereich das 4fache vom Wert dort oben, also bei dem Beispeil 500.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.