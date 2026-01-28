---
title: 'TYPO3: Einen Auth-Service erstellen ab 6.2+'
date: '2016-11-06T23:00:00.000Z'
slug: typo3-einen-auth-service-erstellen-ab-62
tags:
  - '198'
  - '931'
  - '932'
  - '772'
  - '807'
  - '820'
  - '422'
  - '62'
description: "TYPO3 bietet an, dass man das Login auch selber über einen sogenannten Auth-Service steuern kann. Mit diesem Service kann man Benutzer automatisch einloggen, wenn beispielswese ein Hash an der URL steht, oder wenn man sich mit LDAP authentifizieren möchte und so weiter. Der Aufbau eines Auth-Service ist immer gleich. Im Folgenden habe ich einen kleinen Authservice erstellt.\r\nAls erstes muss der AuthService in der ext_localconf.php hinzugefügt werden. Dabei muss beachtet werden, dass ihr bei className euren Namespace zu eurem AuthService angebt. // auth service\r\n\\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::addService(\r\n    $_EXTKEY,\r\n    'auth' /* sv type */,\r\n    'AuthService' /* sv key */,\r\n    array(\r\n        'title' =&gt; 'Authentication service',\r\n        'description' =&gt; 'Authentication Lookup.',\r\n\r\n        'subtype' =&gt; 'getUserFE, authUserFE, getGroupsFE',\r\n\r\n        'available' =&gt; true,\r\n        'priority' =&gt; 90,\r\n        'quality' =&gt; 90,\r\n\r\n        'os' =&gt; '',\r\n        'exec' =&gt; '',\r\n\r\n        'className' =&gt; 'TEST\\\\Example\\\\Service\\\\AuthService', // diese Klasse muss eurem Auth-Service entsprechen!\r\n    )\r\n);\r\n Als nächstes muss jetzt der AuthService erstellt werden. Im Folgenden habe ich mal einen kleinen Service erstellt. Diesen habe ich unter Classes/Service/AuthService.php abgelegt. &lt;?php\r\nnamespace TEST\\Example\\Service;\r\nclass AuthService extends \\TYPO3\\CMS\\Sv\\AuthenticationService{\r\n\r\n  private $userId;\r\n\r\n  public function getUser(){\r\n     // do nothing...\r\n  }\r\n\r\n  public function authUser($user){\r\n     // in dieser Funktion können wir jetzt den User, der sich gerade einloggt authentifizieren.\r\n     // Im folgenden Beispiel habe ich eingestellt, dass alle User, die die PID 24 haben, sich nicht einloggen können.\r\n     // es gibt drei Stati die man zurückschicken kann\r\n     // 0: Der User wird nicht eingeloggt und auch kein anderer Service kann doch was dran ändern\r\n     // 100: Der Benutzer wird nicht von diesem Service eingeloggt, kann aber noch durch einen anderen eingeloggt werden\r\n     // 200: Der Benutzer wird eingeloggt. \r\n     if($user['pid'] == 24){\r\n       return 0;\r\n     }\r\n\r\n    if($user['uid'] == $this-&gt;userId) {\r\n      // OK, 'code' = 200\r\n      return 200;\r\n    }\r\n    // fail\r\n    return 100;\r\n  }\r\n\r\n  public function getGroups(&amp;$user) {\r\n    // do nothing...\r\n  }\r\n\r\n}"
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#TYPO3#PHP

* * *

![](/fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png)

### Kommentare

[Es gibt 5 Kommentare](#comments)

* * *

### Tags

[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#typo3](/tag.html?tag=198&cHash=5e10edd38bcb37a5125e3ab76f05df2f)[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[#6.2](/tag.html?tag=772&cHash=d68bf05758d88e708a8ca264cc7cf75f)[#7.6](/tag.html?tag=807&cHash=b4278a85562c05b90477af3b415c5f30)[#lts](/tag.html?tag=820&cHash=e03bf3617cf29c4c9c4f818b6c086b35)[#auth](/tag.html?tag=931&cHash=ca1fa244d420aa08e257a0940960caa6)[#service](/tag.html?tag=932&cHash=91799d1f6dda152eebecf13cc6d3ad67)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

07\. Nov 2016

TYPO3 bietet an, dass man das Login auch selber über einen sogenannten Auth-Service steuern kann. Mit diesem Service kann man Benutzer automatisch einloggen, wenn beispielswese ein Hash an der URL steht, oder wenn man sich mit LDAP authentifizieren möchte und so weiter. Der Aufbau eines Auth-Service ist immer gleich. Im Folgenden habe ich einen kleinen Authservice erstellt.

Als erstes muss der AuthService in der **ext\_localconf.php** hinzugefügt werden. Dabei muss beachtet werden, dass ihr bei className euren Namespace zu eurem AuthService angebt.

```
// auth service
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addService(
    $_EXTKEY,
    'auth' /* sv type */,
    'AuthService' /* sv key */,
    array(
        'title' => 'Authentication service',
        'description' => 'Authentication Lookup.',

        'subtype' => 'getUserFE, authUserFE, getGroupsFE',

        'available' => true,
        'priority' => 90,
        'quality' => 90,

        'os' => '',
        'exec' => '',

        'className' => 'TEST\\Example\\Service\\AuthService', // diese Klasse muss eurem Auth-Service entsprechen!
    )
);
```

Als nächstes muss jetzt der AuthService erstellt werden. Im Folgenden habe ich mal einen kleinen Service erstellt. Diesen habe ich unter **Classes/Service/AuthService.php** abgelegt.

```
<?php
namespace TEST\Example\Service;
class AuthService extends \TYPO3\CMS\Sv\AuthenticationService{

  private $userId;

  public function getUser(){
     // do nothing...
  }

  public function authUser($user){
     // in dieser Funktion können wir jetzt den User, der sich gerade einloggt authentifizieren.
     // Im folgenden Beispiel habe ich eingestellt, dass alle User, die die PID 24 haben, sich nicht einloggen können.
     // es gibt drei Stati die man zurückschicken kann
     // 0: Der User wird nicht eingeloggt und auch kein anderer Service kann doch was dran ändern
     // 100: Der Benutzer wird nicht von diesem Service eingeloggt, kann aber noch durch einen anderen eingeloggt werden
     // 200: Der Benutzer wird eingeloggt. 
     if($user['pid'] == 24){
       return 0;
     }

    if($user['uid'] == $this->userId) {
      // OK, 'code' = 200
      return 200;
    }
    // fail
    return 100;
  }

  public function getGroups(&$user) {
    // do nothing...
  }

}
```

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/2b6f93c99b1576c6773966863daa622c?s=75&d=mm&r=g)
    
    Seniore T
    
    Schönes Kompendium, Danke! Hat mir geholfen.
    
    11\. Apr 2019 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/aeb10b36f0fb8bbd876f9d8bd298c3aa?s=75&d=mm&r=g)
    
    Thomas
    
    Sauber schnell, alles wichtige erklärt. Danke!
    
    20\. Mar 2018 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        Andre Rinas
        
        Freut mich, wenn ich dir helfen konnte!
        
        20\. Mar 2018 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/3e1721fd8a33faf25f0b37a065c50399?s=75&d=mm&r=g)
    
    Matze
    
    Dank dir! Hat mir gerade einiges an Zeit erspart!
    
    30\. May 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=75&d=mm&r=g)
    
    Manuel
    
    Hallo Andre. danke für den kurzen Einblick in die Authservices. Das hat mir gefehlt.
    
    30\. Nov 2016 [Antworten](#)
    

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.