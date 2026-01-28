---
title: 'GIT: Repository zurücksetzen und alle Commits löschen'
date: '2017-09-14T22:00:00.000Z'
slug: git-repository-zuruecksetzen-und-alle-commits-loeschen
tags:
  - '1006'
  - '1007'
  - '573'
  - '1008'
description: "Möchte man ein Repository komplett zurücksetzen und mit dem Stand auf dem eigenen Server komplett neu einchecken, so geht das wie folgt:\r\n1. Lösche den .git Ordner in deinem Projekt.2. Führe die folgenden Befehle aus. ACHTUNG - Dadurch wird wirklich alles gelöscht. Also nur mit Vorsicht genießen. cd (project-directory)\r\ngit init\r\ngit add .\r\ngit commit -m 'Initial commit'\r\ngit remote add origin &lt;url&gt;\r\ngit push --force --set-upstream origin master"
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

[#repository](/tag.html?tag=573&cHash=a7bca7438744363f8bef5782d590fd8f)[#git](/tag.html?tag=1006&cHash=72f874cd9465a57ade8336d3b6e5be0c)[#remove commits](/tag.html?tag=1007&cHash=87d3489e950787be2f790b32362abfd3)[#reset](/tag.html?tag=1008&cHash=90b584dc7e7fe6a0e888876c4b49035c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Sep 2017

Möchte man ein Repository komplett zurücksetzen und mit dem Stand auf dem eigenen Server komplett neu einchecken, so geht das wie folgt:

1\. Lösche den **.git** Ordner in deinem Projekt.  
2\. Führe die folgenden Befehle aus. ACHTUNG - Dadurch wird wirklich alles gelöscht. Also nur mit Vorsicht genießen.

```
cd (project-directory)
git init
git add .
git commit -m 'Initial commit'
git remote add origin <url>
git push --force --set-upstream origin master
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.