const express = require('express');
const mysql = require('mysql2');
const server = express();
const fileUpload = require('express-fileupload')


server.use(fileUpload())
server.use(express.json())
server.use(express.urlencoded({extended:false}))
server.use(express.static("public"))

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'painel'
})

conexao.connect((erro)=>{
    // if(erro){
    //     console.log(erro)
    // }else{
    //     console.log('Conexão realizada com sucesso')
    // }
    if(erro) throw erro
    console.log('Conexão realizada com sucesso')
})

let lista = [
    {id:1, name:'youtube', site:'https://www.youtube.com/'},
    {id:2, name:'wikipedia', site:'https://www.wikipedia.org/'},
    {id:3, name:'reddit', site:'https://www.reddit.com/?rdt=51086'},
]

//Raiz do painel
server.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/painel.html")
})

//Painel lateral
server.get('/lateral',(req,res)=>{
    res.sendFile(__dirname + "/public/lateral.html")
})

//Rota de envio de imagens
server.post('/imagens',(req,res)=>{
    let alternativo = req.body.alternativo
    console.log(alternativo)
    let nomeImagem = req.files.imagem.name;
    nomeImagem = nomeImagem.split('.');
    nomeImagem = new Date().getTime()+"."+nomeImagem[nomeImagem.length-1]
    let sql = `INSERT INTO anuncios (alternativo,caminho) VALUE ("${alternativo}","${nomeImagem}")`
    conexao.query(sql, (erro,retorno)=>{
        if(erro) throw erro
        req.files.imagem.mv(__dirname + "/public/img/" + nomeImagem)
    })
    res.json()
})

server.get('/sites',(req,res) => {
    console.debug("Get :: /sites", lista)
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
    console.debug("Get :: /sites/:id", resut)
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
    console.debug("Post :: /sites", newSite)
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
    console.debug("Put :: /sites/:id")
    return res.json(lista[index]).status(status);
})

server.delete('/sites/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    
    const index = lista.findIndex((index)=>{ return index.id === id })
    const status = index>=0 ? 200 : 404;
    if(index>=0){
        lista.splice(index, 1);
    }
    console.debug("Delete :: /sites/:id")
    return res.json().status(status)
})


server.listen(3000);