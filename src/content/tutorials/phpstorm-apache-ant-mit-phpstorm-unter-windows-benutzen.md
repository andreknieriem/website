---
title: 'PHPStorm: Apache ANT mit PHPStorm unter Windows benutzen'
date: '2019-02-19T10:09:00.000Z'
slug: phpstorm-apache-ant-mit-phpstorm-unter-windows-benutzen
tags:
  - '1115'
  - '1118'
  - '549'
  - '473'
  - '1119'
  - '1120'
  - '1121'
  - '1122'
description: "Im Gegensatz zu IntelliJ hat PhpStorm keine direkte Inegration von Apache Ant. PhpStorm bietet aber die Möglichkeit \"External Tools\" zu benutzen und dieses Feature machen wir uns jetzt zu nutze.\r\nDiese Tutorial bezieht sich auf die Windows Version, sollte aber grundlegend auch auf macOS laufen.\r\nVorraussetzungen\r\n \tApache Ant ist lokal installiert (Anleitung) \tPhpStorm ist installiert \r\nEinrichtung\r\nIn PhpStorm in den Einstellungen zu folgendem Punkt navigieren: File -> Settings -> Tools -> External Tools Dort auf das + Symbol klicken. Im folgenden Fenster müssen dann die Einstellungen vorgenommen werden.   \tIm Feld \"Program:\" könnt ihr mit Hilfe des Ordner-Symbols zu eurer Ant-Installation navigieren. Bei mir ist der Pfad: \tC:\\apache-ant-1.10.5\\bin\\ant.bat \tWichtig hier ist die Auswahl der .bat Datei auf Windows. Auf macOS muss bestimmt die reine ant Datei ausgewählt werden \tAls nächstes im Feld \"Arguments\" -f $FilePath$ eintragen. Das sorgt dafür, dass ant die gewählte Datei als build.xml ansieht und verarbeitet. \r\nIst das erledigt kann man die build.xml in eurem Projekt mit Rechtsklick anklicken und dann unter External Tools -&gt; Ant-Build euren Ant-Befehl ausführen.&nbsp;\r\nNun könnt ihr Ant unter PhpStorm ausführen. "
image: /fileadmin/_processed_/2/3/csm_phpstorm_7fa219c654.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PhpStorm

* * *

![](/fileadmin/_processed_/2/3/csm_phpstorm_7fa219c654.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#use](/tag.html?tag=473&cHash=b4ff76538534b7157c11cbab1a4c7016)[#apache](/tag.html?tag=549&cHash=cf1b6851b590310c076faaf1ce9b082f)[#phpstorm](/tag.html?tag=1115&cHash=c2ecc148430cc47ef9010ac82aee8a45)[#ant](/tag.html?tag=1118&cHash=41a7991eebb673e9961cde152c1faccf)[#external tools](/tag.html?tag=1119&cHash=7b7f34cc7dff487030551ccf81078d09)[#tools](/tag.html?tag=1120&cHash=df745452fea0e5f76c5cd2fd0677b51b)[#config](/tag.html?tag=1121&cHash=bab9cf91a29178a085cf6603313ffd11)[\# windows](/tag.html?tag=1122&cHash=d64e4d4ed0e644bd9ed7c7d2733766bc)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Feb 2019

Im Gegensatz zu IntelliJ hat PhpStorm keine direkte Inegration von Apache Ant. PhpStorm bietet aber die Möglichkeit "External Tools" zu benutzen und dieses Feature machen wir uns jetzt zu nutze.

**Diese Tutorial bezieht sich auf die Windows Version, sollte aber grundlegend auch auf macOS laufen.**

### Vorraussetzungen

*   Apache Ant ist lokal installiert ([Anleitung](https://www.mkyong.com/ant/how-to-install-apache-ant-on-windows/))
*   PhpStorm ist installiert

### Einrichtung

In PhpStorm in den Einstellungen zu folgendem Punkt navigieren:

```
File -> Settings -> Tools -> External Tools
```

Dort auf das + Symbol klicken. Im folgenden Fenster müssen dann die Einstellungen vorgenommen werden.

[![](/fileadmin/Daten/Tutorials/ant.png)](/fileadmin/Daten/Tutorials/ant.png)

*   Im Feld "Program:" könnt ihr mit Hilfe des Ordner-Symbols zu eurer Ant-Installation navigieren. Bei mir ist der Pfad:  
    **C:\\apache-ant-1.10.5\\bin\\ant.bat**
*   Wichtig hier ist die Auswahl der .bat Datei auf Windows. Auf macOS muss bestimmt die reine ant Datei ausgewählt werden
*   Als nächstes im Feld "Arguments" -f $FilePath$ eintragen. Das sorgt dafür, dass ant die gewählte Datei als build.xml ansieht und verarbeitet.

Ist das erledigt kann man die build.xml in eurem Projekt mit Rechtsklick anklicken und dann unter External Tools -> Ant-Build euren Ant-Befehl ausführen. 

Nun könnt ihr Ant unter PhpStorm ausführen.

[![](/fileadmin/Daten/Tutorials/ant-rk.png)](/fileadmin/Daten/Tutorials/ant-rk.png)

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.