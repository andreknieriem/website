---
title: 'TYPO3: Einen PageTitleProvider für eigene Extension erstellen'
date: '2020-08-31T08:59:00.000Z'
slug: typo3-einen-pagetitleprovider-fuer-eigene-extension-erstellen
tags:
  - typo3
  - titleprovider
  - howto
  - tutorial
description: "Seit neuestem kann man sehr einfach den Seiten-Titel (Pagetitle) bei TYPO3 Seiten anpassen. Man muss hierfür einfach einen TitleProvider in der eigenen Extension erstellen und kann diesen dann in seinem Controller in der Detail-Action nutzen. So spart man sich Typoscript oder sonstige Dinge um einen guten Seiten-Titel zu bekommen.\r\nDas Ganze geht so:\r\nMyExtTitleProvider.php in my_ext/Classes/Seo/ erstellen. Natürlich sind die Extension und der Name Platzhalter. Der Inhalt sieht sieht ungefähr so aus:  Danach fügt ihr den Provider euren TypoScript hinzu: config.pageTitleProviders {\r\n   myRecord {\r\n      provider = AR\\MyExt\\Seo\\MyExtTitleProvider\r\n      before = pages\r\n   }\r\n] Und nun kann man ihn in seinem Controller auch schon nutzen. "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Seit neuestem kann man sehr einfach den Seiten-Titel (Pagetitle) bei TYPO3 Seiten anpassen. Man muss hierfür einfach einen TitleProvider in der eigenen Extension erstellen und kann diesen dann in seinem Controller in der Detail-Action nutzen. So spart man sich Typoscript oder sonstige Dinge um einen guten Seiten-Titel zu bekommen.

Das Ganze geht so:

**MyExtTitleProvider.php** in **my\_ext/Classes/Seo/** erstellen. Natürlich sind die Extension und der Name Platzhalter. Der Inhalt sieht sieht ungefähr so aus:

```php
<?php
namespace AR\MyExt\Seo;
use TYPO3\CMS\Core\PageTitle\AbstractPageTitleProvider;

class MyExtTitleProvider extends AbstractPageTitleProvider {
    /**
     * @param string $title
     */
    public function setTitle(string $title)
    {
        $this->title = $title;
    }
}
```

Danach fügt ihr den Provider euren TypoScript hinzu:

```typoscript
config.pageTitleProviders {
   myRecord {
      provider = AR\MyExt\Seo\MyExtTitleProvider
      before = pages
   }
]
```

Und nun kann man ihn in seinem Controller auch schon nutzen.

```php
<?php
use AR\MyExt\Seo\MyExtTitleProvider;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class ....
{


	public function detailAction() {
		// ...
		$titleProvider = GeneralUtility::makeInstance(MyExtTitleProvider::class);
		$titleProvider->setTitle($entry->getTitle().' | Weitere Titel');
	}
}
```