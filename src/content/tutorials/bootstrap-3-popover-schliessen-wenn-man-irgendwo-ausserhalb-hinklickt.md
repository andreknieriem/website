---
title: 'Bootstrap 3: Popover schließen, wenn man irgendwo außerhalb hinklickt'
date: '2014-04-24T16:20:51.000Z'
slug: bootstrap-3-popover-schliessen-wenn-man-irgendwo-ausserhalb-hinklickt
tags:
  - '20'
  - '386'
  - '463'
  - '464'
  - '465'
  - '466'
  - '467'
  - '468'
  - '469'
description: "Die Popover bei Bootstrap sind eine sehr sinnvolle und schöne Erweiterung. Leider gehen diese nur wieder zu, wenn man auf den Button, der den Popover geöffnet hat noch einmal klickt. Möchte man dies umgehen kann man das nachfolgende Skript verwenden.\nWir gehen davon aus, dass wir einen Button haben, der den Popover öffnet und der Popover sich auch außerhalb oder innerhalb des Buttons befindet. Der Button heißt in diesem Fall: \"popover_btn\" \r\n$(document).click(function(event) {\r\n\tvar target = $(event.target);\r\n\tif (!target.hasClass('popover') &amp;&amp; target.closest('.popover').length == 0 &amp;&amp; !target.hasClass('popover_btn') &amp;&amp; target.closest('.popover_btn').length == 0) {\r\n\t\t// Weder das Element selbst noch ein Kind davon und auch nicht der Popover\r\n\t\t$('.popover_btn').popover('hide');\r\n\t}\r\n});\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap 3: Popover schließen, wenn man irgendwo außerhalb hinklickt

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#bootstrap 3](/tag.html?tag=386&cHash=d1007223c2fd3003e5a1135482286402)[#popover](/tag.html?tag=463&cHash=60b8d6b9897dedb0b91c4e1acf5ceffe)[#close](/tag.html?tag=464&cHash=04f3d5c3d4394ade2374f72adf8f39bf)[#schließen](/tag.html?tag=465&cHash=0ddd41152ac739defdcda31d90c9309f)[#target](/tag.html?tag=466&cHash=0fdb7b85fd8aea359bdd6869770db854)[#click](/tag.html?tag=467&cHash=fcf605ce57507b9fe0110c3eeae9b33e)[#body](/tag.html?tag=468&cHash=0e6d113fcf354909c999d48eda0d7550)[#document](/tag.html?tag=469&cHash=cd3a4f2146e8da29ac807863bc799ca1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

24\. Apr 2014

Die Popover bei Bootstrap sind eine sehr sinnvolle und schöne Erweiterung. Leider gehen diese nur wieder zu, wenn man auf den Button, der den Popover geöffnet hat noch einmal klickt. Möchte man dies umgehen kann man das nachfolgende Skript verwenden.

Wir gehen davon aus, dass wir einen Button haben, der den Popover öffnet und der Popover sich auch außerhalb oder innerhalb des Buttons befindet. Der Button heißt in diesem Fall: "**popover\_btn**"

```

$(document).click(function(event) {
	var target = $(event.target);
	if (!target.hasClass('popover') && target.closest('.popover').length == 0 && !target.hasClass('popover_btn') && target.closest('.popover_btn').length == 0) {
		// Weder das Element selbst noch ein Kind davon und auch nicht der Popover
		$('.popover_btn').popover('hide');
	}
});
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.