const express = require("express")
const router = express.Router
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/sitesController")
const imagens = require("./app/controllers/imagemController")
const aulas = require("./app/controllers/aulasController")
const usuarios = require("./app/controllers/usuarioController")

routes.get("/", (req,res)=>{
    //res.json({teste:"teste"})
    //res.sendFile(__dirname + "/../public/desafio.html")
    res.sendFile("desafio.html",{root:'./public'})
    
    //Comando que permite acessar o diretório com arquivos staticos

})

routes.get("/lateral", (req,res)=>{
    //res.json({teste:"teste"})
    //res.sendFile(__dirname + "/../public/desafio.html")
    res.sendFile("lateral.html",{root:'./public'})
    
    //Comando que permite acessar o diretório com arquivos staticos
})

routes.get("/aulass", (req,res)=>{
    res.sendFile("aula.html",{root:'./public'})
})


routes.post("/aulas", aulas.create)
routes.get("/aulas", aulas.index)
routes.put("/aulas/:id", aulas.updatesAulas)
routes.delete("/aulas/:id", aulas.deleteAulas)

routes.post("/imagens", imagens.create)
routes.get("/imagens", imagens.index)
routes.put("/imagens/:id", imagens.updatesImg)
routes.delete("/imagens/:id", imagens.deleteImg)

routes.get("/sites", sites.index)
routes.get("/sites/:id", sites.show)
routes.post("/sites", sites.create)
routes.put("/sites/:id", sites.update)
routes.delete("/sites/:id", sites.destroy)

routes.post("/usuarios", usuarios.create)
routes.post("/logar", usuarios.logar)
routes.get("/usuarios", usuarios.index)
routes.get("/usuarios/:usuario_id", usuarios.show)

module.exports = routes