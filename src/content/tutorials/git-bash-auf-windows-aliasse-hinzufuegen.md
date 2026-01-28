---
title: 'Git Bash auf Windows: Aliasse hinzufügen'
date: '2020-09-30T08:50:00.000Z'
slug: git-bash-auf-windows-aliasse-hinzufuegen
tags:
  - git
  - ' alias'
  - ' bash'
  - ' windows'
  - ' add'
  - ' hinzufügen'
  - ' profile.d'
description: "Möchte man in der Git-Bash eigene Aliasse hinzufügen, so geht dies relativ einfach.\r\n \tAls erstes muss man als Administrator einen Editor seiner Wahl öffnen. \tDanach öffnet die Datei&nbsp;/C/Programme (Program Files auf englisch) /Git/etc/profile.d/aliases.sh \tFügt jetzt unter den beiden bestehenden Aliassen eigene hinzu. \tIch habe im Beispiel unten eine Kurzform hinzugefügt, ob ein Verzeichnis zurück zu kommen. Also.. anstatt cd .. \tSpeichert die Datei und startet eure Git-Bash neu, damit die Aliasse reingeladen werden \tMit dem Befehl alias&nbsp;kann man sehen, ob das Ganze geklappt hat.  $ alias\r\nalias ..='cd ..'"
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
demo_url: null
download_url: null
---

Möchte man in der Git-Bash eigene Aliasse hinzufügen, so geht dies relativ einfach.

1.  Als erstes muss man als Administrator einen Editor seiner Wahl öffnen.
2.  Danach öffnet die Datei **/C/Programme** (Program Files auf englisch) **/Git/etc/profile.d/aliases.sh**
3.  Fügt jetzt unter den beiden bestehenden Aliassen eigene hinzu.
4.  Ich habe im Beispiel unten eine Kurzform hinzugefügt, ob ein Verzeichnis zurück zu kommen. Also.. anstatt cd ..
5.  Speichert die Datei und startet eure Git-Bash neu, damit die Aliasse reingeladen werden
6.  Mit dem Befehl **alias** kann man sehen, ob das Ganze geklappt hat.

```
$ alias
alias ..='cd ..'
alias ls='ls -F --color=auto --show-control-chars'
alias ll='ls -l'
```