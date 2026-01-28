---
title: 'CSS: Safari border-radius + overflow: hidden + CSS transform fix'
date: '2018-11-26T12:27:00.000Z'
slug: css-safari-border-radius-overflow-hidden-css-transform-fix
tags:
  - '58'
  - '25'
  - '1090'
  - '1091'
  - '1092'
  - '390'
  - '239'
description: "Der Safari-Browser hat bei CSS-Transitions an Elementen, die overflow:hidden haben, Probleme mit dem Rendern. So kann es vorkommen, dass die ausgeblendeten Inhalte kurz aufflackern, sobald die Animation beginnt.&nbsp;\r\nMit dem folgenden kleinen Snippet lässt sich das Ganze lösen:&nbsp; // Bei einem Element mit overflow hinzufügen\r\n-webkit-mask-image: -webkit-radial-gradient(white, black);"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#safari](/tag.html?tag=58&cHash=249b5c385c986fa78e566745fe29d251)[#fix](/tag.html?tag=239&cHash=26354d6386315dd8daaccabb7f435be9)[#bug](/tag.html?tag=390&cHash=f58c151f1f6eb670db6c474f611634bb)[#transform](/tag.html?tag=1090&cHash=54aae1f9cfd3240ef9659d47641a6251)[#translate](/tag.html?tag=1091&cHash=c6486d81fbaf2c0988265e7229fac136)[#flikker](/tag.html?tag=1092&cHash=4d6dd691bc87ce5b926aabf719ab8d43)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Nov 2018

Der Safari-Browser hat bei CSS-Transitions an Elementen, die overflow:hidden haben, Probleme mit dem Rendern. So kann es vorkommen, dass die ausgeblendeten Inhalte kurz aufflackern, sobald die Animation beginnt. 

Mit dem folgenden kleinen Snippet lässt sich das Ganze lösen: 

```
// Bei einem Element mit overflow hinzufügen
-webkit-mask-image: -webkit-radial-gradient(white, black);
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.