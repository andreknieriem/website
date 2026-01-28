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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Twig

* * *

![](/fileadmin/_processed_/4/3/csm_twig_8203c1255c.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#show](/tag.html?tag=137&cHash=be751c589aff29578ff9bbb9d4dd6475)[#empty](/tag.html?tag=161&cHash=38dcc0dffc6383c47aeff1ed63c6320e)[#string](/tag.html?tag=170&cHash=ef1bdf30c7826216b830d70562bce01f)[#symfony](/tag.html?tag=1124&cHash=0d3bc75836ddba7decce7aa24257d2a7)[#twig](/tag.html?tag=1125&cHash=bbd016a653eaaf96f3a907c793405630)[#label](/tag.html?tag=1126&cHash=548a1fb799c52348b615208490753e95)[#trans](/tag.html?tag=1127&cHash=0f891f41a0cc3482d83a348032f7f824)[#translation](/tag.html?tag=1128&cHash=2ebd53424669b46eab80e09ce0483395)[#only](/tag.html?tag=1129&cHash=81a047f946a88dfd83a9cf137ff6eecb)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

27\. Feb 2019

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a474b91c07946c989e9408480f0ad322?s=75&d=mm&r=g)
    
    Jens K.
    
    Hey André, danke für den Denkanstoß. Ich hatte mich schon gefragt, wie man dieses Verhalten irgendwie abschalten kann.
    
    08\. Mar 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.