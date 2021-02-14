const URL = require('url')

const port = process.env.PORT
const host = process.env.HOST

require('http')
    .createServer((req, res) => {
        let url = URL.parse(req.url, true)  // Uses the url module to parse the request url

        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain')
        res.write(`Host: ${url.host} \n`)
        res.write(`Path name: ${url.pathname} \n`)
        res.write(`Search: ${url.search} \n`)
        res.end()
    })
    .listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`)
    })