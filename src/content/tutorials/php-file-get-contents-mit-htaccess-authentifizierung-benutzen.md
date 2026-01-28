---
title: 'PHP: file_get_contents() mit .htaccess Authentifizierung benutzen'
date: '2016-12-15T23:00:00.000Z'
slug: php-file-get-contents-mit-htaccess-authentifizierung-benutzen
tags:
  - '41'
  - '941'
  - '931'
  - '942'
  - '943'
  - '62'
description: "Möchte man eine Datei oder Url mit file_get_contents&nbsp;holen, welche hinter einem .htaccess Schutz ist, so kann man das mit dem folgenden kleinen Code-Beispiel tun. $context = stream_context_create(array (\r\n    'http' =&gt; array (\r\n        'header' =&gt; 'Authorization: Basic ' . base64_encode(\"$username:$password\")\r\n    )\r\n));\r\n$data = file_get_contents($url, false, $context);"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#auth](/tag.html?tag=931&cHash=ca1fa244d420aa08e257a0940960caa6)[#htaccess](/tag.html?tag=941&cHash=baede19482d66dedc6df33c9d6218c54)[#authentication](/tag.html?tag=942&cHash=1d37df10055cefc22dda1735164c105a)[#how](/tag.html?tag=943&cHash=18d146c6fa91e227da85a33c2b632815)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. Dec 2016

Möchte man eine Datei oder Url mit [file\_get\_contents](http://php.net/manual/de/function.file-get-contents.php "Opens internal link in current window") holen, welche hinter einem .htaccess Schutz ist, so kann man das mit dem folgenden kleinen Code-Beispiel tun.

```
$context = stream_context_create(array (
    'http' => array (
        'header' => 'Authorization: Basic ' . base64_encode("$username:$password")
    )
));
$data = file_get_contents($url, false, $context);
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/3e64e0992aefe266852158289cda05bd?s=75&d=mm&r=g)
    
    php mann
    
    Lange gesucht, hier gefunden. Danke :)
    
    17\. Feb 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.