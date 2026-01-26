---
title: 'TYPO3: TCA Datensatz-Label aus mehreren Feldern zusammensetzen'
date: '2014-06-17T17:08:36.000Z'
slug: typo3-tca-datensatz-label-aus-mehreren-feldern-zusammensetzen
tags:
  - '198'
  - '394'
  - '488'
  - '489'
  - '490'
  - '491'
  - '495'
  - '496'
  - '497'
description: "Manchmal möchte man das Label eines selbsterstellten Datensatzes so haben, dass es aus mehreren Feldern besteht und so auch besser im TYPO3-Backend angezeigt wird. In meinem Fall war dies der Name einer Kontaktperson. Da mir nur der Nachname oder der Vorname zu wenig war und ich nicht extra ein Feld für den kompletten Namen haben wollte, habe ich mich kurz umgeschaut und habe folgende Lösung gefunden, die man einfach via TCA setzen kann. \r\n$TCA['tx_meinetabelle'] = Array (\r\n    'ctrl' =&gt; Array (\r\n        'label' =&gt; 'first_name',\r\n        'label_alt' =&gt; 'last_name',\r\n        'label_alt_force' =&gt; 1,        \r\n        ....,\r\n),\r\n);\r\n Mit dem kleinen Schnipsel zeigt er den Vor-und Nachnamen an. Viel Spaß damit!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: TCA Datensatz-Label aus mehreren Feldern zusammensetzen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#felder](/tag.html?tag=394&cHash=152562e2318470ba191b5706e4551d1b)[#tca](/tag.html?tag=488&cHash=1d45fe35b0f126afdcd6305faee96aac)[#mehrere felder als label](/tag.html?tag=489&cHash=05ce62ea049535cf9aafeb685bff89c1)[#titel](/tag.html?tag=490&cHash=1480bd2040ff725a088ee87a379bd3cf)[#multiple. title](/tag.html?tag=491&cHash=4a00ee432bfae6d6a2f351ba22eb1af7)[#mehrere](/tag.html?tag=495&cHash=66b7a2411a7f4604ef9277515f3b5479)[#multiple](/tag.html?tag=496&cHash=b5ccf1ab608165ac786e9c24537cc63b)[#fields](/tag.html?tag=497&cHash=7f07ea8b8e2a8712631cbcaed224b59c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Jun 2014

Manchmal möchte man das Label eines selbsterstellten Datensatzes so haben, dass es aus mehreren Feldern besteht und so auch besser im TYPO3-Backend angezeigt wird. In meinem Fall war dies der Name einer Kontaktperson. Da mir nur der Nachname oder der Vorname zu wenig war und ich nicht extra ein Feld für den kompletten Namen haben wollte, habe ich mich kurz umgeschaut und habe folgende Lösung gefunden, die man einfach via TCA setzen kann.

```

$TCA['tx_meinetabelle'] = Array (
    'ctrl' => Array (
        'label' => 'first_name',
        'label_alt' => 'last_name',
        'label_alt_force' => 1,        
        ....,
),
);
```

Mit dem kleinen Schnipsel zeigt er den Vor-und Nachnamen an. Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.