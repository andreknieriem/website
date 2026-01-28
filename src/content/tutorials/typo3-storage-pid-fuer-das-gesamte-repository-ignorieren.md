---
title: 'TYPO3: Storage Pid für das gesamte Repository ignorieren'
date: '2018-12-13T09:54:00.000Z'
slug: typo3-storage-pid-fuer-das-gesamte-repository-ignorieren
tags: []
description: "Möchte in allen Extbase-Abfragen den Systemordner für die Datensätze (Storage Pid) ignorieren, so kann man dies mit dem folgenden Snipped ganz einfach für das gesamte Repository das Überprüfen des Ordners deaktiveren.\r\nDen Code müsst ihr einfach in den eure Repository-Klasse an den Anfang einfügen. public function initializeObject() {\r\n    $querySettings = $this->objectManager->get(\\TYPO3\\CMS\\Extbase\\Persistence\\Generic\\Typo3QuerySettings::class);\r\n    $querySettings->setRespectStoragePage(false);\r\n    $this->setDefaultQuerySettings($querySettings);\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

13\. Dec 2018

Möchte in allen Extbase-Abfragen den Systemordner für die Datensätze (Storage Pid) ignorieren, so kann man dies mit dem folgenden Snipped ganz einfach für das gesamte Repository das Überprüfen des Ordners deaktiveren.

Den Code müsst ihr einfach in den eure Repository-Klasse an den Anfang einfügen.

```
public function initializeObject() {
    $querySettings = $this->objectManager->get(\TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings::class);
    $querySettings->setRespectStoragePage(false);
    $this->setDefaultQuerySettings($querySettings);
}
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.