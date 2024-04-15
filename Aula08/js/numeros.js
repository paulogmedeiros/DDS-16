//Objeto Math
var resultado

resultado = Math.pow(2,53)        // 2 elevado á 53
resultado = Math.round(0.6)       // Arredonda para o inteiro mais próximo
resultado = Math.floor(0.5)       // Arredonda para o inteiro mais baixo
resultado = Math.ceil(0.6)        // Arredonda para um inteiro acima
resultado = Math.abs(-2.8)        // Retorna o valor sempre positivo o absoluto
resultado = Math.max(99,88,8,54)  // Retorna o maior valor 
resultado = Math.min(99,88,8,54)  // Retorna o menor valor
resultado = Math.PI               // Número PI 
resultado = Math.sqrt(3)          // Raiz quadrada

// console.log(resultado)

// Data e hora
var antes = new Date(2020 , 0 , 1)          // O 1° dia do 1° mês de 2020 ---------- o mes começa em 0 e o dia em 1
var depois = new Date(2020, 0,1,17,10,30)   // Mesmo dia, as 17:10:30 da tarde

var agora = new Date()                      // Pega a data atual
var duração = depois - antes                
console.log(duração/1000/60/60)            // o valor vem em milisegundos, caso queira transformar em segundo divida 1000, se quiser por minuto, dividi o resultado por 60, e se for pra horas divide por mais 60

var elemento = depois.getFullYear()        // Pegando o ano 
elemento = depois.getMonth()               // Pegando o mês
elemento = depois.getDay()                 // Pegando  o dia da semana do dia começando em 0
elemento = depois.getDate()                // pegando o dia do mês
elemento = depois.getHours()               // Pegando a Hora
elemento = depois.getUTCHours()            // Pega o valor em formato UTC (+3 usando o de brasilia)
elemento = depois.toString()               // Exibindo como String
elemento = depois.toLocaleDateString()     // Data padão
console.log(elemento)       