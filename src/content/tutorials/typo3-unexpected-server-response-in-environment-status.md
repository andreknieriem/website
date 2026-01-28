---
title: 'TYPO3: „Unexpected server response“ in „Environment Status“'
date: '2020-09-04T09:50:00.000Z'
slug: typo3-unexpected-server-response-in-environment-status
tags:
  - typo3
  - environment
  - error
  - fix
  - mod_mime
  - statusbericht
description: "Bei mir wurden nach dem Update auf TYPO3 10 im Berichte Modul, bzw. unter Umgebung-&gt;Environment Status angezeigt, dass meine Installation falsche Antworten sendet. Wenn die Seite auf einem Apache Server läuft, so kann man dies schnell beheben, indem man folgendes in die .htaccess Datei einfügt. Die Datei liegt in eurem public Ordner.  ### End: Cross Origin ###\r\n\r\n    RemoveType .html .htm\r\n    \r\n        AddType text/html .html\r\n        AddType text/html .htm\r\n    \r\n    RemoveType .svg .svgz\r\n    \r\n        AddType image/svg+xml .svg\r\n        AddType image/svg+xml .svgz\r\n    \r\n\r\n### Begin: Rewriting and Access ###"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Bei mir wurden nach dem Update auf TYPO3 10 im Berichte Modul, bzw. unter Umgebung->Environment Status angezeigt, dass meine Installation falsche Antworten sendet. Wenn die Seite auf einem Apache Server läuft, so kann man dies schnell beheben, indem man folgendes in die **.htaccess** Datei einfügt. Die Datei liegt in eurem public Ordner.

[![](/fileadmin/_processed_/c/d/csm_environment-status_773a600202.png)](/fileadmin/Daten/Bilder/environment-status.png)

```bash
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