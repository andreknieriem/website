---
title: 'MySql: Komma-Separierte Elemente aus einer Spalte zählen'
date: '2016-09-20T22:00:00.000Z'
slug: mysql-komma-separierte-elemente-aus-einer-spalte-zaehlen
tags:
  - '40'
  - '784'
  - '919'
  - '920'
  - '641'
  - '589'
  - '921'
  - '922'
description: "Manchmal hat man in einer Tabelle in einem Feld eine komma-separierte Liste, oder einen Json-String. Möchte man dort jetzt die Anzahl an Elementen zählen, bzw. herausfinden, wie viele Reihen mehr als beispielsweise 10 Einträge in diesem Feld haben, dann kann man dies mit folgendem MYSQL-Snippet tun. Der Trick an der Sache ist es, die Kommas zu zählen und dieses in das Where einzubauen.\r\nCode select * \r\nfrom deine_tabelle\r\nwhere LENGTH(dein_spaltenname) - LENGTH(REPLACE(dein_spaltenname, ',', '')) &gt; 9 In obrigen Beispiel werden alle Zeilen geholt, die mehr als 9 Vorkommnisse eines Kommas haben, also mehr als 10 Einträge in dem Feld dein_spaltenname."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# MySql: Komma-Separierte Elemente aus einer Spalte zählen

#Tutorials#SQL

* * *

![](/fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#mysql](/tag.html?tag=40&cHash=a03ebd75b978a5c9581e455b7030b6f0)[#comma](/tag.html?tag=589&cHash=f45a9aca0288203a707a9e872957bc1f)[#chars](/tag.html?tag=641&cHash=ba9a28a4c0dcde1a30b12a41768439d5)[#count](/tag.html?tag=784&cHash=a893d79ffd0c5f616b80f08ed0b5706e)[#character](/tag.html?tag=919&cHash=eff80454a7e50d01ef525eaa4ce0b798)[#where](/tag.html?tag=920&cHash=81c89d087d6953bda2a1f230f1424b34)[#json](/tag.html?tag=921&cHash=8ef3ecc4cb028d78c495a33bcb6fba69)[#entries](/tag.html?tag=922&cHash=c06661e1c1909b11a00bf1e4df27ad58)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Sep 2016

Manchmal hat man in einer Tabelle in einem Feld eine komma-separierte Liste, oder einen Json-String. Möchte man dort jetzt die Anzahl an Elementen zählen, bzw. herausfinden, wie viele Reihen mehr als beispielsweise 10 Einträge in diesem Feld haben, dann kann man dies mit folgendem MYSQL-Snippet tun. Der Trick an der Sache ist es, die Kommas zu zählen und dieses in das Where einzubauen.

**Code**

```
select * 
from deine_tabelle
where LENGTH(dein_spaltenname) - LENGTH(REPLACE(dein_spaltenname, ',', '')) > 9
```

In obrigen Beispiel werden alle Zeilen geholt, die mehr als 9 Vorkommnisse eines Kommas haben, also mehr als 10 Einträge in dem Feld **dein\_spaltenname**.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.