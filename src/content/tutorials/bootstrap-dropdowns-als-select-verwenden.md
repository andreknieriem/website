---
title: 'Bootstrap: Dropdowns als Select verwenden'
date: '2015-03-20T17:47:08.000Z'
slug: bootstrap-dropdowns-als-select-verwenden
tags:
  - '20'
  - '69'
  - '85'
  - '151'
  - '215'
  - '477'
  - '638'
  - '639'
description: "Möchte man die Bootstrap Dropdowns als Html-Select verwenden, so kann man mit sich mit folgendem Markup/Javascript behelfen. \r\n&lt;div class=\"btn-group fakeSelect\"&gt;\r\n    &lt;input type=\"hidden\" class=\"selectValue\" value=\"2013\"&gt;\r\n    &lt;button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"&gt;\r\n        &lt;span class=\"currentVal\"&gt;2013&lt;/span&gt;\r\n        &lt;span class=\"caret\"&gt;&lt;/span&gt;\r\n    &lt;/button&gt;\r\n    &lt;ul class=\"dropdown-menu\" role=\"menu\"&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2013\" href=\"#\"&gt;2013&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2012\" href=\"#\"&gt;2012&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2011\" href=\"#\"&gt;2011&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2010\" href=\"#\"&gt;2010&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2009\" href=\"#\"&gt;2009&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2008\" href=\"#\"&gt;2008&lt;/a&gt;&lt;/li&gt;\r\n    &lt;/ul&gt;\r\n&lt;/div&gt;\r\n  \r\n$(\".fakeSelect .dropdown-menu li a\").click(function(e){\r\n\te.preventDefault();\r\n\t\r\n\tvar elem = $(this),\r\n\t\tfakeSelect = elem.parents('.fakeSelect'),\r\n\t\tval = elem.data('value');\r\n\t\r\n\tfakeSelect.find('.currentVal').text(val);\r\n\tfakeSelect.find('.selectValue').val(val);\r\n});\r\n \nDemo:\nhttps://jsfiddle.net/bftdvw83/"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Bootstrap: Dropdowns als Select verwenden

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#html](/tag.html?tag=85&cHash=91a7ea3a6587e1d4fa3e5c908a161193)[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#dropdown](/tag.html?tag=477&cHash=39762b1691dacc66846b043cfb9cc842)[#field](/tag.html?tag=638&cHash=2d5a69b6c99b613c83ecd6b35470dd55)[#fake select](/tag.html?tag=639&cHash=30cae38a6bd50e62c0e52f8a3a78d1f4)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. Mar 2015

Möchte man die Bootstrap Dropdowns als Html-Select verwenden, so kann man mit sich mit folgendem Markup/Javascript behelfen.

```

<div class="btn-group fakeSelect">
    <input type="hidden" class="selectValue" value="2013">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        <span class="currentVal">2013</span>
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
        <li><a data-value="2013" href="#">2013</a></li>
        <li><a data-value="2012" href="#">2012</a></li>
        <li><a data-value="2011" href="#">2011</a></li>
        <li><a data-value="2010" href="#">2010</a></li>
        <li><a data-value="2009" href="#">2009</a></li>
        <li><a data-value="2008" href="#">2008</a></li>
    </ul>
</div>
```

```

$(".fakeSelect .dropdown-menu li a").click(function(e){
	e.preventDefault();
	
	var elem = $(this),
		fakeSelect = elem.parents('.fakeSelect'),
		val = elem.data('value');
	
	fakeSelect.find('.currentVal').text(val);
	fakeSelect.find('.selectValue').val(val);
});
```

Demo:

[https://jsfiddle.net/bftdvw83/](https://jsfiddle.net/bftdvw83/)

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.