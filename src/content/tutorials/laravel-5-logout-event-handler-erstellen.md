---
title: 'Laravel 5: Logout Event Handler erstellen'
date: '2015-11-30T14:44:51.000Z'
slug: laravel-5-logout-event-handler-erstellen
tags:
  - '671'
  - '672'
  - '673'
  - '674'
description: "Möchte man in Laravel 5 noch Code ausführen, wenn ein User sich ausloggt, so kannn man mit folgendem Code sich einen Logout Event Handler erstellen. In der Methode Handle kann man dann seinen gewünschten Code ausführen. Beispielsweise Session-Daten zurücksetzen, einen Count irgendwo erhören und so weiter. \r\n$ php artisan handler:event AuthLoginEventHandler\r\n  \r\n&lt;?php namespace App\\Handlers\\Events;\r\n\r\nuse Illuminate\\Queue\\InteractsWithQueue;\r\nuse Illuminate\\Contracts\\Queue\\ShouldBeQueued;\r\nuse App\\Models\\User;\r\n\r\nclass AuthLogoutEventHandler {\r\n\r\n    /**\r\n     * Create the event handler.\r\n     *\r\n     * @return void\r\n     */\r\n    public function __construct()\r\n    {\r\n        \r\n    }\r\n\r\n    /**\r\n     * Handle the event.\r\n     *\r\n     * @param  User $user\r\n     * @return void\r\n     */\r\n    public function handle(User $user)\r\n    {\r\n       // do the code, you want to do after logout\r\n    }\r\n\r\n}\r\n  \r\nprotected $listen = [\r\n    'auth.login' =&gt; [\r\n        'App\\Handlers\\Events\\AuthLoginEventHandler',\r\n    ],\r\n];\r\n  \r\n$ php artiasn clear-compiled\r\n "
image: /fileadmin/_processed_/0/0/csm_laravel_6d96ca03e0.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Laravel#PHP

* * *

![](/fileadmin/_processed_/0/0/csm_laravel_6d96ca03e0.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#laravel](/tag.html?tag=671&cHash=5a1ac0040ad4ab46c7ec4ef355efd717)[#eventhandler](/tag.html?tag=672&cHash=ad3195f960d2d50c774c5fa9d5afc9c3)[#logout](/tag.html?tag=673&cHash=3e799373b7d343e1975f00a7a06815a6)[#session](/tag.html?tag=674&cHash=b37cf559d5a815a6b064788131f12cf9)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

30\. Nov 2015

Möchte man in Laravel 5 noch Code ausführen, wenn ein User sich ausloggt, so kannn man mit folgendem Code sich einen Logout Event Handler erstellen. In der Methode Handle kann man dann seinen gewünschten Code ausführen. Beispielsweise Session-Daten zurücksetzen, einen Count irgendwo erhören und so weiter.

```

$ php artisan handler:event AuthLoginEventHandler
```

```

<?php namespace App\Handlers\Events;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use App\Models\User;

class AuthLogoutEventHandler {

    /**
     * Create the event handler.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Handle the event.
     *
     * @param  User $user
     * @return void
     */
    public function handle(User $user)
    {
       // do the code, you want to do after logout
    }

}
```

```

protected $listen = [
    'auth.login' => [
        'App\Handlers\Events\AuthLoginEventHandler',
    ],
];
```

```

$ php artiasn clear-compiled
```

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.