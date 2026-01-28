---
title: 'jQuery: Get-Parameter auslesen'
date: '2014-09-20T06:28:10.000Z'
slug: jquery-get-parameter-auslesen
tags:
  - jquery
  - get
  - bekommen
  - parameter
  - auslesen
description: "Ich habe hier eine kleine Funktion in meiner Sammlung gefunden, was es einem ermöglicht mit Javascript alle oder einzelne Get-Parameter mit Javascript/jQuery auszulesen. Wo ich das Skript gefunden habe, weiß ich leider nicht mehr, ich wollte es euch aber nicht vorenthalten.\nFunktion \r\n$.extend({\r\n  getUrlVars: function(){\r\n    var vars = [], hash;\r\n    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&amp;');\r\n    for(var i = 0; i &lt; hashes.length; i++)\r\n    {\r\n      hash = hashes[i].split('=');\r\n      vars.push(hash[0]);\r\n      vars[hash[0]] = hash[1];\r\n    }\r\n    return vars;\r\n  },\r\n  getUrlVar: function(name){\r\n    return $.getUrlVars()[name];\r\n  }\r\n});\r\n So wird's benutzt \r\n// Objekt mit allen Parametern:\r\nvar allVars = $.getUrlVars();\r\n \r\n// Ein einzelner Parameter:\r\nvar byName = $.getUrlVar('name');\r\n "
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Ich habe hier eine kleine Funktion in meiner Sammlung gefunden, was es einem ermöglicht mit Javascript alle oder einzelne Get-Parameter mit Javascript/jQuery auszulesen. Wo ich das Skript gefunden habe, weiß ich leider nicht mehr, ich wollte es euch aber nicht vorenthalten.

**Funktion**

```javascript

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

```

**So wird's benutzt**

```javascript

// Objekt mit allen Parametern:
var allVars = $.getUrlVars();
 
// Ein einzelner Parameter:
var byName = $.getUrlVar('name');

```