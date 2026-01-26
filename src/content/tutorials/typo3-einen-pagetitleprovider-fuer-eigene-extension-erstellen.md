---
title: 'TYPO3: Einen PageTitleProvider für eigene Extension erstellen'
date: '2020-08-31T08:59:00.000Z'
slug: typo3-einen-pagetitleprovider-fuer-eigene-extension-erstellen
tags:
  - '198'
  - '1187'
  - '422'
  - '62'
description: "Seit neuestem kann man sehr einfach den Seiten-Titel (Pagetitle) bei TYPO3 Seiten anpassen. Man muss hierfür einfach einen TitleProvider in der eigenen Extension erstellen und kann diesen dann in seinem Controller in der Detail-Action nutzen. So spart man sich Typoscript oder sonstige Dinge um einen guten Seiten-Titel zu bekommen.\r\nDas Ganze geht so:\r\nMyExtTitleProvider.php in my_ext/Classes/Seo/ erstellen. Natürlich sind die Extension und der Name Platzhalter. Der Inhalt sieht sieht ungefähr so aus:  Danach fügt ihr den Provider euren TypoScript hinzu: config.pageTitleProviders {\r\n   myRecord {\r\n      provider = AR\\MyExt\\Seo\\MyExtTitleProvider\r\n      before = pages\r\n   }\r\n] Und nun kann man ihn in seinem Controller auch schon nutzen. "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# TYPO3: Einen PageTitleProvider für eigene Extension erstellen

#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#titleprovider](/tag.html?tag=1187&cHash=d59faf8e88608991a68cf0b445d3e73d)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

31\. Aug 2020

Seit neuestem kann man sehr einfach den Seiten-Titel (Pagetitle) bei TYPO3 Seiten anpassen. Man muss hierfür einfach einen TitleProvider in der eigenen Extension erstellen und kann diesen dann in seinem Controller in der Detail-Action nutzen. So spart man sich Typoscript oder sonstige Dinge um einen guten Seiten-Titel zu bekommen.

Das Ganze geht so:

**MyExtTitleProvider.php** in **my\_ext/Classes/Seo/** erstellen. Natürlich sind die Extension und der Name Platzhalter. Der Inhalt sieht sieht ungefähr so aus:

```
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

```
config.pageTitleProviders {
   myRecord {
      provider = AR\MyExt\Seo\MyExtTitleProvider
      before = pages
   }
]
```

Und nun kann man ihn in seinem Controller auch schon nutzen.

```
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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.