---
title: 'TYPO3: Shortcut Menüpunkt als active setzen'
date: '2017-02-16T23:00:00.000Z'
slug: typo3-shortcut-menuepunkt-als-active-setzen
tags:
  - '198'
  - '959'
  - '436'
  - '437'
  - '960'
  - '961'
description: "In vielen TYPO3 Installationen kommt es vor, dass man einen Home/Startseite Link ins Menü einbaut, welche als Shortcut wieder auf die oberste Seite zeigt. Dieser wird allerdings niemals den Aktiv-Zustand bekommen. Um das Ganze zu lösen kann man mit ein paar kleinen Conditions im TypoScript den Aktiv-Zustand doch erreichen.&nbsp;\r\nHier der TS-Code: lib.menu = HMENU\r\nlib.menu {\r\n\r\n    1 = TMENU\r\n    1 {\r\n        wrap = &lt;ul&gt;|&lt;/ul&gt;\r\n        expAll = 1\r\n        noBlur = 1\r\n\r\n        NO.wrapItemAndSub = &lt;li&gt;|&lt;/li&gt;\r\n\r\n        # Add class active to li if shortcut is pointing to current page\r\n        NO.wrapItemAndSub.override.cObject = COA\r\n        NO.wrapItemAndSub.override.cObject {\r\n            if {\r\n                value = 4\r\n                equals.field = doktype\r\n                isTrue = 1\r\n                isTrue.if {\r\n                    value.data = TSFE:page|uid\r\n                    equals.field = shortcut\r\n                }\r\n            }\r\n            10 = TEXT\r\n            10.value = &lt;li class=\"active\" &gt;|&lt;/li&gt;\r\n        }\r\n\r\n        ACT = 1\r\n        ACT.wrapItemAndSub = &lt;li class=\"active\" &gt;|&lt;/li&gt;    \r\n    }\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 5 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#tmenu](/tag.html?tag=436&cHash=adb711bbb0a4542bdfe9d90abf225bbb)[#hmenu](/tag.html?tag=437&cHash=00bd92582d0de0e613907a4385f53318)[\# shortcut](/tag.html?tag=959&cHash=b0f5c9f9cb20177965bbae91e5705838)[#act](/tag.html?tag=960&cHash=06f37d3e7fc41b4f56bf59e198c93609)[#selected](/tag.html?tag=961&cHash=07b5653eecb48ccc0c88aeeb4d6433e2)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Feb 2017

In vielen TYPO3 Installationen kommt es vor, dass man einen Home/Startseite Link ins Menü einbaut, welche als Shortcut wieder auf die oberste Seite zeigt. Dieser wird allerdings niemals den Aktiv-Zustand bekommen. Um das Ganze zu lösen kann man mit ein paar kleinen Conditions im TypoScript den Aktiv-Zustand doch erreichen. 

**Hier der TS-Code:**

```
lib.menu = HMENU
lib.menu {

    1 = TMENU
    1 {
        wrap = <ul>|</ul>
        expAll = 1
        noBlur = 1

        NO.wrapItemAndSub = <li>|</li>

        # Add class active to li if shortcut is pointing to current page
        NO.wrapItemAndSub.override.cObject = COA
        NO.wrapItemAndSub.override.cObject {
            if {
                value = 4
                equals.field = doktype
                isTrue = 1
                isTrue.if {
                    value.data = TSFE:page|uid
                    equals.field = shortcut
                }
            }
            10 = TEXT
            10.value = <li class="active" >|</li>
        }

        ACT = 1
        ACT.wrapItemAndSub = <li class="active" >|</li>    
    }
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/51f4e9029fb92f9d147eec8c55217346?s=75&d=mm&r=g)
    
    Alex
    
    Vielen Dank!! Endlich funktioniert es!
    
    07\. Feb 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, dass ich dir helfen konnte!
        
        07\. Feb 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/32910062cc252522a4da1cbd5282a204?s=75&d=mm&r=g)
    
    Akos
    
    Hallo, bei mir funktioniert es leider nicht. Woran kann es liegen? Hah T37.6.20.  
    "value = 4" ist die ID der Seite, die auf Home weiterleitet, oder?  
    LG Akos
    
    19\. Jul 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo, nein value = 4 ist der doktype der Seite. 4 ist der Doktype shortcut. Daruf prüft das Typoscript ja und guckt dann ob die derzeitige Seite, der Seite des Ziels entspricht und setzt so den Aktiv-Zustand.  
          
        Grüße
        
        19\. Jul 2017 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/32910062cc252522a4da1cbd5282a204?s=75&d=mm&r=g)
            
            Akos
            
            Hmm geht irgendwie nicht bei mir :(  
            Ich habe Home und "1. Unterseite" direkt darunter. 1. Unterseite ist ein shortcut auf Home. Wenn if draufklicke, soll Home angezeigt, und der Menüpunkt "1. Unterseite" aktiv gesetzt werden. Jetzt habe ichs umgekehrt gemacht, Home ist eine Weiterleitung auf die 1. Unterseite.
            
            19\. Jul 2017 [Antworten](#)
            

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.