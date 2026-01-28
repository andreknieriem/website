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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#Javascript

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#js](/tag.html?tag=70&cHash=97020bd023d81a2e1d049a787e531ccd)[#ajax](/tag.html?tag=185&cHash=fabaf461b1b5b5df14875d5cb3976ec7)[#language](/tag.html?tag=196&cHash=c4e15e76540d80f2478ead5f53b77f22)[#locallang](/tag.html?tag=197&cHash=019068e70d8dcd215f6d7d41e51974dc)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Jul 2013

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/53042ead4115462ad017685d1b9b6ee6?s=75&d=mm&r=g)
    
    Christoph
    
    Hi André danke für den Tipp, das konnte ich gerade gut gebrauchen!
    
    17\. Dec 2013 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.