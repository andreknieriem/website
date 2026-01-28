---
title: >-
  Javascript: Scrolle nach unten, wenn etwas hinzugefügt wird. Zum Beispiel im
  Chat
date: '2021-03-19T08:35:00.000Z'
slug: >-
  javascript-scrolle-nach-unten-wenn-etwas-hinzugefuegt-wird-zum-beispiel-im-chat
tags:
  - scroll
  - automatically
  - chat
  - es6
  - javascript
description: "Hier mal ein kleines Snipped, dass es einem ermöglicht eine Box ganz nach unten zu scrollen, wenn es Änderungen gibt. Zum Beispiel wenn in einem Chat eine neue Nachricht kommt. let chatWrapper = document.querySelector('#chat-messages');\r\nchatWrapper.scrollTo(0, chatWrapper.offsetHeight );"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Hier mal ein kleines Snipped, dass es einem ermöglicht eine Box ganz nach unten zu scrollen, wenn es Änderungen gibt. Zum Beispiel wenn in einem Chat eine neue Nachricht kommt.

```js
let chatWrapper = document.querySelector('#chat-messages');
chatWrapper.scrollTo(0, chatWrapper.offsetHeight );
```