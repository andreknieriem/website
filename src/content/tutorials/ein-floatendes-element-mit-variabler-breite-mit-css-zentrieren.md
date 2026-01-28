---
title: Ein floatendes Element mit variabler Breite mit css zentrieren
date: '2012-08-24T05:40:18.000Z'
slug: ein-floatendes-element-mit-variabler-breite-mit-css-zentrieren
tags:
  - '25'
  - '60'
  - '111'
  - '112'
  - '113'
  - '114'
  - '115'
  - '116'
  - '117'
description: "Wer stand nicht schonmal vor der Schwierigkeit ein floatendes Element mit variabler Breite zu zentrieren. (zum Beispiel bei einer Paginierung, die breiter wird, je höher die Zahlen werden). Nach ein wenig recherche habe ich die Lösung für das Problem gefunden. Man muss das Element in ein anderes Element packen siehe Codebeispiel: \r\n&lt;div class=\"containerOuter\"&gt;\r\n\t&lt;div class=\"centeredElement\"&gt;\r\n\t\tSome Text\r\n\t&lt;/div&gt;\r\n&lt;/div&gt;\r\n Nun kommen wir zum interessanten Teil, nämlich dem CSS: \r\n.containerOuter {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\tleft: 50%;\r\n}\r\n\r\n.centeredElement {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\tleft: -50%;\r\n}\r\n Das Ganze funktioniert wie folgt:\nDer Äußere Container wird 50% nach rechts verschoben, wodurch unser zu zentrierendes Element an der linken Ecke in der Mitte ist. Wir wollen aber das beide Mitten übereinander liegen und müssen deshalb dem zu zentrierenden Container wieder 50% seiner Breite nach links verschieben."
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

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#floating element](/tag.html?tag=60&cHash=43bcb8e8e2c70689cdc9b665b8a2c26e)[#breite](/tag.html?tag=111&cHash=47034398393a2471607b6bfec6127f6a)[#center](/tag.html?tag=112&cHash=80b38e77cd31b3894f9903d3b1605246)[#float](/tag.html?tag=113&cHash=6bc0dc7d8ae954d7755f84331069f4aa)[#variable](/tag.html?tag=114&cHash=ed405e030e510461b3c7fcaa7372f86d)[#vertical](/tag.html?tag=115&cHash=2366d514905276e000c677281a5a4dce)[#width](/tag.html?tag=116&cHash=faba91b00593bfa0d7bf525b823ade5d)[#zentrieren](/tag.html?tag=117&cHash=eca1d7e83eb5f2eb59cb7a8d4e063c2e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

24\. Aug 2012

Wer stand nicht schonmal vor der Schwierigkeit ein floatendes Element mit variabler Breite zu zentrieren. (zum Beispiel bei einer Paginierung, die breiter wird, je höher die Zahlen werden). Nach ein wenig recherche habe ich die Lösung für das Problem gefunden. Man muss das Element in ein anderes Element packen siehe Codebeispiel:

```

<div class="containerOuter">
	<div class="centeredElement">
		Some Text
	</div>
</div>
```

Nun kommen wir zum interessanten Teil, nämlich dem CSS:

```

.containerOuter {
	position: relative;
	float: left;
	left: 50%;
}

.centeredElement {
	position: relative;
	float: left;
	left: -50%;
}
```

Das Ganze funktioniert wie folgt:

Der Äußere Container wird 50% nach rechts verschoben, wodurch unser zu zentrierendes Element an der linken Ecke in der Mitte ist. Wir wollen aber das beide Mitten übereinander liegen und müssen deshalb dem zu zentrierenden Container wieder 50% seiner Breite nach links verschieben.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.