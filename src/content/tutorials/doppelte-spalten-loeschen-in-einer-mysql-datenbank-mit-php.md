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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#SQL

* * *

![](/fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#delete](/tag.html?tag=35&cHash=3c6598ffd1d9780f81065a1fea257830)[#doppelte spalten löschen](/tag.html?tag=36&cHash=a13397f7c53e935e74274c9de8aa55a8)[#doppelter Inhalt](/tag.html?tag=37&cHash=f8c909ebe18ce2148500d7f92189b799)[#double columns](/tag.html?tag=38&cHash=cb3bbdb2111eb29ac6e39f961884d0e5)[#double content](/tag.html?tag=39&cHash=a16bef2ed64e476482878feb4896a2fa)[#mysql](/tag.html?tag=40&cHash=a03ebd75b978a5c9581e455b7030b6f0)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Jul 2011

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.