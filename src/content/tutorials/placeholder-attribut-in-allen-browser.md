---
title: Placeholder Attribut in allen Browser
date: '2012-04-20T13:05:28.000Z'
slug: placeholder-attribut-in-allen-browser
tags:
  - script
  - jquery
  - javascript
  - html
  - ie
  - internet explorer
  - placeholder
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
demo_url: null
download_url: null
---

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