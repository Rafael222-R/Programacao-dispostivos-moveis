// console.log ('test')


/*
comentario 
em 
bloco
*/

// Variaveis
const nome = 'Rafael Dias'
let idade = 17
const maiorDeIdade= true

console.log(nome);
console.log(idade);
console.log("É maior de Idade?" , maiorDeIdade)


//Operadores Aritmeticos

const soma = 2 + 2 
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 4 / 2

console.log (soma)
console.log (subtracao)
console.log (multiplicacao)
console.log (divisao)


const resto = 3 % 2
let numero = 4 
console.log ("RESTO ->", resto)

const incremento = numero++ // + 1
console.log ("INCREMENTO ->", incremento)

const decremento = numero-- // - 1
console.log("DECREMENTO -> ", decremento)

let a = 3 

a %= 2

console.log(a)

// Operadores de Comparação

const igual = 10 == '10'
console.log(igual)
const estritamenteIgual = 10 === '10'
console.log(estritamenteIgual)

const maior = 3 > 2 // true
console.log(maior)
const menor = 2 < 3 // false
console.log(menor)
const maiorOuIgual = 3 >= 2 //true
console.log(maiorDeIdade)
const menorOuIgual = 2 <= 3 //false
console.log(menorOuIgual)


// ESTRUTURAS DE CONTROLE

if (idade >= 18){
    console.log("Maior de Idade")
} 

if(idade >= 18){
    console.log("Maior de Idade ")
}else {
    console.log("Menor de Idade ")
}

if(idade >= 18){
    console.log("Maior de Idade ")
}else if( idade < 18) {
    console.log("Menor de Idade ")
}else {
    console.log("valor invalido")
}

// Operador ternario

const checkMaiorDeIdade = idade >= 18 ? 'Maior de Idade!!!' : "Menor de Idade!!!"
console.log(checkMaiorDeIdade)


// Arrays
 
let frutas = ["Maçã", "Banana", "Uva"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[5])
console.log(frutas.length)

frutas.push("Laranja")

frutas.forEach((fruta) => {
  console.log(fruta)
})

frutas.pop()
console.log(frutas)

// Objetos
let pessoa = {
  nome: "Gustavo",
  idade: 30,
  altura: 170,
  peso: 80
}
// Adiciona um novo atributo (propriedade) ao objeto
pessoa.email = "gustavo@g.com"
console.log(pessoa)
// Remove um atributo
delete pessoa.email;
console.log(pessoa)

// Desestruturar o objeto pessoa
let { altura, peso } = pessoa
console.log(altura)
console.log(peso)

// Propagação de objetos
let endereco = {
  cidade: "Ceilândia",
  uf: "DF"
}

let pessoaCompleto = { ...pessoa, ...endereco }
console.log(pessoaCompleto)

// Função
function somar(numA, numB) {
  return numA + numB
}
console.log(somar(2, 2))
console.log(somar(10, 2))
console.log(somar(5, 5))

function saudacao(nome) {
  console.log("Olá " + nome)
}
saudacao("Gustavo")

// Função anônima
let subtrair = function (numA, numB) {
  return numA - numB
}
console.log(subtrair(4, 2))

// Arrow function
let multiplicar = (numA, numB) => numA * numB
console.log(multiplicar(2, 10))
