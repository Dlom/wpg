fs = require "fs"

# imageTime:  How long it takes for each cycle.  In seconds.
# 1800 is 30 minutes.
generateXMLFile = (imageTime = 1800) ->
    startTime = """
      <starttime>
        <year>2009</year>
        <month>08</month>
        <day>04</day>
        <hour>00</hour>
        <minute>00</minute>
        <second>00</second>
      </starttime>
    """

    cwd = process.env.PWD

    imageTypes = [
        "gif"
        "png"
        "jpe?g"
        "svg"
        "bmp"
    ].join "|"

    randOrd = () ->
      Math.round(Math.random())-0.5

    imageRegex = new RegExp "\\.(#{imageTypes})$", "i"

    filesArray = fs.readdirSync cwd

    files = []

    for file in filesArray
        match = file.match(imageRegex)
        if match isnt null
            files.push file
    
    if not files.length or files.length < 2
        throw new Error "There must be at least two images in the folder!"

    files.sort randOrd

    transitions = ""

    for file, index in files
        next = if (index is files.length - 1) then files[0] else files[index + 1]
        staticXML = """
      <static>
        <duration>#{imageTime - 5}.0</duration>
        <file>#{cwd}/#{file}</file>
      </static>
      <transition>
        <duration>5.0</duration> <!-- 5 seconds -->
        <from>#{cwd}/#{file}</from>
        <to>#{cwd}/#{next}</to>
      </transition>
    """
        transitions += staticXML + "\n"

    """
    <background>
    #{startTime}
    #{transitions.trim()}
    </background>
    """
    
exports.generateXMLFile = generateXMLFile
