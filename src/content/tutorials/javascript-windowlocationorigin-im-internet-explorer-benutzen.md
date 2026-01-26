---
title: 'Javascript: window.location.origin im Internet Explorer benutzen'
date: '2015-06-09T18:29:25.000Z'
slug: javascript-windowlocationorigin-im-internet-explorer-benutzen
tags:
  - '69'
  - '86'
  - '87'
  - '694'
  - '695'
  - '696'
description: "Da viele alte Internet Explorer das überaus nützliche Feature window.location.origin nicht können, welches einem die komplette URL mit allen Parametern zurückgibt, kann man sich folgendem kleinen Snippet/Polyfill behelfen: \r\nif (!window.location.origin) {\r\n  window.location.origin = window.location.protocol + \"//\" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');\r\n}\r\n Ich hoffe das hilft euch weiter!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: window.location.origin im Internet Explorer benutzen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#ie](/tag.html?tag=86&cHash=759b348c57928fea01a7cffef340e851)[#internet explorer](/tag.html?tag=87&cHash=dd3f1edc194386a52e050ecbf316970c)[#window.location.origin](/tag.html?tag=694&cHash=34acff786272ba05783b099dbdc5588f)[#old](/tag.html?tag=695&cHash=f182a8b69323ecf320b80fcd9237c652)[#polyfill](/tag.html?tag=696&cHash=27e17901bdcb36b559334f61e5d274ce)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Jun 2015

Da viele alte **Internet Explorer** das überaus nützliche Feature **window.location.origin** nicht können, welches einem die komplette URL mit allen Parametern zurückgibt, kann man sich folgendem kleinen Snippet/Polyfill behelfen:

```

if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
```

Ich hoffe das hilft euch weiter!

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/61184738467084b5dc223dcbfa36acf0?s=75&d=mm&r=g)
    
    Frank
    
    Danke für das Polyfill, konnte ich gerade gut gebrauchen!
    
    31\. Aug 2015 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.