---
title: 'Javascript: Wie bekommt man mehrere einzigartige Elemente aus einem Array'
date: '2021-07-14T09:06:00.000Z'
slug: javascript-wie-bekommt-man-mehrere-einzigartige-element-aus-einem-array
tags:
  - javascript
  - js
  - random
  - unique
  - multiple
  - items
  - shuffle
description: "Für mein Spiel teamword.io benötigte ich für die zur Auswahl stehenden Wörter eine Funktion, die mir aus einem großen Array von Ratewörtern drei einzigartige Wörter/Strings holt, die dann dem Team angezeigt werden um das Wort für die Runde auszuwählen. Das Ganze ist recht einfach. Man mischt (shuffled) einfach das komplette Array und holt sich dann die ersten X, also in meinem Fall 3 Elemente. So hat man immer andere Wörter und auch niemals Wörter doppelt. Würde man sich 3 mal hintereinander ein zufälliges Wort aus dem Array holen, so gibt es die Wahrscheinlich, dass dies passiert.&nbsp;\r\nHier meine Funktion, bzw. der Aufruf: // function git pick random words from given array\r\npickRandomWords(arr, amount) {\r\n\tlet shuffeld = [...arr];\r\n\tfor (let i = shuffeld.length - 1; i > 0; i--) {\r\n\t\tconst j = Math.floor(Math.random() * (i + 1));\r\n\t\t[shuffeld[i], shuffeld[j]] = [shuffeld[j], shuffeld[i]];\r\n\t}\r\n\treturn shuffeld.slice(0 , amount);\r\n}\r\n\r\n// usage:\r\nlet a = ['banana','apple','orange','melon','lemon','strawberry','raspberry'];\r\nlet randWords = pickRandomWords(a, 3);"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Für mein Spiel [teamword.io](http://teamword.io) benötigte ich für die zur Auswahl stehenden Wörter eine Funktion, die mir aus einem großen Array von Ratewörtern drei einzigartige Wörter/Strings holt, die dann dem Team angezeigt werden um das Wort für die Runde auszuwählen. Das Ganze ist recht einfach. Man mischt (shuffled) einfach das komplette Array und holt sich dann die ersten X, also in meinem Fall 3 Elemente. So hat man immer andere Wörter und auch niemals Wörter doppelt. Würde man sich 3 mal hintereinander ein zufälliges Wort aus dem Array holen, so gibt es die Wahrscheinlich, dass dies passiert. 

Hier meine Funktion, bzw. der Aufruf:

```js
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