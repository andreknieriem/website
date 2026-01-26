---
title: 'Symfony 4: Eine Entity aus der Datenbank erstellen'
date: '2019-05-07T06:41:00.000Z'
slug: symfony-4-eine-entity-aus-der-datenbank-erstellen
tags:
  - '1124'
  - '1147'
  - '1148'
  - '1149'
  - '1150'
  - '480'
  - '598'
  - '1151'
  - '1152'
  - '1153'
description: "Möchte man mit Symfony 4 Entitäten aus der Datenbank erstellen lassen, so kann es zu manch einer Fehlermeldung kommen und man kommt nicht wirklich. Auch wenn eigentlich alles dokumentiert ist, so findet oder sieht man die Fallstricke nicht gleich auf den ersten Blick.\r\nDer erste Fehler, der bei mir auftrat war, dass er enum nicht als Typ kannte und dadurch nichts generieren kann. Das steht auch klein hier in der Doku.\r\nAlso einfach in der /config/packages/doctrine.yaml folgendes ergänzen: # config/packages/doctrine.yaml\r\ndoctrine:\r\n    dbal:\r\n        mapping_types:\r\n            enum: string Als nächstes hatte ich noch Probleme, dass ich nur eine Entität erstellen lassen wollte und nicht alle. Es gab nur eine neue Tabelle, die ich importiert hatte. Mit der Option&nbsp;--filter ging es jedenfalls nicht.&nbsp;\r\nEin Workaround hier war dann folgendes: # config/packages/doctrine.yaml\r\ndoctrine:\r\n    dbal:\r\n        schema_filter: $your_table_name$ Man gibt in der Yaml-Config einfach einen Schema-Filter an.\r\nAls letztes muss man jetzt nur noch 2 Befehle absetzen und die benötigten Dateien werden erstellt.\r\n\r\n // generate yaml\r\nbin/console doctrine:mapping:import \"App\\Entity\" yaml --path=config/doctrine\r\n\r\n// generate entity\r\nbin/console doctrine:mapping:import \"App\\Entity\" annotation --path=src/Entity"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Symfony 4: Eine Entity aus der Datenbank erstellen

#Tutorials#Symfony

* * *

![](/fileadmin/_processed_/3/2/csm_symfony_2c03ec37f6.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#erstellen](/tag.html?tag=480&cHash=a18544430b7d76e83779a833a2a58287)[#create](/tag.html?tag=598&cHash=d278ac10d2671ead85013f073d1eadbe)[#symfony](/tag.html?tag=1124&cHash=0d3bc75836ddba7decce7aa24257d2a7)[#entity](/tag.html?tag=1147&cHash=535881603b842dd7273cefdc54edfd5e)[#entität](/tag.html?tag=1148&cHash=ab43cf96744cb6cc15ce7d5e36331074)[#erzeugen](/tag.html?tag=1149&cHash=cd4b42f00179f13009bbf17d90fd6381)[#generieren](/tag.html?tag=1150&cHash=d904b057f56515ca669fae87fa91fbae)[#doctrine](/tag.html?tag=1151&cHash=aa8715c9fc21e3f369de5faa231e2d20)[#schema](/tag.html?tag=1152&cHash=09333a5615c7a0619b6e943f2d1896af)[#annotation](/tag.html?tag=1153&cHash=a3a6d732f870bc471d4a967c75356f1f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. May 2019

Möchte man mit Symfony 4 Entitäten aus der Datenbank erstellen lassen, so kann es zu manch einer Fehlermeldung kommen und man kommt nicht wirklich. Auch wenn eigentlich alles dokumentiert ist, so findet oder sieht man die Fallstricke nicht gleich auf den ersten Blick.

Der erste Fehler, der bei mir auftrat war, dass er enum nicht als Typ kannte und dadurch nichts generieren kann. Das steht auch klein hier in der [Doku](https://symfony.com/doc/current/doctrine/dbal.html#registering-custom-mapping-types-in-the-schematool).

Also einfach in der /config/packages/doctrine.yaml folgendes ergänzen:

```
# config/packages/doctrine.yaml
doctrine:
    dbal:
        mapping_types:
            enum: string
```

Als nächstes hatte ich noch Probleme, dass ich nur eine Entität erstellen lassen wollte und nicht alle. Es gab nur eine neue Tabelle, die ich importiert hatte. Mit der Option --filter ging es jedenfalls nicht. 

Ein Workaround hier war dann folgendes:

```
# config/packages/doctrine.yaml
doctrine:
    dbal:
        schema_filter: $your_table_name$
```

Man gibt in der Yaml-Config einfach einen Schema-Filter an.

Als letztes muss man jetzt nur noch 2 Befehle absetzen und die benötigten Dateien werden erstellt.

```
# generate yaml
bin/console doctrine:mapping:import "App\Entity" yaml --path=config/doctrine

# generate entity
bin/console doctrine:mapping:import "App\Entity" annotation --path=src/Entity
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.