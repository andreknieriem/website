---
title: Bootstrap3 mit 5 Spalten? So geht's!
date: '2014-04-01T15:26:01.000Z'
slug: bootstrap3-mit-5-spalten-so-gehts
tags:
  - '25'
  - '215'
  - '446'
  - '447'
  - '448'
description: "Bootstrap 3 funktioniert ja schon echt gut, doch manchmal passt das Grid einfach nicht auf ein angedachtes Design. Möchte man, wie ich letztens 5 Spalten in einer Reihe haben, dann kann man folgendes in seine CSS Datei einfügen, natürlich erst nachdem Bootstrap geladen wurde. \r\n&lt;code class=\"language-css\"&gt;\r\n// 5 Columns \r\n@media (min-width: 768px){\r\n    .fivecolumns .col-md-2, .fivecolumns .col-sm-2, .fivecolumns .col-lg-2  {\r\n        width: 20%;\r\n        *width: 20%;\r\n    }\r\n}\r\n@media (min-width: 1200px) {\r\n    .fivecolumns .col-md-2, .fivecolumns .col-sm-2, .fivecolumns .col-lg-2 {\r\n        width: 20%;\r\n        *width: 20%;\r\n    }\r\n}\r\n@media (min-width: 768px) and (max-width: 979px) {\r\n    .fivecolumns .col-md-2, .fivecolumns .col-sm-2, .fivecolumns .col-lg-2 {\r\n        width: 20%;\r\n        *width: 20%;\r\n    }\r\n}\r\n&lt;/code&gt;\r\n Hat man das getan, muss man nur die Klasse \"fivecolumns\" an den Row-Div-Container einhängen. Das Ganze sieht dann ca. so aus: \r\n&lt;code class=\"language-markup\"&gt;\r\n&lt;div class=\"container\"&gt;\r\n    &lt;div class=\"row fivecolumns\"&gt;\r\n        &lt;div class=\"col-md-2\"&gt;1/5 Spalte&lt;/div&gt;\r\n        &lt;div class=\"col-md-2\"&gt;2/5 Spalte&lt;/div&gt;\r\n        &lt;div class=\"col-md-2\"&gt;3/5 Spalte&lt;/div&gt;\r\n        &lt;div class=\"col-md-2\"&gt;4/5 Spalte&lt;/div&gt;\r\n        &lt;div class=\"col-md-2\"&gt;5/5 Spalte&lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/code&gt;\r\n Viel Spaß mit eurem 5-Spaltigen Designs ;)"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Bootstrap 3 funktioniert ja schon echt gut, doch manchmal passt das Grid einfach nicht auf ein angedachtes Design. Möchte man, wie ich letztens 5 Spalten in einer Reihe haben, dann kann man folgendes in seine CSS Datei einfügen, natürlich erst nachdem Bootstrap geladen wurde.

<code class="language-css">
// 5 Columns 
@media (min-width: 768px){
    .fivecolumns .col-md-2, .fivecolumns .col-sm-2, .fivecolumns .col-lg-2  {
        width: 20%;
        \*width: 20%;
    }
}
@media (min-width: 1200px) {
    .fivecolumns .col-md-2, .fivecolumns .col-sm-2, .fivecolumns .col-lg-2 {
        width: 20%;
        \*width: 20%;
    }
}
@media (min-width: 768px) and (max-width: 979px) {
    .fivecolumns .col-md-2, .fivecolumns .col-sm-2, .fivecolumns .col-lg-2 {
        width: 20%;
        \*width: 20%;
    }
}
</code>

Hat man das getan, muss man nur die Klasse "**fivecolumns**" an den Row-Div-Container einhängen. Das Ganze sieht dann ca. so aus:

<code class="language-markup">
<div class="container">
    <div class="row fivecolumns">
        <div class="col-md-2">1/5 Spalte</div>
        <div class="col-md-2">2/5 Spalte</div>
        <div class="col-md-2">3/5 Spalte</div>
        <div class="col-md-2">4/5 Spalte</div>
        <div class="col-md-2">5/5 Spalte</div>
    </div>
</div>
</code>

Viel Spaß mit eurem 5-Spaltigen Designs ;)