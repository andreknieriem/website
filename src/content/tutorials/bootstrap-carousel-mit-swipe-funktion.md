---
title: 'Bootstrap: Carousel mit Swipe Funktion'
date: '2014-10-10T16:17:38.000Z'
slug: bootstrap-carousel-mit-swipe-funktion
tags:
  - function
  - bootstrap
  - how to
  - carousel
  - swipe
  - swipeleft
  - swiperight
description: "Um das Bootstrap Carousel auf mobilen, bzw. Touchgeräten mit einem Fingerwisch (Swipe) zu bedienen habe ich hier ein kleines Snipped gebaut. Das Ganze setzt voraus, dass man das jquery.touchswipe Plugin vorher eingebunden hat. \r\n$('.carousel').swipe({\r\n\tswipeLeft:function(event, direction, distance, duration, fingerCount) {\r\n\t\t$(this).carousel('next');    \r\n\t},\r\n\tswipeRight:function(event, direction, distance, duration, fingerCount) {\r\n\t\t$(this).carousel('prev');  \r\n\t},\r\n\tthreshold:0\r\n});\r\n "
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Um das Bootstrap Carousel auf mobilen, bzw. Touchgeräten mit einem Fingerwisch (Swipe) zu bedienen habe ich hier ein kleines Snipped gebaut. Das Ganze setzt voraus, dass man das [jquery.touchswipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin) Plugin vorher eingebunden hat.

```javascript

$('.carousel').swipe({
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$(this).carousel('next');    
	},
	swipeRight:function(event, direction, distance, duration, fingerCount) {
		$(this).carousel('prev');  
	},
	threshold:0
});

```