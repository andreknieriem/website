---
title: 'TYPO3: Alle Aftersave Hooks im Überblick (6.2-7.6lts)'
date: '2016-03-14T17:18:55.000Z'
slug: typo3-alle-aftersave-hooks-im-ueberblick-62-76lts
tags:
  - typo3
  - '6.2'
  - hook
  - '7.6'
  - aftersave
  - lts
description: "Hier mal eine Übersicht aller Aftersave-Hooks von TYPO3:\nZuerst müsst ihr die Hook-Klasse für processDatamapClass und processCmdmapClass in der ext_localconf.php eurer Extension hinzufügen:\next_localconf.php \r\n$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass']['extkey'] = 'Vendor\\\\Extension\\\\Hook\\\\TCEmainHook';\r\n$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processCmdmapClass']['extkey'] = 'Vendor\\\\Extension\\\\Hook\\\\TCEmainHook';\r\n /Classes/Hook/TCEmainHook.php \r\n&lt;?php\r\nnamespace Vendor\\Extension\\Hook;\r\n\r\nclass TCEmainHook {\r\n    public function processCmdmap_preProcess($command, $table, $id, $value, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processCmdmap_postProcess($command, $table, $id, $value, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_preProcessFieldArray(array &amp;$fieldArray, $table, $id, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processCmdmap_deleteAction($table, $id, $recordToDelete, $recordWasDeleted=NULL, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_afterAllOperations(\\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_postProcessFieldArray($status, $table, $id, array &amp;$fieldArray, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n    public function processDatamap_afterDatabaseOperations($status, $table, $id, array $fieldArray, \\TYPO3\\CMS\\Core\\DataHandling\\DataHandler &amp;$pObj) {}\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Hier mal eine Übersicht aller Aftersave-Hooks von TYPO3:

Zuerst müsst ihr die Hook-Klasse für **processDatamapClass** und **processCmdmapClass** in der **ext\_localconf.php** eurer Extension hinzufügen:

**ext\_localconf.php**

```php

$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processDatamapClass']['extkey'] = 'Vendor\\Extension\\Hook\\TCEmainHook';
$GLOBALS ['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['processCmdmapClass']['extkey'] = 'Vendor\\Extension\\Hook\\TCEmainHook';

```

**/Classes/Hook/TCEmainHook.php**

```php

<?php
namespace Vendor\Extension\Hook;

class TCEmainHook {
    public function processCmdmap_preProcess($command, $table, $id, $value, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processCmdmap_postProcess($command, $table, $id, $value, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_preProcessFieldArray(array &$fieldArray, $table, $id, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processCmdmap_deleteAction($table, $id, $recordToDelete, $recordWasDeleted=NULL, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_afterAllOperations(\TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_postProcessFieldArray($status, $table, $id, array &$fieldArray, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
    public function processDatamap_afterDatabaseOperations($status, $table, $id, array $fieldArray, \TYPO3\CMS\Core\DataHandling\DataHandler &$pObj) {}
}

```