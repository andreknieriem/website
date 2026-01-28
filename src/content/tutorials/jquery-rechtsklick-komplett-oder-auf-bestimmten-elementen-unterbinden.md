---
title: 'jQuery: Rechtsklick komplett oder auf bestimmten Elementen unterbinden'
date: '2015-02-23T16:44:46.000Z'
slug: jquery-rechtsklick-komplett-oder-auf-bestimmten-elementen-unterbinden
tags:
  - '20'
  - '152'
  - '474'
  - '625'
  - '626'
  - '627'
description: "Möchte man den Rechtsklick auf einer Webseite unterbinden, so lässt sich dies relativ einfach mit jQuery lösen. In dem Beispiel zeige ich, wie man es bei Bildern oder der kompletten Seite abschaltet. Bei Bildern, ist dies ein wenig hilfreich, damit die Leute sich das Bild nicht ohne Weiteres herunterladen können. \nHier der Code  \r\n$(function() {\r\n    // Rechtsklick auf Bildern verhindern\r\n    $(\"img\").bind(\"contextmenu\",function(){\r\n       return false;\r\n    }); \r\n    \r\n    // Rechtsklick komplett für die Seite ausschalten\r\n    $(this).bind(\"contextmenu\", function(e) {\r\n        e.preventDefault();\r\n    });\r\n});  \r\n "
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#verhindern](/tag.html?tag=152&cHash=7d0196074d707de0fb7fc30a2fe75fe8)[#menu](/tag.html?tag=474&cHash=afa1a85544c323a01d349889dfb80551)[#rechtsklick](/tag.html?tag=625&cHash=d41f095f2c4445024ababe3c445d98e5)[#context](/tag.html?tag=626&cHash=fc4e7aaae15a9a9e6debcc5f9b2bf19c)[#abschalten](/tag.html?tag=627&cHash=72783d92ee4b34fd322a67a5c3022ae7)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Feb 2015

Möchte man den Rechtsklick auf einer Webseite unterbinden, so lässt sich dies relativ einfach mit jQuery lösen. In dem Beispiel zeige ich, wie man es bei Bildern oder der kompletten Seite abschaltet. Bei Bildern, ist dies ein wenig hilfreich, damit die Leute sich das Bild nicht ohne Weiteres herunterladen können.

**Hier der Code**

```

$(function() {
    // Rechtsklick auf Bildern verhindern
    $("img").bind("contextmenu",function(){
       return false;
    }); 
    
    // Rechtsklick komplett für die Seite ausschalten
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });
});  
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.