// Requires node filesystem module, this enables Node.js to act as a file server
const fs = require('fs')

let files = ['file1.txt', 'file2.txt', 'file3.txt']

// Creating and updating files
//
// The filesystem has three major methods of creating and updating files, all
//  the following methods acts mainly as file updaters and if the file does not
//  exists they will create it
fs.writeFile(files[0], 'Hello file', (error) => {
    console.log(`Created file ${files[0]}`)
})

fs.appendFile(files[1], 'Hello file', (error) => {
    console.log(`Created file ${files[1]}`)
})

fs.open(files[2], 'w', (error, file) => {  // Creates a empty file
    console.log(`Created file ${files[2]}`)
})

files.forEach(file => {
    // Removing files with filesystem 'unlink'
    fs.unlink(file, (error) => {
        console.log(`Removed file ${file}`)
    })
});

// The filesystem can also be combined to the 'http' module to let the server
//  hosts static files and more complex pages
require('http')
    .createServer((req, res) => {
        fs.readFile('index.html', (error, data) => {  // Reads a html file
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')  // Sets text/html
            res.write(data)  // Writes the readFile data to the page
            res.end()
        })
    })
    .listen(80, '0.0.0.0', () => {
        console.log(`Server running at http://0.0.0.0:80/`)
    })
