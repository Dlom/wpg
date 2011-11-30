{exec} = require "child_process"
fs = require "fs"

task "build", "Build the .coffee into .js", () ->
    exec "coffee -cb --output lib/ src/", (err, stdout, stderr) ->
        throw err if err
        if stdout or stderr
            console.log stdout + stderr
        fs.readFile "lib/cli.js", (err, data) ->
            throw err if err
            newFile = """
            #!/usr/bin/env node
            
            #{data}
            """
            fs.writeFile "lib/cli.js", newFile, (err) ->
                throw err if err
                console.log "Success!"
