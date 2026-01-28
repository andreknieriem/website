---
title: Versteckte Dateien am Mac einblenden oder ausblenden
date: '2013-10-14T04:34:21.000Z'
slug: versteckte-dateien-am-mac-einblenden-oder-ausblenden
tags:
  - '50'
  - '132'
  - '133'
  - '220'
  - '221'
  - '222'
description: >-
  Um beim Mac versteckte Dateien wie zum Beispiel die .htaccess Datei sehen zu
  können muss man den Terminal (Unter Programme/Dienstprogramme) aufrufen und
  folgende Codezeilen eingeben: 

  defaults write com.apple.finder AppleShowAllFiles TRUE
   Danach muss der Finder neu gestartet werden, damit die Einstellung auch funktioniert: 
  killall Finder
   Möchte man das Ganze wieder ausstellen, weil einen die ganzen .dstore Dateien nerven geht das wie folgt: 
  defaults write com.apple.finder AppleShowAllFiles FALSE

  killall Finder
   
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#mac](/tag.html?tag=50&cHash=36425e62b17f3af7d542222d4b9d6ae1)[#ausblenden](/tag.html?tag=132&cHash=0cb09d111500889fb95e0aa2cc85bbe0)[#einblenden](/tag.html?tag=133&cHash=b29acd219afd305ceacadca229e7ad6e)[#finder](/tag.html?tag=220&cHash=54fc5bcf49080fe0d1bcfe8a4d13b02e)[#hack](/tag.html?tag=221&cHash=c9fa72673ee533566f93c58983a3781b)[#versteckte dateien](/tag.html?tag=222&cHash=e95bcf333ddf6fa4c21cbf8e8d729d4a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

14\. Oct 2013

Um beim Mac versteckte Dateien wie zum Beispiel die .htaccess Datei sehen zu können muss man den Terminal (Unter Programme/Dienstprogramme) aufrufen und folgende Codezeilen eingeben:

defaults write com.apple.finder AppleShowAllFiles TRUE

Danach muss der Finder neu gestartet werden, damit die Einstellung auch funktioniert:

killall Finder

Möchte man das Ganze wieder ausstellen, weil einen die ganzen .dstore Dateien nerven geht das wie folgt:

defaults write com.apple.finder AppleShowAllFiles FALSE
killall Finder

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/c7ca98146e23455bea4e9e0607617242?s=75&d=mm&r=g)
    
    [Bernd](http://randomblocks.net)
    
    Knackiger, kurz und verständlich. Gefällt mir. Weiter so.
    
    07\. Jan 2014 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.