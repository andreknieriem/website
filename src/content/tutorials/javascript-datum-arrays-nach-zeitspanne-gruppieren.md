---
title: 'Javascript: Datum-Arrays nach Zeitspanne gruppieren'
date: '2016-10-31T23:00:00.000Z'
slug: javascript-datum-arrays-nach-zeitspanne-gruppieren
tags:
  - '69'
  - '926'
  - '785'
  - '529'
  - '927'
  - '928'
  - '801'
  - '929'
  - '930'
description: "Für ein kleines Projekt, bei dem ich Unix-Timestamps nach Zeiteinheiten wie, pro Tag, pro Monat usw. gruppieren wollte, habe ich mir mit moment.js und _Underscore.js&nbsp;ein paar kleine Funktionen geschrieben, die mir die Daten nach jeder beliebigen Zeiteinheit gruppieren können. // Zeitraum, welcher Moment-kompatibel sein muss. (http://momentjs.com/docs/#/manipulating/start-of/)\r\n  var unit = 'day'; \r\n  var occurrenceTime = function(occurrence){\r\n    return moment(occurrence,'x').startOf(unit).valueOf();\r\n  };\r\n\r\n  var groupToTime = function(group, time){\r\n    return [\r\n      Number(time),group.length\r\n    ]\r\n  };\r\n\r\n  var groupData = function(data, unit){\r\n    var result = _.chain(data)\r\n    .groupBy(occurrenceTime)\r\n    .map(groupToTime)\r\n    .value();\r\n    return result;\r\n  }\r\n\r\nAnwendung wie folgt:\r\n// data ist ein Array von timestamps [1476861504,1476861514,1476861534,1476861554]\r\nvar grouped = groupData(data)\r\n\r\n\r\nMacht sowas:\r\n\r\ngrouped = Array[2]\r\n    0:Array[2]\r\n      0:1477461600000\r\n      1:4\r\n    0:Array[2]\r\n      0:1477465200000\r\n      1:2\r\n\r\n// es wird ein Array zurückgegeben, welches nach der bestimmten Zeiteinheit gruppiert ist. \r\n// Dabei werden die Einheiten zusammengezählt. Das erste Ergebnis bedeutet also, dass es 4 Timestamps in dem Zeitraum gab, beim 2. waren es 2.\r\n\r\n\r\nDas Ganze ist in diesem Format beispielsweise Google Chart kompatibel, und man kann so Balken oder Linien-Diagramme anzeigen"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#sort](/tag.html?tag=529&cHash=c8471a5961fc04e0e79ff73456f5d3cc)[#group](/tag.html?tag=785&cHash=3c3dbc7ed8f11769f927d88405b678a2)[#month](/tag.html?tag=801&cHash=4add5ab03ce9cc6026fa6eb80aa0a35b)[\# dates](/tag.html?tag=926&cHash=d376198f0f505c73d6ece20ae422b063)[#day](/tag.html?tag=927&cHash=bde6ad54061d6708460d7efcad773ba6)[#year](/tag.html?tag=928&cHash=19800d0462b3680c8e25bf44173f1186)[#google chart](/tag.html?tag=929&cHash=d50f4a8363a02ecae9f61bda6d2d6392)[\# chartist](/tag.html?tag=930&cHash=e735d15b7965c8ab3240cc4cf549ee8e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Nov 2016

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.