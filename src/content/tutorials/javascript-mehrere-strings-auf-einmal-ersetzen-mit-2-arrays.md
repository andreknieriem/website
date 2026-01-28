---
title: 'Javascript: Mehrere Strings auf einmal ersetzen mit 2 Arrays'
date: '2015-12-07T17:16:57.000Z'
slug: javascript-mehrere-strings-auf-einmal-ersetzen-mit-2-arrays
tags:
  - '69'
  - '159'
  - '496'
  - '747'
description: "PHP bietet mit seiner str_replace - Funktion die Möglichkeit 2 Arrays als Parameter zu übergeben um mehrere verschiedene Strings mit dem String aus dem zweiten Array zu ersetzen. Javascript bietet diese Möglichkeit nicht von Haus aus. Hier habe eine kleine Prototyp-Funktion für Strings geschrieben. \r\nString.prototype.replaceArray = function(find, replace) {\r\n  var replaceString = this;\r\n  var regex; \r\n  for (var i = 0; i &lt; find.length; i++) {\r\n    regex = new RegExp(find[i], \"g\");\r\n    replaceString = replaceString.replace(regex, replace[i]);\r\n  }\r\n  return replaceString;\r\n};\r\n Benutzung \r\nvar search = ['Dies','ist','ein','Test'],\r\n    replace = ['Ersetze','alle','Wörter','hier'];\r\n\r\nvar replaced = 'Hallo Du! Dies ist ein Test'.replaceArray(search,replace);\r\n\r\n// Als Ergebnis kommt dann 'Hallo Du! Ersetze alle Wörter hier' heraus.\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#array](/tag.html?tag=159&cHash=af33d370884d6dbdfcb31a56e0e38da9)[#multiple](/tag.html?tag=496&cHash=b5ccf1ab608165ac786e9c24537cc63b)[#replace](/tag.html?tag=747&cHash=60532b7c9676f3cea683673442431cff)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Dec 2015

PHP bietet mit seiner str\_replace - Funktion die Möglichkeit 2 Arrays als Parameter zu übergeben um mehrere verschiedene Strings mit dem String aus dem zweiten Array zu ersetzen. Javascript bietet diese Möglichkeit nicht von Haus aus. Hier habe eine kleine Prototyp-Funktion für Strings geschrieben.

```

String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  var regex; 
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};
```

**Benutzung**

```

var search = ['Dies','ist','ein','Test'],
    replace = ['Ersetze','alle','Wörter','hier'];

var replaced = 'Hallo Du! Dies ist ein Test'.replaceArray(search,replace);

// Als Ergebnis kommt dann 'Hallo Du! Ersetze alle Wörter hier' heraus.
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/aa3e245d5354dc70af2f2be5fad8eb42?s=75&d=mm&r=g)
    
    KissBob
    
    hi everyone. it is great site. thanks for all.
    
    13\. Oct 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f54c7b2fbad1c259fe923ea2ed2cdc8b?s=75&d=mm&r=g)
    
    Matt
    
    Super Funktion danke fürs teilen.
    
    18\. May 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Freut mich, wenn ich dir helfen konnte.
        
        19\. May 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.