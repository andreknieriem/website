---
title: Ordner rekursiv mit Php zu einer Zip-Datei packen
date: '2013-09-04T06:54:56.000Z'
slug: ordner-rekursiv-mit-php-zu-einer-zip-datei-packen
tags:
  - '41'
  - '89'
  - '90'
  - '91'
  - '92'
  - '93'
description: "Hat man auf einem Webspace keinen SSH-Zugriff, kommt man schnell an die Grenzen des Machbaren. So lassen sich leider nicht so leicht Backups erstellen.\nAber Php bietet auch eine Möglichkeit ganze Ordner zu einer Zip-Datei zu packen. Das Ganze geht wie folgt: \r\n&lt;?\r\n// die maximale Ausführzeit erhöhen\r\nini_set(\"max_execution_time\", 300);\r\n\r\n// Objekt erstellen und schauen, ob der Server zippen kann\r\n$zip = new ZipArchive();\r\nif ($zip-&gt;open(\"backup.zip\", ZIPARCHIVE::CREATE) !== TRUE) {\r\n\tdie (\"Could not open archive\");\r\n}\r\n\r\n// Gehe durch die Ordner und füge alles dem Archiv hinzu\r\n$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(\"folder/\"));\r\nforeach ($iterator as $key=&gt;$value) {\r\n\t$zip-&gt;addFile(realpath($key), $key) or die (\"ERROR: Could not add file: $key\");\r\n}\r\n// speicher die Zip-Datei\r\n\r\n$zip-&gt;close();\r\necho \"Archive erfolgreich erstellt.\";\r\n?&gt;\r\n Ich hoffe ich konnte euch damit weiterhelfen ;)\nJon aus den Kommentaren hier, hat die Funktion genommen und verbessert. Hier ist sein Code zu finden:\nhttp://pastebin.com/1qmUyWYc"
layout: ../../layouts/BlogPost.astro
---

# Tutorials

Einige nützliche Hilfen und Code-Schnipsel, die ich immer wieder benötige und deshalb hier für alle sammle.

[Zurück zur Übersicht](/tutorials.html)

# Ordner rekursiv mit Php zu einer Zip-Datei packen

#Tutorials#PHP

* * *

![](/fileadmin/_processed_/a/1/csm_php_f46f120f0b.png)

### Kommentare

[Es gibt 40 Kommentare](#comments)

* * *

### Tags

[#php](/tag.html?tag=41&cHash=2a2e19215c3ffd62e5361d7a2ea5cd6d)[#folder](/tag.html?tag=89&cHash=6c51e6c39657be6431df379a17593cf5)[#ordner](/tag.html?tag=90&cHash=a0228c672b6ddc2e78e32047d5d6bab2)[#rekursiv](/tag.html?tag=91&cHash=a5f6c8eeac45f62e095e922690b3e2d1)[#unzip](/tag.html?tag=92&cHash=26609e3cbe64e1af4829936ec4b30b37)[#zip](/tag.html?tag=93&cHash=4000b14ba3b5ec5e0a1fa4a16a235614)

* * *

[Teilen](#)

Teilen

 [Facebook](#) [Twitter](#)

04\. Sep 2013

Hat man auf einem Webspace keinen SSH-Zugriff, kommt man schnell an die Grenzen des Machbaren. So lassen sich leider nicht so leicht Backups erstellen.

Aber Php bietet auch eine Möglichkeit ganze Ordner zu einer Zip-Datei zu packen. Das Ganze geht wie folgt:

```

<?
// die maximale Ausführzeit erhöhen
ini_set("max_execution_time", 300);

// Objekt erstellen und schauen, ob der Server zippen kann
$zip = new ZipArchive();
if ($zip->open("backup.zip", ZIPARCHIVE::CREATE) !== TRUE) {
	die ("Could not open archive");
}

// Gehe durch die Ordner und füge alles dem Archiv hinzu
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("folder/"));
foreach ($iterator as $key=>$value) {
	$zip->addFile(realpath($key), $key) or die ("ERROR: Could not add file: $key");
}
// speicher die Zip-Datei

$zip->close();
echo "Archive erfolgreich erstellt.";
?>
```

Ich hoffe ich konnte euch damit weiterhelfen ;)

Jon aus den Kommentaren hier, hat die Funktion genommen und verbessert. Hier ist sein Code zu finden:

[http://pastebin.com/1qmUyWYc](http://pastebin.com/1qmUyWYc)

* * *

### Kommentare

*   ![](https://www.gravatar.com/avatar/9939db8a988ab2c8d4a8dcc7adf72ca7?s=75&d=mm&r=g)
    
    User12
    
    Was muss ich angeben wenn ich die Dateien in dem Ordner wo die Datei die das ausführt gerade liegt? Also wenn ich einen Ordner namens "Webseite" habe und in dem Ordner liegt auch das script welches das ausführt.
    
    30\. Dec 2017 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/2c67a7bee30af14b3f6dbd7998a6031a?s=75&d=mm&r=g)
        
        Sven
        
        Das würde mich auch interessieren. Ich habe schon mit '.\\' und '.' usw. herumprobiert aber dann taucht im Ergebnis immer die komplette Ordnerstruktur bis ganz hoch auf.  
        Jemand eine Idee?
        
        26\. Mar 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/2f010940d850e6e43c0c0a887ce01693?s=75&d=mm&r=g)
    
    Gerold
    
    Ordner rekursiv mit Php zu einer Zip-Datei packen  
      
    Der Code ist Top.  
    Jetzt bräuchte ich noch eine Erweiterung das die Zip-Datei vom Web-Server auf einen Localen QNAP-Server übertragen wird. (zum Beispiel:Jeden Tag um 03:00 Uhr)  
    Hast Du vielleicht eine Idee.  
    Gruß Gerold
    
    23\. Nov 2017 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
    
    Jon
    
    Hi,  
      
    bei mir haut leider was nicht hin. Ich habe am Ende des Skripts (vor $zip->close();) mal ein var\_dump($zip); eingefügt und die Ausgabe sieht vielversprechend aus:  
      
    object(ZipArchive)#1 (5) { \["status"\]=> int(0) \["statusSys"\]=> int(0) \["numFiles"\]=> int(9520) \["filename"\]=> string(45) "/var/www/user/html/domain/backup.zip" \["comment"\]=> string(0) "" } Archive erfolgreich erstellt.  
      
    Ich sehe 9520 Dateien und den korrekten Pfadnamen. Das Problem ist nur, die Datei backup.zip existiert nicht. Sie wird nicht erstellt. Sollte das Skript in dem Fall aber nicht vorher schon abbrechen?  
      
    Grüße  
    Jon
    
    31\. Mar 2016 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
        
        Jon
        
        Nach einigen weiteren Stunden konnte ich das Problem für mich endlich lösen. Im lokalen Apache funktioniert das Skript, wie es da steht.  
          
        Auf meinem Webhoster leider nicht mehr. Damit es das tut, müssen, wie auch so ähnlich schon oben beschrieben, die Ordner ".." und "." explizit ausgeschlossen werden.  
          
        Die obigen Lösungen funktionieren bei mir nicht unmittelbar, da es hier leider keine Code Umgebung im Kommentar gibt und damit die Hochkommas nicht funktionieren.  
          
        Meine Lösung sieht derzeit so aus:  
          
        foreach ($iterator as $key=>$value) {  
        // ordner ".." und "." ignorieren  
        if(substr($key, -2)!=".." && substr($key, -1)!=".")  
        {  
        $zip->addFile(realpath($key), $key) or die ("ERROR: Kann Datei nicht anfuegen: $key");  
        }  
        }  
          
        Was leider noch nicht klappt, sind leere Ordner. Die werden bisher ausgelassen und rekursives Blacklisting von Ordnern. Eine einzelne Datei lässt sich wie oben beschrieben mit einem Array blacklisten. Bei einem Ordner mit Unterordern klappt es so noch nicht.  
        Wenn ich Ordner "foo/bar" blackliste und den in\_array() Vergleich durchführe, dann würde eine Datei "foo/bar/goo.css" nicht matchen und ins ZIP übernommen.
        
        31\. Mar 2016 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
        
        Jon
        
        Abschließend hätte ich noch ne Variante vorzuschlagen, die bei mir prima läuft.  
          
        Nach meinen Tests wird damit alles ins Archiv übernommen. Auch leere Dateien und Ordner. Auch so "verrückte" Namen wie foo.. oder A. Die Ordner . und .. werden dagegen ausgelassen.  
          
        \[code\]  
        foreach ($iterator as $key=>$value) {  
        // ist es ein ordner?  
        if(!is\_dir($key)) { // nein  
        $zip->addFile(realpath($key), $key) or die ("ERROR: Kann Datei nicht anfuegen: $key");  
        }  
        // ist der ordner leer?  
        elseif (count(scandir($key)) addEmptyDir(substr($key, -1\*strlen($key),strlen($key)-1));  
        }  
        }  
        \[/code\]  
          
        Vielen Dank für die Inspiration. :)
        
        31\. Mar 2016 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
        
        Jon
        
        Sorry, aber das ist bei letzten Post was schief gegangen. Evtl. kann man den letzten Code einfach löschen.  
          
        Hier noch ein mal.  
          
        (Leider müssen alle Hochkommas manuell korrigiert werden, weil das hier irgendwie automatisch ersetzt wird.)  
          
        \[code\]  
        foreach ($iterator as $key=>$value) {  
        // ist es ein ordner?  
        if(!is\_dir($key)) { // nein  
        $zip->addFile(realpath($key), $key) or die („ERROR: Kann Datei nicht anfuegen: $key“);  
        }  
        // ist der ordner leer?  
        elseif (count(scandir($key)) addEmptyDir(substr($key, -1\*strlen($key),strlen($key)-1));  
        }  
        }  
        \[/code\]
        
        31\. Mar 2016 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
            
            Jon
            
            Ok, offensichtlich liegt es nicht an mir, sondern daran, dass die Software hier den Code verändert. Wahrscheinlich ein Sicherheitsfeature. Den entsprechenden Code Ausschnitt gibt es bei Pastebin.  
              
            http://pastebin.com/YbUbebBK  
              
            Btw.:  
            Wäre vielleicht keine schlechte Idee auf einer Seite, die sich auch mit Softwareentwicklung befasst, einen BBCode für \[code\] in den Kommentaren zu erlauben.  
            Cheers jd ;-)
            
            31\. Mar 2016 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Hallo Jon, da hast du Recht, das ist echt störend. Hast du evtl eine Empfehlung für die Kommentarbox? Ansonsten schonmal vielen Dank für das gute Snipped, ich werde es oben in deinem Namen ergänzen!  
                  
                Danke!  
                  
                Grüße  
                André
                
                31\. Mar 2016 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
                    
                    Jon
                    
                    Wenn du es verlinken willst, dann nimm bitte gleich diesen Link: http://pastebin.com/QzQptyTy  
                    Ich hatte zum ersten mal Pastbin benutzt und hatte es als Gast gepostet, was nicht veränderbar ist. Deswegen habe ich mir da einen Account gemacht und kann so Verbesserungen einpflegen.  
                      
                    Wegen den Kommentaren. Ich kenne mich nicht aus mit Wordpress, aber ne Suche nach "wordpress kommentar mit syntax highlighting" führte mich direkt zu: https://de.wordpress.org/plugins/syntax-highlighter-for-wp-editor/  
                    Das sieht schon vielversprechend aus. Bzw. einfach mal in den Plugins dort nach Syntax Highlighting suchen. Da gibt's bestimmt noch mehr.  
                      
                    Aber ich weiß nicht, ob es das Problem löst, dass die Validierungsfunktionen dieses Textfeldes bestimmte Codesequenzen filtert. Müsste man probieren.
                    
                    31\. Mar 2016 [Antworten](#)
                    
                
                *   ![](https://www.gravatar.com/avatar/db74b7097619adfb6f9e618749d4b1f5?s=75&d=mm&r=g)
                    
                    Jon
                    
                    Man lernt nie aus. Pastbin erlaubt das Anmelden mit "Trashmails", löscht diese dann aber nach einigen Stunden. Naja, eine weitere Account Leiche.  
                    Ich hab mich jetzt erneut angemeldet ;-) und mal meine persönliche Endversion gepostet:  
                    http://pastebin.com/1qmUyWYc  
                      
                    Getestet habe ich es neben einem Testordner an ca. 10.000 Dateien/Ordnern einer Joomla Installation. Dauerte ca. 40s auf dem Server und ist einwandfrei geworden. Wirklich ne super Sache für Backups, wenn man keinen Shell Zugang beim Hoster hat.  
                      
                    Vielen Dank noch mal für die Vorlage. Ich habe dich da auch erwähnt. ;)
                    
                    01\. Apr 2016 [Antworten](#)
                    
                    *   ![](https://www.gravatar.com/avatar/a0fdea05af407aed39b2317866103d4e?s=75&d=mm&r=g)
                        
                        Mike
                        
                        Hi,  
                        danke für den tollen Ansatz. Das Script läuft ohne Fehlermeldung durch, meldet Vollzug - ABER: Ich kann kein fertiges zip auf dem Server finden?!
                        
                        07\. Jan 2018 [Antworten](#)
                        

*   ![](https://www.gravatar.com/avatar/f3f85321afaae8a6fff3a265a64c9cfe?s=75&d=mm&r=g)
    
    Maurizio
    
    Habe das Problem gelöst:  
      
    Ich fange den string $key ab und prüfe, ob ein Punkt am Ende steht...  
      
    foreach ($iterator as $key=>$value) {  
    if(substr($key,-1) != ".")  
    $zip->addFile(realpath($key), $key) or die ("ERROR: Could not add file: $key");  
    }  
      
    Gruß
    
    13\. May 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Super, ich werde das oben im Code ergänzen! Vielen Dank
        
        15\. May 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f3f85321afaae8a6fff3a265a64c9cfe?s=75&d=mm&r=g)
    
    Maurizio
    
    Hallo Andre,  
      
    ja auch ich habe das gleiche Problem. In der gezippten Datei sind zwar alle Dateien drin, die ich haben wollte, ABER es sind ganz oben in der Liste zwei weitere Verzeichnisse zu sehen. Das eine mit einem Punkt, das zweite mit zwei Punkten.  
    Beim Entzippen kommt es sodann zu einem Fehler.  
      
    Gruß
    
    13\. May 2015 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/a7279258dda13803fd44c4a1bc5f49cc?s=75&d=mm&r=g)
    
    Julian
    
    Das Zippen funktioniert.  
    Ich habe jedoch ein anderes Problem. Die erstellte ZIP-Datei kann nach dem Download unter Win7 nicht geöffnet werden (das Fenster erschein leer) obwohl die ZIP-Datei 66,6MB groß ist. Unter MacOS bekomme ich die Datei mit einem Zusatzprogramm geöffnet, welches mir mitteilt, dass Ordern, die auf . oder .. enden nicht entpackt werden können. Okay, also Filter eingebaut und $key per echo ausgegeben. In der Anzeige erscheinen keine Ordner mehr mi . oder .. .... AAABER wenn ich nun wieder entzogen möchte, habe ich das gleiche Drama wie zuvor, plötzlich sind die . und .. Ordner doch in der ZIP-Datei drin...  
      
    // die maximale Ausführzeit erhöhen  
    ini\_set("max\_execution\_time", 500);  
      
    // Objekt erstellen und schauen, ob der Server zippen kann  
    $zip = new ZipArchive();  
    if ($zip->open("backup/moodledata.zip", ZIPARCHIVE::CREATE) !== TRUE) {  
    die ("Kann Archiv nicht oeffnen");  
    }  
      
    // Gehe durch die Ordner und füge alles dem Archiv hinzu  
    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("/home/www/xyz/files/moodledata/"));  
    foreach ($iterator as $key=>$value)  
    {  
    if(substr($key, -2)!="..")  
    {  
    if(substr($key, -1)!=".")  
    {  
    echo $key."";  
    $zip->addFile(realpath($key), $key) or die ("ERROR: Kann Datei nicht anfuegen: $key");  
    }  
    }  
    }  
    // speichert die Zip-Datei  
      
    $zip->close();  
      
    Hast Du evtl. einen Tipp für mich, was der Grund sein könnte?  
      
    Grüße Julian
    
    19\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hallo Julian, das ist ja ein seltsames Problem. Ich habe leider davon nichts gehört und kann dir dabei auch leider nicht helfen. Woher kommen diese Dateien/Ordner denn? Sind sie bei dir auf dem Space?
        
        24\. Mar 2015 [Antworten](#)
        
    
    *   ![](https://www.gravatar.com/avatar/da1b87ba22a662e6fa1ca9e22cbf1019?s=75&d=mm&r=g)
        
        Franco
        
        Ich bin mir bewusst, dass Julians Frage 4 Jahre alt ist ;-).  
        Aber vielleicht kommt auch nach dieser Zeit noch jemand auf diese Seite (so wie ich), den die Lösung interessiert.  
        Wie auch immer: Ich hatte das gleiche Problem wie Julian.  
        Die Ursache war bei mir, dass ich die erstellte ZIP-Datei als ASCII heruntergeladen habe. Diese Datei ließ sich dann nicht entpacken.  
        Wenn man im FTP-Programm als Übertragungstyp binär oder automatisch wählt, klappt anschließend das Entpacken der ZIP-Datei.  
        Grüße und danke für das Script!
        
        16\. Aug 2019 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/f25d16242a23d97727dca5222feefce0?s=75&d=mm&r=g)
    
    Steffen
    
    Leider funktioniert das mit dem Ausschliessen bestimmter Dateien bei mir nicht.  
    $blacklist = array('index.php,.htaccess,zip.php');  
      
    ...  
      
    if(!in\_array($key,$blacklist)) {  
    $zip->addFile(realpath($key), $key) or die ("ERROR: Could not add file: $key");  
    }  
      
    habe ich da etwas übersehen oder falsch geschrieben?  
      
    Grüße
    
    13\. Mar 2015 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Steffen, du hast einen Fehler in deinem Array. Das Ganze muss für jedes Element mit ' ' umschlossen sein. Also in deinem Beispiel statt:  
          
        $blacklist = array(‘index.php,.htaccess,zip.php’);  
        $blacklist = array(‘index.php', '.htaccess,zip.php’);  
          
        Grüße  
        André
        
        18\. Mar 2015 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/73694388783ace0157692e5d3177baf4?s=75&d=mm&r=g)
    
    andi
    
    Hat sich erledigt, hatte den localname nicht richtig.  
    http://www.jacobbates.com/blog/2012/04/24/corrupt-zip-files-in-windows-from-phps-ziparchive/
    
    15\. Aug 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Super, dann ist ja alles gut! Freut mich, dass das Skript dir weitergeholfen hat.  
          
        Grüße
        
        15\. Aug 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/73694388783ace0157692e5d3177baf4?s=75&d=mm&r=g)
    
    andi
    
    Hi, bei mir klappt es soweit,  
    nur möchte ich einen Ordner mit .xls Files zippen und wenn ich den Ordnerpfad direkt einbinde , klappts nicht.  
    (ordner realtiv ../../excelFiles/ )  
      
    Weiterhin zeigt er mir bei Windows ein korruptes Verzeichnis an, woran könnte das liegen ?  
    Grüße
    
    15\. Aug 2014 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/6c7de91e726852c652e9064d30be0b8d?s=75&d=mm&r=g)
    
    Detlef
    
    Hallo, vielen Dank für das Script. Klappt super.  
    Ich habe dazu noch eine Frage. Ist es möglich, das Archiv auf der selben Ebene zu beginnen zu lassen. Dein Script liegt bei mir in httpdocs, weil ich es nur so aufrufen kann. Ich würde gern den gesamten httpdocs-Ordner sichern. Es müssten also sozusagen die Dateien gesichert werden, die parallel zur Scriptdateien liegen und alle Unterordner.  
      
    Grüße
    
    12\. Jun 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        [Andre Knieriem](http://andreknieriem.de)
        
        Hi Detlef, ich weiß nicht, ob das geht aber du könntest probieren, dass an der Stelle  
          
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator("folder/"));  
          
        das "folder/" durch ein "./" zu ersetzen. Das heißt ja das jetzige Directory. Vielleicht geht das.  
          
        Grüße
        
        12\. Jun 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/6c7de91e726852c652e9064d30be0b8d?s=75&d=mm&r=g)
            
            Detlef
            
            Hallo, vielen Dank für deine Antwort. Das funktioniert leider nicht. Ich erhalte die Fehlermeldung "ERROR: Could not add file: ./.."  
            Die Varianten \* und . und ../ habe ich auch schon probiert.
            
            13\. Jun 2014 [Antworten](#)
            
            *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
                
                [Andre Knieriem](http://andreknieriem.de)
                
                Hallo Detlef, das dachte ich mir schon :( Schade, dann weiß ich leider keine gute Möglichkeit das zu tun. Oder hast du vielleicht shell\_exec Zugriff? Weil damit könntest du einfach shell\_exec(‘zip -9 -r ‘) machen oder so.  
                  
                Grüße  
                André
                
                13\. Jun 2014 [Antworten](#)
                
                *   ![](https://www.gravatar.com/avatar/6c7de91e726852c652e9064d30be0b8d?s=75&d=mm&r=g)
                    
                    Detlef
                    
                    Nö. Da versteh ich auch nichts von. Auf jeden Fall Danke. Falls ich etwas rausfinde (was ich nicht glaube) schreib ich es hier als Kommentar.  
                      
                    Grüße
                    
                    13\. Jun 2014 [Antworten](#)
                    

*   ![](https://www.gravatar.com/avatar/fde3f980ebabb9c76789935c21554ae7?s=75&d=mm&r=g)
    
    princip1
    
    Danke!! funktioniert bei mir ! Hat mir sehr geholfen!
    
    01\. Mar 2014 [Antworten](#)
    

*   ![](https://www.gravatar.com/avatar/e871081a4cfa51276e42e147f3e864a3?s=75&d=mm&r=g)
    
    [Sascha](http://www.cargointernational.de)
    
    Hi,  
      
    kann ich auch Ordner ausschließen und wenn ja wie?  
      
    Gruß und Danke
    
    02\. Feb 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi Sascha, das geht natürlich auch,  
          
        ich würde hierfür ein Array machen mit Ordnern oder Dateinamen, die auf der Blacklist sind. Also  
          
        $blacklist = array('Order1, index2.html,...');  
          
        Dann müsste es eigentlich reichen, wenn du in Zeile 14 dann guckst, ob das was gerade an der Reihe in der Blacklist ist und wenn nicht dann wird es zum Zip hinzugefügt.  
          
        Also ca so:  
        if(!in\_array($key,blacklist) { ...}  
          
        Grüße  
        André
        
        03\. Feb 2014 [Antworten](#)
        

*   ![](https://www.gravatar.com/avatar/393a0e8835afdb5644ff8d09ba226957?s=75&d=mm&r=g)
    
    [bormolino](http://mborm.net)
    
    Das Skript funktioniert bei mir leider nicht :(
    
    08\. Jan 2014 [Antworten](#)
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi, bekommst du eine Fehlermeldung? Hast du vielleicht einen Link zu der Seite, wo es nicht geht? Bei mir funktioniert das Skript noch reibungslos, gerade erst benutzt ;)  
          
        Grüße
        
        08\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/393a0e8835afdb5644ff8d09ba226957?s=75&d=mm&r=g)
            
            [bormolino](http://mborm.net)
            
            Nein, ich bekomme keine Fehlermeldung und in den Logs steht auch nichts.  
              
            Hier der Link: http://home.mborm.net/mbblog/zip.php
            
            08\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Hi, das hört sich seltsam an. Ist das error\_reporting bei dir vielleicht ausgestellt? Du könntest mal gucken, ob bei mir überhaupt zippen möglich ist.  
          
        $zip = new ZipArchive;  
        var\_dump($zip);  
          
        Wenn das leer ist, oder einen Fehler wirft, dann kann dein Server womöglich gar keine Zips erstellen.  
          
        Grüße
        
        09\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/393a0e8835afdb5644ff8d09ba226957?s=75&d=mm&r=g)
            
            [bormolino](http://mborm.net)
            
            Error reporting ist an.  
              
            Die Ausgabe lautet:  
              
            object(ZipArchive)#1 (5) { \["status"\]=> int(0) \["statusSys"\]=> int(0) \["numFiles"\]=> int(0) \["filename"\]=> string(0) "" \["comment"\]=> string(0) "" }
            
            09\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Das sieht richtig aus... Hm seltsam. Der Pfad zu deinem Ordner vielleicht falsch? In Zeile 12 muss der Ordner ja angepasst werden ;)  
          
        Grüße
        
        09\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/393a0e8835afdb5644ff8d09ba226957?s=75&d=mm&r=g)
            
            [bormolino](http://mborm.net)
            
            Nein, das stimmt alles.
            
            09\. Jan 2014 [Antworten](#)
            
    
    *   ![](https://www.gravatar.com/avatar/c89a6eaffb260a5fd4a05d7f9ea46032?s=75&d=mm&r=g)
        
        admin
        
        Dann weiß ich leider nicht mehr weiter. Du könntest höchstens noch probieren mit shell\_exec('zip -9 -r '). Das geht aber nur, wenn du die richtigen Rechte hast, deswegen ist das Php Skript ja so praktisch.
        
        10\. Jan 2014 [Antworten](#)
        
        *   ![](https://www.gravatar.com/avatar/393a0e8835afdb5644ff8d09ba226957?s=75&d=mm&r=g)
            
            [bormolino](http://mborm.net)
            
            Die richtigen Rechte habe ich und es klappt. Vielen Dank für deine Hilfe! :)
            
            10\. Jan 2014 [Antworten](#)
            

### Hinterlasse einen Kommentar

[Antworten abbrechen](#)

Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind markiert \*

Kommentar wird gespeichert

Danke für deinen Kommentar! Sobald er freigegeben wurde erscheint er hier.