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
    /*let status = '';
    if(resut){
        status = 200
    }else{
        status= 404
    }*/
    const status = resut ? 200 : 404
    console.log(status)
    res.status(status).json(resut)
});

server.post('/sites',(req,res) => {
    const {name,site} = req.body;
    const id = lista[lista.length - 1].id + 1;
    const idTest = lista.length + 1;
    const newSite = {
        id:id,
        name:name,
        site:site
    }
    lista.push(newSite);
    console.log(id);
    console.log(idTest);

    return res.send().status(201);
})

server.put('/sites/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {name,site} = req.body;
    const index = lista.findIndex((index)=>{ return index.id === id })
    

    const status = index>=0 ? 200 : 400;

    if(index>=0){
        lista[index] = {id, name, site}
    }
    return res.json(lista[index]).status(status);
})

server.delete('/sites/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    
    const index = lista.findIndex((index)=>{ return index.id === id })
    const status = index>=0 ? 200 : 404;
    if(index>=0){
        lista.splice(index, 1);
    }
    return res.json().status(status)
})


server.listen(3000);