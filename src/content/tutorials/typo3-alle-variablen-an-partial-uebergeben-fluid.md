---
title: 'TYPO3: Alle Variablen an Partial übergeben (Fluid)'
date: '2014-03-05T19:26:33.000Z'
slug: typo3-alle-variablen-an-partial-uebergeben-fluid
tags:
  - '198'
  - '418'
  - '432'
  - '433'
  - '434'
  - '435'
description: "Da is bei Fluid und TYPO3 viel übersichtlicher in den Templates wird, wenn man Partials verwendet, sollte man auch wissen, wie man alle Variablen die im Haupttemplate vorhanden sind auch in das Partial bekommt. Der Partial-Viewhelper bietet dafür ja das arguments-Attribut, allerdings war mir bis vor kurzem nicht klar, wie ich alle Variablen auch an das Partial weiterleiten kann. Dies geht sehr einfach. Einfach {_all} als Argument übergeben und die Sache ist erledigt. \nHier ein Beispiel: \r\n&lt;f:render partial=\"header\" arguments=\"{_all}\" /\r\n Ich hoffe ich konnte dem ein oder anderen helfen ;)"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#variables](/tag.html?tag=418&cHash=51d517b42df4062d70ade9057ea4b3a8)[#fluid](/tag.html?tag=432&cHash=5cd84de259976a49d8b323bfdc505dd7)[#partial](/tag.html?tag=433&cHash=31bacd1a43c90cf7218ef47214869f77)[#arguments](/tag.html?tag=434&cHash=71ebcc791d1d605655fd7fc6eaa6484e)[#all](/tag.html?tag=435&cHash=d2c7439b9c6303305ac7f1e70da870c1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Mar 2014

Da is bei Fluid und TYPO3 viel übersichtlicher in den Templates wird, wenn man Partials verwendet, sollte man auch wissen, wie man alle Variablen die im Haupttemplate vorhanden sind auch in das Partial bekommt. Der Partial-Viewhelper bietet dafür ja das arguments-Attribut, allerdings war mir bis vor kurzem nicht klar, wie ich alle Variablen auch an das Partial weiterleiten kann. Dies geht sehr einfach. Einfach **{\_all}** als Argument übergeben und die Sache ist erledigt.

Hier ein Beispiel:

```

<f:render partial="header" arguments="{_all}" /
```

Ich hoffe ich konnte dem ein oder anderen helfen ;)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/14bb42f844644d75e267df4fe70d874e?s=75&d=mm&r=g)
    
    [Pascale Beier](https://pascalebeier.de)
    
    Macht Sinn, danke! :)
    
    05\. Apr 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.