---
title: 'TYPO3: TCA Datensatz-Label aus mehreren Feldern zusammensetzen'
date: '2014-06-17T17:08:36.000Z'
slug: typo3-tca-datensatz-label-aus-mehreren-feldern-zusammensetzen
tags:
  - typo3
  - felder
  - tca
  - mehrere felder als label
  - titel
  - multiple. title
  - mehrere
  - multiple
  - fields
description: "Manchmal möchte man das Label eines selbsterstellten Datensatzes so haben, dass es aus mehreren Feldern besteht und so auch besser im TYPO3-Backend angezeigt wird. In meinem Fall war dies der Name einer Kontaktperson. Da mir nur der Nachname oder der Vorname zu wenig war und ich nicht extra ein Feld für den kompletten Namen haben wollte, habe ich mich kurz umgeschaut und habe folgende Lösung gefunden, die man einfach via TCA setzen kann. \r\n$TCA['tx_meinetabelle'] = Array (\r\n    'ctrl' =&gt; Array (\r\n        'label' =&gt; 'first_name',\r\n        'label_alt' =&gt; 'last_name',\r\n        'label_alt_force' =&gt; 1,        \r\n        ....,\r\n),\r\n);\r\n Mit dem kleinen Schnipsel zeigt er den Vor-und Nachnamen an. Viel Spaß damit!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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