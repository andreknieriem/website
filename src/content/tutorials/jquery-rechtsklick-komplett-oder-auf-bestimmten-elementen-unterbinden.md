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
demo_url: null
download_url: null
---

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