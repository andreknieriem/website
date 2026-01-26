---
title: 'TYPO3: FeLogin (fe_login) um eigene Marker erweitern'
date: '2018-08-13T07:55:00.000Z'
slug: typo3-felogin-fe-login-um-eigene-marker-erweitern
tags:
  - '1068'
  - '210'
  - '933'
  - '212'
  - '198'
  - '1070'
  - '409'
  - '806'
  - '1071'
description: "Da fe_login immernoch Tripple-Hash Templates (###) verwendet (warum ist mir ein Rätsel), kann man das Template nicht so einfach pflegen wie ein normales Fluid-Template. Es gibt aber die Möglichkeit eigene Marker über einen Hook hinzuzufügen, um so auch eigene Logik unterzubringen. Das Ganze geht wie folgt:\r\next_localconf.php $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['felogin']['postProcContent']['deinkey_add_feloginmarker'] = 'AR\\ArSiteext\\Hooks\\FeUserHook-&gt;addMarker'; Danach müsst ihr in eurer Extension auch die Klasse anlegen, die ihr in der ext_localconf.php benutzt habt:\r\nFeUserHook namespace AR\\ArSiteext\\Hooks; \r\n \r\nclass FeUserHook {\r\n \r\n  /**\r\n   *  Fügt einen Marker in das FeLogin Template ein\r\n   *  im Stil von: ###MEINMARKER###\r\n   *\r\n   */\r\n  public function addMarker ( $params, $_this ) {\r\n    $marker[\"###MEINMARKER###\"] = 'Ein neuer Marker!';\r\n    $content = $cObj-&gt;substituteMarkerArrayCached($params['content'], $marker);\r\n    return $content;\r\n  }\r\n} Nun muss man nur noch das Template von felogin bearbeiten. Da man dies niemals im Core direkt tun sollte, passen wir die TypoScript Konfiguration an und sagen TYPO3, dass er bei uns in der Extension gucken soll. Dafür muss man auch das originale Template aus typo3/sysext/felogin herauskopieren.\r\nTypoScript Konfiguration plugin.tx_felogin_pi1 {\r\n \r\n    // Template-Datei überscheiben\r\n    templateFile = EXT:ar_siteext/Resources/Private/Templates/Felogin/FrontendLogin.html\r\n \r\n} Das wars nun auch schon. In eurem Template habt ihr nun den neuen Marker zur Verfügung.&nbsp;"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: FeLogin (fe\_login) um eigene Marker erweitern

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 6 Kommentare](#comments)

* * *

### Tags

[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#add](/tag.html?tag=210&cHash=3ba43bb3febe1e8d4e2be7db000fc0e6)[#hinzufügen](/tag.html?tag=212&cHash=704e38a4f30f84642baf8f6bb4603c5a)[#extend](/tag.html?tag=409&cHash=60d1b9bf4bab6b0c9ff5a1fd13f2fb6c)[#hook](/tag.html?tag=806&cHash=9c325cbfa8a9006c7d75178a02374e9f)[#marker](/tag.html?tag=933&cHash=879394706828fd808e1738056bbd0e20)[#felogin.fe\_login](/tag.html?tag=1068&cHash=e270bfaf4229b7ad708a5c35f485c38e)[#tripplehash](/tag.html?tag=1070&cHash=e317a2df91af5fd41432620d25ee06b1)[###](/tag.html?tag=1071&cHash=1ee932e841589193090165e0307dd286)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

13\. Aug 2018

Da fe\_login immernoch Tripple-Hash Templates (###) verwendet (warum ist mir ein Rätsel), kann man das Template nicht so einfach pflegen wie ein normales Fluid-Template. Es gibt aber die Möglichkeit eigene Marker über einen Hook hinzuzufügen, um so auch eigene Logik unterzubringen. Das Ganze geht wie folgt:

**ext\_localconf.php**

```
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['felogin']['postProcContent']['deinkey_add_feloginmarker'] = 'AR\ArSiteext\Hooks\FeUserHook->addMarker';
```

Danach müsst ihr in eurer Extension auch die Klasse anlegen, die ihr in der ext\_localconf.php benutzt habt:

**FeUserHook**

```
namespace AR\ArSiteext\Hooks; 
 
class FeUserHook {
 
  /**
   *  Fügt einen Marker in das FeLogin Template ein
   *  im Stil von: ###MEINMARKER###
   *
   */
  public function addMarker ( $params, $_this ) {
    $marker["###MEINMARKER###"] = 'Ein neuer Marker!';
    $content = $cObj->substituteMarkerArrayCached($params['content'], $marker);
    return $content;
  }
}
```

Nun muss man nur noch das Template von felogin bearbeiten. Da man dies niemals im Core direkt tun sollte, passen wir die TypoScript Konfiguration an und sagen TYPO3, dass er bei uns in der Extension gucken soll. Dafür muss man auch das originale Template aus typo3/sysext/felogin herauskopieren.

**TypoScript Konfiguration**

```
plugin.tx_felogin_pi1 {
 
    // Template-Datei überscheiben
    templateFile = EXT:ar_siteext/Resources/Private/Templates/Felogin/FrontendLogin.html
 
}
```

Das wars nun auch schon. In eurem Template habt ihr nun den neuen Marker zur Verfügung. 

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/ed5f8c41060d4423dea057016ba594dc?s=75&d=mm&r=g)
    
    [Manuel Rotschkar](sicor-kdl.net)
    
    Habe mir gerade bei Euch abgeguckt, wie das ungefähr geht, aber dann direkt einen Fluid Parser eingebaut :-)  
    Grüße, Manuel  
      
    /\*\*  
    \* Run Fluidparser over the content  
    \*/  
    public function parseContent($params, $\_this)  
    {  
    // Create Fluid renderer  
    $objectManager = GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\\ObjectManager');  
    $customView = $objectManager->get('TYPO3\\\\CMS\\\\Fluid\\\\View\\\\StandaloneView');  
    // Create Template file  
    $parsefile = tmpfile();  
    fwrite($parsefile, $params\['content'\]);  
    // Render Tremplate  
    $customView->setTemplatePathAndFilename(stream\_get\_meta\_data($parsefile)\['uri'\]);  
    $content = $customView->render();  
    // Returen result + cleanup  
    fclose($parsefile);  
    return $content;  
    }
    
    21\. Sep 2021 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/5c00c51078e9115a9e6370900deb22cb?s=75&d=mm&r=g)
    
    Crawfish
    
    Vielen Dank für das Tutorial! :-) Wie würde ich einen neuen Marker bei mehrsprachigen Websites einsetze via Typoscript bzw. in der felogin-Konfiguration über \_LOCAL\_LANG ansprechen? Danke für Deine Hilfe!
    
    14\. Sep 2020 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ffd99946a4eec5f7edb6efeb1287dcc6?s=75&d=mm&r=g)
    
    Typo3 Fan
    
    Danke für das Tutorial! Sehr hilfreich!
    
    07\. Dec 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, dass ich dir weiterhelfen konnte!
        
        07\. Dec 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/7119dd8415891f991663b83d5049d4dd?s=75&d=mm&r=g)
    
    Alexander Wahl
    
    In deinem Beispiel ist ein kleiner Fehler drin. Es muss heissen:  
      
    $\_this->cObj->substituteMarkerArrayCached($params\['content'\], $marker);
    
    14\. Nov 2018 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/7119dd8415891f991663b83d5049d4dd?s=75&d=mm&r=g)
    
    Alexander Wahl
    
    Top! Danke für die Anleitung!
    
    14\. Nov 2018 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.