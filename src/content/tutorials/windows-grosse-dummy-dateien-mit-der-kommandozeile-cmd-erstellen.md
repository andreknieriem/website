---
title: 'Windows: Große Dummy Dateien mit der Kommandozeile (CMD) erstellen'
date: '2015-09-15T16:49:41.000Z'
slug: windows-grosse-dummy-dateien-mit-der-kommandozeile-cmd-erstellen
tags:
  - test
  - file
  - datei
  - cmd
  - large
  - große
  - dummy
  - txt
description: "Für ein paar Tests brauchte ich ein paar unterschiedlich große Dummy-Dateien. Windows bringt das Tool \"Fsutil.exe\" mit, mit welchem man schnell große txt-Dateien erstellen kann.\nSyntax \r\nfsutil file createnew filename length\r\n (length ist in bytes anzugeben)\nBeispiel für eine 50MB große Datei \r\nfsutil file createnew test.txt 52428800\r\n Achtung! Der obrige Code erstellt eine leere Datei, bei der im Header steht, sie sei 50MB groß, es aber nicht wirklich ist.\nMöchte man eine Datei erstellen, die auch gefüllt ist, dann muss man die folgenden 2 Zeilen ausführen \r\necho \"This is just a sample line appended to create a big file.. \" &gt; dummy.txt\r\nfor /L %i in (1,1,14) do type dummy.txt &gt;&gt; dummy.txt\r\n Das obere Beispiel erstellt eine 1MB große Datei innerhalb weniger Sekunden.\t \n\t \nMöchte man eine 1GB große Datei dann kann man das so machen: \t \t \r\necho \"This is just a sample line appended to create a big file.. \" &gt; dummy.txt\t \t \r\nfor /L %i in (1,1,24) do type dummy.txt &gt;&gt; dummy.txt\t \t \r\n Erklärung\t \t \nDas erste Kommando (echo \"This....) erstellt eine 64 bytes große Datei.\t \t \nDas zweie Kommando loopt 24 mal über die Datei und hängt diese dann jedes mal an sich selbst wieder ran, verdoppelt sich also bei jedem durchlauf. (64byte, 128byte, 256bytes...) Somit ist man nach 24 Durchläufen bei 1073741824bytes was genau 1Gb ist.\t \t \nViel Spaß mit dem Kommando."
image: /fileadmin/_processed_/6/6/csm_tutorials_4003cc1df0.png
demo_url: null
download_url: null
---

Für ein paar Tests brauchte ich ein paar unterschiedlich große Dummy-Dateien. Windows bringt das Tool "**Fsutil.exe**" mit, mit welchem man schnell große txt-Dateien erstellen kann.

**Syntax**

```bash

fsutil file createnew filename length

```

(length ist in bytes anzugeben)

**Beispiel für eine 50MB große Datei**

```bash

fsutil file createnew test.txt 52428800

```

**Achtung!** Der obrige Code erstellt eine leere Datei, bei der im Header steht, sie sei 50MB groß, es aber nicht wirklich ist.

Möchte man eine Datei erstellen, die auch gefüllt ist, dann muss man die folgenden 2 Zeilen ausführen

```bash

echo "This is just a sample line appended to create a big file.. " > dummy.txt
for /L %i in (1,1,14) do type dummy.txt >> dummy.txt

```

Das obere Beispiel erstellt eine 1MB große Datei innerhalb weniger Sekunden.

Möchte man eine 1GB große Datei dann kann man das so machen:

```bash
	 	 
echo "This is just a sample line appended to create a big file.. " > dummy.txt	 	 
for /L %i in (1,1,24) do type dummy.txt >> dummy.txt	 	 

```

**Erklärung**

Das erste Kommando (echo "This....) erstellt eine 64 bytes große Datei.

Das zweie Kommando loopt 24 mal über die Datei und hängt diese dann jedes mal an sich selbst wieder ran, verdoppelt sich also bei jedem durchlauf. (64byte, 128byte, 256bytes...) Somit ist man nach 24 Durchläufen bei 1073741824bytes was genau 1Gb ist.

Viel Spaß mit dem Kommando.