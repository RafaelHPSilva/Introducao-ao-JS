console.log('AtribuiçãoImutabilidade')
// Há três maneiras de ser feita a concatenação entre os elementos que são elas:

//elemento(A )+ elemento(B) (Irá imprimir a concatenar  os elementos s/ espaço entre eles)

//elemento(A )+ " " + elemento(B) (Irá imprimir a concatenar  os elementos c/ espaço entre eles)

//elemento(A ), elemento(B) (Irá imprimir a concatenar  os elementos c/ espaço entre eles)
//===================================================================================

//Além da concatenação há a interpolação de variáveis ao add ${variavelDesejada}

//===================================================================================

// Devemos ser objetivos e claros na momento de criar as variaveis do nosso programa, para que haja o quanto menos a reatribuiçao dos valores das variaveis.

// Apenas as varaiaveis do tpo 'let' e "var" que podem sofrerem alteraçoes.


const idade = 29
const nome = 'Rafael'
const sobrenome = 'Silva'
let ano = 2020

console.log('Rafael', 'Silva', 'Sua idade é de: ${idade}')

//declaraçao de var
const nomeCompleto
let ano

//atribuiçao de var
ano = 2021
nomeCompleto = 'Zé Ruela'

//Declaraçao/atribuiçao
const idade = 29