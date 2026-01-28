---
title: 'Internet Explorer: Scrollbar nicht über den Content laufen lassen'
date: '2015-09-28T16:57:52.000Z'
slug: internet-explorer-scrollbar-nicht-ueber-den-content-laufen-lassen
tags:
  - '44'
  - '86'
  - '87'
  - '760'
  - '761'
  - '762'
  - '763'
  - '764'
  - '765'
  - '766'
description: "Seit dem Internet Explorer 10 ist das Scrollbar-Verhalten etwas seltsam. Denkt das System, man hat ein Touch-Device blendet er andere Scrollbars ein. Benutzt man dann die Maus ändern sich diese auch wieder. Nun kommt es allerdings oft zum Problem, dass die Scrollbar über dem Content liegt und nicht daneben, wie sonst üblich. \nHier ein Screenshot im Vergleich:\n\nDas Ganze lässt sich leicht mit CSS regeln, indem man dem Body folgende Dinge gibt: \r\nbody{\r\n    overflow-y: scroll;\r\n    -ms-overflow-style: scrollbar;\r\n}\r\n "
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Seit dem Internet Explorer 10 ist das Scrollbar-Verhalten etwas seltsam. Denkt das System, man hat ein Touch-Device blendet er andere Scrollbars ein. Benutzt man dann die Maus ändern sich diese auch wieder. Nun kommt es allerdings oft zum Problem, dass die Scrollbar über dem Content liegt und nicht daneben, wie sonst üblich.

**Hier ein Screenshot im Vergleich:**

[![scrollbar](http://andreknieriem.de/wp-content/uploads/2015/09/scrollbar.png)](http://andreknieriem.de/wp-content/uploads/2015/09/scrollbar.png)

Das Ganze lässt sich leicht mit CSS regeln, indem man dem Body folgende Dinge gibt:

```

body{
    overflow-y: scroll;
    -ms-overflow-style: scrollbar;
}
```