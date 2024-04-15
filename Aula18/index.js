/*let status = ""
    if(site){
        status = 200
    }else{
        status = 404
    }*/

const express = require("express")
const server = express()
const mysql = require("mysql2")
const fileUpload = require("express-fileupload")

server.use(fileUpload())
server.use(express.json())
server.use(express.urlencoded({extended:false}))

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"painel"
})

server.use(express.static("public"))

conexao.connect(function(error){
    if(error) throw error
        console.log("Conexão realizada com sucesso")
})

let sites = [
    {id:1, name:"YOUTUBE", site:"https://www.youtube.com/"},
    {id:2, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:3, name:"TINKERCAD", site:"https://www.tinkercad.com/"}
]

server.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/desafio.html")
})

server.get("/lateral", (req,res) =>{
    res.sendFile(__dirname + "/public/lateral.html")
})

server.post("/imagens", (req,res)=>{
    let alternativo = req.body.alternativo
    let nomeImagem = req.files.imagem.name
    nomeImagem = nomeImagem.split('.')
    nomeImagem = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1]
    
    let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE('${alternativo}','${nomeImagem}')`
    
    conexao.query(sql, function(error, retorno){
        if(error) throw error
        req.files.imagem.mv(__dirname + "/public/img/" + nomeImagem)
    })    
    res.json()
})

server.get("/sites", (req,res)=>{
    return res.json(sites)
})

server.get("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(sites){
        return sites.id === id
    })

    const status = site ? 200:404 //Operador 

    console.log(site)
    return res.status(status).json(site)
})

server.post("/sites",(req,res)=>{
    const {name,site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id,name:name,site:site}

    sites.push(newSite)

    return res.status(201).json(newSite)
})

server.put("/sites/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    const{name, site} = req.body
    const index = sites.findIndex(function(sites){
        return sites.id === id
    })

    const status = index >= 0 ? 200:400

    if(index >= 0){
        sites[index] = {id, name, site}
    }

    return res.status(status).json(sites[index])
})

server.delete("/sites/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const index = sites.findIndex(function(sites){
        return sites.id === id
    })
    const status = index >= 0 ? 200:404
    if(index >= 0){
        sites.splice(index, 1);
    }
    return res.status(status).json()
})

server.listen(3000)