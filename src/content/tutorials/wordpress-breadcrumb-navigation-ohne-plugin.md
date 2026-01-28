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
demo_url: null
download_url: null
---

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