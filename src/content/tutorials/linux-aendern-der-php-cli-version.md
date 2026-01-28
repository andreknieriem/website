---
title: 'Linux: Ändern der php-cli Version'
date: '2018-11-16T07:49:00.000Z'
slug: linux-aendern-der-php-cli-version
tags: []
description: >-
  Hat man ein auf seinem System mehrere PHP-Versionen installiert, so kann es
  vorkommen, dass PHP-CLI eine falsche Version standardmäßig ausgewählt hat. Um
  dies einzustellen, muss man nur folgenden Befehl mit der gewünschten
  PHP-Zielversion eingeben. In meinem Fall hier ist es auf die Version 7.2. sudo
  update-alternatives --set php /usr/bin/php7.2
image: /fileadmin/_processed_/2/d/csm_linux_c8a1aa2e0c.png
demo_url: null
download_url: null
---

Hat man ein auf seinem System mehrere PHP-Versionen installiert, so kann es vorkommen, dass PHP-CLI eine falsche Version standardmäßig ausgewählt hat. Um dies einzustellen, muss man nur folgenden Befehl mit der gewünschten PHP-Zielversion eingeben. In meinem Fall hier ist es auf die Version 7.2.

```
sudo update-alternatives --set php /usr/bin/php7.2
```