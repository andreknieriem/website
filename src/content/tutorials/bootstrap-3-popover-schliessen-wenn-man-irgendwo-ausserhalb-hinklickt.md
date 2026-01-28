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
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

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