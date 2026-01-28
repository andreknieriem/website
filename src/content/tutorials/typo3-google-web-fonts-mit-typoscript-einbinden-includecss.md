---
title: 'TYPO3: Google Web Fonts mit TypoScript einbinden (includeCSS)'
date: '2014-03-04T19:37:34.000Z'
slug: typo3-google-web-fonts-mit-typoscript-einbinden-includecss
tags:
  - '25'
  - '198'
  - '423'
  - '424'
  - '425'
  - '426'
  - '427'
description: "Um Google Web-Fonts auch bei TYPO3 zu benutzen, bzw. diese direkt via Typoscript einzubinden benötigt ihr nur folgende Zeilen. \r\npage.includeCSS {  \r\n  file5 = http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic\r\n  file5.external = 1\r\n  file5.media = all\r\n}\r\n Wichtig hierbei sind die external = 1 und das media = all Angaben.\nDanach kann man die Webfont wie gewohnt benutzen \r\nhtml {\r\n  font-family: 'PT Sans', sans-serif;\r\n}\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#includecss](/tag.html?tag=423&cHash=2795f6a12e94b23d53734f6e1a257931)[#google web fonts](/tag.html?tag=424&cHash=b805ff70fb6074e72303c08e3ffdc12e)[#external](/tag.html?tag=425&cHash=88e95348b60e2f0764e7e019bf4a5394)[#url](/tag.html?tag=426&cHash=733c51e56123b09516ab685e6d499fe9)[#link](/tag.html?tag=427&cHash=ef4df690d2964f514fe9f0c55ae19f49)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Mar 2014

Um Google Web-Fonts auch bei TYPO3 zu benutzen, bzw. diese direkt via Typoscript einzubinden benötigt ihr nur folgende Zeilen.

```

page.includeCSS {  
  file5 = http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic
  file5.external = 1
  file5.media = all
}
```

Wichtig hierbei sind die external = 1 und das media = all Angaben.

Danach kann man die Webfont wie gewohnt benutzen

```

html {
  font-family: 'PT Sans', sans-serif;
}
```

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.