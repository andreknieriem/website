---
title: >-
  PhpStorm unter Windows: Git-Bash als Terminal/Console anstelle von CMD
  benutzen
date: '2019-02-12T14:52:00.000Z'
slug: phpstorm-unter-windows-git-bash-als-terminalconsole-anstelle-von-cmd-benutzen
tags:
  - phpstorm
  - git
  - bash
  - terminal
  - other
  - alternative
  - cmd
  - windows
description: "Unter Windows ist die Standard-Konsole ja CMD von Windows. Die Konsole ist für den einen oder anderen Benutzer, die Linux-Server oder Mac gewohnt sind eher unhandlich.&nbsp;\r\nHat man Git auf seinem Rechner installiert, so hat man meistens auch die Git-Bash dabei. Diese hat im Gegensatz zu CMD die gängigen Linux Kommandos dabei und man kann sich in meinen Augen besser und schöner durch die Projekte navigieren.\r\nDa ich PhpStorm benutze wollte ich die Bash auch dort einsetzen. Dies lässt sich relativ leicht bewerkstelligen. In PhpStorm zu folgendem Pfad navigieren: File -> Settings -> Tools -> Terminal An dieser Stelle müsst ihr dann einfach in das Feld Shell path folgendes eintragen: \"C:\\Program Files\\Git\\bin\\sh.exe\" -login -i Habt ihr kein 64bit System, so ist der Pfad etwas anders und sieht so aus: \"C:\\Program Files (x86)\\Git\\bin\\sh.exe\" -login -i Das ist auch schon alles. Nun habt ihr eine andere Konsole standardmäßig in Storm eingerichtet."
image: /fileadmin/_processed_/2/3/csm_phpstorm_7fa219c654.png
demo_url: null
download_url: null
---

Unter Windows ist die Standard-Konsole ja CMD von Windows. Die Konsole ist für den einen oder anderen Benutzer, die Linux-Server oder Mac gewohnt sind eher unhandlich. 

Hat man Git auf seinem Rechner installiert, so hat man meistens auch die Git-Bash dabei. Diese hat im Gegensatz zu CMD die gängigen Linux Kommandos dabei und man kann sich in meinen Augen besser und schöner durch die Projekte navigieren.

Da ich PhpStorm benutze wollte ich die Bash auch dort einsetzen. Dies lässt sich relativ leicht bewerkstelligen. In PhpStorm zu folgendem Pfad navigieren:

```
File -> Settings -> Tools -> Terminal
```

An dieser Stelle müsst ihr dann einfach in das Feld Shell path folgendes eintragen:

```
"C:\Program Files\Git\bin\sh.exe" -login -i
```

Habt ihr kein 64bit System, so ist der Pfad etwas anders und sieht so aus:

```
"C:\Program Files (x86)\Git\bin\sh.exe" -login -i
```

Das ist auch schon alles. Nun habt ihr eine andere Konsole standardmäßig in Storm eingerichtet.