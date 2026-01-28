---
title: React - Wie erstelle ich einen Countdown richtig
date: '2021-06-17T11:01:00.000Z'
slug: react-wie-erstelle-ich-einen-countdown-richtig
tags:
  - '1240'
  - '1256'
  - '1257'
  - '1258'
  - '1259'
  - '1218'
  - '422'
description: "Einen Countdown in React zu erstellen ist relativ einfach, wenn man es denn richtig macht. Nach einigen Versuchen und ein bisschen Recherche bin ich dann auf eine funktionierende Lösung gekommen. function App() {\r\n  // 60 seconds\r\n  const [counter, setCounter] = React.useState(60);\r\n\r\n  React.useEffect(() => {\r\n    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);\r\n  }, [counter]);\r\n\r\n  return (\r\n    \r\n      Countdown: {counter}\r\n    \r\n  );\r\n} "
image: /fileadmin/_processed_/f/6/csm_react_b62544a4c5.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#React

* * *

![](/fileadmin/_processed_/f/6/csm_react_b62544a4c5.png)

### Kommentare

[Es gibt 0 Kommentare](#comments)

* * *

### Tags

[#howto](/tag.html?tag=422&cHash=62963dd8561314208c33838fcdc02f35)[\# tutorial](/tag.html?tag=1218&cHash=0ccbe4d2a2af19083393dd48979ba165)[#react](/tag.html?tag=1240&cHash=edc07e96c8a790d2424ea345f9b80e99)[\# countdown](/tag.html?tag=1256&cHash=415bc0f5ba74fbab05752975e557a933)[\# setinterval](/tag.html?tag=1257&cHash=fbdaaa4f3c9810813f222a6946efe180)[\# settimeout](/tag.html?tag=1258&cHash=de250e8380876fbc7769bb2f8de7d57f)[\# rightway](/tag.html?tag=1259&cHash=ec93c1ffdabf65f0d668389942425346)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

17\. Jun 2021

Einen Countdown in React zu erstellen ist relativ einfach, wenn man es denn richtig macht. Nach einigen Versuchen und ein bisschen Recherche bin ich dann auf eine funktionierende Lösung gekommen.

```
function App() {
  // 60 seconds
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}
```

### Wie funktioniert das Ganze ohne ein setInterval?

Da React mit dem useEffect-Hook die Komponente jedes mal bei Änderung der Abhängigen Variablen neu aufruft, machen wir uns diesen Effekt zu nutze und sagen, dass er jede Sekunde den Counter um 1 runterzählt. Sobald der Counter sich verändert greift der Hook wieder startet den Timeout wieder neu und der Counter wird nach und nach heruntergezählt.

### Probleme mit anderen Lösungen

Benutzt man setInterval, wie man es von normalen JS Anwendungen herkennt, so kommt man schnell in die Schwierigkeit, dass die nach jedem neurendern des Countdown ein neuer Interval gestartet wird und wir bei 60 Sekunden, dann bei 60 Intervallen landen und unser Countdown sehr merkwürdig herunterzählt. 

* * *

### Kommentare

Es gibt noch keine Kommentare. Sei der Erste!

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.