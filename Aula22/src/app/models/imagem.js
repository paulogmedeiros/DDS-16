const mysql = require("mysql2")
const dbConfig = require("../config")
//Diretorio do script sendo executado
const caminhoServer = require("path")
const { rejects } = require("assert")

class Imagem{
    ya
    
    mostrarTodos(){
        return new Promise((resolve, reject)=>{
            let sql = 'SELECT * FROM anuncios'
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

    inserir(arquivo, alternativo,nomeImagem){
        return new Promise ((resolve,reject)=>{
            let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE('${alternativo}','${nomeImagem}')`
            this.conexao.query(sql, function(error, retorno){
                if(error){
                    reject([400, error]) //error
                } 
                else{
                    arquivo.mv(caminhoServer + "/../../../public/img/" + nomeImagem)
                    resolve([201, "Inserido"])
                }
            })
        })    
    }

    update(nomeAlternativo, id){
        return new Promise ((resolve,reject)=>{
            let sql = `UPDATE anuncios SET alternativo = '${nomeAlternativo}', WHERE imagem_id = '${id}'`
            this.conexao.query(sql, function(error, retorno){
                if(error){
                    reject([400, error]) //error
                } 
                else{            
                    resolve([201, "Alternado com sucesso"])
                }
            })
        })    
    }

    delete(id){
        return new Promise ((resolve,reject)=>{
            let sql = `DELETE FROM anuncios WHERE imagem_id = ${id}`
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

//let testeImagem = new Imagem()
//testeImagem.inserir("alternativo2", "imagem2")
module.exports = new Imagem()