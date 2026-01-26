---
title: 'How To: Localstorage benutzen'
date: '2013-08-06T04:52:53.000Z'
slug: how-to-localstorage-benutzen
tags:
  - '20'
  - '62'
  - '69'
  - '199'
  - '200'
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
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# How To: Localstorage benutzen

#Tutorials#Javascript

* * *

![](/fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#jquery](/tag.html?tag=20&cHash=865fe8e49ed3ff8e2d4923043363880f)[#tutorial](/tag.html?tag=62&cHash=e898e626b9d897f4104893d4cb441292)[#javascript](/tag.html?tag=69&cHash=1f9ae180b33da0d2f7ef044e72c8149a)[#html5](/tag.html?tag=199&cHash=b040374a36d6adcce76102ac739e8651)[#localstorage](/tag.html?tag=200&cHash=80d75d451b4a4ee64462959f33daca1b)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

06\. Aug 2013

Localstorage ist eine neuere Methode um Daten im Browser zu speichern. Ähnlich wie ein Cookie kann man dort Verbindungsdaten, Offline Daten etc speichern. Der Vorteil von Localstorage ist unter anderem der größere Speicherplatz. Hier mal ein kleines Beispiel wie man mit Javascript Daten speichert und sich wieder aus dem Speicher holt:

**Localstorage benutzen**

```

// Daten setzen:
localStorage.setItem("key", "wert");

// Daten holen:
localStorage.getItem("key");
```

So kann man beispielsweise Einstellungen speichern, die ein User vorgenommen hat wie etwa die Kategorie die gerade ausgewählt wurde usw... Die Möglichkeiten sind sehr vielfältig.

Natürlich lassen sich die Daten auch wieder aus dem localstorage löschen.

```

// Einzelndes Item löschen:
localStorage.removeItem("key");

// Kompletten localstorage löschen
localStorage.clear();
```

**ACHTUNG**

Localstorage Werte werden so lange gespeichert, bis man diese löscht. Will man dies ähnlich wie beim Cookie beim schließen des Browsers machen könnte man folgendes verwenden:

```

window.onbeforeunload = function() {
  localStorage.clear();
  return '';
};
```

**Localstorage für den Offlinebetrieb**

Gerade für den Offline Betrieb bei beispielsweise mobilen Webapps bietet sich localstorage sehr an. Wenn der Browser online ist speichert er Daten, die benötigt werden einfach im Storage zwischen und ruft diese ab, wenn man im Offline Betrieb ist.

Um herauszufinden ob ein Browser on- oder offline ist kann man folgenden Code verwenden:

```


var isonline = navigator.onLine;

```

In diesem Fall ist die Variable bei Online-Betrieb "true" oder bei Offline-Betrieb false. So könnte man sagen, wenn der Browser im Offline-Betrieb ist, dann hole die Daten aus dem Localstorage, ansonsten Live aus dem Netz.

So dann viel Spaß mit Localstorage!

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.