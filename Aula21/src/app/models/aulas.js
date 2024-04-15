const mysql = require("mysql2")
const dbConfig = require("../config")

class Aulas {

    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    insertAulas(data){
        return new Promise((resolve,reject) => {
            let sql = `INSERT INTO aulas (data,hora_inicio,hora_fim,turma,instrutor,unidade_curricular,ambiente,tipo,turno,cod_instrutor,chave_entregue) VALUE 
            ('${data.data}','${data.horaInicio}','${data.horaTermino}','${data.turma}','${data.instrutor}','${data.unidadeCurricular}','${data.ambiente}','${data.tipo}',
            '${data.turno}','${data.codigoInstrutor}','${data.chaveEntregue}')`

            this.conexao.query(sql,(erro,retorno) => {
                if(erro){
                    reject([400,erro])
                }
                resolve([201,"Inserido"])
            })
        })
    }

    selectAulas(){
        return new Promise((resolve,reject) => {
            let sql = `SELECT * FROM aulas`
            this.conexao.query(sql,(erro,retorno) => {
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        })
    }

    updateAulas(data,id){
        return new Promise((resolve,reject) => {
            let sql = `UPDATE aulas SET data = "${data.data}", hora_inicio = "${data.horaInicio}",hora_fim = "${data.horaTermino}",turma = "${data.turma}",instrutor = "${data.instrutor}",
            unidade_curricular = "${data.unidadeCurricular}",ambiente = "${data.ambiente}",tipo = "${data.tipo}",turno = "${data.turno}",cod_instrutor = "${data.codigoInstrutor}",chave_entregue = "${data.chaveEntregue}" WHERE aula_id = ${id}`
            this.conexao.query(sql,(erro,retorno) => {
                if(erro){
                    reject([400,erro])
                }
                resolve([200,'Atualizado com sucesso!!'])
            })
        })
    }

    deleteAulas(id){
        return new Promise((resolve,reject) => {
            let sql = `DELETE FROM aulas WHERE aula_id = ${id}`

            this.conexao.query(sql,(erro,retorno) => {
                if(erro){
                    reject([400,erro])
                }
                resolve([200,'Deletado com sucesso!!'])
            })
        })
    } 

}
module.exports = new Aulas()