---
title: Markieren mit der Maus an bestimmten Stellen verhindern
date: '2012-12-12T07:28:02.000Z'
slug: markieren-mit-der-maus-an-bestimmten-stellen-verhindern
tags:
  - '20'
  - '69'
  - '148'
  - '149'
  - '150'
  - '151'
  - '152'
description: >-
  Ich arbeite gerade an einer Webseite die via Drag Scrollbar ist und mich
  nervte es tierisch, dass ich ziemlich oft etwas markierte. Mit der folgenden
  Kleinen jQuery Funktion lässt sich dieses verhalten jedoch abschalten. 

  jQuery.fn.extend({
          disableSelection : function() {
                  return this.each(function() {
                          this.onselectstart = function() { return false; };
                          this.unselectable = "on";
                          jQuery(this).css('user-select', 'none');
                          jQuery(this).css('-o-user-select', 'none');
                          jQuery(this).css('-moz-user-select', 'none');
                          jQuery(this).css('-khtml-user-select', 'none');
                          jQuery(this).css('-webkit-user-select', 'none');
                  });
  return this;
          }
  });


  // So nutzt man die Funktion

  $('#theDiv').disableSelection();
   
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#abstellen](/tag.html?tag=148&cHash=191c12c6a10bfab1e9bbbeab629fd5d5)[#markieren](/tag.html?tag=149&cHash=2713a31dfcf7096ea536411704a12b10)[#prevent highlighting](/tag.html?tag=150&cHash=9fa56ef731905d09c896c65467da8608)[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#verhindern](/tag.html?tag=152&cHash=7d0196074d707de0fb7fc30a2fe75fe8)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Dec 2012

Ich arbeite gerade an einer Webseite die via Drag Scrollbar ist und mich nervte es tierisch, dass ich ziemlich oft etwas markierte. Mit der folgenden Kleinen jQuery Funktion lässt sich dieses verhalten jedoch abschalten.

```

jQuery.fn.extend({
        disableSelection : function() {
                return this.each(function() {
                        this.onselectstart = function() { return false; };
                        this.unselectable = "on";
                        jQuery(this).css('user-select', 'none');
                        jQuery(this).css('-o-user-select', 'none');
                        jQuery(this).css('-moz-user-select', 'none');
                        jQuery(this).css('-khtml-user-select', 'none');
                        jQuery(this).css('-webkit-user-select', 'none');
                });
return this;
        }
});

// So nutzt man die Funktion
$('#theDiv').disableSelection();
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/5be435fb7af39ddc316546425408a7bc?s=75&d=mm&r=g)
    
    Jörg Kreusel
    
    Super kleiner Schnipsel, hat mir sehr geholfen. Vielen Dank :-)
    
    27\. Feb 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Jörg, freut mich, dass ich dir helfen konnte.  
        Grüße André
        
        27\. Feb 2019 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.