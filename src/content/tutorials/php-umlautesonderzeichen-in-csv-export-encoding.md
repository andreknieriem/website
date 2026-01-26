---
title: 'PHP: Umlaute/Sonderzeichen in CSV Export (Encoding)'
date: '2015-07-02T16:15:25.000Z'
slug: php-umlautesonderzeichen-in-csv-export-encoding
tags:
  - '192'
  - '640'
  - '641'
  - '729'
  - '730'
  - '731'
  - '732'
  - '733'
description: "Bei einem CSV Export via PHP ist mir aufgefallen, dass viele Sonderzeichen, insbesondere das €-Zeichen (Euro) einfach kaputt dargestellt werden. Nach sehr langer Suche und herumprobieren habe ich hier die Lösung gefunden. \nExcel erwartet das Windows 1252 Encoding, geliefert hatte ich UTF-8. Alle anderen Encodings, besonders ISO 8859-1 (Latin1) gehen nicht, da das €-Zeichen erst ab ISO 8859-15 drin war. Aber auch ISO 8859-15 war nicht ausreichend für Excel. \nFunktion \r\nfunction convertToWindowsCharset($string) {\r\n  $charset =  mb_detect_encoding(\r\n    $string,\r\n    \"UTF-8, ISO-8859-1, ISO-8859-15\",\r\n    true\r\n  );\r\n \r\n  $string =  mb_convert_encoding($string, \"Windows-1252\", $charset);\r\n  return $string;\r\n}\r\n Benutzung \r\n$str = '€äüöüö';\r\n$str = convertToWindowsCharset($str);\r\n\r\n// nun ist $str im windows1252 Format und Excel kann es lesen\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Umlaute/Sonderzeichen in CSV Export (Encoding)

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 8 Kommentare](#comments)

* * *

### Tags

[#csv](/tag.html?tag=192&cHash=9b2c05f92aab6997229f34bfdfee7233)[#special](/tag.html?tag=640&cHash=e47a17115e92cccd85f3c46ff16b9c90)[#chars](/tag.html?tag=641&cHash=ba9a28a4c0dcde1a30b12a41768439d5)[#excel](/tag.html?tag=729&cHash=9543619f5ce4d5a27ddd20cc5855066c)[#euro](/tag.html?tag=730&cHash=0535497bcb96fbbc4eab28eea88fcf8c)[#€](/tag.html?tag=731&cHash=0e6e8315cc0b9c1114c1fa95f7982d33)[#convert](/tag.html?tag=732&cHash=5125d2c7dcdefd167b1e766867cea4bb)[#windows-1252](/tag.html?tag=733&cHash=8934d99bcc774afac1bee4ee91f537b5)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

02\. Jul 2015

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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/65895ddcc92917fb419e5f52c1be5361?s=75&d=mm&r=g)
    
    Benjamin
    
    Vielen Dank dafür! In meinem Fall lag es eher am Code meines Formulars. Ich hatte im <form>-tag vergessen 'accept-charset="Windows-1252"' hinzu zufügen. Bei der Übermittlung der Daten wurde die Codierung bereits zerschossen. Erst hatte ich es mit UTF-8 versucht. Da meine PHP Anwendung auf einem Microsoft Internet Information Server (IIS) läuft, hatte UTF-8 jedoch nicht funktioniert. Mit Windows-1252 klappt es. Vielen Dank!!!
    
    10\. Mar 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/0aa69acef1821e1e1dbd671b6b89ce63?s=75&d=mm&r=g)
    
    Tobi
    
    Super - vielen Dank! Sehr einfach im Script zu ergänzen und das Problem war behoben.
    
    26\. Apr 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/61aac3d35c8be247000e49b1f9c594e4?s=75&d=mm&r=g)
    
    [KA](ka)
    
    Vielen Dank!  
      
    Mega!
    
    14\. Jun 2019 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich zu hören :)
        
        26\. Apr 2020 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/c78b0e63640a67e6237ee43a2f41702b?s=75&d=mm&r=g)
    
    [Stephan](www.datapresent.com)
    
    Auch von meiner Seite: Thank you so much !!!
    
    23\. Oct 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Bitte sehr :)
        
        23\. Oct 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/a7f4923869259937b18c49d170237b69?s=75&d=mm&r=g)
    
    Jan
    
    DANKE!!! Danach habe ich lange gesucht!
    
    10\. Apr 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, dass ich helfen konnte.  
        Grüße Andre
        
        10\. Apr 2018 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.