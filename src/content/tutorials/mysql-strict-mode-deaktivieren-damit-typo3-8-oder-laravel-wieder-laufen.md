---
title: 'MySQL: Strict Mode deaktivieren, damit TYPO3 8 oder Laravel wieder laufen'
date: '2016-08-01T16:40:23.000Z'
slug: mysql-strict-mode-deaktivieren-damit-typo3-8-oder-laravel-wieder-laufen
tags:
  - '414'
  - '671'
  - '786'
  - '857'
  - '858'
  - '859'
description: "MySQL hat den strict mode seit Version 5.1 eingebaut, ab Version 5.7 ist dieser aber erst standardmäßig aktiviert. Wenn man seinen Server updatet kann es so vorkommen, dass viele Anwendungen und Webseiten nicht mehr funktionieren.\nBei Laravel kann man diesen Fehler beheben indem man in der database.php einen neuen Key mit dem Namen strict und dem Wert false hinzufügt. Benutzt man Codeigniter, Fuel oder ganz normal das Unix Setup, bringt einem das natürlich nichts.\nConfig Datei\nMySQL guckt je nach System bei verschiedenen Pfaden nach einer cnf-Datei. Diese könnte hier sein:\n/etc/my.cnf, /etc/mysql/my.cnf, SYSCONFDIR/my.cnf,$MYSQL_HOME/my.cnf und ~/my.cnf.\nNormalerweise reicht aber die Datei /etc/mysql/my.cnf zu bearbeiten.\nDerzeitige Config\nIf you scroll down the file a bit, you'll find the [mysqld] section. We're going to add a new key, sql_mode. On MySQL 5.7, the default values for this key out of the box are: \r\nSTRICT_TRANS_TABLES,ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION\r\n Der Strict Mode kommt von STRICT_TRANS_TABLES, also überschreiben wir diesen jetzt.\nNeue Konfig \r\nsql_mode=ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION\r\n Das wars auch schon. Nun muss nur noch der MySQL-Server neugestartet werden:\nsudo /etc/init.d/mysql restart"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# MySQL: Strict Mode deaktivieren, damit TYPO3 8 oder Laravel wieder laufen

#Tutorials#SQL

* * *

![](/fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#entfernen](/tag.html?tag=414&cHash=b495868013d94fa130ddd08402082f3f)[#laravel](/tag.html?tag=671&cHash=5a1ac0040ad4ab46c7ec4ef355efd717)[#sql](/tag.html?tag=786&cHash=ee1d1eadefb7ea4c30c2437f83da596b)[#typo3 8](/tag.html?tag=857&cHash=2d51165b97ccc035ed66f8575c91c6f2)[#strict mode](/tag.html?tag=858&cHash=9e9279e1ba4749d36ae8ba4bba60919a)[#deactivate](/tag.html?tag=859&cHash=ad05d1406e3a520d3c6e096b98622c4c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Aug 2016

MySQL hat den strict mode seit Version 5.1 eingebaut, ab Version 5.7 ist dieser aber erst standardmäßig aktiviert. Wenn man seinen Server updatet kann es so vorkommen, dass viele Anwendungen und Webseiten nicht mehr funktionieren.

Bei Laravel kann man diesen Fehler beheben indem man in der `database.php` einen neuen Key mit dem Namen `strict` und dem Wert `false` hinzufügt. Benutzt man Codeigniter, Fuel oder ganz normal das Unix Setup, bringt einem das natürlich nichts.

**Config Datei**

MySQL guckt je nach System bei verschiedenen Pfaden nach einer cnf-Datei. Diese könnte hier sein:

*   /etc/my.cnf,
*   /etc/mysql/my.cnf,
*   SYSCONFDIR/my.cnf,
*   $MYSQL\_HOME/my.cnf und
*   ~/my.cnf.

Normalerweise reicht aber die Datei `/etc/mysql/my.cnf` zu bearbeiten.

**Derzeitige Config**

If you scroll down the file a bit, you'll find the \[mysqld\] section. We're going to add a new key, sql\_mode. On MySQL 5.7, the default values for this key out of the box are:

```

STRICT_TRANS_TABLES,ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

Der Strict Mode kommt von `STRICT_TRANS_TABLES`, also überschreiben wir diesen jetzt.

**Neue Konfig**

```

sql_mode=ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

Das wars auch schon. Nun muss nur noch der MySQL-Server neugestartet werden:

`sudo /etc/init.d/mysql restart`

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/59e0e74341bbbf2f47e003216573454f?s=75&d=mm&r=g)
    
    Woot
    
    Durch die Config funktioniert leider gar nichts in einer TYPO3 Umgebung. Einfach  
      
    sql\_mode=  
      
    und es funktioniert.
    
    09\. Aug 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.