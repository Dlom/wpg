wpg = require "./wpg"
fs = require "fs"

theXML = wpg.generateXMLFile()

cwd = process.env.PWD

outFile = cwd.split("/")[-1..-1] + ".xml"
fs.writeFile "#{cwd}/#{outFile}", theXML, (err) ->
    throw err if err
    console.log "Success!"
