
atualizaHorario()
atualizandoSaudacao()
carregarAulas()

function atualizandoSaudacao(){
    const saudacao = document.getElementById('saudacao');
    const hoje = new Date();
    const hora = hoje.getHours();
    const day = hoje.getDay();
    let saudacao1 ;
    let diaSemana;
    
    if(hora>=6 && hora<=12){
        saudacao1 = 'Bom dia !!!!'
    } else if(hora<=18 && hora>12){
        saudacao1 = 'Bom tarde !!!!'
    }else{
        saudacao1 = 'Boa noite !!!!'
    }

    switch (day){
        case 0:
            diaSemana =  'Domingo'
            break;
        case 1:
            diaSemana =  'Segunda-Feira'
            break;
        case 2:
            diaSemana =  'Terça-Feira'
            break;
        case 3:
            diaSemana =  'Quanta-Feira'
            break;
        case 4:
            diaSemana =  'Quinta-Feira'
            break;
        case 5:
            diaSemana =  'Sexta-Fera'
            break;
        case 6:
            diaSemana =  'Sábado'
            break;
    }
    saudacao.innerHTML = diaSemana + " - " + saudacao1
    setTimeout(atualizandoSaudacao,1000)
}

function carregarAulas(){
    const aula = [
        {   id:1,
            inicio:'13:30',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'Ramon Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:20',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'Pietra Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:30',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'Ramon Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:20',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'Pietra Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        },
        {   id:1,
            inicio:'13:10',
            fim:'17:30',
            turma:'HTC DDS-3-16',
            instrutor:'jTable Nascimento',
            uc:'Desenvolvimento Sistemas',
            ambiente:'LAB-5106'
        }
    ]

    const tabelaAulas = document.getElementById('tabelasAulas')
    let elementosTabela = ''
    for(let i = 0; i< aula.length;i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aula[i].inicio + '</td>'
        elementosTabela += '<td>' + aula[i].fim + '</td>'
        elementosTabela += '<td>' + aula[i].turma + '</td>'
        elementosTabela += '<td>' + aula[i].instrutor + '</td>'
        elementosTabela += '<td>' + aula[i].uc + '</td>'
        elementosTabela += '<td>' + aula[i].ambiente + '</td>'
        elementosTabela += '</tr>'
    }
    tabelaAulas.innerHTML += elementosTabela
}

//Criando Relogio
function atualizaHorario(){

    const relogio = document.getElementById('relogio');
    const hoje = new Date();

    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();

    h = verificaTempo(h)
    m = verificaTempo(m)
    s = verificaTempo(s)

    relogio.innerHTML = h + ":" + m + ":" + s;

    setTimeout(atualizaHorario,1000)
}


//adicionando o 0 em numeros menores
function verificaTempo(t){
    if(t < 10){
        t = "0" + t
    }
    return t
}