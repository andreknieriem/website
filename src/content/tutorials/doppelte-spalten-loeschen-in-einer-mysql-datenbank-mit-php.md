---
title: Doppelte Spalten löschen in einer Mysql Datenbank mit PHP
date: '2011-07-08T07:37:56.000Z'
slug: doppelte-spalten-loeschen-in-einer-mysql-datenbank-mit-php
tags:
  - '35'
  - '36'
  - '37'
  - '38'
  - '39'
  - '40'
  - '41'
description: "\nIch habe mir schon häufiger die Frage gestellt, wie ich an doppelte Spalten herankomme, dessen einziger Unterschied der automatische Primärschlüssel ist. Hier habe ich eine Php Funkion die sich erst alle Doppelten Einträge holt und diese dann aus der Datenbank löscht. Zudem zeigt sie noch an, wie viele Datensätze betroffen waren. \n&lt;?php\n\n$res = mysql_query(\"SELECT doppelte_Spalte, COUNT( * ) AS anzahl FROM eure_tabelle GROUP BY doppelte_Spalte HAVING COUNT( * ) &gt;1\");\n$returned_rows = mysql_num_rows ($res);\nwhile($row =  mysql_fetch_array($res)) {\n\t$doppelte_Spalte = $row[\"doppelte_Spalte\"];\n\tmysql_query(\"DELETE FROM eure_tabelle WHERE doppelte_Spalte = \".$doppelte_Spalte.\" LIMIT 1\");\n}\n\nprint''.$returned_rows.' doppelte Einträge gelöscht&lt;br/&gt;';\n?&gt;\n Das Limit 1 beim Delete ist sehr wichtig, da sonst alle Einträge mit der doppelte Spalte gelöscht werden und wir wollen ja nur einen löschen."
image: /fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png
demo_url: null
download_url: null
---

[![Mysql Logo](http://andreknieriem.de/wp-content/uploads/2011/07/mysql-logo-300x200.jpg "Mysql Logo")](http://andreknieriem.de/wp-content/uploads/2011/07/mysql-logo.jpg)

Ich habe mir schon häufiger die Frage gestellt, wie ich an doppelte Spalten herankomme, dessen einziger Unterschied der automatische Primärschlüssel ist. Hier habe ich eine Php Funkion die sich erst alle Doppelten Einträge holt und diese dann aus der Datenbank löscht. Zudem zeigt sie noch an, wie viele Datensätze betroffen waren.

```

<?php

$res = mysql_query("SELECT doppelte_Spalte, COUNT( * ) AS anzahl FROM eure_tabelle GROUP BY doppelte_Spalte HAVING COUNT( * ) >1");
$returned_rows = mysql_num_rows ($res);
while($row =  mysql_fetch_array($res)) {
	$doppelte_Spalte = $row["doppelte_Spalte"];
	mysql_query("DELETE FROM eure_tabelle WHERE doppelte_Spalte = ".$doppelte_Spalte." LIMIT 1");
}

print''.$returned_rows.' doppelte Einträge gelöscht<br/>';
?>
```

Das Limit 1 beim Delete ist sehr wichtig, da sonst alle Einträge mit der doppelte Spalte gelöscht werden und wir wollen ja nur einen löschen.