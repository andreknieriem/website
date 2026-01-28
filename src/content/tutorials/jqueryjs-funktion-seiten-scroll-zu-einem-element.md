---
title: 'jQuery/JS Funktion: Seiten-Scroll zu einem Element'
date: '2019-09-05T07:28:00.000Z'
slug: jqueryjs-funktion-seiten-scroll-zu-einem-element
tags:
  - jquery
  - javascript
  - scroll
  - element
  - body
  - html
  - viewport
description: "Ich habe hier eine kleine Helper-Funktion für jQuery. Mit dieser Funktion kann man einfach ein Element ansprechen und sagen, dass der Viewport zu diesem Element scrollen soll. Mit dem Parameter addition kann man noch etwas mehr Abstand hinzufügen, damit das Scrollen nicht direkt am oberen Bildschirmrand hängt. /*\r\n* Short helper function to scroll to an element\r\n*\r\n*/\r\n$.fn.scrollView = function (addition) {\r\n    if(!parseInt(addition,10)) {\r\n        addition = 0;\r\n    }\r\n    return this.each(function () {\r\n        $('html, body').animate({\r\n            scrollTop: $(this).offset().top - addition\r\n        }, 200);\r\n    });\r\n}\r\n\r\n// Usage\r\n$('myelement').scrollView();\r\n$('myelement').scrollView(100); // for an offset with 100px"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Ich habe hier eine kleine Helper-Funktion für jQuery. Mit dieser Funktion kann man einfach ein Element ansprechen und sagen, dass der Viewport zu diesem Element scrollen soll. Mit dem Parameter addition kann man noch etwas mehr Abstand hinzufügen, damit das Scrollen nicht direkt am oberen Bildschirmrand hängt.

```js
/*
* Short helper function to scroll to an element
*
*/
$.fn.scrollView = function (addition) {
    if(!parseInt(addition,10)) {
        addition = 0;
    }
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - addition
        }, 200);
    });
}

// Usage
$('myelement').scrollView();
$('myelement').scrollView(100); // for an offset with 100px
```