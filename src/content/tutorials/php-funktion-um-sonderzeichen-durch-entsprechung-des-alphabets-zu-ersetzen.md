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
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#charactermap](/tag.html?tag=745&cHash=841e04d19cd960962e1379d8852ce109)[#slug](/tag.html?tag=746&cHash=e4f12cf1fc0ba1674ced2b60181efc89)[#replace](/tag.html?tag=747&cHash=60532b7c9676f3cea683673442431cff)[#specialchars](/tag.html?tag=748&cHash=70f938e763d22456d1df1dc57b487e23)[#alphabet](/tag.html?tag=749&cHash=8ddfb253c5cc07a953bce78e5d0e89e1)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

18\. Aug 2015

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/86983987391496d8c80d19257a399dae?s=75&d=mm&r=g)
    
    Thomas\_H
    
    Ich habe versucht, Deine Funktion einzubinden, um in einer Datenbank die Herkunft von Angriffsversuchen auf meinen Servern zu dokumentieren.  
      
    Ich befülle die Variable "city$", welcher zum Beispiel den Wert "Quảng Ngãi" zugewiesen wird. Dann rufe ich Deine Funktion auf mittels  
      
    characterMap($city);  
      
    Die Funktion enthält das "a" mit Welle obendrauf als "bad-Array", sollte dieses a mit Welle also gegen ein normales a austauschen.  
      
    Ich habe also zum Test einige echo-befehle eingebaut, die jeweils den ermittelten Wert für die Variable "$city" ausgeben.  
      
    Allerdings kommt das dabei heraus:  
      
    City = Quảng Ngãi  
    str = Quảng Ngãi  
    str\_neu = Quảng Ngãi  
    City neu= Quảng Ngãi  
      
    Rufe ich die Funktion auf mittels  
    $city\_neu = characterMap($city);  
      
    bleibt $city\_neu leer.  
      
    Ergo: keine Konvertierung. Oder was mache ich falsch?  
      
    Und was mir auch aufgefallen ist: Du hast einige Fragezeichen in Deiner Funktion  
      
    
    08\. Jun 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/f82554a25e428d626732bfceea5d017f?s=75&d=mm&r=g)
    
    Ich
    
    Deine Funktion macht doch garnichts! Nur zwei Arrays ohne weiteren Befehl!
    
    21\. Aug 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](http://www.andrerinas.de)
        
        Hallo, du hast Recht! Die Funktion war irgendwie beschnitten. Es fehlten die letzten 5 Zeilen. Habe die Funktion wieder richtig eingefügt. Danke für die Meldung!
        
        21\. Aug 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.