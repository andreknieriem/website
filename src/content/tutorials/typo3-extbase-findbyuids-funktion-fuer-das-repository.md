---
title: 'TYPO3: Extbase findbyUids Funktion für das Repository'
date: '2014-11-06T07:56:42.000Z'
slug: typo3-extbase-findbyuids-funktion-fuer-das-repository
tags:
  - method
  - typo3
  - extbase
  - model
  - repository
  - findbyuids
  - find
description: "Des öfteren braucht man mal nur eine Gruppe von Records by TYPO3 und hat nur eine kommaseparierte Liste von Uid's. Leider hat Extbase soetwas nicht standardmäßig eingebaut. Hier ist die Funktion, die das alles für einen bewerkstelligt. \r\n/**\r\n * Find by multiple uids using, seperated string\r\n * \r\n * @param string String containing uids\r\n */\r\npublic function findByUids($uids) {\r\n    $uidArray = explode(\",\", $uids);\r\n    $query = $this-&gt;createQuery();\r\n    foreach ($uidArray as $key =&gt; $value) {\r\n        $constraints[] =  $query-&gt;equals('uid', $value);\r\n    }\r\n    return $query-&gt;matching(\r\n        $query-&gt;logicalAnd(\r\n            $query-&gt;logicalOr(\r\n                $constraints\r\n            ),\r\n            $query-&gt;equals('hidden', 0),\r\n            $query-&gt;equals('deleted', 0)\r\n        )\r\n    )-&gt;execute();\r\n}\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

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