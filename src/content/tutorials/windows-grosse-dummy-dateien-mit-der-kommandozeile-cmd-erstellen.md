---
title: 'Windows: Große Dummy Dateien mit der Kommandozeile (CMD) erstellen'
date: '2015-09-15T16:49:41.000Z'
slug: windows-grosse-dummy-dateien-mit-der-kommandozeile-cmd-erstellen
tags:
  - '375'
  - '629'
  - '630'
  - '740'
  - '741'
  - '742'
  - '743'
  - '744'
description: "Für ein paar Tests brauchte ich ein paar unterschiedlich große Dummy-Dateien. Windows bringt das Tool \"Fsutil.exe\" mit, mit welchem man schnell große txt-Dateien erstellen kann.\nSyntax \r\nfsutil file createnew filename length\r\n (length ist in bytes anzugeben)\nBeispiel für eine 50MB große Datei \r\nfsutil file createnew test.txt 52428800\r\n Achtung! Der obrige Code erstellt eine leere Datei, bei der im Header steht, sie sei 50MB groß, es aber nicht wirklich ist.\nMöchte man eine Datei erstellen, die auch gefüllt ist, dann muss man die folgenden 2 Zeilen ausführen \r\necho \"This is just a sample line appended to create a big file.. \" &gt; dummy.txt\r\nfor /L %i in (1,1,14) do type dummy.txt &gt;&gt; dummy.txt\r\n Das obere Beispiel erstellt eine 1MB große Datei innerhalb weniger Sekunden.\t \n\t \nMöchte man eine 1GB große Datei dann kann man das so machen: \t \t \r\necho \"This is just a sample line appended to create a big file.. \" &gt; dummy.txt\t \t \r\nfor /L %i in (1,1,24) do type dummy.txt &gt;&gt; dummy.txt\t \t \r\n Erklärung\t \t \nDas erste Kommando (echo \"This....) erstellt eine 64 bytes große Datei.\t \t \nDas zweie Kommando loopt 24 mal über die Datei und hängt diese dann jedes mal an sich selbst wieder ran, verdoppelt sich also bei jedem durchlauf. (64byte, 128byte, 256bytes...) Somit ist man nach 24 Durchläufen bei 1073741824bytes was genau 1Gb ist.\t \t \nViel Spaß mit dem Kommando."
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Windows: Große Dummy Dateien mit der Kommandozeile (CMD) erstellen

#Tutorials

* * *

![](/fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png)

### Kommentare

[Es gibt 3 Kommentare](#comments)

* * *

### Tags

[#test](/tag.html?tag=375&cHash=b6f92a240a2624056a5bd53a12d614b3)[#file](/tag.html?tag=629&cHash=b5a44de7cd19099908d93aabdf28fd9a)[#datei](/tag.html?tag=630&cHash=f751d68507b646f4728a7e1a36bea309)[#cmd](/tag.html?tag=740&cHash=c74de3e6d66f63e251710c5bb374bcba)[#large](/tag.html?tag=741&cHash=26234ddcdcf970932609723945c22f87)[#große](/tag.html?tag=742&cHash=fd00ea7f788d319ed6569eca34265b1d)[#dummy](/tag.html?tag=743&cHash=07a9c80097b62b0fa5e4493f4307f27f)[#txt](/tag.html?tag=744&cHash=4a2d4b1f34bac0c6539ae530cdde4436)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

15\. Sep 2015

Für ein paar Tests brauchte ich ein paar unterschiedlich große Dummy-Dateien. Windows bringt das Tool "**Fsutil.exe**" mit, mit welchem man schnell große txt-Dateien erstellen kann.

**Syntax**

```

fsutil file createnew filename length
```

(length ist in bytes anzugeben)

**Beispiel für eine 50MB große Datei**

```

fsutil file createnew test.txt 52428800
```

**Achtung!** Der obrige Code erstellt eine leere Datei, bei der im Header steht, sie sei 50MB groß, es aber nicht wirklich ist.

Möchte man eine Datei erstellen, die auch gefüllt ist, dann muss man die folgenden 2 Zeilen ausführen

```

echo "This is just a sample line appended to create a big file.. " > dummy.txt
for /L %i in (1,1,14) do type dummy.txt >> dummy.txt
```

Das obere Beispiel erstellt eine 1MB große Datei innerhalb weniger Sekunden.

Möchte man eine 1GB große Datei dann kann man das so machen:

```
	 	 
echo "This is just a sample line appended to create a big file.. " > dummy.txt	 	 
for /L %i in (1,1,24) do type dummy.txt >> dummy.txt	 	 
```

**Erklärung**

Das erste Kommando (echo "This....) erstellt eine 64 bytes große Datei.

Das zweie Kommando loopt 24 mal über die Datei und hängt diese dann jedes mal an sich selbst wieder ran, verdoppelt sich also bei jedem durchlauf. (64byte, 128byte, 256bytes...) Somit ist man nach 24 Durchläufen bei 1073741824bytes was genau 1Gb ist.

Viel Spaß mit dem Kommando.

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/593d11f7e34fde160b0ce5edcfa92414?s=75&d=mm&r=g)
    
    Christian
    
    Hi, den ersten Tip findet man häufig, aber der zweite Teil ist interessant. Ich frage mich, ob die in Wirklichkeit leere Datei taugt, im Daten auf der Festplatte zu überschreiben zum sicheren Löschen. Ich möchte ein NAS-Laufwerk sicher löschen. Wenn die die mit fsutil erstellte Datei auf das NAS-Laufwerk kopiere, dauert es sehr lange. Die Frage ist jetzt, welche Daten werden da kopiert.
    
    09\. Oct 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/ce8ef969056093f665c905362b18a81f?s=75&d=mm&r=g)
    
    Dabbagh
    
    Hallo,  
    wie finde ich diesen Dateien auf mein PC ???? und kann dies löschen ???  
    Gruß  
    M. Dabbagh
    
    16\. Jul 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/593d11f7e34fde160b0ce5edcfa92414?s=75&d=mm&r=g)
        
        Christian
        
        Na, da wo du sie erstellt hast. Oder du suchst nach dem Namen.
        
        09\. Oct 2017 [Antworten](#)
        

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.