---
title: 'Javascript: Datum-Arrays nach Zeitspanne gruppieren'
date: '2016-10-31T23:00:00.000Z'
slug: javascript-datum-arrays-nach-zeitspanne-gruppieren
tags:
  - javascript
  - ' dates'
  - group
  - sort
  - day
  - year
  - month
  - google chart
  - ' chartist'
description: "Für ein kleines Projekt, bei dem ich Unix-Timestamps nach Zeiteinheiten wie, pro Tag, pro Monat usw. gruppieren wollte, habe ich mir mit moment.js und _Underscore.js&nbsp;ein paar kleine Funktionen geschrieben, die mir die Daten nach jeder beliebigen Zeiteinheit gruppieren können. // Zeitraum, welcher Moment-kompatibel sein muss. (http://momentjs.com/docs/#/manipulating/start-of/)\r\n  var unit = 'day'; \r\n  var occurrenceTime = function(occurrence){\r\n    return moment(occurrence,'x').startOf(unit).valueOf();\r\n  };\r\n\r\n  var groupToTime = function(group, time){\r\n    return [\r\n      Number(time),group.length\r\n    ]\r\n  };\r\n\r\n  var groupData = function(data, unit){\r\n    var result = _.chain(data)\r\n    .groupBy(occurrenceTime)\r\n    .map(groupToTime)\r\n    .value();\r\n    return result;\r\n  }\r\n\r\nAnwendung wie folgt:\r\n// data ist ein Array von timestamps [1476861504,1476861514,1476861534,1476861554]\r\nvar grouped = groupData(data)\r\n\r\n\r\nMacht sowas:\r\n\r\ngrouped = Array[2]\r\n    0:Array[2]\r\n      0:1477461600000\r\n      1:4\r\n    0:Array[2]\r\n      0:1477465200000\r\n      1:2\r\n\r\n// es wird ein Array zurückgegeben, welches nach der bestimmten Zeiteinheit gruppiert ist. \r\n// Dabei werden die Einheiten zusammengezählt. Das erste Ergebnis bedeutet also, dass es 4 Timestamps in dem Zeitraum gab, beim 2. waren es 2.\r\n\r\n\r\nDas Ganze ist in diesem Format beispielsweise Google Chart kompatibel, und man kann so Balken oder Linien-Diagramme anzeigen"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Für ein kleines Projekt, bei dem ich Unix-Timestamps nach Zeiteinheiten wie, pro Tag, pro Monat usw. gruppieren wollte, habe ich mir mit [moment.js](http://momentjs.com/ "Opens internal link in current window") und [\_Underscore.js](http://underscorejs.org/ "Opens internal link in current window") ein paar kleine Funktionen geschrieben, die mir die Daten nach jeder beliebigen Zeiteinheit gruppieren können.

```
// Zeitraum, welcher Moment-kompatibel sein muss. (http://momentjs.com/docs/#/manipulating/start-of/)
  var unit = 'day'; 
  var occurrenceTime = function(occurrence){
    return moment(occurrence,'x').startOf(unit).valueOf();
  };

  var groupToTime = function(group, time){
    return [
      Number(time),group.length
    ]
  };

  var groupData = function(data, unit){
    var result = _.chain(data)
    .groupBy(occurrenceTime)
    .map(groupToTime)
    .value();
    return result;
  }
```

**Anwendung wie folgt:**

```
// data ist ein Array von timestamps [1476861504,1476861514,1476861534,1476861554]
var grouped = groupData(data)
```

**Macht sowas:**

```

grouped = Array[2]
    0:Array[2]
      0:1477461600000
      1:4
    0:Array[2]
      0:1477465200000
      1:2

// es wird ein Array zurückgegeben, welches nach der bestimmten Zeiteinheit gruppiert ist. 
// Dabei werden die Einheiten zusammengezählt. Das erste Ergebnis bedeutet also, dass es 4 Timestamps in dem Zeitraum gab, beim 2. waren es 2.
```

Das Ganze ist in diesem Format beispielsweise Google Chart kompatibel, und man kann so Balken oder Linien-Diagramme anzeigen