console.log('Listas')

// Para uma variavel para uma lista devemos dar a atribuição de: new array.
// 'new' é uma palavra reservada da linguagem, nao dá pra criar variavel com new.

const listaDeDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro')
listaDeDestinos.push('Curitiba')
console.log(listaDeDestinos)

//Se colocado após console.log  nao irá funcionar
listaDeDestinos.push('Curitiba')
console.log(listaDeDestinos)

//Para imprimir o item desejado:
console.log(listaDeDestinos[1], listaDeDestinos[2])

//Para remover uma variavel:
// todos os console.logs abaixo estarão sem Sao paulo
listaDeDestinos.splice(1, 1)
console.log(listaDeDestinos)

console.log(listaDeDestinos)
