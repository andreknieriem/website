---
title: Webpack/Encore - Dynamische Entries erstellen
date: '2020-10-09T06:35:00.000Z'
slug: webpackencore-dynamische-entries-erstellen
tags:
  - '1201'
  - '1202'
  - '1203'
  - '1204'
  - '1205'
  - '1206'
  - '1207'
  - '874'
  - '1208'
description: "Für ein Symfony Projekt, welches mit Webpack und dem Aufsatz Encore arbeitet wurde es mir zu mühsam für jede neue Datei einen Eintrag in die webpack.config.js zu machen. Deswegen habe ich hier einen Ansatz um mit der glob-Funktion Dateien zu finden und diese dann direkt hinzuzufügen. const glob = require('glob');\r\n\r\n// ...\r\n\r\n// dynamic entries\r\nglob.sync('./assets/**/js/modules/**/*.js').reduce((acc, item) => {\r\n    /**\r\n     * Der \"[name]\" Platzhalter bei \"output\" wird ersetzt\r\n     * damit wir einen guten namen zum einbinden bekommen. \r\n     * Das kann man anpassen, wie man es möchte.\r\n     */\r\n    var name = item.replace(/\\.\\/assets\\/|\\/js\\/modules|\\.js/gi, '');\r\n    acc[name] = item;\r\n    // add entry for each js file\r\n    Encore.addEntry(name, item);\r\n    return acc;\r\n}, {}); Falls man das Ganze nur Webpack ohne Encore benutzen möchte: entry: glob.sync('./assets/**/js/modules/**/*.js').reduce((acc, path) => {\r\n    var name = item.replace(/\\.\\/assets\\/|\\/js\\/modules|\\.js/gi, '');\r\n    acc[name] = item;\r\n    return acc\r\n}, {}),"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Webpack/Encore - Dynamische Entries erstellen

#Tutorials#Webpack

* * *

![](/fileadmin/_processed_/b/7/csm_webpack_8034a3cb25.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[\# multiple](/tag.html?tag=874&cHash=4ceb9d4b7b8fef915e75cee4af7440da)[#webpack](/tag.html?tag=1201&cHash=c071c67ca30da17a5a25c3fd967356e0)[\# encore](/tag.html?tag=1202&cHash=5e312b20f7aa200b48824bb3d181a31a)[\# symfony](/tag.html?tag=1203&cHash=0a288201f1555a17ba5e5e74f8780312)[\# entry](/tag.html?tag=1204&cHash=a03f786c7a052d24006f4d471f125eb1)[\# entries](/tag.html?tag=1205&cHash=e78bd4d693b30a4cc6dac5982ce97229)[\# dynamisch](/tag.html?tag=1206&cHash=d3801d2172461c2d1653ccc950d73466)[\# dynamic](/tag.html?tag=1207&cHash=e35fde10d9eab4ee2cc710f09e1d937c)[\# automatic](/tag.html?tag=1208&cHash=f31c50e8a1397808df9ceace597efdfe)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Oct 2020

Für ein Symfony Projekt, welches mit Webpack und dem Aufsatz Encore arbeitet wurde es mir zu mühsam für jede neue Datei einen Eintrag in die **webpack.config.js** zu machen. Deswegen habe ich hier einen Ansatz um mit der **glob**\-Funktion Dateien zu finden und diese dann direkt hinzuzufügen.

```
const glob = require('glob');

// ...

// dynamic entries
glob.sync('./assets/**/js/modules/**/*.js').reduce((acc, item) => {
    /**
     * Der "[name]" Platzhalter bei "output" wird ersetzt
     * damit wir einen guten namen zum einbinden bekommen. 
     * Das kann man anpassen, wie man es möchte.
     */
    var name = item.replace(/\.\/assets\/|\/js\/modules|\.js/gi, '');
    acc[name] = item;
    // add entry for each js file
    Encore.addEntry(name, item);
    return acc;
}, {});
```

Falls man das Ganze nur mit Webpack und ohne Encore benutzen möchte:

```
entry: glob.sync('./assets/**/js/modules/**/*.js').reduce((acc, path) => {
    var name = item.replace(/\.\/assets\/|\/js\/modules|\.js/gi, '');
    acc[name] = item;
    return acc
}, {}),
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.