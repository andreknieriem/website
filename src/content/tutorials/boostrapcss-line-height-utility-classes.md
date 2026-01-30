---
title: 'Boostrap/CSS: Line-Height Utility Classes'
date: '2021-05-05T09:43:00.000Z'
slug: boostrapcss-line-height-utility-classes
tags:
  - bootstrap
  - css
  - line-height
  - classes
  - utility
  - missing
description: "Bootstrap hat schon viele Utility Klassen um das meiste am Design ohne eine weiteres CSS zu machen, jedoch fehlte mir etwas um die Line-Height anpassen zu können. Daher habe ich ein paar Zeilen CSS ergänzt um diese Funktionalität herzustellen. Natürlich kann man die Line-Heights hier anpassen, wie es für einen am besten passt.\r\nHier das CSS .text-height-0 {\r\n  line-height: 1!important;\r\n}\r\n.text-height-1 {\r\n  line-height: 1.5!important;\r\n}\r\n.text-height-2 {\r\n  line-height: 2!important;\r\n}\r\n.text-height-3 {\r\n  line-height: 2.5!important;\r\n}\r\n.text-height-4 {\r\n  line-height: 3!important;\r\n}\r\n.text-height-5 {\r\n  line-height: 3.5!important;\r\n} Diese Klassen kann nun ganz einfach benutzen. \r\n  Lorem Ipsum....\r\n"
image: /fileadmin/_processed_/6/c/csm_bootstrap_2b5fbe20f0.png
demo_url: null
download_url: null
---

Bootstrap hat schon viele Utility Klassen um das meiste am Design ohne eine weiteres CSS zu machen, jedoch fehlte mir etwas um die Line-Height anpassen zu können. Daher habe ich ein paar Zeilen CSS ergänzt um diese Funktionalität herzustellen. Natürlich kann man die Line-Heights hier anpassen, wie es für einen am besten passt.

**Hier das CSS**

```css
.text-height-0 {
  line-height: 1!important;
}
.text-height-1 {
  line-height: 1.5!important;
}
.text-height-2 {
  line-height: 2!important;
}
.text-height-3 {
  line-height: 2.5!important;
}
.text-height-4 {
  line-height: 3!important;
}
.text-height-5 {
  line-height: 3.5!important;
}
```

Diese Klassen kann nun ganz einfach benutzen.

```html
<p class="text-height-1">
  Lorem Ipsum....
</p>
```
