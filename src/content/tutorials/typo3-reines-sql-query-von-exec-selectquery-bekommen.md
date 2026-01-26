---
title: 'TYPO3: Reines SQL-Query von exec_SELECTquery bekommen'
date: '2014-08-19T16:24:25.000Z'
slug: typo3-reines-sql-query-von-exec-selectquery-bekommen
tags:
  - '40'
  - '151'
  - '198'
  - '513'
  - '514'
description: "Manchmal ist es bei TYPO3 nötig, dass man das Plain Sql Query sieht, um mögliche Fehler zu entdecken. Hierfür eignet sich folgender Code-Schnipsel. \r\n// debugging einschalten\r\n$GLOBALS['TYPO3_DB']-&gt;store_lastBuiltQuery = 1; \r\n\r\n// query ausführen\r\n$res = $GLOBALS['TYPO3_DB']-&gt;exec_SELECTquery($select_fields,$from_table,$where_clause,$groupBy,$orderBy,$limit);\r\n \r\n// das SQL-Statement ausgeben\r\necho $GLOBALS['TYPO3_DB']-&gt;debug_lastBuiltQuery;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Reines SQL-Query von exec\_SELECTquery bekommen

#Tutorials#TYPO3#SQL

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#mysql](/tag.html?tag=40&cHash=a03ebd75b978a5c9581e455b7030b6f0)[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#exec\_select](/tag.html?tag=513&cHash=8f6776c933802af42001d0cf5094f219)[#letztes sql](/tag.html?tag=514&cHash=12103115625b727b32169c39e172d1f4)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Aug 2014

Manchmal ist es bei TYPO3 nötig, dass man das Plain Sql Query sieht, um mögliche Fehler zu entdecken. Hierfür eignet sich folgender Code-Schnipsel.

```

// debugging einschalten
$GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1; 

// query ausführen
$res = $GLOBALS['TYPO3_DB']->exec_SELECTquery($select_fields,$from_table,$where_clause,$groupBy,$orderBy,$limit);
 
// das SQL-Statement ausgeben
echo $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.