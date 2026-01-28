---
title: 'TYPO3: FAL in eigener Extension benutzen'
date: '2014-09-11T16:40:42.000Z'
slug: typo3-fal-in-eigener-extension-benutzen
tags:
  - typo3
  - fluid
  - extbase
  - mehrere
  - multiple
  - fal
description: "Mit den folgenden Codeschnipseln wird gezeigt, wie man FAL Links und Bilder in einer eigenen Extension nutzen kann.\next_tables.sql \r\n\r\n&lt;f:for each=\"{images}\" as=\"image\"&gt;\r\n\r\n        Ausgabe Bild:&lt;br /&gt;\r\n        &lt;f:image src=\"{image.image.originalResource.originalFile.uid}\" alt=\"\" /&gt;&lt;br /&gt;\r\n        &lt;f:image src=\"{image.image.uid}\" alt=\"\" treatIdAsReference=\"TRUE\" /&gt;&lt;br /&gt;&lt;br /&gt;\r\n\r\n        Ausgabe Links\r\n        &lt;f:for each=\"{images.files}\" as=\"file\"&gt;                           \r\n                &lt;p&gt;{file.originalResource.originalFile.title}&lt;/p&gt;\r\n        &lt;/f:for&gt;\r\n\r\n&lt;/f:for&gt;\r\n Template \r\nclass ImagesController extends \\TYPO3\\CMS\\Extbase\\Mvc\\Controller\\ActionController {\r\n        // ..\r\n        public function listAction() {\r\n                $images = $this-&gt;imagesRepository-&gt;findAll();\r\n                $this-&gt;view-&gt;assign('images', $images);           \r\n        }\r\n        // ..\r\n}\r\n Controller \r\nclass Images extends \\TYPO3\\CMS\\Extbase\\DomainObject\\AbstractEntity {\r\n        // ...\r\n        \r\n        /**\r\n         * Image\r\n         * @var \\TYPO3\\CMS\\Extbase\\Domain\\Model\\FileReference\r\n         */\r\n        protected $image;\r\n\r\n        /**\r\n         * Files\r\n         * @var \\TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage&lt;\\TYPO3\\CMS\\Extbase\\Domain\\Model\\FileReference&gt;\r\n         */\r\n        protected $files;\r\n        \r\n        // ...\r\n        \r\n        /**\r\n         * Returns the image\r\n         *\r\n         * @return \\TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage&lt;\\TYPO3\\CMS\\Extbase\\Domain\\Model\\FileReference&gt; $image\r\n         */\r\n        public function getImage() {\r\n                return $this-&gt;image;\r\n        }\r\n\r\n        /**\r\n         * Sets the image\r\n         *\r\n         * @param \\TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage&lt;\\TYPO3\\CMS\\Extbase\\Domain\\Model\\FileReference&gt; $image\r\n         * @return void\r\n         */\r\n        public function setImage($image) {\r\n                $this-&gt;image = $image;\r\n        }\r\n\r\n        /**\r\n         * Returns the files\r\n         *\r\n         * @return \\TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage&lt;\\TYPO3\\CMS\\Extbase\\Domain\\Model\\FileReference&gt; $files\r\n         */\r\n        public function getFiles() {\r\n                return $this-&gt;files;\r\n        }\r\n\r\n        /**\r\n         * Sets the files\r\n         *\r\n         * @param \\TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage&lt;\\TYPO3\\CMS\\Extbase\\Domain\\Model\\FileReference&gt; $files\r\n         * @return void\r\n         */\r\n        public function setFiles($files) {\r\n                $this-&gt;files = $files;\r\n        }\r\n        \r\n        // ...\r\n}\r\n Model \r\n$TCA['tx_falusage_domain_model_images'] = array(\r\n        // ...\r\n        'image' =&gt; array(\r\n                'exclude' =&gt; 1,\r\n                'label' =&gt; 'Image',\r\n                'config' =&gt; \\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::getFileFieldTCAConfig('image', array(\r\n                        'appearance' =&gt; array(\r\n                                'createNewRelationLinkTitle' =&gt; 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'\r\n                        ),\r\n                        'minitems' =&gt; 0,\r\n                        'maxitems' =&gt; 1,\r\n                ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']),\r\n        ),\r\n        'files' =&gt; array(\r\n                'exclude' =&gt; 1,\r\n                'label' =&gt; 'Files',\r\n                'config' =&gt; \\TYPO3\\CMS\\Core\\Utility\\ExtensionManagementUtility::getFileFieldTCAConfig('files', array(\r\n                        'appearance' =&gt; array(\r\n                                'createNewRelationLinkTitle' =&gt; 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'\r\n                        ),\r\n                ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']),\r\n        ),\r\n        // ...\r\n);\r\n TCA \r\nCREATE TABLE tx_falusage_domain_model_images (\r\n        image varchar(255) DEFAULT '' NOT NULL,\r\n        files varchar(255) DEFAULT '' NOT NULL,\r\n        ...\r\n);\r\n Achtung!\nMit Multilang hat FAL gerade in der aktuellsten Version (6.2.4) noch Fehler (https://forge.typo3.org/issues/57272\nIm Bugtracker steht aber ganz unten, was man tun muss, um den Fehler zu beheben. Habe ich selbst machen müssen, getestet und es funktioniert."
image: /fileadmin/_processed_/0/a/csm_typo3_81d1ef1672.png
demo_url: null
download_url: null
---

Mit den folgenden Codeschnipseln wird gezeigt, wie man FAL Links und Bilder in einer eigenen Extension nutzen kann.

**ext\_tables.sql**

```markup


<f:for each="{images}" as="image">

        Ausgabe Bild:<br />
        <f:image src="{image.image.originalResource.originalFile.uid}" alt="" /><br />
        <f:image src="{image.image.uid}" alt="" treatIdAsReference="TRUE" /><br /><br />

        Ausgabe Links
        <f:for each="{images.files}" as="file">                           
                <p>{file.originalResource.originalFile.title}</p>
        </f:for>

</f:for>

```

**Template**

```php

class ImagesController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {
        // ..
        public function listAction() {
                $images = $this->imagesRepository->findAll();
                $this->view->assign('images', $images);           
        }
        // ..
}

```

**Controller**

```php

class Images extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {
        // ...
        
        /**
         * Image
         * @var \TYPO3\CMS\Extbase\Domain\Model\FileReference
         */
        protected $image;

        /**
         * Files
         * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference>
         */
        protected $files;
        
        // ...
        
        /**
         * Returns the image
         *
         * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $image
         */
        public function getImage() {
                return $this->image;
        }

        /**
         * Sets the image
         *
         * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $image
         * @return void
         */
        public function setImage($image) {
                $this->image = $image;
        }

        /**
         * Returns the files
         *
         * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $files
         */
        public function getFiles() {
                return $this->files;
        }

        /**
         * Sets the files
         *
         * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $files
         * @return void
         */
        public function setFiles($files) {
                $this->files = $files;
        }
        
        // ...
}

```

**Model**

```php

$TCA['tx_falusage_domain_model_images'] = array(
        // ...
        'image' => array(
                'exclude' => 1,
                'label' => 'Image',
                'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('image', array(
                        'appearance' => array(
                                'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'
                        ),
                        'minitems' => 0,
                        'maxitems' => 1,
                ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']),
        ),
        'files' => array(
                'exclude' => 1,
                'label' => 'Files',
                'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('files', array(
                        'appearance' => array(
                                'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'
                        ),
                ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']),
        ),
        // ...
);

```

**TCA**

```sql

CREATE TABLE tx_falusage_domain_model_images (
        image varchar(255) DEFAULT '' NOT NULL,
        files varchar(255) DEFAULT '' NOT NULL,
        ...
);

```

**Achtung!**

Mit Multilang hat FAL gerade in der aktuellsten Version (6.2.4) noch Fehler ([https://forge.typo3.org/issues/57272](https://forge.typo3.org/issues/57272)

Im Bugtracker steht aber ganz unten, was man tun muss, um den Fehler zu beheben. Habe ich selbst machen müssen, getestet und es funktioniert.