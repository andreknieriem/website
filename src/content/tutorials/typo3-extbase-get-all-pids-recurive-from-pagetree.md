---
title: 'TYPO3 Extbase: Get all Pids recurive from PageTree'
date: '2016-06-14T16:29:17.000Z'
slug: typo3-extbase-get-all-pids-recurive-from-pagetree
tags:
  - get
  - child
  - typo3
  - extbase
  - pids
  - pagetree
  - pages
description: "Möchte man in Extbase alle Pids der Unterseiten einer gegebenen Seite bekommen, beispielsweise alle Unterordner eines Ablage-Ordners mit durchsuchen, so kann man dies mit folgender Funktion tun. \nFunktion \r\nfunction getTreePids($parent = 0, $as_array = true){\r\n    $depth = 999999;\r\n    $queryGenerator = \\TYPO3\\CMS\\Core\\Utility\\GeneralUtility::makeInstance( 'TYPO3\\\\CMS\\\\Core\\\\Database\\\\QueryGenerator' );\r\n    $childPids = $queryGenerator-&gt;getTreeList($parent, $depth, 0, 1); //Will be a string like 1,2,3\r\n    if($as_array) {\r\n        $childPids = explode(',',$childPids );\r\n    }\r\n    return $childPids;\r\n}\r\n Benutzung \r\n$childs = getTreePids(5);\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Möchte man in Extbase alle Pids der Unterseiten einer gegebenen Seite bekommen, beispielsweise alle Unterordner eines Ablage-Ordners mit durchsuchen, so kann man dies mit folgender Funktion tun.

**Funktion**

```

function getTreePids($parent = 0, $as_array = true){
    $depth = 999999;
    $queryGenerator = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance( 'TYPO3\\CMS\\Core\\Database\\QueryGenerator' );
    $childPids = $queryGenerator->getTreeList($parent, $depth, 0, 1); //Will be a string like 1,2,3
    if($as_array) {
        $childPids = explode(',',$childPids );
    }
    return $childPids;
}
```

**Benutzung**

```

$childs = getTreePids(5);
```