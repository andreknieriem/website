---
title: 'Bootstrap: Dropdowns als Select verwenden'
date: '2015-03-20T17:47:08.000Z'
slug: bootstrap-dropdowns-als-select-verwenden
tags:
  - jquery
  - javascript
  - html
  - select
  - bootstrap
  - dropdown
  - field
  - fake select
description: "Möchte man die Bootstrap Dropdowns als Html-Select verwenden, so kann man mit sich mit folgendem Markup/Javascript behelfen. \r\n&lt;div class=\"btn-group fakeSelect\"&gt;\r\n    &lt;input type=\"hidden\" class=\"selectValue\" value=\"2013\"&gt;\r\n    &lt;button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"&gt;\r\n        &lt;span class=\"currentVal\"&gt;2013&lt;/span&gt;\r\n        &lt;span class=\"caret\"&gt;&lt;/span&gt;\r\n    &lt;/button&gt;\r\n    &lt;ul class=\"dropdown-menu\" role=\"menu\"&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2013\" href=\"#\"&gt;2013&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2012\" href=\"#\"&gt;2012&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2011\" href=\"#\"&gt;2011&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2010\" href=\"#\"&gt;2010&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2009\" href=\"#\"&gt;2009&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a data-value=\"2008\" href=\"#\"&gt;2008&lt;/a&gt;&lt;/li&gt;\r\n    &lt;/ul&gt;\r\n&lt;/div&gt;\r\n  \r\n$(\".fakeSelect .dropdown-menu li a\").click(function(e){\r\n\te.preventDefault();\r\n\t\r\n\tvar elem = $(this),\r\n\t\tfakeSelect = elem.parents('.fakeSelect'),\r\n\t\tval = elem.data('value');\r\n\t\r\n\tfakeSelect.find('.currentVal').text(val);\r\n\tfakeSelect.find('.selectValue').val(val);\r\n});\r\n \nDemo:\nhttps://jsfiddle.net/bftdvw83/"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Möchte man die Bootstrap Dropdowns als Html-Select verwenden, so kann man mit sich mit folgendem Markup/Javascript behelfen.

```html

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

```js

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
