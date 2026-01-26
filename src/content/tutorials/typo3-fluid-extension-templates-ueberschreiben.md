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
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Fluid Extension Templates überschreiben

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#override](/tag.html?tag=178&cHash=77078223c6977994f9dba2703aa91f13)[#überschreiben](/tag.html?tag=181&cHash=ee4d7c649f657d193097e198bd5a04d4)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#template](/tag.html?tag=388&cHash=9a9768d86c67bd7be99d098088d5c665)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#vererbung](/tag.html?tag=1025&cHash=9be6ac7a0292df1108bc70273f4ed92f)[#inheritance](/tag.html?tag=1026&cHash=0abbd9d800a9ed7ceee6baab25c4c24a)[#solr](/tag.html?tag=1027&cHash=e1c02ecc60afe39fa9786cb86e252211)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Jan 2018

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.