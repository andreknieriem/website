---
title: Symfony/Unit Test - Deprecation Meldungen verbergen
date: '2020-11-09T07:39:00.000Z'
slug: symfonyunit-test-deprecation-meldungen-verbergen
tags:
  - '1124'
  - '1209'
  - '1210'
  - '1211'
  - '1212'
  - '1213'
  - '1214'
description: "Manchmal lässt man Unit-Tests mit phpunit in Symfony laufen und bekommt sehr viele Deprecation Warnings, die man leider selbst nicht ändern kann. Zum Beispiel ist man auf eine ältere PHP Version angewiesen und die Meldungen gehen nur bei Updates weg, die allerdings eine höhere Version benötigen.\r\nDamit man nun noch erkennen kann, was echte&nbsp;Test-Ausgabe ist, so kann man einfach die eine Zeile in der phpunit.xml.dist hinzufügen.\r\nAnstelle des Wertes \"disabled\" kann man auch \"weak\" reinschreiben. Dann werden die Meldungen nur als Anzahl angezeigt. \r\n\r\n  ...\r\n  \r\n"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Symfony/Unit Test - Deprecation Meldungen verbergen

#Tutorials#Symfony

* * *

![](/fileadmin/_processed_/3/2/csm_symfony_2c03ec37f6.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#symfony](/tag.html?tag=1124&cHash=0d3bc75836ddba7decce7aa24257d2a7)[\# unittest](/tag.html?tag=1209&cHash=744e94b5ef2028f6c9e4fb543487029f)[#phpunit](/tag.html?tag=1210&cHash=1d062da6b91ee8822799e2663d3f8e9b)[#deprecation](/tag.html?tag=1211&cHash=df42804ffd17ac0106f5f7f3d62fd3a6)[\# remaining](/tag.html?tag=1212&cHash=b720295e5a3e86f4d99ff38e867d56f4)[\# stop](/tag.html?tag=1213&cHash=56b3d7e9856e371c6e1eb65cfd5f9d00)[\# disable](/tag.html?tag=1214&cHash=65ec672482550eabd4c025cb6bcef339)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Nov 2020

Manchmal lässt man Unit-Tests mit phpunit in Symfony laufen und bekommt sehr viele Deprecation Warnings, die man leider selbst nicht ändern kann. Zum Beispiel ist man auf eine ältere PHP Version angewiesen und die Meldungen gehen nur bei Updates weg, die allerdings eine höhere Version benötigen.

Damit man nun noch erkennen kann, was echte Test-Ausgabe ist, kann man einfach die eine Zeile in der **phpunit.xml.dist** hinzufügen.

Anstelle des Wertes "**disabled**" kann man auch "**weak**" reinschreiben. Dann werden die Meldungen nur als Anzahl angezeigt.

```
<!--phpunit.xml.dist-->
<php>
  ...
  <env name="SYMFONY_DEPRECATIONS_HELPER" value="disabled" />
</php>
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/2b0d1c04cbbf8465dfe2b4fcc10cabf1?s=75&d=mm&r=g)
    
    ACAD-Profy
    
    Sehr leicht. Vielen Dank!
    
    19\. Jan 2021 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.