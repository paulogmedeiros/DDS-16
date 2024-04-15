atualizaHorario()
saudacaoHora()
carregarAulas()
carregarImagens()

//Criando um relogio
function atualizaHorario(){
    const relogio = document.getElementById("relogio")         
    const hoje = new Date();  
    
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();
    
    h = verificaTempo(h);
    m = verificaTempo(m);
    s = verificaTempo(s);

    relogio.innerHTML = h+":"+m+":"+s

    

    setTimeout(atualizaHorario, 1000);
}

//Adicionando o 0 em números menores que 10
function verificaTempo(t){
    if(t< 10){
        t = "0"+t.toString();
    }
    return t
}

function saudacaoHora(){
    const saudacao = document.getElementById("saudacao")
    const hoje = new Date();  
    let d = hoje.getDay();  
    let h = hoje.getHours();
    var textoDia;
    var textoApresentacao;

    switch(d){
        case 0:
            textoDia = "Domingo"
            break;
        case 1:
            textoDia = "Segunda-Feira"
            break;            
        case 2:
            textoDia = "Terça-Feira"
            break;
        case 3:
            textoDia = "Quarta-Feira"
            break;            
        case 4:
            textoDia = "Quinta-Feira"
            break;
        case 5:
            textoDia = "Sexta-Feira"
            break;            
        case 6:
            textoDia = "Sabado"
            break;
    }
    
    if(h > 6 && h <= 12){
        textoApresentacao = "Bom dia!!!"
    }
    else if(h <= 18 && h>12){
        textoApresentacao = "Boa tarde!!!"
    }
    else{
        textoApresentacao = "Boa noite!!!"
    }

    saudacao.innerHTML = textoDia + " - " + textoApresentacao;
}

function carregarAulas(){
    const aula = [
        {id:1,
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC DDS-3-16",
            instrutor:"Ramon Nascimento",
            uc:"Desenvolvimento Sistemas",
            ambiente:"LAB-5106"
        },
        {id:2,
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC DDS-2-16",
            instrutor:"Se quiser sim",
            uc:"JAVA",
            ambiente:"LAB-5105"
        },
        {id:3,
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC DDS-1-16",
            instrutor:"If want yes",
            uc:"Logica de Programação",
            ambiente:"LAB-5104"
        }
    ]

    const tabelaAulas = document.getElementById("aulas")
    let elementosTabela = ""

    for(let i = 0; i < aula.length; i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aula[i].inicio + '</td>'
        elementosTabela += '<td>' + aula[i].fim + '</td>'
        elementosTabela += '<td>' + aula[i].turma + '</td>'
        elementosTabela += '<td>' + aula[i].instrutor + '</td>'
        elementosTabela += '<td>' + aula[i].uc + '</td>'
        elementosTabela += '<td>' + aula[i].ambiente + '</td>'
        elementosTabela += '</tr>'
        
    }

    tabelaAulas.innerHTML += elementosTabela;
}

function carregarImagens(){
    const lateral = document.getElementById("lateral")
    
    const imagens =[
        {
            id:1,
            endereco:"img/02.jpg",
            alt: "300 vagas cursos"
        },
        {
            id:2,
            endereco:"img/FIC 2023 01082023 (3).png",
            alt: "cursos gratuitos"
        }        
    ]

    for(let i = 0; i < imagens.length; i++){
        let div = document.createElement('div')
        div.className = "imganun"
        let img = document.createElement('img')
        img.src = imagens[i].endereco
        img.alt = imagens[i].alt
        div.appendChild(img)
        lateral.appendChild(div)
    }
}