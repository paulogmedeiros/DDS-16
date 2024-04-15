const aulas = require("../models/aulas")
const Aula = require("../models/aulas")

class AulasController{
    index(req,res){
        console.debug("GET :: /aulass")
        Aula.mostrarTodos().then(
            respostas =>{
            res.status(respostas[0]).json(respostas[1])
        }).catch(
            respostas =>{
            res.status(respostas[0]).json("Erro:"+respostas[1].errno)
        })
    }
    
    create(req, res){
        let datas = req.body.datas
        let horasIn = req.body.horasIni
        let horasFi = req.body.horasFim
        let turma = req.body.turmas
        let instrutor = req.body.instrutores
        let uc = req.body.u_cs
        let ambientee = req.body.ambientes
        let tipo = req.body.tipos
        let turno = req.body.turnos
        let codigo_inst = req.body.codigos
        let chave_entre = req.body.keyEntregue

        if(chave_entre == "on"){
            chave_entre = 1
        }
        else{
            chave_entre = 0
        }

        Aula.inserirAula(datas, horasIn, horasFi, turma, instrutor, uc, ambientee, tipo, turno, codigo_inst, chave_entre).then(
            respostas=>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch()
            respostas=>{
                res.status(respostas[0]).json("Erro:"+respostas[1].errno)
        }
    }

    updatesAulas(req, res){
        let datas = req.body.datas
        let horasIn = req.body.horasIni
        let horasFi = req.body.horasFim
        let turma = req.body.turmas
        let instrutor = req.body.instrutores
        let uc = req.body.u_cs
        let ambientee = req.body.ambientes
        let tipo = req.body.tipos
        let turno = req.body.turnos
        let codigo_inst = req.body.codigos
        let chave_entre = req.body.keyEntregue
        const id = parseInt(req.params.id)

        Aula.update(datas, horasIn, horasFi, turma, instrutor, uc, ambientee, tipo, turno, codigo_inst, chave_entre, id).then(
            respostas=>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch(
            respostas=>{
                res.status(respostas[0]).json("Erro:"+respostas[1])
        })
    }

    deleteAulas(req, res){        
        const id = parseInt(req.params.id)
        aulas.delete(id).then(
            respostas=>{
                res.status(respostas[0]).json(respostas[1])
            }
        ).catch()
            respostas=>{
                res.status(respostas[0]).json("Erro:"+respostas[1].errno)
        }
    }
}

module.exports = new AulasController()