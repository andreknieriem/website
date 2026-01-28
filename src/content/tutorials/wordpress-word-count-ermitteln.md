---
title: 'Wordpress: Word-Count ermitteln'
date: '2015-11-12T17:32:50.000Z'
slug: wordpress-word-count-ermitteln
tags:
  - wordpress
  - wp
  - wordcount
  - wort anzahl
description: "Möchte man in seinen Themes den Wordcount anzeigen, so hat Wordpress für das Backend ja eine eingebaute Funktion. Diese kann man ganz einfach für das Theme verfügbar machen. Hierfür muss einfach folgender Code in die funtions.php in euer Wordpress-Theme eingefügt werden. \r\nfunction word_count() {\r\n    $content = get_post_field( 'post_content', $post-&gt;ID );\r\n    $word_count = str_word_count( strip_tags( $content ) );\r\n    return $word_count;\r\n}\r\n Danach könnt ihr wie folgt auf auf die Funktion im Template zugreifen: \r\necho 'Anzahl Wörter: '.word_count();\r\n Ich hoffe ich konnte euch weiterhelfen."
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

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