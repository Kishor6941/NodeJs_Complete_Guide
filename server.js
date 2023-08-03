const http = require('http');
const fs = require('fs')
// CREATE SERVER
const readFile =  fs.readFileSync('./template/index.html')
const server = http.createServer((req,res) => {
    console.log('A new request received');
    res.end(readFile)
})


//START SERVER

server.listen(5000,'127.0.0.1',() => {
    console.log('server has started');
})