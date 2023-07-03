// VAR -> 

//var altura = 5;
//var comprimento = 7;

// NÃO PRECISAMOS DECLARA A VARIAVEL AREAL POR CONTA DO NODE 

//area = altura * comprimento;
//console.log(area);

//console.log("");

// LET ->
//let forma = 'retangulo'

//let altura_let = 5;
//let comprimento_let = 7;

//let area;

//if (forma === 'retangulo'){
//    area_let = altura_let * comprimento_let;
//    console.log(area_let)
//} else {
//    area = (altura * comprimento) / 2;
//    console.log(area_let)
//}


// CONSTANTE

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'triangulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
