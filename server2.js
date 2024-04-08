const express = require('express')
const morgan = require('morgan')

const server = express();

server.listen(3001);


server.use(morgan('Método = :method | Status = :status | Url = :url'));

server.get('/', (req, res)=>{

    res.send('<h1>TESTE</h1>')
     })