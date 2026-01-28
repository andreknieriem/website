---
title: 'Node/Javascript: Ecmascript 6 Imports in Node benutzen'
date: '2021-03-01T08:40:00.000Z'
slug: nodejavascript-ecmascript-6-imports-in-node-benutzen
tags:
  - node
  - nodejs
  - ecmascript
  - es6
  - howto
  - tutorial
  - import
  - esm
  - export
  - require
description: "Manchmal kommt es vor, dass man Import und Export von Ecmascript 6 in NodeJs benutzen möchte. Mitlerweile gibt es für node dafür eine experimentelle Unterstützung (siehe hier), aber ich fand das nicht so schön. Eine einfache und schnelle Lösung ist die Benutzung von esm.\r\nInstallation und Benutzung\r\n\r\n # Installation\r\nnpm install --save esm\r\n\r\n# Benutzung\r\nnode -r esm server.js Das ganze funktioniert auch mit nodemon. nodemon -r esm server.js Was tun, wenn man den Aufruf nicht verändern kann?\r\nMöchte man den -esm Aufruf weglassen, so kann man eine entrypoint Datei erstellen, die einem die Arbeit abnimmt. Die Datei könnte dann so aussehen: // Datei start.js\r\nrequire = require(\"esm\")(module /*, options*/);\r\nmodule.exports = require(\"./server.js\"); Hier sieht man, dass wir die server.js hier importieren und sie um das esm-Modul erweitern.\r\nJetzt kann man das Ganze auch einfach über folgenden Befehl steuern. node start.js"
image: /fileadmin/_processed_/7/f/csm_nodejs_841db15a0c.png
demo_url: null
download_url: null
---

Manchmal kommt es vor, dass man Import und Export von Ecmascript 6 in NodeJs benutzen möchte. Mitlerweile gibt es für node dafür eine experimentelle Unterstützung (siehe [hier](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js)), aber ich fand das nicht so schön. Eine einfache und schnelle Lösung ist die Benutzung von [esm](https://www.npmjs.com/package/esm).

### Installation und Benutzung

```bash
npm install --save esm

node -r esm server.js
```

Das ganze funktioniert auch mit nodemon.

```bash
nodemon -r esm server.js
```

### Was tun, wenn man den Aufruf nicht verändern kann?

Möchte man den -esm Aufruf weglassen, so kann man eine entrypoint Datei erstellen, die einem die Arbeit abnimmt. Die Datei könnte dann so aussehen:

```js
// Datei start.js
require = require("esm")(module /*, options*/);
module.exports = require("./server.js");
```

Hier sieht man, dass wir die server.js hier importieren und sie um das esm-Modul erweitern.

Jetzt kann man das Ganze auch einfach über folgenden Befehl steuern.

```js
node start.js
```