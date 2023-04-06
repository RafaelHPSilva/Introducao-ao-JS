console.log('loops')

const listaDeDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro')
const idadeComprador = 18
const pessoaAcompanhada = false
let passagemComprada = false // com a  var let , o comprador atingir os requisitos a variavel poderá mudar para true.
const destino = 'Sao Paulo'

// console.log('Lista de Destinos Possíveis')
// if (idadeComprador >= 18 || pessoaAcompanhada == true) {
//   listaDeDestinos.splice(1, 1)
//   console.log(listaDeDestinos)
//   console.log('Passagem comprada com sucesso')
//   passagemComprada = true // Como os requisitos estão de acordo, a passagemComprada passará a ser true.
// } else {
//   console.log(listaDeDestinos)
//   console.log('Desculpe, não foi possível efetuar sua compra')
//   passagemComprada == false // Caso o comprador n atingir os requisitos, a var vai para false
// }
// console.log('Embarque:')
// if (
//   // Aqui o programar vai ler se as variáveis vai estar no "false" ou no "true" e vai imprimir já o resultado
//   (idadeComprador >= 18 && passagemComprada) ||
//   (idadeComprador <= 18 && pessoaAcompanhada && passagemComprada)
// ) {
//   console.log('Desejo ao senhor uma boa viagem e aproveite nossos serviços')
// } else {
//   console.log(
//     'Infelizmente sem o acompanhante não podemos deixar o senhor embarcar'
//     )
//   }

//FUNÇAO WHILE

// const podeComprar = idadeComprador >= 18 || pessoaAcompanhada == true
// console.log('Lista de Destinos Possíveis')
// console.log(listaDeDestinos)
// let contador = 0
// while (contador < 3) {
//   if (listaDeDestinos[contador] == destino)  { //buscará  o destino na posicao da lista e se tiver algum destino igual o destino irá imprimir a string
//     console.log('destino existe')
//   } else {
//     console.log('destino n existe')
//   }

//   contador += 1 // atribuindo novo valor na variavel
// }

// ADICIONANDO O BREAK
const podeComprar = idadeComprador >= 18 || pessoaAcompanhada == true
let destinoExiste = false

console.log('\n Lista de Destinos Possíveis')
console.log(listaDeDestinos)
let contador = 0
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    //buscará  o destino na posicao da lista e se tiver algum destino correspondente irá e interromper a busca.
    destinoExiste = true
    break
  }
  contador += 1 // atribuindo novo valor na variavel
}
console.log('\n Destino existe: ', destinoExiste) // Aqui irá imprimir a string e o valor da let como "true", caso encontre o ddestino na lista.
if (podeComprar && destinoExiste == true) {
  console.log(
    'Desejamos ao senhor uma boa viagem e que desfrute sua estadia em seu destino'
  )
} else {
  console.log('\n \n Infelizmente tivemos um erro!')
}

//ADD O FOR
for (let contador = 0; contador < 3; contador += 1) {
  //  var de iniciaçao ; condiçao ;  comando para finalizar o loop
  if (listaDeDestinos[contador] == destino) {
    //buscará  o destino na posicao da lista e se tiver algum destino correspondente irá e interromper a busca.
    destinoExiste = true
    break
  }
}
