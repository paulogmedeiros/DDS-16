const Aulas =  require("../models/aulas")

class AulasController{

    postAulas(req,res){
        console.debug("POST :: /aulas")
        const data = req.body;
       
        if(data.chaveEntregue == "on"){
            data.chaveEntregue = 1;
        }else{
            data.chaveEntregue = 0;
        }

        Aulas.insertAulas(data)
        .then(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
        .catch(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
    }

    getAulas(req,res){
        console.debug("GET :: /aulas")

        Aulas.selectAulas()
        .then(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
        .catch(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
        
    }

    putAulas(req,res){
        console.debug("PUT :: /aulas")

        const data = req.body
        const id = parseInt(req.params.id)
        Aulas.updateAulas(data,id)
        .then(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
        .catch(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
    }

    deleteAulas(req,res){
        console.debug("DELETE :: /aulas")
        const id = parseInt(req.params.id)
        
        Aulas.deleteAulas(id)
        .then(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
        .catch(resposta => {
            res.status(resposta[0]).json(resposta[1])
        })
    }
    
}

module.exports = new AulasController()