---
title: 'CSS: Pures CSS Star Rating ohne Javascript'
date: '2019-01-21T09:04:00.000Z'
slug: css-pures-css-star-rating-ohne-javascript
tags:
  - css
  - pure
  - star
  - rating
  - javascript
  - noscript
  - vanilla
  - siblings
  - selector
description: "Bewertungen auf Webseiten sind ein beliebtes Element. Viele dieser Bewertungssysteme sind allerdings mit Javascript gebaut, meistens mit jQuery. Dies ist nicht mehr nötig und geht mitlerweile komplett ohne Javascript. Der Wert, der aus der Bewertung kommt, ist zudem ein ganz noramales Formular-Feld und kann direkt so benutzt werden.\r\nHier das Markup für das Sternen-Rating \r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n  \r\n  &#9733;\r\n Wichtig ist, dass das Markup nicht umgebaut wird, bzw. man hier keine weiteren Elemente verschachtelt, da sonst das folgende CSS nicht mehr funktioniert.\r\nCSS .star-form {\r\n  display: block;\r\n  position: relative;\r\n  width: 90px;\r\n  min-height: 60px;\r\n  padding: 0;\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.star-form > input {\r\n  position: absolute;\r\n  margin-right: -100%;\r\n  opacity: 0;\r\n}\r\n\r\n.star-form > input:checked ~ label,\r\n.star-form > input:focus ~ label,\r\n.star-form > input:hover ~ label {\r\n  color: #faaa38;\r\n}\r\n\r\n.star-form > input:focus + label {\r\n  outline: 1px dotted #999;\r\n}\r\n\r\n.star-form > label {\r\n  position: relative;\r\n  display: inline-block;\r\n  float: right;\r\n  width: 18px;\r\n  height: 30px;\r\n  color: #3a4752;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n} Funktionsweise\r\nDie Rückwärtssortierung sorgt dafür, dass beim Hover/Klick auf einen Stern, die vorherigen mit dem CSS-Siblings-Selektor angesprochen werden können. So werden alle Label Elemente nach dem 5 Sterne Input Orange gestylt, wenn das 5-Sterne Input gehovered oder geklickt wird.&nbsp;\r\nDemo \r\n  .star-form {\r\n  display: block;\r\n  position: relative;\r\n  width: 90px;\r\n  min-height: 60px;\r\n  padding: 0;\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.star-form > input {\r\n  position: absolute;\r\n  margin-right: -100%;\r\n  opacity: 0;\r\n}\r\n\r\n.star-form > input:checked ~ label,\r\n.star-form > input:focus ~ label,\r\n.star-form > input:hover ~ label {\r\n  color: #faaa38;\r\n}\r\n\r\n.star-form > input:focus + label {\r\n  outline: 1px dotted #999;\r\n}\r\n\r\n.star-form > label {\r\n  position: relative;\r\n  display: inline-block;\r\n  float: right;\r\n  width: 18px;\r\n  height: 30px;\r\n  color: #3a4752;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n\r\n\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n          \r\n          &#9733;\r\n        "
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

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