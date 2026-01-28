---
title: 'Linux: Alle .svn Ordner recursiv löschen'
date: '2017-02-06T23:00:00.000Z'
slug: linux-alle-svn-ordner-recursiv-loeschen
tags:
  - '109'
  - '957'
  - '958'
  - '203'
  - '35'
  - '492'
  - '861'
  - '91'
description: "Wenn man aus einem Projekt die ganzen .svn Ordner löschen möchte, weil man beispielsweise auf Git umsteigt, so kann man dies mit dem folgenden kleinen Befehl erledigen. // Prüfen ob der Löschbefehl etwas finden und was er löschen wird:\r\nfind . -name .svn -exec ls '{}' \\;\r\n\r\n// wirklich alle .svn Ordner löschen\r\nfind . -name .svn -exec rm -rf '{}' \\;"
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
demo_url: null
download_url: null
---

Wenn man aus einem Projekt die ganzen .svn Ordner löschen möchte, weil man beispielsweise auf Git umsteigt, so kann man dies mit dem folgenden kleinen Befehl erledigen.

```
// Prüfen ob der Löschbefehl etwas finden und was er löschen wird:
find . -name .svn -exec ls '{}' \;

// wirklich alle .svn Ordner löschen
find . -name .svn -exec rm -rf '{}' \;
```