---
title: 'TYPO3 6.2: Lösung für "Dependency Injection funktioniert nicht"'
date: '2015-10-14T16:55:46.000Z'
slug: typo3-62-loesung-fuer-dependency-injection-funktioniert-nicht
tags:
  - typo3
  - cache
  - not working
  - dependency
  - injection
  - '6.2'
  - '7.4'
  - solution
description: "Für eine Extension brauchte ich letztens eine eigene Php-Klasse, die einfach in meinen Controller via \"Dependency Injection\" eingebunden werden sollte. Das Ganze habe ich dann so gemacht: \r\n/**\r\n * @var \\Vendor\\Extension\\Foo\\Bar\r\n * @inject\r\n */\r\n protected $fooBar;\r\n Allerdings wollte die Klasse einfach nicht geladen werden. Das Object war immer null und es gab fatals, falls ich eine Methode der Klasse aufgerufen habe, beispielsweise: $this->fooBar->test().\nNach ewigem rumprobieren habe ich herausgefunden, dass man den Cache im Installtool leeren muss. Die normalen 3 Caches im Backend oben reichen leider nicht aus. Also im Installtool auf \"Important Actions\" und dort dann auf \"Clear all cache\" klicken. Danach wurde meine Klasse erfolgreich injected.\nIch hoffe ich konnte euch weiterhelfen."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Für eine Extension brauchte ich letztens eine eigene Php-Klasse, die einfach in meinen Controller via "**Dependency Injection**" eingebunden werden sollte. Das Ganze habe ich dann so gemacht:

```

/**
 * @var \Vendor\Extension\Foo\Bar
 * @inject
 */
 protected $fooBar;
```

Allerdings wollte die Klasse einfach nicht geladen werden. Das Object war immer null und es gab fatals, falls ich eine Methode der Klasse aufgerufen habe, beispielsweise: $this->fooBar->test().

Nach ewigem rumprobieren habe ich herausgefunden, dass man den Cache im Installtool leeren muss. Die normalen 3 Caches im Backend oben reichen leider nicht aus. Also im Installtool auf "**Important Actions**" und dort dann auf "**Clear all cache**" klicken. Danach wurde meine Klasse erfolgreich injected.

Ich hoffe ich konnte euch weiterhelfen.