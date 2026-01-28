---
title: 'TYPO3: Eigene Ordner-Icons verwenden'
date: '2014-05-13T15:09:34.000Z'
slug: typo3-eigene-ordner-icons-verwenden
tags:
  - '89'
  - '90'
  - '198'
  - '478'
  - '479'
  - '480'
description: "Möchte man in TYPO3 ein eigenes Icon im Pagetree bei seinen Ordnern einstellen, so wie beispielsweise bei tt_news, ext_news oder auch Webseiten-Benutzern, so kann man mit den folgenden 2 Zeilen in der ext_tables.php in eurer Extension ein neues Icon hinzufügen. \nZu beachten ist, dass der Name, in diesem Fall \"own_icon\" nicht länger als 10 Zeichen ist, da der Name sonst beschnitten wird und es im Backend dann eine Fehlermeldung gibt. \r\nt3lib_SpriteManager::addTcaTypeIcon('pages', 'contains-ownIcon', '../fileadmin/templates/img/icons/own_icon.png');\r\n$TCA['pages']['columns']['module']['config']['items'][] = array('Folder Blue', 'ownIcon', '../fileadmin/templates/img/icons/own_icon.png');  \r\n Update Für neuere TYPO3 Version \r\n\\TYPO3\\CMS\\Backend\\Sprite\\SpriteManager::addTcaTypeIcon('pages', 'contains-ownIcon', '../fileadmin/templates/img/icons/own_icon.png');\r\n$TCA['pages']['columns']['module']['config']['items'][] = array('Folder Blue', 'ownIcon', '../fileadmin/templates/img/icons/own_icon.png');\r\n "
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#folder](/tag.html?tag=89&cHash=6c51e6c39657be6431df379a17593cf5)[#ordner](/tag.html?tag=90&cHash=a0228c672b6ddc2e78e32047d5d6bab2)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#icon](/tag.html?tag=478&cHash=639931ec9a91a681476305cc69d6ff9c)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#erstellen](/tag.html?tag=480&cHash=a18544430b7d76e83779a833a2a58287)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

13\. May 2014

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.