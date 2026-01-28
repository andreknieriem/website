---
title: 'jQuery: Html Tag entfernen, ohne den inneren Content/Inhalt'
date: '2014-06-20T16:50:40.000Z'
slug: jquery-html-tag-entfernen-ohne-den-inneren-contentinhalt
tags:
  - jquery
  - html
  - entferne
  - remove
  - tag
  - innercontent
  - ohne
  - without
description: "Möchte man ein HTML Tag entfernen, jedoch die Inhalte behalten so kann man dies mit folgendem kleinen Code-Schnipsel lösen.\nTestaufbau \r\n&lt;div class=\"wrapper\"&gt;\r\n    &lt;a href=\"/home\"&gt;\r\n        &lt;img src=\"header.jpg\"&gt;\r\n    &lt;/a&gt;\r\n&lt;/div&gt;\r\n Javascript-Code \r\n$('a').contents().unwrap();\r\n Ergebnis \r\n&lt;div class=\"wrapper\"&gt;\r\n    &lt;img src=\"header.jpg\"&gt;\r\n&lt;/div&gt;\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Möchte man ein HTML Tag entfernen, jedoch die Inhalte behalten so kann man dies mit folgendem kleinen Code-Schnipsel lösen.

## Testaufbau

```html

<div class="wrapper">
    <a href="/home">
        <img src="header.jpg">
    </a>
</div>

```

## Javascript-Code

```javascript

$('a').contents().unwrap();

```

## Ergebnis

```html

<div class="wrapper">
    <img src="header.jpg">
</div>

```

Viel Spaß damit!