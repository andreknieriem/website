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
image: /fileadmin/_processed_/b/7/csm_webpack_8034a3cb25.png
demo_url: null
download_url: null
---

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