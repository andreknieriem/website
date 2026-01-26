---
title: 'TYPO3: Extbase Klassen in Hooks und Userfuncs benutzen'
date: '2016-05-30T16:45:53.000Z'
slug: typo3-extbase-klassen-in-hooks-und-userfuncs-benutzen
tags:
  - '198'
  - '461'
  - '573'
  - '806'
  - '837'
  - '838'
  - '839'
description: "Möchte man zum Beispiel das NewsRepository in einem Hook oder sonst wo benutzen, wo das Repo sonst nicht verfügbar ist, so kann man dies mit folgenden Zeilen machen. Als erstes wird der extbaseObjectManager geladen, damit man mit diesem das Repository laden kann. \r\n&lt;?php\r\n/** @var $extbaseObjectManager \\TYPO3\\CMS\\Extbase\\Object\\ObjectManager */\r\n$extbaseObjectManager = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Extbase\\\\Object\\\\ObjectManager');\r\n/** @var $newsRepository \\Tx_News_Domain_Repository_NewsRepository */\r\n$newsRepository = $extbaseObjectManager-&gt;get('GeorgRinger\\News\\Domain\\Repository\\NewsRepository');\r\n/** @var $newsRecord \\GeorgRinger\\News\\Domain\\Model\\News */\r\n$newsRecord = $newsRepository-&gt;findByUid($newsParams['news']);\r\n Viel Erfolg beim Extbase-Programmieren :D"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Extbase Klassen in Hooks und Userfuncs benutzen

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#repository](/tag.html?tag=573&cHash=a7bca7438744363f8bef5782d590fd8f)[#hook](/tag.html?tag=806&cHash=9c325cbfa8a9006c7d75178a02374e9f)[#inject](/tag.html?tag=837&cHash=2eaafe769c291f601b4b504c01d94e3f)[#xclass](/tag.html?tag=838&cHash=7aacaa3421510a58ba9af415c7299b4d)[#userfunc](/tag.html?tag=839&cHash=e3d8be20fffd08b857f2ee2c01d9a76a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. May 2016

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.