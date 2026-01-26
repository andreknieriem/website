---
title: 'TYPO3: Eigene Lightbox benutzen, anstelle des Javascript Popups'
date: '2018-10-12T07:32:00.000Z'
slug: typo3-eigene-lightbox-benutzen-anstelle-des-javascript-popups
tags:
  - '198'
  - '675'
  - '473'
  - '1028'
  - '1081'
description: "Hat man für ein Bild die Checkbox \"Bei Klick vergrößern\"&nbsp;gesetzt, so rendert TYPO3 standardmäßig ein Javascript an den Link zum Bild und öffnet dieses in einen Popup. Da das nicht so schön ist und in meinen Augen auch nicht mehr zeitgemäß zeige ich jetzt, wie man dieses Verhalten ändert.\r\nDafür müsst ihr, je nachdem ob ihr css_styled_content oder fluid_styled_content nutzt folgende Einstellungen im TypoScript einfügen: # css_styled_content\r\ntt_content.image.20.1.imageLinkWrap {\r\n  JSwindow = 0\r\n  crop &gt;\r\n  height &gt;\r\n  width &gt;\r\n  directImageLink = 1\r\n  linkParams.ATagParams.dataWrap = class=\"lightbox-img\" rel=\"lightbox[lb{field:uid}]\"\r\n}\r\n\r\n# fluid_styled_content\r\nlib.contentElement.settings.media.popup {\r\n  JSwindow = 0\r\n  crop &gt;\r\n  height &gt;\r\n  width &gt;\r\n  directImageLink = 1\r\n  linkParams.ATagParams.dataWrap = class=\"lightbox-img\" rel=\"lightbox[lb{field:uid}]\"\r\n} Habt ihr das TypoScript eingefügt, so wird jetzt ein direkter Link zum Bild generiert und die Klasse \"lightbox-img\" an den Link gerendert. Nun kann man seine Lightbox einbinden und das Javascript entsprechend anpassen.&nbsp;\r\nMöchte man beispielsweise meine simpleLightbox verwenden, so fügt man einfach folgende Dinge hinzu: page.includeCSS.sl = typo3conf/ext/ar_siteext/Resources/Public/Css/simplelightbox.min.css\r\npage.includeJSFooter.sl = typo3conf/ext/ar_siteext/Resources/Public/Js/simplelightbox/dist/simple-lightbox.min.js\r\n\r\nEin eurem Javascript dann noch folgendes hinzufügen:\r\n// initialize lightbox with class\r\n$('.lightbox-img').simpleLightbox(); Das wars auch schon und ihr habt eine Javascript Lightbox eingebaut."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Eigene Lightbox benutzen, anstelle des Javascript Popups

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#use](/tag.html?tag=473&cHash=b4ff76538534b7157c11cbab1a4c7016)[#lightbox](/tag.html?tag=675&cHash=d48873299505b1a1393a458c107c2c78)[#fluid\_styled\_content](/tag.html?tag=1028&cHash=fc4182e9041218bc9473a0feede757d9)[#css\_styled\_content](/tag.html?tag=1081&cHash=652ada370227bfc21dfb33b1148a5ebc)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

12\. Oct 2018

Hat man für ein Bild die Checkbox "**Bei Klick vergrößern**" gesetzt, so rendert TYPO3 standardmäßig ein Javascript an den Link zum Bild und öffnet dieses in einen Popup. Da das nicht so schön ist und in meinen Augen auch nicht mehr zeitgemäß zeige ich jetzt, wie man dieses Verhalten ändert.

Dafür müsst ihr, je nachdem ob ihr css\_styled\_content oder fluid\_styled\_content nutzt folgende Einstellungen im TypoScript einfügen:

```
# css_styled_content
tt_content.image.20.1.imageLinkWrap {
  JSwindow = 0
  crop >
  height >
  width >
  directImageLink = 1
  linkParams.ATagParams.dataWrap = class="lightbox-img" rel="lightbox[lb{field:uid}]"
}

# fluid_styled_content
lib.contentElement.settings.media.popup {
  JSwindow = 0
  crop >
  height >
  width >
  directImageLink = 1
  linkParams.ATagParams.dataWrap = class="lightbox-img" rel="lightbox[lb{field:uid}]"
}
```

Habt ihr das TypoScript eingefügt, so wird jetzt ein direkter Link zum Bild generiert und die Klasse "lightbox-img" an den Link gerendert. Nun kann man seine Lightbox einbinden und das Javascript entsprechend anpassen. 

Möchte man beispielsweise meine simpleLightbox verwenden, so fügt man einfach folgende Dinge hinzu:

```
page.includeCSS.sl = typo3conf/ext/ar_siteext/Resources/Public/Css/simplelightbox.min.css
page.includeJSFooter.sl = typo3conf/ext/ar_siteext/Resources/Public/Js/simplelightbox/dist/simple-lightbox.min.js
```

  
**Ein eurem Javascript dann noch folgendes hinzufügen:**

```
// initialize lightbox with class
$('.lightbox-img').simpleLightbox();
```

Das wars auch schon und ihr habt eine Javascript Lightbox eingebaut.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.