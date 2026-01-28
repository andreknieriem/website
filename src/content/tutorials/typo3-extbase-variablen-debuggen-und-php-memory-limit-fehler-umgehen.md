---
title: 'TYPO3: Extbase Variablen debuggen und php memory_limit-Fehler umgehen'
date: '2016-03-09T17:23:08.000Z'
slug: typo3-extbase-variablen-debuggen-und-php-memory-limit-fehler-umgehen
tags:
  - php
  - extbase
  - memory_limit
  - var_dump
  - blank page
description: "Möchte man Extbase Objecte debuggen, so läuft mit sehr schnell in PHP-Fatals, da das Memory-Limit überschritten ist. TYPO3/Extbase hat dafür eine eigene Methode entwickelt, die einem ein var_dump der Variablen anzeigt. Fluid benutzt genau dieselbe Methode beim f:debug-Viewhelper. \r\n// anstelle von var_dump($var);\r\n\\TYPO3\\CMS\\Extbase\\Utility\\DebuggerUtility::var_dump($var);\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Möchte man Extbase Objecte debuggen, so läuft mit sehr schnell in PHP-Fatals, da das Memory-Limit überschritten ist. TYPO3/Extbase hat dafür eine eigene Methode entwickelt, die einem ein var\_dump der Variablen anzeigt. Fluid benutzt genau dieselbe Methode beim f:debug-Viewhelper.

```php

// anstelle von var_dump($var);
\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($var);

```