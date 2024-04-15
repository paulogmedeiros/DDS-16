var palavra = "Olá Júlio o (/n) pula linha programador \"Front End\" da (/t) tabe DDS 3-16" // o contrabarra \ é usado para escapar caracter
var palavra = 'Olá Júlio o programador "Front End" da DDS 3-16'
var uc = 'PROJETO INTEGRADOR III: GRAND PRIX'
var abreviado = uc.charAt(0)          // O primeiro caractere
abreviado = uc.charAt(uc.length -1)   // Pegando o ultimo elemento
abreviado = uc.substring(1,3)         // Pegando intervalor da string
abreviado = uc.substring(18)          // Pegando a partir de determinado ponto
abreviado = uc.slice(0,4)             // Funciona semelhante ao substring porem pego com valores negativos
abreviado = uc.slice(-10)             // Pegando os ultimos 10 caracteres
abreviado = uc.indexOf('II')          // Buncando o index de um termo
abreviado = uc.split(" ")             // Tranforma em array a parti do termo
var abreviado2 = abreviado[0].slice(0,4) + '. ' + abreviado[abreviado.length - 1]
abreviado = uc.replace('PROJETO','trabalho')  //Substitui
abreviado = abreviado.toUpperCase()           //Transforma tudo em maiusculo
abreviado = abreviado.toLocaleLowerCase()     //Transforma tudo em minusculo
console.log(abreviado)













//Criando uma função para resumir
function resumo(arrayAula){
    arrayAula = arrayAula.split(" ")
    arrayAula = arrayAula[0].substring(0,4)+". "+arrayAula[arrayAula.length-1]
    return arrayAula
}