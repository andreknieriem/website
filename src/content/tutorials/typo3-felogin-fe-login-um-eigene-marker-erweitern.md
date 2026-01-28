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
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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