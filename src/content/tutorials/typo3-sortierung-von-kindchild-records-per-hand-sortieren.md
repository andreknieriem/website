---
title: 'TYPO3: Sortierung von Kind/Child Records per Hand sortieren'
date: '2017-09-13T22:00:00.000Z'
slug: typo3-sortierung-von-kindchild-records-per-hand-sortieren
tags:
  - '198'
  - '461'
  - '529'
  - '573'
  - '176'
  - '809'
  - '1005'
description: "Manchmal möchte man die Kind-Datensätze noch einmal sortieren, da diese mit der defaultOrdering nicht übereinstimmen. Dies lässt sich ganz einfach mit folgender Funktion tun: /**\r\n * @param array $arr\r\n * @return array\r\n */\r\npublic function sortObjectBySorting($arr) {\r\n  usort($arr, function ($a, $b) {\r\n    if ($a-&gt;getSorting() == $b-&gt;getSorting()) {\r\n      return 0;\r\n    }\r\n    return ($a-&gt;getSorting() &lt; $b-&gt;getSorting()) ? -1 : 1;\r\n  });\r\n  return $arr;\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#child](/tag.html?tag=176&cHash=cee08fec4054bdace1cb309675352954)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#sort](/tag.html?tag=529&cHash=c8471a5961fc04e0e79ff73456f5d3cc)[#repository](/tag.html?tag=573&cHash=a7bca7438744363f8bef5782d590fd8f)[#irre](/tag.html?tag=809&cHash=5e062da3f06da67295035b6fd3626543)[#sorting](/tag.html?tag=1005&cHash=137a6e8212ce5c99831a51a89820b03f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Sep 2017

Manchmal möchte man die Kind-Datensätze noch einmal sortieren, da diese mit der defaultOrdering nicht übereinstimmen. Dies lässt sich ganz einfach mit folgender Funktion tun:

```
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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.