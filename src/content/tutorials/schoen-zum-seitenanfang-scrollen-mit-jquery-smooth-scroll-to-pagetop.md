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
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Schön zum Seitenanfang scrollen mit jQuery (smooth scroll to pagetop)

#Tutorials#jQuery

* * *

![](/fileadmin/_processed_/d/4/csm_jquery_e571c76753.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#scroll](/tag.html?tag=61&cHash=5a73bee04896e919a772699d1f0b0bcd)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#pageup](/tag.html?tag=182&cHash=5c18ac425095d70a5930ad8e8e6de7e7)[#scroll up](/tag.html?tag=183&cHash=0fc69b29406b5ef92fdbc0de04768b3a)[#scrolltop](/tag.html?tag=184&cHash=707e148d4e076479aa130fdea96812a7)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Apr 2013

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/572274b8fef2d930c3e160094ed64721?s=75&d=mm&r=g)
    
    Markus
    
    Nachtrag  
      
    1\. In die html-Seite eingefügt:  
      
    
    07\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/39ceb1d0670d50724d69ac4c6309092f?s=75&d=mm&r=g)
        
        [André Knieriem](http://www.andreknieriem.de)
        
        Hi Markus, in meinen Mails sehe ich deinen Code:  
          
        Also folgendes:  
        das Javascript oben geht auf die Klasse scrollup. Also muss dein Link die Klasse scrollup haben. Dann muss auch noch dein CSS angepasst werden, du hast eine ID erstellt, es muss eine Klasse sein. Also .scrollup.  
          
        Grüße
        
        07\. Jan 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/572274b8fef2d930c3e160094ed64721?s=75&d=mm&r=g)
    
    Markus
    
    Hi Andre!  
      
    Was hab ich denn da jetzt falsch gemacht...  
      
      
    1\. In die html-Seite eingefügt:  
      
      
      
      
      
    2\. scrollup.js erstellt mit Inhalt:  
      
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
      
      
      
    3\. style.css mit Folgendem ergänzt:  
      
    #scrollup{  
    width:40px;  
    height:40px;  
    opacity:0.3;  
    position:fixed;  
    bottom:50px;  
    right:100px;  
    display:none;  
    text-indent:-9999px;  
    background: url(../images/icons/icon\_top.png) no-repeat;  
    }  
      
      
      
    4\. Das Bild icon\_top.png existiert im angegebenen Verzeichnis!
    
    06\. Jan 2014 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.