const Imagem = require("../models/imagem")

class ImagemController{
    //Mostrar lista de imagens
    index(req,res){
        console.debug("GET :: /sites")
        return res.json(sites)
    }

    //Inserindo uma imagem
    create(req,res){
        let alternativo = req.body.alternativo
        let nomeImagem = req.files.imagem.name
        //Separando extensão do arquivo
        nomeImagem = nomeImagem.split('.')
        //pegando extensão
        let extensao = nomeImagem[nomeImagem.length-1]
        if(extensao === "jpeg"){
            nomeImagem = new Date().getTime() + "." + extensao
            let arquivo = req.files.imagem
            Imagem.inserir(arquivo,alternativo,nomeImagem)
            res.json()
        }else{
            //Erro 415 é tipo de arquivo nao suportado
            res.status(415).json({message:"Tipo de arquivo não suportado"})
        }
        
    }
}

module.exports = new ImagemController()