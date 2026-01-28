---
title: 'TYPO3: Ein Report-Backendmodul für TYPO3 6.2+ erstellen'
date: '2015-12-10T18:02:23.000Z'
slug: typo3-ein-report-backendmodul-fuer-typo3-62-erstellen
tags:
  - '62'
  - '198'
  - '581'
  - '793'
  - '794'
  - '795'
description: "Da ich immer wieder lange suchen muss, wie man denn bestimmte Module für TYPO3 erstellt, habe ich hier mal ein kleines Tutorial gemacht, was zeigt, wie man ein Report/Bericht Backendmodul baut, welches mit Fluid als Templateengine funktioniert.\nAls erstes benötigt man eine Extension, falls ihr schon eine habt, könnt ihr diese erweitern, ansonsten einfach eine neue erstellen. In der ext_tables.php fügt man dann als erstes folgendes hinzu. \r\n$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['reports'][$_EXTKEY]['TestReport'] = array(\r\n\t'title'       =&gt; 'Test Report Modul',\r\n\t'description' =&gt; 'Ein Test Report Modul',\r\n\t'icon'        =&gt; 'EXT:' . $_EXTKEY . '/Resources/Public/Icons/test.png',\r\n\t'report'      =&gt; 'Namespace\\\\YourExt\\\\Reports\\\\TestReport'\r\n);\r\n In der ext_autoload.php muss jetzt noch unsere Klasse hinzugefügt werden, die wir gerade in der ext_tables.php angegeben haben. \r\n&lt;?php\r\n$extensionPath = t3lib_extMgm::extPath('test_report');\r\nreturn array(\r\n\t'TestReport' =&gt; $extensionPath . 'Classes/TestReport.php',\r\n);\r\n\r\n Unter Classes/Reports muss jetzt eine neue Klasse angelegt werden. In unserem Beispiel TestReport.php \r\n&lt;?php\r\nnamespace Namespace\\YourExt\\Reports;\r\nclass TestReport implements \\TYPO3\\CMS\\Reports\\ReportInterface {\r\n\r\n\tpublic function getReport() {\r\n\t\t\r\n\t\t// Use Fluid to render the template\r\n\t\t$view = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Fluid\\\\View\\\\StandaloneView');\r\n        $view-&gt;setTemplatePathAndFilename(\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::extPath('test_report') . 'Resources/Private/Templates/Reports/TestReport.html');\r\n        $view-&gt;assignMultiple([\r\n        \t'foo' =&gt; 'bar'\r\n\t\t]);\r\n        return $view-&gt;render();\r\n\t}\r\n}\r\n In der TestReport.php ist der Pfad angegeben, wo das Template für den Report liegt. Also brauchen wir noch eine TestReport.html \r\n&lt;div class=\"test\"&gt;\r\nDies ist ein BE Report Modul\r\n\r\n{{foo}}\r\n\r\n&lt;/div&gt;\r\n Danach habt ihr unter Berichte/Reports einen neuen Punkt. Wählt ihr diesen aus, so steht dort jetzt \"Dies ist ein BE Report Modul  bar\"\nUnd schon hat man das Grundgerüst für ein Report-Modul!"
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

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#backend](/tag.html?tag=581&cHash=e7aa0c2f27de1754e4312a7558987953)[#modul](/tag.html?tag=793&cHash=fffa3e5f28359b85b00fb82f1675beac)[#report](/tag.html?tag=794&cHash=00b9940c56d0e95c63399b3e2e72b59b)[#bericht](/tag.html?tag=795&cHash=4730814eaf28b0e32dcc0d9dfcf6c598)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

10\. Dec 2015

Da ich immer wieder lange suchen muss, wie man denn bestimmte Module für TYPO3 erstellt, habe ich hier mal ein kleines Tutorial gemacht, was zeigt, wie man ein Report/Bericht Backendmodul baut, welches mit Fluid als Templateengine funktioniert.

Als erstes benötigt man eine Extension, falls ihr schon eine habt, könnt ihr diese erweitern, ansonsten einfach eine neue erstellen. In der **ext\_tables.php** fügt man dann als erstes folgendes hinzu.

```

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['reports'][$_EXTKEY]['TestReport'] = array(
	'title'       => 'Test Report Modul',
	'description' => 'Ein Test Report Modul',
	'icon'        => 'EXT:' . $_EXTKEY . '/Resources/Public/Icons/test.png',
	'report'      => 'Namespace\\YourExt\\Reports\\TestReport'
);
```

In der **ext\_autoload.php** muss jetzt noch unsere Klasse hinzugefügt werden, die wir gerade in der ext\_tables.php angegeben haben.

```

<?php
$extensionPath = t3lib_extMgm::extPath('test_report');
return array(
	'TestReport' => $extensionPath . 'Classes/TestReport.php',
);

```

Unter Classes/Reports muss jetzt eine neue Klasse angelegt werden. In unserem Beispiel **TestReport.php**

```

<?php
namespace Namespace\YourExt\Reports;
class TestReport implements \TYPO3\CMS\Reports\ReportInterface {

	public function getReport() {
		
		// Use Fluid to render the template
		$view = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Fluid\\View\\StandaloneView');
        $view->setTemplatePathAndFilename(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('test_report') . 'Resources/Private/Templates/Reports/TestReport.html');
        $view->assignMultiple([
        	'foo' => 'bar'
		]);
        return $view->render();
	}
}
```

In der TestReport.php ist der Pfad angegeben, wo das Template für den Report liegt. Also brauchen wir noch eine **TestReport.html**

```

<div class="test">
Dies ist ein BE Report Modul

{{foo}}

</div>
```

Danach habt ihr unter Berichte/Reports einen neuen Punkt. Wählt ihr diesen aus, so steht dort jetzt **"Dies ist ein BE Report Modul bar"**

Und schon hat man das Grundgerüst für ein Report-Modul!

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/7c56d6fe179e2f882ee19d22b3cb3e7e?s=75&d=mm&r=g)
    
    Felix
    
    Super Artikel, danke! Genau was ich gesucht habe.
    
    24\. Jan 2017 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.