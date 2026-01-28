---
title: 'CSS: Safari border-radius + overflow: hidden + CSS transform fix'
date: '2018-11-26T12:27:00.000Z'
slug: css-safari-border-radius-overflow-hidden-css-transform-fix
tags:
  - safari
  - css
  - transform
  - translate
  - flikker
  - bug
  - fix
description: "Der Safari-Browser hat bei CSS-Transitions an Elementen, die overflow:hidden haben, Probleme mit dem Rendern. So kann es vorkommen, dass die ausgeblendeten Inhalte kurz aufflackern, sobald die Animation beginnt.&nbsp;\r\nMit dem folgenden kleinen Snippet lässt sich das Ganze lösen:&nbsp; // Bei einem Element mit overflow hinzufügen\r\n-webkit-mask-image: -webkit-radial-gradient(white, black);"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Der Safari-Browser hat bei CSS-Transitions an Elementen, die overflow:hidden haben, Probleme mit dem Rendern. So kann es vorkommen, dass die ausgeblendeten Inhalte kurz aufflackern, sobald die Animation beginnt. 

Mit dem folgenden kleinen Snippet lässt sich das Ganze lösen: 

```
// Bei einem Element mit overflow hinzufügen
-webkit-mask-image: -webkit-radial-gradient(white, black);
```