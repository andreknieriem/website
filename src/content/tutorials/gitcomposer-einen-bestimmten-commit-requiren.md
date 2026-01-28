---
title: 'GIT/Composer: Einen bestimmten Commit "requiren"'
date: '2018-04-16T08:38:00.000Z'
slug: gitcomposer-einen-bestimmten-commit-requiren
tags:
  - git
  - composer
  - require
  - commit
  - specific
  - bestimmten
  - einzigen
  - hash
description: "Da nicht alle Git, bzw. Composer Packages eine echte Version haben, kann es vorkommen, dass man \"dev-master\" als Versionsangabe hat. Das funktioniert solange, bis es breaking changes gibt und dadurch ein Projekt kaputt machen. Hat man so einen Punkt erreicht, möchte man vielleicht die Version, die noch funktioniert hat beibehalten. Hat man nun aber keine echte Versionsnummer, kann man dies auch anhand des Commit-Hashes tun. Das Ganze geht dann wie folgt: {\r\n    \"name\": \"foo/foo-lib\",\r\n    \"repositories\": [\r\n        {\r\n            \"type\": \"git\",\r\n            \"url\": \"https://github.com/Foo/Bar.git\"\r\n        }\r\n    ],\r\n    \"require\": {\r\n        \"foo/bar\": \"dev-master#2633721877cae79ad461f3ca06f3f77fb4fce02e\"\r\n    }\r\n} Der Trick ist hierbei das #2633721877cae79ad461f3ca06f3f77fb4fce02e.&nbsp;Dies sorgt dafür, dass von dem Package nur dieser eine Commit benutzt wird."
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
demo_url: null
download_url: null
---

Da nicht alle Git, bzw. Composer Packages eine echte Version haben, kann es vorkommen, dass man "dev-master" als Versionsangabe hat. Das funktioniert solange, bis es breaking changes gibt und dadurch ein Projekt kaputt machen. Hat man so einen Punkt erreicht, möchte man vielleicht die Version, die noch funktioniert hat beibehalten. Hat man nun aber keine echte Versionsnummer, kann man dies auch anhand des Commit-Hashes tun. Das Ganze geht dann wie folgt:

```
{
    "name": "foo/foo-lib",
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/Foo/Bar.git"
        }
    ],
    "require": {
        "foo/bar": "dev-master#2633721877cae79ad461f3ca06f3f77fb4fce02e"
    }
}
```

Der Trick ist hierbei das **#2633721877cae79ad461f3ca06f3f77fb4fce02e.** Dies sorgt dafür, dass von dem Package nur dieser eine Commit benutzt wird.