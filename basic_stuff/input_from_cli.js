const readline = require('readline').createInterface({
    input: process.stdin,  // Set input ...
    output: process.stdout,  // .. and output sources
})

let text = null

readline.question('Say something.', message => {  // Listen the comand line from a text
    text = message
    readline.close()
})

const port = process.env.PORT
const host = process.env.HOST

require('http')
    .createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain')
        res.write(`${text} \n`)
        res.end()
    })
    .listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`)
    })
