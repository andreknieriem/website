---
title: 'TYPO3: Reines SQL-Query von exec_SELECTquery bekommen'
date: '2014-08-19T16:24:25.000Z'
slug: typo3-reines-sql-query-von-exec-selectquery-bekommen
tags:
  - mysql
  - select
  - typo3
  - exec_select
  - letztes sql
description: "Manchmal ist es bei TYPO3 nötig, dass man das Plain Sql Query sieht, um mögliche Fehler zu entdecken. Hierfür eignet sich folgender Code-Schnipsel. \r\n// debugging einschalten\r\n$GLOBALS['TYPO3_DB']-&gt;store_lastBuiltQuery = 1; \r\n\r\n// query ausführen\r\n$res = $GLOBALS['TYPO3_DB']-&gt;exec_SELECTquery($select_fields,$from_table,$where_clause,$groupBy,$orderBy,$limit);\r\n \r\n// das SQL-Statement ausgeben\r\necho $GLOBALS['TYPO3_DB']-&gt;debug_lastBuiltQuery;\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Manchmal ist es bei TYPO3 nötig, dass man das Plain Sql Query sieht, um mögliche Fehler zu entdecken. Hierfür eignet sich folgender Code-Schnipsel.

```php

// debugging einschalten
$GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1; 

// query ausführen
$res = $GLOBALS['TYPO3_DB']->exec_SELECTquery($select_fields,$from_table,$where_clause,$groupBy,$orderBy,$limit);
 
// das SQL-Statement ausgeben
echo $GLOBALS['TYPO3_DB']->debug_lastBuiltQuery;

```