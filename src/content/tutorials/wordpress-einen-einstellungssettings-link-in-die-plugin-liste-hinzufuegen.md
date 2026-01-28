---
title: 'Wordpress: Einen "Einstellungs/Settings" Link in die Plugin-Liste hinzufügen'
date: '2015-10-12T16:03:07.000Z'
slug: wordpress-einen-einstellungssettings-link-in-die-plugin-liste-hinzufuegen
tags:
  - plugin
  - wordpress
  - link
  - settings
  - options
  - einstellungen
description: "Möchte man für sein eigenes Wordpress Plugin einen Einstellungs-, bzw. generell einen Link hinzufügen, so kann man das mit der folgenden Funktion machen. \n \r\n// Add settings link on plugin page\r\nfunction your_plugin_settings_link($links) { \r\n  $settings_link = '&lt;a href=\"options-general.php?page=your_plugin.php\"&gt;'.__('Settings'), 'yourplugin').'&lt;/a&gt;'; \r\n  array_unshift($links, $settings_link); \r\n  return $links; \r\n}\r\n \r\n$plugin = plugin_basename(__FILE__); \r\nadd_filter(\"plugin_action_links_$plugin\", 'your_plugin_settings_link' );\r\n Das Ganze muss natürlich in eure Plugin Php-Datei eingefügt werden."
image: /fileadmin/_processed_/5/3/csm_wordpress_29764a1330.png
demo_url: null
download_url: null
---

Möchte man für sein eigenes Wordpress Plugin einen Einstellungs-, bzw. generell einen Link hinzufügen, so kann man das mit der folgenden Funktion machen.

[![settings](http://andreknieriem.de/wp-content/uploads/2015/10/settings-766x77.png)](http://andreknieriem.de/wp-content/uploads/2015/10/settings.png)

```php

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