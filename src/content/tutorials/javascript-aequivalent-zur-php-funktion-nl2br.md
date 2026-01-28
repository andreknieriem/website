---
title: Javascript Äquivalent zur Php-Funktion nl2br()
date: '2011-11-14T10:29:26.000Z'
slug: javascript-aequivalent-zur-php-funktion-nl2br
tags:
  - function
  - funktion
  - jquery
  - php
  - javascript
  - js
  - nl2br
description: >-
  Ich brauchte eine Funktion, die mir wie die PHP Funktion nl2br Break-Tags
  setzt. Nach kurzem suchen wurde ich fündig ;)

  Einfach diese Funktion in eure Javascript-Datei einfügen und via
  nl2br($string) wie bei PHP aufrufen. Das wars auch schon ;) 

  function nl2br (str, is_xhtml) {

  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '&lt;br /&gt;'
  : '&lt;br /&gt;';

  return (str + '').replace(/([^&gt;rn]?)(rn|nr|r|n)/g, '$1'+ breakTag +'$2');

  }
   
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Ich brauchte eine Funktion, die mir wie die PHP Funktion nl2br Break-Tags setzt. Nach kurzem suchen wurde ich fündig ;)

Einfach diese Funktion in eure Javascript-Datei einfügen und via nl2br($string) wie bei PHP aufrufen. Das wars auch schon ;)

```javascript

function nl2br (str, is_xhtml) {
var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br />';
return (str + '').replace(/([^>rn]?)(rn|nr|r|n)/g, '$1'+ breakTag +'$2');
}

```