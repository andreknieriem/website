---
title: 'TYPO3: tt_content uid im Fluid Template benutzen'
date: '2015-04-01T15:24:40.000Z'
slug: typo3-tt-content-uid-im-fluid-template-benutzen
tags:
  - typo3
  - template
  - fluid
  - tt_content
description: "Möchte man die derzeitige tt_content uid im Fluid Template benutzen, so kann man dies mit folgendem Code machen. Dieser muss in euren Controller aufgerufen werden. \r\n$cObj = $this-&gt;configurationManager-&gt;getContentObject();\r\n$currentUid = $cObj-&gt;data['uid'];\r\n\r\n// An dieser Stelle dann möglicherweise noch mehrere/die vorherigen Variablen übergeben.\r\n$this-&gt;view-&gt;assign('currentUid', $currentUid);\r\n Nun kann im Fluid Template die Uid einfach wie folgt verwenden: \r\n{currentUid}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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