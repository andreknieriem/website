---
title: 'GIT: Repository zurücksetzen und alle Commits löschen'
date: '2017-09-14T22:00:00.000Z'
slug: git-repository-zuruecksetzen-und-alle-commits-loeschen
tags:
  - git
  - remove commits
  - repository
  - reset
description: "Möchte man ein Repository komplett zurücksetzen und mit dem Stand auf dem eigenen Server komplett neu einchecken, so geht das wie folgt:\r\n1. Lösche den .git Ordner in deinem Projekt.2. Führe die folgenden Befehle aus. ACHTUNG - Dadurch wird wirklich alles gelöscht. Also nur mit Vorsicht genießen. cd (project-directory)\r\ngit init\r\ngit add .\r\ngit commit -m 'Initial commit'\r\ngit remote add origin &lt;url&gt;\r\ngit push --force --set-upstream origin master"
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
demo_url: null
download_url: null
---

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