---
title: 'TYPO3: Truncate Tabelle mit dem Querybuilder'
date: '2018-10-10T11:46:00.000Z'
slug: typo3-truncate-tabelle-mit-dem-querybuilder
tags:
  - typo3
  - querybuilder
  - truncate
  - table
  - connection
  - mysql
  - extbase
description: >-
  Ich Folgenden zeige ich euch, wie man mit dem neuen Querybuilder von TYPO3
  eine Tabelle leeren kann. Das geht recht einfach: 
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Ich Folgenden zeige ich euch, wie man mit dem neuen Querybuilder von TYPO3 eine Tabelle leeren kann. Das geht recht einfach:

```
// use TYPO3\CMS\Core\Utility\GeneralUtility;
// use TYPO3\CMS\Core\Database\ConnectionPool;
$connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tx_myext_domain_model_test');
$connection->truncate('tx_myext_domain_model_test');
```