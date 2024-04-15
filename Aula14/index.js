const express = require('express');
const server = express();

server.use(express.json())

let lista = [
    {id:1, name:'youtube', site:'https://www.youtube.com/'},
    {id:2, name:'wikipedia', site:'https://www.wikipedia.org/'},
    {id:3, name:'reddit', site:'https://www.reddit.com/?rdt=51086'},
]

server.get('/sites',(req,res) => {
    res.json(lista)
});

server.get('/sites/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const resut = lista.find(function(lista) {
        return lista.id === id;
    });
    let status = '';
    if(resut){
        status = 200
    }else{
        status= 404
    }
    console.log(status)
    res.status(status).json(resut)
});


server.listen(3000);