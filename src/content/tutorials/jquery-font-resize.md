---
title: jQuery Font Resize
date: '2011-07-26T10:24:48.000Z'
slug: jquery-font-resize
tags:
  - jquery
  - font-resizer
  - font-size
  - font-sizer
description: "\n/* jQuery Font Resize by Andre Knieriem*/\njQuery(function(){\n\tjQuery('.size-now').click(function(){\n\t\tvar ourText = jQuery('.tut-text');\n\t\tvar currFontSize = ourText.css('fontSize');\n\t\tvar finalNum = parseFloat(currFontSize, 10);\n\t\tif(this.id == 'large') {\n\t\t\tfinalNum += 1;\n\t\t}\n\t\telse if (this.id == 'small'){\n\t\t\tfinalNum -=1;\n\t\t}\n\t\tourText.css('fontSize', finalNum);\n\t\treturn false;\n\t});\n});\n\n\nFür mein gerade laufendes Projekt brauchte ich eine Funktion, die den Schriftgrad des Hauptinhalts vergrößert, bzw. verkleinern kann, ohne die Seite neu zu laden. Deshalb habe ich mich rangesetzt und eine kleine Funktion geschrieben. Ich habe zu Anschauungszwecken die Funktion auf dieser Seite eingebaut. Mit folgenden Tasten könnt ihr sie testen.\n\n\n\tA- A+\n\nDas Ganze funktioniert wie folgt:\nHTML Gerüst \n&lt;div class=\"font-resize\"&gt;\n&lt;a href=\"#\" id=\"small\" class=\"size-now\"&gt;A-&lt;/a&gt;\n&lt;a href=\"#\" id=\"large\" class=\"size-now\"&gt;A+&lt;/a&gt;\n&lt;/div&gt;\n Einfach nur 2 Links mit derselben Klasse und unterschiedlicher ID, die jetzt vom Javascript ausgelesen wird:\njQuery \n/* jQuery Font Resize by Andre Knieriem*/\njQuery(function(){\n\tjQuery('.size-now').click(function(){\n\t\tvar ourText = jQuery('your text container');\n\t\tvar currFontSize = ourText.css('fontSize');\n\t\tvar finalNum = parseFloat(currFontSize, 10);\n\t\tif(this.id == 'large') {\n\t\t\tfinalNum += 1;\n\t\t}\n\t\telse if (this.id == 'small'){\n\t\t\tfinalNum -=1;\n\t\t}\n\t\tourText.css('fontSize', finalNum);\n\t\treturn false;\n\t});\n});\n Die Funktion geht los, wenn auf ein Objekt mit der Klasse \"size-now\" geklickt wurde. Danach wird die akuelle Font-Size des gewünschten Containers ermittelt. Dann wird geschaut ob das Objekt die Klasse large oder small hat und je nachdem wird die Font-size um 1px erhöht oder verringert. Das ist auch schon alles.\nIch hoffe das konnte einigen helfen. Vlt schreibe ich noch eine Erweiterung die einen Cookie setzt, um die Größe auf allen Seiten zu übernehmen."
image: /fileadmin/_processed_/d/4/csm_jquery_e571c76753.png
demo_url: null
download_url: null
---

<script type="text/javascript">

/\* jQuery Font Resize by Andre Knieriem\*/

jQuery(function(){

jQuery('.size-now').click(function(){

var ourText = jQuery('.tut-text');

var currFontSize = ourText.css('fontSize');

var finalNum = parseFloat(currFontSize, 10);

if(this.id == 'large') {

finalNum += 1;

}

else if (this.id == 'small'){

finalNum -=1;

}

ourText.css('fontSize', finalNum);

return false;

});

});

</script>

Für mein gerade laufendes Projekt brauchte ich eine Funktion, die den Schriftgrad des Hauptinhalts vergrößert, bzw. verkleinern kann, ohne die Seite neu zu laden. Deshalb habe ich mich rangesetzt und eine kleine Funktion geschrieben. Ich habe zu Anschauungszwecken die Funktion auf dieser Seite eingebaut. Mit folgenden Tasten könnt ihr sie testen.

[A-](/tutorials.html)[A+](/tutorials.html)

Das Ganze funktioniert wie folgt:

**HTML Gerüst**

```

<div class="font-resize">
<a href="#" id="small" class="size-now">A-</a>
<a href="#" id="large" class="size-now">A+</a>
</div>
```

Einfach nur 2 Links mit derselben Klasse und unterschiedlicher ID, die jetzt vom Javascript ausgelesen wird:

**jQuery**

```

/* jQuery Font Resize by Andre Knieriem*/
jQuery(function(){
	jQuery('.size-now').click(function(){
		var ourText = jQuery('your text container');
		var currFontSize = ourText.css('fontSize');
		var finalNum = parseFloat(currFontSize, 10);
		if(this.id == 'large') {
			finalNum += 1;
		}
		else if (this.id == 'small'){
			finalNum -=1;
		}
		ourText.css('fontSize', finalNum);
		return false;
	});
});
```

Die Funktion geht los, wenn auf ein Objekt mit der Klasse "size-now" geklickt wurde. Danach wird die akuelle Font-Size des gewünschten Containers ermittelt. Dann wird geschaut ob das Objekt die Klasse large oder small hat und je nachdem wird die Font-size um 1px erhöht oder verringert. Das ist auch schon alles.

Ich hoffe das konnte einigen helfen. Vlt schreibe ich noch eine Erweiterung die einen Cookie setzt, um die Größe auf allen Seiten zu übernehmen.