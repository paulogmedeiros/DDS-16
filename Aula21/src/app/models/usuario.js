const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require("bcryptjs")

class Usuario{

    constructor() {
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    inserir(data){
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(data.senha,salt)
        return new Promise((resolve, reject)=>{
            const sql = `INSERT INTO usuarios (nome,usuario,senha,usuario_tipo) 
            VALUE("${data.nome}","${data.usuario}","${hash}","${data.usuario_tipo}")`
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }else{
                    resolve([201,'Usuário Inserido'])
                }
            })
        })
    }
}

module.exports = new Usuario()