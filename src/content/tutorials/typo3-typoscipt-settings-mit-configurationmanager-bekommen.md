---
title: 'TYPO3: TypoScipt Settings mit ConfigurationManager bekommen'
date: '2016-09-08T22:00:00.000Z'
slug: typo3-typoscipt-settings-mit-configurationmanager-bekommen
tags:
  - '198'
  - '903'
  - '767'
  - '415'
  - '769'
  - '904'
  - '905'
  - '479'
description: "Es kommt schon öfter mal vor, dass man die TypoScript Settings einer Extension in einer anderen Extension, in Hooks, in Tasks oder sonstigen Klassen holen möchte. Um dies zu tun braucht man den ConfigurationManager. Hier habe ich einen kleinen Codeschnipsel, mit dem man den ConfigurationManager initialisiert um anschließend das komplette TypoScript als Array holen zu lassen. &lt;?php \r\nnamespace Test\\Test\\Test\r\nuse TYPO3\\CMS\\Core\\Utility\\GeneralUtility;\r\nclass Test {\r\n    // ConfigurationManager initilisieren\r\n    $this-&gt;configurationManager = GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Extbase\\\\Configuration\\\\ConfigurationManager');\r\n\r\n    // Das komplette TypoScript holen\r\n    $extbaseFrameworkConfiguration = $this-&gt;configurationManager-&gt;getConfiguration(\\TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface::CONFIGURATION_TYPE_FULL_TYPOSCRIPT);\r\n    \r\n    // Die gewünschte Konfiguration aus dem Array holen. WICHTIG! die Arrays sind bei TypoScript immer mit einem \".\"(Punkt) am Ende!\r\n    $config = $extbaseFrameworkConfiguration['plugin.']['tx_artest.']['settings.'];\r\n}\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 1 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#extension](/tag.html?tag=479&cHash=7efe6f7bc15e3ac87165e3d287e91fea)[#settings](/tag.html?tag=767&cHash=beea2e4f3ee8a725ade585bb8043ab7d)[#einstellungen](/tag.html?tag=769&cHash=103349a5b68b48c9cde044378784c48f)[#configurationsmanager](/tag.html?tag=903&cHash=b6ff9c22d014eb00b1b52bec6fa5226c)[#tasks](/tag.html?tag=904&cHash=b65a333fe2be3feff597da375a316323)[#schedular](/tag.html?tag=905&cHash=2c918d760e2dd3dd7934dca7642e94f8)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Sep 2016

Es kommt schon öfter mal vor, dass man die TypoScript Settings einer Extension in einer anderen Extension, in Hooks, in Tasks oder sonstigen Klassen holen möchte. Um dies zu tun braucht man den [ConfigurationManager](https://typo3.org/api/typo3cms/class_t_y_p_o3_1_1_c_m_s_1_1_extbase_1_1_configuration_1_1_configuration_manager.html "Opens internal link in current window"). Hier habe ich einen kleinen Codeschnipsel, mit dem man den ConfigurationManager initialisiert um anschließend das komplette TypoScript als Array holen zu lassen.

```
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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/36f43a7e48716af576ee3fb40f70535a?s=75&d=mm&r=g)
    
    Michael Lang
    
    Vielen Dank, die erste Erklärung, die sofort funktionierte.
    
    17\. Apr 2020 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.