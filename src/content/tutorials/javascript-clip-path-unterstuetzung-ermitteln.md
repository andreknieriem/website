---
title: 'Javascript: Clip-Path Unterstützung ermitteln'
date: '2016-11-30T23:00:00.000Z'
slug: javascript-clip-path-unterstuetzung-ermitteln
tags:
  - '69'
  - '25'
  - '937'
  - '938'
  - '632'
  - '939'
  - '940'
description: "Möchte man die neue clip-path CSS Eigenschaft verwenden, aber vorher testen, ob der Browser die Eigenschaft überhaupt unterstützt, so kann man dies mit dem folgender Funktion leicht überprüfen. \r\n  // Check if clip-path is supported. From http://stackoverflow.com/a/30041538.\r\n  function ClipPathSupported() {\r\n    var base = 'clipPath',\r\n      prefixes = [ 'webkit', 'moz', 'ms', 'o' ],\r\n      properties = [ base ],\r\n      testElement = document.createElement( 'testelement' ),\r\n      attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';\r\n\r\n    // Push the prefixed properties into the array of properties.\r\n    for ( var i = 0, l = prefixes.length; i &lt; l; i++ ) {\r\n      var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!\r\n      properties.push( prefixedProperty );\r\n    }\r\n\r\n    // Interate over the properties and see if they pass two tests.\r\n    for ( var i = 0, l = properties.length; i &lt; l; i++ ) {\r\n      var property = properties[i];\r\n\r\n      // First, they need to even support clip-path (IE &lt;= 11 does not)...\r\n      if ( testElement.style[property] === '' ) {\r\n\r\n        // Second, we need to see what happens when we try to create a CSS shape...\r\n        testElement.style[property] = attribute;\r\n        if ( testElement.style[property] !== '' ) {\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  };\r\n Das ganze lässt sich dann natürlich einfach verwenden. Die Funktion gibt true oder false zurück, ob clip-path unterstützt wird. var clipPathSupport = ClipPathSupported();"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Möchte man die neue [clip-path](https://css-tricks.com/almanac/properties/c/clip/ "Opens internal link in current window") CSS Eigenschaft verwenden, aber vorher testen, ob der Browser die Eigenschaft überhaupt unterstützt, so kann man dies mit dem folgender Funktion leicht überprüfen.

```

  // Check if clip-path is supported. From http://stackoverflow.com/a/30041538.
  function ClipPathSupported() {
    var base = 'clipPath',
      prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
      properties = [ base ],
      testElement = document.createElement( 'testelement' ),
      attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

    // Push the prefixed properties into the array of properties.
    for ( var i = 0, l = prefixes.length; i < l; i++ ) {
      var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
      properties.push( prefixedProperty );
    }

    // Interate over the properties and see if they pass two tests.
    for ( var i = 0, l = properties.length; i < l; i++ ) {
      var property = properties[i];

      // First, they need to even support clip-path (IE <= 11 does not)...
      if ( testElement.style[property] === '' ) {

        // Second, we need to see what happens when we try to create a CSS shape...
        testElement.style[property] = attribute;
        if ( testElement.style[property] !== '' ) {
          return true;
        }
      }
    }
    return false;
  };
```

Das ganze lässt sich dann natürlich einfach verwenden. Die Funktion gibt true oder false zurück, ob clip-path unterstützt wird.

```
var clipPathSupport = ClipPathSupported();
```