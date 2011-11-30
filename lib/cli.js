#!/usr/bin/env node

var cwd, fs, number, outFile, theXML, wpg;

wpg = require("./wpg");

fs = require("fs");

number = 1800;

if (process.argv.length > 2) {
  if ((number = parseInt(process.argv[2])).toString() === "NaN") {
    throw new Error("Time argument pass is not a number!");
  }
  if (number < 5) throw new Error("Time per picture must be at least 6 seconds!");
}

theXML = wpg.generateXMLFile(number);

cwd = process.env.PWD;

outFile = cwd.split("/").slice(-1) + ".xml";

fs.writeFile("" + cwd + "/" + outFile, theXML, function(err) {
  if (err) throw err;
  return console.log("Success!");
});
