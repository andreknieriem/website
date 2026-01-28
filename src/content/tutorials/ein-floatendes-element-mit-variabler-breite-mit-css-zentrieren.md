---
title: Ein floatendes Element mit variabler Breite mit css zentrieren
date: '2012-08-24T05:40:18.000Z'
slug: ein-floatendes-element-mit-variabler-breite-mit-css-zentrieren
tags:
  - css
  - floating element
  - breite
  - center
  - float
  - variable
  - vertical
  - width
  - zentrieren
description: "Wer stand nicht schonmal vor der Schwierigkeit ein floatendes Element mit variabler Breite zu zentrieren. (zum Beispiel bei einer Paginierung, die breiter wird, je höher die Zahlen werden). Nach ein wenig recherche habe ich die Lösung für das Problem gefunden. Man muss das Element in ein anderes Element packen siehe Codebeispiel: \r\n&lt;div class=\"containerOuter\"&gt;\r\n\t&lt;div class=\"centeredElement\"&gt;\r\n\t\tSome Text\r\n\t&lt;/div&gt;\r\n&lt;/div&gt;\r\n Nun kommen wir zum interessanten Teil, nämlich dem CSS: \r\n.containerOuter {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\tleft: 50%;\r\n}\r\n\r\n.centeredElement {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\tleft: -50%;\r\n}\r\n Das Ganze funktioniert wie folgt:\nDer Äußere Container wird 50% nach rechts verschoben, wodurch unser zu zentrierendes Element an der linken Ecke in der Mitte ist. Wir wollen aber das beide Mitten übereinander liegen und müssen deshalb dem zu zentrierenden Container wieder 50% seiner Breite nach links verschieben."
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

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