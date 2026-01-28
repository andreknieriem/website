---
title: 'Javascript: Youtube-Id aus verschiedenen Url''s auslesen'
date: '2016-08-26T22:00:00.000Z'
slug: javascript-youtube-id-aus-verschiedenen-urls-auslesen
tags:
  - javascript
  - youtube
  - id
  - url
  - get
  - regex
  - read
  - find
  - video
description: "Möchte man sich selbst einen Youtube Embed Code generieren und hat dafür nur irgendeine Art von Youtube-Link, so muss man die Youtube ID aus diesen Links herausbekommen. Allerdings hat Youtube leider viele verschiedene Arten von Url's. Mit der folgenden Funktion lassen sich so gut wie von allen Youtube Url's die Ids auslesen. Gefunden habe ich die Funktion bei Stackoverflow. function youtube_parser(url){\r\n    var regExp = /^.*((youtu.be\\/)|(v\\/)|(\\/u\\/\\w\\/)|(embed\\/)|(watch\\?))\\??v?=?([^#\\&amp;\\?]*).*/;\r\n    var match = url.match(regExp);\r\n    return (match&amp;&amp;match[7].length==11)? match[7] : false;\r\n}\r\n\r\nDas Ganze funktioniert dann mit folgenden Url's\r\nhttp://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index\r\nhttp://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o\r\nhttp://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0\r\nhttp://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s\r\nhttp://www.youtube.com/embed/0zM3nApSvMg?rel=0\r\nhttp://www.youtube.com/watch?v=0zM3nApSvMg\r\nhttp://youtu.be/0zM3nApSvMg"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

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