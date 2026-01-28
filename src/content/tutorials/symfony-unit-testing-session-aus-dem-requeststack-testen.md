---
title: 'Symfony Unit Testing: Session aus dem RequestStack testen'
date: '2020-09-09T05:51:00.000Z'
slug: symfony-unit-testing-session-aus-dem-requeststack-testen
tags:
  - symfony
  - ' unit test'
  - ' testing'
  - ' session'
  - ' request'
  - ' requeststack'
  - mock
description: "Für einen Unit einer Klasse brauchte ich die Session aus dem Requeststack, da diese Klasse als Constructor nur den Requeststack übergeben bekommt. Das Ganze lässt sich relativ leicht bewerkstelligen, indem man erst einen Request erstellt, diesen dann einem Requeststack zuweist und diesem Requeststack dann noch eine gemockte Session zuweist.&nbsp;\r\nHier mal ein Beispiel: "
image: /fileadmin/_processed_/3/2/csm_symfony_2c03ec37f6.png
demo_url: null
download_url: null
---

Für einen Unit einer Klasse brauchte ich die Session aus dem Requeststack, da diese Klasse als Constructor nur den Requeststack übergeben bekommt. Das Ganze lässt sich relativ leicht bewerkstelligen, indem man erst einen Request erstellt, diesen dann einem Requeststack zuweist und diesem Requeststack dann noch eine gemockte Session zuweist. 

Hier mal ein Beispiel:

```php
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