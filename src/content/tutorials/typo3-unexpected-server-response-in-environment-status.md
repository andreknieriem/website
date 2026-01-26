---
title: 'TYPO3: „Unexpected server response“ in „Environment Status“'
date: '2020-09-04T09:50:00.000Z'
slug: typo3-unexpected-server-response-in-environment-status
tags:
  - '198'
  - '1188'
  - '528'
  - '239'
  - '1189'
  - '1190'
description: "Bei mir wurden nach dem Update auf TYPO3 10 im Berichte Modul, bzw. unter Umgebung-&gt;Environment Status angezeigt, dass meine Installation falsche Antworten sendet. Wenn die Seite auf einem Apache Server läuft, so kann man dies schnell beheben, indem man folgendes in die .htaccess Datei einfügt. Die Datei liegt in eurem public Ordner.  ### End: Cross Origin ###\r\n\r\n    RemoveType .html .htm\r\n    \r\n        AddType text/html .html\r\n        AddType text/html .htm\r\n    \r\n    RemoveType .svg .svgz\r\n    \r\n        AddType image/svg+xml .svg\r\n        AddType image/svg+xml .svgz\r\n    \r\n\r\n### Begin: Rewriting and Access ###"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: „Unexpected server response“ in „Environment Status“

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#fix](/tag.html?tag=239&cHash=26354d6386315dd8daaccabb7f435be9)[#error](/tag.html?tag=528&cHash=0431293d38641e545ed0dd31e3471d2b)[#environment](/tag.html?tag=1188&cHash=d11caccc2b10ca8cb88530ac8736093c)[#mod\_mime](/tag.html?tag=1189&cHash=7b85a5f0bc79953469117a4933ed9d13)[#statusbericht](/tag.html?tag=1190&cHash=69f3e59354cbbb4f9afc69a24131fbed)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Sep 2020

Bei mir wurden nach dem Update auf TYPO3 10 im Berichte Modul, bzw. unter Umgebung->Environment Status angezeigt, dass meine Installation falsche Antworten sendet. Wenn die Seite auf einem Apache Server läuft, so kann man dies schnell beheben, indem man folgendes in die **.htaccess** Datei einfügt. Die Datei liegt in eurem public Ordner.

[![](/fileadmin/_processed_/c/d/csm_environment-status_773a600202.png)](/fileadmin/Daten/Bilder/environment-status.png)

```
### End: Cross Origin ###
<IfModule mod_mime.c>
    RemoveType .html .htm
    <FilesMatch ".+\.html?$">
        AddType text/html .html
        AddType text/html .htm
    </FilesMatch>
    RemoveType .svg .svgz
    <FilesMatch ".+\.svgz?$">
        AddType image/svg+xml .svg
        AddType image/svg+xml .svgz
    </FilesMatch>
</IfModule>
### Begin: Rewriting and Access ###
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.