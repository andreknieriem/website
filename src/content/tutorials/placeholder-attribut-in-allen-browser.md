---
title: Placeholder Attribut in allen Browser
date: '2012-04-20T13:05:28.000Z'
slug: placeholder-attribut-in-allen-browser
tags:
  - '4'
  - '20'
  - '69'
  - '85'
  - '86'
  - '87'
  - '88'
description: >-
  Das Placeholder Attribut, dass HTML5 mit sich bringt ist ein tolles Feature.
  Nur leider funktioniert das Attribut nicht auf allen Browsern. Vor allem nicht
  auf dem Internet Explorer.

  Ein Placeholder zu setzen ist denkbar einfach: 

  &lt;input type="text" placeholder="Ich bin ein Placeholder"/&gt;
   Um alten Browsern und dem IE die Sache auch beizubringen muss nur folgendes Script in die Seite eingebunden werden. Dank geht an Jack Moore, der das Script geschrieben hat. Man kann es noch verfeinern, dass es auch vernünftig mit Passwort-Felder funktionert. 
  &lt;script&gt;
      // placeholder polyfill
      $(document).ready(function(){
          function add() {
              if($(this).val() == ''){
                  $(this).val($(this).attr('placeholder')).addClass('placeholder');
              }
          }

          function remove() {
              if($(this).val() == $(this).attr('placeholder')){
                  $(this).val('').removeClass('placeholder');
              }
          }

          // Create a dummy element for feature detection
          if (!('placeholder' in $('&lt;input&gt;')[0])) {

              // Select the elements that have a placeholder attribute
              $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);

          // Remove the placeholder text before the form is submitted
              $('form').submit(function(){
                  $(this).find('input[placeholder], textarea[placeholder]').each(remove);
              });
          }
      });
  &lt;/script&gt;
   
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 6 Kommentare](#comments)

* * *

### Tags

[#script](/tag.html?tag=4&cHash=416a5a23b8b12757b9727b97f4cbcd33)[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#html](/tag.html?tag=85&cHash=91a7ea3a6587e1d4fa3e5c908a161193)[#ie](/tag.html?tag=86&cHash=759b348c57928fea01a7cffef340e851)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#placeholder](/tag.html?tag=88&cHash=a537ee12272f49da50adead6de0ffd3a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. Apr 2012

Das Placeholder Attribut, dass HTML5 mit sich bringt ist ein tolles Feature. Nur leider funktioniert das Attribut nicht auf allen Browsern. Vor allem nicht auf dem Internet Explorer.

Ein Placeholder zu setzen ist denkbar einfach:

```

<input type="text" placeholder="Ich bin ein Placeholder"/>
```

Um alten Browsern und dem IE die Sache auch beizubringen muss nur folgendes Script in die Seite eingebunden werden. Dank geht an Jack Moore, der das Script geschrieben hat. Man kann es noch verfeinern, dass es auch vernünftig mit Passwort-Felder funktionert.

```

<script>
    // placeholder polyfill
    $(document).ready(function(){
        function add() {
            if($(this).val() == ''){
                $(this).val($(this).attr('placeholder')).addClass('placeholder');
            }
        }

        function remove() {
            if($(this).val() == $(this).attr('placeholder')){
                $(this).val('').removeClass('placeholder');
            }
        }

        // Create a dummy element for feature detection
        if (!('placeholder' in $('<input>')[0])) {

            // Select the elements that have a placeholder attribute
            $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);

        // Remove the placeholder text before the form is submitted
            $('form').submit(function(){
                $(this).find('input[placeholder], textarea[placeholder]').each(remove);
            });
        }
    });
</script>
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/ec4257610a695f17eb4e8be247f8e1b9?s=75&d=mm&r=g)
    
    [Shardy](http://www.test.com/)
    
    You've got a great blog here well done congratulations
    
    06\. Mar 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Thanks!
        
        06\. Mar 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/cd958894f47283937967d3c843b1b933?s=75&d=mm&r=g)
    
    felix
    
    Hi,  
      
    ich hab eine Seite per iframe eingebunden, in der das Formular ist. Da scheint es nicht zu funktionieren, macht das Sinn oder muss das an was anderem liegen?  
      
    Gruß
    
    31\. Jan 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Ne das Javascript wird einmal beim Laden der Seite gesetzt. Das iFrame wird danach geladen und somit hat das JS keinerlei Einfluss darauf. Ich weiß auch nicht, ob es möglich ist, Sachen in einem iFrame zu bearbeiten.
        
        01\. Feb 2013 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c89828cf2f935ee8e4aef9aa5aab1626?s=75&d=mm&r=g)
    
    Christian
    
    Super, genau das habe ich gesucht.... merci vielmal... Gruss aus der Schweiz  
    ChriSStian
    
    10\. Jan 2013 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hey Christion, schön wenn ich dir helfen konnte :)
        
        15\. Jan 2013 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.