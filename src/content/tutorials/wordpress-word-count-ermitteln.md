---
title: 'Wordpress: Word-Count ermitteln'
date: '2015-11-12T17:32:50.000Z'
slug: wordpress-word-count-ermitteln
tags:
  - '11'
  - '648'
  - '790'
  - '791'
description: "Möchte man in seinen Themes den Wordcount anzeigen, so hat Wordpress für das Backend ja eine eingebaute Funktion. Diese kann man ganz einfach für das Theme verfügbar machen. Hierfür muss einfach folgender Code in die funtions.php in euer Wordpress-Theme eingefügt werden. \r\nfunction word_count() {\r\n    $content = get_post_field( 'post_content', $post-&gt;ID );\r\n    $word_count = str_word_count( strip_tags( $content ) );\r\n    return $word_count;\r\n}\r\n Danach könnt ihr wie folgt auf auf die Funktion im Template zugreifen: \r\necho 'Anzahl Wörter: '.word_count();\r\n Ich hoffe ich konnte euch weiterhelfen."
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Wordpress#PHP

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#wp](/tag.html?tag=648&cHash=81505f53776d17c89fb5ce708d00fc85)[#wordcount](/tag.html?tag=790&cHash=a53622e8d161803b14f6f006abb14a51)[#wort anzahl](/tag.html?tag=791&cHash=578f6df73f7e6e3d3b5ed9e7e7b16da3)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Nov 2015

Möchte man in seinen Themes den Wordcount anzeigen, so hat Wordpress für das Backend ja eine eingebaute Funktion. Diese kann man ganz einfach für das Theme verfügbar machen. Hierfür muss einfach folgender Code in die funtions.php in euer Wordpress-Theme eingefügt werden.

```

function word_count() {
    $content = get_post_field( 'post_content', $post->ID );
    $word_count = str_word_count( strip_tags( $content ) );
    return $word_count;
}
```

Danach könnt ihr wie folgt auf auf die Funktion im Template zugreifen:

```

echo 'Anzahl Wörter: '.word_count();
```

Ich hoffe ich konnte euch weiterhelfen.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.