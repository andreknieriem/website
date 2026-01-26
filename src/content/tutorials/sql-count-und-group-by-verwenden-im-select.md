---
title: 'SQL: Count und Group-By verwenden im Select'
date: '2015-11-03T16:36:04.000Z'
slug: sql-count-und-group-by-verwenden-im-select
tags:
  - '151'
  - '784'
  - '785'
  - '786'
description: "Möchte man mit SQL schnell sehen, wie oft eine bestimmte Sache in den Rows vorkommt und diese dann sortiert und gruppiert ausgeben so kann man sich mit folgendem SQL-Snippet diese Dinge heraussuchen.\nAusgangstabelle \r\nname  | town\r\nUser1 | Köln\r\nUser2 | Berlin\r\nUser3 | Köln\r\nUser4 | Hamburg\r\n Hat man beispielsweise eine solche User-Tabelle und möchte die sie nach Stadt gruppiert zählen so geht das mit folgendem Code: \r\nselect town, count(town) \r\nfrom user\r\ngroup by town\r\n Als Ergebnis erhält man dann etwas in dieser Art \r\nKöln    | 2\r\nBerlin  | 1\r\nHamburg | 1\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# SQL: Count und Group-By verwenden im Select

#Tutorials#SQL

* * *

![](/fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#count](/tag.html?tag=784&cHash=a893d79ffd0c5f616b80f08ed0b5706e)[#group](/tag.html?tag=785&cHash=3c3dbc7ed8f11769f927d88405b678a2)[#sql](/tag.html?tag=786&cHash=ee1d1eadefb7ea4c30c2437f83da596b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

03\. Nov 2015

Möchte man mit SQL schnell sehen, wie oft eine bestimmte Sache in den Rows vorkommt und diese dann sortiert und gruppiert ausgeben so kann man sich mit folgendem SQL-Snippet diese Dinge heraussuchen.

**Ausgangstabelle**

```

name  | town
User1 | Köln
User2 | Berlin
User3 | Köln
User4 | Hamburg
```

Hat man beispielsweise eine solche User-Tabelle und möchte die sie nach Stadt gruppiert zählen so geht das mit folgendem Code:

```

select town, count(town) 
from user
group by town
```

Als Ergebnis erhält man dann etwas in dieser Art

```

Köln    | 2
Berlin  | 1
Hamburg | 1
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.