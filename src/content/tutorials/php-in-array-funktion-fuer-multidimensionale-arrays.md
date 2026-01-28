---
title: PHP in_array Funktion für multidimensionale Arrays
date: '2012-08-24T05:29:10.000Z'
slug: php-in-array-funktion-fuer-multidimensionale-arrays
tags:
  - php
  - in_array
  - multidimensional array
description: "Für ein neues Projekt von mir, brauchte ich kürzlich eine Funktion, die guckt, ob ein bestimmter String in einem Multidimensionen Array vorkommt. Die normale PHP-Funktion in_array() konnte ich dafür nicht nutzen, da diese nur eindimensionale Arrays beherrscht. Hier habe ich also eine Funktion die alle arrays meistern kann ;) \nfunction in_array_r($needle, $haystack, $strict = true) {\n\t    foreach ($haystack as $item) {\n\t        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) &amp;&amp; in_array_r($needle, $item, $strict))) {\n\t            return true;\n\t        }\n\t    }\n\t    return false;\n}\n Beispiel: \n$fruits = array (\n    \"fruits\"  =&gt; array(\"a\" =&gt; \"Orange\", \"b\" =&gt; \"Banane\", \"c\" =&gt; \"Apfel\")\n);\n\nif(in_array_r('Orange', $fruits )){\n\t// returns true\n}\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Für ein neues Projekt von mir, brauchte ich kürzlich eine Funktion, die guckt, ob ein bestimmter String in einem Multidimensionen Array vorkommt. Die normale PHP-Funktion in\_array() konnte ich dafür nicht nutzen, da diese nur eindimensionale Arrays beherrscht. Hier habe ich also eine Funktion die alle arrays meistern kann ;)

```

function in_array_r($needle, $haystack, $strict = true) {
	    foreach ($haystack as $item) {
	        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) && in_array_r($needle, $item, $strict))) {
	            return true;
	        }
	    }
	    return false;
}
```

Beispiel:

```

$fruits = array (
    "fruits"  => array("a" => "Orange", "b" => "Banane", "c" => "Apfel")
);

if(in_array_r('Orange', $fruits )){
	// returns true
}
```