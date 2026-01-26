---
title: 'Node/Javascript: Ecmascript 6 Imports in Node benutzen'
date: '2021-03-01T08:40:00.000Z'
slug: nodejavascript-ecmascript-6-imports-in-node-benutzen
tags:
  - '1226'
  - '947'
  - '1227'
  - '1228'
  - '422'
  - '62'
  - '1229'
  - '1230'
  - '1231'
  - '1041'
description: "Manchmal kommt es vor, dass man Import und Export von Ecmascript 6 in NodeJs benutzen möchte. Mitlerweile gibt es für node dafür eine experimentelle Unterstützung (siehe hier), aber ich fand das nicht so schön. Eine einfache und schnelle Lösung ist die Benutzung von esm.\r\nInstallation und Benutzung\r\n\r\n # Installation\r\nnpm install --save esm\r\n\r\n# Benutzung\r\nnode -r esm server.js Das ganze funktioniert auch mit nodemon. nodemon -r esm server.js Was tun, wenn man den Aufruf nicht verändern kann?\r\nMöchte man den -esm Aufruf weglassen, so kann man eine entrypoint Datei erstellen, die einem die Arbeit abnimmt. Die Datei könnte dann so aussehen: // Datei start.js\r\nrequire = require(\"esm\")(module /*, options*/);\r\nmodule.exports = require(\"./server.js\"); Hier sieht man, dass wir die server.js hier importieren und sie um das esm-Modul erweitern.\r\nJetzt kann man das Ganze auch einfach über folgenden Befehl steuern. node start.js"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Node/Javascript: Ecmascript 6 Imports in Node benutzen

#Tutorials#NodeJs

* * *

![](/fileadmin/_processed_/7/f/csm_nodejs_841db15a0c.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#nodejs](/tag.html?tag=947&cHash=a891bd40e824755193cfdc962d280c2b)[#require](/tag.html?tag=1041&cHash=da97c4a69d448c34cca367c94db00bd8)[#node](/tag.html?tag=1226&cHash=f23198661740006fd143744233d3eb8c)[#ecmascript](/tag.html?tag=1227&cHash=1994fc6536189c17cb47adb13dbfcb50)[#es6](/tag.html?tag=1228&cHash=626bb88912bcb3f9a80d85fff7a1a1ba)[#import](/tag.html?tag=1229&cHash=a1c11d586b5b2e1ba697c3e965c55030)[#esm](/tag.html?tag=1230&cHash=f7af44be4e9893e1bfd82befcac33068)[#export](/tag.html?tag=1231&cHash=144963460351c76d922fbf8ceb455ee1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Mar 2021

Manchmal kommt es vor, dass man Import und Export von Ecmascript 6 in NodeJs benutzen möchte. Mitlerweile gibt es für node dafür eine experimentelle Unterstützung (siehe [hier](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js)), aber ich fand das nicht so schön. Eine einfache und schnelle Lösung ist die Benutzung von [esm](https://www.npmjs.com/package/esm).

### Installation und Benutzung

```
# Installation
npm install --save esm

# Benutzung
node -r esm server.js
```

Das ganze funktioniert auch mit nodemon.

```
nodemon -r esm server.js
```

### Was tun, wenn man den Aufruf nicht verändern kann?

Möchte man den -esm Aufruf weglassen, so kann man eine entrypoint Datei erstellen, die einem die Arbeit abnimmt. Die Datei könnte dann so aussehen:

```
// Datei start.js
require = require("esm")(module /*, options*/);
module.exports = require("./server.js");
```

Hier sieht man, dass wir die server.js hier importieren und sie um das esm-Modul erweitern.

Jetzt kann man das Ganze auch einfach über folgenden Befehl steuern.

```
node start.js
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.