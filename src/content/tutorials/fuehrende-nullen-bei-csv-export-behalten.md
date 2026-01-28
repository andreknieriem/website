---
title: Führende Nullen bei CSV-Export behalten
date: '2013-06-21T06:49:54.000Z'
slug: fuehrende-nullen-bei-csv-export-behalten
tags:
  - php
  - behalten
  - csv
  - leading zeros
  - nullen
  - retain
description: >-
  Damit Excel die führenden Nullen bei CSV Dateien nicht entfernt, muss man
  während der Generierung der CSV-Datei einfach folgendes beachten: 

  "Kommentar","Nummer","Nummer2"

  "Führende Nullen werden nicht angezeigt","0001233456","04252"
   Die einfachste Methode ist ein = vor die Zahl zu setzen. Siehe folgendes Beispiel. 
  "Kommentar","Nummer","Nummer2"

  "Führende Nullen werden nicht angezeigt",="0001233456",="04252"
   Ich hoffe, dass hilft einigen von euch Excel daran zu hindern, die führenden Nullen zu verschlingen.
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Damit Excel die führenden Nullen bei CSV Dateien nicht entfernt, muss man während der Generierung der CSV-Datei einfach folgendes beachten:

```

"Kommentar","Nummer","Nummer2"
"Führende Nullen werden nicht angezeigt","0001233456","04252"
```

Die einfachste Methode ist ein = vor die Zahl zu setzen. Siehe folgendes Beispiel.

```

"Kommentar","Nummer","Nummer2"
"Führende Nullen werden nicht angezeigt",="0001233456",="04252"
```

Ich hoffe, dass hilft einigen von euch Excel daran zu hindern, die führenden Nullen zu verschlingen.