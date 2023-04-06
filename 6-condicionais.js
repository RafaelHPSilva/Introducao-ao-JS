console.log('Condicionais')

// Não é boa pratica deixar códigos repetitivos, além de "poluir"  pode dificultar a programação e aumentar a probabilidade de erro. 
// ou: é representada por "||" e o e: por "&&"
// Sempre add outra condicional após a fechamento da "}". Exemplo: "}else", "}else if".


// const listaDeDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro')
// const idadeComprador = 17
// const pessoaAcompanhada = true

// console.log('Lista de Destinos Possíveis')
// if (idadeComprador >= 18) {
//   listaDeDestinos.splice(1, 1)
//   console.log(listaDeDestinos)
//   console.log('Passagem comprada com sucesso')
// } else if (pessoaAcompanhada) {
//   listaDeDestinos.splice(1, 1)
//   console.log(listaDeDestinos)
//   console.log('Passagem comprada com sucesso')
// } else {
//   console.log(listaDeDestinos)
//   console.log('Desculpe, não foi possível efetuar sua compra')
// }

const listaDeDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro')
const idadeComprador = 18
const pessoaAcompanhada = false
const passagemComprada = true

console.log('Lista de Destinos Possíveis')
if (idadeComprador >= 18 || pessoaAcompanhada) {
  listaDeDestinos.splice(1, 1)
  console.log(listaDeDestinos)
  console.log('Passagem comprada com sucesso')
} else {
  console.log(listaDeDestinos)
  console.log('Desculpe, não foi possível efetuar sua compra')
}
console.log('Embarque:')
if (
  (idadeComprador >= 18 && passagemComprada) ||
  (idadeComprador <= 18 && pessoaAcompanhada && passagemComprada)
) {
  console.log('Desejo ao senhor uma boa viagem e aproveite nossos serviços')
} else {
  console.log(
    'Infelizmente sem o acompanhante não podemos deixar o senhor embarcar'
  )
}
