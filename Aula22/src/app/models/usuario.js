const mysql = require("mysql2")
const dbConfig = require("../config")
const bcrypt = require("bcryptjs") 

class Usuario{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTudo(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM usuarios"
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,retorno])
                }
            })
        })
    }   

    mostrarUsuario(usuario_id){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM usuarios WHERE usuario_id = '${usuario_id}'`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    if(retorno.length === 0){
                        resolve([404,"Usuário não encontrado"])
                    }else{
                        resolve([200,retorno])
                    }                       
                }
            })
        })
    }

    Inserir(nome, usuario, senha, usuario_tipo){
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(senha, salt)
        return new Promise((resolve, reject)=>{
            let sql = `INSERT INTO usuarios (nome, usuario, senha, usuario_tipo) 
            VALUE ('${nome}','${usuario}','${hash}','${usuario_tipo}')`
            this.conexao.query(sql,function(error,retorno){
                if(error){
                    reject([400,error])
                }else{
                    resolve([201,'Usuário Inserido'])
                }
            })
        })
    }

    verificaUsuarioSenha(usuario, senha){
        return new Promise((resolve, reject)=>{
            let sql = `SELECT * FROM usuarios WHERE usuario = '${usuario}'`
            this.conexao.query(sql,function(error,retorno){

                if(error){
                    reject([400,error])
                }else{
                    if(retorno.length === 0){
                        resolve([401,'Usuário ou senha incorreta'])
                    }else{                        
                        let hash = retorno[0].senha;
                        let logado = bcrypt.compareSync(senha, hash);
                        if(logado){
                            let {usuario_id,usuario_tipo} = retorno[0]
                            resolve([200,'Logado',usuario_id,usuario_tipo])
                        }
                        else{
                            resolve([401,'Usuário ou senha incorreta'])
                        }
                    }
                }
            })
        })
    }
}

module.exports = new Usuario()