const mysql = require("mysql2")
const dbConfig = require("../config")
//Diretorio do script sendo executado
const caminhoServer = require("path")
const { rejects } = require("assert")

class Imagem {

    constructor() {
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    mostrarTodos() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM anuncios`
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else {
                    resolve([200, retorno])
                }
            })
        })
    }

    inserir(arquivo, alternativo, nomeImagem) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE('${alternativo}','${nomeImagem}')`
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) reject([400, erro])
                arquivo.mv(caminhoServer + "/../public/img/" + nomeImagem)
                // arquivo.mv(__dirname + "/../public/img/"+nomeImagem)
                resolve([201, "Inserido"])
            })
        })

    }

    update(nomeAlternativo, id) {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE anuncios SET alternativo = "${nomeAlternativo}" WHERE imagem_id = ${id}`
            this.conexao.query(sql, (erro, retorno) => {

                if (erro) {
                    reject([400, erro])
                } else {
                    resolve([201, "Alterado com sucesso"])
                }
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE  FROM anuncios WHERE imagem_id = ${id}`
            this.conexao.query(sql, (erro, retorno) => {

                if (erro) {
                    reject([400, erro])
                } else {
                    resolve([201, "Deletado com sucesso"])
                }
            })
        }) 
    }
}

module.exports = new Imagem()