---
title: 'GIT: Dateiberechtigungsänderungen ignorieren (filemode changes)'
date: '2018-10-08T15:21:00.000Z'
slug: git-dateiberechtigungsaenderungen-ignorieren-filemode-changes
tags:
  - git
  - ' ignore'
  - ' filemode'
  - ' changes'
  - ' chmod'
  - ' chown'
description: >-
  Hat man einen Ordner innerhalb eines Git Projekte via chmod oder chown
  bearbeitet, so zeigt git einem jede Datei als geändert an. Das kann dann
  schonmal zu merge conflicts und sonstigen Blockaden führen. Wenn man weiß,
  dass einem die Dateiberichtigungen im Git nicht so wichtig sind, da man diese
  pro Server anpasst, kann man diese Art von Änderung ignorieren. Das geht
  einfach wie folgt: &nbsp; git config core.fileMode false
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
demo_url: null
download_url: null
---

Hat man einen Ordner innerhalb eines Git Projekte via chmod oder chown bearbeitet, so zeigt git einem jede Datei als geändert an. Das kann dann schonmal zu merge conflicts und sonstigen Blockaden führen. Wenn man weiß, dass einem die Dateiberichtigungen im Git nicht so wichtig sind, da man diese pro Server anpasst, kann man diese Art von Änderung ignorieren. Das geht einfach wie folgt:  
 

```
git config core.fileMode false
```