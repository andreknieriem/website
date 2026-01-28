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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Linux

* * *

![](/fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#pageup](/tag.html?tag=182&cHash=5c18ac425095d70a5930ad8e8e6de7e7)[#linux](/tag.html?tag=203&cHash=a988c07c8fcb1b9d8276b2e73ba3a6f3)[#bild](/tag.html?tag=816&cHash=7fa7b46d68ffbbf0e6b6d1a4afbb5b9d)[#unix](/tag.html?tag=899&cHash=2c756a0d97bfd07f38f4a82b3badf541)[#bash](/tag.html?tag=900&cHash=546f8f9c88c56f608a8868910dd8325c)[#pagedown](/tag.html?tag=901&cHash=a26f9f42a16c8dc8674667569a5dc254)[#history](/tag.html?tag=902&cHash=126384805f563c5e97a383c84087ce57)[#hoch](/tag.html?tag=1082&cHash=e74f5392fa06e7e0a772b5f34265b974)[#runter](/tag.html?tag=1083&cHash=ee54c1d713d57b4b6b72c9828fca2675)[#autosuggest](/tag.html?tag=1084&cHash=ecd4a237883a239a61ed616c804ddb42)[#autovervollständigung](/tag.html?tag=1085&cHash=b713c82dbf96972b50ec91ef3c26d3f6)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Oct 2018

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/5740e2c68149ce5be1aca1bc38c25db7?s=75&d=mm&r=g)
    
    [Nathalie](nathaliebeimler.com)
    
    Das ist wirkloch sehr praktisch. Danke für den Tipp! Ich fand das bereits in der inputrc auskommentiert.
    
    12\. Dec 2020 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.