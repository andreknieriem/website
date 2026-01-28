---
title: Sass & Color-Variablen - So geht's
date: '2014-04-22T06:29:32.000Z'
slug: sass-color-variablen-so-gehts
tags:
  - tutorial
  - sass
  - variables
  - compass
  - color
  - farben
  - howto
description: "If you write CSS and you’re not using SASS & Compass yet, you should stop whatever you’re doing and go download Codekit right now. Do it, you’ll thank me later.\nBut if you’re already familiar with the awesomeness that is SASS, I’d like to share a small tip about handling color variables.\nThe CSS Way\nFirst of all, just so we’re all on the same page, here’s how you’d use colors in plain old dumb CSS: \r\n$darkgrey: #333333;\r\n$lightblue: #001eff;\r\n$lightred: #ff0000; // set your new color…\r\n \r\n$text_color: $darkgrey;\r\n$link_color: $lightred; // …and use it here\r\n$border_color: $lightblue;\r\n \r\n.myClass{\r\n  color: $text_color;\r\n  border-color: $border_color;\r\n}\r\na{\r\n  color: $link_color;\r\n}\r\n Want to make links red instead of blue, but without affecting the color of the borders? Not a problem! \r\n// first we set descriptive variables:\r\n$darkgrey: #333333;\r\n$blue: #001eff;\r\n \r\n// then we set functional variables:\r\n$text_color: $darkgrey;\r\n$link_color: $lightblue;\r\n$border_color: $lightblue;\r\n \r\n.myClass{\r\n  color: $text_color;\r\n  border-color: $border_color;\r\n}\r\na{\r\n  color: $link_color;\r\n}\r\n See the problem? Not only does it look weird, but what happens when I want to change the color of borders, but not links? I’ll have to manually edit my code once again, which is the problem we were trying to solve in the first place…\nThe Solution\nThe solution is actually pretty simple once you understand the problem. We’ll use a two-tier system, with both functional and descriptive variable names. Here’s what I mean: \r\n$text_color: #333333;\r\n$link_color: #001eff;\r\n \r\n.myClass{\r\n  color: $text_color;\r\n  border-color: $link_color; // insanity!\r\n}\r\na{\r\n  color: $link_color;\r\n}\r\n Now we can change our link color without introducing any ambiguities in our code. Mission accomplished!\nIt Gets Tricky\nBut wait, what if I want to add a border, and to make sure my design stays harmonious I decide to make that border the same color as my links? \r\n$text_color: #333333;\r\n$link_color: #001eff;\r\n \r\n.myClass{\r\n  color: $text_color;\r\n}\r\na{\r\n  color: $link_color;\r\n}\r\n Our “$blue” color is now actually red! Nothing makes sense anymore!\nFunctional Variable Names\nThankfully there’s a simple solution: instead of using variable names that describe the color, we’ll use names that describe the color’s function. \r\n$darkgrey: #333333;\r\n$lightblue: #ff0000; // not actually blue!\r\n \r\n.myClass{\r\n  color: $darkgrey;\r\n}\r\na{\r\n  color: $lightblue;\r\n}\r\n This will work great… as long as your links are blue. What happens when you decide to make your links red instead of blue? \r\n// first we set the variables:\r\n$darkgrey: #333333;\r\n$lightblue: #001eff;\r\n \r\n// now we can use them in our code:\r\n.myClass{\r\n  color: $darkgrey;\r\n}\r\na{\r\n  color: $lightblue;\r\n}\r\n Simple enough. But the problem is that if I want to change a color, I usually have to change it in multiple places.\nVariables to the Rescue\nSASS lets us define reusable variables, which can be used for any type of value but are especially useful for colors: \r\n.myClass{\r\n  color: #333333;\r\n}\r\na{\r\n  color: #001eff;\r\n}\r\n So here you go. This is a simple tip, but I hope you’ll find it useful! And if you have another way of organizing your colors, or some other SASS/Compass tips, please share them in the comments or in the Hacker News thread!\nQuelle: http://sachagreif.com/sass-color-variables/"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

If you write CSS and you’re not using SASS & Compass yet, you should stop whatever you’re doing and go download Codekit right now. Do it, you’ll thank me later.

But if you’re already familiar with the awesomeness that is SASS, I’d like to share a small tip about handling color variables.

## The CSS Way

First of all, just so we’re all on the same page, here’s how you’d use colors in plain old dumb CSS:

```css

$darkgrey: #333333;
$lightblue: #001eff;
$lightred: #ff0000; // set your new color…
 
$text_color: $darkgrey;
$link_color: $lightred; // …and use it here
$border_color: $lightblue;
 
.myClass{
  color: $text_color;
  border-color: $border_color;
}
a{
  color: $link_color;
}

```

Want to make links red instead of blue, but without affecting the color of the borders? Not a problem!

```css

// first we set descriptive variables:
$darkgrey: #333333;
$blue: #001eff;
 
// then we set functional variables:
$text_color: $darkgrey;
$link_color: $lightblue;
$border_color: $lightblue;
 
.myClass{
  color: $text_color;
  border-color: $border_color;
}
a{
  color: $link_color;
}

```

See the problem? Not only does it look weird, but what happens when I want to change the color of borders, but not links? I’ll have to manually edit my code once again, which is the problem we were trying to solve in the first place…

## The Solution

The solution is actually pretty simple once you understand the problem. We’ll use a two-tier system, with both functional and descriptive variable names. Here’s what I mean:

```css

$text_color: #333333;
$link_color: #001eff;
 
.myClass{
  color: $text_color;
  border-color: $link_color; // insanity!
}
a{
  color: $link_color;
}

```

Now we can change our link color without introducing any ambiguities in our code. Mission accomplished!

## It Gets Tricky

But wait, what if I want to add a border, and to make sure my design stays harmonious I decide to make that border the same color as my links?

```css

$text_color: #333333;
$link_color: #001eff;
 
.myClass{
  color: $text_color;
}
a{
  color: $link_color;
}

```

Our “$blue” color is now actually red! Nothing makes sense anymore!

## Functional Variable Names

Thankfully there’s a simple solution: instead of using variable names that describe the color, we’ll use names that describe the color’s function.

```css

$darkgrey: #333333;
$lightblue: #ff0000; // not actually blue!
 
.myClass{
  color: $darkgrey;
}
a{
  color: $lightblue;
}

```

This will work great… as long as your links are blue. What happens when you decide to make your links red instead of blue?

```css

// first we set the variables:
$darkgrey: #333333;
$lightblue: #001eff;
 
// now we can use them in our code:
.myClass{
  color: $darkgrey;
}
a{
  color: $lightblue;
}

```

Simple enough. But the problem is that if I want to change a color, I usually have to change it in multiple places.

## Variables to the Rescue

SASS lets us define reusable variables, which can be used for any type of value but are especially useful for colors:

```css

.myClass{
  color: #333333;
}
a{
  color: #001eff;
}

```

So here you go. This is a simple tip, but I hope you’ll find it useful! And if you have another way of organizing your colors, or some other SASS/Compass tips, please share them in the comments or in the Hacker News thread!

Quelle: [sachagreif.com/sass-color-variables/](http://sachagreif.com/sass-color-variables/)