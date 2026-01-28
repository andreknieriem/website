---
title: Locallang Dateien für JS bereitstellen in Typo3
date: '2013-07-23T11:58:56.000Z'
slug: locallang-dateien-fuer-js-bereitstellen-in-typo3
tags:
  - '69'
  - '70'
  - '185'
  - '196'
  - '197'
  - '198'
description: "Für ein Javascript basiertes Plugin brauchte ich letztens sprachabhängige Labels, die im Javascript bereitstellen. Nach kurzem testen und Recherche kam ich zu diesem super Plugin:\r\nJavascript Language Labels (rtp_locallang_js)\r\nBei diesem Plugin muss man lediglich die Locallang-Dateien kommasepariert eingeben und schon werden diese in der zurzeit ausgewählten Sprache bereitgestellt. Die Einstellung sieht so aus:\r\nNatürlich lassen sich die Einstellung auch via Typoscript vornehmen. Wie das geht ist ganz einfach in der Doku des Plugins beschrieben.\r\nHier ein kleines Beispiel der Locallang Datei und wie man den String nun im JS bekommt: &lt;label index=\"testlabel\"&gt;Ich bin ein Test&lt;/label&gt;\r\n  var test = TYPO3.lang.testlabel;\r\nconsole.log(test); In dem oben genannten Beispiel steht in der Konsole dann \"Ich bin ein Test\".\nViel Spaß mit dem Plugin!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Für ein Javascript basiertes Plugin brauchte ich letztens sprachabhängige Labels, die im Javascript bereitstellen. Nach kurzem testen und Recherche kam ich zu diesem super Plugin:

Javascript Language Labels ([rtp\_locallang\_js](http://typo3.org/extensions/repository/view/rtp_locallang_js "rtp_locallang_js Download"))

Bei diesem Plugin muss man lediglich die Locallang-Dateien kommasepariert eingeben und schon werden diese in der zurzeit ausgewählten Sprache bereitgestellt. Die Einstellung sieht so aus:

Natürlich lassen sich die Einstellung auch via Typoscript vornehmen. Wie das geht ist ganz einfach in der Doku des Plugins beschrieben.

Hier ein kleines Beispiel der Locallang Datei und wie man den String nun im JS bekommt:

```
<label index="testlabel">Ich bin ein Test</label>
```

```
var test = TYPO3.lang.testlabel;
console.log(test);
```

In dem oben genannten Beispiel steht in der Konsole dann "Ich bin ein Test".

Viel Spaß mit dem Plugin!