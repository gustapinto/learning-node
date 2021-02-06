// The url module can be used to create a basic static file handling router
const http = require('http')
const URL = require('url')
const fs = require('fs')

const port = 80
const host = '0.0.0.0'

let server = http.createServer((req, res) => {
    let url = URL.parse(req.url, true)
    let filename = './html/' + url.pathname + '.html'

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-type': 'text/plain'})
            res.write('404 Not Found')
            return res.end()
        }

        res.writeHead(200, {'Content-type': 'text/html'})
        // res.setHeader('Content-type', 'text/html')
        res.write(data)
        return res.end()
    })
})

server.listen(port, host, () => {
    console.log(`Server running at http://${port}:${host}/`)
})