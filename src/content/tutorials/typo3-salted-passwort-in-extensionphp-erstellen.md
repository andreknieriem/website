---
title: 'TYPO3: Salted Passwort in Extension/PHP erstellen'
date: '2015-09-23T16:37:30.000Z'
slug: typo3-salted-passwort-in-extensionphp-erstellen
tags:
  - '10'
  - '41'
  - '198'
  - '479'
  - '598'
  - '755'
description: "Möchte man in einer Extension beispielsweise fe_users anlegen, so benötigt man bei neueren TYPO3 Version salted passwords. Um diese zu erzeugen, kann man ganz einfach auf den Code im Core zugreifen und ihn nutzen. Das Ganze geht wie folgt: \r\n$password = 'ASDF';\r\n$saltedPassword = '';\r\nif (\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::isLoaded('saltedpasswords')) {\r\n  if (\\TYPO3\\CMS\\Saltedpasswords\\Utility\\SaltedPasswordsUtility::isUsageEnabled('FE')) {\r\n    $objSalt = \\TYPO3\\CMS\\Saltedpasswords\\Salt\\SaltFactory::getSaltingInstance(NULL);\r\n    if (is_object($objSalt)) {\r\n       $saltedPassword = $objSalt-&gt;getHashedPassword($password );\r\n    }\r\n  }\r\n}\r\n "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Salted Passwort in Extension/PHP erstellen

#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#plugin](/tag.html?tag=10&cHash=a60b147944670ae116b2ad95aed77aca)[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#create](/tag.html?tag=598&cHash=d278ac10d2671ead85013f073d1eadbe)[#salted password](/tag.html?tag=755&cHash=d07916405eefb5db86b6942c26e22e8f)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

23\. Sep 2015

Möchte man in einer Extension beispielsweise fe\_users anlegen, so benötigt man bei neueren TYPO3 Version salted passwords. Um diese zu erzeugen, kann man ganz einfach auf den Code im Core zugreifen und ihn nutzen. Das Ganze geht wie folgt:

```

$password = 'ASDF';
$saltedPassword = '';
if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('saltedpasswords')) {
  if (\TYPO3\CMS\Saltedpasswords\Utility\SaltedPasswordsUtility::isUsageEnabled('FE')) {
    $objSalt = \TYPO3\CMS\Saltedpasswords\Salt\SaltFactory::getSaltingInstance(NULL);
    if (is_object($objSalt)) {
       $saltedPassword = $objSalt->getHashedPassword($password );
    }
  }
}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/9a64af5de27e9c00a970807118ce824e?s=75&d=mm&r=g)
    
    Willi
    
    Danke für das Snippet!  
    P.S. Da fehlt ein $ for dem Parameter der an getHashedPassword übergeben wird.  
    $objSalt->getHashedPassword($password );
    
    15\. Sep 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Hallo Willi, danke für den Tipp und freut mich, dass ich dir weiterhelfen konnte!
        
        15\. Sep 2017 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.