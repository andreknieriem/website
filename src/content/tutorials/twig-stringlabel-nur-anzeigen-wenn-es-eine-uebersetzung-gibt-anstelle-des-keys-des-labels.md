---
title: >-
  Twig: String/Label nur anzeigen, wenn es eine Übersetzung gibt, anstelle des
  Keys des Labels
date: '2019-02-27T08:30:00.000Z'
slug: >-
  twig-stringlabel-nur-anzeigen-wenn-es-eine-uebersetzung-gibt-anstelle-des-keys-des-labels
tags:
  - '1124'
  - '1125'
  - '1126'
  - '170'
  - '1127'
  - '1128'
  - '161'
  - '137'
  - '1129'
description: "Auf einer Seite bei der ich Twig als Template-Engine in Verbindung mit dem Übersetzungsfilter ( | trans) benutze, hatte ich das Problem, dass Twig den Key als Label ausgibt, wenn er das Label nicht in den Übersetzungen findet.\r\nHier ein Beispiel, was ich meine: {# Set the translation key #}\r\n{% set translationKey = \"category.\" ~ key %}\r\n\r\n{{ translationKey | trans }}\r\n{#\r\nHier kann nun beispielsweise category.einkey herauskommen, wenn in der language-Datei kein Label gefunden wurde.\r\n#} DIe Lösung\r\nis recht einfach. Man kann vor der Ausgabe einfach schauen, ob Twig aus der Language-Datei dasgleiche zurückgibt, was man reinschickt. Ist dem nicht so, also wurde ein Label gefunden, dann gib das Label aus.\r\nHier der Code dazu:&nbsp; {# Set the translation key #}\r\n{% set translationKey = \"category.\" ~ key %}\r\n\r\n{% if (translationKey | trans) != translationKey %}\r\n   {{ translationKey | trans }}\r\n{% endif %}"
image: /fileadmin/_processed_/4/3/csm_twig_8203c1255c.png
demo_url: null
download_url: null
---

Auf einer Seite bei der ich Twig als Template-Engine in Verbindung mit dem Übersetzungsfilter ( | trans) benutze, hatte ich das Problem, dass Twig den Key als Label ausgibt, wenn er das Label nicht in den Übersetzungen findet.

Hier ein Beispiel, was ich meine:

```
{# Set the translation key #}
{% set translationKey = "category." ~ key %}

<p>{{ translationKey | trans }}</p>
{#
Hier kann nun beispielsweise category.einkey herauskommen, wenn in der language-Datei kein Label gefunden wurde.
#}
```

### Die Lösung

is recht einfach. Man kann vor der Ausgabe einfach schauen, ob Twig aus der Language-Datei dasgleiche zurückgibt, was man reinschickt. Ist dem nicht so, also wurde ein Label gefunden, dann gib das Label aus.

Hier der Code dazu: 

```
{# Set the translation key #}
{% set translationKey = "category." ~ key %}

{% if (translationKey | trans) != translationKey %}
   <p>{{ translationKey | trans }}</p>
{% endif %}
```