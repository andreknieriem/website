---
title: 'TYPO3: Alle Variablen an Partial übergeben (Fluid)'
date: '2014-03-05T19:26:33.000Z'
slug: typo3-alle-variablen-an-partial-uebergeben-fluid
tags:
  - typo3
  - variables
  - fluid
  - partial
  - arguments
  - all
description: "Da is bei Fluid und TYPO3 viel übersichtlicher in den Templates wird, wenn man Partials verwendet, sollte man auch wissen, wie man alle Variablen die im Haupttemplate vorhanden sind auch in das Partial bekommt. Der Partial-Viewhelper bietet dafür ja das arguments-Attribut, allerdings war mir bis vor kurzem nicht klar, wie ich alle Variablen auch an das Partial weiterleiten kann. Dies geht sehr einfach. Einfach {_all} als Argument übergeben und die Sache ist erledigt. \nHier ein Beispiel: \r\n&lt;f:render partial=\"header\" arguments=\"{_all}\" /\r\n Ich hoffe ich konnte dem ein oder anderen helfen ;)"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Da is bei Fluid und TYPO3 viel übersichtlicher in den Templates wird, wenn man Partials verwendet, sollte man auch wissen, wie man alle Variablen die im Haupttemplate vorhanden sind auch in das Partial bekommt. Der Partial-Viewhelper bietet dafür ja das arguments-Attribut, allerdings war mir bis vor kurzem nicht klar, wie ich alle Variablen auch an das Partial weiterleiten kann. Dies geht sehr einfach. Einfach **{\_all}** als Argument übergeben und die Sache ist erledigt.

Hier ein Beispiel:

```

<f:render partial="header" arguments="{_all}" /
```

Ich hoffe ich konnte dem ein oder anderen helfen ;)