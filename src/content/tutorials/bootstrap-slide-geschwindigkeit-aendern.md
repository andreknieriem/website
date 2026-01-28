---
title: 'Bootstrap: Slide Geschwindigkeit ändern'
date: '2014-10-10T15:16:13.000Z'
slug: bootstrap-slide-geschwindigkeit-aendern
tags:
  - '215'
  - '476'
  - '539'
  - '540'
  - '541'
  - '542'
  - '543'
description: "Möchte man die Slide-Geschwindigkeit von Bootstrap Carousel ändern, so findet man hierfür keine Einstellungsmöglich als data-Attribut oder beim Aufrufen der Funktion via Javascript. Der Grund dafür ist, dass dies mit CSS3 Animation gelöst wurde und dafür muss man also nur die Transition Zeit anpassen. Hier mal ein Beispiel für einen Slide mit 0.6s also 600MS Laufzeit. Dies kann natürlich angepasst werden, wie man es möchte. \r\n.carousel-inner &gt; .item {\r\n    position: relative;\r\n    display: none;\r\n    -webkit-transition: 0.6s ease-in-out left;\r\n    -moz-transition: 0.6s ease-in-out left;\r\n    -o-transition: 0.6s ease-in-out left;\r\n    transition: 0.6s ease-in-out left;\r\n}\r\n "
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#option](/tag.html?tag=476&cHash=7d4b15733db1a4b4a7a6a237e216052a)[#carousel](/tag.html?tag=539&cHash=84056362616d0e4257729367df84e130)[#slide](/tag.html?tag=540&cHash=3585ae01f5acc5c34d7227cfdd77b545)[#time](/tag.html?tag=541&cHash=cc42ffaf96bb61f021ddc6580e2d784e)[#speed](/tag.html?tag=542&cHash=c8d613d37ee547f298506ad9619518ad)[#setting](/tag.html?tag=543&cHash=0c81bb70a79ed5d2279a18ef9dc82569)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. Oct 2014

Möchte man die Slide-Geschwindigkeit von Bootstrap Carousel ändern, so findet man hierfür keine Einstellungsmöglich als data-Attribut oder beim Aufrufen der Funktion via Javascript. Der Grund dafür ist, dass dies mit CSS3 Animation gelöst wurde und dafür muss man also nur die Transition Zeit anpassen. Hier mal ein Beispiel für einen Slide mit 0.6s also 600MS Laufzeit. Dies kann natürlich angepasst werden, wie man es möchte.

```

.carousel-inner > .item {
    position: relative;
    display: none;
    -webkit-transition: 0.6s ease-in-out left;
    -moz-transition: 0.6s ease-in-out left;
    -o-transition: 0.6s ease-in-out left;
    transition: 0.6s ease-in-out left;
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/bbdc1ac2c707537962fd054feff73abf?s=75&d=mm&r=g)
    
    [Sonja](www.suesse-schachtel.de)
    
    Hallo Andre,  
    vielen Dank für den tollen Tipp! Weißt Du zufällig auch, wo man hinfassen muss, damit das Bild ein wenig länger stehen bleibt im Slider?  
    Lieber Gruß  
    Sonja
    
    08\. Jun 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/bea83e248c9b4b2026ac4889d6babcb0?s=75&d=mm&r=g)
    
    Christine
    
    Vielen Dank!  
    Hab danach gesucht, sehr nützlich!
    
    10\. Aug 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, wenn ich dir helfen konnte ;)
        
        10\. Aug 2017 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.