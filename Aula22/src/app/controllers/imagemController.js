const Imagem = require("../models/imagem")

class ImagemController{
    index(req,res){
        console.debug("GET :: /sites")
        Imagem.mostrarTodos().then(
            respostas =>{
            res.status(respostas[0]).json(respostas[1])
        }).catch(
            respostas =>{
            res.status(respostas[0]).json("Erro:"+respostas[1].errno)
        })
    }

    //Inserindo uma imagem
    create(req, res){
        let alternativo = req.body.alternativo
        let nomeImagem = req.files.imagem.name
        nomeImagem = nomeImagem.split('.')
        let extensao = nomeImagem[nomeImagem.length-1]
        // O model retorne uma promessa o then é caso positivo e o catch negativo
        if(extensao === "jpg" || extensao === "png"){
            nomeImagem = new Date().getTime() + "." + extensao
            let arquivo = req.files.imagem
            
            Imagem.inserir(arquivo, alternativo, nomeImagem).then(
                respostas=>{
                    res.status(respostas[0]).json(respostas[1])
                }
            ).catch()
                respostas=>{
                    res.status(respostas[0]).json("Erro:"+respostas[1].errno)
            }
        }   
        else{
            res.status(415).json({message:"Arquivo não suportado"})
        }
    }

    updatesImg(req, res){
        const alternativo = req.body.alternativo
        const id = parseInt(req.params.id)
        Imagem.update(alternativo, id).then(
            respostas=>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch()
            respostas=>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
        }
    }
    deleteImg(req, res){        
        const id = parseInt(req.params.id)
        Imagem.delete(id).then(
            respostas=>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch()
            respostas=>{
                res.status(respostas[0]).json("Erro:"+respostas[1].errno)
        }
    }
}

module.exports = new ImagemController()