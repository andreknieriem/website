---
title: 'TYPO3: Entfernen von "Translate to"- und Kopie-Tags'
date: '2014-08-28T15:57:30.000Z'
slug: typo3-entfernen-von-translate-to-und-kopie-tags
tags:
  - '198'
  - '414'
  - '505'
  - '521'
  - '522'
  - '523'
description: "Hat man mehrsprachige Seiten in TYPO3 und legt Inhalte in einer anderen Sprache, so steht dort immer [Translate to ...]. Das ist nicht immer schön und kann recht einfach ausgeschaltet werden, allerdings nicht im TYPOSCRIPT, da sonst mindestens die eckigen Klammern übrig bleiben würden. \nAuch das Kopie-Tag was in Titeln oft dazugeschrieben wird, kann man schnell entfernen.\nUnbennenen des Translate to Tags \r\nTCEMAIN {\r\n    translateToMessage = Translate to \"%s\"\r\n}\r\n Entfernen des Translate to Tags \r\n$TCA['tt_content']['columns']['header']['l10n_mode'] = '';\r\n$TCA['tt_content']['columns']['bodytext']['l10n_mode'] = '';\r\n Entfernen des Kopie-Tags bei tt_content \r\nTCEMAIN.table.tt_content {\r\n    disablePrependAtCopy = 1\r\n    disableHideAtCopy = 1\r\n}\r\n Entfernen des Kopie-Tags bei pages \r\nTCEMAIN.table.pages {\r\n    disablePrependAtCopy = 1\r\n    disableHideAtCopy = 1\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 4 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#entfernen](/tag.html?tag=414&cHash=b495868013d94fa130ddd08402082f3f)[#remove](/tag.html?tag=505&cHash=263bad25c9332a7633f566644f35ff4f)[#translate to](/tag.html?tag=521&cHash=89355bbf49a12fc8b805b33ea613b605)[#kopie](/tag.html?tag=522&cHash=52dd3b89eeae9b9d1edc496f4f5e1ffe)[#unbenennen](/tag.html?tag=523&cHash=23d297b682d1d558787fb28673dd3691)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Aug 2014

Hat man mehrsprachige Seiten in TYPO3 und legt Inhalte in einer anderen Sprache, so steht dort immer \[Translate to ...\]. Das ist nicht immer schön und kann recht einfach ausgeschaltet werden, allerdings nicht im TYPOSCRIPT, da sonst mindestens die eckigen Klammern übrig bleiben würden.

Auch das Kopie-Tag was in Titeln oft dazugeschrieben wird, kann man schnell entfernen.

**Unbennenen des Translate to Tags**

```

TCEMAIN {
    translateToMessage = Translate to "%s"
}
```

**Entfernen des Translate to Tags**

```

$TCA['tt_content']['columns']['header']['l10n_mode'] = '';
$TCA['tt_content']['columns']['bodytext']['l10n_mode'] = '';
```

**Entfernen des Kopie-Tags bei tt\_content**

```

TCEMAIN.table.tt_content {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}
```

**Entfernen des Kopie-Tags bei pages**

```

TCEMAIN.table.pages {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/be90953dbc0f4b5686af0f305eda028e?s=75&d=mm&r=g)
    
    Patrick
    
    Hallo Andre,  
    super Tipp, macht das arbeiten wirklich leichter.  
      
    Man kann auch in der LocalConfiguration.php am Ende folgendes eintragen:  
      
    $typo\_db\_extTableDef\_script = 'extTables.php';  
      
    extTables.php ins gleiche Verzeichnis und in dieses Dokument folgenden Code:  
      
      
    Dann klappts auch und man muss nicht eine eigene Erweiterung basteln.  
      
    Gruß, Patrick
    
    01\. Jul 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hey Patrick, freut mich, dass ich dir helfen konnte. Die Herangehensweise mit der LocalConfiguration.php ist allerdings nicht zu empfehlen, da diese Datei vom Install-Tool überschrieben wird. Wenn du dort also einmal ein Setting änderst, dann sind deine Änderungen wieder überschrieben.
        
        01\. Jul 2016 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/9493822d1c1ca14790dd03e001c65e89?s=75&d=mm&r=g)
    
    Ulrix
    
    Danke für die Information, da ich ein Anfänger bin frage ich mich in welcher Datei ich die Änderung durchführen muss und wo sich diese Datei befindet?  
      
    Kann mir hier jemand helfen?  
      
    MfG Ulrix
    
    21\. Sep 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Ulrix,  
          
        die TCEMAIN Sachen müssen ins TS-Config . Dies ist meistens bei der Hauptseite( Die mit der Weltkugel) unter Seiteneinstellungen/Resources und dort ins Page TSConfig.  
          
        Der PHP-Code muss in eine Extension und dort in die ext\_tables.php  
          
        Wenn du noch keine Extension hast, die du bearbeiten/erweitern kannst, dann kannst du dir schnell und einfach eine anlegen. Google dir dafür am besten ein Tutorial.  
          
        Grüße  
        André
        
        21\. Sep 2015 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.