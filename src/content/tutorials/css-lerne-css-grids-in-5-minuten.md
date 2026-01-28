---
title: 'CSS: Lerne CSS-Grids in 5 Minuten'
date: '2018-02-21T08:50:00.000Z'
slug: css-lerne-css-grids-in-5-minuten
tags:
  - '25'
  - '1030'
  - '582'
  - '78'
description: "CSS Grids sind der neue Standard und spätestens seit dem Release von Bootstrap 4 auch einsatzfähig für die Mehrheit. In diesem kleinen Tutorial gebe ich einen kurzen Überblick über die Funktionsweise von CSS Grids. Das Tutorial habe ich größtenteils von hier übernommen und übersetzt.\r\nZuallererst hier einmal etwas Markup. Die zwei wichtigsten Komponenten für ein CSS Grid sind der Wrapper (parent) und die einzelnen Elemente/Items (children). Der Wrapper ist das Grid und die Elemente sind die Inhalte innerhalb&nbsp;des Grids. &lt;div class=\"wrapper\"&gt;\r\n  &lt;div&gt;1&lt;/div&gt;\r\n  &lt;div&gt;2&lt;/div&gt;\r\n  &lt;div&gt;3&lt;/div&gt;\r\n  &lt;div&gt;4&lt;/div&gt;\r\n  &lt;div&gt;5&lt;/div&gt;\r\n  &lt;div&gt;6&lt;/div&gt;\r\n&lt;/div&gt; Um den .wrapper nun in ein Grid zu verwandeln benutzen wir einfach folgende CSS Display Eigenschaft: .wrapper {\r\n    display: grid;\r\n} Haben wir das getan, ändert sich im Frontend nicht viel, da wir noch nicht definiert haben, wie unser Grid aussehen soll. Gerade werden die 6 div's einfach untereinander angezeigt.  Spalten (Columns) und Zeilen (Rows) Um das Ganze nun wie es richtiges Grid aussehen zu lassen machen wir folgende Änderungen. Ich möchte 3 Spalten in 2 Zeilen. So sind meine 6 Elemente untergebracht. Dazu benutzt man die&nbsp;grid-template-row&nbsp;und grid-template-column Eigenschaften. .wrapper {\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-template-rows: 50px 50px;\r\n} Dadurch, dass wir im Beispiel oben 3 Werte für&nbsp;grid-template-columns und 2 Werte für&nbsp;grid-template-rows verwendet haben, sagen wir dem Browser nun, dass wir 3 Spalten in der Breite von 100px und 2 Zeilen mit der Höhe von 50px haben wollen. Das Grid sieht dann beispielsweise so aus:  Hier noch ein anderes Beispiel mit verschiedenen&nbsp;Höhen und Breiten, um die Eigenschaften zu verdeutlichen. .wrapper {\r\n    display: grid;\r\n    grid-template-columns: 200px 50px 100px;\r\n    grid-template-rows: 100px 30px;\r\n} Und so siehts dann aus:  Elemente platzieren Als nächstes schauen wir uns, wie man Elemente innerhalb des Grids positioniert. Ab hier wird es spannend und man merkt, dass es super einfach ist, Layouts zu erstellen.\r\nFangen wir mit einem 3x3 Grid an und benutzen dasselbe Markup, wie oben. .wrapper {\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px;\r\n    grid-template-rows: 100px 100px 100px;\r\n}  Da wir das Markup nicht angepasst haben sehen wir nur ein 3x2 Grid, obwohl wir doch gerade ein 3x3 Grid angegeben haben. Das liegt natürlich daran, dass es nur 6 Elemente gibt. Sobald es mehr werden, werden die fehlenden Lücken automatisch gefüllt.\r\nUm die Elemente zu positionieren und deren Größe zu ändern benutzen wir die&nbsp;grid-column and grid-row&nbsp;Eigenschaften. .item1 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 4;\r\n} Was wir mit diesem CSS sagen ist, dass das erste Element in der ersten Grid-Linie starten soll und der vierten enden soll, also die komplette obere Zeile einnimmt. So würde es jetzt aussehen:  Wenn ihr euch nun fragt, warum wir 4 Spalten-Linien haben, aber nur 3 Spalten, dann guckt euch das Bild an. Ich habe dort die 4 Linien in dunkelgrau eingezeichnet:  Man beachte, dass wir nun alle Zeilen im Grid benutzen. Dadurch, dass das erste Element nun die komplette erste Reihe einnimmt, werden alle anderen Elemente runter geschoben.\r\nDas CSS oben, kann aber noch einfacher und kürzer schreiben: .item1 {\r\n    grid-column: 1 / 4;\r\n}\r\nUm sicherzugehen, dass ihr das Konzept verstanden habt, werden wir die Elemente noch ein wenig besser anordnen\r\n.item1 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n.item3 {\r\n    grid-row-start: 2;\r\n    grid-row-end: 4;\r\n}\r\n.item4 {\r\n    grid-column-start: 2;\r\n    grid-column-end: 4;\r\n} Und so sieht das Ganze dann aus. Versucht aus dem CSS zu verstehen, warum das Layout nun so aussieht. Das sollte euch nun gelingen.  Und das wars auch schon! Es gibt natürlich noch viele Dinge, die ich hier nicht behandelt habe. Diese werden nach und nach in eigenen Tutorials kommen. Für weitere Fragen scheut euch nicht, den Kommentar-Bereich zu benutzen!"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#CSS#HTML

* * *

![](/fileadmin/_processed_/0/0/csm_css_b1ca039252.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#css](/tag.html?tag=25&cHash=f58c1375e861e856214236958d062a98)[#css3](/tag.html?tag=78&cHash=8d28466279fde4e903373d7cd58c1dd0)[#layout](/tag.html?tag=582&cHash=37e9b7e2e70bada207988fca7737a175)[#grids](/tag.html?tag=1030&cHash=858212d2c80ceaef11a63bb559f43f2a)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

21\. Feb 2018

CSS Grids sind der neue Standard und spätestens seit dem Release von Bootstrap 4 auch einsatzfähig für die Mehrheit. In diesem kleinen Tutorial gebe ich einen kurzen Überblick über die Funktionsweise von CSS Grids. Das Tutorial habe ich größtenteils von [hier](https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228) übernommen und übersetzt.

Zuallererst hier einmal etwas Markup. Die zwei wichtigsten Komponenten für ein CSS Grid sind der Wrapper (parent) und die einzelnen Elemente/Items (children). Der Wrapper ist das Grid und die Elemente sind die Inhalte innerhalb des Grids.

```
<div class="wrapper">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

Um den .wrapper nun in ein Grid zu verwandeln benutzen wir einfach folgende CSS Display Eigenschaft:

```
.wrapper {
    display: grid;
}
```

Haben wir das getan, ändert sich im Frontend nicht viel, da wir noch nicht definiert haben, wie unser Grid aussehen soll. Gerade werden die 6 div's einfach untereinander angezeigt.

[![](/fileadmin/Daten/Tutorials/grid0.png)](/fileadmin/Daten/Tutorials/grid0.png)

**Spalten (Columns) und Zeilen (Rows)**  
Um das Ganze nun wie es richtiges Grid aussehen zu lassen machen wir folgende Änderungen. Ich möchte 3 Spalten in 2 Zeilen. So sind meine 6 Elemente untergebracht. Dazu benutzt man die **grid-template-row** und **grid-template-column** Eigenschaften.

```
.wrapper {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 50px 50px;
}
```

Dadurch, dass wir im Beispiel oben 3 Werte für grid-template-columns und 2 Werte für grid-template-rows verwendet haben, sagen wir dem Browser nun, dass wir 3 Spalten in der Breite von 100px und 2 Zeilen mit der Höhe von 50px haben wollen. Das Grid sieht dann beispielsweise so aus:

[![](/fileadmin/Daten/Tutorials/grid1.png)](/fileadmin/Daten/Tutorials/grid1.png)

Hier noch ein anderes Beispiel mit verschiedenen Höhen und Breiten, um die Eigenschaften zu verdeutlichen.

```
.wrapper {
    display: grid;
    grid-template-columns: 200px 50px 100px;
    grid-template-rows: 100px 30px;
}
```

Und so siehts dann aus:

[![](/fileadmin/Daten/Tutorials/grid2.png)](/fileadmin/Daten/Tutorials/grid2.png)

**Elemente platzieren**  
Als nächstes schauen wir uns, wie man Elemente innerhalb des Grids positioniert. Ab hier wird es spannend und man merkt, dass es super einfach ist, Layouts zu erstellen.

Fangen wir mit einem 3x3 Grid an und benutzen dasselbe Markup, wie oben.

```
.wrapper {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```

[![](/fileadmin/Daten/Tutorials/grid3.png)](/fileadmin/Daten/Tutorials/grid3.png)

> Da wir das Markup nicht angepasst haben sehen wir nur ein 3x2 Grid, obwohl wir doch gerade ein 3x3 Grid angegeben haben. Das liegt natürlich daran, dass es nur 6 Elemente gibt. Sobald es mehr werden, werden die fehlenden Lücken automatisch gefüllt.

Um die Elemente zu positionieren und deren Größe zu ändern benutzen wir die **grid-column** and **grid-row** Eigenschaften.

```
.item1 {
    grid-column-start: 1;
    grid-column-end: 4;
}
```

Was wir mit diesem CSS sagen ist, dass das erste Element in der ersten Grid-Linie starten soll und der vierten enden soll, also die komplette obere Zeile einnimmt. So würde es jetzt aussehen:

[![](/fileadmin/Daten/Tutorials/grid4.png)](/fileadmin/Daten/Tutorials/grid4.png)

Wenn ihr euch nun fragt, warum wir 4 Spalten-Linien haben, aber nur 3 Spalten, dann guckt euch das Bild an. Ich habe dort die 4 Linien in dunkelgrau eingezeichnet:

[![](/fileadmin/Daten/Tutorials/grid5.png)](/fileadmin/Daten/Tutorials/grid5.png)

Man beachte, dass wir nun alle Zeilen im Grid benutzen. Dadurch, dass das erste Element nun die komplette erste Reihe einnimmt, werden alle anderen Elemente runter geschoben.

Das CSS oben, kann aber noch einfacher und kürzer schreiben:

```
.item1 {
    grid-column: 1 / 4;
}
```

Um sicherzugehen, dass ihr das Konzept verstanden habt, werden wir die Elemente noch ein wenig besser anordnen

```
.item1 {
    grid-column-start: 1;
    grid-column-end: 3;
}
.item3 {
    grid-row-start: 2;
    grid-row-end: 4;
}
.item4 {
    grid-column-start: 2;
    grid-column-end: 4;
}
```

Und so sieht das Ganze dann aus. Versucht aus dem CSS zu verstehen, warum das Layout nun so aussieht. Das sollte euch nun gelingen.

[![](/fileadmin/Daten/Tutorials/grid6.png)](/fileadmin/Daten/Tutorials/grid6.png)

Und das wars auch schon! Es gibt natürlich noch viele Dinge, die ich hier nicht behandelt habe. Diese werden nach und nach in eigenen Tutorials kommen. Für weitere Fragen scheut euch nicht, den Kommentar-Bereich zu benutzen!

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/a6a64bf4d11610de9c8bde040e93f391?s=75&d=mm&r=g)
    
    [Karl-Heinz Ranz](www.outdoor-mediashow.de)
    
    Hallo André,  
    bin auf Deine Seite gestoßen, weil ich auf meiner Homepage etwas ändern müchte.  
    Auf der Seite Sponsoren möchte ich drei Spalten und mehrere Zeilen anlegen. In die einzelnen Felder sollen dann die Sponsorenlogos bzw. kleine Bilder von Produkten der Sponsoren eingefügt und verlinkt werden.  
    Ich bekomms nicht so richtig hin, bin eher der Fotograf.  
    Vielleicht hast Du eine schnelle Idee.  
      
    Beste Grüße  
      
    Karl-Heinz  
    Tel. 01520-1779798
    
    10\. Sep 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e5f2ec9be910a3773cbd23e13a538f51?s=75&d=mm&r=g)
    
    Jan
    
    Danke für diese schöne Darstellung.  
    Generell mag ich Deine Tutorials sehr! Mach weiter so!
    
    15\. Oct 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/cbf2472b7da9274bc3f1b05425b1006c?s=75&d=mm&r=g)
    
    [ich](keine)
    
    Das hast du sehr schön gemacht lieber André. Danke
    
    21\. Feb 2018 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.