---
title: jQuery UI Datepicker - Daten nicht anwählbar/verfügbar machen
date: '2013-01-08T06:15:06.000Z'
slug: jquery-ui-datepicker-daten-nicht-anwaehlbarverfuegbar-machen
tags:
  - '69'
  - '154'
  - '155'
  - '156'
  - '157'
  - '158'
description: >-
  Möchte man einen Datepicker benutzen kommt man ziemlich schnell auf den, der
  bei jQuery UI eingebaut. Der Datepicker ist schön, flexibel und funktioniert
  browserübergreifend. Ich brauchte ihn allerdings in Verbindung mit einem
  Buchungssystem. Der Datepicker bietet eine Funktion an, die aufgerufen wird,
  bevor die Tage angezeigt werden. Diese heißt "beforeShowDay". Ich habe hier
  eine kleine Funktion, die nun alle Daten ausblendet, die nicht verfügbar sind.
  Diese Daten müssen im JSON Format vorliegen. 

  var unavailableDates = ["09-05-2011","14-05-2011","15-05-2011"];


  function unavailable(date) {
    dmy = ('0' + date.getDate()).slice(-2) + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + date.getFullYear();
    if ($.inArray(dmy, unavailableDates) &lt; 0) {
      return [true,"","Buche Jetzt"];
    } else {
      return [false,"","Ausgebucht"];
    }
  }


  $('#iDate').datepicker({ beforeShowDay: unavailable });
   Die Funktion guckt, ob in dem gerade angezeigten Monat Daten liegen, die nicht verfügbar sind und gibt dann false zurück.
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# jQuery UI Datepicker - Daten nicht anwählbar/verfügbar machen

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#buchungssystem](/tag.html?tag=154&cHash=36621c112e5a4e9819e4abc7d7c6904f)[#datepicker](/tag.html?tag=155&cHash=aaaa5e18ed333d796aacedd91f78b515)[#jquery ui](/tag.html?tag=156&cHash=6db363651e9ac4c6630fa36bad5d1184)[#unavailabled](/tag.html?tag=157&cHash=bad9b7b2a573f276fdf9620e007df478)[#unverfügbar](/tag.html?tag=158&cHash=b5b32351581315986a7fd125527506ad)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Jan 2013

Möchte man einen Datepicker benutzen kommt man ziemlich schnell auf den, der bei [jQuery UI](http://jqueryui.com/) eingebaut. Der Datepicker ist schön, flexibel und funktioniert browserübergreifend. Ich brauchte ihn allerdings in Verbindung mit einem Buchungssystem. Der Datepicker bietet eine Funktion an, die aufgerufen wird, bevor die Tage angezeigt werden. Diese heißt "**beforeShowDay**". Ich habe hier eine kleine Funktion, die nun alle Daten ausblendet, die nicht verfügbar sind. Diese Daten müssen im JSON Format vorliegen.

```

var unavailableDates = ["09-05-2011","14-05-2011","15-05-2011"];

function unavailable(date) {
  dmy = ('0' + date.getDate()).slice(-2) + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + date.getFullYear();
  if ($.inArray(dmy, unavailableDates) < 0) {
    return [true,"","Buche Jetzt"];
  } else {
    return [false,"","Ausgebucht"];
  }
}

$('#iDate').datepicker({ beforeShowDay: unavailable });
```

Die Funktion guckt, ob in dem gerade angezeigten Monat Daten liegen, die nicht verfügbar sind und gibt dann false zurück.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/d976d18247e1893f601f34a5e9d8b1d9?s=75&d=mm&r=g)
    
    [Oliver](http://www.miet-mich-holdorf.de)
    
    Ok, das habe ich soweit hinbekommen, danke!!!  
      
    Jetzt habe ich aber noch eine Frage. Kann man auch ein Datumsbereich (z.B. Ferien) angeben oder dürfen es immer nur einzelne Tage sein?  
      
    Gruß, Oliver
    
    06\. May 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Oliver, das geht auch, allerdings brauchst du vorher halt ein Array mit allen Daten. Willst du nun Ferien haben, kannst du dir ja eine For-Schleife bauen, die alle Tage von Anfang bis Ende in ein Array pushed. Könnte so aussehen (Ist nur gegoogelt und nicht getestet)  
        \[code\]  
        function getDates(startDate, stopDate) {  
        var dateArray = new Array();  
        var currentDate = startDate;  
        while (currentDate
        
        06\. May 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/d976d18247e1893f601f34a5e9d8b1d9?s=75&d=mm&r=g)
    
    [Oliver Labs](http://www.miet-mich-holdorf.de)
    
    Jetzt mal ganz dumm nachgefragt. Wo muss ich den Code denn einfügen?  
    In die "jquery-ui-1.10.4.js"?? Wenn ja, an welche stelle?  
    Sorry, aber ich kenne mich da nicht so gut aus!  
      
    Gruß,  
    Oliver
    
    05\. May 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hallo Oliver, du hast ja bestimmt eine eigene Js Datei oder direkt im Script Bereich der Seite das Script, dass den Datepicker startet, oder? Wenn ja, dann muss der Code genau an diese Stelle, also nachdem du jqueryui geladen hast. Die letzte Zeile initiert ja den Datepicker.  
          
        Grüße
        
        05\. May 2014 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.