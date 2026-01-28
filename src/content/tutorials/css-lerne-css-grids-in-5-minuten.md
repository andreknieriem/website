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
demo_url: null
download_url: null
---

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