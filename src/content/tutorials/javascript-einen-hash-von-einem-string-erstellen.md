---
title: 'Javascript: Einen Hash von einem String erstellen'
date: '2016-07-28T17:17:42.000Z'
slug: javascript-einen-hash-von-einem-string-erstellen
tags:
  - '170'
  - '854'
  - '855'
  - '856'
description: "Javascript bietet im Gegensatz zu PHP keine Hash Methoden wie md5 oder sha1. Manchmal möchte man aber nur einen Hash haben um diesen beispielsweise in einem Cookie zu speichern, damit man vergleichen kann, ob eine Notification schonmal gelaufen ist, oder nicht. Ich habe hier eine kleine Funktion gefunden, die genau dies tut. \r\nhashCode = function(str) {\r\n  var hash = 0, i, chr, len;\r\n  if (str.length === 0) return hash;\r\n  for (i = 0, len = str.length; i &lt; len; i++) {\r\n    chr   = str.charCodeAt(i);\r\n    hash  = ((hash &lt;&lt; 5) - hash) + chr;\r\n    hash |= 0; // Convert to 32bit integer\r\n  }\r\n  return hash;\r\n};\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Javascript bietet im Gegensatz zu PHP keine Hash Methoden wie md5 oder sha1. Manchmal möchte man aber nur einen Hash haben um diesen beispielsweise in einem Cookie zu speichern, damit man vergleichen kann, ob eine Notification schonmal gelaufen ist, oder nicht. Ich habe hier eine kleine Funktion gefunden, die genau dies tut.

```

hashCode = function(str) {
  var hash = 0, i, chr, len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
```