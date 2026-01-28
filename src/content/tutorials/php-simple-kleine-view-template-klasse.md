---
title: 'PHP: Simple kleine View Template Klasse'
date: '2015-10-01T16:19:31.000Z'
slug: php-simple-kleine-view-template-klasse
tags:
  - php
  - simple
  - view
  - klasse
  - class
description: "Für ein kleines Projekt benötigte eine super simple View-Klasse. Was sie macht ist eine PHP Datei aus dem \"templates\" Ordner zu laden und an diese dann Daten zu übertragen. Um sie zu benutzen muss nur die View-Klasse includet werden. Der Code ist folgender:\nView-Klasse \r\n&lt;?php\r\nclass View {\r\n\tprivate $data = array();\r\n\t\r\n\tprivate $render = FALSE;\r\n\t\r\n\tpublic function __construct($template){\r\n\t    try {\r\n\t        $file = __DIR__.'/../templates/' . strtolower($template) . '.php';\r\n\t        if (file_exists($file)) {\r\n\t            $this-&gt;render = $file;\r\n\t\t\t\t\r\n\t        } else {\r\n\t            throw new customException('Template ' . $template . ' not found!');\r\n\t        }\r\n\t    }\r\n\t    catch (customException $e) {\r\n\t        echo $e-&gt;errorMessage();\r\n\t    }\r\n\t}\r\n\t\r\n\tpublic function assign($variable, $value){\r\n\t    $this-&gt;data[$variable] = $value;\r\n\t}\r\n\t\r\n\tpublic function __destruct(){\r\n\t    extract($this-&gt;data);\r\n\t    include($this-&gt;render);\r\n\t\r\n\t}\r\n}\r\n Benutzung \r\n// lädt mytemplate.php und übergibt das array $data.\r\n$view = new view('mytemplate', $data);\r\n Viel Spaß damit!"
image: /fileadmin/_processed_/a/1/csm_php_f46f120f0b.png
demo_url: null
download_url: null
---

Für ein kleines Projekt benötigte eine super simple View-Klasse. Was sie macht ist eine PHP Datei aus dem "templates" Ordner zu laden und an diese dann Daten zu übertragen. Um sie zu benutzen muss nur die View-Klasse includet werden. Der Code ist folgender:

**View-Klasse**

```php

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

```php

// lädt mytemplate.php und übergibt das array $data.
$view = new view('mytemplate', $data);

```

Viel Spaß damit!