---
title: 'TYPO3: TCA Sortierung in einem Select-Feld einstellen'
date: '2014-09-16T16:03:55.000Z'
slug: typo3-tca-sortierung-in-einem-select-feld-einstellen
tags:
  - typo3
  - tca
  - sort
  - sortierung
description: "Hat man ein Select-Feld in einer Extension via TCA und möchte die Datensätze darin sortieren lassen, so geht dies über das foreign_table_where. Möchte man kein weiteres Where-Attribut, aber trotzdem eine sorierte Liste haben, dann kann man einfach folgenden Code verwenden: \r\n'einFeld' =&gt; array (\r\n\t'exclude' =&gt; 1,\t\t\r\n\t'label' =&gt; 'Ein Feld',\t\t\r\n\t'config' =&gt; array (\r\n\t\t'type' =&gt; 'select',\t\r\n\t\t'internal_type' =&gt; 'db',\t\r\n\t\t'foreign_table' =&gt; 'deineTabelle',\r\n\t\t'foreign_table_where' =&gt; 'AND 1=1 Order by deinemFeld ASC',\r\n\t)\r\n Das AND 1=1 ist immer true und somit kommen nach wie vor alle Datensätze. Danach folgt dann die die Sortierung in aufsteigender Reihenfolge."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Hat man ein Select-Feld in einer Extension via TCA und möchte die Datensätze darin sortieren lassen, so geht dies über das **foreign\_table\_where**. Möchte man kein weiteres Where-Attribut, aber trotzdem eine sorierte Liste haben, dann kann man einfach folgenden Code verwenden:

```

'einFeld' => array (
	'exclude' => 1,		
	'label' => 'Ein Feld',		
	'config' => array (
		'type' => 'select',	
		'internal_type' => 'db',	
		'foreign_table' => 'deineTabelle',
		'foreign_table_where' => 'AND 1=1 Order by deinemFeld ASC',
	)
```

Das **AND 1=1** ist immer true und somit kommen nach wie vor alle Datensätze. Danach folgt dann die die Sortierung in aufsteigender Reihenfolge.