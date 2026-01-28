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
demo_url: null
download_url: null
---

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