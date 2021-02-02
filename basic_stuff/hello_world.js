const http = require('http')  // Requires Node.js http library

const hostname = '0.0.0.0'  // Set localhost as host
const port = 80  // Set the host port

// Initialize the http server instance
const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-type', 'text/plain')
    response.end('Hello World')  // Close the response and add a argument to it
})

server.listen(port, hostname, () => {
    // Interpolates text using `string`
    console.log(`Server running at http://${hostname}:${port}/`)
})
