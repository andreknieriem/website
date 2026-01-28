---
title: 'PHP: IPTC-Daten via PHP auslesen'
date: '2018-07-27T08:32:00.000Z'
slug: php-iptc-daten-via-php-auslesen
tags:
  - '41'
  - '1064'
  - '422'
  - '887'
  - '1065'
  - '1066'
  - '1067'
description: "Viele Bilder haben sogenannte Metadaten im Head gespeichert, die einem viele Infos über das Bild geben. Diese Daten sind oft sehr nützlich um sie beispielsweise in einer Bilddatenbank direkt zu benutzen. So bekommt man ohne Zutun beispielsweise schon den Titel der Datei (Caption) heraus. PHP bietet hier die Funktion&nbsp;iptcparse.\r\nIch habe hier mal ein Code-Beispiel, dass euch zeigt, wie man an diese Daten kommt. In der PHP-Dokumentation ist das alles leider sehr wenig beschrieben. $image= \"picture.jpg\";\r\n \r\n$info = [];\r\n$imgData = [];\r\n \r\n// mit getimagesize werden Informationen aus dem Bild ausgelesen\r\n$size = getimagesize($image, $info);\r\n \r\n// Sofern vorhanden, kann man IPTC aus dem key APP13 auslesen\r\n$iptc = iptcparse($info['APP13']);\r\n \r\nif (is_array($iptc)) {\r\n  $data['caption']              = $iptc[\"2#120\"][0];\r\n  $data['graphic_name']         = $iptc[\"2#005\"][0];\r\n  $data['urgency']              = $iptc[\"2#010\"][0];\r\n  $data['category']             = $iptc[\"2#015\"][0];\r\n  $data['supp_categories']      = $iptc[\"2#020\"][0];\r\n  $data['spec_instr']           = $iptc[\"2#040\"][0];\r\n  $data['creation_date']        = $iptc[\"2#055\"][0];\r\n  $data['photog']               = $iptc[\"2#080\"][0];\r\n  $data['credit_byline_title']  = $iptc[\"2#085\"][0];\r\n  $data['city']                 = $iptc[\"2#090\"][0];\r\n  $data['state']                = $iptc[\"2#095\"][0];\r\n  $data['country']              = $iptc[\"2#101\"][0];\r\n  $data['otr']                  = $iptc[\"2#103\"][0];\r\n  $data['headline']             = $iptc[\"2#105\"][0];\r\n  $data['source']               = $iptc[\"2#110\"][0];\r\n  $data['photo_source']         = $iptc[\"2#115\"][0];\r\n  $data['keywords']             = $iptc[\"2#025\"][0];\r\n} Dies ist nur ein Auszug. Man könnte jetzt noch um jedes Feld eine Abfrage machen, ob es überhaupt gefüllt ist, um auch nur die Daten zu bekommen, die da sind. Wenn ihr etwas vermisst, dann macht einen var_dump($iptc) und guckt, welche Keys es noch gibt und welche Daten ihr eventuell bekommt."
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#read](/tag.html?tag=887&cHash=3a8b079172146e07a9334fda69e06ab3)[#iptc](/tag.html?tag=1064&cHash=74fe13f42f421b944410eb755a3d2228)[#caption](/tag.html?tag=1065&cHash=3b48021f6a81ae22dc965e9d130ae2aa)[#keywords](/tag.html?tag=1066&cHash=92b4a703dac2fce0843c77525b3ebb1c)[#iptcparse](/tag.html?tag=1067&cHash=8fe3d5851183897030e5f17fc01334ae)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

27\. Jul 2018

Viele Bilder haben sogenannte Metadaten im Head gespeichert, die einem viele Infos über das Bild geben. Diese Daten sind oft sehr nützlich um sie beispielsweise in einer Bilddatenbank direkt zu benutzen. So bekommt man ohne Zutun beispielsweise schon den Titel der Datei (Caption) heraus. PHP bietet hier die Funktion **iptcparse.**

Ich habe hier mal ein Code-Beispiel, dass euch zeigt, wie man an diese Daten kommt. In der PHP-Dokumentation ist das alles leider sehr wenig beschrieben.

```
$image= "picture.jpg";
 
$info = [];
$imgData = [];
 
// mit getimagesize werden Informationen aus dem Bild ausgelesen
$size = getimagesize($image, $info);
 
// Sofern vorhanden, kann man IPTC aus dem key APP13 auslesen
$iptc = iptcparse($info['APP13']);
 
if (is_array($iptc)) {
  $data['caption']              = $iptc["2#120"][0];
  $data['graphic_name']         = $iptc["2#005"][0];
  $data['urgency']              = $iptc["2#010"][0];
  $data['category']             = $iptc["2#015"][0];
  $data['supp_categories']      = $iptc["2#020"][0];
  $data['spec_instr']           = $iptc["2#040"][0];
  $data['creation_date']        = $iptc["2#055"][0];
  $data['photog']               = $iptc["2#080"][0];
  $data['credit_byline_title']  = $iptc["2#085"][0];
  $data['city']                 = $iptc["2#090"][0];
  $data['state']                = $iptc["2#095"][0];
  $data['country']              = $iptc["2#101"][0];
  $data['otr']                  = $iptc["2#103"][0];
  $data['headline']             = $iptc["2#105"][0];
  $data['source']               = $iptc["2#110"][0];
  $data['photo_source']         = $iptc["2#115"][0];
  $data['keywords']             = $iptc["2#025"][0];
}
```

Dies ist nur ein Auszug. Man könnte jetzt noch um jedes Feld eine Abfrage machen, ob es überhaupt gefüllt ist, um auch nur die Daten zu bekommen, die da sind. Wenn ihr etwas vermisst, dann macht einen **var\_dump($iptc)** und guckt, welche Keys es noch gibt und welche Daten ihr eventuell bekommt.

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.