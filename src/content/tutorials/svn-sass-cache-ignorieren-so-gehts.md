---
title: 'SVN: .sass-cache ignorieren, so geht''s!'
date: '2014-10-31T15:55:14.000Z'
slug: svn-sass-cache-ignorieren-so-gehts
tags:
  - '109'
  - '417'
  - '560'
  - '561'
description: "Möchte man die .sass-cache Dateien nicht im SVN haben, so lässt sich dies mit der folgenden Zeile einfach bewerkstelligen. \r\nsvn propset svn:ignore '.sass-cache' .\r\n "
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Möchte man die .sass-cache Dateien nicht im SVN haben, so lässt sich dies mit der folgenden Zeile einfach bewerkstelligen.

```

svn propset svn:ignore '.sass-cache' .
```