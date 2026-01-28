---
title: 'Git: Nur einzelne Dateien pullen'
date: '2018-04-17T14:01:00.000Z'
slug: git-nur-einzelne-dateien-pullen
tags:
  - git
  - pull
  - single
  - file
  - not full
  - only one
  - pick
description: "Manchmal kommt es vor, dass man schon commited und gepusht hat kommt auf seiner Entwicklungsmaschine und es in zu dem Zeitpunkt einen Fehler gibt, der noch zwischengeschoben werden muss. Da das Branching und der Master nun aber schon mit einem zu neuen Stand versehen sind, kann man auch nur einzelne Dateien auf den Server holen (pull). Das Ganze sollte nur im Notfall und nur sehr selten gemacht werden, geht aber recht einfach wie folgt: git fetch --all\r\ngit checkout origin/master -- &lt;your_file_path&gt; Das war es auch schon. Nun werden die Dateien auf dem Server zwar als geändert, bzw. neu angezeigt, bei einem richtigen Pull klappt das mergen aber automatisch."
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
demo_url: null
download_url: null
---

Manchmal kommt es vor, dass man schon commited und gepusht hat kommt auf seiner Entwicklungsmaschine und es in zu dem Zeitpunkt einen Fehler gibt, der noch zwischengeschoben werden muss. Da das Branching und der Master nun aber schon mit einem zu neuen Stand versehen sind, kann man auch nur einzelne Dateien auf den Server holen (pull). Das Ganze sollte nur im Notfall und nur sehr selten gemacht werden, geht aber recht einfach wie folgt:

```bash
git fetch --all
git checkout origin/master -- <your_file_path>
```

Das war es auch schon. Nun werden die Dateien auf dem Server zwar als geändert, bzw. neu angezeigt, bei einem richtigen Pull klappt das mergen aber automatisch.