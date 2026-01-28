---
title: >-
  CSS: Webseite/Farben an das Farbschema (Color-Theme) anpassen (Dark-Mode
  detection)
date: '2019-06-07T11:49:00.000Z'
slug: css-webseitefarben-an-das-farbschema-color-theme-anpassen-dark-mode-detection
tags:
  - '25'
  - '1154'
  - '1155'
  - '1156'
  - '50'
  - '344'
  - '624'
  - '714'
  - '1062'
description: "Seit einiger Zeit gibt es bei Windows und Mac den sogenannten Dark-Mode. Dadurch werden Schaltflächen und Hintergründe in dunkleren Farben angezeigt. Dies ist für das Auge angenehmer und spart zudem noch Energie bei mobilen Geräten. Seit neuestem gibt es einen Media-Query der den Modus des Betriebssystem erkennt. So kann man seine Webseite an die Einstellungen des Benutzers anpassen und statt helle, dunklere Farben verwenden.&nbsp;\r\nDas Ganze wird noch nicht von allen Browsern unterstützt, funktioniert aber immer schon in Firefox,Safari und der neuesten Chrome Version (76).\r\nHier mal ein Beispiel-Code, wie man das neue Media-Query benutzt:: body {\r\n\tbackground-color: #fff;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n\tbody {\r\n\t\tbackground-color: #fff;\r\n\t}\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n\tbody {\r\n\t\tbackground-color: #000;\r\n\t}\r\n} Im Beispiel oben wird für alle nicht unterstützten Browser die Hintergrundfarbe auf weiß gesetzt. Für Browser, die das Media-Query untersützen wird der Hintergrund bei einem Light-Mode auch auf weiß gesetzt, im Dark-Mode auf schwarz.\r\n\r\n"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Seit einiger Zeit gibt es bei Windows und Mac den sogenannten Dark-Mode. Dadurch werden Schaltflächen und Hintergründe in dunkleren Farben angezeigt. Dies ist für das Auge angenehmer und spart zudem noch Energie bei mobilen Geräten. Seit neuestem gibt es einen Media-Query der den Modus des Betriebssystem erkennt. So kann man seine Webseite an die Einstellungen des Benutzers anpassen und statt helle, dunklere Farben verwenden. 

Das Ganze wird noch nicht von allen Browsern unterstützt, funktioniert aber immer schon in Firefox,Safari und der neuesten Chrome Version (76).

Hier mal ein Beispiel-Code, wie man das neue Media-Query benutzt::

```
body {
	background-color: #fff;
}

@media (prefers-color-scheme: light) {
	body {
		background-color: #fff;
	}
}

@media (prefers-color-scheme: dark) {
	body {
		background-color: #000;
	}
}
```

Im Beispiel oben wird für alle nicht unterstützten Browser die Hintergrundfarbe auf weiß gesetzt. Für Browser, die das Media-Query untersützen wird der Hintergrund bei einem Light-Mode auch auf weiß gesetzt, im Dark-Mode auf schwarz.