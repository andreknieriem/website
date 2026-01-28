---
title: 'Bootstrap: Slide Geschwindigkeit ändern'
date: '2014-10-10T15:16:13.000Z'
slug: bootstrap-slide-geschwindigkeit-aendern
tags:
  - bootstrap
  - option
  - carousel
  - slide
  - time
  - speed
  - setting
description: "Möchte man die Slide-Geschwindigkeit von Bootstrap Carousel ändern, so findet man hierfür keine Einstellungsmöglich als data-Attribut oder beim Aufrufen der Funktion via Javascript. Der Grund dafür ist, dass dies mit CSS3 Animation gelöst wurde und dafür muss man also nur die Transition Zeit anpassen. Hier mal ein Beispiel für einen Slide mit 0.6s also 600MS Laufzeit. Dies kann natürlich angepasst werden, wie man es möchte. \r\n.carousel-inner &gt; .item {\r\n    position: relative;\r\n    display: none;\r\n    -webkit-transition: 0.6s ease-in-out left;\r\n    -moz-transition: 0.6s ease-in-out left;\r\n    -o-transition: 0.6s ease-in-out left;\r\n    transition: 0.6s ease-in-out left;\r\n}\r\n "
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Möchte man die Slide-Geschwindigkeit von Bootstrap Carousel ändern, so findet man hierfür keine Einstellungsmöglich als data-Attribut oder beim Aufrufen der Funktion via Javascript. Der Grund dafür ist, dass dies mit CSS3 Animation gelöst wurde und dafür muss man also nur die Transition Zeit anpassen. Hier mal ein Beispiel für einen Slide mit 0.6s also 600MS Laufzeit. Dies kann natürlich angepasst werden, wie man es möchte.

```css

.carousel-inner > .item {
    position: relative;
    display: none;
    -webkit-transition: 0.6s ease-in-out left;
    -moz-transition: 0.6s ease-in-out left;
    -o-transition: 0.6s ease-in-out left;
    transition: 0.6s ease-in-out left;
}

```