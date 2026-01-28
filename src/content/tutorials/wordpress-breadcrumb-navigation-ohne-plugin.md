---
title: 'Wordpress: Breadcrumb Navigation ohne Plugin'
date: '2015-04-06T17:30:05.000Z'
slug: wordpress-breadcrumb-navigation-ohne-plugin
tags:
  - '10'
  - '11'
  - '443'
  - '509'
  - '648'
  - '649'
description: "Möchte man eine simple Breadcrumb Navigation und dafür nicht gleich wieder ein Plugin installieren so habe ich hier einen kleinen Code-Schnipsel parat. Fügt folgenden Code in die functions.php eures Themes ein.\nfunctions.php \r\nfunction the_breadcrumb() {\r\n\tif (!is_home()) {\r\n\t\techo '&lt;a href=\"';\r\n\t\techo get_option('home');\r\n\t\techo '\"&gt;';\r\n\t\tbloginfo('name'); // der Blogname als Startseite, ansonsten vlt. Home oder Startseite schreiben\r\n\t\techo \"&lt;/a&gt; » \";\r\n\t\tif (is_category() || is_single()) {\r\n\t\t\tthe_category('title_li=');\r\n\t\t\tif (is_single()) {\r\n\t\t\t\techo \" » \";\r\n\t\t\t\tthe_title();\r\n\t\t\t}\r\n\t\t} elseif (is_page()) {\r\n\t\t\techo the_title();\r\n\t\t}\r\n\t}\r\n}\r\n Einbindung der Breadcrumb-Navigation \r\n&lt;?php the_breadcrumb(); ?&gt;\r\n Das Ganze lässt sich natürlich noch verfeiern, z.B.für noch weiter verschachtelte Menü, oder mit Links auf die Seiten, aber das sollte jedem selbst überlassen sein. Ansonsten fragt nach und ich helfe gerne."
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

[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#breadcrumb](/tag.html?tag=443&cHash=4cb6bfeab646e4b0adb878c1003555ef)[#without](/tag.html?tag=509&cHash=346dfff2551973134cc64aecd08e9a72)[#wp](/tag.html?tag=648&cHash=81505f53776d17c89fb5ce708d00fc85)[#functions.php](/tag.html?tag=649&cHash=9dc3f20e1480b6e6d7763cdc6433b43f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Apr 2015

Möchte man eine simple Breadcrumb Navigation und dafür nicht gleich wieder ein Plugin installieren so habe ich hier einen kleinen Code-Schnipsel parat. Fügt folgenden Code in die functions.php eures Themes ein.

**functions.php**

```

function the_breadcrumb() {
	if (!is_home()) {
		echo '<a href="';
		echo get_option('home');
		echo '">';
		bloginfo('name'); // der Blogname als Startseite, ansonsten vlt. Home oder Startseite schreiben
		echo "</a> » ";
		if (is_category() || is_single()) {
			the_category('title_li=');
			if (is_single()) {
				echo " » ";
				the_title();
			}
		} elseif (is_page()) {
			echo the_title();
		}
	}
}
```

**Einbindung der Breadcrumb-Navigation**

```

<?php the_breadcrumb(); ?>
```

Das Ganze lässt sich natürlich noch verfeiern, z.B.für noch weiter verschachtelte Menü, oder mit Links auf die Seiten, aber das sollte jedem selbst überlassen sein. Ansonsten fragt nach und ich helfe gerne.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.