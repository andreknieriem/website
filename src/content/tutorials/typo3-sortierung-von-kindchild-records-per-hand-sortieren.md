---
title: 'TYPO3: Sortierung von Kind/Child Records per Hand sortieren'
date: '2017-09-13T22:00:00.000Z'
slug: typo3-sortierung-von-kindchild-records-per-hand-sortieren
tags:
  - typo3
  - extbase
  - sort
  - repository
  - child
  - irre
  - sorting
description: "Manchmal möchte man die Kind-Datensätze noch einmal sortieren, da diese mit der defaultOrdering nicht übereinstimmen. Dies lässt sich ganz einfach mit folgender Funktion tun: /**\r\n * @param array $arr\r\n * @return array\r\n */\r\npublic function sortObjectBySorting($arr) {\r\n  usort($arr, function ($a, $b) {\r\n    if ($a-&gt;getSorting() == $b-&gt;getSorting()) {\r\n      return 0;\r\n    }\r\n    return ($a-&gt;getSorting() &lt; $b-&gt;getSorting()) ? -1 : 1;\r\n  });\r\n  return $arr;\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Manchmal möchte man die Kind-Datensätze noch einmal sortieren, da diese mit der defaultOrdering nicht übereinstimmen. Dies lässt sich ganz einfach mit folgender Funktion tun:

```php
/**
 * @param array $arr
 * @return array
 */
public function sortObjectBySorting($arr) {
  usort($arr, function ($a, $b) {
    if ($a->getSorting() == $b->getSorting()) {
      return 0;
    }
    return ($a->getSorting() < $b->getSorting()) ? -1 : 1;
  });
  return $arr;
}
```