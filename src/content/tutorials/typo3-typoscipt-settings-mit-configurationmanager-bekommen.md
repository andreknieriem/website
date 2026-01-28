---
title: 'TYPO3: TypoScipt Settings mit ConfigurationManager bekommen'
date: '2016-09-08T22:00:00.000Z'
slug: typo3-typoscipt-settings-mit-configurationmanager-bekommen
tags:
  - typo3
  - configurationsmanager
  - settings
  - typoscript
  - einstellungen
  - tasks
  - schedular
  - extension
description: "Es kommt schon öfter mal vor, dass man die TypoScript Settings einer Extension in einer anderen Extension, in Hooks, in Tasks oder sonstigen Klassen holen möchte. Um dies zu tun braucht man den ConfigurationManager. Hier habe ich einen kleinen Codeschnipsel, mit dem man den ConfigurationManager initialisiert um anschließend das komplette TypoScript als Array holen zu lassen. &lt;?php \r\nnamespace Test\\Test\\Test\r\nuse TYPO3\\CMS\\Core\\Utility\\GeneralUtility;\r\nclass Test {\r\n    // ConfigurationManager initilisieren\r\n    $this-&gt;configurationManager = GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Extbase\\\\Configuration\\\\ConfigurationManager');\r\n\r\n    // Das komplette TypoScript holen\r\n    $extbaseFrameworkConfiguration = $this-&gt;configurationManager-&gt;getConfiguration(\\TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface::CONFIGURATION_TYPE_FULL_TYPOSCRIPT);\r\n    \r\n    // Die gewünschte Konfiguration aus dem Array holen. WICHTIG! die Arrays sind bei TypoScript immer mit einem \".\"(Punkt) am Ende!\r\n    $config = $extbaseFrameworkConfiguration['plugin.']['tx_artest.']['settings.'];\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Es kommt schon öfter mal vor, dass man die TypoScript Settings einer Extension in einer anderen Extension, in Hooks, in Tasks oder sonstigen Klassen holen möchte. Um dies zu tun braucht man den [ConfigurationManager](https://typo3.org/api/typo3cms/class_t_y_p_o3_1_1_c_m_s_1_1_extbase_1_1_configuration_1_1_configuration_manager.html "Opens internal link in current window"). Hier habe ich einen kleinen Codeschnipsel, mit dem man den ConfigurationManager initialisiert um anschließend das komplette TypoScript als Array holen zu lassen.

```php
<?php 
namespace Test\Test\Test
use TYPO3\CMS\Core\Utility\GeneralUtility;
class Test {
    // ConfigurationManager initilisieren
    $this->configurationManager = GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManager');

    // Das komplette TypoScript holen
    $extbaseFrameworkConfiguration = $this->configurationManager->getConfiguration(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FULL_TYPOSCRIPT);
    
    // Die gewünschte Konfiguration aus dem Array holen. WICHTIG! die Arrays sind bei TypoScript immer mit einem "."(Punkt) am Ende!
    $config = $extbaseFrameworkConfiguration['plugin.']['tx_artest.']['settings.'];
}

```