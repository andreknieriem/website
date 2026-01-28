---
title: 'TYPO3: Fluid Extension Templates überschreiben'
date: '2018-01-23T07:48:00.000Z'
slug: typo3-fluid-extension-templates-ueberschreiben
tags:
  - '198'
  - '432'
  - '178'
  - '388'
  - '1026'
  - '1025'
  - '181'
  - '479'
  - '1027'
description: "Möchte man die Templates einer Extension überschreiben, so kann man dies mitlerweile recht einfach machen. Neue gut geschriebene Extensions benutzen&nbsp;templateRootPaths,&nbsp;partialRootPaths und&nbsp;layoutRootPaths, mit deren Hilfe man verschiedene Orte für Templates angeben kann. Die Templates mit der höchsten Nummer, die auch wirklich existieren werden dann geladen. Hier ein Beispiel anhand von Solr. plugin.solr {\r\n    view {\r\n        templateRootPaths.100 = EXT:ar_ext/Resources/Private/Templates/\r\n        partialRootPaths.100 = EXT:ar_ext/Resources/Private/Partials/\r\n        layoutRootPaths.100 = EXT:ar_ext/Resources/Private/Layouts/\r\n    }\r\n} Wie man am oberen Beispiel sieht, habe ich die 100 benutzt. Solr's Standard-Templates sind auf der 0. Somit werden meine Templates geladen, sofern sie verfügbar sind. Das ist sehr praktisch, da ich so nur Templates überschreiben kann, die ich auch ändern will und die originale Extension nicht überschreiben muss."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Möchte man die Templates einer Extension überschreiben, so kann man dies mitlerweile recht einfach machen. Neue gut geschriebene Extensions benutzen templateRootPaths, partialRootPaths und layoutRootPaths, mit deren Hilfe man verschiedene Orte für Templates angeben kann. Die Templates mit der höchsten Nummer, die auch wirklich existieren werden dann geladen. Hier ein Beispiel anhand von Solr.

```
plugin.solr {
    view {
        templateRootPaths.100 = EXT:ar_ext/Resources/Private/Templates/
        partialRootPaths.100 = EXT:ar_ext/Resources/Private/Partials/
        layoutRootPaths.100 = EXT:ar_ext/Resources/Private/Layouts/
    }
}
```

Wie man am oberen Beispiel sieht, habe ich die 100 benutzt. Solr's Standard-Templates sind auf der 0. Somit werden meine Templates geladen, sofern sie verfügbar sind. Das ist sehr praktisch, da ich so nur Templates überschreiben kann, die ich auch ändern will und die originale Extension nicht überschreiben muss.