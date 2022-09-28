/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Word!');
});

server.listen(port, hostname, () => {
    console.log("Servidor rodando!")
});*/

const express = require('express')
const app = express()

const path = require('path')
const router = express.Router()

router.get('/', function(req,res){
    res.sendFile(path.joinI(__dirname+'/index.html'))
})

app.use('/', router)
app.listen(process.env.port || 3000)

console.log('server rodando')