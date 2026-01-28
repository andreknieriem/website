---
title: 'PHP: Russische Zeichen erkennen um beispielsweise Spam zu vermeiden'
date: '2017-04-02T22:00:00.000Z'
slug: php-russische-zeichen-erkennen-um-beispielsweise-spam-zu-vermeiden
tags:
  - php
  - detect
  - erkennen
  - russian
  - russisch
  - spam
description: "Bei mir kommt es recht häufig vor, dass in meinen Kommentaren Spams mit russischen Inhalt kommen. Nach kleiner Recherche habe ich eine Funktion gefunden, die die russische Sprache erkennt. So kann ich dann jeden Kommentar, der hier ein true zurückgibt als Spam markieren.\r\nHier die Funktion: function isRussian($text) {\r\n    return preg_match('/[?-??-???]/u', $text);\r\n}"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Bei mir kommt es recht häufig vor, dass in meinen Kommentaren Spams mit russischen Inhalt kommen. Nach kleiner Recherche habe ich eine Funktion gefunden, die die russische Sprache erkennt. So kann ich dann jeden Kommentar, der hier ein true zurückgibt als Spam markieren.

**Hier die Funktion:**

```php
function isRussian($text) {
    return preg_match('/[А-Яа-яЁё]/u', $text);
}
```