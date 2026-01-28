---
title: 'GIT/Composer: Einen bestimmten Commit "requiren"'
date: '2018-04-16T08:38:00.000Z'
slug: gitcomposer-einen-bestimmten-commit-requiren
tags:
  - '1006'
  - '1040'
  - '1041'
  - '1042'
  - '1043'
  - '1044'
  - '1045'
  - '1046'
description: "Da nicht alle Git, bzw. Composer Packages eine echte Version haben, kann es vorkommen, dass man \"dev-master\" als Versionsangabe hat. Das funktioniert solange, bis es breaking changes gibt und dadurch ein Projekt kaputt machen. Hat man so einen Punkt erreicht, möchte man vielleicht die Version, die noch funktioniert hat beibehalten. Hat man nun aber keine echte Versionsnummer, kann man dies auch anhand des Commit-Hashes tun. Das Ganze geht dann wie folgt: {\r\n    \"name\": \"foo/foo-lib\",\r\n    \"repositories\": [\r\n        {\r\n            \"type\": \"git\",\r\n            \"url\": \"https://github.com/Foo/Bar.git\"\r\n        }\r\n    ],\r\n    \"require\": {\r\n        \"foo/bar\": \"dev-master#2633721877cae79ad461f3ca06f3f77fb4fce02e\"\r\n    }\r\n} Der Trick ist hierbei das #2633721877cae79ad461f3ca06f3f77fb4fce02e.&nbsp;Dies sorgt dafür, dass von dem Package nur dieser eine Commit benutzt wird."
image: /fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Git

* * *

![](/fileadmin/_processed_/c/a/csm_git_5ac5ffd7cb.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#git](/tag.html?tag=1006&cHash=72f874cd9465a57ade8336d3b6e5be0c)[#composer](/tag.html?tag=1040&cHash=ab317a5103cf9a4b7d2cc6fe6effad59)[#require](/tag.html?tag=1041&cHash=da97c4a69d448c34cca367c94db00bd8)[#commit](/tag.html?tag=1042&cHash=c7f19342e89c9f4f329b5a4662ce1286)[#specific](/tag.html?tag=1043&cHash=ee0f85fe3db284249f8b006a70b546f5)[#bestimmten](/tag.html?tag=1044&cHash=0be3817032607e6a178cf4f12d4a5d76)[#einzigen](/tag.html?tag=1045&cHash=e14081fa61ee83ee12a3227accce6aa3)[#hash](/tag.html?tag=1046&cHash=f8f05a2efa13e11f6a126b471022d097)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

16\. Apr 2018

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

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.