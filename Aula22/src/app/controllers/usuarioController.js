const usuarioss = require("../models/usuario")
const jwt = require("jsonwebtoken")
const secret = "MinhaSenha"
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
                let usuario_id = respostas[2]
                let usuario_tipo = respostas[3]
                let token = ''
                if(respostas[0] === 200){
                    token = jwt.sign({usuario_id,usuario_tipo},secret,{expiresIn:120})
                }
                res.status(respostas[0]).json({token})
            }
        ).catch(
            respostas =>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
            }
        )        
    }

    verificarToken(req,res,next){
        const token = req.headers['x-access-token']
        jwt.verify(token,secret,(erro,decoded) => {
            if(erro){
                return res.status(401).json("Usuário não autenticado")
            }else{
                req.usuario_id = decoded.usuario_id
                req.usuario_tipo = decoded.usuario_tipo
                next()
            }
        })
    }
}

module.exports = new UsuarioController()