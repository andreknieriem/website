---
title: 'TYPO3: Extbase: Typoscript und Flexform-Settings gleichzeitig verwenden'
date: '2016-07-26T16:36:15.000Z'
slug: typo3-extbase-typoscript-und-flexform-settings-gleichzeitig-verwenden
tags:
  - überschreiben
  - typo3
  - flexform
  - typoscript
  - settings
  - same time
  - gleichzeitig
  - merge
description: "Mit der folgenden kleinen Funktion, kann man Settings im TypoScript vordefinieren und über Flexforms für jedes Plugin überschreiben lassen. \r\n\r\npublic function injectConfigurationManager(\\TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface $configurationManager) {\r\n    $this-&gt;configurationManager = $configurationManager;\r\n \r\n    $settings = $this-&gt;configurationManager-&gt;getConfiguration(\\TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface::CONFIGURATION_TYPE_SETTINGS);\r\n    if (isset($settings['override']) &amp;&amp; is_array($settings['override'])) {\r\n        $overrides = $settings['override'];\r\n        unset($settings['override']);\r\n        $settings['merged'] = array_merge($settings, $overrides);\r\n    }\r\n    $this-&gt;settings = $settings;\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Mit der folgenden kleinen Funktion, kann man Settings im TypoScript vordefinieren und über Flexforms für jedes Plugin überschreiben lassen.

```php


public function injectConfigurationManager(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface $configurationManager) {
    $this->configurationManager = $configurationManager;
 
    $settings = $this->configurationManager->getConfiguration(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_SETTINGS);
    if (isset($settings['override']) && is_array($settings['override'])) {
        $overrides = $settings['override'];
        unset($settings['override']);
        $settings['merged'] = array_merge($settings, $overrides);
    }
    $this->settings = $settings;
}

```