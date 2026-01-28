---
title: 'TYPO3 Extbase: Überblick über Query und Repository Methoden'
date: '2016-09-11T22:00:00.000Z'
slug: typo3-extbase-ueberblick-ueber-query-und-repository-methoden
tags:
  - '198'
  - '461'
  - '573'
  - '906'
  - '591'
  - '575'
  - '97'
  - '907'
  - '572'
description: "Da die Dokumentation bei TYPO3 leider immer wieder unvollständig, veraltet oder einfach unwahr ist, habe ich hier eine Liste gefunden und erweitert, die aufzeigt, was es alles in den Repositories an Methoden gibt. Der Querybuilder ist leider etwas umständlich, aber mit dieser Liste, kriegt man so gut wie jeden Query hin. Ob dieser dann performant ist, sei mal dahingestellt.\r\nOriginal-Quelle: http://lbrmedia.net/codebase/Eintrag/extbase-query-methods/ Repository Methoden im Überblick\r\n// hinzufügen\r\n$testRepository-&gt;add($myModel);\r\n \r\n// entfernen\r\n$testRepository-&gt;remove($myModel);\r\n \r\n// alle entfernen\r\n$testRepository-&gt;removeAll();\r\n \r\n// ersetzen\r\n$testRepository-&gt;replace($myModel, $myOtherModel);\r\n \r\n// updaten\r\n$testRepository-&gt;update($myModifiedModel);\r\n \r\n// gesamte Anzahl bekommen \r\n$testRepository-&gt;countAll();\r\n \r\n// Anzahl bei Einschränkung\r\n$testRepository-&gt;countBy[myProperty]($thisMustMatchMyProperty);\r\n \r\n// Model Objekt via UID bekommen (wenn vorhanden)\r\n$testRepository-&gt;findByUid($theUid);\r\n \r\n// Alle Model Objekte bekommen. Keine weiteren Einschränkungen (Constraints außer enablecolumns, language und storagePid)\r\n$testRepository-&gt;findAll(); \r\n \r\n// Ein oder mehrere Models nach Eigenschaft bekommen\r\n$testRepository-&gt;findBy[myProperty]($thisMustMatchMyProperty); // returns a Storage-object\r\n \r\n// findOneBy... (wie findbyUid nur mit selbst angegeben Wert)\r\n$testRepository-&gt;findOneBy[myProperty]($thisMustMatchMyProperty);\r\n```\r\n\r\nQuery Methoden im Überblick\r\n// Query-Objekt initialisieren\r\n$query = $this-&gt;createQuery();\r\n \r\n// AND / OR / NOT\r\n$query-&gt;logicalAnd($constraints);\r\n$query-&gt;logicalOr($constraints);\r\n$query-&gt;logicalNot($constraints);\r\n \r\n// A direct SQL-Statement\r\n$query-&gt;statement(\"SELECT * FROM test_table WHERE foo = \"bar\"); // string\r\n \r\n// ORDER BY\r\n$query-&gt;setOrderings(array(\"field\" =&gt; \\TYPO3\\CMS\\Extbase\\Persistence\\QueryInterface::ORDER_ASCENDING)); // array\r\n$query-&gt;setOrderings(array(\"field\" =&gt; \\TYPO3\\CMS\\Extbase\\Persistence\\QueryInterface::ORDER_DESCENDING)); // array\r\n \r\n// LIMIT\r\n$query-&gt;setLimit($limit); // integer\r\n \r\n// OFFSET\r\n$query-&gt;setOffset($offset); // integer\r\n \r\n// only COUNT()\r\n$query-&gt;count(); // Führt den Query aus und gibt nur die Anzahl zurück\r\n \r\n// Führt den Query aus\r\n$query-&gt;execute();\r\n \r\n// Gibt nur das erste Ergebnis zurück (LIMIT 1)\r\n$query-&gt;getFirst();\r\n \r\n/*\r\n * Beispiel Methode im Repository\r\n */\r\npublic function getOffset($limit = 10,$offset = 0,$options) {\r\n  $query = $this-&gt;createQuery();\r\n  $query-&gt;matching(\r\n    $query-&gt;logicalAnd(\r\n      $query-&gt;equals(\"category\", $options['category']),\r\n      $query-&gt;equals(\"tag\", $options['tag'])\r\n    )\r\n  );\r\n \r\n  $query-&gt;setOrderings(array(\"crdate\" =&gt; \\TYPO3\\CMS\\Extbase\\Persistence\\QueryInterface::ORDER_ASCENDING))\r\n    -&gt;setOffset($offset)\r\n    -&gt;setLimit($limit);\r\n \r\n  return $query-&gt;execute();\r\n}\r\n\r\n\r\nEinschränkungen / Where Clause / Constraints - Methoden für ein Query \r\n// = \r\n$query-&gt;equals($myProperty, $equalsThis, $caseSensitive = true);\r\n \r\n// &lt;\r\n$query-&gt;lessThan($myProperty, $isLessThanThis);\r\n \r\n// &gt;\r\n$query-&gt;greaterThan($myProperty, $isGreaterThanThis);\r\n \r\n// &lt;=\r\n$query-&gt;lessThanOrEqual($myProperty, $isLessThanOrEqualThis);\r\n \r\n// &gt;=\r\n$query-&gt;greaterThanOrEqual($myProperty, $isGreaterThanOrEqualThis);\r\n \r\n// %suche%\r\n$query-&gt;like($myProperty, $theLikeString);\r\n \r\n// beinhaltet\r\n$query-&gt;contains($myProperty, $hasThisValue);\r\n \r\n// in\r\n$query-&gt;in($myProperty, $isInThisObjectOrArray);\r\n```\r\n\r\n### Einstellungen/Settings im Repository\r\n```php\r\n// Entweder globale Einstellungen so setzen\r\npublic function initializeObject() {\r\n  // Einstellungen laden\r\n  $querySettings = $this-&gt;objectManager-&gt;get('TYPO3\\\\CMS\\\\Extbase\\\\Persistence\\\\Generic\\\\Typo3QuerySettings');\r\n \r\n  // Einstellungen bearbeiten\r\n  $querySettings-&gt;setSomething();\r\n \r\n  // Einstellungen als Default setzen\r\n  $this-&gt;setDefaultQuerySettings($querySettings);\r\n}\r\n \r\n// Oder direkt nur für die Methode im Repository\r\npublic function findSomething() {\r\n  $query = $this-&gt;createQuery();\r\n\r\n  // Einstellungen setzen\r\n  $query-&gt;getQuerySettings()-&gt;setSomething();\r\n  \r\n  return $query-&gt;execute();\r\n}\r\n \r\n// Alle Einstellungen im Überblick\r\n$querySettings-&gt;setRespectStoragePage(FALSE); // storagePid ignorieren\r\n$querySettings-&gt;setStoragePageIds(array(1, 2, 3)); // storagePids setzen\r\n$querySettings-&gt;setRespectEnableFields(FALSE); // enableFields ignorieren (…is deprecated)\r\n$querySettings-&gt;setIgnoreEnableFields(TRUE); // Die Felder die im TCA unter \"enablecolumns\" stehen ignorieren\r\n$querySettings-&gt;setEnableFieldsToBeIgnored(array('disabled', 'starttime')); // Nur einzelne enableFields ignorieren \r\n$querySettings-&gt;setIncludeDeleted(TRUE); // Auch gelöschte Records (deleted = 1) anzeigen\r\n$querySettings-&gt;setRespectSysLanguage(FALSE); // Sprache (sys_language) ignorieren\r\n$querySettings-&gt;setSysLanguageUid(2); // sys_language setzen"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Da die Dokumentation bei TYPO3 leider immer wieder unvollständig, veraltet oder einfach unwahr ist, habe ich hier eine Liste gefunden und erweitert, die aufzeigt, was es alles in den Repositories an Methoden gibt. Der Querybuilder ist leider etwas umständlich, aber mit dieser Liste, kriegt man so gut wie jeden Query hin. Ob dieser dann performant ist, sei mal dahingestellt.

**Original-Quelle:**  
[http://lbrmedia.net/codebase/Eintrag/extbase-query-methods/](http://lbrmedia.net/codebase/Eintrag/extbase-query-methods/ "Opens internal link in current window")

### Repository Methoden im Überblick

````
// hinzufügen
$testRepository->add($myModel);
 
// entfernen
$testRepository->remove($myModel);
 
// alle entfernen
$testRepository->removeAll();
 
// ersetzen
$testRepository->replace($myModel, $myOtherModel);
 
// updaten
$testRepository->update($myModifiedModel);
 
// gesamte Anzahl bekommen 
$testRepository->countAll();
 
// Anzahl bei Einschränkung
$testRepository->countBy[myProperty]($thisMustMatchMyProperty);
 
// Model Objekt via UID bekommen (wenn vorhanden)
$testRepository->findByUid($theUid);
 
// Alle Model Objekte bekommen. Keine weiteren Einschränkungen (Constraints außer enablecolumns, language und storagePid)
$testRepository->findAll(); 
 
// Ein oder mehrere Models nach Eigenschaft bekommen
$testRepository->findBy[myProperty]($thisMustMatchMyProperty); // returns a Storage-object
 
// findOneBy... (wie findbyUid nur mit selbst angegeben Wert)
$testRepository->findOneBy[myProperty]($thisMustMatchMyProperty);
```
````

### Query Methoden im Überblick

```
// Query-Objekt initialisieren
$query = $this->createQuery();
 
// AND / OR / NOT
$query->logicalAnd($constraints);
$query->logicalOr($constraints);
$query->logicalNot($constraints);
 
// A direct SQL-Statement
$query->statement("SELECT * FROM test_table WHERE foo = "bar"); // string
 
// ORDER BY
$query->setOrderings(array("field" => \TYPO3\CMS\Extbase\Persistence\QueryInterface::ORDER_ASCENDING)); // array
$query->setOrderings(array("field" => \TYPO3\CMS\Extbase\Persistence\QueryInterface::ORDER_DESCENDING)); // array
 
// LIMIT
$query->setLimit($limit); // integer
 
// OFFSET
$query->setOffset($offset); // integer
 
// only COUNT()
$query->count(); // Führt den Query aus und gibt nur die Anzahl zurück
 
// Führt den Query aus
$query->execute();
 
// Gibt nur das erste Ergebnis zurück (LIMIT 1)
$query->getFirst();
 
/*
 * Beispiel Methode im Repository
 */
public function getOffset($limit = 10,$offset = 0,$options) {
  $query = $this->createQuery();
  $query->matching(
    $query->logicalAnd(
      $query->equals("category", $options['category']),
      $query->equals("tag", $options['tag'])
    )
  );
 
  $query->setOrderings(array("crdate" => \TYPO3\CMS\Extbase\Persistence\QueryInterface::ORDER_ASCENDING))
    ->setOffset($offset)
    ->setLimit($limit);
 
  return $query->execute();
}
```

### Einschränkungen / Where Clause / Constraints - Methoden für ein Query

````
// = 
$query->equals($myProperty, $equalsThis, $caseSensitive = true);
 
// <
$query->lessThan($myProperty, $isLessThanThis);
 
// >
$query->greaterThan($myProperty, $isGreaterThanThis);
 
// <=
$query->lessThanOrEqual($myProperty, $isLessThanOrEqualThis);
 
// >=
$query->greaterThanOrEqual($myProperty, $isGreaterThanOrEqualThis);
 
// %suche%
$query->like($myProperty, $theLikeString);
 
// beinhaltet
$query->contains($myProperty, $hasThisValue);
 
// in
$query->in($myProperty, $isInThisObjectOrArray);
```

### Einstellungen/Settings im Repository
```php
// Entweder globale Einstellungen so setzen
public function initializeObject() {
  // Einstellungen laden
  $querySettings = $this->objectManager->get('TYPO3\\CMS\\Extbase\\Persistence\\Generic\\Typo3QuerySettings');
 
  // Einstellungen bearbeiten
  $querySettings->setSomething();
 
  // Einstellungen als Default setzen
  $this->setDefaultQuerySettings($querySettings);
}
 
// Oder direkt nur für die Methode im Repository
public function findSomething() {
  $query = $this->createQuery();

  // Einstellungen setzen
  $query->getQuerySettings()->setSomething();
  
  return $query->execute();
}
 
// Alle Einstellungen im Überblick
$querySettings->setRespectStoragePage(FALSE); // storagePid ignorieren
$querySettings->setStoragePageIds(array(1, 2, 3)); // storagePids setzen
$querySettings->setRespectEnableFields(FALSE); // enableFields ignorieren (…is deprecated)
$querySettings->setIgnoreEnableFields(TRUE); // Die Felder die im TCA unter "enablecolumns" stehen ignorieren
$querySettings->setEnableFieldsToBeIgnored(array('disabled', 'starttime')); // Nur einzelne enableFields ignorieren 
$querySettings->setIncludeDeleted(TRUE); // Auch gelöschte Records (deleted = 1) anzeigen
$querySettings->setRespectSysLanguage(FALSE); // Sprache (sys_language) ignorieren
$querySettings->setSysLanguageUid(2); // sys_language setzen
````