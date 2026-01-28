---
title: React und Socket.io Client richtig benutzen
date: '2021-04-06T08:31:00.000Z'
slug: react-und-socketio-client-richtig-benutzen
tags:
  - react
  - socket
  - reactjs
  - socket.io
  - richtig
  - right
  - benutzen
  - use
  - tutorial
  - howto
description: "Möchte man socket.io und react zusammen benutzen, so kommt man schnell in die Schwierigkeit, dass die React-App mehrere verschiedene Verbindungen aufmacht und zu oft reagiert. Das Ganze lässt sich schnell und einfach mit einem Context-Provider verbinden und man hat die Verbindung in allen Komponenten.\r\n1. Socket Context erstellen\r\nAm besten einfach eine Datei unter context/socket.js erstellen\r\nhttps://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65\r\nhttps://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d import socketio from \"socket.io-client\";\r\n\r\nexport const socket = socketio.connect('yourdomain.com:4001');\r\nexport const SocketContext = React.createContext(); Das ist auch schon alles, was man für den Provider benötigt. Als nächstes muss am besten in der index.js oder app.js die Verbindung initialisiert werden.\r\n2. Context-Provider einbinden und einen Wert mitgeben\r\nDas Ganze sieht dann so aus: import {SocketContext, socket} from 'context/socket';\r\nimport Child from 'components/Child';\r\n\r\nconst App = () => {\r\n  return (\r\n    \r\n      \r\n      \r\n      ...\r\n     3. Socket in untergeordneter Komponente benutzen\r\n\r\n import React from 'react';\r\nimport {SocketContext} from 'context/socket';\r\n\r\nconst GrandChild = () => {\r\n\r\n  const socket = useContext(SocketContext);\r\n\r\n  useEffect(() => {\r\n    socket.emit('ANYTHING'\"'); \r\n\r\n    // subscribe to socket events\r\n    socket.on('ANYSOCKETEVENT', (data) => {\r\n\t\tconsole.log(data);\r\n\t}); \r\n\r\n    return () => {\r\n      // before the component is destroyed\r\n      // unbind all event handlers used in this component\r\n      socket.off('ANYSOCKETEVENT');\r\n    };\r\n  }, [socket]);\r\n\r\n  return (\r\n    \r\n      Test\r\n    \r\n  );\r\n};"
image: /fileadmin/_processed_/f/6/csm_react_b62544a4c5.png
demo_url: null
download_url: null
---

Möchte man socket.io und react zusammen benutzen, so kommt man schnell in die Schwierigkeit, dass die React-App mehrere verschiedene Verbindungen aufmacht und zu oft reagiert. Das Ganze lässt sich schnell und einfach mit einem Context-Provider verbinden und man hat die Verbindung in allen Komponenten.

### 1\. Socket Context erstellen

Am besten einfach eine Datei unter **context/socket.js** erstellen

[https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65](https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65)

[https://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d](https://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d)

```js
import socketio from "socket.io-client";

export const socket = socketio.connect('yourdomain.com:4001');
export const SocketContext = React.createContext();
```

Das ist auch schon alles, was man für den Provider benötigt. Als nächstes muss am besten in der index.js oder app.js die Verbindung initialisiert werden.

### 2\. Context-Provider einbinden und einen Wert mitgeben

Das Ganze sieht dann so aus:

```js
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

```js
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