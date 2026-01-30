---
title: 'TYPO3: Solr Bereichsuche durch Query-Filter erstellen'
date: '2018-03-28T10:57:00.000Z'
slug: typo3-solr-bereichsuche-durch-query-filter-erstellen
tags:
  - typo3
  - solr
  - filter
  - query
description: "Wenn man in der Solr Extension Facetten oder andere Dinge benutzt, dann kann es vorkommen, dass man auf Seiten nur Suchergebnisse einer bestimmten Gruppe, also ein vorgefiltertes Suchergebnis bekommen möchte. Das Ganze lässt sich ziemlich einfach via TypoScript bewerkstelligen. Hier mal ein kleines Snipped: [globalVar = TSFE:id = 123]\r\n  plugin.tx_solr.search.query.filter{\r\n    blogOnlyFilter = type:tx_arext_blog\r\n  }\r\n[global] Der obrige Code sorgt dafür, dass auf Seite 123 meiner Seite nur Suchergebnisse ausgegeben werden, die vom Typ&nbsp;tx_arext_blog&nbsp;sind.\r\nMan kann die Filter&nbsp;sogar mit einem \"-\" (Minus) negieren, sodass bestimmte Typen nicht herauskommen sollen. Hier mal ein Beispiel: [globalVar = TSFE:id = 123]\r\n  plugin.tx_solr.search.query.filter{\r\n    noblogFilter = -type:tx_arext_blog\r\n  }\r\n[global]"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Wenn man in der Solr Extension Facetten oder andere Dinge benutzt, dann kann es vorkommen, dass man auf Seiten nur Suchergebnisse einer bestimmten Gruppe, also ein vorgefiltertes Suchergebnis bekommen möchte. Das Ganze lässt sich ziemlich einfach via TypoScript bewerkstelligen. Hier mal ein kleines Snipped:

```bash
[globalVar = TSFE:id = 123]
  plugin.tx_solr.search.query.filter{
    blogOnlyFilter = type:tx_arext_blog
  }
[global]
```

Der obrige Code sorgt dafür, dass auf Seite 123 meiner Seite nur Suchergebnisse ausgegeben werden, die vom Typ **tx\_arext\_blog** sind.

Man kann die Filter sogar mit einem "-" (Minus) negieren, sodass bestimmte Typen nicht herauskommen sollen. Hier mal ein Beispiel:

```bash
[globalVar = TSFE:id = 123]
  plugin.tx_solr.search.query.filter{
    noblogFilter = -type:tx_arext_blog
  }
[global]
```
