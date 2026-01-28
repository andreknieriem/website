---
title: 'MySql: Komma-Separierte Elemente aus einer Spalte zählen'
date: '2016-09-20T22:00:00.000Z'
slug: mysql-komma-separierte-elemente-aus-einer-spalte-zaehlen
tags:
  - mysql
  - count
  - character
  - where
  - chars
  - comma
  - json
  - entries
description: "Manchmal hat man in einer Tabelle in einem Feld eine komma-separierte Liste, oder einen Json-String. Möchte man dort jetzt die Anzahl an Elementen zählen, bzw. herausfinden, wie viele Reihen mehr als beispielsweise 10 Einträge in diesem Feld haben, dann kann man dies mit folgendem MYSQL-Snippet tun. Der Trick an der Sache ist es, die Kommas zu zählen und dieses in das Where einzubauen.\r\nCode select * \r\nfrom deine_tabelle\r\nwhere LENGTH(dein_spaltenname) - LENGTH(REPLACE(dein_spaltenname, ',', '')) &gt; 9 In obrigen Beispiel werden alle Zeilen geholt, die mehr als 9 Vorkommnisse eines Kommas haben, also mehr als 10 Einträge in dem Feld dein_spaltenname."
image: /fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png
demo_url: null
download_url: null
---

Manchmal hat man in einer Tabelle in einem Feld eine komma-separierte Liste, oder einen Json-String. Möchte man dort jetzt die Anzahl an Elementen zählen, bzw. herausfinden, wie viele Reihen mehr als beispielsweise 10 Einträge in diesem Feld haben, dann kann man dies mit folgendem MYSQL-Snippet tun. Der Trick an der Sache ist es, die Kommas zu zählen und dieses in das Where einzubauen.

**Code**

```sql
select * 
from deine_tabelle
where LENGTH(dein_spaltenname) - LENGTH(REPLACE(dein_spaltenname, ',', '')) > 9
```

In obrigen Beispiel werden alle Zeilen geholt, die mehr als 9 Vorkommnisse eines Kommas haben, also mehr als 10 Einträge in dem Feld **dein\_spaltenname**.