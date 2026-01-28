---
title: 'TYPO3: HTML-Ausgabe mit Middleware komprimieren'
date: '2022-12-06T09:06:00.000Z'
slug: typo3-html-ausgabe-mit-middleware-komprimieren
tags:
  - '198'
  - '85'
  - '1285'
  - '1286'
  - '1287'
description: "Seit ich meine Webseite von Wordpress zu TYPO3 migriert habe, habe ich die Extension html_minifier von Dominik Weber benutzt. Leider funktioniert diese nicht mehr mit TYPO3 11. Da es ja jetzt die Möglichkeit einer Middlewares gibt, muss man auch nicht mehr mit einem Hook arbeiten. Falls ihr noch keine Site Extension habt, so müsst ihr euch eine anlegen und in der composer.json sollte dann Folgendes enthalten sein: {\r\n  \"name\": \"vendor/sitepackage\",\r\n  \"description\": \"Sitepackage extension\",\r\n  \"type\": \"typo3-cms-extension\",\r\n  \"homepage\": \"https://www.in2code.de\",\r\n  \"require\": {\r\n    \"typo3/cms-core\": \"^10.4\",\r\n    \"wyrihaximus/html-compress\": \"^1\"\r\n  },\r\n  \"autoload\": {\r\n    \"psr-4\": {\r\n      \"Vendor\\\\Sitepackage\\\\\": \"Classes/\"\r\n    }\r\n  }\r\n} Nun braucht ihr noch in eurer Extension noch die Middleware.php unter Configuration. Diese sagt TYPO3 wo eure Middleware liegt und wann sie aufgerufen werden soll.&nbsp;  Nun kommen wir auch schon zur Middleware selbst. Diese ist relativ simpel aufgebaut. Hauptsächlich benutzt man&nbsp;wyrihaximus/html-compress&nbsp;um den Inhalt zu minimieren. Um bei den HTML-Kommentaren nicht die wichtigen TYPO3SEARCH Kommentare zu entfernen wurden diese ausgeklammert.&nbsp;  Der komplette Middleware-Code ist nicht von mir sondern von in2code."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Seit ich meine Webseite von Wordpress zu TYPO3 migriert habe, habe ich die Extension [html\_minifier](https://extensions.typo3.org/extension/html_minifier) von Dominik Weber benutzt. Leider funktioniert diese nicht mehr mit TYPO3 11. Da es ja jetzt die Möglichkeit einer Middlewares gibt, muss man auch nicht mehr mit einem Hook arbeiten. Falls ihr noch keine Site Extension habt, so müsst ihr euch eine anlegen und in der composer.json sollte dann Folgendes enthalten sein:

```
{
  "name": "vendor/sitepackage",
  "description": "Sitepackage extension",
  "type": "typo3-cms-extension",
  "homepage": "https://www.in2code.de",
  "require": {
    "typo3/cms-core": "^10.4",
    "wyrihaximus/html-compress": "^1"
  },
  "autoload": {
    "psr-4": {
      "Vendor\\Sitepackage\\": "Classes/"
    }
  }
}
```

Nun braucht ihr noch in eurer Extension noch die **Middleware.php** unter Configuration. Diese sagt TYPO3 wo eure Middleware liegt und wann sie aufgerufen werden soll. 

```
<?php
return [
    'frontend' => [
        'sitepackage-compress-html' => [
            'target' => \Vendor\Sitepackage\Middleware\HtmlCompress::class,
            'before' => [
                'typo3/cms-frontend/output-compression'
            ],
            'after' => [
                'typo3/cms-adminpanel/renderer'
            ]
        ]
    ]
];
```

Nun kommen wir auch schon zur Middleware selbst. Diese ist relativ simpel aufgebaut. Hauptsächlich benutzt man [wyrihaximus/html-compress](https://packagist.org/packages/wyrihaximus/html-compress "Packagist.org mit dem html-compress Paket") um den Inhalt zu minimieren. Um bei den HTML-Kommentaren nicht die wichtigen TYPO3SEARCH Kommentare zu entfernen wurden diese ausgeklammert. 

```
<?php
declare(strict_types=1);
namespace Vendor\Sitepackage\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TYPO3\CMS\Core\Http\StreamFactory;
use WyriHaximus\HtmlCompress\Factory;

/**
 * Class HtmlCompress
 */
class HtmlCompress implements MiddlewareInterface
{
    /**
     * @param ServerRequestInterface $request
     * @param RequestHandlerInterface $handler
     * @return ResponseInterface
     */
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $response = $handler->handle($request);
        if ($this->isTypeNumSet($request) === false) {
            $stream = $response->getBody();
            $stream->rewind();
            $content = $stream->getContents();
            $newBody = (new StreamFactory())->createStream($this->compressHtml($content));
            $response = $response->withBody($newBody);
        }
        return $response;
    }

    /**
     * @param string $html
     * @return string
     */
    protected function compressHtml(string $html): string
    {
        $parser = Factory::construct();
        $html = $parser->compress($html);
        $html = $this->removeComments($html);
        return $html;
    }

    /**
     * Remove all html comments but not "<!--TYPO3SEARCH_begin-->" and "<!--TYPO3SEARCH-end-->"
     * @param string $html
     * @return string
     */
    protected function removeComments(string $html): string
    {
        return preg_replace('/<!--((?!TYPO3SEARCH)[\s\S])*?-->/', '', $html);
    }

    /**
     * @param ServerRequestInterface $request
     * @return bool
     */
    protected function isTypeNumSet(ServerRequestInterface $request): bool
    {
        return $request->getAttribute('routing')->getPageType() > 0;
    }
}
```

Der komplette Middleware-Code ist nicht von mir sondern von [in2code](https://www.in2code.de/aktuelles/php-html-output-in-typo3-komprimieren/).