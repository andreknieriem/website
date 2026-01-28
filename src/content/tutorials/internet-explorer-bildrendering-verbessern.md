---
title: 'Internet Explorer: Bildrendering verbessern'
date: '2016-03-08T17:18:19.000Z'
slug: internet-explorer-bildrendering-verbessern
tags:
  - '86'
  - '87'
  - '140'
  - '604'
  - '816'
  - '817'
  - '818'
description: "Der Internet Explorer hat des öfteren ein Problem mit dem Bildrendering, wenn die Bilder, die ausgegeben werden im Original größer oder kleiner sind, als das Bild angezeigt wird. Mit folgendem kleinen CSS-Snippet kann man die Ausgabe im IE deutlich verschönern. \r\nimg {\r\n       -ms-interpolation-mode: bicubic;\r\n}\r\n "
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

[#ie](/tag.html?tag=86&cHash=759b348c57928fea01a7cffef340e851)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#better](/tag.html?tag=140&cHash=add1a4f50d9c23bf203985ed5e1a743c)[#image](/tag.html?tag=604&cHash=11a3b07630e480e8049232858b7be06b)[#bild](/tag.html?tag=816&cHash=7fa7b46d68ffbbf0e6b6d1a4afbb5b9d)[#rendering](/tag.html?tag=817&cHash=a7cb916fc3f1fb74e1c9cbf2f3c8e5b5)[#scaling](/tag.html?tag=818&cHash=b791533f36286156faa93dde2a6e163c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Mar 2016

Der Internet Explorer hat des öfteren ein Problem mit dem Bildrendering, wenn die Bilder, die ausgegeben werden im Original größer oder kleiner sind, als das Bild angezeigt wird. Mit folgendem kleinen CSS-Snippet kann man die Ausgabe im IE deutlich verschönern.

```

img {
       -ms-interpolation-mode: bicubic;
}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.