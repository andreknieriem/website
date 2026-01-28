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
demo_url: null
download_url: null
---

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