---
title: 'TYPO3: Automatische Anker-Tags entfernen'
date: '2014-02-28T22:29:56.000Z'
slug: typo3-automatische-anker-tags-entfernen
tags:
  - '198'
  - '413'
  - '414'
  - '415'
  - '416'
description: "TYPO3 baut immer Anker-Tags (im Schema &lt;a id=\"c65\"&gt;&lt;/a&gt; in das HTML ein, dass man nicht immer gebrauchen kann (zum Beispiel bei einem Slider, der jedes Element durchslidet). Um diese Funktion auszustellen muss nur folgender Code ins Typoscript geschrieben werden.\nTYPO3 Version < 4.5 \r\ntt_content.stdWrap.dataWrap \r\n TYPO3 Version > 4.5 \r\ntt_content.stdWrap.innerWrap.cObject.66.10 &gt;\r\n Multilang \r\ntt_content.stdWrap.prepend.dataWrap &gt;\r\n Dies betrifft dann natürlich die komplette Seite. Mit Conditions kann man dies aber genau für seinen Zweck einstellen, falls man es braucht."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Automatische Anker-Tags entfernen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#anker](/tag.html?tag=413&cHash=63fadab2d8e255859c861e221b761364)[#entfernen](/tag.html?tag=414&cHash=b495868013d94fa130ddd08402082f3f)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#anchor](/tag.html?tag=416&cHash=c17e0a4d642da2f4ce95fab1fe8b9012)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Feb 2014

TYPO3 baut immer Anker-Tags (im Schema <a id="c65"></a> in das HTML ein, dass man nicht immer gebrauchen kann (zum Beispiel bei einem Slider, der jedes Element durchslidet). Um diese Funktion auszustellen muss nur folgender Code ins Typoscript geschrieben werden.

**TYPO3 Version < 4.5**

```

tt_content.stdWrap.dataWrap 
```

**TYPO3 Version > 4.5**

```

tt_content.stdWrap.innerWrap.cObject.66.10 >
```

**Multilang**

```

tt_content.stdWrap.prepend.dataWrap >
```

Dies betrifft dann natürlich die komplette Seite. Mit Conditions kann man dies aber genau für seinen Zweck einstellen, falls man es braucht.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/d573f8a4c242f05561336f780f0659c3?s=75&d=mm&r=g)
    
    [Christian Michael](cmichael.de)
    
    Multilang funktioniert nicht in TYPO3 9.5.5 ... suche noch nach der Lösung dafür
    
    29\. Apr 2019 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.