---
title: 'TYPO3: Übersicht unterschiedlicher Arten von Flexform-Felder'
date: '2014-01-10T08:17:39.000Z'
slug: typo3-uebersicht-unterschiedlicher-arten-von-flexform-felder
tags:
  - '198'
  - '393'
  - '394'
  - '395'
description: "Weil ich es in letzter Zeit öfter mal brauchte habe ich hier eine Liste verschiedener Flexform-Felder zusammengetragen.\n1. Textfeld(Input) Um nur einzelne Werte zur Mehrfachauswahl zuzulassen muss man nur folgendes eintragen \r\n&lt;multiple&gt;1&lt;/multiple&gt;\r\n 8. Selectbox mit Datenbank-Abfrage \r\n&lt;label&gt;Selectbox aus DB&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;select&lt;/type&gt;\r\n  &lt;items type=\"array\"&gt;\r\n    &lt;numIndex index=\"0\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n  &lt;/items&gt;\r\n  &lt;foreign_table&gt;tt_content&lt;/foreign_table&gt;\r\n  &lt;foreign_table_where&gt;\r\n     AND tt_content.pid = 22\r\n  &lt;/foreign_table_where&gt;\r\n&lt;/config&gt;\r\n 9. Datumsfeld \r\n&lt;label&gt;Datumsfeld&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;input&lt;/type&gt;\r\n  &lt;size&gt;8&lt;/size&gt;\r\n  &lt;max&gt;8&lt;/max&gt;\r\n  &lt;eval&gt;date&lt;/eval&gt;\r\n  &lt;checkbox&gt;1&lt;/checkbox&gt;\r\n&lt;/config&gt;\r\n 10. Auswahl einer Seite \r\n&lt;config&gt;\r\n  &lt;type&gt;group&lt;/type&gt;\r\n  &lt;internal_type&gt;db&lt;/internal_type&gt;\r\n  &lt;allowed&gt;pages&lt;/allowed&gt;\r\n  &lt;size&gt;1&lt;/size&gt;\r\n  &lt;maxitems&gt;1&lt;/maxitems&gt;\r\n  &lt;minitems&gt;0&lt;/minitems&gt;\r\n  &lt;show_thumbs&gt;1&lt;/show_thumbs&gt;\r\n&lt;/config&gt;\r\n 11. Bilder/Dateien \r\n&lt;config&gt;\r\n  &lt;type&gt;group&lt;/type&gt;\r\n  &lt;internal_type&gt;db&lt;/internal_type&gt;\r\n  &lt;allowed&gt;sys_file&lt;/allowed&gt;\r\n  &lt;size&gt;10&lt;/size&gt;\r\n  &lt;minitems&gt;0&lt;/minitems&gt;\r\n  &lt;maxitems&gt;1&lt;/maxitems&gt;\r\n  &lt;show_thumbs&gt;1&lt;/show_thumbs&gt;\r\n  &lt;appearance&gt;\r\n    &lt;elementBrowserType&gt;file&lt;/elementBrowserType&gt;\r\n    &lt;elementBrowserAllowed&gt;gif,jpg,jpeg,tif,tiff,bmp,pcx,tga,png,pdf,ai&lt;/elementBrowserAllowed&gt;\r\n  &lt;/appearance&gt;\r\n&lt;/config&gt;\r\n \r\n&lt;label&gt;Selectbox mehrfach&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;select&lt;/type&gt;\r\n  &lt;items type=\"array\"&gt;\r\n    &lt;numIndex index=\"0\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl1&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert1&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n    &lt;numIndex index=\"1\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl2&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert2&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n    &lt;numIndex index=\"3\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl3&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert3&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n  &lt;/items&gt;\r\n  &lt;maxitems&gt;3&lt;/maxitems&gt;\r\n  &lt;size&gt;3&lt;/size&gt;\r\n&lt;/config&gt;\r\n 7. Selectbox mit Mehrfachauswahl \r\n&lt;label&gt;Selectbox&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;select&lt;/type&gt;\r\n  &lt;items type=\"array\"&gt;\r\n    &lt;numIndex index=\"0\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl1&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert1&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n    &lt;numIndex index=\"1\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl2&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert2&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n    &lt;numIndex index=\"3\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl3&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert3&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n  &lt;/items&gt;\r\n&lt;/config&gt;\r\n \r\n&lt;label&gt;Textfeld&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;input&lt;/type&gt;\r\n  &lt;size&gt;20&lt;/size&gt;\r\n  &lt;max&gt;30&lt;/max&gt;\r\n  &lt;eval&gt;trim&lt;/eval&gt;\r\n&lt;/config&gt;\r\n 2. Textarea \r\n&lt;label&gt;Textarea&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;text&lt;/type&gt;\r\n  &lt;cols&gt;24&lt;/cols&gt;\r\n  &lt;rows&gt;3&lt;/rows&gt;\r\n&lt;/config&gt;\r\n 3. Textarea mit RTE \r\n&lt;label&gt;Textarea&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;text&lt;/type&gt;\r\n  &lt;cols&gt;24&lt;/cols&gt;\r\n  &lt;rows&gt;3&lt;/rows&gt;\r\n  &lt;defaultExtras&gt;richtext[*]:rte_transform[mode=ts_css]&lt;/defaultExtras&gt;\r\n&lt;/config&gt;\r\n 4. Checkbox \r\n&lt;label&gt;Checkbox&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;check&lt;/type&gt;\r\n&lt;/config&gt;\r\n 5. Radio-Buttons \r\n&lt;label&gt;Radiobuttons&lt;/label&gt;\r\n&lt;config&gt;\r\n  &lt;type&gt;radio&lt;/type&gt;\r\n  &lt;items type=\"array\"&gt;\r\n    &lt;numIndex index=\"0\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl1&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert1&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n    &lt;numIndex index=\"1\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl2&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert2&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n    &lt;numIndex index=\"3\" type=\"array\"&gt;\r\n      &lt;numIndex index=\"0\"&gt;Auswahl3&lt;/numIndex&gt;\r\n      &lt;numIndex index=\"1\"&gt;wert3&lt;/numIndex&gt;\r\n    &lt;/numIndex&gt;\r\n  &lt;/items&gt;\r\n&lt;/config&gt;\r\n 6. Selectbox mit vordefinierten Werten "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Übersicht unterschiedlicher Arten von Flexform-Felder

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#flexform](/tag.html?tag=393&cHash=9954a6b2510df77f6e2dbc2f8802366c)[#felder](/tag.html?tag=394&cHash=152562e2318470ba191b5706e4551d1b)[#how to](/tag.html?tag=395&cHash=0a25a9a9159e9ff676d10a766d9d88d5)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. Jan 2014

Weil ich es in letzter Zeit öfter mal brauchte habe ich hier eine Liste verschiedener Flexform-Felder zusammengetragen.

1\. Textfeld(Input)

Um nur einzelne Werte zur Mehrfachauswahl zuzulassen muss man nur folgendes eintragen

```

<multiple>1</multiple>
```

8\. Selectbox mit Datenbank-Abfrage

```

<label>Selectbox aus DB</label>
<config>
  <type>select</type>
  <items type="array">
    <numIndex index="0" type="array">
      <numIndex index="0"></numIndex>
      <numIndex index="1"></numIndex>
    </numIndex>
  </items>
  <foreign_table>tt_content</foreign_table>
  <foreign_table_where>
     AND tt_content.pid = 22
  </foreign_table_where>
</config>
```

9\. Datumsfeld

```

<label>Datumsfeld</label>
<config>
  <type>input</type>
  <size>8</size>
  <max>8</max>
  <eval>date</eval>
  <checkbox>1</checkbox>
</config>
```

10\. Auswahl einer Seite

```

<config>
  <type>group</type>
  <internal_type>db</internal_type>
  <allowed>pages</allowed>
  <size>1</size>
  <maxitems>1</maxitems>
  <minitems>0</minitems>
  <show_thumbs>1</show_thumbs>
</config>
```

11\. Bilder/Dateien

```

<config>
  <type>group</type>
  <internal_type>db</internal_type>
  <allowed>sys_file</allowed>
  <size>10</size>
  <minitems>0</minitems>
  <maxitems>1</maxitems>
  <show_thumbs>1</show_thumbs>
  <appearance>
    <elementBrowserType>file</elementBrowserType>
    <elementBrowserAllowed>gif,jpg,jpeg,tif,tiff,bmp,pcx,tga,png,pdf,ai</elementBrowserAllowed>
  </appearance>
</config>
```

```

<label>Selectbox mehrfach</label>
<config>
  <type>select</type>
  <items type="array">
    <numIndex index="0" type="array">
      <numIndex index="0">Auswahl1</numIndex>
      <numIndex index="1">wert1</numIndex>
    </numIndex>
    <numIndex index="1" type="array">
      <numIndex index="0">Auswahl2</numIndex>
      <numIndex index="1">wert2</numIndex>
    </numIndex>
    <numIndex index="3" type="array">
      <numIndex index="0">Auswahl3</numIndex>
      <numIndex index="1">wert3</numIndex>
    </numIndex>
  </items>
  <maxitems>3</maxitems>
  <size>3</size>
</config>
```

7\. Selectbox mit Mehrfachauswahl

```

<label>Selectbox</label>
<config>
  <type>select</type>
  <items type="array">
    <numIndex index="0" type="array">
      <numIndex index="0">Auswahl1</numIndex>
      <numIndex index="1">wert1</numIndex>
    </numIndex>
    <numIndex index="1" type="array">
      <numIndex index="0">Auswahl2</numIndex>
      <numIndex index="1">wert2</numIndex>
    </numIndex>
    <numIndex index="3" type="array">
      <numIndex index="0">Auswahl3</numIndex>
      <numIndex index="1">wert3</numIndex>
    </numIndex>
  </items>
</config>
```

```

<label>Textfeld</label>
<config>
  <type>input</type>
  <size>20</size>
  <max>30</max>
  <eval>trim</eval>
</config>
```

2\. Textarea

```

<label>Textarea</label>
<config>
  <type>text</type>
  <cols>24</cols>
  <rows>3</rows>
</config>
```

3\. Textarea mit RTE

```

<label>Textarea</label>
<config>
  <type>text</type>
  <cols>24</cols>
  <rows>3</rows>
  <defaultExtras>richtext[*]:rte_transform[mode=ts_css]</defaultExtras>
</config>
```

4\. Checkbox

```

<label>Checkbox</label>
<config>
  <type>check</type>
</config>
```

5\. Radio-Buttons

```

<label>Radiobuttons</label>
<config>
  <type>radio</type>
  <items type="array">
    <numIndex index="0" type="array">
      <numIndex index="0">Auswahl1</numIndex>
      <numIndex index="1">wert1</numIndex>
    </numIndex>
    <numIndex index="1" type="array">
      <numIndex index="0">Auswahl2</numIndex>
      <numIndex index="1">wert2</numIndex>
    </numIndex>
    <numIndex index="3" type="array">
      <numIndex index="0">Auswahl3</numIndex>
      <numIndex index="1">wert3</numIndex>
    </numIndex>
  </items>
</config>
```

6\. Selectbox mit vordefinierten Werten

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.