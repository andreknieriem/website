---
title: >-
  PHP: Durchschnittsfarbe aus einem Bild ermitteln und Erkennung ob hell oder
  dunkle Textfarbe geeignet ist
date: '2019-06-19T11:28:00.000Z'
slug: >-
  php-durchschnittsfarbe-aus-einem-bild-ermitteln-und-erkennung-ob-hell-oder-dunkle-textfarbe-geeignet-ist
tags:
  - '232'
  - '420'
  - '1161'
  - '1162'
  - '41'
  - '1163'
  - '1164'
description: "Für ein privates Symfony Projekt, dass mit Buchcovern arbeitet benötigte für einen Slider die Durchschnittsfarbe des Covers, sowie die Erkennung, ob diese Farber eher hell oder dunkel ist, um weißen oder schwarzen Text auf das Bild legen zu können. Für die Farbe habe ich mir&nbsp;ColorThief&nbsp;zur Hilfe genommen. Die Erkennung der Helligkeit habe ich mir dann ergoogelt und einen Mittelwert gefunden. Man muss dafür die RGB-Werte mit einer Zahl multiplizieren und dann gucken, wie hoch diese Zahl ist. Das funktioniert bei mir ganz gut.\r\nHier mal meine Zeilen Code: $img = 'cover.jpg';\r\n// Color in rgb\r\n$dominantColor = ColorThief::getColor($img);\r\n\r\n// color to hex for html usage\r\n$color = sprintf(\"#%02x%02x%02x\", $dominantColor[0], $dominantColor[1], $dominantColor[2]);\r\n\r\n// calculate brightness\r\n$brightness = (($dominantColor[0] * 299) + ($dominantColor[1] * 587) + ($dominantColor[2] * 114)) / 1000;\r\n\r\n// if brighness is > 130 it is bright\r\nif($brightness > 130) {\r\n\t$textColor = '#000000';\r\n} else {\r\n\t$textColor = '#FFFFFF';\r\n}\r\n"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Durchschnittsfarbe aus einem Bild ermitteln und Erkennung ob hell oder dunkle Textfarbe geeignet ist

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#background](/tag.html?tag=232&cHash=fb8ad4d969e8dd49d3c1d432ad1e5d9c)[#color](/tag.html?tag=420&cHash=1345eb550396d95d15df3ea5c6b65f04)[#calculate](/tag.html?tag=1161&cHash=41873d095013c375c26d9417648619e6)[#average](/tag.html?tag=1162&cHash=cd5d60ddc483e08da0e0f15115880f81)[#dominant](/tag.html?tag=1163&cHash=d5042012c531788b09c1f7b934a3bcd3)[#colorthief](/tag.html?tag=1164&cHash=6781bf29bde160cbe60c4f14ab505b85)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Jun 2019

Für ein privates Symfony Projekt, dass mit Buchcovern arbeitet benötigte für einen Slider die Durchschnittsfarbe des Covers, sowie die Erkennung, ob diese Farber eher hell oder dunkel ist, um weißen oder schwarzen Text auf das Bild legen zu können. Für die Farbe habe ich mir [ColorThief](https://github.com/ksubileau/color-thief-php) zur Hilfe genommen. Die Erkennung der Helligkeit habe ich mir dann ergoogelt und einen Mittelwert gefunden. Man muss dafür die RGB-Werte mit einer Zahl multiplizieren und dann gucken, wie hoch diese Zahl ist. Das funktioniert bei mir ganz gut.

Hier mal meine Zeilen Code:

```
$img = 'cover.jpg';
// Color in rgb
$dominantColor = ColorThief::getColor($img);

// color to hex for html usage
$color = sprintf("#%02x%02x%02x", $dominantColor[0], $dominantColor[1], $dominantColor[2]);

// calculate brightness
$brightness = (($dominantColor[0] * 299) + ($dominantColor[1] * 587) + ($dominantColor[2] * 114)) / 1000;

// if brighness is > 130 it is bright
if($brightness > 130) {
	$textColor = '#000000';
} else {
	$textColor = '#FFFFFF';
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