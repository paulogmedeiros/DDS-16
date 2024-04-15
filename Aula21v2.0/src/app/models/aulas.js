const mysql = require("mysql2")
const dbConfig = require("../config")
const { rejects } = require("assert")

class Aulas{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTodos(){
        return new Promise((resolve, reject)=>{
            let sql = 'SELECT * FROM aulas'
            this.conexao.query(sql, function(error, retorno){
                if(error){
                    reject([400, error]) //error
                } 
                else{
                    resolve([200, retorno])
                }
            })
        })
    }

    inserirAula(datas, horasIni, horasFim, turmas, instrutores, u_cs, ambientes, tipos, turnos, codigos, keyEntregue){
        return new Promise ((resolve,reject)=>{
            let sql = `INSERT INTO aulas (data, hora_inicio, hora_fim, turma, instrutor, unidade_curricular, ambiente, tipo, turno, cod_instrutor, chave_entregue) VALUE('${datas}','${horasIni}','${horasFim}','${turmas}','${instrutores}','${u_cs}','${ambientes}','${tipos}','${turnos}','${codigos}','${keyEntregue}')`
            this.conexao.query(sql, function(error, retorno){
                if(error){
                    reject([400, error]) //error
                } 
                else{
                    console.debug(keyEntregue)
                    resolve([201, keyEntregue])
                }
            })
        })    
    }

    update(datas, horasIni, horasFim, turmas, instrutores, u_cs, ambientes, tipos, turnos, codigos, keyEntregue, id){
        return new Promise ((resolve,reject)=>{
            let sql = `UPDATE aulas SET data = '${datas}', hora_inicio = '${horasIni}', hora_fim = '${horasFim}', turma = '${turmas}', instrutor = '${instrutores}', unidade_curricular = '${u_cs}', ambiente = '${ambientes}', tipo = '${tipos}', turno = '${turnos}', cod_instrutor = '${codigos}', chave_entregue = '${keyEntregue}' WHERE aula_id = '${id}'`
            this.conexao.query(sql, function(error, retorno){
                if(error){
                    reject([400, error]) //error
                } 
                else{            
                    resolve([201, retorno])
                }
            })
        })    
    }

    delete(id){
        return new Promise ((resolve,reject)=>{
            let sql = `DELETE FROM aulas WHERE aula_id = ${id}`
            this.conexao.query(sql, function(error, retorno){
                if(error){
                    reject([400, error]) //error
                } 
                else{
                    resolve([201, "Deletado com sucesso"])
                }
            })
        })
    }
}

module.exports = new Aulas()