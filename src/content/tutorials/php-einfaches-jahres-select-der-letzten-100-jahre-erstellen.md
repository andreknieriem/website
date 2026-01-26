---
title: 'PHP: Einfaches Jahres-Select der letzten 100 Jahre erstellen'
date: '2015-12-16T16:01:35.000Z'
slug: php-einfaches-jahres-select-der-letzten-100-jahre-erstellen
tags:
  - '41'
  - '598'
  - '798'
  - '799'
  - '800'
description: "Hier mal ein kleines Snippet um schnell in PHP ein Select mit den letzten 100 Jahren zu erstellen. \r\n&lt;select name=\"year\"&gt;\r\n&lt;?php \r\n$years = range(date(\"Y\"), date(\"Y\", strtotime(\"now - 100 years\"))); \r\nforeach($years as $year){ \r\n    echo'&lt;option value=\"'.$year.'\"&gt;'.$year.'&lt;/option&gt;'; \r\n} \r\n?&gt; \r\n&lt;/select&gt;\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Einfaches Jahres-Select der letzten 100 Jahre erstellen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#create](/tag.html?tag=598&cHash=d278ac10d2671ead85013f073d1eadbe)[#jahres select](/tag.html?tag=798&cHash=a44055c1c5ea117a2861f1fb9817d069)[#100 jahre](/tag.html?tag=799&cHash=6a9b683793c87cf3e13c05ab70b8010c)[#snippet](/tag.html?tag=800&cHash=3e4cd918329a96d6e9d653d7b0e7f1f5)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. Dec 2015

Hier mal ein kleines Snippet um schnell in PHP ein Select mit den letzten 100 Jahren zu erstellen.

```

<select name="year">
<?php 
$years = range(date("Y"), date("Y", strtotime("now - 100 years"))); 
foreach($years as $year){ 
    echo'<option value="'.$year.'">'.$year.'</option>'; 
} 
?> 
</select>
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.