---
title: TYPO3:System locale not set on UTF-8 file system beheben
date: '2017-08-08T22:00:00.000Z'
slug: typo3system-locale-not-set-on-utf-8-file-system-beheben
tags: []
description: "Bei manchen TYPO3 Installationen erscheint im Installtool folgende Fehlermeldung, oder ähnlich:\r\nSystem locale not set on UTF-8 file system.\r\n$GLOBALS[TYPO3_CONF_VARS][SYS][UTF8filesystem] is set, but $GLOBALS[TYPO3_CONF_VARS][SYS][systemLocale] is empty. Make sure a valid locale which supports UTF-8 is set.\r\nLösung:\r\nDie Lösung für das Problem ist relativ einfach. Man muss nur im Installtool folgenden Eintrag unter &quot;All Configuration&quot; setzen\r\nTYPO3_CONF_VARS][SYS][systemLocale] = de_DE.UTF-8\r\n"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Bei manchen TYPO3 Installationen erscheint im Installtool folgende Fehlermeldung, oder ähnlich:

System locale not set on UTF-8 file system.

$GLOBALS\[TYPO3\_CONF\_VARS\]\[SYS\]\[UTF8filesystem\] is set, but $GLOBALS\[TYPO3\_CONF\_VARS\]\[SYS\]\[systemLocale\] is empty. Make sure a valid locale which supports UTF-8 is set.

**Lösung:**

Die Lösung für das Problem ist relativ einfach. Man muss nur im Installtool folgenden Eintrag unter "All Configuration" setzen

TYPO3\_CONF\_VARS\]\[SYS\]\[systemLocale\] = de\_DE.UTF-8