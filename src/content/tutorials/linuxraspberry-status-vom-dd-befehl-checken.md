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
image: /fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png
demo_url: null
download_url: null
---

Wenn man ein Image auf beispielsweise einen Raspberry schreibt, so denkt man manchmal, dass nichts mehr passiert. Ist man in dem Fenster des Terminals, so kann mit

'**CTRL + T**' den aktuellen Status sehen. Dort steht dann sowas wie

125 records in
125 records out

Je nach eingegebener M Zahl (sudo dd bs=**1M** if=image.img of=/dev/DISK) Ist dier der Wert in MB, bzw, bei 4M wäre der bereits übertragende Bereich das 4fache vom Wert dort oben, also bei dem Beispeil 500.