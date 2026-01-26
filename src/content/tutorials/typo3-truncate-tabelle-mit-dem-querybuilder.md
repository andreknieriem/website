---
title: 'TYPO3: Truncate Tabelle mit dem Querybuilder'
date: '2018-10-10T11:46:00.000Z'
slug: typo3-truncate-tabelle-mit-dem-querybuilder
tags:
  - '198'
  - '1077'
  - '1078'
  - '1079'
  - '1080'
  - '40'
  - '461'
description: >-
  Ich Folgenden zeige ich euch, wie man mit dem neuen Querybuilder von TYPO3
  eine Tabelle leeren kann. Das geht recht einfach: 
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Truncate Tabelle mit dem Querybuilder

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#mysql](/tag.html?tag=40&cHash=a03ebd75b978a5c9581e455b7030b6f0)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#querybuilder](/tag.html?tag=1077&cHash=ada1f98f509ec708a443b5c5375e76e9)[#truncate](/tag.html?tag=1078&cHash=1c0a41fd7bd940e42309837dbabb5f99)[#table](/tag.html?tag=1079&cHash=f305c9a0a4f915e941495712706ebccb)[#connection](/tag.html?tag=1080&cHash=8a2e1cbd06b2b479df8c55e58a8a6759)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. Oct 2018

Ich Folgenden zeige ich euch, wie man mit dem neuen Querybuilder von TYPO3 eine Tabelle leeren kann. Das geht recht einfach:

```
// use TYPO3\CMS\Core\Utility\GeneralUtility;
// use TYPO3\CMS\Core\Database\ConnectionPool;
$connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tx_myext_domain_model_test');
$connection->truncate('tx_myext_domain_model_test');
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/261da890dd1c8f25a8f1c0fa0f2dcb24?s=75&d=mm&r=g)
    
    [crear](https://crear.pl/)
    
    Kurz und konkret. Vielen Dank!
    
    21\. Jun 2021 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.