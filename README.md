WPG
===

> WPG
>   "Wallpaper Generator"

Or more accurately, the Gnome Desktop Cycling Wallpaper XML File Generator
Kind of a mouthful, eh?  That's why it's "wpg" and not "gdcwxfg"

Installation
------------
(Maybe one day when I actually get it pushed to NPM)
`npm install -g wpg`

Command Line Usage
------------------
`wpg` in a folder that has at least two images.
That was easy.

Programmatic Usage
------------------
    wpg = require("wpg")
    outXML = wpg.generateXMLFile()

`generateXMLFile()` has an optional argument which is the number of seconds
that each image is displayed.  The default is `1800`, or 30 minutes.

Written in coffeescript for the lulz
