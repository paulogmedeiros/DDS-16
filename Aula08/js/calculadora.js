var diaData1 = document.getElementById('diaData1')
var mesData1 = document.getElementById('mesData1')
var anoData1 = document.getElementById('anoData1') 
var diaData2 = document.getElementById('diaData2')
var mesData2 = document.getElementById('mesData2')
var anoData2 = document.getElementById('anoData2') 
var labelAno = document.getElementById("ano")
var labelMes = document.getElementById("mes")
var labelDia = document.getElementById("dia")

function calcDiferenca(){
    var d1Dia = diaData1.value
    var d1Mes = mesData1.value
    var d1Ano = anoData1.value
    var data1 = new Date(d1Ano,d1Mes - 1,d1Dia)

    var d2Dia = diaData2.value
    var d2Mes = mesData2.value
    var d2Ano = anoData2.value
    var data2 = new Date(d2Ano,d2Mes - 1,d2Dia)

    var ano = Math.abs((data1 - data2)/1000/60/60/24/365)
    var mes = Math.floor(Math.abs((data1 - data2)/1000/60/60/24/30))
    

    if(ano >= 1){
        labelAno.innerHTML = Math.floor(ano)
        if(mes >= 1){
            labelMes.innerHTML = Math.floor(mes - 12*ano)
            // labelDia.innerHTML = Math.abs(((data1 - data2)/1000/60/60/24/30) - (365*ano) - (12*ano))
        }
    }
    console.log(mes)















    
    // if(Math.abs(d1Ano - d2Ano) > 1){
    //     labelAno.innerHTML = Math.abs((data1 - data2)/1000/60/60/24/365)
    //     if(Math.abs((data1 - data2)/1000/60/60/24/30) - labelAno.innerHTML  > 1){
    //         labelMes.innerHTML = Math.abs((data1 - data2)/1000/60/60/24/30 - (labelAno.innerHTML * 365)) 
    //         labelDia.innerHTML = Math.abs((data1 - data2)/1000/60/60/24 - (labelMes.innerHTML * 30))
    //     }
    // }
    // if(Math.abs(d1Mes - d2Mes) > 1){
    //     labelMes.innerHTML = Math.abs((data1 - data2)/1000/60/60/24/30)
    // }
    // labelDia.innerHTML = Math.abs((data1 - data2)/1000/60/60/24)
    
    // if((Math.abs((data1 - data2)/1000/60/60/24/365)> 1)){
    //     labelAno.innerHTML = Math.abs((data1 - data2)/1000/60/60/24/365)
    // }
    // if(Math.abs((data1 - data2)/1000/60/60/24/30)> 1){
    //     labelMes.innerHTML = Math.abs((data1 - data2)/1000/60/60/24/30)
    // }
    // labelDia.innerHTML = Math.abs((data1 - data2)/1000/60/60/24)

    // mes, ano, dia
}