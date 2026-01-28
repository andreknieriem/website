---
title: Einen Weiterlesen/Read-More Link bei Wordpress the_excerpt einfügen
date: '2013-10-09T11:44:46.000Z'
slug: einen-weiterlesenread-more-link-bei-wordpress-the-excerpt-einfuegen
tags:
  - '11'
  - '210'
  - '211'
  - '212'
  - '213'
  - '214'
description: "Ich sitze gerade an einem neuen Projekt und brauchte einen Read-More Link bei meinen Vorschautexten (excerpts). Das Ganze lässt sich relativ einfach via functions.php ergänzen.\nDafür einfach folgenden Code einfügen: \n\n// Excerpt Read More Link einbauen\nfunction new_excerpt_more($more) {\n\tglobal $post;\n\treturn '… &lt;a href=\"'. get_permalink($post-&gt;ID) . '\"&gt;' . 'Weiterlesen' . '&lt;/a&gt;';\n}\nadd_filter('excerpt_more', 'new_excerpt_more');\n\n Das wars auch schon! Man kann das Ganze natürlich nach belieben anpassen, Klassen ergänzen oder sogar Sprachabhängig das weiterlesen machem, aber das sei jedem selbst überlassen.\nWeitere Infos gibt es auch hier:\nWordress Doku"
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Wordpress

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 10 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#add](/tag.html?tag=210&cHash=3ba43bb3febe1e8d4e2be7db000fc0e6)[#functions](/tag.html?tag=211&cHash=bff81af22a8cca726548715ee64f36ee)[#hinzufügen](/tag.html?tag=212&cHash=704e38a4f30f84642baf8f6bb4603c5a)[#readmore](/tag.html?tag=213&cHash=f04f434d0b03dba6e9505e2f67771229)[#weiterlesen](/tag.html?tag=214&cHash=5a58114490494c4d7e429269add9d375)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Oct 2013

Ich sitze gerade an einem neuen Projekt und brauchte einen Read-More Link bei meinen Vorschautexten (excerpts). Das Ganze lässt sich relativ einfach via **functions.php** ergänzen.

Dafür einfach folgenden Code einfügen:

```


// Excerpt Read More Link einbauen
function new_excerpt_more($more) {
	global $post;
	return '… <a href="'. get_permalink($post->ID) . '">' . 'Weiterlesen' . '</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');

```

Das wars auch schon! Man kann das Ganze natürlich nach belieben anpassen, Klassen ergänzen oder sogar Sprachabhängig das weiterlesen machem, aber das sei jedem selbst überlassen.

Weitere Infos gibt es auch hier:

[Wordress Doku](http://codex.wordpress.org/Customizing_the_Read_More)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/c822c1b63853ed273b89687ac505f9fa?s=75&d=mm&r=g)
    
    Flo
    
    Hi Andre,  
    finde dein Snippet echt gut, aber wie gebe ich den button im front-end aus? Es muss doch noch Code für die index.php geben
    
    13\. Jan 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/0f6ddac39adfe8dd7966100d9393e2e5?s=75&d=mm&r=g)
    
    [the vegan travelers](http://www.the-vegan-travelers.com/)
    
    Danke für den interessanten Artikel. Wir bloggen bei uns über verschiedene Städte und gerade als wir jetzt über Porto bloggen wollen, merken wir, dass der Artikel sehr lang wird. Gibt es bei WordPress eine sinnvolle Möglichkeit, lange Artikel irgendwie aufzuteilen? Dafür ist der „Weiterlesen“ Tag vermutlich nicht geeignet, oder?
    
    26\. Jun 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/362ed34c396cf04ff7b14dc53aa67bb8?s=75&d=mm&r=g)
    
    [Lothar](http://schliess-anlagen.de)
    
    Super Beitrag - habe den Code eingefügt und die Weiterlesen-Tags funktionieren.  
    Habe das RT-Theme 19, da funktioniert es von Haus aus nicht.
    
    11\. Aug 2016 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/4f152e8c8b28660376cd4ffa3718e4b1?s=75&d=mm&r=g)
    
    [Vanessa](http://freuleinlinka.de)
    
    Hallo André, danke für das Tutorial hat super bei mir geklappt. Ich hätte aber noch eine Frage:ist es möglich noch einen Zeilenumbruch einzufügen sodass das Wort Weiterlesen nicht direkt nach dem letzten Buchstaben kommt sonder eine oder sogar zwei Zeilen tiefer? Ist vielleicht eine blöde Frage aber ich bin Neuling was html angeht.
    
    06\. Mar 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Vanessa,  
          
        natürlich kann man die Ausgabe dementsprechend anpassen.  
          
        Du machst einfach an die Stelle mit return '... <a href....' ein return '<p><a href....'  
          
          
        draus und der Link wird in einem P-Tag unterhalb angezeigt.  
          
        Natürlich musst du das P-Tag auch am ende hinter dem a wieder schließen
        
        08\. Mar 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a8188e7345a7090a4ee7609ab8c74329?s=75&d=mm&r=g)
    
    [Severin](https://delucks.com)
    
    Danke für das Tutorial! Hast du auch einen Aufruf, um den Read More-Link mehrsprachig mit entsprechendem Platzhalter für die Language-Files einzufügen?
    
    04\. Jan 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Severin, ja klar ist das möglich. Je nachdem wie du die Langfiles einbindest dann einfach anstelle  
          
        '<a href="'. get\_permalink($post- rel="nofollow">ID) . '">' . 'Weiterlesen' . '</a>'  
          
        '<a href="'. get\_permalink($post- rel="nofollow">ID) . '">' . \_\_('readmore','themename'). '</a>'  
          
        Grüße  
        André
        
        04\. Jan 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
            
            [Andre Knieriem](http://andreknieriem.de)
            
            Entschuldige, aber Wordpress ersetzt die Zeichen alle total nervig!
            
            04\. Jan 2016 [Antworten](#)
            

*   ![](https://www.gravatar.com/avatar/ae7e80ba28f909edad3b2c61d8c2b62c?s=75&d=mm&r=g)
    
    eMKa
    
    Hallo André,  
    ich finde es immer guten Stil, wenn man seine Fundstücke kennzeichnet mit Quelle. (http://codex.wordpress.org/Customizing\_the\_Read\_More)  
      
    So kann der geneigte Leser auch die zusätzlichen Informationen lesen.  
      
    Grüße  
    eMKa
    
    16\. Oct 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hallo, ich hab es zwar nicht dort gefunden, sondern in einem Template, aber danke für den Link, werde ich ergänzen
        
        16\. Oct 2013 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.