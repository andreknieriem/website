---
title: 'GIT: Dateiberechtigungsänderungen ignorieren (filemode changes)'
date: '2018-10-08T15:21:00.000Z'
slug: git-dateiberechtigungsaenderungen-ignorieren-filemode-changes
tags:
  - '1006'
  - '1072'
  - '1073'
  - '1074'
  - '1075'
  - '1076'
description: >-
  Hat man einen Ordner innerhalb eines Git Projekte via chmod oder chown
  bearbeitet, so zeigt git einem jede Datei als geändert an. Das kann dann
  schonmal zu merge conflicts und sonstigen Blockaden führen. Wenn man weiß,
  dass einem die Dateiberichtigungen im Git nicht so wichtig sind, da man diese
  pro Server anpasst, kann man diese Art von Änderung ignorieren. Das geht
  einfach wie folgt: &nbsp; git config core.fileMode false
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

[#git](/tag.html?tag=1006&cHash=72f874cd9465a57ade8336d3b6e5be0c)[\# ignore](/tag.html?tag=1072&cHash=679000625a3b01182b4b9ec29f4fc4c2)[\# filemode](/tag.html?tag=1073&cHash=faab5e87fc3ec0dc310c73fef597e861)[\# changes](/tag.html?tag=1074&cHash=4cf68331b3a7722072a9b51c9685e1cd)[\# chmod](/tag.html?tag=1075&cHash=e02c72011be538d46c5abf3152cb9e29)[\# chown](/tag.html?tag=1076&cHash=0dc56b61ae45a2e25df4262b8d581b2a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Oct 2018

Hat man einen Ordner innerhalb eines Git Projekte via chmod oder chown bearbeitet, so zeigt git einem jede Datei als geändert an. Das kann dann schonmal zu merge conflicts und sonstigen Blockaden führen. Wenn man weiß, dass einem die Dateiberichtigungen im Git nicht so wichtig sind, da man diese pro Server anpasst, kann man diese Art von Änderung ignorieren. Das geht einfach wie folgt:  
 

```
git config core.fileMode false
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.