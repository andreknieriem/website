---
title: Einen Weiterlesen/Read-More Link bei Wordpress the_excerpt einfügen
date: '2013-10-09T11:44:46.000Z'
slug: einen-weiterlesenread-more-link-bei-wordpress-the-excerpt-einfuegen
tags:
  - '11'
  - '210'
  - '211'
  - '212'
  - '213'
  - '214'
description: "Ich sitze gerade an einem neuen Projekt und brauchte einen Read-More Link bei meinen Vorschautexten (excerpts). Das Ganze lässt sich relativ einfach via functions.php ergänzen.\nDafür einfach folgenden Code einfügen: \n\n// Excerpt Read More Link einbauen\nfunction new_excerpt_more($more) {\n\tglobal $post;\n\treturn '… &lt;a href=\"'. get_permalink($post-&gt;ID) . '\"&gt;' . 'Weiterlesen' . '&lt;/a&gt;';\n}\nadd_filter('excerpt_more', 'new_excerpt_more');\n\n Das wars auch schon! Man kann das Ganze natürlich nach belieben anpassen, Klassen ergänzen oder sogar Sprachabhängig das weiterlesen machem, aber das sei jedem selbst überlassen.\nWeitere Infos gibt es auch hier:\nWordress Doku"
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Ich sitze gerade an einem neuen Projekt und brauchte einen Read-More Link bei meinen Vorschautexten (excerpts). Das Ganze lässt sich relativ einfach via **functions.php** ergänzen.

Dafür einfach folgenden Code einfügen:

```


// Excerpt Read More Link einbauen
function new_excerpt_more($more) {
	global $post;
	return '… <a href="'. get_permalink($post->ID) . '">' . 'Weiterlesen' . '</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');

```

Das wars auch schon! Man kann das Ganze natürlich nach belieben anpassen, Klassen ergänzen oder sogar Sprachabhängig das weiterlesen machem, aber das sei jedem selbst überlassen.

Weitere Infos gibt es auch hier:

[Wordress Doku](http://codex.wordpress.org/Customizing_the_Read_More)