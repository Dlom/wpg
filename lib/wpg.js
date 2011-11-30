(function() {
  var fs, generateXMLFile;

  fs = require("fs");

  generateXMLFile = function(imageTime) {
    var cwd, file, files, filesArray, imageRegex, imageTypes, index, match, next, randOrd, startTime, staticXML, transitions, _i, _len, _len2;
    if (imageTime == null) imageTime = 1800;
    startTime = "<starttime>\n  <year>2009</year>\n  <month>08</month>\n  <day>04</day>\n  <hour>00</hour>\n  <minute>00</minute>\n  <second>00</second>\n</starttime>";
    cwd = process.env.PWD;
    imageTypes = ["gif", "png", "jpe?g", "svg", "bmp"].join("|");
    randOrd = function() {
      return Math.round(Math.random()) - 0.5;
    };
    imageRegex = new RegExp("\\.(" + imageTypes + ")$", "i");
    filesArray = fs.readdirSync(cwd);
    files = [];
    for (_i = 0, _len = filesArray.length; _i < _len; _i++) {
      file = filesArray[_i];
      match = file.match(imageRegex);
      if (match !== null) files.push(file);
    }
    if (!files.length || files.length < 2) {
      throw new Error("There must be at least two images in the folder!");
    }
    files.sort(randOrd);
    transitions = "";
    for (index = 0, _len2 = files.length; index < _len2; index++) {
      file = files[index];
      next = index === files.length - 1 ? files[0] : files[index + 1];
      staticXML = "<static>\n  <duration>" + (imageTime - 5) + ".0</duration>\n  <file>" + cwd + "/" + file + "</file>\n</static>\n<transition>\n  <duration>5.0</duration> <!-- 5 seconds -->\n  <from>" + cwd + "/" + file + "</from>\n  <to>" + cwd + "/" + next + "</to>\n</transition>";
      transitions += staticXML + "\n";
    }
    return "<background>\n" + startTime + "\n" + (transitions.trim()) + "\n</background>";
  };

  exports.generateXMLFile = generateXMLFile;

}).call(this);
