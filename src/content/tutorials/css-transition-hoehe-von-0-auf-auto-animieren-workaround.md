---
title: 'CSS transition: Höhe von 0 auf Auto animieren Workaround'
date: '2017-03-22T23:00:00.000Z'
slug: css-transition-hoehe-von-0-auf-auto-animieren-workaround
tags:
  - '25'
  - '970'
  - '971'
  - '972'
  - '973'
  - '974'
  - '975'
  - '976'
  - '431'
  - '955'
description: "Eine Höhe von 0 zu Auto animieren ist eine Sache, die man bestimmt öfter mal tun möchte. Mit CSS transitions merkt man schnell, dass das nicht klappen will. Aber es gibt noch Hoffnung! Man kann max-height und overflow:hidden benutzen, um das Ganze zu bewerkstelligen.\r\nHier mal ein Beispiel: (Hover) \r\n    \r\n      Dies ist ein Text beliebiger Länge und somit Höhe.\r\n    \r\n Also wie funtioniert das Ganze jetzt? Wir animieren nicht die Höhe von 0 auf auto, sondern die max-height. Das funktioniert so, dass wir dem zu animierenden Element eine maximale Höhe geben, die größer ist, bzw gleich groß der Box in der es liegt. Die Box darum muss also eine Höhe haben und benötigt overflow hidden.\r\nHTML Aufbau &lt;div class=\"outer-box\"&gt;\r\n    &lt;div class=\"inner-box-content\"&gt;\r\n      &lt;p&gt;Dies ist ein Text beliebiger Länge und somit Höhe.&lt;/p&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt; Der abgespeckte CSS-Code .inner-box-content {\r\n  /* Anfangs wollen wir keine Höhe, es soll ja nicht sichtbar sein*/\r\n  max-height: 0;\r\n  overflow: hidden;\r\n\r\n  /* Set our transitions up. */\r\n  -webkit-transition: max-height 0.8s;\r\n  -moz-transition: max-height 0.8s;\r\n  transition: max-height 0.8s;\r\n}\r\n.outer-box:hover .inner-box-content {\r\n  /* Bei hover, muss die Höhe auf irgendeinen großen Wert gesetzt werden */\r\n  max-height: 200px;\r\n}"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#workaround](/tag.html?tag=431&cHash=f66c6296e3ae35864b1ed46c53fdcbe1)[#trick](/tag.html?tag=955&cHash=5ae6ad6d29fe8a4c704731029390bcb5)[#animate](/tag.html?tag=970&cHash=b7df4ac8abdeb93378d3cce6f24c6f9b)[#transition](/tag.html?tag=971&cHash=f932f72bacaeae7ee53814e41e0649b3)[#height](/tag.html?tag=972&cHash=445010caecfff02ab4b06bfb1004b4ab)[#auto](/tag.html?tag=973&cHash=471ab080c2e9af1d4eb2a291328d896e)[#0](/tag.html?tag=974&cHash=99a3c695f7ce3ffe888b4352be5ce6b8)[#zero](/tag.html?tag=975&cHash=bbbead2b7d9cfd60812feb5d09ef145b)[#max-height](/tag.html?tag=976&cHash=1702093c60d30ca7570d1f893b56712a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Mar 2017

Eine Höhe von 0 zu Auto animieren ist eine Sache, die man bestimmt öfter mal tun möchte. Mit CSS transitions merkt man schnell, dass das nicht klappen will. Aber es gibt noch Hoffnung! Man kann max-height und overflow:hidden benutzen, um das Ganze zu bewerkstelligen.

Hier mal ein Beispiel: (Hover)

Dies ist ein Text beliebiger Länge und somit Höhe.

Also wie funtioniert das Ganze jetzt? Wir animieren nicht die Höhe von 0 auf auto, sondern die max-height. Das funktioniert so, dass wir dem zu animierenden Element eine maximale Höhe geben, die größer ist, bzw gleich groß der Box in der es liegt. Die Box darum muss also eine Höhe haben und benötigt overflow hidden.

### HTML Aufbau

```
<div class="outer-box">
    <div class="inner-box-content">
      <p>Dies ist ein Text beliebiger Länge und somit Höhe.</p>
    </div>
</div>
```

### Der abgespeckte CSS-Code

```
.inner-box-content {
  /* Anfangs wollen wir keine Höhe, es soll ja nicht sichtbar sein*/
  max-height: 0;
  overflow: hidden;

  /* Set our transitions up. */
  -webkit-transition: max-height 0.8s;
  -moz-transition: max-height 0.8s;
  transition: max-height 0.8s;
}
.outer-box:hover .inner-box-content {
  /* Bei hover, muss die Höhe auf irgendeinen großen Wert gesetzt werden */
  max-height: 200px;
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/dd594c63056f59aa7103bee1d2f35afd?s=75&d=mm&r=g)
    
    [Jannick](http://ratze.eu)
    
    So funktioniert es zwar, setzt aber immer voraus, dass man die maximale Höhe der Box kennt.  
      
    Hat diese dynamischen Content oder ändert sich die Box in einer Full-Responsive Umgebung funktioniert es nicht.  
      
    Man kann natürlich die Höhe auch einfach auf 10000px setzen, aber dann läuft die Animation nicht mehr so ab wie man es gerne hätte, da diese ja dann großteils im nicht sichtbaren Bereich abgespielt wird.  
      
    Gute Ansatz, aber leider löst es nicht alle Probleme.  
      
    Viele Grüße,  
    Jannick
    
    14\. Jul 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.