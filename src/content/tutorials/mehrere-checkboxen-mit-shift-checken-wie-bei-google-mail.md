---
title: Mehrere Checkboxen mit Shift checken wie bei Google Mail
date: '2012-11-13T06:25:40.000Z'
slug: mehrere-checkboxen-mit-shift-checken-wie-bei-google-mail
tags:
  - jquery
  - checkbox
  - gmail
  - like google mail
  - shift
  - shiftkey
description: "Ich habe hier ein kleines Script, dass ähnlich wie bei Google Mail mehrere Checkboxen anklickt, wenn man die Shift-Taste gedrück hält.\nDemo:\nCheck 1\nCheck 2\nCheck 3\nCheck 4\nCheck 5\nCheck 6\nCheck 7\nScript \r\njQuery(document).ready(function() {\r\n\tvar $chkboxes = jQuery('.chkbox');\r\n\t$chkboxes.click(function(e) {\r\n\tif(!lastChecked) {\r\n\t\tlastChecked = this;\r\n\t\treturn;\r\n\t}\r\n\r\n\tif(e.shiftKey) {\r\n\t\tvar start = $chkboxes.index(this);\r\n\t\tvar end = $chkboxes.index(lastChecked);\r\n\r\n\t\t$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).attr('checked', lastChecked.checked);\r\n\t}\r\n\tlastChecked = this;\r\n\t});\r\n});\r\n Die Funktionsweise:\n1. Alle Checkboxen mit einer bestimmten Klasse (hier chkbox) werden eingesammelt\n2. Klickt man auf eine und es gibt keinen Letztangeklickten, dann ist es dieser\n3. Gibt es einen Letztangeklickten und die Shift-Taste wurde gedrückt, dann werden alle Checkboxen dazwischen entweder an- oder abgewählt\n4. Das wars\nViel Spaß beim Programmieren!"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

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