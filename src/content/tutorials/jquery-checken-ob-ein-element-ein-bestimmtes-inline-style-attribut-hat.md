---
title: 'jQuery: Checken ob ein Element ein bestimmtes inline-Style Attribut hat'
date: '2014-08-12T15:31:59.000Z'
slug: jquery-checken-ob-ein-element-ein-bestimmtes-inline-style-attribut-hat
tags:
  - function
  - funktion
  - jquery
  - get
  - inline-style
  - styling
  - bekommen
description: "Oft werden von jQuery und Plugins Inline-Styles an Elemente geschrieben. Möchte man diese explizit auslesen, so kann man dies mit der folgenden Funktion tun.\njQuery Funktion: \r\n?(function ($) {\r\n    $.fn.inlineStyle = function (prop) {\r\n         var styles = this.attr(\"style\"),\r\n             value;\r\n         styles &amp;&amp; styles.split(\";\").forEach(function (e) {\r\n             var style = e.split(\":\");\r\n             if ($.trim(style[0]) === prop) {\r\n                 value = style[1];           \r\n             }                    \r\n         });   \r\n         return value;\r\n    };\r\n}(jQuery));\r\n Benutzung: \r\n//Returns value of \"width\" property or `undefined`\r\nvar width = $(\"#someElem\").inlineStyle(\"width\");\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Oft werden von jQuery und Plugins Inline-Styles an Elemente geschrieben. Möchte man diese explizit auslesen, so kann man dies mit der folgenden Funktion tun.

**jQuery Funktion:**

```javascript

?(function ($) {
    $.fn.inlineStyle = function (prop) {
         var styles = this.attr("style"),
             value;
         styles && styles.split(";").forEach(function (e) {
             var style = e.split(":");
             if ($.trim(style[0]) === prop) {
                 value = style[1];           
             }                    
         });   
         return value;
    };
}(jQuery));

```

**Benutzung:**

```javascript

//Returns value of "width" property or `undefined`
var width = $("#someElem").inlineStyle("width");

```

Viel Spaß damit!