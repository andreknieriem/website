---
title: 'TYPO3: Extbase findbyUids Funktion für das Repository'
date: '2014-11-06T07:56:42.000Z'
slug: typo3-extbase-findbyuids-funktion-fuer-das-repository
tags:
  - '169'
  - '198'
  - '461'
  - '572'
  - '573'
  - '574'
  - '575'
description: "Des öfteren braucht man mal nur eine Gruppe von Records by TYPO3 und hat nur eine kommaseparierte Liste von Uid's. Leider hat Extbase soetwas nicht standardmäßig eingebaut. Hier ist die Funktion, die das alles für einen bewerkstelligt. \r\n/**\r\n * Find by multiple uids using, seperated string\r\n * \r\n * @param string String containing uids\r\n */\r\npublic function findByUids($uids) {\r\n    $uidArray = explode(\",\", $uids);\r\n    $query = $this-&gt;createQuery();\r\n    foreach ($uidArray as $key =&gt; $value) {\r\n        $constraints[] =  $query-&gt;equals('uid', $value);\r\n    }\r\n    return $query-&gt;matching(\r\n        $query-&gt;logicalAnd(\r\n            $query-&gt;logicalOr(\r\n                $constraints\r\n            ),\r\n            $query-&gt;equals('hidden', 0),\r\n            $query-&gt;equals('deleted', 0)\r\n        )\r\n    )-&gt;execute();\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#method](/tag.html?tag=169&cHash=4a56584fe25d3da76822f80c9a221902)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#extbase](/tag.html?tag=461&cHash=21eaffd926c4efa13592a48cfebdbaa1)[#model](/tag.html?tag=572&cHash=a818cf0d2c9c44c27e56113946cbca86)[#repository](/tag.html?tag=573&cHash=a7bca7438744363f8bef5782d590fd8f)[#findbyuids](/tag.html?tag=574&cHash=3a77d989956975a51e5a6d3b7e0887b0)[#find](/tag.html?tag=575&cHash=b9f411ad30819dc2f466d5940609fd4b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Nov 2014

Des öfteren braucht man mal nur eine Gruppe von Records by TYPO3 und hat nur eine kommaseparierte Liste von Uid's. Leider hat Extbase soetwas nicht standardmäßig eingebaut. Hier ist die Funktion, die das alles für einen bewerkstelligt.

```

/**
 * Find by multiple uids using, seperated string
 * 
 * @param string String containing uids
 */
public function findByUids($uids) {
    $uidArray = explode(",", $uids);
    $query = $this->createQuery();
    foreach ($uidArray as $key => $value) {
        $constraints[] =  $query->equals('uid', $value);
    }
    return $query->matching(
        $query->logicalAnd(
            $query->logicalOr(
                $constraints
            ),
            $query->equals('hidden', 0),
            $query->equals('deleted', 0)
        )
    )->execute();
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