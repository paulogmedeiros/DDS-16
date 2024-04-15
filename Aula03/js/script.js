// function fatorial(numb) {
//     var aux = numb
//     var resultado = numb;

//     for (var i = 0; i < numb; i++) {
//         aux = aux - 1;
//         if (aux !== 0) {
//             resultado = resultado * aux
//         }

//     }
//     return resultado;
// }
// console.log(fatorial(10))

var x //declação de variavel
x = 0 //atribuição de variavel
x     // x vale 0

//JavaScript aceita varios tipos de valores
x = 1            // Número
x = 1.01         // Apena um tipo Number para inteiros e reais
x = "hello word" // String de texto entre aspas
x = 'JavaScript' // Apóstrofos tambem delimitam string
x = true         // Valor booleano
x = false        // Outro valor booleano
x = null         // Null é um valor especial que significa "nenhum valor" 
x = undefined    // Underfined é como null

var livro = {             // Objetos são colocados entre chaves
    topico:"JavaScript",  // A propriedade "topico" tem valor "JavaScript"
    avaliativo: true      // A propriedade "avaliativo" tem o vlaor "true"
}                         // A chave marca o fim do objeto

// Ac propriedade pode ser acessada com . ou []
console.log(livro.topico)           // Acessando propriedade via .
console.log(livro["avaliativo"])    // Acessando propriedade via []
livro.autor = "Julio"               // Acrescentando propriedade autor
livro.assuntos = {}                 // {} é um objeto vazio sem qualquer propriedade

//JavaScript também aceita arrays (lista indexadas numericamente) de valores
var primos = [2,3,5,7]              //Um array de 4 valores

console.log(primos)

console.log(primos[0])               // chamndo posição inicial

console.log(primos.length)          // Chamadno o tamanho do array

console.log(primos[primos.length - 1]) // Chamando a ultima posição

primos[4] = 9             // Adiciona um novo elemento
primos[4] = 11            // Alterando um elemento

var empty = []            // Criando array vazio

// Os array e objetos podem conter outros arrays e objetos
var coordenads = [         // Um array com 2 elementos
    {x:0, y:8},            // Cada elemtendo é um objeto
    {x:1, y:1}
]

var data =  {               // Objeto com 2 propriedades
    triali:[[1,2],[3,4]],   // O valor de cada propriedade é um array
    triali1:[[2,3],[4,5]],  // Os elementos dos arrays são arrays
}

