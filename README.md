Editable
========

A little tool to enable live editing on a static webpage.

## How To Use
There are three parts to making this work:
- Some minor HTML
- A jQuery plugin
- Three (3) PHP files

## Setup
1. Somewhere on your page you're going to need three(3) buttons: Edit, Cancel, and Save. Give them their appropriate respective Ids: editable-edit, editable-cancel, and editable-save.
2. You're also going to need a div with class editable.
3. In save.php replace set the variable $file to the name of your HTML file.
4. Next just include the jQuery plugin in the page and you're done.
