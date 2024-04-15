const express = require("express")
const routes = require("./routes")
const fileUpload = require("express-fileupload")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }
    
    middlewares(){
        // Middleware para analisar JSON no corpo das requisições
        this.server.use(express.json())

        this.server.use(express.static("public"))

        //fazer uso do file upload
        this.server.use(fileUpload())

        this.server.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.server.use(routes)
    }
}

//const app = new App()
module.exports = new App().server
