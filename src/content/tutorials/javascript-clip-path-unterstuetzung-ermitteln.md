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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript#CSS

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#check](/tag.html?tag=632&cHash=cc35eecde32242bfafc69d7393781d75)[#clippath](/tag.html?tag=937&cHash=650307d94e62c774af3f4c748b2a5aa7)[#support](/tag.html?tag=938&cHash=1265669eceacffff05369e67e4ac9fc1)[#clip-path](/tag.html?tag=939&cHash=78acc428d2598039aa3aa72c2479feb3)[#prüfen](/tag.html?tag=940&cHash=11ff41c6e40203dd8678890826920432)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Dec 2016

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.