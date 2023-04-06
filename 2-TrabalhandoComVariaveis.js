console.log('Trabalhando com Variaveis')
//JS é case sensitive, ou seja, alternancia entre uppercase e case há diferencia.

// Quando não definimos a variavel o código irá funcionar da mesma maneira, quando utilizamos a definimos qual tipo de variavel que desejamos, seja ela const ou let. A diferença é que ela irá para o escopo global, porém não é considerado uma boa prática.

//Para const tipo strings, sempre colocar aspas, senão o JS não entenderá

//Unicamente o sinal de soma tem um segnificado diferente de concatenação. Para os demais sinais se um ou ambos elementos não forem números o JS irá imprimir: NaN.

const idade = 29
const nome = 'Rafael'
const sobrenome = 'Silva'
let ano = 2020

console.log(nome + sobrenome)
