---
title: 'TYPO3: Automatische Anker-Tags entfernen'
date: '2014-02-28T22:29:56.000Z'
slug: typo3-automatische-anker-tags-entfernen
tags:
  - '198'
  - '413'
  - '414'
  - '415'
  - '416'
description: "TYPO3 baut immer Anker-Tags (im Schema &lt;a id=\"c65\"&gt;&lt;/a&gt; in das HTML ein, dass man nicht immer gebrauchen kann (zum Beispiel bei einem Slider, der jedes Element durchslidet). Um diese Funktion auszustellen muss nur folgender Code ins Typoscript geschrieben werden.\nTYPO3 Version < 4.5 \r\ntt_content.stdWrap.dataWrap \r\n TYPO3 Version > 4.5 \r\ntt_content.stdWrap.innerWrap.cObject.66.10 &gt;\r\n Multilang \r\ntt_content.stdWrap.prepend.dataWrap &gt;\r\n Dies betrifft dann natürlich die komplette Seite. Mit Conditions kann man dies aber genau für seinen Zweck einstellen, falls man es braucht."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

TYPO3 baut immer Anker-Tags (im Schema <a id="c65"></a> in das HTML ein, dass man nicht immer gebrauchen kann (zum Beispiel bei einem Slider, der jedes Element durchslidet). Um diese Funktion auszustellen muss nur folgender Code ins Typoscript geschrieben werden.

**TYPO3 Version < 4.5**

```

tt_content.stdWrap.dataWrap 
```

**TYPO3 Version > 4.5**

```

tt_content.stdWrap.innerWrap.cObject.66.10 >
```

**Multilang**

```

tt_content.stdWrap.prepend.dataWrap >
```

Dies betrifft dann natürlich die komplette Seite. Mit Conditions kann man dies aber genau für seinen Zweck einstellen, falls man es braucht.