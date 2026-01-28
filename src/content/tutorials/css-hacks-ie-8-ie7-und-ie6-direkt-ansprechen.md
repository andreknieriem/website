---
title: CSS Hacks IE 8, IE7 und IE6 direkt ansprechen
date: '2013-01-08T11:38:45.000Z'
slug: css-hacks-ie-8-ie7-und-ie6-direkt-ansprechen
tags:
  - '25'
  - '87'
  - '153'
description: "Jeder der schon einmal eine Webseite erstellt hat wird merken, dass eigentlich alle Version unter dem 9er Probleme machen bei der Darstellung. Leider sind viele Leute noch mit alten Windows Rechner und noch ältereren Browsern unterwegs. Der IE6 ist zwar mitlerweile fast ausgestorben, doch haben noch eine große Anzahl von Usern den IE 7 und 8. Hier habe ich einige Schnipsen, bzw. CSS-Hacks um die IE's direkt zusammen oder einzelnd anzusprechen.\nInternet Explorer 8 und darunter\nDer Trick um alle Internet Explorer Versionen kleiner als 9 anzusprechen ist folgender: \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background: red\\9; /* IE8 und darunter */\r\n}\r\n Das \"9\" ist hier der Trick. Dies funktioniert aber wirklich nur für IE's mit der Version < 9. (IE 8 und darunter)\nNur den Internet Explorer 8 geht folgendermaßen \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background: red\\9; /* IE8 und darunter */\r\n    background/***/: blue\\9 /* Nur IE8 */\r\n}\r\n Internet Explorer 7 und darunter\nUm Versionen kleiner 7 anzusprechen, muss ein Stern * vor das entsprechende Attribut gesetzt werden. \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background: red\\9; /* IE8 und darunter */\r\n    *background: yellow; /* IE7 und darunter */\r\n}\r\n CSS Anweisungen für den IE7 gehen also mit einem \"*\" vor der Anweisung.\nInternet Explorer 6\nZusätzlich zu den oberen beiden Hacks, gibt es auch noch die Möglichkeit ausschließlich den Internet Explorer 6 anzusprechen. Dies funktioniert nach dem gleichen Prinzip wie die Sternmethode, nur das ein Unterstrich verwendet wird. \r\n.class {\r\n    background: blue; /* Jeder Browser */\r\n    background/***/: blue\\9 /* Nur IE8 */\r\n    background: red\\9; /* IE8 und darunter */\r\n    *background: yellow; /* IE7 und darunter */\r\n    _background: gray; /* Nur IE6 */\r\n}\r\n "
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 11 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#css hacks](/tag.html?tag=153&cHash=90e346d606f3292d847882a457a28ba8)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Jan 2013

Jeder der schon einmal eine Webseite erstellt hat wird merken, dass eigentlich alle Version unter dem 9er Probleme machen bei der Darstellung. Leider sind viele Leute noch mit alten Windows Rechner und noch ältereren Browsern unterwegs. Der IE6 ist zwar mitlerweile fast ausgestorben, doch haben noch eine große Anzahl von Usern den IE 7 und 8. Hier habe ich einige Schnipsen, bzw. CSS-Hacks um die IE's direkt zusammen oder einzelnd anzusprechen.

Internet Explorer 8 und darunter

Der Trick um alle Internet Explorer Versionen kleiner als 9 anzusprechen ist folgender:

```

.class {
    background: blue; /* Jeder Browser */
    background: red\9; /* IE8 und darunter */
}
```

Das "9" ist hier der Trick. Dies funktioniert aber wirklich nur für IE's mit der Version < 9. (IE 8 und darunter)

Nur den Internet Explorer 8 geht folgendermaßen

```

.class {
    background: blue; /* Jeder Browser */
    background: red\9; /* IE8 und darunter */
    background/***/: blue\9 /* Nur IE8 */
}
```

Internet Explorer 7 und darunter

Um Versionen kleiner 7 anzusprechen, muss ein Stern \* vor das entsprechende Attribut gesetzt werden.

```

.class {
    background: blue; /* Jeder Browser */
    background: red\9; /* IE8 und darunter */
    *background: yellow; /* IE7 und darunter */
}
```

CSS Anweisungen für den IE7 gehen also mit einem "\*" vor der Anweisung.

Internet Explorer 6

Zusätzlich zu den oberen beiden Hacks, gibt es auch noch die Möglichkeit ausschließlich den Internet Explorer 6 anzusprechen. Dies funktioniert nach dem gleichen Prinzip wie die Sternmethode, nur das ein Unterstrich verwendet wird.

```

.class {
    background: blue; /* Jeder Browser */
    background/***/: blue\9 /* Nur IE8 */
    background: red\9; /* IE8 und darunter */
    *background: yellow; /* IE7 und darunter */
    _background: gray; /* Nur IE6 */
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/741e5e78f818f015470c69741d89d485?s=75&d=mm&r=g)
    
    [Nike](www.steinertank.ch)
    
    Daaaankeee!!! Endlich, ich bin noch Anfänger und habe lange gesucht, nicht aufgeben und dann diesen Beitrag gefunden. Nun funktioniert's!
    
    02\. May 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, dass ich dir helfen konnte :) Musst du immernoch die alten IE's unterstützen du Ärmster :P
        
        03\. May 2017 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/b951a0df686f60628fbf7d3dbb0bdace?s=75&d=mm&r=g)
    
    [Norbert](http://www.wassersauger-reutlingen.de/)
    
    Hi Andre  
    sag gibt es auch einen hack für den letzten IE11 und für den IE10
    
    23\. Jun 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/d6389a9bcc0a5e0592706f636f152d39?s=75&d=mm&r=g)
    
    [riepichiep](http://im-chaos-daheim.de)
    
    Geht das ganze auch mit Zahlencode (#012345) oder müssen es Farbnamen sein?
    
    20\. Sep 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo, aber natürlich geht das. Du kannst jeden Style, nicht nur Farben so einstellen.  
          
        Grüße  
        André
        
        20\. Sep 2015 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/d6389a9bcc0a5e0592706f636f152d39?s=75&d=mm&r=g)
            
            [riepichiep](http://im-chaos-daheim.de)
            
            Ich hatte{color:#0000cc9} und das wurde schwarz statt bklau. Habe ich einen Fehler im code?
            
            20\. Sep 2015 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Hallo ja hast du. Hex Zahlen sind immer nur 6 Stellen, du hast 7 Stellen nach dem #-Zeichen. Ich denke deine Farbe ist #000cc9;  
                  
                Grüße
                
                20\. Sep 2015 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/6a71a234f8c5334676a6c34c9b85e669?s=75&d=mm&r=g)
                    
                    [riepichiep](http://www.im-chaos-daheim.de/)
                    
                    Neuer Versuch: Im CSS steht nun  
                    color: #FEFFF2;  
                    color: blue9;  
                      
                    lasse ich "color: blue9;" weg, wird es im IE auch nahezu weiß. Lass ich die Zeile da, wird es allerdings schwarz statt blau ...
                    
                    21\. Sep 2015 [Antworten](#)
                    
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Hallo riepichiep,  
                  
                du hast Recht und ich merke es erst jetzt! In meinem Code hatte Wordpress die Backslashes entfernt. Sie sind nun wieder drin! Also wäre der richtige Code {color:#0000cc\\9}
                
                21\. Sep 2015 [Antworten](#)
                

*   ![](https://www.gravatar.com/avatar/00a6aadf307cd71abd43d0198446aef6?s=75&d=mm&r=g)
    
    Shad
    
    Sehr schöner Beitrag. Genau was ich gesucht habe.  
    Ich muss allerdings in IE8 und darunter den Hack "!important" zum laufen bekommen. Diese Browser ignorieren diese Wertigkeit leider.  
    Wie spreche ich also IE7 und IE8 damit an?
    
    03\. Nov 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Shad,  
          
        das müsste doch genauso gehen oder? Also:  
        \[code\]  
        background: red9 !important;  
          
        bzw:  
        background/\*\*\*/: blue9 !important;  
        \*background: blue !important;  
        \[/code\]  
          
        Grüße  
        André
        
        05\. Nov 2014 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.