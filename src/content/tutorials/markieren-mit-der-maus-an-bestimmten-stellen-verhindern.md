---
title: Markieren mit der Maus an bestimmten Stellen verhindern
date: '2012-12-12T07:28:02.000Z'
slug: markieren-mit-der-maus-an-bestimmten-stellen-verhindern
tags:
  - jquery
  - javascript
  - abstellen
  - markieren
  - prevent highlighting
  - select
  - verhindern
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
demo_url: null
download_url: null
---

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