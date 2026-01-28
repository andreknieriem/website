---
title: 'Javascript: window.location.origin im Internet Explorer benutzen'
date: '2015-06-09T18:29:25.000Z'
slug: javascript-windowlocationorigin-im-internet-explorer-benutzen
tags:
  - javascript
  - ie
  - internet explorer
  - window.location.origin
  - old
  - polyfill
description: "Da viele alte Internet Explorer das überaus nützliche Feature window.location.origin nicht können, welches einem die komplette URL mit allen Parametern zurückgibt, kann man sich folgendem kleinen Snippet/Polyfill behelfen: \r\nif (!window.location.origin) {\r\n  window.location.origin = window.location.protocol + \"//\" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');\r\n}\r\n Ich hoffe das hilft euch weiter!"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Da viele alte **Internet Explorer** das überaus nützliche Feature **window.location.origin** nicht können, welches einem die komplette URL mit allen Parametern zurückgibt, kann man sich folgendem kleinen Snippet/Polyfill behelfen:

```

if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
```

Ich hoffe das hilft euch weiter!