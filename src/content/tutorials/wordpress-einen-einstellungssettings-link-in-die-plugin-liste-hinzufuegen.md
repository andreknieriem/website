---
title: 'Wordpress: Einen "Einstellungs/Settings" Link in die Plugin-Liste hinzufügen'
date: '2015-10-12T16:03:07.000Z'
slug: wordpress-einen-einstellungssettings-link-in-die-plugin-liste-hinzufuegen
tags:
  - '10'
  - '11'
  - '427'
  - '767'
  - '768'
  - '769'
description: "Möchte man für sein eigenes Wordpress Plugin einen Einstellungs-, bzw. generell einen Link hinzufügen, so kann man das mit der folgenden Funktion machen. \n \r\n// Add settings link on plugin page\r\nfunction your_plugin_settings_link($links) { \r\n  $settings_link = '&lt;a href=\"options-general.php?page=your_plugin.php\"&gt;'.__('Settings'), 'yourplugin').'&lt;/a&gt;'; \r\n  array_unshift($links, $settings_link); \r\n  return $links; \r\n}\r\n \r\n$plugin = plugin_basename(__FILE__); \r\nadd_filter(\"plugin_action_links_$plugin\", 'your_plugin_settings_link' );\r\n Das Ganze muss natürlich in eure Plugin Php-Datei eingefügt werden."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Wordpress: Einen "Einstellungs/Settings" Link in die Plugin-Liste hinzufügen

#Tutorials#Wordpress#PHP

* * *

![](/fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#wordpress](/tag.html?tag=11&cHash=7c8d42fbb4fc142d55b4be8ceba8a33f)[#link](/tag.html?tag=427&cHash=ef4df690d2964f514fe9f0c55ae19f49)[#settings](/tag.html?tag=767&cHash=beea2e4f3ee8a725ade585bb8043ab7d)[#options](/tag.html?tag=768&cHash=4d738a780532797ca737a0e711fc94e7)[#einstellungen](/tag.html?tag=769&cHash=103349a5b68b48c9cde044378784c48f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Oct 2015

Möchte man für sein eigenes Wordpress Plugin einen Einstellungs-, bzw. generell einen Link hinzufügen, so kann man das mit der folgenden Funktion machen.

[![settings](http://andreknieriem.de/wp-content/uploads/2015/10/settings-766x77.png)](http://andreknieriem.de/wp-content/uploads/2015/10/settings.png)

```

// Add settings link on plugin page
function your_plugin_settings_link($links) { 
  $settings_link = '<a href="options-general.php?page=your_plugin.php">'.__('Settings'), 'yourplugin').'</a>'; 
  array_unshift($links, $settings_link); 
  return $links; 
}
 
$plugin = plugin_basename(__FILE__); 
add_filter("plugin_action_links_$plugin", 'your_plugin_settings_link' );
```

Das Ganze muss natürlich in eure Plugin Php-Datei eingefügt werden.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.