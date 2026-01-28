---
title: 'Google Maps: Wie mache ich das embedded Iframe responsive?'
date: '2014-10-30T17:57:28.000Z'
slug: google-maps-wie-mache-ich-das-embedded-iframe-responsive
tags:
  - '237'
  - '259'
  - '554'
  - '555'
description: "Hat man eine Google Map via iframe eingebunden und möchte das Ganze responsive haben, so geht das mit folgendem CSS und HTML Code. \r\n.google-maps {\r\n    position: relative;\r\n    padding-bottom: 75%; // This is the aspect ratio\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n.google-maps iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n}\r\n  \r\n&lt;div class=\"google-maps\"&gt;\r\n    &lt;iframe src=\"https://www.google.com/maps/embed?.....\"&gt;&lt;/iframe&gt;\r\n&lt;/div&gt;\r\n \n.google-maps {\n    position: relative;\n    padding-bottom: 75%; // This is the aspect ratio\n    height: 0;\n    overflow: hidden;\n}\n.google-maps iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\nDemo\n\n\n"
image: /fileadmin/_processed_/0/0/csm_css_b1ca039252.png
demo_url: null
download_url: null
---

Hat man eine Google Map via iframe eingebunden und möchte das Ganze responsive haben, so geht das mit folgendem CSS und HTML Code.

```

.google-maps {
    position: relative;
    padding-bottom: 75%; // This is the aspect ratio
    height: 0;
    overflow: hidden;
}
.google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}
```

```

<div class="google-maps">
    <iframe src="https://www.google.com/maps/embed?....."></iframe>
</div>
```

<style></p> <p>.google-maps {</p> <p> position: relative;</p> <p> padding-bottom: 75%; // This is the aspect ratio</p> <p> height: 0;</p> <p> overflow: hidden;</p> <p>}</p> <p>.google-maps iframe {</p> <p> position: absolute;</p> <p> top: 0;</p> <p> left: 0;</p> <p> width: 100% !important;</p> <p> height: 100% !important;</p> <p>}</p> <p></style>

**Demo**

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160843.9742697086!2d6.967322349999988!3d50.95724495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259169ab2fe5%3A0x42760fc4a2a77f0!2zS8O2bG4!5e0!3m2!1sde!2sde!4v1414684502027" width="800" height="500" frameborder="0" style="border:0"></iframe>