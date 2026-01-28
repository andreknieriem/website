---
title: 'TYPO3: Extbase Klassen in Hooks und Userfuncs benutzen'
date: '2016-05-30T16:45:53.000Z'
slug: typo3-extbase-klassen-in-hooks-und-userfuncs-benutzen
tags:
  - typo3
  - extbase
  - repository
  - hook
  - inject
  - xclass
  - userfunc
description: "Möchte man zum Beispiel das NewsRepository in einem Hook oder sonst wo benutzen, wo das Repo sonst nicht verfügbar ist, so kann man dies mit folgenden Zeilen machen. Als erstes wird der extbaseObjectManager geladen, damit man mit diesem das Repository laden kann. \r\n&lt;?php\r\n/** @var $extbaseObjectManager \\TYPO3\\CMS\\Extbase\\Object\\ObjectManager */\r\n$extbaseObjectManager = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Extbase\\\\Object\\\\ObjectManager');\r\n/** @var $newsRepository \\Tx_News_Domain_Repository_NewsRepository */\r\n$newsRepository = $extbaseObjectManager-&gt;get('GeorgRinger\\News\\Domain\\Repository\\NewsRepository');\r\n/** @var $newsRecord \\GeorgRinger\\News\\Domain\\Model\\News */\r\n$newsRecord = $newsRepository-&gt;findByUid($newsParams['news']);\r\n Viel Erfolg beim Extbase-Programmieren :D"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Möchte man zum Beispiel das NewsRepository in einem Hook oder sonst wo benutzen, wo das Repo sonst nicht verfügbar ist, so kann man dies mit folgenden Zeilen machen. Als erstes wird der extbaseObjectManager geladen, damit man mit diesem das Repository laden kann.

```

<?php
/** @var $extbaseObjectManager \TYPO3\CMS\Extbase\Object\ObjectManager */
$extbaseObjectManager = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\\ObjectManager');
/** @var $newsRepository \Tx_News_Domain_Repository_NewsRepository */
$newsRepository = $extbaseObjectManager->get('GeorgRinger\News\Domain\Repository\NewsRepository');
/** @var $newsRecord \GeorgRinger\News\Domain\Model\News */
$newsRecord = $newsRepository->findByUid($newsParams['news']);
```

Viel Erfolg beim Extbase-Programmieren :D