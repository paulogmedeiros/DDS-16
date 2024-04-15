const express = require("express")
const router = express.Router
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/sitesController")

routes.get("/", (req,res)=>{
    //res.json({teste:"teste"})
    //res.sendFile(__dirname + "/../public/desafio.html")
    res.sendFile("desafio.html",{root:'./public'})
    
    //Comando que permite acessar o diretório com arquivos staticos

})

routes.get("/sites", sites.index)
routes.get("/sites/:id", sites.show)
routes.post("/sites", sites.create)
routes.put("/sites/:id", sites.update)
routes.delete("/sites/:id", sites.destroy)

module.exports = routes