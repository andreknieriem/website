---
title: Schön zum Seitenanfang scrollen mit jQuery (smooth scroll to pagetop)
date: '2013-04-04T11:22:01.000Z'
slug: schoen-zum-seitenanfang-scrollen-mit-jquery-smooth-scroll-to-pagetop
tags:
  - '20'
  - '61'
  - '69'
  - '182'
  - '183'
  - '184'
description: "Hier sind ein paar Zeilen Javascript, CSS und HTML um einen schönen \"Zurück-zum-Seitenanfang Button\" zu erstellen. Der Code wird auch auf dieser Seite verwendet. (Siehe rechte Seite beim Scrollen)\nDas ist der Link, den ihr am Besten vor das schließende \n/*  */\n\n\n/*  */\n\n\n\n\n\t\t\n\t\t\tSpringe zur Werkzeugleiste\n\t\t\t\n\t\t\t\t\n\t\t\n\t\tÜber WordPress\t\t\n\t\tWordPress.org\t\t\n\t\tDokumentation\t\t\n\t\tSupport-Foren\t\t\n\t\tFeedback\t\t\t\t\n\t\tandre knieriem\n\t\tZur Seite\t\t\t\t\n\t\t54 Plugin-Updates, 1 Theme-Aktualisierung\t\t\n\t\t0\t\t\n\t\tNeu\n\t\tBeitrag\t\t\n\t\tDatei\t\t\n\t\tLink\t\t\n\t\tSeite\t\t\n\t\tView\t\t\n\t\tBenutzer\t\t\t\t\n\t\tGalerie\n\t\tOverview\t\t\n\t\tAdd Gallery / Images\t\t\n\t\tManage Galleries\t\t\n\t\tManage Albums\t\t\n\t\tManage Tags\t\t\n\t\tGallery Settings\t\t\n\t\tOther Options\t\t\t\t\n\t\tWillkommen, André Knieriem\n\t\tAndré Knieriemtyphoch2\t\t\n\t\tProfil bearbeiten\t\t\n\t\tAbmelden\t\t\t\t\t\t\t\n\t\t\t\t\t\tAbmelden\n\t\t\t\t\t\n\t\t Tag packt. \n&lt;a href=\"#\" class=\"scrollup\"&gt;Scroll&lt;/a&gt;\n Mit diesem CSS macht ihr den Button schön und positioniert ihn. (Das Bild muss natürlich auch eingebunden werden.) \n.scrollup{\n    width:40px;\n    height:40px;\n    opacity:0.3;\n    position:fixed;\n    bottom:50px;\n    right:100px;\n    display:none;\n    text-indent:-9999px;\n    background: url('icon_top.png') no-repeat;\n}\n Und hier den jQuery Code um den Button ein und auszublenden und die Scroll Animation zu starten: \n $(document).ready(function(){\n\n        $(window).scroll(function(){\n            if ($(this).scrollTop() &gt; 100) {\n                $('.scrollup').fadeIn();\n            } else {\n                $('.scrollup').fadeOut();\n            }\n        });\n\n        $('.scrollup').click(function(){\n            $(\"html, body\").animate({ scrollTop: 0 }, 600);\n            return false;\n        });\n\n    });\n Viel Spaß damit!"
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

Hier sind ein paar Zeilen Javascript, CSS und HTML um einen schönen "Zurück-zum-Seitenanfang Button" zu erstellen. Der Code wird auch auf dieser Seite verwendet. (Siehe rechte Seite beim Scrollen)

Das ist der Link, den ihr am Besten vor das schließende <script type='text/javascript'>

/\* <!\[CDATA\[ \*/

var photocrati\_ajax = {"url":"http://andreknieriem.de/photocrati\_ajax","wp\_site\_url":"http://andreknieriem.de","wp\_site\_static\_url":"http://andreknieriem.de"};

/\* \]\]> \*/

</script>

<script type='text/javascript'>

/\* <!\[CDATA\[ \*/

var userSettings = {"url":"/","uid":"1","time":"1386227703"};var commonL10n = {"warnDelete":"Du bist dabei, die ausgewu00e4hlten Punkte endu00fcltig zu lu00f6schen. Dru00fccke 'Abbrechen' zum Stoppen, 'OK' zum Lu00f6schen."};/\* \]\]> \*/

</script>

<script type='text/javascript' src='http://andreknieriem.de/wp-admin/load-scripts.php?c=0&amp;load%5B%5D=jquery-core,jquery-migrate,hoverIntent,utils,common,admin-bar&amp;ver=3.7.1'></script>

<script type='text/javascript' src='http://andreknieriem.de/wp-content/plugins/nextgen-gallery/products/photocrati\_nextgen/modules/ajax/static/ajax.js?ver=3.7.1'></script>

<script type='text/javascript' src='http://andreknieriem.de/wp-content/plugins/nextgen-gallery/products/photocrati\_nextgen/modules/frame\_communication/static/frame\_event\_publisher.js?ver=3.7.1'></script>

[Springe zur Werkzeugleiste](#wp-toolbar)

*   [](http://andreknieriem.de/wp-admin/about.php "Über WordPress")
    
    *   [Über WordPress](http://andreknieriem.de/wp-admin/about.php)
    
    *   [WordPress.org](http://wordpress.org/)
    *   [Dokumentation](http://codex.wordpress.org/)
    *   [Support-Foren](http://forum.wpde.org)
    *   [Feedback](http://wordpress.org/support/forum/requests-and-feedback)
    
*   [andre knieriem](http://andreknieriem.de/)
    
    *   [Zur Seite](http://andreknieriem.de/)
    
*   [54 Plugin-Updates, 1 Theme-Aktualisierung](http://andreknieriem.de/wp-admin/update-core.php "4 Plugin-Updates, 1 Theme-Aktualisierung")
*   [0](http://andreknieriem.de/wp-admin/edit-comments.php "0 Kommentare warten auf Moderation")
*   [Neu](http://andreknieriem.de/wp-admin/post-new.php "Hinzufügen")
    
    *   [Beitrag](http://andreknieriem.de/wp-admin/post-new.php)
    *   [Datei](http://andreknieriem.de/wp-admin/media-new.php)
    *   [Link](http://andreknieriem.de/wp-admin/link-add.php)
    *   [Seite](http://andreknieriem.de/wp-admin/post-new.php?post_type=page)
    *   [View](http://andreknieriem.de/wp-admin/post-new.php?post_type=view)
    *   [Benutzer](http://andreknieriem.de/wp-admin/user-new.php)
    
*   [Galerie](http://andreknieriem.de/wp-admin/admin.php?page=nextgen-gallery)
    
    *   [Overview](http://andreknieriem.de/wp-admin/admin.php?page=nextgen-gallery)
    *   [Add Gallery / Images](http://andreknieriem.de/wp-admin/admin.php?page=ngg_addgallery)
    *   [Manage Galleries](http://andreknieriem.de/wp-admin/admin.php?page=nggallery-manage-gallery)
    *   [Manage Albums](http://andreknieriem.de/wp-admin/admin.php?page=nggallery-manage-album)
    *   [Manage Tags](http://andreknieriem.de/wp-admin/admin.php?page=nggallery-tags)
    *   [Gallery Settings](http://andreknieriem.de/wp-admin/admin.php?page=ngg_display_settings)
    *   [Other Options](http://andreknieriem.de/wp-admin/admin.php?page=ngg_other_options)
    

*   [Willkommen, André Knieriem![](http://1.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=16&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D16&r=G)](http://andreknieriem.de/wp-admin/profile.php "Mein Benutzerprofil")
    
    *   [![](http://1.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=64&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D64&r=G)André Knieriemtyphoch2](http://andreknieriem.de/wp-admin/profile.php)
    *   [Profil bearbeiten](http://andreknieriem.de/wp-admin/profile.php)
    *   [Abmelden](http://andreknieriem.de/wp-login.php?action=logout&_wpnonce=d684b90ae4)
    

[Abmelden](http://andreknieriem.de/wp-login.php?action=logout&_wpnonce=d684b90ae4)

</body> Tag packt.

```

<a href="#" class="scrollup">Scroll</a>
```

Mit diesem CSS macht ihr den Button schön und positioniert ihn. (Das Bild muss natürlich auch eingebunden werden.)

```

.scrollup{
    width:40px;
    height:40px;
    opacity:0.3;
    position:fixed;
    bottom:50px;
    right:100px;
    display:none;
    text-indent:-9999px;
    background: url('icon_top.png') no-repeat;
}
```

Und hier den jQuery Code um den Button ein und auszublenden und die Scroll Animation zu starten:

```

 $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });
```

Viel Spaß damit!