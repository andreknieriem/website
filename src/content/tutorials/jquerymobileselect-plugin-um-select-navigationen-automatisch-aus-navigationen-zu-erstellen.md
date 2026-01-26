---
title: >-
  jquery.mobileSelect - Plugin um Select-Navigationen automatisch aus
  Navigationen zu erstellen
date: '2014-05-16T12:31:50.000Z'
slug: >-
  jquerymobileselect-plugin-um-select-navigationen-automatisch-aus-navigationen-zu-erstellen
tags:
  - '9'
  - '10'
  - '20'
  - '151'
  - '474'
description: "Da ich in letzter Zeit öfter mal große Menüs für mobile Webseiten zugänglich machen musste, die so viele Unter- und Unter-Unter-Seiten haben, habe ich mich dazu entschieden ein normales HTML-Select zu erstellen, da dieses auf jedem Gerät funktioniert und bedienbar ist. Dafür habe ich bei Wordpress und TYPO3 immer ein 2. Menü rendern lassen und mir dann gedacht, dass man dies auch mit Javascript lösen könnte. Deswegen habe ich ein jQuery-Plugin geschrieben, das genau das bewerkstelligt.\nIm Folgenden ist die Funktionsweise mit allen Optionen einmal aufgelistet und darunter dann die Demo, die daraus resultiert. \r\n$('.menu').mobileMenu({\r\n\tclassName: \"mobileMenu\",\r\n\tselectId: \"mobileMenu\",\r\n\tdepthSign: '-',\r\n\ttarget: $('.testwrapper'),\r\n\tminDepth: 0,\r\n\tmaxDepth: 10000\r\n});\r\n Demo\n\n\njQuery(function(){\n\tjQuery('.menu').mobileMenu({\n\tclassName: \"mobileMenu\",\n\tselectId: \"mobileMenu\",\n\tdepthSign: '-',\n\ttarget: jQuery('.testwrapper'),\n\tminDepth: 0,\n\tmaxDepth: 10000\n\t\t\t});\n\t\t});\n\nHtml-Menü\n\n\t\tTest1\n\t\tTest2\n\t\t\t\n\t\t\t\tsub5\n\t\t\t\tsub6\n\t\t\t\tsub7\n\t\t\t\tsub8\n\t\t\t\n\t\t\n\t\tTest3\n\t\tTest4\n\t\tTest5\n\t\t\t\n\t\t\t\tsub1\n\t\t\t\tsub2\n\t\t\t\tsub3\n\t\t\t\tsub4\n\t\t\t\t\t\n\t\t\t\t\t\tsubsub1\n\t\t\t\t\t\tsubsub2\n\t\t\t\t\t\tsubsub3\n\t\t\t\t\t\tsubsub4\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\n\t\tTest6\n\t\nErstelltes Select-Menü\n\t\n\t\nFür weitere Informationen könnt ihr auf mein Github Repository gucken und euch das Plugin herunterladen.\nAuf Github ansehen/herunterladen"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# jquery.mobileSelect - Plugin um Select-Navigationen automatisch aus Navigationen zu erstellen

#Tutorials#Blog#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#mobile](/tag.html?tag=9&cHash=b5bd1bd63dee0e1cdebd12b261ae5e41)[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#menu](/tag.html?tag=474&cHash=afa1a85544c323a01d349889dfb80551)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. May 2014

Da ich in letzter Zeit öfter mal große Menüs für mobile Webseiten zugänglich machen musste, die so viele Unter- und Unter-Unter-Seiten haben, habe ich mich dazu entschieden ein normales HTML-Select zu erstellen, da dieses auf jedem Gerät funktioniert und bedienbar ist. Dafür habe ich bei Wordpress und TYPO3 immer ein 2. Menü rendern lassen und mir dann gedacht, dass man dies auch mit Javascript lösen könnte. Deswegen habe ich ein jQuery-Plugin geschrieben, das genau das bewerkstelligt.

Im Folgenden ist die Funktionsweise mit allen Optionen einmal aufgelistet und darunter dann die Demo, die daraus resultiert.

```

$('.menu').mobileMenu({
	className: "mobileMenu",
	selectId: "mobileMenu",
	depthSign: '-',
	target: $('.testwrapper'),
	minDepth: 0,
	maxDepth: 10000
});
```

**Demo**

<script src="/wp-content/themes/andreknieriemv3/resources/js/jquery.mobileSelect.js"></script>

<script>

jQuery(function(){

jQuery('.menu').mobileMenu({

className: "mobileMenu",

selectId: "mobileMenu",

depthSign: '-',

target: jQuery('.testwrapper'),

minDepth: 0,

maxDepth: 10000

});

});

</script>

### Html-Menü

*   [Test1](/test1)
*   [Test2](/test5)
    *   [sub5](/sub5)
    *   [sub6](/sub6)
    *   [sub7](/sub7)
    *   [sub8](/sub8)
*   [Test3](/test3)
*   [Test4](/test4)
*   [Test5](/test5)
    *   [sub1](/sub1)
    *   [sub2](/sub2)
    *   [sub3](/sub3)
    *   [sub4](/sub4)
        *   [subsub1](/subsub1)
        *   [subsub2](/subsub2)
        *   [subsub3](/subsub3)
        *   [subsub4](/subsub4)
*   [Test6](/test6)

### Erstelltes Select-Menü

Für weitere Informationen könnt ihr auf mein Github Repository gucken und euch das Plugin herunterladen.

[Auf Github ansehen/herunterladen](https://github.com/andreknieriem/mobileMenu)

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.