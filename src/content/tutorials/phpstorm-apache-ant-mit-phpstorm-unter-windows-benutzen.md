---
title: 'PHPStorm: Apache ANT mit PHPStorm unter Windows benutzen'
date: '2019-02-19T10:09:00.000Z'
slug: phpstorm-apache-ant-mit-phpstorm-unter-windows-benutzen
tags:
  - phpstorm
  - ant
  - apache
  - use
  - external tools
  - tools
  - config
  - ' windows'
description: "Im Gegensatz zu IntelliJ hat PhpStorm keine direkte Inegration von Apache Ant. PhpStorm bietet aber die Möglichkeit \"External Tools\" zu benutzen und dieses Feature machen wir uns jetzt zu nutze.\r\nDiese Tutorial bezieht sich auf die Windows Version, sollte aber grundlegend auch auf macOS laufen.\r\nVorraussetzungen\r\n \tApache Ant ist lokal installiert (Anleitung) \tPhpStorm ist installiert \r\nEinrichtung\r\nIn PhpStorm in den Einstellungen zu folgendem Punkt navigieren: File -> Settings -> Tools -> External Tools Dort auf das + Symbol klicken. Im folgenden Fenster müssen dann die Einstellungen vorgenommen werden.   \tIm Feld \"Program:\" könnt ihr mit Hilfe des Ordner-Symbols zu eurer Ant-Installation navigieren. Bei mir ist der Pfad: \tC:\\apache-ant-1.10.5\\bin\\ant.bat \tWichtig hier ist die Auswahl der .bat Datei auf Windows. Auf macOS muss bestimmt die reine ant Datei ausgewählt werden \tAls nächstes im Feld \"Arguments\" -f $FilePath$ eintragen. Das sorgt dafür, dass ant die gewählte Datei als build.xml ansieht und verarbeitet. \r\nIst das erledigt kann man die build.xml in eurem Projekt mit Rechtsklick anklicken und dann unter External Tools -&gt; Ant-Build euren Ant-Befehl ausführen.&nbsp;\r\nNun könnt ihr Ant unter PhpStorm ausführen. "
image: /fileadmin/_processed_/2/3/csm_phpstorm_7fa219c654.png
demo_url: null
download_url: null
---

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