---
title: 'TYPO3: TCA Sortierung in einem Select-Feld einstellen'
date: '2014-09-16T16:03:55.000Z'
slug: typo3-tca-sortierung-in-einem-select-feld-einstellen
tags:
  - '198'
  - '488'
  - '529'
  - '530'
description: "Hat man ein Select-Feld in einer Extension via TCA und möchte die Datensätze darin sortieren lassen, so geht dies über das foreign_table_where. Möchte man kein weiteres Where-Attribut, aber trotzdem eine sorierte Liste haben, dann kann man einfach folgenden Code verwenden: \r\n'einFeld' =&gt; array (\r\n\t'exclude' =&gt; 1,\t\t\r\n\t'label' =&gt; 'Ein Feld',\t\t\r\n\t'config' =&gt; array (\r\n\t\t'type' =&gt; 'select',\t\r\n\t\t'internal_type' =&gt; 'db',\t\r\n\t\t'foreign_table' =&gt; 'deineTabelle',\r\n\t\t'foreign_table_where' =&gt; 'AND 1=1 Order by deinemFeld ASC',\r\n\t)\r\n Das AND 1=1 ist immer true und somit kommen nach wie vor alle Datensätze. Danach folgt dann die die Sortierung in aufsteigender Reihenfolge."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: TCA Sortierung in einem Select-Feld einstellen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#tca](/tag.html?tag=488&cHash=1d45fe35b0f126afdcd6305faee96aac)[#sort](/tag.html?tag=529&cHash=c8471a5961fc04e0e79ff73456f5d3cc)[#sortierung](/tag.html?tag=530&cHash=709704864a8295a323c42ce9ebce30e4)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. Sep 2014

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/399e01722491594561058aafc6e22065?s=75&d=mm&r=g)
    
    [Erdal](http://blog.webcan.de)
    
    Yepp, das hat mir sehr geholfen. Vielen Dank.
    
    22\. Mar 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/1367c452655a74097c6a5b8bc6725ebd?s=75&d=mm&r=g)
    
    Markus
    
    guter Tipp!
    
    11\. Jul 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Freut mich, dass er dir geholfen hat ;)
        
        11\. Jul 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.