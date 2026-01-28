---
title: 'Aptana Studio 3: Key Exchange Error beheben'
date: '2016-06-20T17:04:33.000Z'
slug: aptana-studio-3-key-exchange-error-beheben
tags:
  - '123'
  - '239'
  - '528'
  - '601'
  - '657'
  - '848'
  - '849'
  - '850'
description: "Wenn man wie ich noch Aptana Studio benutzt (Ich weiß, aber Sublime hat kein Drag&Drop Sftp) so bekommt man seit neuestem öfter mal folgenden Fehler, wenn man eine SFTP-Verbindung herstellen möchte:\n\"Establishing SFTP connection failed: No suitable key exchange algorithm could be agreed.\nNo suitable key exchange algorithm could be agreed.\"\nWenn euch der Server gehört dann könnt ihr dies wie folgt beheben:\n1. Auf dem Server die sshd_config ändern: \r\n#nano /etc/ssh/sshd_config\r\n 2. Fügt dort am Schluss Folgendes hinzu: \r\nCiphers aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,chacha20-poly1305@openssh.com,blowfish-cbc,aes128-cbc,3des-cbc,cast128-cbc,arcfour,aes192-cbc,aes256-cbc\r\nKexAlgorithms=curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1\r\n 3. Danach den ssh service neustarten \r\n#/etc/init.d/ssh restart\r\n Danach kann sich euer Aptana wieder verbinden."
image: /fileadmin/_processed_/a/e/csm_aptana_b2b6e570b1.png
demo_url: null
download_url: null
---

Wenn man wie ich noch Aptana Studio benutzt (Ich weiß, aber Sublime hat kein Drag&Drop Sftp) so bekommt man seit neuestem öfter mal folgenden Fehler, wenn man eine SFTP-Verbindung herstellen möchte:

**"Establishing SFTP connection failed: No suitable key exchange algorithm could be agreed.**

No suitable key exchange algorithm could be agreed."

Wenn euch der Server gehört dann könnt ihr dies wie folgt beheben:

1\. Auf dem Server die sshd\_config ändern:

```

#nano /etc/ssh/sshd_config
```

2\. Fügt dort am Schluss Folgendes hinzu:

```

Ciphers aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,chacha20-poly1305@openssh.com,blowfish-cbc,aes128-cbc,3des-cbc,cast128-cbc,arcfour,aes192-cbc,aes256-cbc
KexAlgorithms=curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1
```

3\. Danach den ssh service neustarten

```

#/etc/init.d/ssh restart
```

Danach kann sich euer Aptana wieder verbinden.