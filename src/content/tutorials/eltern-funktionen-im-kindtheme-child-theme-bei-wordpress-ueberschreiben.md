---
title: Eltern-Funktionen im Kindtheme (child-theme) bei Wordpress überschreiben
date: '2013-09-05T06:30:19.000Z'
slug: eltern-funktionen-im-kindtheme-child-theme-bei-wordpress-ueberschreiben
tags:
  - '11'
  - '41'
  - '176'
  - '177'
  - '178'
  - '179'
  - '180'
  - '181'
description: >-
  Wenn man ein Theme nutzt, dass man ein wenig bearbeiten möchte, kommt man
  nicht drumrum ein Child-Theme zu erstellen. Hat man dieses nun erstellt und
  möchte Funktionen des Eltern-Themes überschreiben geht das am besten
  folgendermaßen:

  - Die Funktion aus dem Parent-Theme komplett kopieren und in die functions.php
  des Child-Themes einfügen.

  - Die Funktion unbenennen - am besten mit child_ vor dem funktionsnamen

  - Die Funktion so abändern wie gewünscht

  - Die alte Funktion deaktivieren

  - Die neue Funktion aktivieren

  Die alte Funktion deaktivieren

  Um eine Funktion zu deaktivieren muss man die "Action" entfernen. Das Ganze
  sollte beim initialisern des Templates passieren. Das Ganze geht dann so:
  (Beispiel "thematic" Theme) 

  // Remove the default Thematic blogtitle function

  function remove_thematic_actions() {
      remove_action('thematic_header','thematic_blogtitle',3);
  }

  // Call 'remove_thematic_actions' (above) during WP initialization

  add_action('init','remove_thematic_actions');
   Die neue Funktion aktivieren
  Nun müssen wir die neue Funktion nur noch aufrufen. Das Ganze geht dann wie
  folgt: 

  add_action('thematic_header','child_thematic_blogtitle', 3);
   Ich hoffe, dass das einigen von euch helfen wird!
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Wenn man ein Theme nutzt, dass man ein wenig bearbeiten möchte, kommt man nicht drumrum ein Child-Theme zu erstellen. Hat man dieses nun erstellt und möchte Funktionen des Eltern-Themes überschreiben geht das am besten folgendermaßen:

\- Die Funktion aus dem Parent-Theme komplett kopieren und in die functions.php des Child-Themes einfügen.

\- Die Funktion unbenennen - am besten mit child\_ vor dem funktionsnamen

\- Die Funktion so abändern wie gewünscht

\- Die alte Funktion deaktivieren

\- Die neue Funktion aktivieren

**Die alte Funktion deaktivieren**

Um eine Funktion zu deaktivieren muss man die "Action" entfernen. Das Ganze sollte beim initialisern des Templates passieren. Das Ganze geht dann so: (Beispiel "thematic" Theme)

```

// Remove the default Thematic blogtitle function
function remove_thematic_actions() {
    remove_action('thematic_header','thematic_blogtitle',3);
}
// Call 'remove_thematic_actions' (above) during WP initialization
add_action('init','remove_thematic_actions');
```

**Die neue Funktion aktivieren**

Nun müssen wir die neue Funktion nur noch aufrufen. Das Ganze geht dann wie folgt:

```

add_action('thematic_header','child_thematic_blogtitle', 3);
```

Ich hoffe, dass das einigen von euch helfen wird!