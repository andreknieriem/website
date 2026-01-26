---
title: Eltern-Funktionen im Kindtheme (child-theme) bei Wordpress überschreiben
date: '2013-09-05T06:30:19.000Z'
slug: eltern-funktionen-im-kindtheme-child-theme-bei-wordpress-ueberschreiben
tags:
  - '11'
  - '41'
  - '176'
  - '177'
  - '178'
  - '179'
  - '180'
  - '181'
description: >-
  Wenn man ein Theme nutzt, dass man ein wenig bearbeiten möchte, kommt man
  nicht drumrum ein Child-Theme zu erstellen. Hat man dieses nun erstellt und
  möchte Funktionen des Eltern-Themes überschreiben geht das am besten
  folgendermaßen:

  - Die Funktion aus dem Parent-Theme komplett kopieren und in die functions.php
  des Child-Themes einfügen.

  - Die Funktion unbenennen - am besten mit child_ vor dem funktionsnamen

  - Die Funktion so abändern wie gewünscht

  - Die alte Funktion deaktivieren

  - Die neue Funktion aktivieren

  Die alte Funktion deaktivieren

  Um eine Funktion zu deaktivieren muss man die "Action" entfernen. Das Ganze
  sollte beim initialisern des Templates passieren. Das Ganze geht dann so:
  (Beispiel "thematic" Theme) 

  // Remove the default Thematic blogtitle function

  function remove_thematic_actions() {
      remove_action('thematic_header','thematic_blogtitle',3);
  }

  // Call 'remove_thematic_actions' (above) during WP initialization

  add_action('init','remove_thematic_actions');
   Die neue Funktion aktivieren
  Nun müssen wir die neue Funktion nur noch aufrufen. Das Ganze geht dann wie
  folgt: 

  add_action('thematic_header','child_thematic_blogtitle', 3);
   Ich hoffe, dass das einigen von euch helfen wird!
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Eltern-Funktionen im Kindtheme (child-theme) bei Wordpress überschreiben

#Tutorials#Wordpress

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#child](/tag.html?tag=176&cHash=cee08fec4054bdace1cb309675352954)[#eltern](/tag.html?tag=177&cHash=03cad7b825c5368348e51aeba5d46aec)[#override](/tag.html?tag=178&cHash=77078223c6977994f9dba2703aa91f13)[#parent](/tag.html?tag=179&cHash=924016907749572ae70f92a889898dc9)[#theme](/tag.html?tag=180&cHash=de3598696a32fe48672a61f23cfd6152)[#überschreiben](/tag.html?tag=181&cHash=ee4d7c649f657d193097e198bd5a04d4)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

05\. Sep 2013

Wenn man ein Theme nutzt, dass man ein wenig bearbeiten möchte, kommt man nicht drumrum ein Child-Theme zu erstellen. Hat man dieses nun erstellt und möchte Funktionen des Eltern-Themes überschreiben geht das am besten folgendermaßen:

\- Die Funktion aus dem Parent-Theme komplett kopieren und in die functions.php des Child-Themes einfügen.

\- Die Funktion unbenennen - am besten mit child\_ vor dem funktionsnamen

\- Die Funktion so abändern wie gewünscht

\- Die alte Funktion deaktivieren

\- Die neue Funktion aktivieren

**Die alte Funktion deaktivieren**

Um eine Funktion zu deaktivieren muss man die "Action" entfernen. Das Ganze sollte beim initialisern des Templates passieren. Das Ganze geht dann so: (Beispiel "thematic" Theme)

```

// Remove the default Thematic blogtitle function
function remove_thematic_actions() {
    remove_action('thematic_header','thematic_blogtitle',3);
}
// Call 'remove_thematic_actions' (above) during WP initialization
add_action('init','remove_thematic_actions');
```

**Die neue Funktion aktivieren**

Nun müssen wir die neue Funktion nur noch aufrufen. Das Ganze geht dann wie folgt:

```

add_action('thematic_header','child_thematic_blogtitle', 3);
```

Ich hoffe, dass das einigen von euch helfen wird!

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a807a79b4f3701518b3fb308b7a292bd?s=75&d=mm&r=g)
    
    Jürgen
    
    Wenn die child\_foo\_function aber im Template aufgerufen wird und einen Rückgabewert liefern soll, müssen alle Dateien mit solchen Aufrufen auch im Child Theme entsprechen überschrieben werden. Gibt es dazu auch eine elegante Lösung?
    
    17\. Feb 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/41c4a24fd5011223925e65384ccd783d?s=75&d=mm&r=g)
        
        [alexwatermann](www.technik-tipps-und-tricks.de)
        
        Actions liefern im Normalfall keinen Rückgabewert. Das tun die Filter. Also remove\_filter(...) und add\_filter(...) nutzen.
        
        20\. Jul 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/4ee9530e41979d849035f84d78271e4e?s=75&d=mm&r=g)
    
    [Ayna](http://www.ayna-modelleri.com)
    
    Bin ihnen für die Informationen dankbar.
    
    05\. Feb 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/0f565699711b8bb96ebc1cb62e56ea7f?s=75&d=mm&r=g)
    
    Irmen
    
    Vielen Dank - hilft mir sehr!!!
    
    01\. Jun 2015 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.