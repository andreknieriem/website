---
title: 'PHP: Simple kleine View Template Klasse'
date: '2015-10-01T16:19:31.000Z'
slug: php-simple-kleine-view-template-klasse
tags:
  - '41'
  - '756'
  - '757'
  - '758'
  - '759'
description: "Für ein kleines Projekt benötigte eine super simple View-Klasse. Was sie macht ist eine PHP Datei aus dem \"templates\" Ordner zu laden und an diese dann Daten zu übertragen. Um sie zu benutzen muss nur die View-Klasse includet werden. Der Code ist folgender:\nView-Klasse \r\n&lt;?php\r\nclass View {\r\n\tprivate $data = array();\r\n\t\r\n\tprivate $render = FALSE;\r\n\t\r\n\tpublic function __construct($template){\r\n\t    try {\r\n\t        $file = __DIR__.'/../templates/' . strtolower($template) . '.php';\r\n\t        if (file_exists($file)) {\r\n\t            $this-&gt;render = $file;\r\n\t\t\t\t\r\n\t        } else {\r\n\t            throw new customException('Template ' . $template . ' not found!');\r\n\t        }\r\n\t    }\r\n\t    catch (customException $e) {\r\n\t        echo $e-&gt;errorMessage();\r\n\t    }\r\n\t}\r\n\t\r\n\tpublic function assign($variable, $value){\r\n\t    $this-&gt;data[$variable] = $value;\r\n\t}\r\n\t\r\n\tpublic function __destruct(){\r\n\t    extract($this-&gt;data);\r\n\t    include($this-&gt;render);\r\n\t\r\n\t}\r\n}\r\n Benutzung \r\n// lädt mytemplate.php und übergibt das array $data.\r\n$view = new view('mytemplate', $data);\r\n Viel Spaß damit!"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# PHP: Simple kleine View Template Klasse

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#simple](/tag.html?tag=756&cHash=5a4fdd857d64a3faa4f2a63c60782fe8)[#view](/tag.html?tag=757&cHash=8776e3da1e512d169ee78a9f8fc86149)[#klasse](/tag.html?tag=758&cHash=f90bc1487a66e5a12ba1503a7305f741)[#class](/tag.html?tag=759&cHash=e9b7dc67ecc9b4d91ca4c5bc7b66ecad)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Oct 2015

Für ein kleines Projekt benötigte eine super simple View-Klasse. Was sie macht ist eine PHP Datei aus dem "templates" Ordner zu laden und an diese dann Daten zu übertragen. Um sie zu benutzen muss nur die View-Klasse includet werden. Der Code ist folgender:

**View-Klasse**

```

<?php
class View {
	private $data = array();
	
	private $render = FALSE;
	
	public function __construct($template){
	    try {
	        $file = __DIR__.'/../templates/' . strtolower($template) . '.php';
	        if (file_exists($file)) {
	            $this->render = $file;
				
	        } else {
	            throw new customException('Template ' . $template . ' not found!');
	        }
	    }
	    catch (customException $e) {
	        echo $e->errorMessage();
	    }
	}
	
	public function assign($variable, $value){
	    $this->data[$variable] = $value;
	}
	
	public function __destruct(){
	    extract($this->data);
	    include($this->render);
	
	}
}
```

**Benutzung**

```

// lädt mytemplate.php und übergibt das array $data.
$view = new view('mytemplate', $data);
```

Viel Spaß damit!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.