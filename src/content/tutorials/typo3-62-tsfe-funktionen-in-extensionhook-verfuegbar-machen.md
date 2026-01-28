---
title: TYPO3 6.2 - TSFE Funktionen in Extension/Hook verfügbar machen
date: '2016-01-22T17:16:02.000Z'
slug: typo3-62-tsfe-funktionen-in-extensionhook-verfuegbar-machen
tags:
  - '198'
  - '473'
  - '479'
  - '772'
  - '804'
  - '805'
  - '806'
  - '807'
description: "An manchen Stellen in TYPO3 ist das Frontend TSFE leider nicht verfügbar. Möchte man trotzdem die Funktionen nutzen - zum Beispiel TYPOLINK so kann man sich mit folgender Funktion das Frontend \"hochfahren\". \r\n     /**\r\n     * Initializes a TypoScript Frontend necessary for using TypoScript and TypoLink functions\r\n     *\r\n     * @param int $id\r\n     * @param int $typeNum\r\n     */\r\n    protected function initTSFE($id = 1, $typeNum = 0) {\r\n        \\TYPO3\\CMS\\Frontend\\Utility\\EidUtility::initTCA();\r\n        if (!is_object($GLOBALS['TT'])) {\r\n            $GLOBALS['TT'] = new \\TYPO3\\CMS\\Core\\TimeTracker\\NullTimeTracker;\r\n            $GLOBALS['TT']-&gt;start();\r\n        }\r\n\r\n        $GLOBALS['TSFE'] = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Frontend\\\\Controller\\\\TypoScriptFrontendController',  $GLOBALS['TYPO3_CONF_VARS'], $id, $typeNum);\r\n        $GLOBALS['TSFE']-&gt;sys_page = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Frontend\\\\Page\\\\PageRepository');\r\n        $GLOBALS['TSFE']-&gt;sys_page-&gt;init(TRUE);\r\n        $GLOBALS['TSFE']-&gt;connectToDB();\r\n        $GLOBALS['TSFE']-&gt;initFEuser();\r\n        $GLOBALS['TSFE']-&gt;determineId();\r\n        $GLOBALS['TSFE']-&gt;initTemplate();\r\n        $GLOBALS['TSFE']-&gt;rootLine = $GLOBALS['TSFE']-&gt;sys_page-&gt;getRootLine($id, '');\r\n        $GLOBALS['TSFE']-&gt;getConfigArray();\r\n\r\n        if (\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::isLoaded('realurl')) {\r\n            $rootline = \\TYPO3\\CMS\\Backend\\Utility\\BackendUtility::BEgetRootLine($id);\r\n            $host = \\TYPO3\\CMS\\Backend\\Utility\\BackendUtility::firstDomainRecord($rootline);\r\n            $_SERVER['HTTP_HOST'] = $host;\r\n        }\r\n    }\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#use](/tag.html?tag=473&cHash=b4ff76538534b7157c11cbab1a4c7016)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#6.2](/tag.html?tag=772&cHash=d68bf05758d88e708a8ca264cc7cf75f)[#tsfe](/tag.html?tag=804&cHash=f9e7ef3ba87fc832f6d602e7afe49e9d)[#frontend](/tag.html?tag=805&cHash=b13f609ddc04b4c91c522080e9266646)[#hook](/tag.html?tag=806&cHash=9c325cbfa8a9006c7d75178a02374e9f)[#7.6](/tag.html?tag=807&cHash=b4278a85562c05b90477af3b415c5f30)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

22\. Jan 2016

An manchen Stellen in TYPO3 ist das Frontend TSFE leider nicht verfügbar. Möchte man trotzdem die Funktionen nutzen - zum Beispiel TYPOLINK so kann man sich mit folgender Funktion das Frontend "hochfahren".

```

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/8ac5f65b04c4b731d932b8e7c6e46035?s=75&d=mm&r=g)
    
    Michael
    
    Klappt auch noch mit Typo3 8.7 wunderbar. Danke!
    
    11\. Mar 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/acf68cf41da4086ccc27ae4a5dd45631?s=75&d=mm&r=g)
    
    vivek
    
    Thank you. It works perfectly for TYPO3 7.6.
    
    08\. Nov 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/6489c8d8cf3c10805378a878d3e2898a?s=75&d=mm&r=g)
    
    [Stefan](https://maischner.de)
    
    Großartig, danke! Hat mir gerade den Samstag gerettet :)
    
    25\. Feb 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.