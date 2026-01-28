---
title: 'Twig: Break in For-Schleife einbauen'
date: '2020-05-18T10:30:00.000Z'
slug: twig-break-in-for-schleife-einbauen
tags:
  - symfony
  - twig
  - for
  - break
  - php
  - stop
  - continue
description: "Möchte man einen \"break\" in eine For-Schleife bei Twig einbauen, so gibt es dafür keine Option. Man kann sich aber ganz leicht behelfen, indem man das folgende Snipped verwendet. Es sei angemerkt, dass es hier kaum einen Performance-Gewinn gibt.\r\nDer Trick hierbei ist, die If-Kondition direkt an der For-Schleife zu benutzen und die Variable break dann auf true zu setzen, wenn es nötig wird. Das Ganze sieht dann so aus: {% set break = false %}\r\n{% for post in posts if not break %}\r\n    {{ post.heading }}\r\n    {% if post.id == 10 %}\r\n        {% set break = true %}\r\n    {% endif %}\r\n{% endfor %}"
image: /fileadmin/_processed_/4/3/csm_twig_8203c1255c.png
demo_url: null
download_url: null
---

Möchte man einen "break" in eine For-Schleife bei Twig einbauen, so gibt es dafür keine Option. Man kann sich aber ganz leicht behelfen, indem man das folgende Snipped verwendet. Es sei angemerkt, dass es hier kaum einen Performance-Gewinn gibt.

Der Trick hierbei ist, die If-Kondition direkt an der For-Schleife zu benutzen und die Variable break dann auf true zu setzen, wenn es nötig wird. Das Ganze sieht dann so aus:

```markup
{% set break = false %}
{% for post in posts if not break %}
    <h2>{{ post.heading }}</h2>
    {% if post.id == 10 %}
        {% set break = true %}
    {% endif %}
{% endfor %}
```