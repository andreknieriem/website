---
title: 'TYPO3: Ein Report-Backendmodul für TYPO3 6.2+ erstellen'
date: '2015-12-10T18:02:23.000Z'
slug: typo3-ein-report-backendmodul-fuer-typo3-62-erstellen
tags:
  - tutorial
  - typo3
  - backend
  - modul
  - report
  - bericht
description: "Da ich immer wieder lange suchen muss, wie man denn bestimmte Module für TYPO3 erstellt, habe ich hier mal ein kleines Tutorial gemacht, was zeigt, wie man ein Report/Bericht Backendmodul baut, welches mit Fluid als Templateengine funktioniert.\nAls erstes benötigt man eine Extension, falls ihr schon eine habt, könnt ihr diese erweitern, ansonsten einfach eine neue erstellen. In der ext_tables.php fügt man dann als erstes folgendes hinzu. \r\n$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['reports'][$_EXTKEY]['TestReport'] = array(\r\n\t'title'       =&gt; 'Test Report Modul',\r\n\t'description' =&gt; 'Ein Test Report Modul',\r\n\t'icon'        =&gt; 'EXT:' . $_EXTKEY . '/Resources/Public/Icons/test.png',\r\n\t'report'      =&gt; 'Namespace\\\\YourExt\\\\Reports\\\\TestReport'\r\n);\r\n In der ext_autoload.php muss jetzt noch unsere Klasse hinzugefügt werden, die wir gerade in der ext_tables.php angegeben haben. \r\n&lt;?php\r\n$extensionPath = t3lib_extMgm::extPath('test_report');\r\nreturn array(\r\n\t'TestReport' =&gt; $extensionPath . 'Classes/TestReport.php',\r\n);\r\n\r\n Unter Classes/Reports muss jetzt eine neue Klasse angelegt werden. In unserem Beispiel TestReport.php \r\n&lt;?php\r\nnamespace Namespace\\YourExt\\Reports;\r\nclass TestReport implements \\TYPO3\\CMS\\Reports\\ReportInterface {\r\n\r\n\tpublic function getReport() {\r\n\t\t\r\n\t\t// Use Fluid to render the template\r\n\t\t$view = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance('TYPO3\\\\CMS\\\\Fluid\\\\View\\\\StandaloneView');\r\n        $view-&gt;setTemplatePathAndFilename(\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::extPath('test_report') . 'Resources/Private/Templates/Reports/TestReport.html');\r\n        $view-&gt;assignMultiple([\r\n        \t'foo' =&gt; 'bar'\r\n\t\t]);\r\n        return $view-&gt;render();\r\n\t}\r\n}\r\n In der TestReport.php ist der Pfad angegeben, wo das Template für den Report liegt. Also brauchen wir noch eine TestReport.html \r\n&lt;div class=\"test\"&gt;\r\nDies ist ein BE Report Modul\r\n\r\n{{foo}}\r\n\r\n&lt;/div&gt;\r\n Danach habt ihr unter Berichte/Reports einen neuen Punkt. Wählt ihr diesen aus, so steht dort jetzt \"Dies ist ein BE Report Modul  bar\"\nUnd schon hat man das Grundgerüst für ein Report-Modul!"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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