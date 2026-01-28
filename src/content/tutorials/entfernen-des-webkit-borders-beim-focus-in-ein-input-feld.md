---
title: Entfernen des Webkit-Borders beim Focus in ein Input Feld
date: '2012-03-05T14:49:02.000Z'
slug: entfernen-des-webkit-borders-beim-focus-in-ein-input-feld
tags:
  - '25'
  - '58'
  - '72'
  - '78'
  - '79'
  - '80'
  - '81'
description: >-
  In vielen Browser, besonders in den Webkit-Browser Chrome und Safari werden
  Input-Felder gehighlightet wenn man sie gerade fokussiert. Das kann bei dem
  ein oder anderen Projekt nerven. Im folgenden Bild seht ihr ein Beispiel:


  Um das Ganze nun via CSS einfach zu umgeben reicht folgender Code schon aus: 

  input:focus {
      outline: none;
  }
   Das ist auch schon alles ;)
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

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#safari](/tag.html?tag=58&cHash=249b5c385c986fa78e566745fe29d251)[#chrome](/tag.html?tag=72&cHash=4fdcc1af68f38b817a4baef869e22590)[#css3](/tag.html?tag=78&cHash=8d28466279fde4e903373d7cd58c1dd0)[#focus](/tag.html?tag=79&cHash=ff1f7be7b2c511ba4aa218bf4b6b3661)[#input](/tag.html?tag=80&cHash=206b0773f41443825ace052868fe0598)[#webkit-border](/tag.html?tag=81&cHash=5a2716547a9c4b7db20912525e730059)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Mar 2012

In vielen Browser, besonders in den Webkit-Browser Chrome und Safari werden Input-Felder gehighlightet wenn man sie gerade fokussiert. Das kann bei dem ein oder anderen Projekt nerven. Im folgenden Bild seht ihr ein Beispiel:

[![](http://andreknieriem.de/wp-content/uploads/2012/03/chrome-firefox-input-focus.png "chrome-firefox-input-focus")](http://andreknieriem.de/wp-content/uploads/2012/03/chrome-firefox-input-focus.png)

Um das Ganze nun via CSS einfach zu umgeben reicht folgender Code schon aus:

```

input:focus {
    outline: none;
}
```

Das ist auch schon alles ;)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
    
    [André Knieriem](http://www.andreknieriem.de)
    
    Hallo, den Code musst du einfach in deine CSS-Datei einfügen und dann sollte es klappen.  
      
    Grüße Andre
    
    02\. Dec 2012 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ec5dd68ababcaee910ebdb4c01b2d946?s=75&d=mm&r=g)
    
    withoutatrac3
    
    Hallo.  
      
    Wo muss ich diesen Kode eingeben? Bitte sehr einfach erklährt, danke =)  
      
    Gruß
    
    02\. Dec 2012 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.