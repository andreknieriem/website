---
title: 'Howto: Username Url&#039;s in Codeigniter'
date: '2011-08-28T15:38:08.000Z'
slug: howto-username-url039s-in-codeigniter
tags:
  - '41'
  - '64'
  - '65'
  - '66'
  - '67'
  - '68'
description: >-

  Da ich mich gerade in Codeigniter einarbeite und auf der Suche nach einer
  Möglich war, bei der ich als erstes Segment hinter der URL gleich einen
  Benutzernamen schreiben kann, habe ich etwas gefunden, was ich euch nicht
  vorenthalten möchte. Das Ganze funktioniert mit Hooks.

  Und so funktioniert es:


  1. Aktiviere Hooks in ‘application/config/config.php’, suche und ersetze die
  Hooks Configuration mit folgenden Einstellungen. $config['enable_hooks'] =
  TRUE;   

  2. Konfiguriere als nächstes ein ‘pre-system’ hook in
  ‘application/config/hooks.php’...  

  $hook=array(
          'pre_system' =&gt; array(
                  array(
                           'class'    =&gt; 'Userlookup',
                           'function' =&gt; 'check_uri',
                           'filename' =&gt; 'Userlookup.php',
                           'filepath' =&gt; 'hooks',
                           'params'   =&gt; NULL,
                        ),
          ),
  );
   
  3. Nun kanns losgehen. Erstelle eine Datei mit dem Namen ‘Userlookup.php’ in
  ‘application/hooks’, Danach schreibt ihr eine Klasse, die wie folgt aussieht: 

  &lt;?php defined('BASEPATH') or die('No direct script access allowed');


  class Userlookup{

      protected $uri_username;
      protected $connection_method;

      protected $hostname;
      protected $username;
      protected $password;
      protected $database;

      public function __construct()
      {
          // Konfiguriere die Datenbankverbindung
          include(APPPATH.'config/database'.EXT);
          $this-&gt;hostname = $db[$active_group]['hostname'];
          $this-&gt;username = $db[$active_group]['username'];
          $this-&gt;password = $db[$active_group]['password'];
          $this-&gt;database = $db[$active_group]['database'];
      }

      public function check_uri()
      {
           // Als erstes muss das Uri Segment inspiziert werden
           $request_uri = explode('/',substr($_SERVER['REQUEST_URI'], 1));
           $this-&gt;uri_username = array_shift($request_uri);
           $connection_router = array_shift($request_uri);

           //Ist eine Methode angegeben? Wenn nein gehe auf die index() Funktion
           $this-&gt;connection_method = empty($connection_router) ? 'index' : $connection_router;
           // Verbinde mit der Datenbank und schaue, ob es den User gibt
           mysql_connect($this-&gt;hostname, $this-&gt;username, $this-&gt;password) AND mysql_select_db($this-&gt;database);
           $res = mysql_query("SELECT user_id FROM user WHERE user_url='".$this-&gt;uri_username."'");
           if ($row = mysql_fetch_object($res))
           {
                  // Wenn es den User gibt gehe auf den Controller User
                  $_SERVER['REQUEST_URI'] = '/user/'.$this-&gt;connection_method.'/'.$row-&gt;user_id;
           }
           mysql_free_result($res);
      }
  }
   4. Und schon ist es geschafft. Ihr surft nun Beispielsweise: example.com/maxmustermann, dann wird der Controller User aufgerufen und falls nichts mehr angeben ist die index Funktion. geht man auf example.com/maxmustermann/info wird die Methode Info im User Controller aufgerufen. Als 3tes Segment wird immer die User-ID übergeben, damit man im Controller auch die richtigen Daten aufrufen kann.
  Viel Spaß mit dem Script!
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Howto: Username Url&#039;s in Codeigniter

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#codeigniter](/tag.html?tag=64&cHash=900cc45c26bf8acff5ebee743d18a0c3)[#hooks](/tag.html?tag=65&cHash=e9626c3047f2ac7fea45fa3ee14c1c39)[#uri routing](/tag.html?tag=66&cHash=4f92d129d9fa21556bd56bfe15ad6cf4)[#user url](/tag.html?tag=67&cHash=fb99c72f2bbac36a329ee5ffaa3e6fdd)[#username](/tag.html?tag=68&cHash=c386c2b90f2e2a3b0b944ba559501bfa)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

28\. Aug 2011

[![Codeigniter](http://andreknieriem.de/wp-content/uploads/2011/08/codeigniter.jpg "Codeigniter")](http://andreknieriem.de/wp-content/uploads/2011/08/codeigniter.jpg)

Da ich mich gerade in Codeigniter einarbeite und auf der Suche nach einer Möglich war, bei der ich als erstes Segment hinter der URL gleich einen Benutzernamen schreiben kann, habe ich etwas gefunden, was ich euch nicht vorenthalten möchte. Das Ganze funktioniert mit [Hooks](http://codeigniter.com/user_guide/general/hooks.html).

Und so funktioniert es:

1\. Aktiviere Hooks in ‘application/config/config.php’, suche und ersetze die Hooks Configuration mit folgenden Einstellungen.

```
$config['enable_hooks'] = TRUE;  
```

2\. Konfiguriere als nächstes ein ‘pre-system’ hook in ‘application/config/hooks.php’...

```

$hook=array(
        'pre_system' => array(
                array(
                         'class'    => 'Userlookup',
                         'function' => 'check_uri',
                         'filename' => 'Userlookup.php',
                         'filepath' => 'hooks',
                         'params'   => NULL,
                      ),
        ),
);
```

3\. Nun kanns losgehen. Erstelle eine Datei mit dem Namen ‘Userlookup.php’ in ‘application/hooks’, Danach schreibt ihr eine Klasse, die wie folgt aussieht:

```

<?php defined('BASEPATH') or die('No direct script access allowed');

class Userlookup{

    protected $uri_username;
    protected $connection_method;

    protected $hostname;
    protected $username;
    protected $password;
    protected $database;

    public function __construct()
    {
        // Konfiguriere die Datenbankverbindung
        include(APPPATH.'config/database'.EXT);
        $this->hostname = $db[$active_group]['hostname'];
        $this->username = $db[$active_group]['username'];
        $this->password = $db[$active_group]['password'];
        $this->database = $db[$active_group]['database'];
    }

    public function check_uri()
    {
         // Als erstes muss das Uri Segment inspiziert werden
         $request_uri = explode('/',substr($_SERVER['REQUEST_URI'], 1));
         $this->uri_username = array_shift($request_uri);
         $connection_router = array_shift($request_uri);

         //Ist eine Methode angegeben? Wenn nein gehe auf die index() Funktion
         $this->connection_method = empty($connection_router) ? 'index' : $connection_router;
         // Verbinde mit der Datenbank und schaue, ob es den User gibt
         mysql_connect($this->hostname, $this->username, $this->password) AND mysql_select_db($this->database);
         $res = mysql_query("SELECT user_id FROM user WHERE user_url='".$this->uri_username."'");
         if ($row = mysql_fetch_object($res))
         {
                // Wenn es den User gibt gehe auf den Controller User
                $_SERVER['REQUEST_URI'] = '/user/'.$this->connection_method.'/'.$row->user_id;
         }
         mysql_free_result($res);
    }
}
```

4\. Und schon ist es geschafft. Ihr surft nun Beispielsweise: example.com/maxmustermann, dann wird der Controller User aufgerufen und falls nichts mehr angeben ist die index Funktion. geht man auf example.com/maxmustermann/info wird die Methode Info im User Controller aufgerufen. Als 3tes Segment wird immer die User-ID übergeben, damit man im Controller auch die richtigen Daten aufrufen kann.

Viel Spaß mit dem Script!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.