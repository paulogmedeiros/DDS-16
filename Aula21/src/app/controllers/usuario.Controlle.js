const Usuario = require("../models/usuario")

class UsuarioController{
    postUsuario(req,res){
        console.debug("POST :: /usuario")
        const data = req.body;
       
        Usuario.inserir(data)
        .then(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
        .catch(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
    }

}

module.exports = new UsuarioController()

