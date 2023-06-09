const text = 'Ola mundo !';

const senha = 'superSegura0123!*';

const stringNmr = "321456"

const citacao = 'Meu nome é ';
const nome = 'Guilherme';

console.log("");
console.log("Variaveis Strings");
console.log("");
console.log(text);
console.log(senha);
console.log(stringNmr);
console.log(citacao);

//CONCATENAÇÃO

console.log("");
console.log("Concatenação");
console.log("");
console.log(citacao + nome);

// CARACTERES 
//\u caracteres de escape -> Estamos utilizando unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log("");
console.log("Caracteres Especiais");
console.log("");
console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// COMPARANDO STRING 

console.log("");
const estado = "sao paulo";
const Estado_M = "Sao Paulo";

console.log(estado === Estado_M);

// TAMANHO DE UMA STRING 
console.log("");
console.log("Tamanho string");
const senha_1 = "senha"
console.log(senha_1.length);


//TEMPLATE STRING OU TEMPLATE LITERAL ->?