---
title: >-
  PhpStorm unter Windows: Git-Bash als Terminal/Console anstelle von CMD
  benutzen
date: '2019-02-12T14:52:00.000Z'
slug: phpstorm-unter-windows-git-bash-als-terminalconsole-anstelle-von-cmd-benutzen
tags:
  - '1115'
  - '1006'
  - '900'
  - '1116'
  - '1117'
  - '138'
  - '740'
  - '344'
description: "Unter Windows ist die Standard-Konsole ja CMD von Windows. Die Konsole ist für den einen oder anderen Benutzer, die Linux-Server oder Mac gewohnt sind eher unhandlich.&nbsp;\r\nHat man Git auf seinem Rechner installiert, so hat man meistens auch die Git-Bash dabei. Diese hat im Gegensatz zu CMD die gängigen Linux Kommandos dabei und man kann sich in meinen Augen besser und schöner durch die Projekte navigieren.\r\nDa ich PhpStorm benutze wollte ich die Bash auch dort einsetzen. Dies lässt sich relativ leicht bewerkstelligen. In PhpStorm zu folgendem Pfad navigieren: File -> Settings -> Tools -> Terminal An dieser Stelle müsst ihr dann einfach in das Feld Shell path folgendes eintragen: \"C:\\Program Files\\Git\\bin\\sh.exe\" -login -i Habt ihr kein 64bit System, so ist der Pfad etwas anders und sieht so aus: \"C:\\Program Files (x86)\\Git\\bin\\sh.exe\" -login -i Das ist auch schon alles. Nun habt ihr eine andere Konsole standardmäßig in Storm eingerichtet."
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

[#alternative](/tag.html?tag=138&cHash=7cda355cd6c2e2be8ed6e15b36fa4c98)[#windows](/tag.html?tag=344&cHash=ba02934ba114aeb772143c98b09e3238)[#cmd](/tag.html?tag=740&cHash=c74de3e6d66f63e251710c5bb374bcba)[#bash](/tag.html?tag=900&cHash=546f8f9c88c56f608a8868910dd8325c)[#git](/tag.html?tag=1006&cHash=72f874cd9465a57ade8336d3b6e5be0c)[#phpstorm](/tag.html?tag=1115&cHash=c2ecc148430cc47ef9010ac82aee8a45)[#terminal](/tag.html?tag=1116&cHash=85f99e978f3eba746ee8d18c72809c8a)[#other](/tag.html?tag=1117&cHash=b5f5e28d32ab674fb80173cae8d4302a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Feb 2019

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.