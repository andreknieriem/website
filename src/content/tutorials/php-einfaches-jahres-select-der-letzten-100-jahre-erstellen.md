---
title: 'PHP: Einfaches Jahres-Select der letzten 100 Jahre erstellen'
date: '2015-12-16T16:01:35.000Z'
slug: php-einfaches-jahres-select-der-letzten-100-jahre-erstellen
tags:
  - '41'
  - '598'
  - '798'
  - '799'
  - '800'
description: "Hier mal ein kleines Snippet um schnell in PHP ein Select mit den letzten 100 Jahren zu erstellen. \r\n&lt;select name=\"year\"&gt;\r\n&lt;?php \r\n$years = range(date(\"Y\"), date(\"Y\", strtotime(\"now - 100 years\"))); \r\nforeach($years as $year){ \r\n    echo'&lt;option value=\"'.$year.'\"&gt;'.$year.'&lt;/option&gt;'; \r\n} \r\n?&gt; \r\n&lt;/select&gt;\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Hier mal ein kleines Snippet um schnell in PHP ein Select mit den letzten 100 Jahren zu erstellen.

```

<select name="year">
<?php 
$years = range(date("Y"), date("Y", strtotime("now - 100 years"))); 
foreach($years as $year){ 
    echo'<option value="'.$year.'">'.$year.'</option>'; 
} 
?> 
</select>
```