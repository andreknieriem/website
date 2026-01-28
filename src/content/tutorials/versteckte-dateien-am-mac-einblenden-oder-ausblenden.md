---
title: Versteckte Dateien am Mac einblenden oder ausblenden
date: '2013-10-14T04:34:21.000Z'
slug: versteckte-dateien-am-mac-einblenden-oder-ausblenden
tags:
  - '50'
  - '132'
  - '133'
  - '220'
  - '221'
  - '222'
description: >-
  Um beim Mac versteckte Dateien wie zum Beispiel die .htaccess Datei sehen zu
  können muss man den Terminal (Unter Programme/Dienstprogramme) aufrufen und
  folgende Codezeilen eingeben: 

  defaults write com.apple.finder AppleShowAllFiles TRUE
   Danach muss der Finder neu gestartet werden, damit die Einstellung auch funktioniert: 
  killall Finder
   Möchte man das Ganze wieder ausstellen, weil einen die ganzen .dstore Dateien nerven geht das wie folgt: 
  defaults write com.apple.finder AppleShowAllFiles FALSE

  killall Finder
   
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Um beim Mac versteckte Dateien wie zum Beispiel die .htaccess Datei sehen zu können muss man den Terminal (Unter Programme/Dienstprogramme) aufrufen und folgende Codezeilen eingeben:

defaults write com.apple.finder AppleShowAllFiles TRUE

Danach muss der Finder neu gestartet werden, damit die Einstellung auch funktioniert:

killall Finder

Möchte man das Ganze wieder ausstellen, weil einen die ganzen .dstore Dateien nerven geht das wie folgt:

defaults write com.apple.finder AppleShowAllFiles FALSE
killall Finder