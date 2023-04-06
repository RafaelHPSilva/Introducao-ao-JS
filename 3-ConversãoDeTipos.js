console.log('Conversao de tipos')

//unicamente o sinal de soma tem um segnificado diferente, o de concatenação. Para os demais sinais irão funcionar normalmente se  ambas strings forem de números, pq o JS irá transforma-las em numeros automaticamente, se uma for do tipo texto o JS imprimirá: NaN = Not a Number(pq n se tratará de um número)

//Para conversão de strings para números para o seguinte caso: "2"+"2", utilizamos a funçao parseInt

//parseInt: O JS irá forçar a conversão para um número inteiro. No caso de um quebrado será usado "float" inves de "int"

//Para escrevermos números quebrados devemos utilizar "."

console.log('2' + '2')
console.log('7' / '2')
console.log('ferrou' / '2')
console.log(parseInt('2') + parseInt('2'))
console.log('7.5' / '2')
