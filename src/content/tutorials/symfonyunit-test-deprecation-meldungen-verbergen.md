---
title: Symfony/Unit Test - Deprecation Meldungen verbergen
date: '2020-11-09T07:39:00.000Z'
slug: symfonyunit-test-deprecation-meldungen-verbergen
tags:
  - symfony
  - ' unittest'
  - phpunit
  - deprecation
  - ' remaining'
  - ' stop'
  - ' disable'
description: "Manchmal lässt man Unit-Tests mit phpunit in Symfony laufen und bekommt sehr viele Deprecation Warnings, die man leider selbst nicht ändern kann. Zum Beispiel ist man auf eine ältere PHP Version angewiesen und die Meldungen gehen nur bei Updates weg, die allerdings eine höhere Version benötigen.\r\nDamit man nun noch erkennen kann, was echte&nbsp;Test-Ausgabe ist, so kann man einfach die eine Zeile in der phpunit.xml.dist hinzufügen.\r\nAnstelle des Wertes \"disabled\" kann man auch \"weak\" reinschreiben. Dann werden die Meldungen nur als Anzahl angezeigt. \r\n\r\n  ...\r\n  \r\n"
image: /fileadmin/_processed_/3/2/csm_symfony_2c03ec37f6.png
demo_url: null
download_url: null
---

Manchmal lässt man Unit-Tests mit phpunit in Symfony laufen und bekommt sehr viele Deprecation Warnings, die man leider selbst nicht ändern kann. Zum Beispiel ist man auf eine ältere PHP Version angewiesen und die Meldungen gehen nur bei Updates weg, die allerdings eine höhere Version benötigen.

Damit man nun noch erkennen kann, was echte Test-Ausgabe ist, kann man einfach die eine Zeile in der **phpunit.xml.dist** hinzufügen.

Anstelle des Wertes "**disabled**" kann man auch "**weak**" reinschreiben. Dann werden die Meldungen nur als Anzahl angezeigt.

```html
<!--phpunit.xml.dist-->
<php>
  ...
  <env name="SYMFONY_DEPRECATIONS_HELPER" value="disabled" />
</php>
```
