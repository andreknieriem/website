---
title: 'TYPO3: Salted Passwort in Extension/PHP erstellen'
date: '2015-09-23T16:37:30.000Z'
slug: typo3-salted-passwort-in-extensionphp-erstellen
tags:
  - plugin
  - php
  - typo3
  - extension
  - create
  - salted password
description: "Möchte man in einer Extension beispielsweise fe_users anlegen, so benötigt man bei neueren TYPO3 Version salted passwords. Um diese zu erzeugen, kann man ganz einfach auf den Code im Core zugreifen und ihn nutzen. Das Ganze geht wie folgt: \r\n$password = 'ASDF';\r\n$saltedPassword = '';\r\nif (\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::isLoaded('saltedpasswords')) {\r\n  if (\\TYPO3\\CMS\\Saltedpasswords\\Utility\\SaltedPasswordsUtility::isUsageEnabled('FE')) {\r\n    $objSalt = \\TYPO3\\CMS\\Saltedpasswords\\Salt\\SaltFactory::getSaltingInstance(NULL);\r\n    if (is_object($objSalt)) {\r\n       $saltedPassword = $objSalt-&gt;getHashedPassword($password );\r\n    }\r\n  }\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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