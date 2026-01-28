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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS#HTML

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#bootstrap](/tag.html?tag=215&cHash=5fd70bd6667ab897b103c0d19cfacdfb)[#5](/tag.html?tag=446&cHash=989278989257d11cc3800b3ed4f2eae0)[#spalten](/tag.html?tag=447&cHash=7c585fef90ce3f30c9b6303f5b813ae6)[#colums](/tag.html?tag=448&cHash=c9c03f23774274ae76c17d6bf4bb953f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Apr 2014

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/f84d37ce99493155ee296c2b746191d0?s=75&d=mm&r=g)
    
    Karsten
    
    Danke.  
      
    Hat alles geklappt.
    
    25\. Sep 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/2b5a87f33f9c4ecfb2dae1515b2213d9?s=75&d=mm&r=g)
    
    Sunny
    
    Nicht dein ernst ....oder?  
    Du hast alles doppelt und falsch verschachtelt und in falscher Reihenfolge genommen. Das hier reicht vollkommen:  
    // 5 Columns  
    .fivecolumns .col-xs-2, .fivecolumns .col-sm-2, .fivecolumns .col-md-2, .fivecolumns .col-lg-2 {  
    width: 20%;  
    \*width: 20%;  
    }
    
    11\. Oct 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.