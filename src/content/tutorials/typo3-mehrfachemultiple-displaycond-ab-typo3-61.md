---
title: 'TYPO3: Mehrfache/Multiple DisplayCond ab TYPO3 6.1'
date: '2014-09-08T17:18:18.000Z'
slug: typo3-mehrfachemultiple-displaycond-ab-typo3-61
tags:
  - typo3
  - flexform
  - tca
  - multiple
  - displayCond
  - mehrfache
description: "Seit TYPO3 6.1 wurde displayCond stark verbessert. So können nun mehrere Abfragen ermöglicht werden und das Ganze sogar verschachtelt. Hier ein paar Beispiele:\nEinfaches Beispiel \r\n&lt;feld1&gt;\r\n    &lt;TCEforms&gt;\r\n        &lt;label&gt;Feld 1&lt;/label&gt;\r\n        &lt;config&gt;\r\n            &lt;type&gt;input&lt;/type&gt;\r\n            &lt;size&gt;30&lt;/size&gt;\r\n        &lt;/config&gt;\r\n    &lt;/TCEforms&gt;\r\n&lt;/feld1&gt;\r\n \r\n&lt;feld2&gt;\r\n    &lt;TCEforms&gt;\r\n        &lt;label&gt;Feld 2&lt;/label&gt;\r\n        &lt;config&gt;\r\n            &lt;type&gt;input&lt;/type&gt;\r\n            &lt;size&gt;30&lt;/size&gt;\r\n        &lt;/config&gt;\r\n    &lt;/TCEforms&gt;\r\n&lt;/feld2&gt;\r\n \r\n&lt;cond&gt;\r\n    &lt;TCEforms&gt;\r\n        &lt;label&gt;Teste Bedingung&lt;/label&gt;\r\n        &lt;displayCond&gt;\r\n            &lt;AND&gt;\r\n                &lt;numIndex&gt;FIELD:feld1:REQ:TRUE&lt;/numIndex&gt;\r\n                &lt;numIndex&gt;FIELD:feld2:REQ:TRUE&lt;/numIndex&gt;\r\n                &lt;OR&gt;\r\n                    &lt;numIndex&gt;&lt;![CDATA[FIELD:feld1:&lt;:12]]&gt;&lt;/numIndex&gt;\r\n                    &lt;numIndex&gt;FIELD:feld2:&gt;:20&lt;/numIndex&gt;\r\n                &lt;/OR&gt;\r\n            &lt;/AND&gt;\r\n        &lt;/displayCond&gt;\r\n        &lt;config&gt;\r\n            &lt;type&gt;input&lt;/type&gt;\r\n            &lt;size&gt;30&lt;/size&gt;\r\n        &lt;/config&gt;\r\n    &lt;/TCEforms&gt;\r\n&lt;/cond&gt;\r\n Hier wird es etwas komplizierter: Das Testinput-Feld wird angezeigt wenn die Extension news geladen wurde etweder das test123-Feld nicht gefüllt oder das title-Feld gefüllt ist.\ndisplayCond in FlexForms\nDas Ganze geht auch in Flexforms: \r\n'street' =&gt; array(\r\n    'displayCond' =&gt; array(\r\n        'AND' =&gt; array(\r\n            'EXT:news:LOADED:TRUE',\r\n            'OR' =&gt; array(\r\n                'FIELD:test123:=:FALSE',\r\n                'FIELD:title:=:TRUE',\r\n            ),\r\n        ),\r\n    ),\r\n    'label' =&gt; 'Testinput',\r\n    'config' =&gt; array(\r\n        'type' =&gt; 'input',\r\n        'size' =&gt; 30\r\n    ),\r\n),\r\n Verschachtelte Bedingungen \r\n'street' =&gt; array(\r\n    'displayCond' =&gt; array(\r\n        'OR' =&gt; array(\r\n            'FIELD:test123:=:FALSE',\r\n            'FIELD:title:=:TRUE',\r\n        ),\r\n    ),\r\n    'label' =&gt; 'Testinput',\r\n    'config' =&gt; array(\r\n        'type' =&gt; 'input',\r\n        'size' =&gt; 30\r\n    ),\r\n),\r\n OR-Bedingung \r\n'street' =&gt; array(\r\n    'displayCond' =&gt; array(\r\n        'AND' =&gt; array(\r\n            'FIELD:test123:=:FALSE',\r\n            'FIELD:title:=:TRUE',\r\n        ),\r\n    ),\r\n    'label' =&gt; 'Testinput',\r\n    'config' =&gt; array(\r\n        'type' =&gt; 'input',\r\n        'size' =&gt; 30\r\n    ),\r\n),\r\n Ab TYPO3 6.1\nSeit der Version 6.1 ist es nun erstmals möglich mehrere Bedingungen zu setzen und diese sogar zu verschachteln. Das bringt enorm viele Vorteile. Hier ein paar Beispiele:\nAND-Bedingung \r\n'street' =&gt; array(\r\n    'displayCond' =&gt; 'FIELD:test123:=:FALSE',\r\n    'label' =&gt; 'Testinput',\r\n    'config' =&gt; array(\r\n        'type' =&gt; 'input',\r\n        'size' =&gt; 30\r\n    ),\r\n),\r\n "
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Seit TYPO3 6.1 wurde **displayCond** stark verbessert. So können nun mehrere Abfragen ermöglicht werden und das Ganze sogar verschachtelt. Hier ein paar Beispiele:

## Einfaches Beispiel

```html

<feld1>
    <TCEforms>
        <label>Feld 1</label>
        <config>
            <type>input</type>
            <size>30</size>
        </config>
    </TCEforms>
</feld1>
 
<feld2>
    <TCEforms>
        <label>Feld 2</label>
        <config>
            <type>input</type>
            <size>30</size>
        </config>
    </TCEforms>
</feld2>
 
<cond>
    <TCEforms>
        <label>Teste Bedingung</label>
        <displayCond>
            <AND>
                <numIndex>FIELD:feld1:REQ:TRUE</numIndex>
                <numIndex>FIELD:feld2:REQ:TRUE</numIndex>
                <OR>
                    <numIndex><![CDATA[FIELD:feld1:<:12]]></numIndex>
                    <numIndex>FIELD:feld2:>:20</numIndex>
                </OR>
            </AND>
        </displayCond>
        <config>
            <type>input</type>
            <size>30</size>
        </config>
    </TCEforms>
</cond>

```

Hier wird es etwas komplizierter: Das Testinput-Feld wird angezeigt wenn die Extension news geladen wurde etweder das test123-Feld nicht gefüllt oder das title-Feld gefüllt ist.

## displayCond in FlexForms

Das Ganze geht auch in Flexforms:

```php

'street' => array(
    'displayCond' => array(
        'AND' => array(
            'EXT:news:LOADED:TRUE',
            'OR' => array(
                'FIELD:test123:=:FALSE',
                'FIELD:title:=:TRUE',
            ),
        ),
    ),
    'label' => 'Testinput',
    'config' => array(
        'type' => 'input',
        'size' => 30
    ),
),

```

**Verschachtelte Bedingungen**

```php

'street' => array(
    'displayCond' => array(
        'OR' => array(
            'FIELD:test123:=:FALSE',
            'FIELD:title:=:TRUE',
        ),
    ),
    'label' => 'Testinput',
    'config' => array(
        'type' => 'input',
        'size' => 30
    ),
),

```

**OR-Bedingung**

```php

'street' => array(
    'displayCond' => array(
        'AND' => array(
            'FIELD:test123:=:FALSE',
            'FIELD:title:=:TRUE',
        ),
    ),
    'label' => 'Testinput',
    'config' => array(
        'type' => 'input',
        'size' => 30
    ),
),

```

## Ab TYPO3 6.1

Seit der Version 6.1 ist es nun erstmals möglich mehrere Bedingungen zu setzen und diese sogar zu verschachteln. Das bringt enorm viele Vorteile. Hier ein paar Beispiele:

**AND-Bedingung**

```php

'street' => array(
    'displayCond' => 'FIELD:test123:=:FALSE',
    'label' => 'Testinput',
    'config' => array(
        'type' => 'input',
        'size' => 30
    ),
),

```