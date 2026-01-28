---
title: 'Laravel: Bildroute um Bilder aus dem Storage Ordner anzuzeigen'
date: '2017-01-31T23:00:00.000Z'
slug: laravel-bildroute-um-bilder-aus-dem-storage-ordner-anzuzeigen
tags:
  - laravel
  - image
  - files
  - storage
  - route
  - proxy
description: "Wenn man bei Laravel einen Datei-Upload implementiert und die Dateien im Storage Ordner ablegen lässt, so sind diese von außen nicht erreichbar. Möchte man trotzdem an einige der Dateien herankommen, so kann man einfach eine Route erstellen, die die Datei ausliest und ausgibt. \r\nIn meinem Beispiel erstelle ich eine Route die auf /images/{filename} reagiert und aus dem Storage-Ordner / Images die Bilder ausliest. Route::get('images/{filename}', function ($filename)\r\n{\r\n    $path = storage_path() . '/Images/' . $filename;\r\n\r\n    if(!File::exists($path)) abort(404);\r\n\r\n    $file = File::get($path);\r\n    $type = File::mimeType($path);\r\n\r\n    $response = Response::make($file, 200);\r\n    $response->header(\"Content-Type\", $type);\r\n\r\n    return $response;\r\n});"
image: /fileadmin/_processed_/0/0/csm_laravel_6d96ca03e0.png
demo_url: null
download_url: null
---

Wenn man bei Laravel einen Datei-Upload implementiert und die Dateien im Storage Ordner ablegen lässt, so sind diese von außen nicht erreichbar. Möchte man trotzdem an einige der Dateien herankommen, so kann man einfach eine Route erstellen, die die Datei ausliest und ausgibt.

In meinem Beispiel erstelle ich eine Route die auf /images/{filename} reagiert und aus dem Storage-Ordner / Images die Bilder ausliest.

```php
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