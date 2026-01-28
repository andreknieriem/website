---
title: 'PHP: Umlaute/Sonderzeichen in CSV Export (Encoding)'
date: '2015-07-02T16:15:25.000Z'
slug: php-umlautesonderzeichen-in-csv-export-encoding
tags:
  - csv
  - special
  - chars
  - excel
  - euro
  - €
  - convert
  - windows-1252
description: "Bei einem CSV Export via PHP ist mir aufgefallen, dass viele Sonderzeichen, insbesondere das €-Zeichen (Euro) einfach kaputt dargestellt werden. Nach sehr langer Suche und herumprobieren habe ich hier die Lösung gefunden. \nExcel erwartet das Windows 1252 Encoding, geliefert hatte ich UTF-8. Alle anderen Encodings, besonders ISO 8859-1 (Latin1) gehen nicht, da das €-Zeichen erst ab ISO 8859-15 drin war. Aber auch ISO 8859-15 war nicht ausreichend für Excel. \nFunktion \r\nfunction convertToWindowsCharset($string) {\r\n  $charset =  mb_detect_encoding(\r\n    $string,\r\n    \"UTF-8, ISO-8859-1, ISO-8859-15\",\r\n    true\r\n  );\r\n \r\n  $string =  mb_convert_encoding($string, \"Windows-1252\", $charset);\r\n  return $string;\r\n}\r\n Benutzung \r\n$str = '€äüöüö';\r\n$str = convertToWindowsCharset($str);\r\n\r\n// nun ist $str im windows1252 Format und Excel kann es lesen\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Bei einem CSV Export via PHP ist mir aufgefallen, dass viele Sonderzeichen, insbesondere das €-Zeichen (Euro) einfach kaputt dargestellt werden. Nach sehr langer Suche und herumprobieren habe ich [hier](http://blog.next-motion.de/2010/07/17/umlaute-in-csv-export-per-php-zeichensatzkonvertierung/) die Lösung gefunden.

Excel erwartet das **Windows 1252** Encoding, geliefert hatte ich UTF-8. Alle anderen Encodings, besonders ISO 8859-1 (Latin1) gehen nicht, da das €-Zeichen erst ab ISO 8859-15 drin war. Aber auch ISO 8859-15 war nicht ausreichend für Excel.

**Funktion**

```

function convertToWindowsCharset($string) {
  $charset =  mb_detect_encoding(
    $string,
    "UTF-8, ISO-8859-1, ISO-8859-15",
    true
  );
 
  $string =  mb_convert_encoding($string, "Windows-1252", $charset);
  return $string;
}
```

**Benutzung**

```

$str = '€äüöüö';
$str = convertToWindowsCharset($str);

// nun ist $str im windows1252 Format und Excel kann es lesen
```