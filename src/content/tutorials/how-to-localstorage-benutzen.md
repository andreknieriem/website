---
title: 'How To: Localstorage benutzen'
date: '2013-08-06T04:52:53.000Z'
slug: how-to-localstorage-benutzen
tags:
  - jquery
  - tutorial
  - javascript
  - html5
  - localstorage
description: >-
  Localstorage ist eine neuere Methode um Daten im Browser zu speichern. Ähnlich
  wie ein Cookie kann man dort Verbindungsdaten, Offline Daten etc speichern.
  Der Vorteil von Localstorage ist unter anderem der größere Speicherplatz. Hier
  mal ein kleines Beispiel wie man mit Javascript Daten speichert und sich
  wieder aus dem Speicher holt:

  Localstorage benutzen 

  // Daten setzen:

  localStorage.setItem("key", "wert");


  // Daten holen:

  localStorage.getItem("key");
   So kann man beispielsweise Einstellungen speichern, die ein User vorgenommen hat wie etwa die Kategorie die gerade ausgewählt wurde usw... Die Möglichkeiten sind sehr vielfältig.
  Natürlich lassen sich die Daten auch wieder aus dem localstorage löschen. 

  // Einzelndes Item löschen:

  localStorage.removeItem("key");


  // Kompletten localstorage löschen

  localStorage.clear();
   ACHTUNG
  Localstorage Werte werden so lange gespeichert, bis man diese löscht. Will man
  dies ähnlich wie beim Cookie beim schließen des Browsers machen könnte man
  folgendes verwenden: 

  window.onbeforeunload = function() {
    localStorage.clear();
    return '';
  };
   Localstorage für den Offlinebetrieb
  Gerade für den Offline Betrieb bei beispielsweise mobilen Webapps bietet sich
  localstorage sehr an. Wenn der Browser online ist speichert er Daten, die
  benötigt werden einfach im Storage zwischen und ruft diese ab, wenn man im
  Offline Betrieb ist.

  Um herauszufinden ob ein Browser on- oder offline ist kann man folgenden Code
  verwenden: 


  var isonline = navigator.onLine;

   In diesem Fall ist die Variable bei Online-Betrieb "true" oder bei Offline-Betrieb false. So könnte man sagen, wenn der Browser im Offline-Betrieb ist, dann hole die Daten aus dem Localstorage, ansonsten Live aus dem Netz.
  So dann viel Spaß mit Localstorage!
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Localstorage ist eine neuere Methode um Daten im Browser zu speichern. Ähnlich wie ein Cookie kann man dort Verbindungsdaten, Offline Daten etc speichern. Der Vorteil von Localstorage ist unter anderem der größere Speicherplatz. Hier mal ein kleines Beispiel wie man mit Javascript Daten speichert und sich wieder aus dem Speicher holt:

**Localstorage benutzen**

```javascript

// Daten setzen:
localStorage.setItem("key", "wert");

// Daten holen:
localStorage.getItem("key");

```

So kann man beispielsweise Einstellungen speichern, die ein User vorgenommen hat wie etwa die Kategorie die gerade ausgewählt wurde usw... Die Möglichkeiten sind sehr vielfältig.

Natürlich lassen sich die Daten auch wieder aus dem localstorage löschen.

```javascript

// Einzelndes Item löschen:
localStorage.removeItem("key");

// Kompletten localstorage löschen
localStorage.clear();

```

**ACHTUNG**

Localstorage Werte werden so lange gespeichert, bis man diese löscht. Will man dies ähnlich wie beim Cookie beim schließen des Browsers machen könnte man folgendes verwenden:

```javascript

window.onbeforeunload = function() {
  localStorage.clear();
  return '';
};

```

**Localstorage für den Offlinebetrieb**

Gerade für den Offline Betrieb bei beispielsweise mobilen Webapps bietet sich localstorage sehr an. Wenn der Browser online ist speichert er Daten, die benötigt werden einfach im Storage zwischen und ruft diese ab, wenn man im Offline Betrieb ist.

Um herauszufinden ob ein Browser on- oder offline ist kann man folgenden Code verwenden:

```javascript


var isonline = navigator.onLine;


```

In diesem Fall ist die Variable bei Online-Betrieb "true" oder bei Offline-Betrieb false. So könnte man sagen, wenn der Browser im Offline-Betrieb ist, dann hole die Daten aus dem Localstorage, ansonsten Live aus dem Netz.

So dann viel Spaß mit Localstorage!