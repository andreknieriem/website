---
title: Input-Felder und Submit-Buttons für iPhone/iPad via CSS stylen
date: '2012-07-26T07:10:27.000Z'
slug: input-felder-und-submit-buttons-fuer-iphoneipad-via-css-stylen
tags:
  - '2'
  - '25'
  - '55'
  - '78'
  - '80'
  - '84'
  - '110'
description: "Wenn man ein Formular für das iPhone oder iPad mit CSS stylen will, merkt man schnell, dass der mobile Safari einem die Styles gnadenlos kaputt macht.\nSo sollte es aussehen:\n\nund so sieht es aus:\n\nNach einigen Recherchen habe ich dann folgende Lösung gefunden: \r\n-webkit-appearance: none;\r\n-moz-appearance: none;\r\n Fügt man diesen Schnipsel zu seiner CSS-Datei hinzu dann sagt man dem mobilen Safari, dass er wirklich diesen Button nicht nach der Apple UI stylen soll."
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#iphone](/tag.html?tag=2&cHash=d7d05c72dcf94fbc4c5651e1e4dc7bc2)[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#mobile safari](/tag.html?tag=55&cHash=bf09347885d980b4485e4ca6272bd700)[#css3](/tag.html?tag=78&cHash=8d28466279fde4e903373d7cd58c1dd0)[#input](/tag.html?tag=80&cHash=206b0773f41443825ace052868fe0598)[#style](/tag.html?tag=84&cHash=7df80fd6187d2fd82c8a4b24b4d84a78)[#submit](/tag.html?tag=110&cHash=0ea84bea66fcfc3db6b99c6390fe9319)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Jul 2012

Wenn man ein Formular für das iPhone oder iPad mit CSS stylen will, merkt man schnell, dass der mobile Safari einem die Styles gnadenlos kaputt macht.

**So sollte es aussehen:**

[![](http://andreknieriem.de/wp-content/uploads/2012/07/submit_3.png "submit_3")](http://andreknieriem.de/wp-content/uploads/2012/07/submit_3.png)

**und so sieht es aus:**

[![](http://andreknieriem.de/wp-content/uploads/2012/07/submit_1.png "submit_1")](http://andreknieriem.de/wp-content/uploads/2012/07/submit_1.png)

Nach einigen Recherchen habe ich dann folgende Lösung gefunden:

```

-webkit-appearance: none;
-moz-appearance: none;
```

Fügt man diesen Schnipsel zu seiner CSS-Datei hinzu dann sagt man dem mobilen Safari, dass er wirklich diesen Button nicht nach der Apple UI stylen soll.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/8e85cd809e704e6712af4ad3484265e2?s=75&d=mm&r=g)
    
    Jörg Ludwig
    
    Dankbarer Tip! Hast du zufällig auch das Pendant für die -moz Browser. Ich habe nämlich ein Problem mit Formularfeldern auf einem Galaxy.  
      
    Vielen Dank,  
    Gruß  
    Jörg Ludwig
    
    29\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Jörg,  
          
        das hat Mozilla wohl erst später eingeführt. Sollte aber laut:  
        https://developer.mozilla.org/de/docs/Web/CSS/-moz-appearance  
          
        so gehen:  
          
        \-moz-appearance: none;  
          
        Viele Grüße  
        André
        
        29\. Jan 2014 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.