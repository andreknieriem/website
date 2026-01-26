---
title: Mehrere Checkboxen mit Shift checken wie bei Google Mail
date: '2012-11-13T06:25:40.000Z'
slug: mehrere-checkboxen-mit-shift-checken-wie-bei-google-mail
tags:
  - '20'
  - '126'
  - '127'
  - '128'
  - '129'
  - '130'
description: "Ich habe hier ein kleines Script, dass ähnlich wie bei Google Mail mehrere Checkboxen anklickt, wenn man die Shift-Taste gedrück hält.\nDemo:\nCheck 1\nCheck 2\nCheck 3\nCheck 4\nCheck 5\nCheck 6\nCheck 7\nScript \r\njQuery(document).ready(function() {\r\n\tvar $chkboxes = jQuery('.chkbox');\r\n\t$chkboxes.click(function(e) {\r\n\tif(!lastChecked) {\r\n\t\tlastChecked = this;\r\n\t\treturn;\r\n\t}\r\n\r\n\tif(e.shiftKey) {\r\n\t\tvar start = $chkboxes.index(this);\r\n\t\tvar end = $chkboxes.index(lastChecked);\r\n\r\n\t\t$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).attr('checked', lastChecked.checked);\r\n\t}\r\n\tlastChecked = this;\r\n\t});\r\n});\r\n Die Funktionsweise:\n1. Alle Checkboxen mit einer bestimmten Klasse (hier chkbox) werden eingesammelt\n2. Klickt man auf eine und es gibt keinen Letztangeklickten, dann ist es dieser\n3. Gibt es einen Letztangeklickten und die Shift-Taste wurde gedrückt, dann werden alle Checkboxen dazwischen entweder an- oder abgewählt\n4. Das wars\nViel Spaß beim Programmieren!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Mehrere Checkboxen mit Shift checken wie bei Google Mail

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#checkbox](/tag.html?tag=126&cHash=cb7eae92f983ffc62b3ebe75cfc58d35)[#gmail](/tag.html?tag=127&cHash=5c3565f369998ad2169f2ff3ca93bd74)[#like google mail](/tag.html?tag=128&cHash=e03d7b87be767887e93b59d69c82de69)[#shift](/tag.html?tag=129&cHash=0a141ce2736fa5f290473d0ddf851612)[#shiftkey](/tag.html?tag=130&cHash=d3a401cd8e68ac507f0832f204990d40)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

13\. Nov 2012

Ich habe hier ein kleines Script, dass ähnlich wie bei Google Mail mehrere Checkboxen anklickt, wenn man die Shift-Taste gedrück hält.

**Demo:**

<input type="checkbox" id="id\_chk1" class="chkbox" value="1" />Check 1

<input type="checkbox" id="id\_chk2" class="chkbox" value="2" />Check 2

<input type="checkbox" id="id\_chk3" class="chkbox" value="3" />Check 3

<input type="checkbox" id="id\_chk4" class="chkbox" value="4" />Check 4

<input type="checkbox" id="id\_chk5" class="chkbox" value="5" />Check 5

<input type="checkbox" id="id\_chk6" class="chkbox" value="6" />Check 6

<input type="checkbox" id="id\_chk7" class="chkbox" value="7" />Check 7

**Script**

```

jQuery(document).ready(function() {
	var $chkboxes = jQuery('.chkbox');
	$chkboxes.click(function(e) {
	if(!lastChecked) {
		lastChecked = this;
		return;
	}

	if(e.shiftKey) {
		var start = $chkboxes.index(this);
		var end = $chkboxes.index(lastChecked);

		$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).attr('checked', lastChecked.checked);
	}
	lastChecked = this;
	});
});
```

**Die Funktionsweise:**

1\. Alle Checkboxen mit einer bestimmten Klasse (hier chkbox) werden eingesammelt

2\. Klickt man auf eine und es gibt keinen Letztangeklickten, dann ist es dieser

3\. Gibt es einen Letztangeklickten und die Shift-Taste wurde gedrückt, dann werden alle Checkboxen dazwischen entweder an- oder abgewählt

4\. Das wars

Viel Spaß beim Programmieren!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.