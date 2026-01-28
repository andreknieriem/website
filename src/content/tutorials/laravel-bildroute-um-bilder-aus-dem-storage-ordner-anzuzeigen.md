---
title: 'Laravel: Bildroute um Bilder aus dem Storage Ordner anzuzeigen'
date: '2017-01-31T23:00:00.000Z'
slug: laravel-bildroute-um-bilder-aus-dem-storage-ordner-anzuzeigen
tags:
  - '671'
  - '604'
  - '949'
  - '950'
  - '951'
  - '952'
description: "Wenn man bei Laravel einen Datei-Upload implementiert und die Dateien im Storage Ordner ablegen lässt, so sind diese von außen nicht erreichbar. Möchte man trotzdem an einige der Dateien herankommen, so kann man einfach eine Route erstellen, die die Datei ausliest und ausgibt. \r\nIn meinem Beispiel erstelle ich eine Route die auf /images/{filename} reagiert und aus dem Storage-Ordner / Images die Bilder ausliest. Route::get('images/{filename}', function ($filename)\r\n{\r\n    $path = storage_path() . '/Images/' . $filename;\r\n\r\n    if(!File::exists($path)) abort(404);\r\n\r\n    $file = File::get($path);\r\n    $type = File::mimeType($path);\r\n\r\n    $response = Response::make($file, 200);\r\n    $response->header(\"Content-Type\", $type);\r\n\r\n    return $response;\r\n});"
image: /fileadmin/_processed_/0/0/csm_laravel_6d96ca03e0.png
---


Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.



#Tutorials#Laravel#PHP

* * *

![](/fileadmin/_processed_/0/0/csm_laravel_6d96ca03e0.png)

### Kommentare

[Es gibt 2 Kommentare](#comments)

* * *

### Tags

[#image](/tag.html?tag=604&cHash=11a3b07630e480e8049232858b7be06b)[#laravel](/tag.html?tag=671&cHash=5a1ac0040ad4ab46c7ec4ef355efd717)[#files](/tag.html?tag=949&cHash=238a68ae0fe0dfa802da3092ada676f7)[#storage](/tag.html?tag=950&cHash=c6a62b8f735e646f2060fd660ddea1e3)[#route](/tag.html?tag=951&cHash=da75e4ed1db3b89c8baa540e3f5159ab)[#proxy](/tag.html?tag=952&cHash=f5386b547e48551de21eae5890814551)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

01\. Feb 2017

Wenn man bei Laravel einen Datei-Upload implementiert und die Dateien im Storage Ordner ablegen lässt, so sind diese von außen nicht erreichbar. Möchte man trotzdem an einige der Dateien herankommen, so kann man einfach eine Route erstellen, die die Datei ausliest und ausgibt.

In meinem Beispiel erstelle ich eine Route die auf /images/{filename} reagiert und aus dem Storage-Ordner / Images die Bilder ausliest.

```
Route::get('images/{filename}', function ($filename)
{
    $path = storage_path() . '/Images/' . $filename;

    if(!File::exists($path)) abort(404);

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
```

* * *

### `` `Kommentare` ``

*   `` `![](https://www.gravatar.com/avatar/8397101768030b231b6fbec841260065?s=75&d=mm&r=g)` ``
    
    `` `Raphael  Wie kann ich alle Bilder aus dem storage Ordner aus lesen und anzeigen?  10. Sep 2019 [Antworten](#)` ``
    

*   `` `![](https://www.gravatar.com/avatar/8397101768030b231b6fbec841260065?s=75&d=mm&r=g)` ``
    
    `` `Raphael  Wie kann ich alle Bilder aus dem storage Ordner aus lesen und anzeigen?  10. Sep 2019 [Antworten](#)` ``
    

### `` `Hinterlasse einen Kommentar` ``

`` `[Antworten abbrechen](#)  Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert *  Kommentar wird gespeichert  Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.    ` ``