---
title: React und Socket.io Client richtig benutzen
date: '2021-04-06T08:31:00.000Z'
slug: react-und-socketio-client-richtig-benutzen
tags:
  - '1240'
  - '1241'
  - '1242'
  - '1243'
  - '1244'
  - '1037'
  - '472'
  - '473'
  - '62'
  - '422'
description: "Möchte man socket.io und react zusammen benutzen, so kommt man schnell in die Schwierigkeit, dass die React-App mehrere verschiedene Verbindungen aufmacht und zu oft reagiert. Das Ganze lässt sich schnell und einfach mit einem Context-Provider verbinden und man hat die Verbindung in allen Komponenten.\r\n1. Socket Context erstellen\r\nAm besten einfach eine Datei unter context/socket.js erstellen\r\nhttps://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65\r\nhttps://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d import socketio from \"socket.io-client\";\r\n\r\nexport const socket = socketio.connect('yourdomain.com:4001');\r\nexport const SocketContext = React.createContext(); Das ist auch schon alles, was man für den Provider benötigt. Als nächstes muss am besten in der index.js oder app.js die Verbindung initialisiert werden.\r\n2. Context-Provider einbinden und einen Wert mitgeben\r\nDas Ganze sieht dann so aus: import {SocketContext, socket} from 'context/socket';\r\nimport Child from 'components/Child';\r\n\r\nconst App = () => {\r\n  return (\r\n    \r\n      \r\n      \r\n      ...\r\n     3. Socket in untergeordneter Komponente benutzen\r\n\r\n import React from 'react';\r\nimport {SocketContext} from 'context/socket';\r\n\r\nconst GrandChild = () => {\r\n\r\n  const socket = useContext(SocketContext);\r\n\r\n  useEffect(() => {\r\n    socket.emit('ANYTHING'\"'); \r\n\r\n    // subscribe to socket events\r\n    socket.on('ANYSOCKETEVENT', (data) => {\r\n\t\tconsole.log(data);\r\n\t}); \r\n\r\n    return () => {\r\n      // before the component is destroyed\r\n      // unbind all event handlers used in this component\r\n      socket.off('ANYSOCKETEVENT');\r\n    };\r\n  }, [socket]);\r\n\r\n  return (\r\n    \r\n      Test\r\n    \r\n  );\r\n};"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# React und Socket.io Client richtig benutzen

#React

* * *

![](/fileadmin/_processed_/f/6/csm_react_b62544a4c5.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#benutzen](/tag.html?tag=472&cHash=1918808a8bc80de92b9665aaebc464f9)[#use](/tag.html?tag=473&cHash=b4ff76538534b7157c11cbab1a4c7016)[#right](/tag.html?tag=1037&cHash=b31418bc1cb4ed0915e48a21605d94ad)[#react](/tag.html?tag=1240&cHash=edc07e96c8a790d2424ea345f9b80e99)[#socket](/tag.html?tag=1241&cHash=793842c804bb5943a85528617dc39eed)[#reactjs](/tag.html?tag=1242&cHash=e21ca6206ef63c7d7c7f517b5c5872ad)[#socket.io](/tag.html?tag=1243&cHash=953442eca95608e4b09f098442e3d916)[#richtig](/tag.html?tag=1244&cHash=17de91b40b90be83523bc7f073853f82)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Apr 2021

Möchte man socket.io und react zusammen benutzen, so kommt man schnell in die Schwierigkeit, dass die React-App mehrere verschiedene Verbindungen aufmacht und zu oft reagiert. Das Ganze lässt sich schnell und einfach mit einem Context-Provider verbinden und man hat die Verbindung in allen Komponenten.

### 1\. Socket Context erstellen

Am besten einfach eine Datei unter **context/socket.js** erstellen

[https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65](https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65)

[https://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d](https://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d)

```
import socketio from "socket.io-client";

export const socket = socketio.connect('yourdomain.com:4001');
export const SocketContext = React.createContext();
```

Das ist auch schon alles, was man für den Provider benötigt. Als nächstes muss am besten in der index.js oder app.js die Verbindung initialisiert werden.

### 2\. Context-Provider einbinden und einen Wert mitgeben

Das Ganze sieht dann so aus:

```
import {SocketContext, socket} from 'context/socket';
import Child from 'components/Child';

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Child />
      <Child />
      ...
    </SocketContext.Provider
  );
};
```

### 3\. Socket in untergeordneter Komponente benutzen

```
import React from 'react';
import {SocketContext} from 'context/socket';

const GrandChild = () => {

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('ANYTHING'"'); 

    // subscribe to socket events
    socket.on('ANYSOCKETEVENT', (data) => {
		console.log(data);
	}); 

    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off('ANYSOCKETEVENT');
    };
  }, [socket]);

  return (
    <div>
      Test
    </div>
  );
};
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.