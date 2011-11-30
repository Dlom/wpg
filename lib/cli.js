(function() {
  var cwd, fs, outFile, theXML, wpg;

  wpg = require("./wpg");

  fs = require("fs");

  theXML = wpg.generateXMLFile();

  cwd = process.env.PWD;

  outFile = cwd.split("/").slice(-1) + ".xml";

  fs.writeFile("" + cwd + "/" + outFile, theXML, function(err) {
    if (err) throw err;
    return console.log("Success!");
  });

}).call(this);
