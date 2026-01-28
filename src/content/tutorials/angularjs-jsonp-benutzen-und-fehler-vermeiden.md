---
title: 'AngularJS: JSONP benutzen und Fehler vermeiden'
date: '2015-06-23T16:23:32.000Z'
slug: angularjs-jsonp-benutzen-und-fehler-vermeiden
tags:
  - '528'
  - '709'
  - '710'
  - '711'
  - '712'
  - '713'
description: "AngularJS kann von Haus aus JSONP und dies funktioniert auch super. Hier mal ein kleines Beispiel, wie man JSONP mit Angular benutzt. ($http muss natürlich in eurer App/Controller eingebunden) \r\n$http.jsonp('https://myurl.com/getlist?callback=JSON_CALLBACK')\r\n   .success(function (data) {\r\n      $scope.jsonObject = data;\r\n   }\r\n);\r\n Wichtig dabei ist, dass der Callback JSON_CALLBACK heißt. Dies ist ein interner Angular Call und bewirkt, dass ihr in der Success-Funktion gleich die Daten habt.\nAllerdings hatte ich sehr lange folgenden Fehler dabei: \r\nUncaught ReferenceError: angularcallbacks0 is not defined\r\n Ich habe dann lange gesucht und debuggt und konnte mir den Fehler einfach nicht erklären, bis ich gelesen habe, dass Angular die Funktion JSON_CALLBACK intern durchnummeriert, damit mehrere gleichzeitige Requests möglich sind. Allerdings nennt Angular das Callback immer so: \r\nangular.callbacks._0\r\nangular.callbacks._1\r\nangular.callbacks._xxx\r\n Wie oben in der Fehlermeldung dann zu sehen ist, findet er Funktion angularcallbacks0 nicht. Das heißt, dass irgendetwas die Punkte oder sonstige Zeichen entfernt hat, die weder Zahl noch Buchstabe sind. Bei mir lag es an einem PHP-Script, dass die Callback Funktion gefiltert hat und alle Sonderzeichen gelöscht hat bevor es die Funktion ausgeliefert hat."
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

[AngularJS](https://docs.angularjs.org/api/ng/service/$http) kann von Haus aus JSONP und dies funktioniert auch super. Hier mal ein kleines Beispiel, wie man JSONP mit Angular benutzt. ($http muss natürlich in eurer App/Controller eingebunden)

```

$http.jsonp('https://myurl.com/getlist?callback=JSON_CALLBACK')
   .success(function (data) {
      $scope.jsonObject = data;
   }
);
```

Wichtig dabei ist, dass der Callback **JSON\_CALLBACK** heißt. Dies ist ein interner Angular Call und bewirkt, dass ihr in der Success-Funktion gleich die Daten habt.

Allerdings hatte ich sehr lange folgenden Fehler dabei:

```

Uncaught ReferenceError: angularcallbacks0 is not defined
```

Ich habe dann lange gesucht und debuggt und konnte mir den Fehler einfach nicht erklären, bis ich gelesen habe, dass Angular die Funktion **JSON\_CALLBACK** intern durchnummeriert, damit mehrere gleichzeitige Requests möglich sind. Allerdings nennt Angular das Callback immer so:

angular.callbacks.\_0
angular.callbacks.\_1
angular.callbacks.\_xxx

Wie oben in der Fehlermeldung dann zu sehen ist, findet er Funktion **angularcallbacks0** nicht. Das heißt, dass irgendetwas die Punkte oder sonstige Zeichen entfernt hat, die weder Zahl noch Buchstabe sind. Bei mir lag es an einem PHP-Script, dass die Callback Funktion gefiltert hat und alle Sonderzeichen gelöscht hat bevor es die Funktion ausgeliefert hat.