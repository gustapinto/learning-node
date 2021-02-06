const URL = require('url')

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
    .listen(80, '0.0.0.0', () => {
        console.log(`Server running at http://0.0.0.0:80/`)
    })