---
title: 'TYPO3: Entfernen von "Translate to"- und Kopie-Tags'
date: '2014-08-28T15:57:30.000Z'
slug: typo3-entfernen-von-translate-to-und-kopie-tags
tags:
  - typo3
  - entfernen
  - remove
  - translate to
  - kopie
  - unbenennen
description: "Hat man mehrsprachige Seiten in TYPO3 und legt Inhalte in einer anderen Sprache, so steht dort immer [Translate to ...]. Das ist nicht immer schön und kann recht einfach ausgeschaltet werden, allerdings nicht im TYPOSCRIPT, da sonst mindestens die eckigen Klammern übrig bleiben würden. \nAuch das Kopie-Tag was in Titeln oft dazugeschrieben wird, kann man schnell entfernen.\nUnbennenen des Translate to Tags \r\nTCEMAIN {\r\n    translateToMessage = Translate to \"%s\"\r\n}\r\n Entfernen des Translate to Tags \r\n$TCA['tt_content']['columns']['header']['l10n_mode'] = '';\r\n$TCA['tt_content']['columns']['bodytext']['l10n_mode'] = '';\r\n Entfernen des Kopie-Tags bei tt_content \r\nTCEMAIN.table.tt_content {\r\n    disablePrependAtCopy = 1\r\n    disableHideAtCopy = 1\r\n}\r\n Entfernen des Kopie-Tags bei pages \r\nTCEMAIN.table.pages {\r\n    disablePrependAtCopy = 1\r\n    disableHideAtCopy = 1\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Hat man mehrsprachige Seiten in TYPO3 und legt Inhalte in einer anderen Sprache, so steht dort immer \[Translate to ...\]. Das ist nicht immer schön und kann recht einfach ausgeschaltet werden, allerdings nicht im TYPOSCRIPT, da sonst mindestens die eckigen Klammern übrig bleiben würden.

Auch das Kopie-Tag was in Titeln oft dazugeschrieben wird, kann man schnell entfernen.

**Unbennenen des Translate to Tags**

```typoscript

TCEMAIN {
    translateToMessage = Translate to "%s"
}

```

**Entfernen des Translate to Tags**

```php

$TCA['tt_content']['columns']['header']['l10n_mode'] = '';
$TCA['tt_content']['columns']['bodytext']['l10n_mode'] = '';

```

**Entfernen des Kopie-Tags bei tt\_content**

```typoscript

TCEMAIN.table.tt_content {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}

```

**Entfernen des Kopie-Tags bei pages**

```typoscript

TCEMAIN.table.pages {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}

```