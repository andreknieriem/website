---
title: 'TYPO3: Debugging und Fehlermeldungen einschalten'
date: '2017-01-18T23:00:00.000Z'
slug: typo3-debugging-und-fehlermeldungen-einschalten
tags:
  - typo3
  - debug
  - error
  - fehlermeldungen
  - oops
description: "Seit der TYPO3 Version 7 bekommt man keine richtigen Fehlermeldungen mehr. Es erscheint lediglich der Fehler &quot;Oops an error occured&quot;. Das bringt leider keinen weiter und kann mit folgendem Typoscript wieder in eine nachvollziehbare Meldung verwandelt werden.\r\nTyposcript: page.config.contentObjectExceptionHandler = 0"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Seit der TYPO3 Version 7 bekommt man keine richtigen Fehlermeldungen mehr. Es erscheint lediglich der Fehler "Oops an error occured". Das bringt leider keinen weiter und kann mit folgendem Typoscript wieder in eine nachvollziehbare Meldung verwandelt werden.

**Typoscript:**

```bash
page.config.contentObjectExceptionHandler = 0
```
