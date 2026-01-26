---
title: 'TYPO3: Solr Bereichsuche durch Query-Filter erstellen'
date: '2018-03-28T10:57:00.000Z'
slug: typo3-solr-bereichsuche-durch-query-filter-erstellen
tags:
  - '198'
  - '1027'
  - '984'
  - '906'
description: "Wenn man in der Solr Extension Facetten oder andere Dinge benutzt, dann kann es vorkommen, dass man auf Seiten nur Suchergebnisse einer bestimmten Gruppe, also ein vorgefiltertes Suchergebnis bekommen möchte. Das Ganze lässt sich ziemlich einfach via TypoScript bewerkstelligen. Hier mal ein kleines Snipped: [globalVar = TSFE:id = 123]\r\n  plugin.tx_solr.search.query.filter{\r\n    blogOnlyFilter = type:tx_arext_blog\r\n  }\r\n[global] Der obrige Code sorgt dafür, dass auf Seite 123 meiner Seite nur Suchergebnisse ausgegeben werden, die vom Typ&nbsp;tx_arext_blog&nbsp;sind.\r\nMan kann die Filter&nbsp;sogar mit einem \"-\" (Minus) negieren, sodass bestimmte Typen nicht herauskommen sollen. Hier mal ein Beispiel: [globalVar = TSFE:id = 123]\r\n  plugin.tx_solr.search.query.filter{\r\n    noblogFilter = -type:tx_arext_blog\r\n  }\r\n[global]"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Solr Bereichsuche durch Query-Filter erstellen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#query](/tag.html?tag=906&cHash=fdd6394475540782c72be30f5f7dca74)[#filter](/tag.html?tag=984&cHash=ab384e857a0880f737177bcf452a0227)[#solr](/tag.html?tag=1027&cHash=e1c02ecc60afe39fa9786cb86e252211)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Mar 2018

Wenn man in der Solr Extension Facetten oder andere Dinge benutzt, dann kann es vorkommen, dass man auf Seiten nur Suchergebnisse einer bestimmten Gruppe, also ein vorgefiltertes Suchergebnis bekommen möchte. Das Ganze lässt sich ziemlich einfach via TypoScript bewerkstelligen. Hier mal ein kleines Snipped:

```
[globalVar = TSFE:id = 123]
  plugin.tx_solr.search.query.filter{
    blogOnlyFilter = type:tx_arext_blog
  }
[global]
```

Der obrige Code sorgt dafür, dass auf Seite 123 meiner Seite nur Suchergebnisse ausgegeben werden, die vom Typ **tx\_arext\_blog** sind.

Man kann die Filter sogar mit einem "-" (Minus) negieren, sodass bestimmte Typen nicht herauskommen sollen. Hier mal ein Beispiel:

```
[globalVar = TSFE:id = 123]
  plugin.tx_solr.search.query.filter{
    noblogFilter = -type:tx_arext_blog
  }
[global]
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.