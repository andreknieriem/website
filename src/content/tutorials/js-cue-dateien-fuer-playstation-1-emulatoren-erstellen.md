---
title: 'JS: Cue-Dateien für Playstation 1 Emulatoren erstellen'
date: '2018-12-14T08:31:00.000Z'
slug: js-cue-dateien-fuer-playstation-1-emulatoren-erstellen
tags:
  - psx
  - playstation
  - psone
  - cue
  - bin
  - maker
  - generator
  - online
description: "Da ich mir vor einiger Zeit einen Raspberry Pi 3 in ein altes Nes-Gehäuse gebaut habe, brauchte ich natürlich auch Roms. Für N64, Snes und so weiter klappte alles immer auf Anhieb. Bei der Playstation waren oft nur bin-Dateien dabei. Hat man nur diese, so kann der Emulator die Spiele nicht abspielen. Man braucht die Cue-Datei. Diese zu generieren ist händisch machbar, aber ich habe mir gedacht, dass es einfacher ist, wenn&nbsp; das automatisiert geht.\r\nDas Ganze läuft über HTML5 mit Drag/Drop. Durch das Droppen bekomme ich die Dateinamen, die abgelegt wurden, ohne dass die Dateien hochgeladen werden. Das Skript habe ich auf meiner Tools-Seite hinzugefügt.\r\nZum Cue-Maker Hier mal ein kleiner Auszug des Codes: $(function() {\r\n\r\n  var dropzone = $(\"#dropzone\");\r\n\r\n  //...\r\n\r\n  dropzone.on(\"drop\", function(e) {\r\n    dropzone.removeClass(\"hover\");\r\n\r\n    var flasher = function(state) {\r\n      dropzone.toggleClass(\"flash\", state);\r\n    }\r\n\r\n    flasher(true);\r\n\r\n    var fileNames = extractFilenames(e.originalEvent.dataTransfer.files);\r\n\r\n    setTimeout(function() {\r\n      flasher(false);\r\n      var cueSheet = filenamesToCue(fileNames);\r\n\r\n      // set cue file name\r\n      fileNames = fileNames.slice();\r\n      var firstFile = fileNames.shift();\r\n      var cuefilename = firstFile.split('.').slice(0, -1).join('.') + '.cue';\r\n      $(\"#result\").text(cueSheet);\r\n      $(\".dlbutton\").attr('data-filename',cuefilename).show();\r\n    }, 250)\r\n  })\r\n\r\n  $('.dlbutton').click(function(e) {\r\n    e.preventDefault();\r\n    var filename = $(this).attr('data-filename');\r\n    var text = $(\"#result\").text();\r\n    download(filename, text);\r\n  });\r\n\r\n});\r\n\r\n\r\n// Download generated file\r\nfunction download(filename, text) {\r\n  var element = document.createElement('a');\r\n  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));\r\n  element.setAttribute('download', filename);\r\n\r\n  element.style.display = 'none';\r\n  document.body.appendChild(element);\r\n\r\n  element.click();\r\n\r\n  document.body.removeChild(element);\r\n}\r\n\r\n// Get Filenames\r\nfunction extractFilenames(fileList) {\r\n  return $.makeArray(fileList).map(function(file) {\r\n    return file.name;\r\n  })\r\n}\r\n\r\n// Generatore Cue-Data\r\nfunction filenamesToCue(fileNames) {\r\n  fileNames = fileNames.slice();\r\n  var firstFile = fileNames.shift();\r\n\r\n  var sheet =  'FILE \"' + firstFile + '\" BINARY\\n\\\r\n  TRACK 01 MODE2/2352\\n\\\r\n  INDEX 01 00:00:00\\n\\\r\n';\r\n  var trackCounter = 2\r\n  fileNames.forEach(function(fileName) {\r\n    sheet += 'FILE \"' + fileName + '\" BINARY\\n\\\r\n    TRACK ' + padLeadingZero(trackCounter) + \" AUDIO\\n\\\r\n    INDEX 00 00:00:00\\n\\\r\n    INDEX 01 00:02:00\\n\\\r\n\"\r\n  trackCounter++;\r\n  });\r\n\r\n  return sheet;\r\n}\r\n\r\nfunction padLeadingZero(number) {\r\n  var padded = \"0\" + number;\r\n  return padded.substr(padded.length-2);\r\n}"
image: /fileadmin/_processed_/0/9/csm_javascript_163d0d7946.png
demo_url: null
download_url: null
---

Da ich mir vor einiger Zeit einen Raspberry Pi 3 in ein altes Nes-Gehäuse gebaut habe, brauchte ich natürlich auch Roms. Für N64, Snes und so weiter klappte alles immer auf Anhieb. Bei der Playstation waren oft nur bin-Dateien dabei. Hat man nur diese, so kann der Emulator die Spiele nicht abspielen. Man braucht die Cue-Datei. Diese zu generieren ist händisch machbar, aber ich habe mir gedacht, dass es einfacher ist, wenn  das automatisiert geht.

Das Ganze läuft über HTML5 mit Drag/Drop. Durch das Droppen bekomme ich die Dateinamen, die abgelegt wurden, ohne dass die Dateien hochgeladen werden. Das Skript habe ich auf meiner [Tools-Seite](http://tools.andrerinas.de/psx_cue_generator) hinzugefügt.

[Zum Cue-Maker](http://tools.andrerinas.de/psx_cue_generator)

### Hier mal ein kleiner Auszug des Codes:

```
$(function() {

  var dropzone = $("#dropzone");

  //...

  dropzone.on("drop", function(e) {
    dropzone.removeClass("hover");

    var flasher = function(state) {
      dropzone.toggleClass("flash", state);
    }

    flasher(true);

    var fileNames = extractFilenames(e.originalEvent.dataTransfer.files);

    setTimeout(function() {
      flasher(false);
      var cueSheet = filenamesToCue(fileNames);

      // set cue file name
      fileNames = fileNames.slice();
      var firstFile = fileNames.shift();
      var cuefilename = firstFile.split('.').slice(0, -1).join('.') + '.cue';
      $("#result").text(cueSheet);
      $(".dlbutton").attr('data-filename',cuefilename).show();
    }, 250)
  })

  $('.dlbutton').click(function(e) {
    e.preventDefault();
    var filename = $(this).attr('data-filename');
    var text = $("#result").text();
    download(filename, text);
  });

});


// Download generated file
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Get Filenames
function extractFilenames(fileList) {
  return $.makeArray(fileList).map(function(file) {
    return file.name;
  })
}

// Generatore Cue-Data
function filenamesToCue(fileNames) {
  fileNames = fileNames.slice();
  var firstFile = fileNames.shift();

  var sheet =  'FILE "' + firstFile + '" BINARY\n\
  TRACK 01 MODE2/2352\n\
  INDEX 01 00:00:00\n\
';
  var trackCounter = 2
  fileNames.forEach(function(fileName) {
    sheet += 'FILE "' + fileName + '" BINARY\n\
    TRACK ' + padLeadingZero(trackCounter) + " AUDIO\n\
    INDEX 00 00:00:00\n\
    INDEX 01 00:02:00\n\
"
  trackCounter++;
  });

  return sheet;
}

function padLeadingZero(number) {
  var padded = "0" + number;
  return padded.substr(padded.length-2);
}
```