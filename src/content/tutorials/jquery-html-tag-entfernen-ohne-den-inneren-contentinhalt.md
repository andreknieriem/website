---
title: 'jQuery: Html Tag entfernen, ohne den inneren Content/Inhalt'
date: '2014-06-20T16:50:40.000Z'
slug: jquery-html-tag-entfernen-ohne-den-inneren-contentinhalt
tags:
  - '20'
  - '85'
  - '504'
  - '505'
  - '506'
  - '507'
  - '508'
  - '509'
description: "Möchte man ein HTML Tag entfernen, jedoch die Inhalte behalten so kann man dies mit folgendem kleinen Code-Schnipsel lösen.\nTestaufbau \r\n&lt;div class=\"wrapper\"&gt;\r\n    &lt;a href=\"/home\"&gt;\r\n        &lt;img src=\"header.jpg\"&gt;\r\n    &lt;/a&gt;\r\n&lt;/div&gt;\r\n Javascript-Code \r\n$('a').contents().unwrap();\r\n Ergebnis \r\n&lt;div class=\"wrapper\"&gt;\r\n    &lt;img src=\"header.jpg\"&gt;\r\n&lt;/div&gt;\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#html](/tag.html?tag=85&cHash=91a7ea3a6587e1d4fa3e5c908a161193)[#entferne](/tag.html?tag=504&cHash=e74ed89d621ad75eb57ed0f50f76fd36)[#remove](/tag.html?tag=505&cHash=263bad25c9332a7633f566644f35ff4f)[#tag](/tag.html?tag=506&cHash=b55ce3999bf6f364b929b6b800eb7d29)[#innercontent](/tag.html?tag=507&cHash=042c600d9f9a7fd8a2e84c63e2442283)[#ohne](/tag.html?tag=508&cHash=8286ddc3deeb8dc7a127d955bda5ec47)[#without](/tag.html?tag=509&cHash=346dfff2551973134cc64aecd08e9a72)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

20\. Jun 2014

Möchte man ein HTML Tag entfernen, jedoch die Inhalte behalten so kann man dies mit folgendem kleinen Code-Schnipsel lösen.

## Testaufbau

```

<div class="wrapper">
    <a href="/home">
        <img src="header.jpg">
    </a>
</div>
```

## Javascript-Code

```

$('a').contents().unwrap();
```

## Ergebnis

```

<div class="wrapper">
    <img src="header.jpg">
</div>
```

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.