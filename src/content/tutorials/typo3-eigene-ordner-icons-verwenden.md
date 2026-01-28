---
title: 'TYPO3: Eigene Ordner-Icons verwenden'
date: '2014-05-13T15:09:34.000Z'
slug: typo3-eigene-ordner-icons-verwenden
tags:
  - folder
  - ordner
  - typo3
  - icon
  - extension
  - erstellen
description: "Möchte man in TYPO3 ein eigenes Icon im Pagetree bei seinen Ordnern einstellen, so wie beispielsweise bei tt_news, ext_news oder auch Webseiten-Benutzern, so kann man mit den folgenden 2 Zeilen in der ext_tables.php in eurer Extension ein neues Icon hinzufügen. \nZu beachten ist, dass der Name, in diesem Fall \"own_icon\" nicht länger als 10 Zeichen ist, da der Name sonst beschnitten wird und es im Backend dann eine Fehlermeldung gibt. \r\nt3lib_SpriteManager::addTcaTypeIcon('pages', 'contains-ownIcon', '../fileadmin/templates/img/icons/own_icon.png');\r\n$TCA['pages']['columns']['module']['config']['items'][] = array('Folder Blue', 'ownIcon', '../fileadmin/templates/img/icons/own_icon.png');  \r\n Update Für neuere TYPO3 Version \r\n\\TYPO3\\CMS\\Backend\\Sprite\\SpriteManager::addTcaTypeIcon('pages', 'contains-ownIcon', '../fileadmin/templates/img/icons/own_icon.png');\r\n$TCA['pages']['columns']['module']['config']['items'][] = array('Folder Blue', 'ownIcon', '../fileadmin/templates/img/icons/own_icon.png');\r\n "
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Möchte man in TYPO3 ein eigenes Icon im Pagetree bei seinen Ordnern einstellen, so wie beispielsweise bei tt\_news, ext\_news oder auch Webseiten-Benutzern, so kann man mit den folgenden 2 Zeilen in der ext\_tables.php in eurer Extension ein neues Icon hinzufügen.

Zu beachten ist, dass der Name, in diesem Fall "own\_icon" nicht länger als 10 Zeichen ist, da der Name sonst beschnitten wird und es im Backend dann eine Fehlermeldung gibt.

```

t3lib_SpriteManager::addTcaTypeIcon('pages', 'contains-ownIcon', '../fileadmin/templates/img/icons/own_icon.png');
$TCA['pages']['columns']['module']['config']['items'][] = array('Folder Blue', 'ownIcon', '../fileadmin/templates/img/icons/own_icon.png');  
```

**Update Für neuere TYPO3 Version**

```

\TYPO3\CMS\Backend\Sprite\SpriteManager::addTcaTypeIcon('pages', 'contains-ownIcon', '../fileadmin/templates/img/icons/own_icon.png');
$TCA['pages']['columns']['module']['config']['items'][] = array('Folder Blue', 'ownIcon', '../fileadmin/templates/img/icons/own_icon.png');
```