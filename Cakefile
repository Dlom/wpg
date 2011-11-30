{exec} = require "child_process"

task "build", "Build the .coffee into .js", () ->
    exec "coffee --compile --output lib/ src/", (err, stdout, stderr) ->
        throw err if err
        if stdout or stderr
            console.log stdout + stderr
