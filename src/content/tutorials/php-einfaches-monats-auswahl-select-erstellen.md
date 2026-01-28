---
title: 'PHP: Einfaches Monats-Auswahl Select erstellen'
date: '2016-01-08T17:11:52.000Z'
slug: php-einfaches-monats-auswahl-select-erstellen
tags:
  - '41'
  - '151'
  - '598'
  - '801'
  - '802'
  - '803'
description: "Hier ist ein kleines Snippet, um ein Monats-Auswahl Select mit php zu erstellen. \r\n&lt;?php\r\nfunction month_select_box( $field_name = 'month' ) {\r\n    $month_options = '';\r\n    for( $i = 1; $i &lt;= 12; $i++ ) {\r\n        $month_num = str_pad( $i, 2, 0, STR_PAD_LEFT );\r\n        $month_name = date( 'F', mktime( 0, 0, 0, $i + 1, 0, 0, 0 ) );\r\n        $month_options .= '&lt;option value=\"' . esc_attr( $month_num ) . '\"&gt;' . $month_name . '&lt;/option&gt;';\r\n    }\r\n    return '&lt;select name=\"' . $field_name . '\"&gt;' . $month_options . '&lt;/select&gt;';\r\n}\r\n?&gt;\r\n "
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

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#select](/tag.html?tag=151&cHash=e8054359cbc7aa0a17f477796afa99ba)[#create](/tag.html?tag=598&cHash=d278ac10d2671ead85013f073d1eadbe)[#month](/tag.html?tag=801&cHash=4add5ab03ce9cc6026fa6eb80aa0a35b)[#monat](/tag.html?tag=802&cHash=b837ddd94c3e1fab13ba2da762641d02)[#name](/tag.html?tag=803&cHash=fd201fb691835de0e6539ef9cd3afb6c)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

08\. Jan 2016

Hier ist ein kleines Snippet, um ein Monats-Auswahl Select mit php zu erstellen.

```

<?php
function month_select_box( $field_name = 'month' ) {
    $month_options = '';
    for( $i = 1; $i <= 12; $i++ ) {
        $month_num = str_pad( $i, 2, 0, STR_PAD_LEFT );
        $month_name = date( 'F', mktime( 0, 0, 0, $i + 1, 0, 0, 0 ) );
        $month_options .= '<option value="' . esc_attr( $month_num ) . '">' . $month_name . '</option>';
    }
    return '<select name="' . $field_name . '">' . $month_options . '</select>';
}
?>
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.