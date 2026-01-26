---
title: Führende Nullen bei CSV-Export behalten
date: '2013-06-21T06:49:54.000Z'
slug: fuehrende-nullen-bei-csv-export-behalten
tags:
  - '41'
  - '191'
  - '192'
  - '193'
  - '194'
  - '195'
description: >-
  Damit Excel die führenden Nullen bei CSV Dateien nicht entfernt, muss man
  während der Generierung der CSV-Datei einfach folgendes beachten: 

  "Kommentar","Nummer","Nummer2"

  "Führende Nullen werden nicht angezeigt","0001233456","04252"
   Die einfachste Methode ist ein = vor die Zahl zu setzen. Siehe folgendes Beispiel. 
  "Kommentar","Nummer","Nummer2"

  "Führende Nullen werden nicht angezeigt",="0001233456",="04252"
   Ich hoffe, dass hilft einigen von euch Excel daran zu hindern, die führenden Nullen zu verschlingen.
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Führende Nullen bei CSV-Export behalten

#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 7 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#behalten](/tag.html?tag=191&cHash=c85b1d5608464dc3670bc1294a893cc2)[#csv](/tag.html?tag=192&cHash=9b2c05f92aab6997229f34bfdfee7233)[#leading zeros](/tag.html?tag=193&cHash=aa7a96702563dcc1a106a8b28aea1fef)[#nullen](/tag.html?tag=194&cHash=089fb90fc38fec7c3219ef6b219f613a)[#retain](/tag.html?tag=195&cHash=cff9ca41d2d515fa1cb82b102adcd7d1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Jun 2013

Damit Excel die führenden Nullen bei CSV Dateien nicht entfernt, muss man während der Generierung der CSV-Datei einfach folgendes beachten:

```

"Kommentar","Nummer","Nummer2"
"Führende Nullen werden nicht angezeigt","0001233456","04252"
```

Die einfachste Methode ist ein = vor die Zahl zu setzen. Siehe folgendes Beispiel.

```

"Kommentar","Nummer","Nummer2"
"Führende Nullen werden nicht angezeigt",="0001233456",="04252"
```

Ich hoffe, dass hilft einigen von euch Excel daran zu hindern, die führenden Nullen zu verschlingen.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/c6f2a43d135faa0c0761494b44093075?s=75&d=mm&r=g)
    
    Susan
    
    VIELEN DANK !! Dies ist der erste und einzige praktikable, funktionierende und automatisiert umsetzbare Hinweis zu diesem Problem, den ich in aufwendigen Suchen im Internet gelesen habe. Ich habe sehr viele Skripte jetzt entsprechend angepasst.
    
    20\. Mar 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/1ec62ef02fb7fc57c82f17bcea0cbdce?s=75&d=mm&r=g)
    
    Dirk Tepe
    
    Bin begeistert. Suche schon lange nach einer Ideallösung. Diese kommt meinem Ideal sehr nahe. Danke!
    
    09\. Feb 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/47a5793374bf9996d65859f95a3d4e85?s=75&d=mm&r=g)
    
    Joke
    
    lange gesucht, danke!
    
    01\. Jun 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a330568be105d6f4d9b015de489be6a2?s=75&d=mm&r=g)
    
    Franz
    
    Spitzen Tip, Danke!
    
    23\. Apr 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/fe5f68f8ee04e118b9516275fc0be767?s=75&d=mm&r=g)
    
    Martin.Zielonka
    
    Danke!
    
    02\. Aug 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/fc7e7628adaf26d000fee897c702627b?s=75&d=mm&r=g)
    
    Stern
    
    Mehrere Jahre gesuchte Tipp endlich gefunden! Danke!
    
    13\. Aug 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/49da000cdf463e4916622ad7219d65ca?s=75&d=mm&r=g)
    
    Johannes
    
    Super Tipp. Danke! Das hilft mir auch bei der Erstellung einer Datenzusammenführung in InDesign. Die CSV wurde im OpenOffice erstellt und das hat auch immer die führenden Nullen nicht mehr angezeigt. Schreibt man jetzt im Feld Durchwahl nicht 07 sondern ="07", wird die 07 auch im InDesign korrekt angezeigt.
    
    05\. Apr 2016 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.