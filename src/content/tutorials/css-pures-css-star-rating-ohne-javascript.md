---
title: 'CSS: Pures CSS Star Rating ohne Javascript'
date: '2019-01-21T09:04:00.000Z'
slug: css-pures-css-star-rating-ohne-javascript
tags:
  - '25'
  - '1108'
  - '1109'
  - '1110'
  - '69'
  - '1111'
  - '1112'
  - '1113'
  - '1114'
description: "Bewertungen auf Webseiten sind ein beliebtes Element. Viele dieser Bewertungssysteme sind allerdings mit Javascript gebaut, meistens mit jQuery. Dies ist nicht mehr nötig und geht mitlerweile komplett ohne Javascript. Der Wert, der aus der Bewertung kommt, ist zudem ein ganz noramales Formular-Feld und kann direkt so benutzt werden.\r\nHier das Markup für das Sternen-Rating \r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n Wichtig ist, dass das Markup nicht umgebaut wird, bzw. man hier keine weiteren Elemente verschachtelt, da sonst das folgende CSS nicht mehr funktioniert.\r\nCSS .star-form {\r\n  display: block;\r\n  position: relative;\r\n  width: 90px;\r\n  min-height: 60px;\r\n  padding: 0;\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.star-form > input {\r\n  position: absolute;\r\n  margin-right: -100%;\r\n  opacity: 0;\r\n}\r\n\r\n.star-form > input:checked ~ label,\r\n.star-form > input:focus ~ label,\r\n.star-form > input:hover ~ label {\r\n  color: #faaa38;\r\n}\r\n\r\n.star-form > input:focus + label {\r\n  outline: 1px dotted #999;\r\n}\r\n\r\n.star-form > label {\r\n  position: relative;\r\n  display: inline-block;\r\n  float: right;\r\n  width: 18px;\r\n  height: 30px;\r\n  color: #3a4752;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n} Funktionsweise\r\nDie Rückwärtssortierung sorgt dafür, dass beim Hover/Klick auf einen Stern, die vorherigen mit dem CSS-Siblings-Selektor angesprochen werden können. So werden alle Label Elemente nach dem 5 Sterne Input Orange gestylt, wenn das 5-Sterne Input gehovered oder geklickt wird.&nbsp;\r\nDemo \r\n  .star-form {\r\n  display: block;\r\n  position: relative;\r\n  width: 90px;\r\n  min-height: 60px;\r\n  padding: 0;\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.star-form > input {\r\n  position: absolute;\r\n  margin-right: -100%;\r\n  opacity: 0;\r\n}\r\n\r\n.star-form > input:checked ~ label,\r\n.star-form > input:focus ~ label,\r\n.star-form > input:hover ~ label {\r\n  color: #faaa38;\r\n}\r\n\r\n.star-form > input:focus + label {\r\n  outline: 1px dotted #999;\r\n}\r\n\r\n.star-form > label {\r\n  position: relative;\r\n  display: inline-block;\r\n  float: right;\r\n  width: 18px;\r\n  height: 30px;\r\n  color: #3a4752;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n\r\n\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n        "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# CSS: Pures CSS Star Rating ohne Javascript

#Tutorials#CSS

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#pure](/tag.html?tag=1108&cHash=7395a837b71d60f845036d31ae930e08)[#star](/tag.html?tag=1109&cHash=e89984622b8c921c4d9fc9f3585beb5f)[#rating](/tag.html?tag=1110&cHash=9bcfade96fea55a60ed0465584649ad1)[#noscript](/tag.html?tag=1111&cHash=fc82084b710b7c49e790b5d21781e912)[#vanilla](/tag.html?tag=1112&cHash=6c78eeeec245cd76279dd3174fa72b25)[#siblings](/tag.html?tag=1113&cHash=e7cc9773127e618a464c8605c7ac25f2)[#selector](/tag.html?tag=1114&cHash=4fe0007bd61cdbf53602091b3a04304c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Jan 2019

Bewertungen auf Webseiten sind ein beliebtes Element. Viele dieser Bewertungssysteme sind allerdings mit Javascript gebaut, meistens mit jQuery. Dies ist nicht mehr nötig und geht mitlerweile komplett ohne Javascript. Der Wert, der aus der Bewertung kommt, ist zudem ein ganz noramales Formular-Feld und kann direkt so benutzt werden.

### Hier das Markup für das Sternen-Rating

```
<div class="star-form">
  <input type="radio" id="rate5" name="rating" value="5" />
  <label for="rate5" title="Amazing"><span class="icon-star">&#9733;</span></label>
  <input type="radio" id="rate4" name="rating" value="4" />
  <label for="rate4" title="Very Good"><span class="icon-star">&#9733;</span></label>
  <input type="radio" id="rate3" name="rating" value="3" />
  <label for="rate3" title="Average"><span class="icon-star">&#9733;</span></label>
  <input type="radio" id="rate2" name="rating" value="2" />
  <label for="rate2" title="Not good"><span class="icon-star">&#9733;</span></label>
  <input type="radio" id="rate1" name="rating" value="1" />
  <label for="rate1" title="Terrible"><span class="icon-star">&#9733;</span></label>
</div>
```

Wichtig ist, dass das Markup nicht umgebaut wird, bzw. man hier keine weiteren Elemente verschachtelt, da sonst das folgende CSS nicht mehr funktioniert.

### CSS

```
.star-form {
  display: block;
  position: relative;
  width: 90px;
  min-height: 60px;
  padding: 0;
  border: none;
  float: left;
}

.star-form > input {
  position: absolute;
  margin-right: -100%;
  opacity: 0;
}

.star-form > input:checked ~ label,
.star-form > input:focus ~ label,
.star-form > input:hover ~ label {
  color: #faaa38;
}

.star-form > input:focus + label {
  outline: 1px dotted #999;
}

.star-form > label {
  position: relative;
  display: inline-block;
  float: right;
  width: 18px;
  height: 30px;
  color: #3a4752;
  cursor: pointer;
  background-repeat: no-repeat;
}
```

### Funktionsweise

Die Rückwärtssortierung sorgt dafür, dass beim Hover/Klick auf einen Stern, die vorherigen mit dem [CSS-Siblings-Selektor](https://css-tricks.com/child-and-sibling-selectors/) angesprochen werden können. So werden alle Label Elemente nach dem 5 Sterne Input Orange gestylt, wenn das 5-Sterne Input gehovered oder geklickt wird. 

### Demo

.star-form { display: block; position: relative; width: 90px; min-height: 60px; padding: 0; border: none; float: left; } .star-form > input { position: absolute; margin-right: -100%; opacity: 0; } .star-form > input:checked ~ label, .star-form > input:focus ~ label, .star-form > input:hover ~ label { color: #faaa38; } .star-form > input:focus + label { outline: 1px dotted #999; } .star-form > label { position: relative; display: inline-block; float: right; width: 18px; height: 30px; color: #3a4752; cursor: pointer; background-repeat: no-repeat; }

★★★★★

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/de41fcd290fcb3b6f6dcce13f06ba25c?s=75&d=mm&r=g)
    
    Franzi
    
    Hey Andre, danke für das Tutorial! Hatte es vorher auch mit Javascript gelöst, aber finde diese Lösung viel eleganter.  
    LG Franzi
    
    13\. Feb 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.