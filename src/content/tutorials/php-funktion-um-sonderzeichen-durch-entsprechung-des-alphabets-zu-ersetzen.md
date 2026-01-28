---
title: 'PHP: Funktion um Sonderzeichen durch Entsprechung des Alphabets zu ersetzen'
date: '2015-08-18T16:40:14.000Z'
slug: php-funktion-um-sonderzeichen-durch-entsprechung-des-alphabets-zu-ersetzen
tags:
  - '41'
  - '745'
  - '746'
  - '747'
  - '748'
  - '749'
description: "Hat man beispielsweise eine Liste mit Namen und möchte diese gruppiert nach dem ersten Buchstaben ausgeben, so kann es vorkommen, dass Namen dabei sind, die mit Sonderzeichen beginnen. Ein Beispiel hierfür wäre das Sonderzeichen Š, welches bei türkischen ab und zu auftritt. Meistens möchte man dann, dass dieser Name unter dem normalen S eingegliedert wird. Die nachfolgende Funktion ersetzt alle diese Sonderzeichen durch die Entsprechung im normalen Alphabet.\nFunktion \r\nfunction characterMap($str){\r\n    $bad = array(\r\n      'À','à','Á','á','Â','â','Ã','ã','Ä','ä','Å','å','?','?','?','?',\r\n      '?','?','?','?','Ç','ç',\r\n      '?','?','?','?',\r\n      'È','è','É','é','Ê','ê','Ë','ë','?','?','?','?',\r\n      '?','?',\r\n      'Ì','ì','Í','í','Î','î','Ï','ï',\r\n      '?','?','?','?','?','?',\r\n        'Ñ','ñ','?','?','?','?',\r\n        'Ò','ò','Ó','ó','Ô','ô','Õ','õ','Ö','ö','Ø','ø','?',\r\n        '?','?','?','?',\r\n        'Š','š','?','?','?','?',\r\n        '?','?','?','?','?','?',\r\n        'Ù','ù','Ú','ú','Û','û','Ü','ü','?','?',\r\n        'Ÿ','ÿ','ý','Ý',\r\n        'Ž','ž','?','?','?','?',\r\n        'Þ','þ','Ð','ð','ß','Œ','œ','Æ','æ','µ'\r\n    );\r\n  \r\n      $good = array(\r\n        'A','a','A','a','A','a','A','a','A','a','A','a','A','a','A','a',\r\n        'C','c','C','c','C','c',\r\n        'D','d','D','d',\r\n        'E','e','E','e','E','e','E','e','E','e','E','e',\r\n        'G','g',\r\n        'I','i','I','i','I','i','I','i',\r\n        'L','l','L','l','L','l',\r\n        'N','n','N','n','N','n',\r\n        'O','o','O','o','O','o','O','o','O','o','O','o','o',\r\n        'R','r','R','r',\r\n        'S','s','S','s','S','s',\r\n        'T','t','T','t','T','t',\r\n        'U','u','U','u','U','u','U','e','U','u',\r\n        'Y','y','Y','y',\r\n        'Z','z','Z','z','Z','z',\r\n        'TH','th','DH','dh','ss','OE','oe','AE','ae','u'\r\n    );\r\n    str_replace($bad,$good,$str);\r\n}\r\n Benutzung \r\n$clean = characterMap('André');\r\n\r\n// $clean ist nun 'Andre' weil das é durch e ersetzt wurde\r\n "
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Hat man beispielsweise eine Liste mit Namen und möchte diese gruppiert nach dem ersten Buchstaben ausgeben, so kann es vorkommen, dass Namen dabei sind, die mit Sonderzeichen beginnen. Ein Beispiel hierfür wäre das Sonderzeichen Š, welches bei türkischen ab und zu auftritt. Meistens möchte man dann, dass dieser Name unter dem normalen S eingegliedert wird. Die nachfolgende Funktion ersetzt alle diese Sonderzeichen durch die Entsprechung im normalen Alphabet.

**Funktion**

```

function characterMap($str){
    $bad = array(
      'À','à','Á','á','Â','â','Ã','ã','Ä','ä','Å','å','?','?','?','?',
      '?','?','?','?','Ç','ç',
      '?','?','?','?',
      'È','è','É','é','Ê','ê','Ë','ë','?','?','?','?',
      '?','?',
      'Ì','ì','Í','í','Î','î','Ï','ï',
      '?','?','?','?','?','?',
        'Ñ','ñ','?','?','?','?',
        'Ò','ò','Ó','ó','Ô','ô','Õ','õ','Ö','ö','Ø','ø','?',
        '?','?','?','?',
        'Š','š','?','?','?','?',
        '?','?','?','?','?','?',
        'Ù','ù','Ú','ú','Û','û','Ü','ü','?','?',
        'Ÿ','ÿ','ý','Ý',
        'Ž','ž','?','?','?','?',
        'Þ','þ','Ð','ð','ß','Œ','œ','Æ','æ','µ'
    );
  
      $good = array(
        'A','a','A','a','A','a','A','a','A','a','A','a','A','a','A','a',
        'C','c','C','c','C','c',
        'D','d','D','d',
        'E','e','E','e','E','e','E','e','E','e','E','e',
        'G','g',
        'I','i','I','i','I','i','I','i',
        'L','l','L','l','L','l',
        'N','n','N','n','N','n',
        'O','o','O','o','O','o','O','o','O','o','O','o','o',
        'R','r','R','r',
        'S','s','S','s','S','s',
        'T','t','T','t','T','t',
        'U','u','U','u','U','u','U','e','U','u',
        'Y','y','Y','y',
        'Z','z','Z','z','Z','z',
        'TH','th','DH','dh','ss','OE','oe','AE','ae','u'
    );
    str_replace($bad,$good,$str);
}
```

**Benutzung**

```

$clean = characterMap('André');

// $clean ist nun 'Andre' weil das é durch e ersetzt wurde
```