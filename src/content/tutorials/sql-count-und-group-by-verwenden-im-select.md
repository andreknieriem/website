---
title: 'SQL: Count und Group-By verwenden im Select'
date: '2015-11-03T16:36:04.000Z'
slug: sql-count-und-group-by-verwenden-im-select
tags:
  - select
  - count
  - group
  - sql
description: "Möchte man mit SQL schnell sehen, wie oft eine bestimmte Sache in den Rows vorkommt und diese dann sortiert und gruppiert ausgeben so kann man sich mit folgendem SQL-Snippet diese Dinge heraussuchen.\nAusgangstabelle \r\nname  | town\r\nUser1 | Köln\r\nUser2 | Berlin\r\nUser3 | Köln\r\nUser4 | Hamburg\r\n Hat man beispielsweise eine solche User-Tabelle und möchte die sie nach Stadt gruppiert zählen so geht das mit folgendem Code: \r\nselect town, count(town) \r\nfrom user\r\ngroup by town\r\n Als Ergebnis erhält man dann etwas in dieser Art \r\nKöln    | 2\r\nBerlin  | 1\r\nHamburg | 1\r\n "
image: /fileadmin/_processed_/1/a/csm_sql_af6f58ca14.png
demo_url: null
download_url: null
---

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