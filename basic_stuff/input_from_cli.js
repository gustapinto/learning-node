const readline = require('readline').createInterface({
    input: process.stdin,  // Set input ...
    output: process.stdout,  // .. and output sources
})

let text = null

readline.question('Say something.', message => {  // Listen the comand line from a text
    text = message
    readline.close()
})

require('http')
    .createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain')
        res.write(`${text} \n`)
        res.end()
    })
    .listen(80, '0.0.0.0', () => {
        console.log(`Server running at http://0.0.0.0:80/`)
    })
