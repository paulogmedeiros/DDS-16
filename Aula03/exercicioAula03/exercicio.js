
var valor = 12
var valorAtual = valor
var valorAnterior = valor - 1
var resultado

for(var i = 0; i<3 ; i++){
    resultado = valorAtual + valorAnterior
    valorAnterior = valorAtual
    valorAtual = resultado
    console.log(resultado)
}
