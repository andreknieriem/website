---
title: 'Symfony Unit Testing: Session aus dem RequestStack testen'
date: '2020-09-09T05:51:00.000Z'
slug: symfony-unit-testing-session-aus-dem-requeststack-testen
tags:
  - '1124'
  - '1191'
  - '1192'
  - '1193'
  - '1194'
  - '1195'
  - '1196'
description: "Für einen Unit einer Klasse brauchte ich die Session aus dem Requeststack, da diese Klasse als Constructor nur den Requeststack übergeben bekommt. Das Ganze lässt sich relativ leicht bewerkstelligen, indem man erst einen Request erstellt, diesen dann einem Requeststack zuweist und diesem Requeststack dann noch eine gemockte Session zuweist.&nbsp;\r\nHier mal ein Beispiel: "
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Symfony Unit Testing: Session aus dem RequestStack testen

#Tutorials#Symfony

* * *

![](/fileadmin/_processed_/3/2/csm_symfony_2c03ec37f6.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#symfony](/tag.html?tag=1124&cHash=0d3bc75836ddba7decce7aa24257d2a7)[\# unit test](/tag.html?tag=1191&cHash=ab6248a2ab46a12966b2c8e3969431a7)[\# testing](/tag.html?tag=1192&cHash=4416b8413e89c3681c766427b1e5c057)[\# session](/tag.html?tag=1193&cHash=9352911c8445629a8f8a305c008d674b)[\# request](/tag.html?tag=1194&cHash=fbf58a39ccaf407f0e618c6018452dca)[\# requeststack](/tag.html?tag=1195&cHash=ab41a36b8dbeedd2adc6e1e15432112f)[#mock](/tag.html?tag=1196&cHash=2c5a02c424af985c9093d2d35f5b7e70)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

09\. Sep 2020

Für einen Unit einer Klasse brauchte ich die Session aus dem Requeststack, da diese Klasse als Constructor nur den Requeststack übergeben bekommt. Das Ganze lässt sich relativ leicht bewerkstelligen, indem man erst einen Request erstellt, diesen dann einem Requeststack zuweist und diesem Requeststack dann noch eine gemockte Session zuweist. 

Hier mal ein Beispiel:

```
<?php
namespace App\Test\Service;

use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\Storage\MockArraySessionStorage;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class MyTest extends TestCase
{

	private $requestStack;

	protected function setUp(): void
    {
		// mock session
        $session = new Session(new MockArraySessionStorage());

        // create test request
        $request = new Request([], [], [], [], [], [], [], json_encode([
            'foo' => 'bar'
        ]));
        // add mocked session
        $request->setSession($session);

        // create requeststack and push request
        $this->requestStack = new RequestStack();
        $this->requestStack->push($request);
	}

	public function testAnything()
	{
		// get session from requestStack
		$session = $this->requestStack->getSession();
	}
	
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