---
title: 'Javascript: Wie bekommt man mehrere einzigartige Elemente aus einem Array'
date: '2021-07-14T09:06:00.000Z'
slug: javascript-wie-bekommt-man-mehrere-einzigartige-element-aus-einem-array
tags:
  - '69'
  - '70'
  - '1260'
  - '856'
  - '496'
  - '1261'
  - '1262'
description: "Für mein Spiel teamword.io benötigte ich für die zur Auswahl stehenden Wörter eine Funktion, die mir aus einem großen Array von Ratewörtern drei einzigartige Wörter/Strings holt, die dann dem Team angezeigt werden um das Wort für die Runde auszuwählen. Das Ganze ist recht einfach. Man mischt (shuffled) einfach das komplette Array und holt sich dann die ersten X, also in meinem Fall 3 Elemente. So hat man immer andere Wörter und auch niemals Wörter doppelt. Würde man sich 3 mal hintereinander ein zufälliges Wort aus dem Array holen, so gibt es die Wahrscheinlich, dass dies passiert.&nbsp;\r\nHier meine Funktion, bzw. der Aufruf: // function git pick random words from given array\r\npickRandomWords(arr, amount) {\r\n\tlet shuffeld = [...arr];\r\n\tfor (let i = shuffeld.length - 1; i > 0; i--) {\r\n\t\tconst j = Math.floor(Math.random() * (i + 1));\r\n\t\t[shuffeld[i], shuffeld[j]] = [shuffeld[j], shuffeld[i]];\r\n\t}\r\n\treturn shuffeld.slice(0 , amount);\r\n}\r\n\r\n// usage:\r\nlet a = ['banana','apple','orange','melon','lemon','strawberry','raspberry'];\r\nlet randWords = pickRandomWords(a, 3);"
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

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#js](/tag.html?tag=70&cHash=97020bd023d81a2e1d049a787e531ccd)[#multiple](/tag.html?tag=496&cHash=b5ccf1ab608165ac786e9c24537cc63b)[#unique](/tag.html?tag=856&cHash=ae27c43c2444dfeb660e6890c5211ac6)[#random](/tag.html?tag=1260&cHash=09d264cf5ff758c94207ccbb1a6de33d)[#items](/tag.html?tag=1261&cHash=090c370aac0cf2ada6811fd9058293ac)[#shuffle](/tag.html?tag=1262&cHash=90aa918cc0a747a7dc4de16628630037)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Jul 2021

Für mein Spiel [teamword.io](http://teamword.io) benötigte ich für die zur Auswahl stehenden Wörter eine Funktion, die mir aus einem großen Array von Ratewörtern drei einzigartige Wörter/Strings holt, die dann dem Team angezeigt werden um das Wort für die Runde auszuwählen. Das Ganze ist recht einfach. Man mischt (shuffled) einfach das komplette Array und holt sich dann die ersten X, also in meinem Fall 3 Elemente. So hat man immer andere Wörter und auch niemals Wörter doppelt. Würde man sich 3 mal hintereinander ein zufälliges Wort aus dem Array holen, so gibt es die Wahrscheinlich, dass dies passiert. 

Hier meine Funktion, bzw. der Aufruf:

```
// function to pick random words from given array
pickRandomWords(arr, amount) {
	let shuffeld = [...arr];
	for (let i = shuffeld.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffeld[i], shuffeld[j]] = [shuffeld[j], shuffeld[i]];
	}
	return shuffeld.slice(0 , amount);
}

// usage:
let a = ['banana','apple','orange','melon','lemon','strawberry','raspberry'];
let randWords = pickRandomWords(a, 3);
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.