---
title: 'Git Bash auf Windows: Aliasse hinzufügen'
date: '2020-09-30T08:50:00.000Z'
slug: git-bash-auf-windows-aliasse-hinzufuegen
tags:
  - '1006'
  - '1197'
  - '1198'
  - '1122'
  - '1134'
  - '1199'
  - '1200'
description: "Möchte man in der Git-Bash eigene Aliasse hinzufügen, so geht dies relativ einfach.\r\n \tAls erstes muss man als Administrator einen Editor seiner Wahl öffnen. \tDanach öffnet die Datei&nbsp;/C/Programme (Program Files auf englisch) /Git/etc/profile.d/aliases.sh \tFügt jetzt unter den beiden bestehenden Aliassen eigene hinzu. \tIch habe im Beispiel unten eine Kurzform hinzugefügt, ob ein Verzeichnis zurück zu kommen. Also.. anstatt cd .. \tSpeichert die Datei und startet eure Git-Bash neu, damit die Aliasse reingeladen werden \tMit dem Befehl alias&nbsp;kann man sehen, ob das Ganze geklappt hat.  $ alias\r\nalias ..='cd ..'"
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

[#git](/tag.html?tag=1006&cHash=72f874cd9465a57ade8336d3b6e5be0c)[\# windows](/tag.html?tag=1122&cHash=d64e4d4ed0e644bd9ed7c7d2733766bc)[\# add](/tag.html?tag=1134&cHash=40ba7722964992d81d31bd2e8af698b4)[\# alias](/tag.html?tag=1197&cHash=7d73158fe2979d7303e967f52d3ccbf7)[\# bash](/tag.html?tag=1198&cHash=a3b1c622b236b99cf2e7617295975cf0)[\# hinzufügen](/tag.html?tag=1199&cHash=bfafc5e859fae1b6fb8820188caf4c03)[\# profile.d](/tag.html?tag=1200&cHash=6a289fd37e2723e651c6240300edc082)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. Sep 2020

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.