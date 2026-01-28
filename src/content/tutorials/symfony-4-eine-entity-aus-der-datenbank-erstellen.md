---
title: 'Symfony 4: Eine Entity aus der Datenbank erstellen'
date: '2019-05-07T06:41:00.000Z'
slug: symfony-4-eine-entity-aus-der-datenbank-erstellen
tags:
  - symfony
  - entity
  - entität
  - erzeugen
  - generieren
  - erstellen
  - create
  - doctrine
  - schema
  - annotation
description: "Möchte man mit Symfony 4 Entitäten aus der Datenbank erstellen lassen, so kann es zu manch einer Fehlermeldung kommen und man kommt nicht wirklich. Auch wenn eigentlich alles dokumentiert ist, so findet oder sieht man die Fallstricke nicht gleich auf den ersten Blick.\r\nDer erste Fehler, der bei mir auftrat war, dass er enum nicht als Typ kannte und dadurch nichts generieren kann. Das steht auch klein hier in der Doku.\r\nAlso einfach in der /config/packages/doctrine.yaml folgendes ergänzen: # config/packages/doctrine.yaml\r\ndoctrine:\r\n    dbal:\r\n        mapping_types:\r\n            enum: string Als nächstes hatte ich noch Probleme, dass ich nur eine Entität erstellen lassen wollte und nicht alle. Es gab nur eine neue Tabelle, die ich importiert hatte. Mit der Option&nbsp;--filter ging es jedenfalls nicht.&nbsp;\r\nEin Workaround hier war dann folgendes: # config/packages/doctrine.yaml\r\ndoctrine:\r\n    dbal:\r\n        schema_filter: $your_table_name$ Man gibt in der Yaml-Config einfach einen Schema-Filter an.\r\nAls letztes muss man jetzt nur noch 2 Befehle absetzen und die benötigten Dateien werden erstellt.\r\n\r\n // generate yaml\r\nbin/console doctrine:mapping:import \"App\\Entity\" yaml --path=config/doctrine\r\n\r\n// generate entity\r\nbin/console doctrine:mapping:import \"App\\Entity\" annotation --path=src/Entity"
image: /fileadmin/_processed_/3/2/csm_symfony_2c03ec37f6.png
demo_url: null
download_url: null
---

Möchte man mit Symfony 4 Entitäten aus der Datenbank erstellen lassen, so kann es zu manch einer Fehlermeldung kommen und man kommt nicht wirklich. Auch wenn eigentlich alles dokumentiert ist, so findet oder sieht man die Fallstricke nicht gleich auf den ersten Blick.

Der erste Fehler, der bei mir auftrat war, dass er enum nicht als Typ kannte und dadurch nichts generieren kann. Das steht auch klein hier in der [Doku](https://symfony.com/doc/current/doctrine/dbal.html#registering-custom-mapping-types-in-the-schematool).

Also einfach in der /config/packages/doctrine.yaml folgendes ergänzen:

```
doctrine:
    dbal:
        mapping_types:
            enum: string
```

Als nächstes hatte ich noch Probleme, dass ich nur eine Entität erstellen lassen wollte und nicht alle. Es gab nur eine neue Tabelle, die ich importiert hatte. Mit der Option --filter ging es jedenfalls nicht. 

Ein Workaround hier war dann folgendes:

```
doctrine:
    dbal:
        schema_filter: $your_table_name$
```

Man gibt in der Yaml-Config einfach einen Schema-Filter an.

Als letztes muss man jetzt nur noch 2 Befehle absetzen und die benötigten Dateien werden erstellt.

```
bin/console doctrine:mapping:import "App\Entity" yaml --path=config/doctrine

bin/console doctrine:mapping:import "App\Entity" annotation --path=src/Entity
```