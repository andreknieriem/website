---
title: 'TYPO3: Rahmen/Frames für Content-Elemente ab TYPO3 8LTS'
date: '2018-11-19T07:19:00.000Z'
slug: typo3-rahmenframes-fuer-content-elemente-ab-typo3-8lts
tags:
  - '198'
  - '988'
  - '1086'
  - '1087'
  - '422'
  - '62'
  - '1088'
  - '1089'
description: "Seit der TYPO3 Version 8.X sind lassen sich die Rahmen um Content-Elemente etwas anders als vorher benutzen. Auch das Feld wurde von section_frame zu frame_class migriert. Um nun neue Rahmen(Frames) zu benutzen braucht man nur ein paar Zeilen TSConfig und schon wird die Klasse an die Content-Elemente bei Auswahl gerendert.\r\nHier mal ein Beispiel: # PageTSconfig\r\nTCEFORM.tt_content.frame_class.addItems {\r\n  well = Bootstrap Well Box\r\n} Das ganze wird dann im Frontend zusammengesetzt, dass frame-{deineklasse} an das Content-Element gesetzt wird, also anhand des Beispiels oben: \r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#8lts](/tag.html?tag=988&cHash=161e25d79ad8aeb5ea9faa8ef99ed996)[#frame\_class](/tag.html?tag=1086&cHash=82baabbc0a9f9afe48a7ef54e9cd03cf)[#section\_frame](/tag.html?tag=1087&cHash=94293c8cb8abd569aa78cc68c297aba8)[#migration](/tag.html?tag=1088&cHash=bc1721bde8bbbddd8bc7dc30f56ca607)[#wie](/tag.html?tag=1089&cHash=79fd0b433c0aea7b68ffd8bf756253f5)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

19\. Nov 2018

Seit der TYPO3 Version 8.X sind lassen sich die Rahmen um Content-Elemente etwas anders als vorher benutzen. Auch das Feld wurde von section\_frame zu frame\_class migriert. Um nun neue Rahmen(Frames) zu benutzen braucht man nur ein paar Zeilen TSConfig und schon wird die Klasse an die Content-Elemente bei Auswahl gerendert.

**Hier mal ein Beispiel:**

```
TCEFORM.tt_content.frame_class.addItems {
  well = Bootstrap Well Box
}
```

Das ganze wird dann im Frontend zusammengesetzt, dass frame-{deineklasse} an das Content-Element gesetzt wird, also anhand des Beispiels oben:

```
<div id="c123" class="frame frame-well frame-type-text frame-layout-0">
</div>
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.