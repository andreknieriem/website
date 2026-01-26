---
title: 'TYPO3: tt_content uid im Fluid Template benutzen'
date: '2015-04-01T15:24:40.000Z'
slug: typo3-tt-content-uid-im-fluid-template-benutzen
tags:
  - '198'
  - '388'
  - '432'
  - '647'
description: "Möchte man die derzeitige tt_content uid im Fluid Template benutzen, so kann man dies mit folgendem Code machen. Dieser muss in euren Controller aufgerufen werden. \r\n$cObj = $this-&gt;configurationManager-&gt;getContentObject();\r\n$currentUid = $cObj-&gt;data['uid'];\r\n\r\n// An dieser Stelle dann möglicherweise noch mehrere/die vorherigen Variablen übergeben.\r\n$this-&gt;view-&gt;assign('currentUid', $currentUid);\r\n Nun kann im Fluid Template die Uid einfach wie folgt verwenden: \r\n{currentUid}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: tt\_content uid im Fluid Template benutzen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#template](/tag.html?tag=388&cHash=9a9768d86c67bd7be99d098088d5c665)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#tt\_content](/tag.html?tag=647&cHash=d83472006b1ad17d070bbe6fa374f0f2)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Apr 2015

Möchte man die derzeitige tt\_content uid im Fluid Template benutzen, so kann man dies mit folgendem Code machen. Dieser muss in euren Controller aufgerufen werden.

```

$cObj = $this->configurationManager->getContentObject();
$currentUid = $cObj->data['uid'];

// An dieser Stelle dann möglicherweise noch mehrere/die vorherigen Variablen übergeben.
$this->view->assign('currentUid', $currentUid);
```

Nun kann im Fluid Template die Uid einfach wie folgt verwenden:

```

{currentUid}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.