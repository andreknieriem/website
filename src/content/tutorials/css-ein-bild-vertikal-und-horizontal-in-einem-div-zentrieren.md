---
title: 'CSS: Ein Bild vertikal und horizontal in einem DIV zentrieren'
date: '2017-01-10T23:00:00.000Z'
slug: css-ein-bild-vertikal-und-horizontal-in-einem-div-zentrieren
tags:
  - css
  - align
  - center
  - middle
  - vertical
  - horizontal
  - trick
  - helper
description: "Möchte man ein Bild innerhalb eines Div-Container komplett zentrieren, also horizontal und vertikal, so ist das nicht immer leicht. Mit diesem kleinen CSS Trick und einem Helper-Div kann man es aber komplett mit CSS lösen.\r\nHier eine Demo: \r\n.demo-img-align .frame {\r\n    height: 27px;      /* equals max image height */\r\n    width: 160px;\r\n    border: 1px solid #ccc;\r\n    white-space: nowrap;\r\n    line-height: normal;\r\n    text-align: center; margin: 1em 0;\r\n}\r\n\r\n.demo-img-align .helper {\r\n    display: inline-block;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.demo-img-align img {\r\n    background: #3aa4af;\r\n    vertical-align: middle;\r\n    max-height: 25px;\r\n    max-width: 160px;\r\n}\r\n\r\n\r\n\r\n\r\n    \r\n  \r\n\r\n\r\n    \r\n  \r\n\r\n\r\n    \r\n  \r\n\r\n\r\n    \r\n  \r\n\r\n\r\n    \r\n  \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n\r\n    \r\n    \r\n\r\n Markup/CSS\r\n&lt;style&gt;\r\n.frame {\r\n    height: 27px;      /* equals max image height */\r\n    width: 160px;\r\n    border: 1px solid #ccc;\r\n    white-space: nowrap;\r\n    line-height: normal;\r\n    text-align: center; margin: 1em 0;\r\n}\r\n\r\n.helper {\r\n    display: inline-block;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\nimg {\r\n    background: #3aa4af;\r\n    vertical-align: middle;\r\n    max-height: 25px;\r\n    max-width: 160px;\r\n}\r\n&lt;/style&gt;\r\n\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n  &lt;img src=\"logo-trans.png\" height=250 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n  &lt;img src=\"logo-trans.png\" height=25 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n  &lt;img src=\"logo-trans.png\" height=23 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n  &lt;img src=\"logo-trans.png\" height=21 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n  &lt;img src=\"logo-trans.png\" height=19 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=17 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=15 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=13 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=11 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=9 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=7 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=5 /&gt;\r\n&lt;/div&gt;\r\n&lt;div class=frame&gt;\r\n    &lt;span class=\"helper\"&gt;&lt;/span&gt;\r\n    &lt;img src=\"logo-trans.png\" height=3 /&gt;\r\n&lt;/div&gt;\r\n Wie funktioniert das Ganze? \r\nHat man zwei inline-block Elemente nebeneinander, kann man beide so anordnen, dass sie sich auf den anderen beziehen.Also kriegt man mit vertical-align: middle etwas in der Art:\r\n\r\n\r\nHat nun das äußere Element eine fixe Höhe (in px, em order sonstiger Einheit), kann man die Höhe der inneren Elemente mit %. setzen\r\nAlso fügt man inline-block mit height: 100% an das erste Helper Div in einem Div, das eine fixierte Höhe hat (.frame, siehe oben) wird das zweite inline-block Element (unser Bild) vertikal daneben zentriert.\r\nDa unser Helper keine Breite hat, ist das Bild dazu ebenfalls auch noch horizontal in der Mitte, mit einem text-align:center.\r\n"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Möchte man ein Bild innerhalb eines Div-Container komplett zentrieren, also horizontal und vertikal, so ist das nicht immer leicht. Mit diesem kleinen CSS Trick und einem Helper-Div kann man es aber komplett mit CSS lösen.

**Hier eine Demo:**

.demo-img-align .frame { height: 27px; /\* equals max image height \*/ width: 160px; border: 1px solid #ccc; white-space: nowrap; line-height: normal; text-align: center; margin: 1em 0; } .demo-img-align .helper { display: inline-block; height: 100%; vertical-align: middle; } .demo-img-align img { background: #3aa4af; vertical-align: middle; max-height: 25px; max-width: 160px; }

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

![](https://www.andrerinas.de/typo3conf/ext/ar_siteext/Resources/Public/img/logo-trans.png)

**Markup/CSS**

```markup
<style>
.frame {
    height: 27px;      /* equals max image height */
    width: 160px;
    border: 1px solid #ccc;
    white-space: nowrap;
    line-height: normal;
    text-align: center; margin: 1em 0;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

img {
    background: #3aa4af;
    vertical-align: middle;
    max-height: 25px;
    max-width: 160px;
}
</style>

<div class=frame>
    <span class="helper"></span>
  <img src="logo-trans.png" height=250 />
</div>
<div class=frame>
    <span class="helper"></span>
  <img src="logo-trans.png" height=25 />
</div>
<div class=frame>
    <span class="helper"></span>
  <img src="logo-trans.png" height=23 />
</div>
<div class=frame>
    <span class="helper"></span>
  <img src="logo-trans.png" height=21 />
</div>
<div class=frame>
    <span class="helper"></span>
  <img src="logo-trans.png" height=19 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=17 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=15 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=13 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=11 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=9 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=7 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=5 />
</div>
<div class=frame>
    <span class="helper"></span>
    <img src="logo-trans.png" height=3 />
</div>

```

**Wie funktioniert das Ganze?**

1.  Hat man zwei `inline-block` Elemente nebeneinander, kann man beide so anordnen, dass sie sich auf den anderen beziehen.Also kriegt man mit `vertical-align: middle` etwas in der Art:
    
    ![Two aligned blocks](https://i.stack.imgur.com/XIFPv.png)
    
2.  Hat nun das äußere Element eine fixe Höhe (in `px`, `em` order sonstiger Einheit), kann man die Höhe der inneren Elemente mit `%`. setzen
    
3.  Also fügt man `inline-block` mit `height: 100%` an das erste Helper Div in einem Div, das eine fixierte Höhe hat (.frame, siehe oben) wird das zweite `inline-block` Element (unser Bild) vertikal daneben zentriert.
4.  Da unser Helper keine Breite hat, ist das Bild dazu ebenfalls auch noch horizontal in der Mitte, mit einem `text-align:center`.