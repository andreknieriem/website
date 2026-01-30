---
title: 'CSS: Ordered List Nummer stylen nur mit CSS'
date: '2016-07-06T16:50:33.000Z'
slug: css-ordered-list-nummer-stylen-nur-mit-css
tags: []
description: "Ich habe hier mal einen kleinen CSS Trick gefunden, um bei Ordered Lists (OL-Tags) die Zahlen anders zu stylen als den Text ohne dabei das Markup ändern zu müssen. \r\nDas Ganze klappt in allen Browser und sogar ab dem IE8. Diese Methode benutzt den CSS counter, der dann einfach bei jedem Durchlauf hochzählt und somit die aufsteigenden Zahlen erzeugt. Diese werden dann mit before vor den Text der Listeneinträge geschrieben.\r\nCSS body {\r\n   counter-reset: item;\r\n }\r\n ol {\r\n   list-style: none;\r\n }\r\n li {\r\n   counter-increment: item;\r\n   margin-bottom: 5px;\r\n }\r\n li:before {\r\n   margin-right: 10px;\r\n   content: counter(item);\r\n   background: lightblue;\r\n   border-radius: 100%;\r\n   color: white;\r\n   width: 1.2em;\r\n   text-align: center;\r\n   display: inline-block;\r\n }\r\n\r\n\r\nbody {\r\n   counter-reset: item;\r\n }\r\n ol.number-style {\r\n   list-style: none;\r\n }\r\n .number-style li {\r\n   counter-increment: item;\r\n   margin-bottom: 5px;\r\n }\r\n .number-style li:before {\r\n   margin-right: 10px;\r\n   content: counter(item);\r\n   background: lightblue;\r\n   border-radius: 100%;\r\n   color: white;\r\n   width: 1.2em;\r\n   text-align: center;\r\n   display: inline-block;\r\n }\r\n HTML Markup \r\n&lt;ol&gt;\r\n  &lt;li&gt;item&lt;/li&gt;\r\n  &lt;li&gt;item&lt;/li&gt;\r\n  &lt;li&gt;item&lt;/li&gt;\r\n  &lt;li&gt;item&lt;/li&gt;\r\n&lt;/ol&gt;\r\n Demo\r\n\r\n  item  item  item  item "
image: /fileadmin/_processed_/3/8/csm_html_ddf36eeabb.png
demo_url: null
download_url: null
---

Ich habe hier mal einen kleinen CSS Trick gefunden, um bei Ordered Lists (OL-Tags) die Zahlen anders zu stylen als den Text ohne dabei das Markup ändern zu müssen.

Das Ganze klappt in allen Browser und sogar ab dem IE8. Diese Methode benutzt den **CSS counter**, der dann einfach bei jedem Durchlauf hochzählt und somit die aufsteigenden Zahlen erzeugt. Diese werden dann mit **before** vor den Text der Listeneinträge geschrieben.

**CSS**

```css
body {
   counter-reset: item;
 }
 ol {
   list-style: none;
 }
 li {
   counter-increment: item;
   margin-bottom: 5px;
 }
 li:before {
   margin-right: 10px;
   content: counter(item);
   background: lightblue;
   border-radius: 100%;
   color: white;
   width: 1.2em;
   text-align: center;
   display: inline-block;
 }

```

body { counter-reset: item; } ol.number-style { list-style: none; } .number-style li { counter-increment: item; margin-bottom: 5px; } .number-style li:before { margin-right: 10px; content: counter(item); background: lightblue; border-radius: 100%; color: white; width: 1.2em; text-align: center; display: inline-block; }

**HTML Markup**

```html

<ol>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ol>

```

**Demo**

1.  item
2.  item
3.  item
4.  item
