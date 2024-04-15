var peso = document.getElementById("peso")
var altura = document.getElementById("altura")
var labelResultado = document.getElementById("resultado")
var labelTexto = document.getElementById("texto")


function imc() {
    var n1 = parseFloat(peso.value)
    var n2 = parseFloat(altura.value)
    var resultado = n1 / (n2 * n2)

    if (resultado < 18.5) {
        labelResultado.innerHTML = resultado
        labelTexto.innerHTML = 'Abaixo do peso'
    } else if (resultado < 24.9) {
        labelResultado.innerHTML = resultado
        labelTexto.innerHTML = 'Peso ideal'
    } else if (resultado < 29.9) {
        labelResultado.innerHTML = resultado
        labelTexto.innerHTML = 'Levemente acima do peso'
    } else if (resultado < 34.9) {
        labelResultado.innerHTML = resultado
        labelTexto.innerHTML = 'Obesidade grau I'
    } else if (resultado < 39.9) {
        labelResultado.innerHTML = resultado
        labelTexto.innerHTML = 'Obesidade grau II'
    } else {
        labelResultado.innerHTML = resultado
        labelTexto.innerHTML = 'Morte por gula'
    }
}