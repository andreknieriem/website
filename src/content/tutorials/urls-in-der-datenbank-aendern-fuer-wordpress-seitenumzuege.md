---
title: Urls in der Datenbank ändern für Wordpress Seitenumzüge
date: '2013-10-30T07:00:24.000Z'
slug: urls-in-der-datenbank-aendern-fuer-wordpress-seitenumzuege
tags:
  - '11'
  - '40'
  - '223'
  - '224'
  - '225'
  - '226'
  - '227'
  - '228'
  - '229'
  - '230'
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
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Urls in der Datenbank ändern für Wordpress Seitenumzüge

#Tutorials#Wordpress

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 9 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#mysql](/tag.html?tag=40&cHash=a03ebd75b978a5c9581e455b7030b6f0)[#ändern](/tag.html?tag=223&cHash=ce26496ee489ebf36e472f455c7d1b91)[#baseurl](/tag.html?tag=224&cHash=87e150cfc9f6b68514b803e796647db8)[#change](/tag.html?tag=225&cHash=e03463d4e882aa00bac9e68caa976293)[#datenbank](/tag.html?tag=226&cHash=8b931560680ca43bc4bd5a44730c9c63)[#development](/tag.html?tag=227&cHash=1a4c7030155a3f803c30fbdc81ef8e27)[#live schalten](/tag.html?tag=228&cHash=9c27d41f84a0ada8cd4315fe65594b43)[#seitenumzüge](/tag.html?tag=229&cHash=8c13c025938357032f5175c5f7136878)[#site url](/tag.html?tag=230&cHash=3a857597be571284ca77cff735a749d6)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. Oct 2013

Bei Wordpress steht man als Entwickler immer wieder vor einem großen Problem - nämlich der Live-Schaltung der Seite. Das Problem an der ganzen Sache ist, dass Wordpress jede Url absolut ablegt in verschiedene Felder und Tabellen. So werden alle Bilder, Links etc. hart auf die bei der Installation eingebene Seiten-Adresse gesetzt. Zieht man nun die Seite um und ändert nur die Seitenurl werden die Beiträge, Seite etc nicht neu geschrieben und alle Links stehen noch auf die alten Url. Mit ein paar leichten SQL Queries lässt sich das Ganze aber schnell und einfach lösen.

Vorgehen um eine Seite online zu schalten:

**1\. Seiten-Url in der Datenbank ändern**

Dafür geht ihr am leichtesten mit phpmyadmin, adminer oder wie auch immer ihr Zugriff auf die DB habt auf die Datenbank, geht in die Tabelle **wp\_options** und ändert dort an den Stellen **siteurl** und **home** die Url auf eure neue Url. Somit lässt sich das Wordpress Backend wieder öffnen und die Seite sollte im Frontend auch schon wieder kommen, allerdings gehen keine Links, Menüs etc, wie schon gesagt.

**2\. Urls in der Datenbank überall ersetzen**

Nun müsst ihr einfach folgende SQL Befehle ausführen.

Für die Guid(Menüs etc)

```

UPDATE wp_posts
SET guid =REPLACE(
    guid,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);
```

Für den Content selbst

```

UPDATE wp_posts
SET post_content = REPLACE(
    post_content,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);
```

Für Custom Fields, oder Feldern von Plugins

```

UPDATE wp_postmeta
SET meta_value = REPLACE(
    meta_value,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);
```

Danach sollte alles gehen. Aber **Achtung** manche Plugins erweitern die Datenbank um eigene Tabellen und diese werden gerade davon nicht ersetzt. Falls dem so ist, könnt ihr diese Tabellen wie oben auch umschreiben. Der SQL dafür geht wie folgt:

```

UPDATE tabellenname
SET feld_das_urls_enthaelt = REPLACE(
    feld_das_urls_enthaelt,
    "olddomain.com/wordpress",
    "www.newdomain.com"
);
```

Ich hoffe damit bekommt ihr alle eure Seiten von DEV zu Live ;)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/2c92757c21bd361361dc8589e031dae9?s=75&d=mm&r=g)
    
    Stefan
    
    Kann man nicht auch einfach die URLs vor dem Importieren des Schemas in die neue DB mit der Suchen-und-Ersetzen-Funktion eines Texteditors ändern? Das ginge dann "in einem Rutsch" und man würde alle Tabellen (auch zusätzliche) erwischen.
    
    28\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c27ccf525bba0b50c4b63715a67c45df?s=75&d=mm&r=g)
    
    Lars
    
    Vielen Dank für diesen super hilfreichen Artikel! Das spart jede Menge an Arbeit :)
    
    09\. Oct 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2366b2c0df2986829e86a8bda2eab6e1?s=75&d=mm&r=g)
    
    [StuttgarterOsten](http://www.stuttgarter-osten.de)
    
    Hey, vielen Dank für den Artikel. So easy! :-) Hammer und besten Dank!!!
    
    22\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Gerne!
        
        03\. May 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/de09721a5ad6fbc51d0b6bcd9e106b71?s=75&d=mm&r=g)
    
    [Oldenfelde](www.gohlisch.de)
    
    Andre, vielen Dank für den tollen Tipp! Endlich mal eine saubere Erklärung bezüglich des Umzugsproblems mit WordPress.
    
    06\. Aug 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a2b46ce2803ab55dff3767bf5123f0bf?s=75&d=mm&r=g)
    
    [Petra](www.frausonnenberg.de)
    
    Hallo Andreas,  
    ich kann leider die Url nicht in der Datenbank ändern, (Wenn ich es per Doppelklick auf das Feld versuche) Hast du einenTipp für mich? Ich arbeite mit mampp und möchte mir eine lokale Sicherungskopie auf meinen Mac ziehen.
    
    01\. Feb 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/9f6aa1a17387d552a7d59ccbce119ac2?s=75&d=mm&r=g)
    
    [Benjamin Kuhn](www.loyal-webdesign.com)
    
    Super Sache. MfG
    
    30\. Nov 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](https://www.andrerinas.de)
        
        Hey Benjamin, freut mich, dass ich dir helfen konnte!
        
        30\. Nov 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/554272f185e314dd7343ee52c8246f80?s=75&d=mm&r=g)
    
    Joseph
    
    Hi André, danke für den Code, hat mir geholfen. Finde es persönlich aber schwach, dass es solche Schwierigkeiten bei Wordpress gibt.
    
    12\. Nov 2013 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.