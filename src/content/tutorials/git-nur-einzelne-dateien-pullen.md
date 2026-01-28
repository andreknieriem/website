---
title: 'Git: Nur einzelne Dateien pullen'
date: '2018-04-17T14:01:00.000Z'
slug: git-nur-einzelne-dateien-pullen
tags:
  - '1006'
  - '1047'
  - '1048'
  - '629'
  - '1049'
  - '1050'
  - '1051'
description: "Manchmal kommt es vor, dass man schon commited und gepusht hat kommt auf seiner Entwicklungsmaschine und es in zu dem Zeitpunkt einen Fehler gibt, der noch zwischengeschoben werden muss. Da das Branching und der Master nun aber schon mit einem zu neuen Stand versehen sind, kann man auch nur einzelne Dateien auf den Server holen (pull). Das Ganze sollte nur im Notfall und nur sehr selten gemacht werden, geht aber recht einfach wie folgt: git fetch --all\r\ngit checkout origin/master -- &lt;your_file_path&gt; Das war es auch schon. Nun werden die Dateien auf dem Server zwar als geändert, bzw. neu angezeigt, bei einem richtigen Pull klappt das mergen aber automatisch."
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Git

* * *

![](/fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#file](/tag.html?tag=629&cHash=b5a44de7cd19099908d93aabdf28fd9a)[#git](/tag.html?tag=1006&cHash=72f874cd9465a57ade8336d3b6e5be0c)[#pull](/tag.html?tag=1047&cHash=d5fd81c96289d240ec309582a6c04a0b)[#single](/tag.html?tag=1048&cHash=8b16af8d5d61bef7e8e362bf48bc54d5)[#not full](/tag.html?tag=1049&cHash=bfc89e46292fabf259d58ef2c8224a13)[#only one](/tag.html?tag=1050&cHash=0dc729ee2e0eaee993f8f8dde02651be)[#pick](/tag.html?tag=1051&cHash=15c5877ad8e29901863e51afebb52cef)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Apr 2018

Manchmal kommt es vor, dass man schon commited und gepusht hat kommt auf seiner Entwicklungsmaschine und es in zu dem Zeitpunkt einen Fehler gibt, der noch zwischengeschoben werden muss. Da das Branching und der Master nun aber schon mit einem zu neuen Stand versehen sind, kann man auch nur einzelne Dateien auf den Server holen (pull). Das Ganze sollte nur im Notfall und nur sehr selten gemacht werden, geht aber recht einfach wie folgt:

```
git fetch --all
git checkout origin/master -- <your_file_path>
```

Das war es auch schon. Nun werden die Dateien auf dem Server zwar als geändert, bzw. neu angezeigt, bei einem richtigen Pull klappt das mergen aber automatisch.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.