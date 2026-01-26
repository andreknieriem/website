---
title: 'Javascript: Youtube-Id aus verschiedenen Url''s auslesen'
date: '2016-08-26T22:00:00.000Z'
slug: javascript-youtube-id-aus-verschiedenen-urls-auslesen
tags:
  - '69'
  - '77'
  - '885'
  - '426'
  - '97'
  - '886'
  - '887'
  - '575'
  - '888'
description: "Möchte man sich selbst einen Youtube Embed Code generieren und hat dafür nur irgendeine Art von Youtube-Link, so muss man die Youtube ID aus diesen Links herausbekommen. Allerdings hat Youtube leider viele verschiedene Arten von Url's. Mit der folgenden Funktion lassen sich so gut wie von allen Youtube Url's die Ids auslesen. Gefunden habe ich die Funktion bei Stackoverflow. function youtube_parser(url){\r\n    var regExp = /^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?))\\??v?=?([^#\\&amp;\\?]*).*/;\r\n    var match = url.match(regExp);\r\n    return (match&amp;&amp;match[7].length==11)? match[7] : false;\r\n}\r\n\r\nDas Ganze funktioniert dann mit folgenden Url's\r\nhttp://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index\r\nhttp://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o\r\nhttp://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0\r\nhttp://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s\r\nhttp://www.youtube.com/embed/0zM3nApSvMg?rel=0\r\nhttp://www.youtube.com/watch?v=0zM3nApSvMg\r\nhttp://youtu.be/0zM3nApSvMg"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Javascript: Youtube-Id aus verschiedenen Url's auslesen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#youtube](/tag.html?tag=77&cHash=70824b8f201faf8c1daec7908e6b9132)[#get](/tag.html?tag=97&cHash=1e08d8bcea9c17f159a7ef387021b0f9)[#url](/tag.html?tag=426&cHash=733c51e56123b09516ab685e6d499fe9)[#find](/tag.html?tag=575&cHash=b9f411ad30819dc2f466d5940609fd4b)[#id](/tag.html?tag=885&cHash=651d6ba7e51572f2d2429f21e3e8a485)[#regex](/tag.html?tag=886&cHash=10a0f978ee683333a52d20a8198f2dc4)[#read](/tag.html?tag=887&cHash=3a8b079172146e07a9334fda69e06ab3)[#video](/tag.html?tag=888&cHash=87a423f807715a7dc0d140278806e7c0)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

27\. Aug 2016

Möchte man sich selbst einen Youtube Embed Code generieren und hat dafür nur irgendeine Art von Youtube-Link, so muss man die Youtube ID aus diesen Links herausbekommen. Allerdings hat Youtube leider viele verschiedene Arten von Url's. Mit der folgenden Funktion lassen sich so gut wie von allen Youtube Url's die Ids auslesen. Gefunden habe ich die Funktion bei [Stackoverflow](http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url "Opens internal link in current window").

```
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
```

Das Ganze funktioniert dann mit folgenden Url's

http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec\_grec\_index
http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH\_o
http://www.youtube.com/v/0zM3nApSvMg?fs=1&hl=en\_US&rel=0
http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
http://www.youtube.com/embed/0zM3nApSvMg?rel=0
http://www.youtube.com/watch?v=0zM3nApSvMg
http://youtu.be/0zM3nApSvMg

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.