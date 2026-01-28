---
title: 'TYPO3: Extbase: Typoscript und Flexform-Settings gleichzeitig verwenden'
date: '2016-07-26T16:36:15.000Z'
slug: typo3-extbase-typoscript-und-flexform-settings-gleichzeitig-verwenden
tags:
  - '181'
  - '198'
  - '393'
  - '415'
  - '767'
  - '851'
  - '852'
  - '853'
description: "Mit der folgenden kleinen Funktion, kann man Settings im TypoScript vordefinieren und über Flexforms für jedes Plugin überschreiben lassen. \r\n\r\npublic function injectConfigurationManager(\\TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface $configurationManager) {\r\n    $this-&gt;configurationManager = $configurationManager;\r\n \r\n    $settings = $this-&gt;configurationManager-&gt;getConfiguration(\\TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface::CONFIGURATION_TYPE_SETTINGS);\r\n    if (isset($settings['override']) &amp;&amp; is_array($settings['override'])) {\r\n        $overrides = $settings['override'];\r\n        unset($settings['override']);\r\n        $settings['merged'] = array_merge($settings, $overrides);\r\n    }\r\n    $this-&gt;settings = $settings;\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#überschreiben](/tag.html?tag=181&cHash=ee4d7c649f657d193097e198bd5a04d4)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#flexform](/tag.html?tag=393&cHash=9954a6b2510df77f6e2dbc2f8802366c)[#typoscript](/tag.html?tag=415&cHash=79fbb58c5773790b7c06207f6cfc008b)[#settings](/tag.html?tag=767&cHash=beea2e4f3ee8a725ade585bb8043ab7d)[#same time](/tag.html?tag=851&cHash=a7c747b4cb6e3443d91252e5c8e4d2c4)[#gleichzeitig](/tag.html?tag=852&cHash=bb9b0496f988803776690217b7ae6dbe)[#merge](/tag.html?tag=853&cHash=e6c32376d8af3274bd846cf74736063e)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

26\. Jul 2016

Mit der folgenden kleinen Funktion, kann man Settings im TypoScript vordefinieren und über Flexforms für jedes Plugin überschreiben lassen.

```


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

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/c2e77c12dc47c6f6e5b92efbe8bf0a42?s=75&d=mm&r=g)
    
    Luka
    
    Hey André, danke für den Code! Hat mir einiges an Mühe erspart.  
      
    Grüße  
    Luka
    
    17\. Aug 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Rinas](http://www.andrerinas.de)
        
        Hey Luka, freut mich, dass ich dir helfen konnte :)
        
        21\. Aug 2016 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.