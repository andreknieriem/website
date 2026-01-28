---
title: 'GIT: Pull erzwingen (force) lokale Dateien zu überschreiben'
date: '2016-10-09T22:00:00.000Z'
slug: git-pull-erzwingen-force-lokale-dateien-zu-ueberschreiben
tags: []
description: "Hat man auf einem Live-System uncommited changes - dies kann passieren, wenn man auf dem Live-Server irgendeine Datei hat, die immer wieder ausversehen, oder wie auch immer bearbeitet wird und möchte nun einen git pull vom Master machen, so bekommt man häufig bis immer folgende Fehlermeldung:\r\nerror: Untracked working tree file 'public/images/icon.gif' would be overwritten by merge.\r\nMit folgenden 2 Zeilen lassen sich die lokalen Änderungen zurücksetzen und der Pull forcieren. git fetch --all\r\ngit reset --hard origin/master \r\n#bzw.\r\ngit reset --hard origin/&lt;branch_name&gt;\r\n Was macht das Ganze?\r\ngit fetch&nbsp;lädt den letzten Stand vom Remote-Repository ohne irgendetwas zu mergen.\r\nDanach resettet&nbsp;git reset&nbsp;den master branch zu dem was gerade per git fetch geholt wurde. Die&nbsp;--hard&nbsp;option ändert alle Dateien um wieder mit&nbsp;origin/master&nbsp;konform zu sein.\r\nJetzt wurde sozusagen ein git force pull gemacht :)"
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
demo_url: null
download_url: null
---

Hat man auf einem Live-System uncommited changes - dies kann passieren, wenn man auf dem Live-Server irgendeine Datei hat, die immer wieder ausversehen, oder wie auch immer bearbeitet wird und möchte nun einen git pull vom Master machen, so bekommt man häufig bis immer folgende Fehlermeldung:

`error: Untracked working tree file 'public/images/icon.gif' would be overwritten by merge.`

Mit folgenden 2 Zeilen lassen sich die lokalen Änderungen zurücksetzen und der Pull forcieren.

```
git fetch --all
git reset --hard origin/master 
#bzw.
git reset --hard origin/<branch_name>
```

Was macht das Ganze?

`git fetch` lädt den letzten Stand vom Remote-Repository ohne irgendetwas zu mergen.

Danach resettet `git reset` den master branch zu dem was gerade per git fetch geholt wurde. Die `--hard` option ändert alle Dateien um wieder mit `origin/master` konform zu sein.

Jetzt wurde sozusagen ein git force pull gemacht :)