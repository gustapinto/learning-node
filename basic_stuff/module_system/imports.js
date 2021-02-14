// The module system in Node is based on exports and imports
const importedThings = require('./exports.js')  // The require method imports the content of exports.js

let importedObj = importedThings.obj
let importedNewObj = importedThings.newObj

const port = process.env.PORT
const host = process.env.HOST

require('http')
    .createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain')
        res.write(`${importedObj.id}, ${importedObj.label} \n`)
        res.write(`${importedNewObj.id}, ${importedNewObj.label} \n`)
        res.end()
    })
    .listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`)
    })
