---
title: 'Linux: PageUp und PageDown für Autovervollständigung benutzen'
date: '2018-10-17T16:42:00.000Z'
slug: linux-pageup-und-pagedown-fuer-autovervollstaendigung-benutzen
tags:
  - '899'
  - '203'
  - '900'
  - '182'
  - '901'
  - '816'
  - '1082'
  - '1083'
  - '902'
  - '1084'
  - '1085'
description: "Bei mir kommt es immermal wieder vor, dass ich Befehle nicht vollständig im Kopf habe und dann immer lange durch die History gucke, oder sogar Google beauftrage mir das Kommando herauszusuchen. Mit den folgenden Zeilen in der \"/etc/inputrc\"&nbsp;hilft einem die eigene Shell aber schon sehr viel weiter. \"\\e[5~\": history-search-backward\r\n\"\\e[6~\": history-search-forward\r\n\r\nZum neuladen eurer Bash dann folgendes eingeben\r\n\r\nexec bash Danach könnt ihr dann zum beispiel folgendes machen:\r\nyarn \"klick auf pageup\" und es wird bei mir sowas wie \"yarn encore dev --watch\" vervollständigt. Das ist ziemlich praktisch."
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
demo_url: null
download_url: null
---

Bei mir kommt es immermal wieder vor, dass ich Befehle nicht vollständig im Kopf habe und dann immer lange durch die History gucke, oder sogar Google beauftrage mir das Kommando herauszusuchen. Mit den folgenden Zeilen in der **"/etc/inputrc"** hilft einem die eigene Shell aber schon sehr viel weiter.

```
"\e[5~": history-search-backward
"\e[6~": history-search-forward
```

**Zum neuladen eurer Bash dann folgendes eingeben**

```
exec bash
```

Danach könnt ihr dann zum beispiel folgendes machen:

yarn "klick auf pageup" und es wird bei mir sowas wie "yarn encore dev --watch" vervollständigt. Das ist ziemlich praktisch.