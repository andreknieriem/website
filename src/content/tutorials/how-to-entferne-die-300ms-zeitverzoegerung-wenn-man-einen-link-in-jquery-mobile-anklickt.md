---
title: >-
  HOW TO: Entferne die 300ms Zeitverzögerung wenn man einen Link in JQuery
  Mobile anklickt
date: '2013-03-06T18:50:31.000Z'
slug: >-
  how-to-entferne-die-300ms-zeitverzoegerung-wenn-man-einen-link-in-jquery-mobile-anklickt
tags:
  - '20'
  - '62'
  - '172'
  - '173'
  - '174'
  - '175'
description: "Hier zeige ich euch, wie ihr die nervigen 300ms Zeitverzögerung umgeht, die in jQuerymobile alles träge wirken lassen.\n1.Erstellt eine Datei namens fastclick.js und fügt folgendes ein: \r\n         function FastButton(element, handler) {\r\n            this.element = element;\r\n            this.handler = handler;\r\n            element.addEventListener('touchstart', this, false);\r\n         };\r\n         FastButton.prototype.handleEvent = function(event) {\r\n            switch (event.type) {\r\n               case 'touchstart': this.onTouchStart(event); break;\r\n               case 'touchmove': this.onTouchMove(event); break;\r\n               case 'touchend': this.onClick(event); break;\r\n               case 'click': this.onClick(event); break;\r\n            }\r\n         };\r\n         FastButton.prototype.onTouchStart = function(event) {\r\n             event.stopPropagation();\r\n            this.element.addEventListener('touchend', this, false);\r\n            document.body.addEventListener('touchmove', this, false);\r\n            this.startX = event.touches[0].clientX;\r\n            this.startY = event.touches[0].clientY;\r\n isMoving = false;\r\n         };\r\n         FastButton.prototype.onTouchMove = function(event) {\r\n            if(Math.abs(event.touches[0].clientX - this.startX) &gt; 10 || Math.abs(event.touches[0].clientY - this.startY) &gt; 10) {\r\n               this.reset();\r\n            }\r\n         };\r\n         FastButton.prototype.onClick = function(event) {\r\n            this.reset();\r\n            this.handler(event);\r\n            if(event.type == 'touchend') {\r\n               preventGhostClick(this.startX, this.startY);\r\n            }\r\n         };\r\n         FastButton.prototype.reset = function() {\r\n            this.element.removeEventListener('touchend', this, false);\r\n            document.body.removeEventListener('touchmove', this, false);\r\n         };\r\n         function preventGhostClick(x, y) {\r\n            coordinates.push(x, y);\r\n            window.setTimeout(gpop, 2500);\r\n         };\r\n         function gpop() {\r\n            coordinates.splice(0, 2);\r\n         };\r\n         function gonClick(event) {\r\n            for(var i = 0; i &lt; coordinates.length; i += 2) {\r\n               var x = coordinates[i];\r\n               var y = coordinates[i + 1];\r\n               if(Math.abs(event.clientX - x) &lt; 25 &amp;&amp; Math.abs(event.clientY - y) &lt; 25) {\r\n                  event.stopPropagation();\r\n                  event.preventDefault();\r\n               }\r\n            }\r\n         };\r\n         document.addEventListener('click', gonClick, true);\r\n         var coordinates = [];\r\n         function initFastButtons() {\r\n new FastButton(document.getElementById(\"fastclick\"), goSomewhere);\r\n         };\r\n         function goSomewhere() {\r\n var theTarget = document.elementFromPoint(this.startX, this.startY);\r\n if(theTarget.nodeType == 3) theTarget = theTarget.parentNode;\r\n\r\n var theEvent = document.createEvent('MouseEvents');\r\n theEvent.initEvent('click', true, true);\r\n theTarget.dispatchEvent(theEvent);\r\n         };\r\n 2. Nun in eurer jquery mobile index.html datei folgendes in den head-Bereich \r\n&lt;head&gt;\r\n &lt;!-- your css links go here --&gt;\r\n &lt;script src=\"scripts/jquery-1.6.4.min.js\"&gt;&lt;/script&gt;\r\n &lt;script src=\"scripts/jquery.mobile-1.0.1.min.js\"&gt;&lt;/script&gt;\r\n &lt;script src=\"scripts/phonegap-1.3.0.js\"&gt;&lt;/script&gt; &lt;!-- for us phonegap users --&gt;\r\n &lt;script src=\"scripts/fastclick.js\"&gt;&lt;/script&gt;\r\n&lt;link rel='stylesheet' id='nextgen_gallery_related_images-css'  href='http://andreknieriem.de/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/nextgen_gallery_display/static/nextgen_gallery_related_images.css?ver=3.7.1' type='text/css' media='all' /&gt;\r\n&lt;link rel='stylesheet' id='admin-bar-css'  href='http://andreknieriem.de/wp-includes/css/admin-bar.min.css?ver=3.7.1' type='text/css' media='all' /&gt;\r\n&lt;link rel='stylesheet' id='wpv_render_css-css'  href='http://andreknieriem.de/wp-content/plugins/wp-views/res/css/wpv-views-sorting.css?ver=3.7.1' type='text/css' media='all' /&gt;\r\n&lt;/head&gt;\r\n 3. Nun das Ganze beim Seitenladen aufrufen: \r\n&lt;body onload=\"initFastButtons();\"&gt;\r\n 4. Nun noch ein span mit der id \"fastclick\" um den kompletten body legen und fertig! \r\n&lt;body onload\"initFastButtons();\"&gt;\r\n&lt;span id=\"fastclick\"&gt;\r\n&lt;div data-role=\"page\" id=\"one\" style=\"overflow-x:hidden;\"&gt;\r\n &lt;div data-role=\"header\" data-id=\"myheader\" data-position=\"inline\"&gt;\r\n......\r\n\r\n\r\n&lt;/span&gt; &lt;!-- end fastclick --&gt;\r\n Fertig, nun sollte sich alles viel schneller und nativer anfühlen!\nOriginal code from this thread: https://forum.jquery.com/topic/google-s-fastbutton"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# HOW TO: Entferne die 300ms Zeitverzögerung wenn man einen Link in JQuery Mobile anklickt

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#anleitung](/tag.html?tag=172&cHash=f788a120d071683bedcf3bdf95f65466)[#app beschleunigen](/tag.html?tag=173&cHash=ff0c75a37334168002d8977ad981a584)[#fastclick](/tag.html?tag=174&cHash=e1934a4a661e30bbaa666edd7fee3613)[#jquerymobile](/tag.html?tag=175&cHash=9cb6f1afaefcec1f0e0f09a474b2b8ee)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Mar 2013

Hier zeige ich euch, wie ihr die nervigen 300ms Zeitverzögerung umgeht, die in jQuerymobile alles träge wirken lassen.

**1.Erstellt eine Datei namens fastclick.js und fügt folgendes ein:**

```

         function FastButton(element, handler) {
            this.element = element;
            this.handler = handler;
            element.addEventListener('touchstart', this, false);
         };
         FastButton.prototype.handleEvent = function(event) {
            switch (event.type) {
               case 'touchstart': this.onTouchStart(event); break;
               case 'touchmove': this.onTouchMove(event); break;
               case 'touchend': this.onClick(event); break;
               case 'click': this.onClick(event); break;
            }
         };
         FastButton.prototype.onTouchStart = function(event) {
             event.stopPropagation();
            this.element.addEventListener('touchend', this, false);
            document.body.addEventListener('touchmove', this, false);
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
 isMoving = false;
         };
         FastButton.prototype.onTouchMove = function(event) {
            if(Math.abs(event.touches[0].clientX - this.startX) > 10 || Math.abs(event.touches[0].clientY - this.startY) > 10) {
               this.reset();
            }
         };
         FastButton.prototype.onClick = function(event) {
            this.reset();
            this.handler(event);
            if(event.type == 'touchend') {
               preventGhostClick(this.startX, this.startY);
            }
         };
         FastButton.prototype.reset = function() {
            this.element.removeEventListener('touchend', this, false);
            document.body.removeEventListener('touchmove', this, false);
         };
         function preventGhostClick(x, y) {
            coordinates.push(x, y);
            window.setTimeout(gpop, 2500);
         };
         function gpop() {
            coordinates.splice(0, 2);
         };
         function gonClick(event) {
            for(var i = 0; i < coordinates.length; i += 2) {
               var x = coordinates[i];
               var y = coordinates[i + 1];
               if(Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
                  event.stopPropagation();
                  event.preventDefault();
               }
            }
         };
         document.addEventListener('click', gonClick, true);
         var coordinates = [];
         function initFastButtons() {
 new FastButton(document.getElementById("fastclick"), goSomewhere);
         };
         function goSomewhere() {
 var theTarget = document.elementFromPoint(this.startX, this.startY);
 if(theTarget.nodeType == 3) theTarget = theTarget.parentNode;

 var theEvent = document.createEvent('MouseEvents');
 theEvent.initEvent('click', true, true);
 theTarget.dispatchEvent(theEvent);
         };
```

**2\. Nun in eurer jquery mobile index.html datei folgendes in den head-Bereich**

```

<head>
 <!-- your css links go here -->
 <script src="scripts/jquery-1.6.4.min.js"></script>
 <script src="scripts/jquery.mobile-1.0.1.min.js"></script>
 <script src="scripts/phonegap-1.3.0.js"></script> <!-- for us phonegap users -->
 <script src="scripts/fastclick.js"></script>
<link rel='stylesheet' id='nextgen_gallery_related_images-css'  href='http://andreknieriem.de/wp-content/plugins/nextgen-gallery/products/photocrati_nextgen/modules/nextgen_gallery_display/static/nextgen_gallery_related_images.css?ver=3.7.1' type='text/css' media='all' />
<link rel='stylesheet' id='admin-bar-css'  href='http://andreknieriem.de/wp-includes/css/admin-bar.min.css?ver=3.7.1' type='text/css' media='all' />
<link rel='stylesheet' id='wpv_render_css-css'  href='http://andreknieriem.de/wp-content/plugins/wp-views/res/css/wpv-views-sorting.css?ver=3.7.1' type='text/css' media='all' />
</head>
```

**3\. Nun das Ganze beim Seitenladen aufrufen:**

```

<body onload="initFastButtons();">
```

**4\. Nun noch ein span mit der id "fastclick" um den kompletten body legen und fertig!**

```

<body onload"initFastButtons();">
<span id="fastclick">
<div data-role="page" id="one" style="overflow-x:hidden;">
 <div data-role="header" data-id="myheader" data-position="inline">
......


</span> <!-- end fastclick -->
```

Fertig, nun sollte sich alles viel schneller und nativer anfühlen!

Original code from this thread: [https://forum.jquery.com/topic/google-s-fastbutton](https://forum.jquery.com/topic/google-s-fastbutton)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/943f8f6b80772904074c49b91f7a8659?s=75&d=mm&r=g)
    
    Steve
    
    Funktioniert nicht im Multipage. Funktion ist super aber beschädigt das Layout
    
    30\. May 2014 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.