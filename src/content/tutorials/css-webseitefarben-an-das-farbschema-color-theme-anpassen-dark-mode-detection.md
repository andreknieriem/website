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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#mac](/tag.html?tag=50&cHash=36425e62b17f3af7d542222d4b9d6ae1)[#windows](/tag.html?tag=344&cHash=ba02934ba114aeb772143c98b09e3238)[#browser](/tag.html?tag=624&cHash=23c5da3058d49ce737792ce93739d886)[#mediaquery](/tag.html?tag=714&cHash=5ff5b3a7e4adaf50fde71b49b068d80e)[#media](/tag.html?tag=1062&cHash=2023ad249cce8675653ae3f26c2d81c9)[#color theme](/tag.html?tag=1154&cHash=9296354fc06feb144432e68895a4fe40)[#farbschema](/tag.html?tag=1155&cHash=fb5f77e06dfeac51f316d7011c7a6ce1)[#darkmode](/tag.html?tag=1156&cHash=5286bf81cdbc1727124dfed5e8811bcb)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Jun 2019

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a8fbf0d40ce98b3e92fa83bce1702042?s=75&d=mm&r=g)
    
    [Dietmar](https://bachelorschreibenlassen.com/blog/projektarbeit-im-gang)
    
    funktioniert das in Opera noch nicht?
    
    23\. Oct 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.