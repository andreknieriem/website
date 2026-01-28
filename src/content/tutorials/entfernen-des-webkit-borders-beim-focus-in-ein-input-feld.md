---
title: Entfernen des Webkit-Borders beim Focus in ein Input Feld
date: '2012-03-05T14:49:02.000Z'
slug: entfernen-des-webkit-borders-beim-focus-in-ein-input-feld
tags:
  - '25'
  - '58'
  - '72'
  - '78'
  - '79'
  - '80'
  - '81'
description: >-
  In vielen Browser, besonders in den Webkit-Browser Chrome und Safari werden
  Input-Felder gehighlightet wenn man sie gerade fokussiert. Das kann bei dem
  ein oder anderen Projekt nerven. Im folgenden Bild seht ihr ein Beispiel:


  Um das Ganze nun via CSS einfach zu umgeben reicht folgender Code schon aus: 

  input:focus {
      outline: none;
  }
   Das ist auch schon alles ;)
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

In vielen Browser, besonders in den Webkit-Browser Chrome und Safari werden Input-Felder gehighlightet wenn man sie gerade fokussiert. Das kann bei dem ein oder anderen Projekt nerven. Im folgenden Bild seht ihr ein Beispiel:

[![](http://andreknieriem.de/wp-content/uploads/2012/03/chrome-firefox-input-focus.png "chrome-firefox-input-focus")](http://andreknieriem.de/wp-content/uploads/2012/03/chrome-firefox-input-focus.png)

Um das Ganze nun via CSS einfach zu umgeben reicht folgender Code schon aus:

```

input:focus {
    outline: none;
}
```

Das ist auch schon alles ;)