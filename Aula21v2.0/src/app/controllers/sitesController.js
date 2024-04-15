let sites = [
    {id:1, name:"YOUTUBE", site:"https://www.youtube.com/"},
    {id:2, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:3, name:"TINKERCAD", site:"https://www.tinkercad.com/"}
]

class SitesController{
    //Mostra a lista de sites
    index(req,res){
        console.debug("GET :: /sites")
        return res.json(sites)
    }
    //Mostrar um elemento da lista
    show(req,res){
        const id = parseInt(req.params.id)
        const site = sites.find(function(sites){
            return sites.id === id
        })

        const status = site ? 200:404 //Operador 

        console.log(site)
        return res.status(status).json(site)
    }
    //inserir um elemento na lista
    create(req,res){
        const {name,site} = req.body
        const id = sites[sites.length-1].id+1
        const newSite = {id:id,name:name,site:site}

        sites.push(newSite)

        return res.status(201).json(newSite)
    }
    //Atualizar um registro
    update(req,res){
        const id = parseInt(req.params.id)
        const{name, site} = req.body
        const index = sites.findIndex(function(sites){
            return sites.id === id
        })

        const status = index >= 0 ? 200:400

        if(index >= 0){
            sites[index] = {id, name, site}
        }

        return res.status(status).json(sites[index])
    }
    //Deletando um registro
    destroy(req,res){
        const id = parseInt(req.params.id)
        const index = sites.findIndex(function(sites){
            return sites.id === id
        })
        const status = index >= 0 ? 200:404
        if(index >= 0){
            sites.splice(index, 1);
        }
        return res.status(status).json()
    }
}

module.exports = new SitesController()