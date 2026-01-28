---
title: TYPO3 6.2 - TSFE Funktionen in Extension/Hook verfügbar machen
date: '2016-01-22T17:16:02.000Z'
slug: typo3-62-tsfe-funktionen-in-extensionhook-verfuegbar-machen
tags:
  - typo3
  - use
  - extension
  - '6.2'
  - tsfe
  - frontend
  - hook
  - '7.6'
description: "An manchen Stellen in TYPO3 ist das Frontend TSFE leider nicht verfügbar. Möchte man trotzdem die Funktionen nutzen - zum Beispiel TYPOLINK so kann man sich mit folgender Funktion das Frontend \"hochfahren\". \r\n     /**\r\n     * Initializes a TypoScript Frontend necessary for using TypoScript and TypoLink functions\r\n     *\r\n     * @param int $id\r\n     * @param int $typeNum\r\n     */\r\n    protected function initTSFE($id = 1, $typeNum = 0) {\r\n        \\TYPO3\\CMS\\Frontend\\Utility\\EidUtility::initTCA();\r\n        if (!is_object($GLOBALS['TT'])) {\r\n            $GLOBALS['TT'] = new \\TYPO3\\CMS\\Core\\TimeTracker\\NullTimeTracker;\r\n            $GLOBALS['TT']-&gt;start();\r\n        }\r\n\r\n        $GLOBALS['TSFE'] = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Frontend\\\\Controller\\\\TypoScriptFrontendController',  $GLOBALS['TYPO3_CONF_VARS'], $id, $typeNum);\r\n        $GLOBALS['TSFE']-&gt;sys_page = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Frontend\\\\Page\\\\PageRepository');\r\n        $GLOBALS['TSFE']-&gt;sys_page-&gt;init(TRUE);\r\n        $GLOBALS['TSFE']-&gt;connectToDB();\r\n        $GLOBALS['TSFE']-&gt;initFEuser();\r\n        $GLOBALS['TSFE']-&gt;determineId();\r\n        $GLOBALS['TSFE']-&gt;initTemplate();\r\n        $GLOBALS['TSFE']-&gt;rootLine = $GLOBALS['TSFE']-&gt;sys_page-&gt;getRootLine($id, '');\r\n        $GLOBALS['TSFE']-&gt;getConfigArray();\r\n\r\n        if (\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::isLoaded('realurl')) {\r\n            $rootline = \\TYPO3\\CMS\\Backend\\Utility\\BackendUtility::BEgetRootLine($id);\r\n            $host = \\TYPO3\\CMS\\Backend\\Utility\\BackendUtility::firstDomainRecord($rootline);\r\n            $_SERVER['HTTP_HOST'] = $host;\r\n        }\r\n    }\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

An manchen Stellen in TYPO3 ist das Frontend TSFE leider nicht verfügbar. Möchte man trotzdem die Funktionen nutzen - zum Beispiel TYPOLINK so kann man sich mit folgender Funktion das Frontend "hochfahren".

```php

     /**
     * Initializes a TypoScript Frontend necessary for using TypoScript and TypoLink functions
     *
     * @param int $id
     * @param int $typeNum
     */
    protected function initTSFE($id = 1, $typeNum = 0) {
        \TYPO3\CMS\Frontend\Utility\EidUtility::initTCA();
        if (!is_object($GLOBALS['TT'])) {
            $GLOBALS['TT'] = new \TYPO3\CMS\Core\TimeTracker\NullTimeTracker;
            $GLOBALS['TT']->start();
        }

        $GLOBALS['TSFE'] = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Frontend\\Controller\\TypoScriptFrontendController',  $GLOBALS['TYPO3_CONF_VARS'], $id, $typeNum);
        $GLOBALS['TSFE']->sys_page = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Frontend\\Page\\PageRepository');
        $GLOBALS['TSFE']->sys_page->init(TRUE);
        $GLOBALS['TSFE']->connectToDB();
        $GLOBALS['TSFE']->initFEuser();
        $GLOBALS['TSFE']->determineId();
        $GLOBALS['TSFE']->initTemplate();
        $GLOBALS['TSFE']->rootLine = $GLOBALS['TSFE']->sys_page->getRootLine($id, '');
        $GLOBALS['TSFE']->getConfigArray();

        if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('realurl')) {
            $rootline = \TYPO3\CMS\Backend\Utility\BackendUtility::BEgetRootLine($id);
            $host = \TYPO3\CMS\Backend\Utility\BackendUtility::firstDomainRecord($rootline);
            $_SERVER['HTTP_HOST'] = $host;
        }
    }

```