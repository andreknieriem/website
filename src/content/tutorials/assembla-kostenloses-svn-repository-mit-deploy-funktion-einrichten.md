---
title: Assembla - Kostenloses SVN Repository mit Deploy Funktion einrichten
date: '2012-06-14T16:08:26.000Z'
slug: assembla-kostenloses-svn-repository-mit-deploy-funktion-einrichten
tags:
  - assembla
  - build
  - deploy
  - free
  - snaproom
  - svn
description: >-
  Bei meiner Arbeit an snaproom mit mehreren Rechner hat sich mir schnell die
  Frage gestellt, wie ich mir die Arbeit erleichtere. Ich hab mir dann GIT und
  SVN angeschaut und habe mich für SVN entschieden. Git war mir zu kompliziert
  einzurichten.

  Ich bin dann auf den Dienst von Assembla gestoßen, der kostenfrei in der
  Basis-Version zu Verfügung steht. Also einfach SVN auswählen und einen Account
  erstellen. Um euer Projekt nun ins SVN zu bekommen gibt es mehrere
  Möglichkeiten. Ich habe mich für den Weg über Aptana Studio, bzw. Eclipse
  entschieden, da ich auch damit programmiere.

  Um bei Aptana ein Projekt ins SVN zu bekommen macht man einen Rechtsklick aufs
  Projekt, wählt Team und klickt "Share Project". Danach wählt man SVN aus, fügt
  den Link hinzu der bei Assembla unter SVN steht und gebt eure Logindaten ein.
  Schon ist das Projekt mit Assembla verknüpft.

  Nun müsst ihr euer Projekt noch "comitten". Also Rechtsklick aufs Projekt,
  Team und Commit. Als Bemerkung schreibt irgendwas hinein, damit ihr wisst was
  passiert ist - beispielsweise "Einchecken des Projektes". Dann wird euer
  Projekt bei Assembla ins SVN geladen.

  Wenn ihr nun Änderungen vornehmt, dann solltet ihr diese immer Committen. Um
  den letzten Stand aus dem Repository zu bekommen wählt ihr Team -> Update.

  Möchtet ihr nun auf euren Server den Stand, der im SVN ist deployen bietet
  Assembla auch dafür ein Tool an. Um dieses zu aktivieren geht ihr auf
  Admin/Tools/More und wählt FTP Tool aus.


  Danach einfach eure Server Zugangsdaten eingeben, den Pfad zum Projekt und
  auswählen wann und wie deployed werden soll. Also stündlich, täglich, bei
  einem Commit oder manuell.

  Dann könnt ihr unten auf "Deploy now" klicken und kurz abwarten. Danach habt
  ihr erfolgreich euer Projekt deployed!

  Falls ihr Fragen habt, fragt bitte ;)
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Bei meiner Arbeit an snaproom mit mehreren Rechner hat sich mir schnell die Frage gestellt, wie ich mir die Arbeit erleichtere. Ich hab mir dann GIT und SVN angeschaut und habe mich für SVN entschieden. Git war mir zu kompliziert einzurichten.

Ich bin dann auf den Dienst von [Assembla](http://www.assembla.com/) gestoßen, der kostenfrei in der Basis-Version zu Verfügung steht. Also einfach SVN auswählen und einen Account erstellen. Um euer Projekt nun ins SVN zu bekommen gibt es mehrere Möglichkeiten. Ich habe mich für den Weg über Aptana Studio, bzw. Eclipse entschieden, da ich auch damit programmiere.

Um bei Aptana ein Projekt ins SVN zu bekommen macht man einen Rechtsklick aufs Projekt, wählt Team und klickt "Share Project". Danach wählt man SVN aus, fügt den Link hinzu der bei Assembla unter SVN steht und gebt eure Logindaten ein. Schon ist das Projekt mit Assembla verknüpft.

Nun müsst ihr euer Projekt noch "comitten". Also Rechtsklick aufs Projekt, Team und Commit. Als Bemerkung schreibt irgendwas hinein, damit ihr wisst was passiert ist - beispielsweise "Einchecken des Projektes". Dann wird euer Projekt bei Assembla ins SVN geladen.

Wenn ihr nun Änderungen vornehmt, dann solltet ihr diese immer Committen. Um den letzten Stand aus dem Repository zu bekommen wählt ihr Team -> Update.

Möchtet ihr nun auf euren Server den Stand, der im SVN ist deployen bietet Assembla auch dafür ein Tool an. Um dieses zu aktivieren geht ihr auf Admin/Tools/More und wählt FTP Tool aus.

[![](http://andreknieriem.de/wp-content/uploads/2012/06/admin-700x106.png "admin")](http://andreknieriem.de/wp-content/uploads/2012/06/admin.png)

Danach einfach eure Server Zugangsdaten eingeben, den Pfad zum Projekt und auswählen wann und wie deployed werden soll. Also stündlich, täglich, bei einem Commit oder manuell.

Dann könnt ihr unten auf "Deploy now" klicken und kurz abwarten. Danach habt ihr erfolgreich euer Projekt deployed!

Falls ihr Fragen habt, fragt bitte ;)