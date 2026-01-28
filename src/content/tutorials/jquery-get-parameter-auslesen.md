---
title: 'jQuery: Get-Parameter auslesen'
date: '2014-09-20T06:28:10.000Z'
slug: jquery-get-parameter-auslesen
tags:
  - '20'
  - '97'
  - '512'
  - '533'
  - '534'
description: "Ich habe hier eine kleine Funktion in meiner Sammlung gefunden, was es einem ermöglicht mit Javascript alle oder einzelne Get-Parameter mit Javascript/jQuery auszulesen. Wo ich das Skript gefunden habe, weiß ich leider nicht mehr, ich wollte es euch aber nicht vorenthalten.\nFunktion \r\n$.extend({\r\n  getUrlVars: function(){\r\n    var vars = [], hash;\r\n    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&amp;');\r\n    for(var i = 0; i &lt; hashes.length; i++)\r\n    {\r\n      hash = hashes[i].split('=');\r\n      vars.push(hash[0]);\r\n      vars[hash[0]] = hash[1];\r\n    }\r\n    return vars;\r\n  },\r\n  getUrlVar: function(name){\r\n    return $.getUrlVars()[name];\r\n  }\r\n});\r\n So wird's benutzt \r\n// Objekt mit allen Parametern:\r\nvar allVars = $.getUrlVars();\r\n \r\n// Ein einzelner Parameter:\r\nvar byName = $.getUrlVar('name');\r\n "
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#bekommen](/tag.html?tag=512&cHash=03330f1d0965d374dabcf8dd59405ca7)[#parameter](/tag.html?tag=533&cHash=6a29c96588220a47915e885ee98fe37b)[#auslesen](/tag.html?tag=534&cHash=943ab25afb9417bfa900682221d8383e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. Sep 2014

Ich habe hier eine kleine Funktion in meiner Sammlung gefunden, was es einem ermöglicht mit Javascript alle oder einzelne Get-Parameter mit Javascript/jQuery auszulesen. Wo ich das Skript gefunden habe, weiß ich leider nicht mehr, ich wollte es euch aber nicht vorenthalten.

**Funktion**

```

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

```

// Objekt mit allen Parametern:
var allVars = $.getUrlVars();
 
// Ein einzelner Parameter:
var byName = $.getUrlVar('name');
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/de11da529be7304ea7252c1e518356a6?s=75&d=mm&r=g)
    
    [Valerij](hornbook.de)
    
    Danke, alles funktioniert einwandfrei )
    
    07\. Jan 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.