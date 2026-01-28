---
title: 'Raspberry Pi: Webserver und Datenbank installieren'
date: '2015-02-10T17:31:04.000Z'
slug: raspberry-pi-webserver-und-datenbank-installieren
tags:
  - '122'
  - '226'
  - '547'
  - '548'
  - '549'
  - '550'
  - '551'
  - '552'
  - '553'
description: "[caption id=\"attachment_2002\" align=\"aligncenter\"] Raspberry Pi 2 Foto raspberrypi.org[/caption]\nEin Raspberry Pi eignet sich hervorragend als kleiner Web-Server und für ein Projekt, was ich noch vorstellen werde, hat dieser mir sehr viel genützt.\nSo einfach geht's\nRoot-Rechte bekommen\nAls Erstes solltet ihr mit dem folgenden Befehl euch die Rootrechte besorgen. ACHTUNG: Danach könnt ihr ohne Nachfrage alles machen (Auch kaputt natürlich!) \r\nsudo apt-get install phpmyadmin\r\n Optional Phpmyadmin installieren\nWer möchte kann noch phpmyadmin installieren. Dies ist ein PHP-Interface für eure Datenbanken. Ich finde allerdings den Adminer deutlich besser und er kommt in einer Datei. Aber es sei euch selbst überlassen. \r\nsudo apt-get install php5-mysql\r\nsudo apt-get install mysql-server mysql-client\r\n Mysql installieren\nWordpress, TYPO3 und andere CMS-Systeme und andere Systeme benötigen Datenbanken um alles zu speichern. Die meist genutzte Datenbank ist hierbei MYSQL. Diese installieren wie folgt: \r\nsudo apt-get install libapache2-mod-php5 php5 php-pear php5-xcache\r\n PHP5 installieren\nFür die meisten Webanwendungen wird PHP benötigt, deswegen installieren wir es. \r\nsudo apt-get install apache2 apache2-doc apache2-utils\r\n Webserver Apache2 installieren\nHat der Pi neugestartet können wir nun den Apache2 Webserver installieren. \r\nsudo reboot\r\n Neustarten nach dem Update \r\nsudo apt-get update\r\n Updates beziehen, bevor man installiert\nBevor wir nun den Web-Server installieren, lassen wir unseren Raspberry updaten und anschließend neustarten, damit wir auf dem neuesten und sichersten Stand sind. \r\nsudo groupadd www-data\r\nsudo usermod -a -G www-data www-data\r\n Gruppe und User für den Webserver hinzufügen\nEin Webserver sollte immer einen eigenen User und eine eigene Gruppe haben. Damit verhindert ihr, dass jemand über den Web-Browser sich die kompletten Root-Rechte von eurem Pi verschaffen kann. Am meisten benutzt man www-data. \r\nsudo bash\r\n Schon ist ein Webserver auf eurem System installiert.\nWenn ihr jetzt die IP-Adresse des Pi's aufruft mit einem Browser solltet ihr die Apache2 Seite sehen. Diese liegt in /var/www/. Genau in dieses Verzeichnis muss auch eure Anwendung/Webseite."
image: /fileadmin/_processed_/3/3/csm_raspberry_14520f3d4b.png
demo_url: null
download_url: null
---

\[caption id="attachment\_2002" align="aligncenter"\][![Raspberry Pi 2 Foto raspberrypi.org](http://andreknieriem.de/wp-content/uploads/2015/02/Pi2ModB1GB_-comp-766x434.jpeg)](http://andreknieriem.de/wp-content/uploads/2015/02/Pi2ModB1GB_-comp.jpeg) Raspberry Pi 2 Foto raspberrypi.org\[/caption\]

Ein Raspberry Pi eignet sich hervorragend als kleiner Web-Server und für ein Projekt, was ich noch vorstellen werde, hat dieser mir sehr viel genützt.

**So einfach geht's**

**Root-Rechte bekommen**

Als Erstes solltet ihr mit dem folgenden Befehl euch die Rootrechte besorgen. **ACHTUNG**: Danach könnt ihr ohne Nachfrage alles machen (Auch kaputt natürlich!)

```

sudo apt-get install phpmyadmin
```

**Optional Phpmyadmin installieren**

Wer möchte kann noch phpmyadmin installieren. Dies ist ein PHP-Interface für eure Datenbanken. Ich finde allerdings den [Adminer](http://www.adminer.org/de/) deutlich besser und er kommt in einer Datei. Aber es sei euch selbst überlassen.

```

sudo apt-get install php5-mysql
sudo apt-get install mysql-server mysql-client
```

**Mysql installieren**

Wordpress, TYPO3 und andere CMS-Systeme und andere Systeme benötigen Datenbanken um alles zu speichern. Die meist genutzte Datenbank ist hierbei MYSQL. Diese installieren wie folgt:

```

sudo apt-get install libapache2-mod-php5 php5 php-pear php5-xcache
```

**PHP5 installieren**

Für die meisten Webanwendungen wird PHP benötigt, deswegen installieren wir es.

```

sudo apt-get install apache2 apache2-doc apache2-utils
```

**Webserver Apache2 installieren**

Hat der Pi neugestartet können wir nun den Apache2 Webserver installieren.

```

sudo reboot
```

**Neustarten nach dem Update**

```

sudo apt-get update
```

**Updates beziehen, bevor man installiert**

Bevor wir nun den Web-Server installieren, lassen wir unseren Raspberry updaten und anschließend neustarten, damit wir auf dem neuesten und sichersten Stand sind.

```

sudo groupadd www-data
sudo usermod -a -G www-data www-data
```

**Gruppe und User für den Webserver hinzufügen**

Ein Webserver sollte immer einen eigenen User und eine eigene Gruppe haben. Damit verhindert ihr, dass jemand über den Web-Browser sich die kompletten Root-Rechte von eurem Pi verschaffen kann. Am meisten benutzt man www-data.

```

sudo bash
```

Schon ist ein Webserver auf eurem System installiert.

Wenn ihr jetzt die IP-Adresse des Pi's aufruft mit einem Browser solltet ihr die Apache2 Seite sehen. Diese liegt in /var/www/. Genau in dieses Verzeichnis muss auch eure Anwendung/Webseite.