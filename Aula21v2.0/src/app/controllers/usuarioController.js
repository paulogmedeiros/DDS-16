const usuarioss = require("../models/usuario")

class UsuarioController{
    index(req,res){
        usuarioss.mostrarTudo().then(
            respostas =>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )
    }

    show(req, res){
        let {usuario_id} = req.params
        usuarioss.mostrarUsuario(usuario_id).then(
            respostas =>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )
    }
    
    create(req,res){
        let {nome, usuario, senha, usuario_tipo} = req.body
        usuarioss.Inserir(nome, usuario, senha, usuario_tipo).then(
            respostas =>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )
    }
    
    logar(req, res){
        let {usuario, senha} = req.body
        usuarioss.verificaUsuarioSenha(usuario, senha).then(
            respostas =>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )        
    }
}

module.exports = new UsuarioController()