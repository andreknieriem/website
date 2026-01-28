---
title: 'GIT: Pull erzwingen (force) lokale Dateien zu überschreiben'
date: '2016-10-09T22:00:00.000Z'
slug: git-pull-erzwingen-force-lokale-dateien-zu-ueberschreiben
tags: []
description: "Hat man auf einem Live-System uncommited changes - dies kann passieren, wenn man auf dem Live-Server irgendeine Datei hat, die immer wieder ausversehen, oder wie auch immer bearbeitet wird und möchte nun einen git pull vom Master machen, so bekommt man häufig bis immer folgende Fehlermeldung:\r\nerror: Untracked working tree file 'public/images/icon.gif' would be overwritten by merge.\r\nMit folgenden 2 Zeilen lassen sich die lokalen Änderungen zurücksetzen und der Pull forcieren. git fetch --all\r\ngit reset --hard origin/master \r\n#bzw.\r\ngit reset --hard origin/&lt;branch_name&gt;\r\n Was macht das Ganze?\r\ngit fetch&nbsp;lädt den letzten Stand vom Remote-Repository ohne irgendetwas zu mergen.\r\nDanach resettet&nbsp;git reset&nbsp;den master branch zu dem was gerade per git fetch geholt wurde. Die&nbsp;--hard&nbsp;option ändert alle Dateien um wieder mit&nbsp;origin/master&nbsp;konform zu sein.\r\nJetzt wurde sozusagen ein git force pull gemacht :)"
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Git

* * *

![](/fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. Oct 2016

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/2a9f8845f60505eeb0d16a52300818ba?s=75&d=mm&r=g)
    
    [Uli Renz](http://www.dagobit.com)
    
    Evtl. besteht aber auch lokal eine Änderung die bereits committet wurde, dann erzeugt der hard-reset einen detached Head, hier hilft im Normalfall, den entsprechenden Branch zu löschen mit z.B. git branch -D master und neu aus zu checken git checkout master.
    
    06\. Nov 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/9db211d8ae3fd106e6d41b7f2782fe40?s=75&d=mm&r=g)
    
    [Markus Lenz](www.industryarena.com)
    
    Vielen Dank!
    
    08\. Oct 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/c7304ac418057000b25391c9c07fd95a?s=75&d=mm&r=g)
    
    Mariane Tindo
    
    Danke für den Beitrag, Der hat mir geholfen!!
    
    05\. Jun 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/68bd5f4ebdf71cc008073320ebf01556?s=75&d=mm&r=g)
    
    Markus
    
    Danke André für den Beitrag, genau daran bin ich auch gerade verzweifelt!
    
    04\. Apr 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.