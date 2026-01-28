---
title: 'Wordpress: Wartungsmodus nach Aktualisierung manuell ausschalten'
date: '2015-07-10T15:21:08.000Z'
slug: wordpress-wartungsmodus-nach-aktualisierung-manuell-ausschalten
tags:
  - wordpress
  - abschalten
  - maintenance
  - wartungsmodus
  - manuell
  - update
  - fehler
description: "Wordpress versetzt die Seite in den Wartungsmodus, wenn es Updates am System, Themes oder Plugins macht, damit die Datenbank nicht geändert wird, wenn geupdatet wird. Nun kann es aber vorkommen, dass ein Update fehlschlägt und die Seite bleibt im Wartungsmodus. Um die Seite wieder aufrufen zu können muss einfach im Root-Verzeichnisses eurer Wordpress-Seite, also da wo auch wp-config.php etc. liegen die folgende Datei löschen: \r\n.maintenance\r\n Ist dies getan sollte die Webseite wieder da sein. Nun kann es aber sein, dass irgendetwas beim fehlgeschlagenen Update kaputt gegangen ist. Dafür gibt es aber leider keine allgemeine Lösung. Da muss individuell geguckt werden, was wo kaputt gegangen ist."
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Wordpress versetzt die Seite in den Wartungsmodus, wenn es Updates am System, Themes oder Plugins macht, damit die Datenbank nicht geändert wird, wenn geupdatet wird. Nun kann es aber vorkommen, dass ein Update fehlschlägt und die Seite bleibt im Wartungsmodus. Um die Seite wieder aufrufen zu können muss einfach im Root-Verzeichnisses eurer Wordpress-Seite, also da wo auch wp-config.php etc. liegen die folgende Datei löschen:

.maintenance

Ist dies getan sollte die Webseite wieder da sein. Nun kann es aber sein, dass irgendetwas beim fehlgeschlagenen Update kaputt gegangen ist. Dafür gibt es aber leider keine allgemeine Lösung. Da muss individuell geguckt werden, was wo kaputt gegangen ist.