---
title: 'Twig: Break in For-Schleife einbauen'
date: '2020-05-18T10:30:00.000Z'
slug: twig-break-in-for-schleife-einbauen
tags:
  - '1124'
  - '1125'
  - '1169'
  - '1170'
  - '41'
  - '1053'
  - '1171'
description: "Möchte man einen \"break\" in eine For-Schleife bei Twig einbauen, so gibt es dafür keine Option. Man kann sich aber ganz leicht behelfen, indem man das folgende Snipped verwendet. Es sei angemerkt, dass es hier kaum einen Performance-Gewinn gibt.\r\nDer Trick hierbei ist, die If-Kondition direkt an der For-Schleife zu benutzen und die Variable break dann auf true zu setzen, wenn es nötig wird. Das Ganze sieht dann so aus: {% set break = false %}\r\n{% for post in posts if not break %}\r\n    {{ post.heading }}\r\n    {% if post.id == 10 %}\r\n        {% set break = true %}\r\n    {% endif %}\r\n{% endfor %}"
image: /fileadmin/_processed_/4/3/csm_twig_8203c1255c.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Twig

* * *

![](/fileadmin/_processed_/4/3/csm_twig_8203c1255c.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#stop](/tag.html?tag=1053&cHash=f62484167f4096b7206782b48d1a9bc2)[#symfony](/tag.html?tag=1124&cHash=0d3bc75836ddba7decce7aa24257d2a7)[#twig](/tag.html?tag=1125&cHash=bbd016a653eaaf96f3a907c793405630)[#for](/tag.html?tag=1169&cHash=e11bc2f9db6b934f54f217c9402e8a53)[#break](/tag.html?tag=1170&cHash=1aad241b4f738acf709adea8d65b849a)[#continue](/tag.html?tag=1171&cHash=0e090f57bd6db6faa192367aa1063e30)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

18\. May 2020

Möchte man einen "break" in eine For-Schleife bei Twig einbauen, so gibt es dafür keine Option. Man kann sich aber ganz leicht behelfen, indem man das folgende Snipped verwendet. Es sei angemerkt, dass es hier kaum einen Performance-Gewinn gibt.

Der Trick hierbei ist, die If-Kondition direkt an der For-Schleife zu benutzen und die Variable break dann auf true zu setzen, wenn es nötig wird. Das Ganze sieht dann so aus:

```
{% set break = false %}
{% for post in posts if not break %}
    <h2>{{ post.heading }}</h2>
    {% if post.id == 10 %}
        {% set break = true %}
    {% endif %}
{% endfor %}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.