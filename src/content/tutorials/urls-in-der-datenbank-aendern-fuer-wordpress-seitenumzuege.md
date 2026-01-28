---
title: Urls in der Datenbank ändern für Wordpress Seitenumzüge
date: '2013-10-30T07:00:24.000Z'
slug: urls-in-der-datenbank-aendern-fuer-wordpress-seitenumzuege
tags:
  - wordpress
  - mysql
  - ändern
  - baseurl
  - change
  - datenbank
  - development
  - live schalten
  - seitenumzüge
  - site url
description: >-
  Bei Wordpress steht man als Entwickler immer wieder vor einem großen Problem -
  nämlich der Live-Schaltung der Seite. Das Problem an der ganzen Sache ist,
  dass Wordpress jede Url absolut ablegt in verschiedene Felder und Tabellen. So
  werden alle Bilder, Links etc. hart auf die bei der Installation eingebene
  Seiten-Adresse gesetzt. Zieht man nun die Seite um und ändert nur die
  Seitenurl werden die Beiträge, Seite etc nicht neu geschrieben und alle Links
  stehen noch auf die alten Url. Mit ein paar leichten SQL Queries lässt sich
  das Ganze aber schnell und einfach lösen.

  Vorgehen um eine Seite online zu schalten:

  1. Seiten-Url in der Datenbank ändern

  Dafür geht ihr am leichtesten mit phpmyadmin, adminer oder wie auch immer ihr
  Zugriff auf die DB habt auf die Datenbank, geht in die Tabelle wp_options und
  ändert dort an den Stellen siteurl und home die Url auf eure neue Url. Somit
  lässt sich das Wordpress Backend wieder öffnen und die Seite sollte im
  Frontend auch schon wieder kommen, allerdings gehen keine Links, Menüs etc,
  wie schon gesagt.

  2. Urls in der Datenbank überall ersetzen

  Nun müsst ihr einfach folgende SQL Befehle ausführen.

  Für die Guid(Menüs etc) 

  UPDATE wp_posts

  SET guid =REPLACE(
      guid,
      "olddomain.com/wordpress",
      "www.newdomain.com"
  );
   Für den Content selbst 
  UPDATE wp_posts

  SET post_content = REPLACE(
      post_content,
      "olddomain.com/wordpress",
      "www.newdomain.com"
  );
   Für Custom Fields, oder Feldern von Plugins 
  UPDATE wp_postmeta

  SET meta_value = REPLACE(
      meta_value,
      "olddomain.com/wordpress",
      "www.newdomain.com"
  );
   Danach sollte alles gehen. Aber Achtung manche Plugins erweitern die Datenbank um eigene Tabellen und diese werden gerade davon nicht ersetzt. Falls dem so ist, könnt ihr diese Tabellen wie oben auch umschreiben. Der SQL dafür geht wie folgt: 
  UPDATE tabellenname

  SET feld_das_urls_enthaelt = REPLACE(
      feld_das_urls_enthaelt,
      "olddomain.com/wordpress",
      "www.newdomain.com"
  );
   Ich hoffe damit bekommt ihr alle eure Seiten von DEV zu Live ;)
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Bei Wordpress steht man als Entwickler immer wieder vor einem großen Problem - nämlich der Live-Schaltung der Seite. Das Problem an der ganzen Sache ist, dass Wordpress jede Url absolut ablegt in verschiedene Felder und Tabellen. So werden alle Bilder, Links etc. hart auf die bei der Installation eingebene Seiten-Adresse gesetzt. Zieht man nun die Seite um und ändert nur die Seitenurl werden die Beiträge, Seite etc nicht neu geschrieben und alle Links stehen noch auf die alten Url. Mit ein paar leichten SQL Queries lässt sich das Ganze aber schnell und einfach lösen.

Vorgehen um eine Seite online zu schalten:

**1\. Seiten-Url in der Datenbank ändern**

Dafür geht ihr am leichtesten mit phpmyadmin, adminer oder wie auch immer ihr Zugriff auf die DB habt auf die Datenbank, geht in die Tabelle **wp\_options** und ändert dort an den Stellen **siteurl** und **home** die Url auf eure neue Url. Somit lässt sich das Wordpress Backend wieder öffnen und die Seite sollte im Frontend auch schon wieder kommen, allerdings gehen keine Links, Menüs etc, wie schon gesagt.

**2\. Urls in der Datenbank überall ersetzen**

Nun müsst ihr einfach folgende SQL Befehle ausführen.

Für die Guid(Menüs etc)

```sql

UPDATE wp_posts
SET guid =REPLACE(
    guid,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);

```

Für den Content selbst

```sql

UPDATE wp_posts
SET post_content = REPLACE(
    post_content,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);

```

Für Custom Fields, oder Feldern von Plugins

```sql

UPDATE wp_postmeta
SET meta_value = REPLACE(
    meta_value,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);

```

Danach sollte alles gehen. Aber **Achtung** manche Plugins erweitern die Datenbank um eigene Tabellen und diese werden gerade davon nicht ersetzt. Falls dem so ist, könnt ihr diese Tabellen wie oben auch umschreiben. Der SQL dafür geht wie folgt:

```sql

UPDATE tabellenname
SET feld_das_urls_enthaelt = REPLACE(
    feld_das_urls_enthaelt,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);

```

Ich hoffe damit bekommt ihr alle eure Seiten von DEV zu Live ;)