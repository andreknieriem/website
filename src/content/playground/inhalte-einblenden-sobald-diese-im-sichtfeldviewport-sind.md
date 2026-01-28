---
title: Inhalte einblenden, sobald diese im Sichtfeld/Viewport sind
date: '2016-09-02T22:00:00.000Z'
slug: inhalte-einblenden-sobald-diese-im-sichtfeldviewport-sind
tags:
  - '892'
  - '231'
  - '61'
  - '69'
  - '893'
  - '234'
  - '894'
description: "In diesem Playground stelle ich vor, was man mit ein wenig CSS und jQuery machen kann um eine Seite aufzuwerten. Einem Benutzer gefällt es immer, wenn sich eine Webseite individuell anpasst. Allerdings darf man die Animationen natürlich nicht übertreiben oder sogar so weit treiben, dass sie dem User eher als Nachteil angesehen wird.\r\nSobald das CSS eingebunden ist, braucht man nur die Klassen für die Richtungen an die Elemente setzen, die man animieren möchte. Das jQuery Plugin Appear&nbsp;wird benutzt um zu gucken, ob ein Element im Viewport ist und setzt dann die benötigte Klasse um die CSS Animation zu starten.&nbsp;\r\nViel Spaß mit dem Playground.\r\nNachtrag:Ich werde noch ein Tutorial schreiben, in dem ich alle Funktionsweisen und den Code erkläre."
image: /fileadmin/Daten/Bilder/Playground/animatedscrollthumb.jpg
---


Auf den folgenden Seiten habe ich kleine Demos und Code-Snippets aufbereitet, die schöne Ergänzungen und Anregungen für verschiedene Website-Komponenten zeigen.



#Playground#jQuery#CSS

* * *

![](/fileadmin/Daten/Bilder/Playground/animatedscrollthumb.jpg)

### Kommentare

[Es gibt 12 Kommentare](#comments)

* * *

### Tags

[#scroll](/tag.html?tag=61&cHash=5a73bee04896e919a772699d1f0b0bcd)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#animation](/tag.html?tag=231&cHash=ed19e0c23aa4a4f07a9af996e351573b)[#fadein](/tag.html?tag=234&cHash=2ffe9de9f7f5beb4ce1865b232717212)[#appear](/tag.html?tag=892&cHash=dd7e927b71bc29aebf348f661b870327)[#inview](/tag.html?tag=893&cHash=c2a9f6eba5aac55618f2a406b6adb75f)[#slidein](/tag.html?tag=894&cHash=67742a4ef92c147c9c58ed61a21ff561)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

![](/fileadmin/_processed_/f/2/csm_animatedscroll_f3aa1f49e7.jpg)

[Demo](http://andrerinas.de/fileadmin/Daten/Playground/AnimateContentScroll/)[Download](http://andrerinas.de/fileadmin/Daten/Downloads/AnimateContentScroll.zip)

03\. Sep 2016

In diesem Playground stelle ich vor, was man mit ein wenig CSS und jQuery machen kann um eine Seite aufzuwerten. Einem Benutzer gefällt es immer, wenn sich eine Webseite individuell anpasst. Allerdings darf man die Animationen natürlich nicht übertreiben oder sogar so weit treiben, dass sie dem User eher als Nachteil angesehen wird.

Sobald das CSS eingebunden ist, braucht man nur die Klassen für die Richtungen an die Elemente setzen, die man animieren möchte. Das jQuery Plugin [Appear](https://github.com/morr/jquery.appear "Opens internal link in current window") wird benutzt um zu gucken, ob ein Element im Viewport ist und setzt dann die benötigte Klasse um die CSS Animation zu starten. 

Viel Spaß mit dem Playground.

**Nachtrag:**  
Ich werde noch ein Tutorial schreiben, in dem ich alle Funktionsweisen und den Code erkläre.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/5bff3bd50320ba66ac353b568aa5fb80?s=75&d=mm&r=g)
    
    [Magento Programmierer](https://www.andre-lanius.net)
    
    Bei ein paar meiner Magento Projekte konnte ich dies jetzt schon erfolgreich einsetzen. Funktioniert soweit auch ganz gut. :)
    
    24\. Sep 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Das freut mich :)
        
        24\. Sep 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/6e81165dc37ae48148840b1d814e259a?s=75&d=mm&r=g)
    
    [TYPO3 Freelancer](https://www.webworker-freelancer.de)
    
    Nach mehrmaligen Versuchen habe ich es nun endlich geschafft und dies in ein paar Webseiten eingebaut - auch mit dem genannten JS Plugin, damit die Animation entfernt wird, wenn das Element die Viewport verlässt. Danke nochmal an dieser Stelle. :-)
    
    23\. Jan 2020 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, wenn ich helfen konnte ;)
        
        24\. Jan 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/6e81165dc37ae48148840b1d814e259a?s=75&d=mm&r=g)
    
    [TYPO3 Programmierer](https://www.typo3-programmierer.net)
    
    Hallo,  
    ich habe es mal lokal getestet und es funktioniert soweit ganz gut.  
    Wäre es möglich, sobald ein Element durch scrollen den Viewport verlässt, dass dann die Klasse "animated" wieder entfernt wird?
    
    19\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hey, mitlerweile gibt es ein JS Plugin, dass viel mehr Möglichkeiten bietet, eben auch dass die Animation zurückgesetzt wird, sobald das Element den ViewPort verlässt. Das benutze ich auch hier auf meiner Seite. Habe dafür auch die tt-content Tabelle erweitert und kann alle Einstellungen pro CE vornehmen und somit alle Animationen direkt anpassen.  
        Das JS Plugin findest du hier:  
        https://michalsnik.github.io/aos/  
        Grüße André
        
        19\. Feb 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/9c20072e37fe0164bf342b39df087295?s=75&d=mm&r=g)
    
    Thushi
    
    Hallo gib es ein tutorial für "Inhalte einblenden, sobald diese im Sichtfeld/Viewport sind" bei mir klappt das irgendwie nciht.  
    Danke
    
    08\. Jun 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/47164a6fc966f3c8c52fd4efd0b4231e?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Thushi,  
        das Tutorial gibt es noch nicht. Wenn ich Zeit habe, werde ich aber eins erstellen. Was klappt denn bei dir nicht?
        
        17\. Jun 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a7c86801375f95ca6d5df4bf89f02912?s=75&d=mm&r=g)
    
    Karl
    
    Coole Arbeit! Mir sind - neben den Animationen - aber auch vor allem die Bilder ins Auge gefallen. Woher kriegst du Bilder solcher Art?
    
    14\. Jan 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Karl, die Icons habe ich von der Seite https://icons8.com/  
          
        Grüße André
        
        15\. Jan 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d9ce477f178f2c3e181d2729d239a24b?s=75&d=mm&r=g)
    
    [IT Masters](https://www.it-masters.de/)
    
    Vielen Dank für diese Information. Sehr gelungener Beitrag. Grüße
    
    15\. Jul 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e10b48f6a92fb672667d98f13769b872?s=75&d=mm&r=g)
    
    [Mirco](https://mirco-pfefferle.de)
    
    Super Beiträge.  
    Wollte sowas schon vor langem anwenden ;)  
      
    Mirco
    
    06\. Mar 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.