---
title: 'CSS transition: Höhe von 0 auf Auto animieren Workaround'
date: '2017-03-22T23:00:00.000Z'
slug: css-transition-hoehe-von-0-auf-auto-animieren-workaround
tags:
  - css
  - animate
  - transition
  - height
  - auto
  - '0'
  - zero
  - max-height
  - workaround
  - trick
description: "Eine Höhe von 0 zu Auto animieren ist eine Sache, die man bestimmt öfter mal tun möchte. Mit CSS transitions merkt man schnell, dass das nicht klappen will. Aber es gibt noch Hoffnung! Man kann max-height und overflow:hidden benutzen, um das Ganze zu bewerkstelligen.\r\nHier mal ein Beispiel: (Hover) \r\n    \r\n      Dies ist ein Text beliebiger Länge und somit Höhe.\r\n    \r\n Also wie funtioniert das Ganze jetzt? Wir animieren nicht die Höhe von 0 auf auto, sondern die max-height. Das funktioniert so, dass wir dem zu animierenden Element eine maximale Höhe geben, die größer ist, bzw gleich groß der Box in der es liegt. Die Box darum muss also eine Höhe haben und benötigt overflow hidden.\r\nHTML Aufbau &lt;div class=\"outer-box\"&gt;\r\n    &lt;div class=\"inner-box-content\"&gt;\r\n      &lt;p&gt;Dies ist ein Text beliebiger Länge und somit Höhe.&lt;/p&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt; Der abgespeckte CSS-Code .inner-box-content {\r\n  /* Anfangs wollen wir keine Höhe, es soll ja nicht sichtbar sein*/\r\n  max-height: 0;\r\n  overflow: hidden;\r\n\r\n  /* Set our transitions up. */\r\n  -webkit-transition: max-height 0.8s;\r\n  -moz-transition: max-height 0.8s;\r\n  transition: max-height 0.8s;\r\n}\r\n.outer-box:hover .inner-box-content {\r\n  /* Bei hover, muss die Höhe auf irgendeinen großen Wert gesetzt werden */\r\n  max-height: 200px;\r\n}"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Eine Höhe von 0 zu Auto animieren ist eine Sache, die man bestimmt öfter mal tun möchte. Mit CSS transitions merkt man schnell, dass das nicht klappen will. Aber es gibt noch Hoffnung! Man kann max-height und overflow:hidden benutzen, um das Ganze zu bewerkstelligen.

Hier mal ein Beispiel: (Hover)

Dies ist ein Text beliebiger Länge und somit Höhe.

Also wie funtioniert das Ganze jetzt? Wir animieren nicht die Höhe von 0 auf auto, sondern die max-height. Das funktioniert so, dass wir dem zu animierenden Element eine maximale Höhe geben, die größer ist, bzw gleich groß der Box in der es liegt. Die Box darum muss also eine Höhe haben und benötigt overflow hidden.

### HTML Aufbau

```markup
<div class="outer-box">
    <div class="inner-box-content">
      <p>Dies ist ein Text beliebiger Länge und somit Höhe.</p>
    </div>
</div>
```

### Der abgespeckte CSS-Code

```css
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